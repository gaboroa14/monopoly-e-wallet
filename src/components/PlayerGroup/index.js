import Player from "../Player";

const PlayerGroup = ({ players, winner }) => {
  return (
    <div>
      <div className="columns is-mobile is-centered has-text-centered mt-1">
        {players.map((value, index) => {
          if (winner) {
            if (index === 0 || index === 1)
              return (
                <div key={index} className="column is-6">
                  <Player
                    {...value}
                    winner={winner === value.playerName ? winner : undefined}
                    winnerScreen={true}
                  />
                </div>
              );
          } else if (index === 0 || index === 1)
            return (
              <div key={index} className="column is-6">
                <Player {...value} />
              </div>
            );
          else return <div></div>;
        })}
      </div>
      <div className="columns is-mobile is-half is-centered has-text-centered">
        {players.map((value, index) => {
          if (winner) {
            if (index === 2 || index === 3)
              return (
                <div key={index} className="column is-6">
                  <Player
                    {...value}
                    winner={winner === value.playerName ? winner : undefined}
                    winnerScreen={true}
                  />
                </div>
              );
          } else if (index === 2 || index === 3)
            return (
              <div key={index} className="column is-6">
                <Player {...value} />
              </div>
            );
          else return <div></div>;
        })}
      </div>
    </div>
  );
};

export default PlayerGroup;
