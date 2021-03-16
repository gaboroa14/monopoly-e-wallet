import { useState } from "react";
import Button from "../../components/Button";
import Keyboard from "../../components/Keyboard";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SendMoney = ({ user, saldoActual }) => {
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
    if (monto.length !== 0) {
      Swal.fire(`vas a mandarle ₩${monto} a Gabo, tas seguro?`);
    } else {
      Swal.fire("chacho marico como vas a mandar $0 sapo");
    }
  };

  return (
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

      <div className="level is-mobile has-text-black mt-2">
        <div className="level-item">
          <div className="level-left">
            <Link to="/game/">
              <Button
                text="Atrás"
                color="danger"
                size="large"
                action={() => {}}
              />
            </Link>
          </div>
        </div>
        <div className="level-item">
          <div className="level-right">
            <Button
              text="Enviar"
              color="primary"
              size="large"
              action={handleSendPayment}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
