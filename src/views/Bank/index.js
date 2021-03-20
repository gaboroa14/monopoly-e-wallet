import Logo from "../../components/Logo";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import PlayerGroup from "../../components/PlayerGroup";
import BottomButtons from "../../components/BottomButtons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faHourglassEnd,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import config from "../../config";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";

let socket;

const Bank = () => {
  const [isLoading, setIsLoading] = useState(true);
  let history = useHistory();

  let user = JSON.parse(localStorage.getItem("user"));

  if (!user) history.push("/monopoly-e-wallet/");
  else if (user.avatar !== "bank") history.push("/monopoly-e-wallet/game");

  const [users, setUsers] = useState([]);

  // CONEXIÓN CON EL BACKEND
  useEffect(() => {
    socket = io(config.ENDPOINT);
    const u = JSON.parse(localStorage.getItem("user"));
    socket.emit(
      "join",
      { username: u.username, room_id: u.room._id },
      ({ error, user, quantity }) => {
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
        }
      }
    );
    return () => {
      //socket.emit("disconnect");
      socket.off();
    };
  }, []);

  // ESCUCHAR LAS TRANSACCIONES
  useEffect(() => {
    socket.on("transaction", (res) => {
      toast.dark(
        `${res.username} le ha enviado ₩${res.amount} a ${res.to_user}`
      );
    });
  }, []);

  // ESCUCHAR LAS BANCARROTAS DE CARGA
  useEffect(() => {
    socket.on("bankrupted", (person) => {
      toast.error(`¡${person} ha quebrado!`);
    });
  }, []);

  // ESCUCHAR SI ALGUIEN GANÓ
  useEffect(() => {
    socket.on("winner-player", (response) => {
      history.push(`/monopoly-e-wallet/winner/${response.username}`);
    });
  }, []);

  // ESCUCHAR SI RECHAZAN LA SOLICITUD DE FINALIZAR PARTIDA
  useEffect(() => {
    socket.on("reject-request", (qty) => {
      Swal.close();
      toast.warn("¡Se ha rechazado la solicitud de finalizar la partida!");
    });
  }, []);

  const pedirUsuarios = () => {
    socket.emit("get-users", user?.room._id, (response) => {
      if (!response) {
        localStorage.removeItem("user");
        history.push("/monopoly-e-wallet/");
        toast.info("¡Esta partida ha finalizado!");
        return;
      }
      response = response.map((item) => {
        return {
          username: item.username,
          avatar: item.avatar,
          amount: item.amount,
          action: () => showBankerOptions(item.username),
        };
      });
      setUsers(response);
      setIsLoading(false);
    });
  };

  // OBTENIENDO USUARIOS POR PRIMERA VEZ
  useEffect(() => {
    pedirUsuarios();
  }, []);

  // ESCUCHAR LAS ACTUALIZACIONES EN LOS USUARIOS
  useEffect(() => {
    socket.on("users-list", (response) => {
      console.log(response);
      response = response.map((item) => {
        return {
          username: item.username,
          avatar: item.avatar,
          amount: item.amount,
          action:
            item.amount !== 0
              ? () => showBankerOptions(item.username)
              : () =>
                  Swal.fire({
                    title: "¡Este jugador está quebrado!",
                    confirmButtonText: "Chale",
                    confirmButtonColor: "#71945B",
                  }),
        };
      });
      setUsers(response);
    });
  }, []);

  const showBankerOptions = (user) => {
    Swal.fire({
      title: "¿Que quieres hacer?",
      showCloseButton: true,
      showDenyButton: true,
      showCancelButton: true,
      denyButtonColor: "#B85B28",
      confirmButtonText: `Pass Go`,
      denyButtonText: `Pagar o Cobrar`,
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        socket.emit("send-transaction", {
          user_id: JSON.parse(localStorage.getItem("user"))._id,
          amount: 200,
          room_id: JSON.parse(localStorage.getItem("user")).room._id,
          to_user: user,
        });
        Swal.fire({
          title: `Pass Go enviado a ${user}`,
          confirmButtonColor: "#71945B",
          confirmButtonText: "Aceptar",
        });
        pedirUsuarios();
      } else if (result.isDenied) {
        Swal.fire({
          title: "Elija una opción.",
          showCloseButton: true,
          showCancelButton: true,
          denyButtonColor: "#B85B28",
          confirmButtonText: `Pagar`,
          denyButtonText: `Cobrar`,
          cancelButtonText: "Cancelar",
        }).then((result) => {
          if (result.isConfirmed) handleSendingMoney(user);
          if (result.isDenied) handleWithdrawingMoney(user);

        });
      }
    });
  };

  const handleWithdrawingMoney = (user) => {
    history.push(`/monopoly-e-wallet/withdraw/${user}`);
  };

  const handleSendingMoney = (user) => {
    history.push(`/monopoly-e-wallet/send/${user}/t`);
  };

  const handleHistoryClick = () => {
    history.push("/monopoly-e-wallet/history/");
  };

  const handleFinishGameClick = () => {
    Swal.fire({
      title: "¿Estás seguro de que quieres finalizar?",
      confirmButtonColor: "#71945B",
      confirmButtonText: "Sí",
      cancelButtonColor: "#B85B28",
      cancelButtonText: "No",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        socket.emit("end-game", user.room._id, true);
        Swal.fire({
          title: "Esperando confirmación.",
          showConfirmButton: false,
          showCancelButton: false,
        });
        Swal.showLoading();
      }
    });
  };

  const buttons = {
    leftButton: {
      text: <FontAwesomeIcon icon={faAddressBook} />,
      action: handleHistoryClick,
    },
    rightButton: {
      text: <FontAwesomeIcon icon={faHourglassEnd} />,
      action: handleFinishGameClick,
    },
  };
  return (
    <section className="section is-centered">
      <div className="container">
        <Logo />
        <Spinner isLoading={isLoading} />
        <div style={{ visibility: isLoading ? "hidden" : "visible" }}>
          <PlayerGroup players={users} />
          <BottomButtons {...buttons} />
        </div>
      </div>
    </section>
  );
};
export default Bank;
