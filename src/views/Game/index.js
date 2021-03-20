import Logo from "../../components/Logo";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import PlayerGroup from "../../components/PlayerGroup";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import { faHome, faBookDead } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import config from "../../config";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";

let socket;

const Game = () => {
  let history = useHistory();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  if (!user) history.push("/monopoly-e-wallet/");
  else if (user.avatar === "bank") history.push("/monopoly-e-wallet/bank");

  // CONEXIÓN CON EL BACKEND
  useEffect(() => {
    socket = io(config.ENDPOINT);
    const u = user;
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

  const personaQuebrada = () => {
    Swal.fire({
      title: "¡Esta persona está quebrada!",
      confirmButtonText: "Esito",
      confirmButtonColor: "#71945B",
    });
  };

  // MONTO APROXIMADO
  const getApproxAmount = (exactAmount) => {
    let firstDigit = exactAmount.toString()[0];
    let zeroesQuantity = exactAmount.toString().substr(1).length;
    let approx = firstDigit.concat("0".repeat(zeroesQuantity));
    return approx;
  };

  // OBTENER LOS USUARIOS POR PRIMERA VEZ
  useEffect(() => {
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
          amount:
            item.username === user.username
              ? item.amount
              : `~${getApproxAmount(item.amount)}`,
          action:
            user.username === item.username
              ? showCurrentAmount
              : item.amount === 0
              ? personaQuebrada
              : () => handleSendingMoney(item.username),
        };
      });
      setUsers(response);
      setIsLoading(false);
    });
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

  // ESCUCHAR LAS ACTUALIZACIONES EN LOS USUARIOS
  useEffect(() => {
    socket.on("users-list", (response) => {
      setUser(response.find((item) => item._id == user._id));
      localStorage.setItem("user", JSON.stringify(user));
      response = response.map((item) => {
        return {
          username: item.username,
          avatar: item.avatar,
          amount:
            item.username === user.username
              ? item.amount
              : `~${getApproxAmount(item.amount)}`,
          action:
            user.username === item.username
              ? showCurrentAmount
              : () => handleSendingMoney(item.username),
        };
      });
      setUsers(response);
    });
  }, []);

  const showCurrentAmount = () => {
    Swal.fire({
      title:
        user.amount !== 0
          ? `Su saldo es ₩${user.amount}`
          : "Estás en la quiebra.",
      confirmButtonColor: "#71945B",
      confirmButtonText: "Aceptar",
    });
  };

  const handleSendingMoney = (who) => {
    if (user.amount === 0) {
      Swal.fire({
        title: "¡Estás quebrado! No puedes enviar dinero.",
        confirmButtonText: "Chale",
        confirmButtonColor: "#71945B",
      });
      return;
    }
    history.push(`/monopoly-e-wallet/send/${who}`);
  };

  return (
    <section className="section is-centered">
      <div className="container">
        <Logo />
        <Spinner isLoading={isLoading} />
        <div style={{ visibility: isLoading ? "hidden" : "visible" }}>
          <PlayerGroup players={users} key="0" />
        </div>
        <div
          className="columns is-mobile is-half is-centered has-text-centered"
          style={{ visibility: isLoading ? "hidden" : "visible" }}
        >
          <div className="column is-12">
            <div
              className="box is-size-1 has-text-black"
              onClick={
                user.amount !== 0
                  ? () => history.push("/monopoly-e-wallet/bankrupt")
                  : () => {
                      localStorage.removeItem("user");
                      history.push("/monopoly-e-wallet/");
                    }
              }
            >
              <FontAwesomeIcon icon={user.amount !== 0 ? faBookDead : faHome} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Game;
