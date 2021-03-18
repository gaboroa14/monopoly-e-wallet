import {
  faCat,
  faPiggyBank,
  faDog,
  faShip,
  faCar,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");

const Player = ({
  username,
  avatar,
  amount,
  action,
  gameover,
  winner,
  winnerScreen,
}) => {
  let ico;

  switch (avatar) {
    case "bank":
      ico = faPiggyBank;
      break;

    case "cat":
      ico = faCat;
      break;

    case "dog":
      ico = faDog;
      break;

    case "ship":
      ico = faShip;
      break;

    case "car":
      ico = faCar;
      break;

    default:
      ico = faQuestion;
      break;
  }

  return (
    <div
      onClick={action}
      className={`card has-text-centered ${
        !winner && winnerScreen ? "tint" : undefined
      }`}
      style={
        gameover
          ? {
              borderStyle: "solid",
              borderColor: "#C70000",
              borderWidth: "1em",
            }
          : undefined || winner
          ? {
              boxShadow: "0 0 0 0.75rem #f9ee23",
            }
          : undefined
      }
    >
      <header className="card-header is-size-3">
        <div className="card-header-title is-centered">
          <div
            className="has-background-warning pl-5 pr-5 pt-1 has-text-white"
            style={{ borderRadius: "5px" }}
          >
            {username}
          </div>
        </div>
      </header>
      <div className="card-image is-128x128 has-text-black is-size-4">
        <FontAwesomeIcon icon={ico}/>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item has-text-black is-centered">
          {amount !== "null" ? `₩ ${amount}` : undefined}
        </p>
      </footer>
    </div>
  );
};

export default Player;
