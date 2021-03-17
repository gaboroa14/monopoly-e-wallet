import Button from "../../components/Button";
import Logo from "../../components/Logo";
import PlayerName from "../../components/PlayerName";
import Footer from "../../components/Footer";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const [playerName, setPlayerName] = useState("");
  let history = useHistory();

  const validateField = () => {
    if (playerName===""){
      Swal.fire("chacho marico mete un nombre");
      return false;
    } else return true;
  }

  const handleCreateClick = () => {
    //Conectar con el backend para crear:
    // -Banquero
    // -Sala
    // Debería retornar el código de la sala + el token.

    // Teóricamente el procedimiento de ingresar el token debería hacerse aquí.
    if (!validateField()) return;
    Swal.fire({
      title: "El código de la sala es: AJSK2",
      text: "Esperando jugadores",
      confirmButtonColor: "#71945B",
      cancelButtonColor: "#B85B28",
      confirmButtonText: "Comenzar",
      cancelButtonText: "Cancelar",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "¿Está seguro que desea comenzar la partida?",
          confirmButtonColor: "#71945B",
          cancelButtonColor: "#B85B28",
          confirmButtonText: "Sí",
          cancelButtonText: "No",
          showCancelButton: true,
        }).then((result) => {
          if (result.isConfirmed) {
            //Conectar con el backend para crear la partida.

            history.push("/bank");
          }
        });
      }
    });
  };

  const handleJoinClick = () => {
    if (!validateField()) return;
    Swal.fire({
      title: "Introduzca el código de la sala: ",
      input: "text",
      inputAttributes: {
        value: "ldkj",
      },
    }).then((result) => {
      if (result.value.length === 0) {
        Swal.fire({
          title: "Debe introducir un código válido",
          confirmButtonColor: "#71945B",
          confirmButtonText: "Aceptar",
        });
      } else {
        //Conectar con backend para crear el usuario y unirlo a la sala.

        Swal.fire({
          title: "El código de la sala es: AJSK2",
          text: "Esperando jugadores",
          confirmButtonColor: "#71945B",
          cancelButtonColor: "#B85B28",
          cancelButtonText: "Cancelar",
          showCancelButton: true,
        }).then((result) => {
          if (result.isDenied) {
            //Conectar con backend para borrar el usuario de la sala.
          } else if (result.isConfirmed) {
            //Comenzar la partida (SÓLO PARA EFECTOS DE PRUEBAS)
            history.push("/game");
          }
        });
      }
    });
  };

  return (
    <section className="section is-centered has-background-danger" style={{height:"100%"}}>
      <div className="container">
        <Logo mb="6" />
        <PlayerName 
        name={playerName}
        onTextChange={(e) => setPlayerName(e.target.value)}/>
        <div className="buttons is-centered mt-6 mb-6">
          <Button
            text="Crear"
            color="primary"
            action={handleCreateClick}
            size="large"
          />
          <Button
            text="Unirse"
            color="link"
            action={handleJoinClick}
            size="large"
          />
        </div>
        <Footer />
      </div>
      <div className="hero has-background-danger">
        <div className="hero-body"></div>
      </div>
      </section>
  );
};

export default Index;
