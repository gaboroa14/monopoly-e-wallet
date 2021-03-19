import Logo from "../../components/Logo";
import { useHistory, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import PlayerGroup from "../../components/PlayerGroup";

import config from "../../config";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

let socket;

const WinnerWinnerChickenDinner = () => {
  let history = useHistory();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [users, setUsers] = useState([]);

  const {winner} = useParams();

  if (!user) history.push("/monopoly-e-wallet/");

  // CONEXIÓN CON EL BACKEND
  useEffect(() => {
    console.log("conecte");
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
        };
      });
      setUsers(response);
    });
  }, []);

  const handleHomeButtonClick = () => {
    localStorage.removeItem("user");
    history.push("/monopoly-e-wallet/");
  };

  return (
    <section className="section is-centered">
      <div className="container is-centered has-text-centered">
        <Logo mb="2" />
        <h1 className="title is-2">FIN DEL JUEGO</h1>
        <h1 className="title is-3">{winner} es el ganador</h1>
        <PlayerGroup players={users} winner={winner} />
        <button
          className="button is-rounded is-large mt-5"
          onClick={handleHomeButtonClick}
        >
          <span className="icon is-medium">
            <FontAwesomeIcon icon={faHome} />
          </span>
        </button>
      </div>
    </section>
  );
};

export default WinnerWinnerChickenDinner;
