import Logo from "../../components/Logo";
import Player from "../../components/Player";

const Game = () =>{
    return(
        <section className="section is-centered">
            <div className="container">
                <Logo/>
                <Player
                playerName="Gabriel Roa"
                Token="http://placekitten.com/100/100"
                amount="2.000"
                action={()=>{}}/>
            </div>
        </section>
    )
}

export default Game;