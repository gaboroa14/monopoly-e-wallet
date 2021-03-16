import marvel from "./marvel.png"
import kuro from "./kuro.png"

const Footer = () => {
    return(
        <div className="level has-text-centered is-mobile mt-6">
            <div className="level-left mt-6">
                <div className="level-item">
                    <img src={marvel} className="image has-ratio" width="125"/>
                </div>
            </div>
            <div className="level-right mt-6">
                <div className="level-item">
                    <img src={kuro} className="image has-ratio" width="67"/>
                </div>
            </div>
        </div>
    );
}

export default Footer;