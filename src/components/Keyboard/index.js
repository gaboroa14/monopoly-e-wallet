import Key from "./Key";

const Keyboard = ({ onKeyPress }) => {
  return (
    <div className="columns is-mobile is-3 is-centered has-text-centered">
      <div className="box has-background-success is-centered has-text-centered is-6">
        <div className="columns is-mobile  is-centered">
          <Key number="1" action={(e, number) => onKeyPress(e, "1")} />
          <Key number="2" action={(e, number) => onKeyPress(e, "2")} />
          <Key number="3" action={(e, number) => onKeyPress(e, "3")} />
        </div>
        <div className="columns is-mobile  ">
          <Key number="4" action={(e, number) => onKeyPress(e, "4")} />
          <Key number="5" action={(e, number) => onKeyPress(e, "5")} />
          <Key number="6" action={(e, number) => onKeyPress(e, "6")} />
        </div>
        <div className="columns is-mobile  ">
          <Key number="7" action={(e, number) => onKeyPress(e, "7")} />
          <Key number="8" action={(e, number) => onKeyPress(e, "8")} />
          <Key number="9" action={(e, number) => onKeyPress(e, "9")} />
        </div>
        <div className="columns is-mobile  ">
          <Key number="." action={(e, number) => onKeyPress(e, ".")} />
          <Key number="0" action={(e, number) => onKeyPress(e, "0")} />
          <Key number="x" action={(e, number) => onKeyPress(e, "x")} />
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
