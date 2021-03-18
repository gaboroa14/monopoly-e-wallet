import Logo from "../../components/Logo";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import PlayerGroup from "../../components/PlayerGroup";

const WinnerWinnerChickenDinner = () => {
    let history = useHistory();

    let user = JSON.parse(localStorage.getItem("user"));

    if (!user) history.push("/monopoly-e-wallet");
    
  const handleHomeButtonClick = () => {
    history.push("/monopoly-e-wallet/");
  };

  const players = [
    {
      playerName: "GABOX",
      token: "http://placekitten.com/128/128",
      amount: "1000",
    },
    {
      playerName: "ANYI",
      token: "http://placekitten.com/128/129",
      amount: "~2000",
    },
    {
      playerName: "AJAV06",
      token: "http://placekitten.com/129/128",
      amount: "~1000",
    },
    {
      playerName: "JONABB",
      token: "http://placekitten.com/127/128",
      amount: "~2000",
    },
  ];

  return (
    <section className="section is-centered">
      <div className="container is-centered has-text-centered">
        <Logo mb="2" />
        <h1 className="title is-2">FIN DEL JUEGO</h1>
        <h1 className="title is-3">ANYI es el ganador</h1>
        <PlayerGroup 
        players={players}
        winner="ANYI"/>
        <button
          className="button is-rounded is-large mt-5"
          onClick={handleHomeButtonClick}
        >
          <span className="icon is-medium">
            <FontAwesomeIcon icon={faHome}/>
          </span>
        </button>
      </div>
    </section>
  );
};

export default WinnerWinnerChickenDinner;
