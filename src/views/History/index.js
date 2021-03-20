import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faReceipt } from "@fortawesome/free-solid-svg-icons";
import BottomButtons from "../../components/BottomButtons";
import TransactionsTable from "../../components/TransactionsTable";
import Logo from "../../components/Logo";
import Swal from "sweetalert2";
import config from "../../config";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Spinner from "../../components/Spinner";
import { toast } from "react-toastify";

let socket;

const History = () => {
  let history = useHistory();
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let user = JSON.parse(localStorage.getItem("user"));

  if (!user) history.push("/monopoly-e-wallet/");
  else if (user.avatar !== "bank") history.push("/monopoly-e-wallet/game");

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
      setIsLoading(true);
    });
  }, []);

  // ESCUCHAR LAS BANCARROTAS
  useEffect(() => {
    socket.on("bankrupted", (person) => {
      toast.error(`¡${person.username} ha quebrado!`);
    });
    setIsLoading(true);
  }, []);

  // ESCUCHAR SI ALGUIEN GANÓ
  useEffect(() => {
    socket.on("winner-player", (response) => {
      history.push(`/monopoly-e-wallet/winner/${response.username}`);
    });
  }, []);

  useEffect(() => {
    socket.emit("get-transactions", user.room._id, (response) => {
      response = response.map((value, index) => {
        let creationDate = new Date(value.createdAt);
        let creationHour = (creationDate.getHours() % 12).toString();
        let creationMin = creationDate.getMinutes();
        let amPm = parseInt(creationDate.getHours() / 12) === 1 ? "pm" : "am";
        return {
          type: value.type === "e" ? "Envío" : "Cobro",
          sender: value.username,
          receiver: value.to_user,
          amount: value.amount,
          hour: `${creationHour}:${creationMin} ${amPm}`,
        };
      });
      setTransactions(response);
      setIsLoading(false);
    });
  }, []);

  const buttons = {
    leftButton: {
      text: <FontAwesomeIcon icon={faAngleLeft} />,
      action: () => history.push("/monopoly-e-wallet/bank"),
    },
    rightButton: {
      text: <FontAwesomeIcon icon={faReceipt} />,
      action: () =>
        Swal.fire({
          title: "Team MARVEL - I Reto Interno KURODev",
          text: "Albert Acevedo, Gabriel Roa, Jonathan Calles",
          icon: "success",
        }),
    },
  };

  return (
    <section className="section is-centered has-text-centered">
      <div className="container is-centered has-text-centered">
        <Logo mb="0" />
        <Spinner isLoading={isLoading} />
        <div
          className="is-centered has-text-centered"
          style={{
            visibility: isLoading ? "hidden" : "visible",
          }}
        >
          <BottomButtons {...buttons} />
          <TransactionsTable transactions={transactions} />
        </div>
      </div>
    </section>
  );
};

export default History;
