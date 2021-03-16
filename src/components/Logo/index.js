import logo from "./logo.png";

const Logo = () => {
    return(
    <figure className="image container mb-6 has-ratio" width="400">
        <img src={logo}/>
    </figure>);
}

export default Logo;