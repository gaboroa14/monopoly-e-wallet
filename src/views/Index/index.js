import Button from "../../components/Button";
import Logo from "../../components/Logo";
import PlayerName from "../../components/PlayerName";
import Footer from "../../components/Footer";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import io from "socket.io-client";

import config from "../../config";
import Spinner from "../../components/Spinner";

let socket;

const Index = () => {
  const [playerName, setPlayerName] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  let history = useHistory();

  // REDIRECCIÓN SI EL USUARIO YA ESTÁ EN UNA PARTIDA
  if (
    JSON.parse(localStorage.getItem("user"))?.room.init &&
    JSON.parse(localStorage.getItem("user")).avatar === "bank"
  ) {
    history.push("/monopoly-e-wallet/bank");
  } else if (JSON.parse(localStorage.getItem("user"))?.room.init) {
    history.push("/monopoly-e-wallet/game");
  }

  // CONEXIÓN CON EL BACKEND
  useEffect(() => {
    socket = io(config.ENDPOINT);
    return () => {
      //socket.emit("disconnect");
      socket.off();
    };
  }, []);

  // MÉTODOS PARA GESTIONAR CONEXIONES CON EL WEBSOCKET

  // Personas se unen a la partida.
  useEffect(() => {
    socket.on("joined", (response) => {
      if (Swal.getHtmlContainer()) {
        if (response.quantity >= 3) Swal.enableButtons();
        Swal.getHtmlContainer().innerHTML = `Esperando jugadores. ${
          response.quantity
        } persona${response.quantity !== 1 ? "s" : ""} se ha${
          response.quantity !== 1 ? "n" : ""
        } unido.`;
      }
    });
  }, []);

  // Personas se unen a la partida.
  useEffect(() => {
    socket.on("person-join-left", (response) => {
      if (Swal.getHtmlContainer()) {
        if (response.quantity >= 3) Swal.enableButtons();
        Swal.getHtmlContainer().innerHTML = `Esperando jugadores. ${
          response.quantity
        } persona${response.quantity !== 1 ? "s" : ""} se ha${
          response.quantity !== 1 ? "n" : ""
        } unido.`;
      }
    });
  }, []);

  // Se borra la partida.
  useEffect(() => {
    socket.on("room-deleted", () => {
      Swal.fire({
        title: "Se ha cerrado la sala.",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#71945B",
      });
      localStorage.removeItem("user");
    });
  }, []);

  // Se inicia la partida.
  useEffect(() => {
    socket.on("game-begun", () => {
      let u = JSON.parse(localStorage.getItem("user"));
      u.room.init = true;
      localStorage.setItem("user", JSON.stringify(u));
      Swal.close();
      history.push(
        JSON.parse(localStorage.getItem("user")).avatar === "bank"
          ? "/monopoly-e-wallet/bank"
          : "/monopoly-e-wallet/game"
      );
    });
  }, []);

  // VALIDACIÓN DEL NOMBRE
  const validateField = () => {
    if (playerName === "") {
      Swal.fire({
        title: "¡Debes introducir un nombre!",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#71945B",
      });
      setIsLoading(false);
      return false;
    } else return true;
  };

  // CREAR UNA SALA
  const handleCreateClick = () => {
    // Conectar con el backend para crear una sala.
    // Devuelve un objeto de tipo user que se guarda en localStorage.
    setIsLoading(true);

    if (!validateField()) return;

    socket.emit(
      "create-room",
      playerName.toUpperCase(),
      ({ user, quantity, error }) => {
        localStorage.setItem("user", JSON.stringify(user));
        setIsLoading(false);
        Swal.fire({
          title: `El código de la sala es: ${user.room._id}`,
          text: `Esperando jugadores. 1 persona se ha unido.`,
          confirmButtonColor: "#71945B",
          cancelButtonColor: "#B85B28",
          confirmButtonText: "Comenzar",
          cancelButtonText: "Cancelar",
          showCancelButton: true,
          showConfirmButton: true,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "¿Está seguro que desea comenzar la partida?",
              confirmButtonColor: "#71945B",
              denyButtonColor: "#B85B28",
              confirmButtonText: "Sí",
              denyButtonText: "No",
              showDenyButton: true,
            }).then((result) => {
              if (result.isConfirmed) {
                socket.emit(
                  "begin-game",
                  JSON.parse(localStorage.getItem("user")).room._id,
                  (error) => {
                    if (error)
                      Swal.fire({
                        title: `Error: ${error}`,
                        icon: "warning",
                      });
                  }
                );
              }
            });
          } else if (
            result.isDismissed &&
            JSON.parse(localStorage.getItem("user"))
          ) {
            socket.emit(
              "delete-room",
              JSON.parse(localStorage.getItem("user")).room._id
            );
          }
        });
        Swal.showLoading(Swal.getDenyButton());
      }
    );
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
      if (result.value.length !== 6) {
        Swal.fire({
          title: "Debe introducir un código válido",
          confirmButtonColor: "#71945B",
          confirmButtonText: "Aceptar",
        });
      } else {
        setIsLoading(true);
        socket.emit(
          "join",
          { username: playerName.toUpperCase(), room_id: result.value },
          ({ error, user, quantity }) => {
            setIsLoading(false);
            if (error) {
              Swal.fire({
                title: `Error: ${error}`,
                confirmButtonText: "Aceptar",
                icon: "warning",
                confirmButtonColor: "#71945B",
              });
              return;
            }

            localStorage.setItem("user", JSON.stringify(user));
            Swal.fire({
              title: `El código de la sala es: ${result.value.toUpperCase()}`,
              text: `Esperando jugadores. ${quantity} persona${
                quantity !== 1 ? "s" : ""
              } se ha${quantity !== 1 ? "n" : ""} unido.`,
              denyButtonColor: "#B85B28",
              denyButtonText: "Cancelar",
              showDenyButton: true,
              showConfirmButton: false,
            }).then((result) => {
              if (result.isDenied) {
                socket.emit("delete-user", user._id, (response) => {
                  localStorage.removeItem("user");
                });
              }
            });
            Swal.showLoading();
          }
        );
      }
    });
  };

  return (
    <section
      className="section is-centered has-background-danger is-large is-fullheight"
      style={{ height: "100% !important" }}
    >
      <div className="container">
        <Logo mb="6" />
        <Spinner isLoading={isLoading} />
        <PlayerName
          name={playerName}
          onTextChange={(e) => setPlayerName(e.target.value)}
        />
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
        <footer className="footer has-background-danger has-text-centered is-fullheight">
          <p>
          ©KURODev. 2021.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Index;
