import { useState } from "react";
import Keyboard from "../../components/Keyboard";
import Logo from "../../components/Logo";
import BottomButtons from "../../components/BottomButtons";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const SendMoney = ({ user, saldoActual }) => {
  let history = useHistory();

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
    if (monto.length !== 0) {
      Swal.fire({
        title: `¿Enviarle ₩${monto} a GABOX?`,
        confirmButtonColor: "#71945B",
        cancelButtonColor: "#B85B28",
        confirmButtonText: "Sí",
        cancelButtonText: "No",
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `Enviaste ₩${monto} a GABOX`,
            confirmButtonColor: "#71945B",
            confirmButtonText: "Aceptar",
          });
          history.push("/game");
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

  const buttons = {
    leftButton: {
      link: "game",
      text: "Atrás",
    },
    rightButton: {
      text: "Enviar",
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
              <strong>Enviando a:</strong> {user}
            </div>
          </div>
          <div className="level-item">
            <div className="level-right">
              <strong>Tu saldo es:</strong> ₩{saldoActual}
            </div>
          </div>
        </div>
        <div className="columns is-mobile is-centered is-half mb-3">
          <div className="column is-two-thirds">
            <input className="input" value={`₩ ${monto}`} readOnly />
          </div>
        </div>

        <Keyboard onKeyPress={(e, n) => handleKeyPress(e, n)} />

        <BottomButtons {...buttons} />
      </div>
    </section>
  );
};

export default SendMoney;
