import { Link } from "react-router-dom";
import Button from "../Button";

const BottomButtons = ({ leftButton, rightButton }) => {
  return (
    <div className="level is-mobile has-text-black mt-4">
      <div className="level-item">
        <div className="level-left">
          <Link to={`/${leftButton.link}/`}>
            <Button
              text={leftButton.text}
              color="warning"
              size="large"
              action={() => leftButton.action}
            />
          </Link>
        </div>
      </div>
      {rightButton ? (
        <div className="level-item">
          <div className="level-right">
          <Link to={`/${rightButton.link}/`}>
            <Button
              text={rightButton.text}
              color="link"
              size="large"
              action={rightButton.action}
            />
          </Link>  
          </div>
        </div>
      ) : undefined}
    </div>
  );
};

export default BottomButtons;
