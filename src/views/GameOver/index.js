import Logo from "../../components/Logo";
import Player from "../../components/Player";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const GameOver = () => {
  let history = useHistory();
  
  let user = JSON.parse(localStorage.getItem("user"));

  if (!user) history.push("/monopoly-e-wallet");

  const handleHomeButtonClick = () => {
    history.push("/monopoly-e-wallet/");
  };

  return (
    <section className="section is-centered">
      <div className="container is-centered has-text-centered">
        <Logo mb="2" />
        <h1 className="title is-2">FIN DEL JUEGO</h1>
        <h1 className="title is-3">Te quebró ANYI</h1>
        <Player
          playerName="ANYI"
          token="http://placekitten.com/128/129"
          amount="null"
          gameover
        />
        <button
          className="button is-rounded is-large mt-5"
          onClick={handleHomeButtonClick}
        >
          <span className="icon is-medium">
            <FontAwesomeIcon icon={faHome} />
          </span>
        </button>
      </div>
    </section>
  );
};

export default GameOver;
