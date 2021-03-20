import { useState, useEffect } from "react";
import Keyboard from "../../components/Keyboard";
import Logo from "../../components/Logo";
import BottomButtons from "../../components/BottomButtons";
import { useHistory, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { io } from "socket.io-client";
import config from "../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faHandHoldingUsd,
} from "@fortawesome/free-solid-svg-icons";

let socket;

const SendMoney = () => {
  let history = useHistory();

  const [myUser, setMyUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  if (!myUser) history.push("/monopoly-e-wallet/");

  // CONEXIÓN CON EL BACKEND
  useEffect(() => {
    socket = io(config.ENDPOINT);
    return () => {
      //socket.emit("disconnect");
      socket.off();
    };
  }, []);

  // ESCUCHAR LAS TRANSACCIONES
  useEffect(() => {
    socket.on("transaction", (res) => {
      if (user.avatar === "bank")
        toast.dark(
          `${res.username} le ha enviado ₩${res.amount} a ${res.to_user}`
        );
      else {
        const myUser = JSON.parse(localStorage.getItem("user"));
        if (res.to_user === myUser.username) {
          toast.dark(`${res.username} te ha enviado ₩${res.amount}`);
        }
        myUser.amount += res.amount;
        localStorage.setItem("user", JSON.stringify(myUser));
      }
    });
  }, []);

  // CONEXIÓN CON EL BACKEND
  useEffect(() => {
    socket = io(config.ENDPOINT);
    return () => {
      //socket.emit("disconnect");
      socket.off();
    };
  }, []);

  // ESCUCHAR SI ALGUIEN GANÓ
  useEffect(() => {
    socket.on("winner-player", (response) => {
      history.push(`/monopoly-e-wallet/winner/${response.username}`);
    });
  }, []);

  // ESCUCHAR LAS TRANSACCIONES DE CARGA
  useEffect(() => {
    socket.on("transaction", (res) => {
      const myUser = JSON.parse(localStorage.getItem("user"));
      if (res.to_user === myUser.username) {
        toast.dark(`${res.username} te ha enviado ₩${res.amount}`);
      }
      myUser.amount += res.amount;
      localStorage.setItem("user", JSON.stringify(myUser));
    });
  }, []);

  // ESCUCHAR LAS TRANSACCIONES DE COBRO
  useEffect(() => {
    socket.on("debit", (res) => {
      const myUser = JSON.parse(localStorage.getItem("user"));
      if (res.to_user === myUser.username) {
        toast.dark(`El banco te ha cobrado ₩${res.amount}`);
        myUser.amount -= res.amount;
        localStorage.setItem("user", JSON.stringify(myUser));
      }
    });
  }, []);

  // ESCUCHAR LAS BANCARROTAS DE CARGA
  useEffect(() => {
    socket.on("bankrupted", (person) => {
      toast.error(`¡${person} ha quebrado!`);
    });
  }, []);

  // ESCUCHAR SI ALGUIEN GANÓ
  useEffect(() => {
    socket.on("winner-player", (response) => {
      history.push(`/monopoly-e-wallet/winner/${response.username}`);
    });
  }, []);

  // ESCUCHAR SI EL BANQUERO QUIERE FINALIZAR LA PARTIDA
  useEffect(() => {
    socket.on("accepted-requests", (qty) => {
      if (Swal.isVisible()) return;
      Swal.fire({
        title: `El banquero quiere finalizar la partida. ¿Finalizar?`,
        confirmButtonColor: "#71945B",
        confirmButtonText: "Sí",
        cancelButtonColor: "#B85B28",
        cancelButtonText: "No",
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          socket.emit("end-game", user.room._id, true, (winner) => {
            if (winner) history.push(`/monopoly-e-wallet/winner/${winner}`);
          });
          Swal.fire({
            title: "Esperando confirmación.",
            showConfirmButton: false,
            showCancelButton: false,
          });
          Swal.showLoading();
        } else {
          socket.emit("end-game", user.room._id, false);
        }
      });
    });
  }, []);

  // ESCUCHAR SI RECHAZAN LA SOLICITUD DE FINALIZAR PARTIDA
  useEffect(() => {
    socket.on("reject-request", (qty) => {
      Swal.close();
      toast.warn("¡Se ha rechazado la solicitud de finalizar la partida!");
    });
  }, []);

  // ESCUCHAR SI EL BANQUERO QUIERE FINALIZAR LA PARTIDA
  useEffect(() => {
    socket.on("accepted-requests", (qty) => {
      if (Swal.isVisible()) return;
      Swal.fire({
        title: `El banquero quiere finalizar la partida. ¿Finalizar?`,
        confirmButtonColor: "#71945B",
        confirmButtonText: "Sí",
        cancelButtonColor: "#B85B28",
        cancelButtonText: "No",
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          socket.emit("end-game", user.room._id, true, (winner) => {
            if (winner) history.push(`/monopoly-e-wallet/winner/${winner}`);
          });
          Swal.fire({
            title: "Esperando confirmación.",
            showConfirmButton: false,
            showCancelButton: false,
          });
          Swal.showLoading();
        } else {
          socket.emit("end-game", user.room._id, false);
        }
      });
    });
  }, []);

  // ESCUCHAR SI RECHAZAN LA SOLICITUD DE FINALIZAR PARTIDA
  useEffect(() => {
    socket.on("reject-request", (qty) => {
      Swal.close();
      toast.warn("¡Se ha rechazado la solicitud de finalizar la partida!");
    });
  }, []);

  const { user, bank } = useParams();

  const [monto, setMonto] = useState("");
  const [hasComma, setHasComma] = useState(false);
  const [afterComma, setAfterComma] = useState(0);

  const appendNumberToInput = (number) => {
    const nvo_monto = `${monto}${number}`;
    setMonto(nvo_monto);
  };

  const increaseAfterComma = () => setAfterComma(afterComma + 1);

  const handleKeyPress = (e, number) => {
    switch (number) {
      case ".":
        if (monto.length === 0 && !hasComma) {
          appendNumberToInput("0.");
          setHasComma(true);
        } else if (!hasComma) {
          appendNumberToInput(".");
          setHasComma(true);
        }
        break;

      case "x":
        setMonto("");
        setHasComma(false);
        setAfterComma(0);
        break;

      default:
        if (!hasComma) {
          appendNumberToInput(number);
        } else {
          if (afterComma < 2) {
            appendNumberToInput(number);
            increaseAfterComma();
          }
        }
        break;
    }
  };

  const handleSendPayment = () => {
    //Varias cosas:
    //1) Valida que el monto a mandar no sea mayor al saldo del usuario.
    //2) Valida que el usuario haya introducido un monto.
    //3) Envía el dinero al usuario (backend)
    //4) Devuelve al menú principal
    if (!bank && monto > myUser.amount) {
      toast.error("Monto insuficiente.", {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      return;
    } else if (parseInt(monto) === 0) {
      toast.error("Introduzca un monto válido.", {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (monto.length !== 0) {
      Swal.fire({
        title: `¿Enviarle ₩${monto} a ${user}?`,
        confirmButtonColor: "#71945B",
        cancelButtonColor: "#B85B28",
        confirmButtonText: "Sí",
        cancelButtonText: "No",
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          socket.emit("send-transaction", {
            user_id: myUser._id,
            amount: monto,
            room_id: myUser.room._id,
            to_user: user,
          });
          Swal.fire({
            title: `Enviaste ₩${monto} a ${user}`,
            confirmButtonColor: "#71945B",
            confirmButtonText: "Aceptar",
          });
          myUser.amount -= monto;
          localStorage.setItem("user", JSON.stringify(myUser));
          setMyUser(myUser);
          setTimeout(() => handleBackButtonClick(), 500);
        }
      });
    } else {
      toast.error("Introduzca el monto a enviar", {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleBackButtonClick = () =>
    history.push(bank ? "/monopoly-e-wallet/bank" : "/monopoly-e-wallet/game");

  const buttons = {
    leftButton: {
      text: <FontAwesomeIcon icon={faAngleLeft} />,
      action: handleBackButtonClick,
    },
    rightButton: {
      text: <FontAwesomeIcon icon={faHandHoldingUsd} />,
      action: handleSendPayment,
    },
  };

  return (
    <section className="section is-centered">
      <div className="container">
        <Logo mb="1" />
        <div className="level is-mobile has-text-black">
          <div className="level-item">
            <div className="level-left">
              <strong className="mr-2">Enviando a:</strong> {user}
            </div>
          </div>
          <div className="level-item">
            <div className="level-right">
              <strong className="mr-2">
                {bank ? `Saldo de ${user}:` : "Tu saldo es:"}
              </strong>{" "}
              ₩{myUser.amount}
            </div>
          </div>
        </div>
        <div className="columns is-mobile is-centered is-half mb-3">
          <div className="column is-two-thirds">
            <input className="input is-size-2" value={`₩ ${monto}`} readOnly />
          </div>
        </div>

        <Keyboard onKeyPress={(e, n) => handleKeyPress(e, n)} />

        <BottomButtons {...buttons} />
      </div>
    </section>
  );
};

export default SendMoney;
