import PlayerGroup from "../../components/PlayerGroup";
import BottomButtons from "../../components/BottomButtons";
import Logo from "../../components/Logo";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

const Bankrupt = () => {
  let history = useHistory();

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
        history.push("/gameover");
      }
    });
  };

  const players = [
    {
      playerName: "ANYI",
      token: "http://placekitten.com/128/129",
      amount: "null",
      action: () => handleBankruptcy("ANYI"),
    },
    {
      playerName: "AJAV06",
      token: "http://placekitten.com/129/128",
      amount: "null",
      action: () => handleBankruptcy("AJAV06"),
    },
    {
      playerName: "JONABB",
      token: "http://placekitten.com/127/128",
      amount: "null",
      action: () => handleBankruptcy("JONABB"),
    },
    {
      playerName: "BANCO",
      token: "http://placekitten.com/128/127",
      amount: "null",
      action: () => handleBankruptcy("BANCO"),
    },
  ];

  const buttons = {
    leftButton: {
        link:"game",
        text:"Atrás"
    },
  };

  return (
    <section className="section is-centered">
      <div className="container has-text-black has-text-centered">
        <Logo mb="2" />
        <h1 class="title is-3" style={{ marginBottom: "-0.5rem" }}>
          ¿Quién te llevó a la bancarrota?
        </h1>
        <PlayerGroup players={players} />
        <BottomButtons {...buttons} />
      </div>
    </section>
  );
};

export default Bankrupt;
