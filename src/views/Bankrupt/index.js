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

let socket;

const Bankrupt = () => {
  const [users, setUsers] = useState([]);
  let history = useHistory();

  let user = JSON.parse(localStorage.getItem("user"));

  if (!user) history.push("/monopoly-e-wallet/");

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
        if (item.username !== user.username)
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
                    }),
          };
      });
      setUsers(response);
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
            if (response)
              history.push(`/monopoly-e-wallet/winner/${response}`);
          }
        );
        user.amount = 0;
        localStorage.setItem("user", JSON.stringify(user));
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
        <Logo mb="2" />
        <h1 class="title is-3" style={{ marginBottom: "-0.5rem" }}>
          ¿Quién te llevó a la bancarrota?
        </h1>
        <PlayerGroup players={users} />
        <BottomButtons {...buttons} />
      </div>
    </section>
  );
};

export default Bankrupt;
