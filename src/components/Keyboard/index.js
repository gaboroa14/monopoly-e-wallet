import Key from "./Key";

const Keyboard = (onKeyPress) => {
    return (
        <div className="columns is-mobile is-3 is-centered has-text-centered">
            <div className="box has-background-success is-centered has-text-centered is-6">
                <div className="columns is-mobile  is-centered">
                    <Key
                        number="1"
                        action={onKeyPress}
                    />
                    <Key
                        number="2"
                        action={onKeyPress}
                    />
                    <Key
                        number="3"
                        action={onKeyPress}
                    />
                </div>
                <div className="columns is-mobile  ">
                    <Key
                        number="4"
                        action={onKeyPress}
                    />
                    <Key
                        number="5"
                        action={onKeyPress}
                    />
                    <Key
                        number="6"
                        action={onKeyPress}
                    />
                </div>
                <div className="columns is-mobile  ">
                    <Key
                        number="7"
                        action={onKeyPress}
                    />
                    <Key
                        number="8"
                        action={onKeyPress}
                    />
                    <Key
                        number="9"
                        action={onKeyPress}
                    />
                </div>
                <div className="columns is-mobile  ">
                    <Key
                        number="."
                        action={onKeyPress}
                    />
                    <Key
                        number="0"
                        action={onKeyPress}
                    />
                    <Key
                        number="x"
                        action={onKeyPress}
                    />
                </div>
            </div>
        </div>

    );
}

export default Keyboard;