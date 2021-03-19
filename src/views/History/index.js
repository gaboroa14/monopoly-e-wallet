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

let socket;

const History = () => {
  let history = useHistory();
  const [transactions, setTransactions] = useState([]);

  let user = JSON.parse(localStorage.getItem("user"));

  if (!user) history.push("/monopoly-e-wallet");
  else if (user.avatar !== "bank") history.push("/game");

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

  useEffect(() => {
    socket.emit("get-transactions", user.room._id, (response) => {
      response = response.map((value, index) => {
        return {
          type: value.type === 'e' ? "Envío" : "Cobro",
          sender: value.username,
          receiver: value.to_user,
          amount: value.amount,
          hour: value.createdAt,
        };
      });
      setTransactions(response);
    });
  }, []);

  // const transactions = [
  //   {
  //     index: "4",
  //     sender: "ANYI",
  //     receiver: "GABOX",
  //     amount: "1000",
  //     hour: "04:44 p.m.",
  //   },
  //   {
  //     index: "3",
  //     sender: "AJAV06",
  //     receiver: "GABOX",
  //     amount: "125",
  //     hour: "04:42 p.m.",
  //   },
  //   {
  //     index: "2",
  //     sender: "JONABB",
  //     receiver: "AJAV06",
  //     amount: "2500",
  //     hour: "04:38 p.m.",
  //   },
  //   {
  //     index: "1",
  //     sender: "GABOX",
  //     receiver: "ANYI",
  //     amount: "37",
  //     hour: "04:34 p.m.",
  //   },
  // ];

  const buttons = {
    leftButton: {
      text: <FontAwesomeIcon icon={faAngleLeft} />,
      action: () => history.push("/bank"),
    },
    rightButton: {
      text: <FontAwesomeIcon icon={faReceipt} />,
      action: () =>
        Swal.fire({
          title: "Hecho por Team MARVEL para el 1er reto interno de KURODev",
          text: "Albert Acevedo, Gabriel Roa, Jonathan Calles",
          icon: "success",
        }),
    },
  };

  return (
    <section className="section is-centered">
      <div className="container">
        <Logo mb="0" />
        <BottomButtons {...buttons} />
        <TransactionsTable transactions={transactions} />
      </div>
    </section>
  );
};

export default History;
