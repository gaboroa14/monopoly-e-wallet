import { useState } from "react";
import Button from "../../components/Button";
import Keyboard from "../../components/Keyboard";
import Logo from "../../components/Logo"

const SendMoney = () => {
    const [monto, setMonto] = useState(0);

    const handleKeyPress = (m) => {
        setMonto(m);
    }

    return(
        <div className="container">
            <Logo mb="1"/>
            <div className="level is-mobile has-text-black">
                <div className="level-item">
                    <div className="level-left">
                        Gabo
                    </div>
                </div>
                <div className="level-item">
                    <div className="level-right">
                        ₩ 1.000
                    </div>
                </div>
            </div>
            <div className="columns is-mobile is-centered is-half mb-3">
                <div className="column is-two-thirds">
                    <input className="input" value={`₩ ${monto}`}/>
                </div>
            </div>
            <Keyboard
                onKeyPress={handleKeyPress}/>

            <div className="level is-mobile has-text-black mt-2">
                <div className="level-item">
                    <div className="level-left">
                    <Button
                        text="Atrás"
                        color="danger"
                        size="large"
                        action={() => {}}/>
                    </div>
                </div>
                <div className="level-item">
                    <div className="level-right">
                    <Button
                        text="Enviar"
                        color="primary"
                        size="large"
                        action={() => {}}/>
                    </div>
                </div>
            </div>
                

            </div>
    );
}

export default SendMoney;