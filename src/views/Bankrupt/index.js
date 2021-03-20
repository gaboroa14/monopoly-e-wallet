import PlayerGroup from "../../components/PlayerGroup";
import BottomButtons from "../../components/BottomButtons";
import Logo from "../../components/Logo";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

import config from "../../config";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../components/Spinner";
import { toast } from "react-toastify";

let socket;

const Bankrupt = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  let history = useHistory();

  if (!user) history.push("/monopoly-e-wallet/");

  // CONEXIÓN CON EL BACKEND
  useEffect(() => {
    socket = io(config.ENDPOINT);
    socket.emit(
      "join",
      { username: user.username, room_id: user.room._id },
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

  // ESCUCHAR LAS TRANSACCIONES DE CARGA
  useEffect(() => {
    socket.on("transaction", (res) => {
      const myUser = JSON.parse(localStorage.getItem("user"));
      if (res.to_user === myUser.username) {
        toast.dark(`${res.username} te ha enviado ₩${res.amount}`);
      }
      myUser.amount += res.amount;
      localStorage.setItem("user", JSON.stringify(myUser));
      setUser(myUser);
    });
  }, []);

  // ESCUCHAR LAS TRANSACCIONES DE COBRO
  useEffect(() => {
    socket.on("debit", (res) => {
      const myUser = JSON.parse(localStorage.getItem("user"));
      if (res.to_user === myUser.username) {
        toast.dark(`El banco te ha cobrado ₩${res.amount}`);
        myUser.amount -= res.amount;
        localStorage.setItem("user", JSON.stringify(myUser));
      }
    });
  }, []);

  // ESCUCHAR LAS BANCARROTAS
  useEffect(() => {
    socket.on("bankrupted", (person) => {
      toast.error(`¡${person.username} ha quebrado!`);
    });
  }, []);

  // ESCUCHAR SI ALGUIEN GANÓ
  useEffect(() => {
    socket.on("winner-player", (response) => {
      history.push(`/monopoly-e-wallet/winner/${response.username}`);
    });
  }, []);

  // ESCUCHAR SI EL BANQUERO QUIERE FINALIZAR LA PARTIDA
  useEffect(() => {
    socket.on("accepted-requests", (qty) => {
      if (Swal.isVisible()) return;
      Swal.fire({
        title: `El banquero quiere finalizar la partida. ¿Finalizar?`,
        confirmButtonColor: "#71945B",
        confirmButtonText: "Sí",
        cancelButtonColor: "#B85B28",
        cancelButtonText: "No",
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          socket.emit("end-game", {room_id: user.room._id, request: true}, (winner) => {
            if (winner) history.push(`/monopoly-e-wallet/winner/${winner.username}`);
          });
          Swal.fire({
            title: "Esperando confirmación.",
            showConfirmButton: false,
            showCancelButton: false,
          });
          Swal.showLoading();
        } else {
          socket.emit("end-game", {room_id: user.room._id, request: false}, () => {});
        }
      });
    });
  }, []);

  // ESCUCHAR SI RECHAZAN LA SOLICITUD DE FINALIZAR PARTIDA
  useEffect(() => {
    socket.on("reject-request", (qty) => {
      Swal.close();
      toast.warn("¡Se ha rechazado la solicitud de finalizar la partida!");
    });
  }, []);

  // OBTENER LOS USUARIOS POR PRIMERA VEZ
  useEffect(() => {
    socket.emit("get-users", user?.room._id, (response) => {
      if (!response){
        localStorage.removeItem("user");
        history.push("/monopoly-e-wallet/");
        toast.info("¡Esta partida ha finalizado!");
        return;
      }
      response = response
        .filter((item) => item.username !== user.username)
        .map((item) => {
          return {
            username: item.username,
            avatar: item.avatar === "bank" ? "university" : item.avatar,
            action:
              item.amount !== 0 || item.avatar === "bank"
                ? () => handleBankruptcy(item.username)
                : () =>
                    Swal.fire({
                      title: "Esta persona está quebrada.",
                      confirmButtonText: "Chale",
                      confirmButtonColor: "#71945B",
                    }),
          };
        });
      setUsers(response);
      setIsLoading(false);
    });
  }, []);

  const handleBankruptcy = (who) => {
    Swal.fire({
      title: `¿Estás seguro que te quebró ${who}?`,
      confirmButtonColor: "#71945B",
      cancelButtonColor: "#B85B28",
      confirmButtonText: "Sí",
      cancelButtonText: "No",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        socket.emit(
          "send-transaction",
          {
            user_id: JSON.parse(localStorage.getItem("user"))._id,
            amount: JSON.parse(localStorage.getItem("user")).amount,
            room_id: JSON.parse(localStorage.getItem("user")).room._id,
            to_user: who,
          },
          (response) => {
            if (response) {
              history.push(`/monopoly-e-wallet/winner/${response}`);
              return;
            }
          }
        );
        user.amount = 0;
        localStorage.setItem("user", JSON.stringify(user));
        Swal.fire({
          title: "¡Te fuiste a la quiebra!",
          confirmButtonText: "Chale",
          confirmButtonColor: "#71945B",
        });
        setTimeout(() => history.push("/monopoly-e-wallet/game/", 1000));
      }
    });
  };

  const buttons = {
    leftButton: {
      text: <FontAwesomeIcon icon={faAngleLeft} />,
      action: () => history.push("/monopoly-e-wallet/game/"),
    },
  };

  return (
    <section className="section is-centered">
      <div className="container has-text-black has-text-centered">
      <Spinner isLoading={isLoading}/>
        <Logo mb="2" />
        <h1 class="title is-3" style={{ marginBottom: "-0.5rem" }}>
          ¿Quién te llevó a la bancarrota?
        </h1>
        <div style={{ visibility: isLoading ? "hidden" : "visible" }}>
          <PlayerGroup players={users} />
          <BottomButtons {...buttons} />
        </div>
      </div>
    </section>
  );
};

export default Bankrupt;
