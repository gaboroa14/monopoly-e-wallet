import Logo from "../../components/Logo";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import PlayerGroup from "../../components/PlayerGroup";
import BottomButtons from "../../components/BottomButtons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faHourglassEnd,
  faAirFreshener,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import config from "../../config";
import Button from "../../components/Button";
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
      toast.dark(`¡${person} ha quebrado!`);
    });
  }, []);

  // ESCUCHAR SI ALGUIEN GANÓ
  useEffect(() => {
    socket.on("winner-player", (response) => {
      history.push(`/monopoly-e-wallet/winner/${response.username}`);
    });
  }, []);

  const pedirUsuarios = () => {
    socket.emit("get-users", user?.room._id, (response) => {
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
      denyButtonText: `Cobrar`,
      cancelButtonText: "Pagar",
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
        handleWithdrawingMoney(user);
      } else if (result.isDismissed) {
        handleSendingMoney(user);
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
        Swal.fire({
          title: "Esperando confirmación.",
          confirmButtonColor: "#71945B",
          confirmButtonText: "Sí",
          cancelButtonColor: "#B85B28",
          cancelButtonText: "No",
          showCancelButton: true,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Partida finalizada con éxito",
              confirmButtonColor: "#71945B",
              confirmButtonText: "Aceptar",
            });
            history.push("/monopoly-e-wallet/winner");
          } else if (result.isDismissed) {
            Swal.fire({
              title: "¡Han rechazado el fin del juego!",
              confirmButtonColor: "#71945B",
              confirmButtonText: "Aceptar",
            });
          }
        });
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
        <Spinner isLoading={isLoading}/>
        <div style={{ visibility: isLoading ? "hidden" : "visible" }}>
          <Button
            action={() => {
              localStorage.removeItem("user");
              history.push("/monopoly-e-wallet/");
            }}
            text={<FontAwesomeIcon icon={faAirFreshener} />}
          />
          <PlayerGroup players={users} />
          <BottomButtons {...buttons} />
        </div>
      </div>
    </section>
  );
};
export default Bank;
