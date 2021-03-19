import { useState, useEffect } from "react";
import Keyboard from "../../components/Keyboard";
import Logo from "../../components/Logo";
import BottomButtons from "../../components/BottomButtons";
import { useHistory, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { faAngleLeft, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import config from "../../config";
import { io } from "socket.io-client";

let socket;

const WithdrawMoney = () => {
  let history = useHistory();

  const [monto, setMonto] = useState("");
  const [hasComma, setHasComma] = useState(false);
  const [afterComma, setAfterComma] = useState(0);

  let currentUser = JSON.parse(localStorage.getItem("user"));

  if (!currentUser) history.push("/monopoly-e-wallet");

  // CONECTO CON EL BACKEND
  useEffect(() => {
    socket = io(config.ENDPOINT);
    const u = JSON.parse(localStorage.getItem("user"));
    socket.emit(
      "join",
      { username: u.username, room_id: u.room._id },
      ({ error, user, quantity }) => {
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
        }
      }
    );
    return () => {
      //socket.emit("disconnect");
      socket.off();
    };
  }, []);

  const { user } = useParams();
  const saldoActual = "1.000";

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

  const handleWithdrawPayment = () => {
    //Varias cosas:
    //1) Valida que el monto a mandar no sea mayor al saldo del usuario.
    //2) Valida que el usuario haya introducido un monto.
    //3) Envía el dinero al usuario (backend)
    //4) Devuelve al menú principal
    if (monto.length !== 0) {
      Swal.fire({
        title: `¿Cobrarle ₩${monto} a ${user}?`,
        confirmButtonColor: "#71945B",
        cancelButtonColor: "#B85B28",
        confirmButtonText: "Sí",
        cancelButtonText: "No",
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          socket.emit("bank-debit", {
            user_id: JSON.parse(localStorage.getItem("user"))._id,
            amount: monto,
            room_id: JSON.parse(localStorage.getItem("user")).room._id,
            to_user: user,
          });
          Swal.fire({
            title: `Cobraste ₩${monto} a ${user}`,
            confirmButtonColor: "#71945B",
            confirmButtonText: "Aceptar",
          });
          setTimeout(() => handleBackButtonClick(), 500);
          handleBackButtonClick();
        }
      });
    } else {
      toast.error("Introduzca el monto a cobrar", {
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

  const handleBackButtonClick = () => history.push("/bank");

  const buttons = {
    leftButton: {
      text: <FontAwesomeIcon icon={faAngleLeft} />,
      action: handleBackButtonClick,
    },
    rightButton: {
      text: <FontAwesomeIcon icon={faShare} />,
      action: handleWithdrawPayment,
    },
  };

  return (
    <section className="section is-centered">
      <div className="container">
        <Logo mb="1" />
        <div className="level is-mobile has-text-black">
          <div className="level-item">
            <div className="level-left">
              <strong className="mr-2">Cobrando a:</strong> {user}
            </div>
          </div>
          <div className="level-item">
            <div className="level-right">
              <strong className="mr-2">Saldo de {user}:</strong> ₩{saldoActual}
            </div>
          </div>
        </div>
        <div className="columns is-mobile is-centered is-half mb-3">
          <div className="column is-two-thirds">
            <input
              className="input is-size-2 has-text-centered"
              value={`₩ ${monto}`}
              readOnly
            />
          </div>
        </div>

        <Keyboard onKeyPress={(e, n) => handleKeyPress(e, n)} />

        <BottomButtons {...buttons} />
      </div>
    </section>
  );
};

export default WithdrawMoney;
