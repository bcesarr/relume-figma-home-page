import "./style.css";

// Importamos o logo chamando de "Logo" e buscamos o caminho da pasta assim.
import LogoFooter from "../../assets/images/company-logo.svg";
import LogoFacebook from "../../assets/images/icons/icon-facebook.svg"
import LogoInstagram from "../../assets/images/icons/icon-instagram.svg"
import LogoX from "../../assets/images/icons/icon-x.svg"
import LogoLinkedin from "../../assets/images/icons/icon-linkedin.svg"
import LogoYoutube from "../../assets/images/icons/icon-youtube.svg"

export default function Footer() {
    return (
        <footer>
            <div className="footer-principal">
                <img src={LogoFooter} alt="logomarca da empresa" />

                <nav className="nav-footer">
                    <ul>
                        <a href="#">Link One</a>
                        <a href="#">Link Two</a>
                        <a href="#">Link Three</a>
                        <a href="#">Link Four</a>
                        <a href="#">Link Five</a>
                    </ul>
                </nav>

                <div className="social-midias">
                    <img src={LogoFacebook} alt="Icone do Facebook" />
                    <img src={LogoInstagram} alt="Icone do Instagram" />
                    <img src={LogoX} alt="Icone do X" />
                    <img src={LogoLinkedin} alt="Icone do Linkedin" />
                    <img src={LogoYoutube} alt="Icone do Youtube" />
                </div>

            </div>

            <div className="footer-end">
                <p>© 2023 Relume. All rights reserved.</p>

                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookies Settings</a>
            </div>
        </footer>
    )
}