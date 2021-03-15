import logo from "./logo.png";

const Logo = () => {
    return(
    <figure className="image container is-3by1 mb-6" width="400px">
        <img src={logo}/>
    </figure>);
}

export default Logo;