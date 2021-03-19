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
import { ClapSpinner } from "react-spinners-kit";

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

  useEffect(() => {
    socket.emit("get-transactions", user.room._id, (response) => {
      response = response.map((value, index) => {
        return {
          type: value.type === "e" ? "Envío" : "Cobro",
          sender: value.username,
          receiver: value.to_user,
          amount: value.amount,
          hour: value.createdAt,
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
        <div
          className="box is-centered has-text-centered"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 100,
            visibility: isLoading ? "visible" : "hidden",
          }}
        >
          <ClapSpinner loading={isLoading} />
        </div>
        <div
          className="is-centered has-text-centered"
          style={{
            visibility: isLoading ? "hidden" : "visible"
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
