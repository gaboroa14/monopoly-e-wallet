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
const ENDPOINT = "http://192.168.43.241:5000";

let socket;

const Bank = () => {
  let history = useHistory();

  let user = JSON.parse(localStorage.getItem("user"));

  if (!user) history.push("/monopoly-e-wallet");
  else if (user.avatar !== "bank") history.push("/game");

  const [users, setUsers] = useState([]);

  // CONEXIÓN CON EL BACKEND
  useEffect(() => {
    socket = io(ENDPOINT);
    return () => {
      //socket.emit("disconnect");
      socket.off();
    };
  }, []);

  useEffect(() => {
    socket.emit("get-users", user.room._id, (response) => {
      response = response.map((item) => {
        return {
          username: item.username,
          avatar: item.avatar,
          amount: item.amount,
          action: () => handleSendingMoney(item.username)
        };
      });
      setUsers(response);
    })
  }, []);

  const showBankerOptions = (user) => {
    Swal.fire({
      title: "¿Que quieres hacer?",
      showCloseButton: true,
      showDenyButton: true,
      showCancelButton: true,
      denyButtonColor: "green",
      confirmButtonText: `Pass Go`,
      denyButtonText: `Cobrar`,
      cancelButtonText: "Pagar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Pagado!", "", "success");
      } else if (result.isDenied) {
        handleWithdrawingMoney(user);
      } else if (result.isDismissed) {
        handleSendingMoney(user);
      }
    });
  };

  const handleWithdrawingMoney = (user) => {
    history.push(`/withdraw/${user}`);
  };

  const handleSendingMoney = (user) => {
    history.push(`/send/${user}/t`);
  };
  
  const handleHistoryClick = () => {
    history.push("/history/");
  };

  const handleFinishGameClick = () => {
    Swal.fire({
      title: "¿Estás seguro de que quieres finalizar?",
      confirmButtonColor: "green",
      confirmButtonText: "Sí",
      cancelButtonColor: "red",
      cancelButtonText: "No",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Esperando confirmación.",
          confirmButtonColor: "green",
          confirmButtonText: "Sí",
          cancelButtonColor: "red",
          cancelButtonText: "No",
          showCancelButton: true,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Partida finalizada con éxito",
              confirmButtonColor: "green",
              confirmButtonText: "Aceptar",
            });
            history.push("/winner");
          } else if (result.isDismissed) {
            Swal.fire({
              title: "¡Han rechazado el fin del juego!",
              confirmButtonColor: "green",
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
        <PlayerGroup players={users} />
        <BottomButtons {...buttons} />
      </div>
    </section>
  );
};
export default Bank;
