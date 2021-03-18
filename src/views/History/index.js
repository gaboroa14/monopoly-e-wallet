import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faReceipt } from "@fortawesome/free-solid-svg-icons";
import BottomButtons from "../../components/BottomButtons";
import TransactionsTable from "../../components/TransactionsTable";
import Logo from "../../components/Logo";
import Swal from "sweetalert2";

const History = () => {
  let history = useHistory();

  let user = JSON.parse(localStorage.getItem("user"));

  if (!user) history.push("/monopoly-e-wallet");
  else if (user.avatar!=="bank") history.push("/game");

  const transactions = [
    {
      index: "4",
      sender: "ANYI",
      receiver: "GABOX",
      amount: "1000",
      hour: "04:44 p.m.",
    },
    {
      index: "3",
      sender: "AJAV06",
      receiver: "GABOX",
      amount: "125",
      hour: "04:42 p.m.",
    },
    {
      index: "2",
      sender: "JONABB",
      receiver: "AJAV06",
      amount: "2500",
      hour: "04:38 p.m.",
    },
    {
      index: "1",
      sender: "GABOX",
      receiver: "ANYI",
      amount: "37",
      hour: "04:34 p.m.",
    },
  ];

  const buttons = {
    leftButton: {
      text: <FontAwesomeIcon icon={faAngleLeft} />,
      action: () => history.push("/bank"),
    },
    rightButton: {
      text: <FontAwesomeIcon icon={faReceipt} />,
      action: () => Swal.fire({
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
