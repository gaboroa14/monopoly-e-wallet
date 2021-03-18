import Player from "../Player";

const PlayerGroup = ({ players, winner }) => {
  return (
    <div>
      <div className="columns is-mobile is-centered has-text-centered mt-1">
        {
          // eslint-disable-next-line
          players.map((value, index) => {
            if (winner) {
              if (index === 1 || index === 2)
                return (
                  <div key={index} className="column is-6">
                    <Player
                      {...value}
                      winner={winner === value.username ? winner : undefined}
                      winnerScreen={true}
                    />
                  </div>
                );
            } else if (index === 1 || index === 2)
              return (
                <div key={index} className="column is-6">
                  <Player {...value} />
                </div>
              );
            else return <div></div>;
          })
        }
      </div>
      <div className="columns is-mobile is-half is-centered has-text-centered">
        {
          // eslint-disable-next-line
          players.map((value, index) => {
            if (winner) {
              if (index === 3 || index === 4)
                return (
                  <div key={index} className="column is-6">
                    <Player
                      {...value}
                      winner={winner === value.username ? winner : undefined}
                      winnerScreen={true}
                    />
                  </div>
                );
            } else if (index === 3 || index === 4)
              return (
                <div key={index} className="column is-6">
                  <Player {...value} />
                </div>
              );
            else return <div></div>;
          })
        }
      </div>
    </div>
  );
};

export default PlayerGroup;
