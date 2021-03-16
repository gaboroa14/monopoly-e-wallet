import Button from "../../components/Button";
import Logo from "../../components/Logo";
import PlayerName from "../../components/PlayerName";
import Footer from "../../components/Footer";
import Swal from 'sweetalert2';

const Index = () => {
    const handleCreateClick = () => {
        Swal.fire({
            title: 'El código de la sala es: AJSK2',
            text: 'Esperando jugadores'
        });
    }

    const handleJoinClick = () => {
        Swal.fire({
            input: 'text',
            inputAttributes:{
                readonly: 'true',
                placeholder: 'ldkj',
            },
        });
    }

    return (
        <section className="section is-centered">
            <div className="container">
                <Logo/>
                <PlayerName/>
                <div className="buttons is-centered mt-6 mb-6">
                    <Button
                        text="Crear"
                        color="primary"
                        action={handleCreateClick}
                        size="large"/>
                    <Button
                        text="Unirse"
                        color="link"
                        action={handleJoinClick}
                        size="large"/>
                </div>
                <Footer/>
            </div>
        </section>
    );
}

export default Index;