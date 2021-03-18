import Logo from "../../components/Logo";
import Swal from "sweetalert2";
import { useHistory, Link } from "react-router-dom";
import PlayerGroup from "../../components/PlayerGroup";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import { faSadCry } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ENDPOINT from "../../config";

let socket;

const Game = () => {
  let history = useHistory();

  let user = JSON.parse(localStorage.getItem("user"));
  const [users, setUsers] = useState([]);

  if (!user) history.push("/monopoly-e-wallet");
  else if (user.avatar === "bank") history.push("/bank");

  // CONEXIÓN CON EL BACKEND
  useEffect(() => {
    socket = io(ENDPOINT);
    return () => {
      //socket.emit("disconnect");
      socket.off();
    };
  }, []);

  // OBTENER LOS USUARIOS POR PRIMERA VEZ
  useEffect(() => {
    socket.emit("get-users", user.room._id, (response) => {
      response = response.map((item) => {
        return {
          username: item.username,
          avatar: item.avatar,
          amount: item.amount,
          action: (JSON.parse(localStorage.getItem("user")).username===item.username ? showCurrentAmount : () => handleSendingMoney(item.username))
        };
      });
      setUsers(response);
    })
  }, []);

  // ESCUCHAR LAS TRANSACCIONES
  useEffect(() => {
    socket.emit("transaction", (res) => {
      console.log(res);
    })
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
          action: (JSON.parse(localStorage.getItem("user")).username===item.username ? showCurrentAmount : () => handleSendingMoney(item.username))
        };
      });
      setUsers(response);
    })
  }, []);

  const showCurrentAmount = () => {
    Swal.fire({
      title: "Su saldo es ₩1.000",
      confirmButtonColor: "#71945B",
      confirmButtonText: "Aceptar",
    });
  };

  const handleSendingMoney = (user) => {
    history.push(`/send/${user}`);
  };

  return (
    <section className="section is-centered">
      <div className="container">
        <Logo />
        <PlayerGroup players={users} key="0"/>
        <div className="columns is-mobile is-half is-centered has-text-centered">
          <div className="column is-12">
            <Link to="/bankrupt/">
              <div className="box has-text-danger">
                <FontAwesomeIcon icon={faSadCry}/>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Game;
