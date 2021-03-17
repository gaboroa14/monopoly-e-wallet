const Player = ({
  playerName,
  token,
  amount,
  action,
  gameover,
  winner,
  winnerScreen,
}) => {
  return (
    <div
      onClick={action}
      className={`card has-text-centered ${(!winner && winnerScreen) ? "tint" : undefined}`}
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
      <header className="card-header ">
        <div className="card-header-title is-centered">
          <div
            className="has-background-warning pl-5 pr-5 pt-1 has-text-white"
            style={{ borderRadius: "5px" }}
          >
            {playerName}
          </div>
        </div>
      </header>
      <div className="card-image is-128x128">
        <figure className="image is-4by3 tint">
          <img src={token} alt="token" />
        </figure>
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
