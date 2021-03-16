import Logo from "../../components/Logo";
import Player from "../../components/Player";

const Game = () => {
  return (
    <section className="section is-centered">
      <div className="container">
        <Logo />
        <div className="columns is-mobile is-centered has-text-centered mt-1">
          <div className="column is-6">
            <Player
              playerName="GABOX"
              token="http://placekitten.com/128/128"
              amount="2.000"
              action={() => {}}
            />
          </div>
          <div className="column is-6">
            <Player
              playerName="ANYI"
              token="http://placekitten.com/128/128"
              amount="~2.000"
              action={() => {}}
            />
          </div>
        </div>
        <div className="columns is-mobile is-half is-centered has-text-centered">
          <div className="column is-6">
            <Player
              playerName="AJAV06"
              token="http://placekitten.com/128/128"
              amount="~2.000"
              action={() => {}}
            />
          </div>
          <div className="column is-6">
            <Player
              playerName="JONABB"
              token="http://placekitten.com/128/128"
              amount="~2.000"
              action={() => {}}
            />
          </div>
        </div>
        <div className="columns is-mobile is-half is-centered has-text-centered">
          <div className="column is-12">
            <div className="box has-text-danger">
                chao cheo
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Game;
