import Logo from "../../components/Logo";
import Swal from "sweetalert2";
import { useHistory, Link } from "react-router-dom";
import PlayerGroup from "../../components/PlayerGroup";

const Game = () => {
  let history = useHistory();

  const showCurrentAmount = () => {
    Swal.fire({
      title: "Su saldo es ₩1.000",
      confirmButtonColor: "#71945B",
      confirmButtonText: "Aceptar",
    });
  };

  const handleSendingMoney = () => {
    history.push("/send");
  };

  const players = [
    {
      playerName: "GABOX",
      token: "http://placekitten.com/128/128",
      amount: "1000",
      action: showCurrentAmount,
    },
    {
      playerName: "ANYI",
      token: "http://placekitten.com/128/129",
      amount: "~2000",
      action: handleSendingMoney,
    },
    {
      playerName: "AJAV06",
      token: "http://placekitten.com/129/128",
      amount: "~1000",
      action: handleSendingMoney,
    },
    {
      playerName: "JONABB",
      token: "http://placekitten.com/127/128",
      amount: "~2000",
      action: handleSendingMoney,
    },
  ];

  return (
    <section className="section is-centered">
      <div className="container">
        <Logo />
        <PlayerGroup players={players} />
        <div className="columns is-mobile is-half is-centered has-text-centered">
          <div className="column is-12">
            <Link to="/bankrupt/">
              <div className="box has-text-danger">chao cheo</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Game;
