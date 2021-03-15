import Button from "../../components/Button";
import Logo from "../../components/Logo";
import PlayerName from "../../components/PlayerName";
import Footer from "./Footer";

const Index = () => {
    return (
        <section className="section is-centered">
            <div className="container">
                <Logo/>
                <PlayerName/>
                <div className="buttons is-centered mt-4 mb-6">
                    <Button
                        text="Crear"
                        color="primary"
                        action={() => alert('click')}
                        size="large"/>
                    <Button
                        text="Unirse"
                        color="link"
                        action={() => alert('click')}
                        size="large"/>
                </div>
                <Footer/>
            </div>
        </section>
    );
}

export default Index;