const Button = ({text, color, action, size}) => {
    return(
        <button className={`button is-${color} is-${size}`} onClick={action}>{text}</button>
    );
}

export default Button;