import Logo from "../../components/Logo";
import Swal from "sweetalert2";
import { useHistory, Link, Redirect } from "react-router-dom";
import PlayerGroup from "../../components/PlayerGroup";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import {
  faSadCry,
  faAirFreshener,
  faHome,
  faBookDead,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import config from "../../config";
import Button from "../../components/Button";
import { toast } from "react-toastify";


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

  const personaQuebrada = () => {
    Swal.fire({
      title: "¡Esta persona está quebrada!",
      confirmButtonText: "Esito",
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
      response = response.map((item) => {
        return {
          username: item.username,
          avatar: item.avatar,
          amount:
            item.username === user.username
              ? item.amount
              : `~${getApproxAmount(item.amount)}`,
          action:
            JSON.parse(localStorage.getItem("user")).username === item.username
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

  // ESCUCHAR LAS ACTUALIZACIONES EN LOS USUARIOS
  useEffect(() => {
    socket.on("users-list", (response) => {
      console.log(response);
      setUser(
        response.find(
          (item) => item._id == JSON.parse(localStorage.getItem("user"))._id
        )
      );
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
            JSON.parse(localStorage.getItem("user")).username === item.username
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
      });
      return;
    }
    history.push(`/monopoly-e-wallet/send/${who}`);
  };

  return (
    <section className="section is-centered">
      <div className="container">
        <Logo />

        <div style={{ visibility: isLoading ? "hidden" : "visible" }}>
          <PlayerGroup players={users} key="0" />
        </div>
        <div
          className="columns is-mobile is-half is-centered has-text-centered"
          style={{ visibility: isLoading ? "hidden" : "visible" }}
        >
          <Button
            action={() => {
              localStorage.removeItem("user");
              history.push("/monopoly-e-wallet/");
            }}
            text={<FontAwesomeIcon icon={faAirFreshener} />}
          />
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
