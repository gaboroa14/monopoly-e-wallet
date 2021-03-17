import Button from "../Button";

const BottomButtons = ({ leftButton, rightButton }) => {
  return (
    <div className="level is-mobile has-text-black mt-4">
      <div className="level-item">
        <div className="level-left">
            <Button
              text={leftButton.text}
              color="warning"
              size="large"
              action={leftButton.action}
            />
        </div>
      </div>
      {rightButton ? (
        <div className="level-item">
          <div className="level-right">
            <Button
              text={rightButton.text}
              color="link"
              size="large"
              action={rightButton.action}
            />
          </div>
        </div>
      ) : undefined}
    </div>
  );
};

export default BottomButtons;
