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

const Bank = () => {
  let history = useHistory();

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

  const players = [
    {
      playerName: "GABOX",
      token: "http://placekitten.com/128/128",
      amount: "1000",
      action: () => showBankerOptions("GABOX"),
    },
    {
      playerName: "ANYI",
      token: "http://placekitten.com/128/129",
      amount: "2000",
      action: () => showBankerOptions("ANYI"),
    },
    {
      playerName: "AJAV06",
      token: "http://placekitten.com/129/128",
      amount: "1000",
      action: () => showBankerOptions("AJAV06"),
    },
    {
      playerName: "JONABB",
      token: "http://placekitten.com/127/128",
      amount: "2000",
      action: () => showBankerOptions("JONABB"),
    },
  ];

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
        <PlayerGroup players={players} />
        <BottomButtons {...buttons} />
      </div>
    </section>
  );
};
export default Bank;
