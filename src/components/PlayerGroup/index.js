import Player from "../Player";

const PlayerGroup = ({players}) => {
    console.log(players);
  return (
    <div>
      <div className="columns is-mobile is-centered has-text-centered mt-1">
        {players.map((value, index) => {
          if (index === 0 || index === 1)
            return (
              <div key={index} className="column is-6">
                <Player {...value} />
              </div>
            );
          else return undefined;
        })}
      </div>
      <div className="columns is-mobile is-half is-centered has-text-centered">
        {players.map((value, index) => {
          if (index === 2 || index === 3)
            return (
              <div key={index} className="column is-6">
                <Player {...value} />
              </div>
            );
          else return undefined;
        })}
      </div>
    </div>
  );
};

export default PlayerGroup;
