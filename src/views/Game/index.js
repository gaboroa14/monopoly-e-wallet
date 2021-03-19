import Logo from "../../components/Logo";
import Swal from "sweetalert2";
import { useHistory, Link } from "react-router-dom";
import PlayerGroup from "../../components/PlayerGroup";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import { faSadCry, faAirFreshener } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import config from "../../config";
import Button from "../../components/Button";
import { toast } from "react-toastify";

let socket;

const Game = () => {
  let history = useHistory();

  let user = JSON.parse(localStorage.getItem("user"));
  const [users, setUsers] = useState([]);

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

  // OBTENER LOS USUARIOS POR PRIMERA VEZ
  useEffect(() => {
    socket.emit("get-users", user?.room._id, (response) => {
      response = response.map((item) => {
        return {
          username: item.username,
          avatar: item.avatar,
          amount: item.amount,
          action:
            JSON.parse(localStorage.getItem("user")).username === item.username
              ? showCurrentAmount
              : () => handleSendingMoney(item.username),
        };
      });
      setUsers(response);
    });
  }, []);

  // ESCUCHAR LAS TRANSACCIONES DE CARGA
  useEffect(() => {
    socket.on("transaction", (res) => {
      const myUser = JSON.parse(localStorage.getItem("user"));
      if (res.to_user === myUser.username) {
        toast.dark(`${res.username} te ha enviado ₩${res.amount}`);
      }
    });
  }, []);

  // ESCUCHAR LAS TRANSACCIONES DE COBRO
  useEffect(() => {
    socket.on("debit", (res) => {
      const myUser = JSON.parse(localStorage.getItem("user"));
      if (res.to_user === myUser.username) {
        toast.dark(`El banco te ha cobrado ₩${res.amount}`);
      }
    });
  }, []);

  // ESCUCHAR LAS ACTUALIZACIONES EN LOS USUARIOS
  useEffect(() => {
    socket.on("users-list", (response) => {
      console.log(response);
      user = response.find(
        (item) => item._id == JSON.parse(localStorage.getItem("user"))._id
      );
      localStorage.setItem("user", JSON.stringify(user));
      response = response.map((item) => {
        return {
          username: item.username,
          avatar: item.avatar,
          amount: item.amount,
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
      title: `Su saldo es ₩${user.amount}`,
      confirmButtonColor: "#71945B",
      confirmButtonText: "Aceptar",
    });
  };

  const handleSendingMoney = (user) => {
    history.push(`/monopoly-e-wallet/send/${user}`);
  };

  return (
    <section className="section is-centered">
      <div className="container">
        <Logo />
        <PlayerGroup players={users} key="0" />

        <div className="columns is-mobile is-half is-centered has-text-centered">
          <Button
            action={() => {
              localStorage.removeItem("user");
              history.push("/monopoly-e-wallet/");
            }}
            text={<FontAwesomeIcon icon={faAirFreshener} />}
          />
          <div className="column is-12">
            <Link to="/bankrupt/">
              <div className="box is-size-1 has-text-black">
                <FontAwesomeIcon icon={faSadCry} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Game;
