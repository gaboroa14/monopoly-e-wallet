import { toast } from "react-toastify";
import PlayerGroup from "../../components/PlayerGroup";
import BottomButtons from "../../components/BottomButtons";
import Logo from "../../components/Logo";

const Bankrupt = () => {
  const handleBankruptcy = (who) => {
    toast.dark("Te quebro" + who);
  };

  const players = [
    {
      playerName: "ANYI",
      token: "http://placekitten.com/128/129",
      amount: "~2000",
      action: () => handleBankruptcy("ANYI"),
    },
    {
      playerName: "AJAV06",
      token: "http://placekitten.com/129/128",
      amount: "~2000",
      action: () => handleBankruptcy("AJAV06"),
    },
    {
      playerName: "JONABB",
      token: "http://placekitten.com/127/128",
      amount: "~1000",
      action: () => handleBankruptcy("JONABB"),
    },
    {
      playerName: "BANCO",
      token: "http://placekitten.com/128/127",
      amount: "~infinito",
      action: () => handleBankruptcy("BANCO"),
    },
  ];

  const buttons = {
      leftButton:{},
      rightButton:{}
  }

  return (
    <section className="section is-centered">
      <div className="container has-text-black has-text-centered">
        <Logo mb="2" />
        <h1 class="title is-3" style={{marginBottom:"-0.5rem"}}>¿Quién te llevó a la bancarrota?</h1>
        <PlayerGroup players={players} />
        <BottomButtons {...buttons} />
      </div>
    </section>
  );
};

export default Bankrupt;
