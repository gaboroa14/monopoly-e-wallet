import Logo from "../../components/Logo";
import { useHistory, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import PlayerGroup from "../../components/PlayerGroup";

import config from "../../config";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import BottomButtons from "../../components/BottomButtons";
import Spinner from "../../components/Spinner";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

let socket;

const WinnerWinnerChickenDinner = () => {
  let history = useHistory();

  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { winner } = useParams();

  if (!user) history.push("/monopoly-e-wallet/");

  // CONEXIÓN CON EL BACKEND
  useEffect(() => {
    if (Swal.isVisible()) Swal.close();
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

  // OBTENER LOS USUARIOS POR PRIMERA VEZ
  useEffect(() => {
    socket.emit("get-users", user?.room._id, (response) => {
      if (!response){
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
        };
      });
      setUsers(response);
      setIsLoading(false);
    });
  }, []);

  const handleHomeButtonClick = () => {
    localStorage.removeItem("user");
    history.push("/monopoly-e-wallet/");
  };

  const buttons = {
    leftButton: {
      text: <FontAwesomeIcon icon={faHome} />,
      action: handleHomeButtonClick,
    },
  };

  return (
    <section className="section is-centered">
      <div className="container is-centered has-text-centered">
        <Logo mb="2" />
        <Spinner isLoading={isLoading}/>
        <div style={{ visibility: isLoading ? "hidden" : "visible" }}>
          <h1 className="title is-2">FIN DEL JUEGO</h1>
          <h1 className="title is-3">{winner} es el ganador</h1>
          <PlayerGroup players={users} winner={winner} />
          <BottomButtons {...buttons} />
        </div>
      </div>
    </section>
  );
};

export default WinnerWinnerChickenDinner;
