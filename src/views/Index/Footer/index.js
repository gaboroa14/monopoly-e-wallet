import marvel from "./marvel.png"
import kuro from "./kuro.png"

const Footer = () => {
    return(
        <div className="level has-text-centered is-mobile">
            <div className="level-left">
                <div className="level-item">
                    <img src={marvel} className="image is-128x128"/>
                </div>
            </div>
            <div className="level-left">
                <div className="level-item">
                    <img src={kuro} className="image is-128x128"/>
                </div>
            </div>
        </div>
    );
}

export default Footer;