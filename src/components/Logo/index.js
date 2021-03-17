import logo from "./logo.png";

const Logo = ({mb}) => {
    return(
    <figure className={`image container mb-${mb} has-ratio`} width="400" style={{marginTop: "-2rem"}}>
        <img alt="Logo de Monopoly" src={logo}/>
    </figure>);
}

export default Logo;