// Importando o CSS
import './style.css';

// Importando Imagens
import { CompanyLogo, LogoFacebook, LogoInstagram, LogoX, LogoLinkedin, LogoYoutube } from '../../assets/images/importImages';

export default function Footer() {
    return (
        <footer>
            <div className='footer-principal'>
                <a href='#'>
                    {/* Logo da Empresa */}
                    <img src={CompanyLogo} alt="logomarca da empresa" />
                </a>

                {/* Menu dos Links do Centro do Footer */}
                <nav className='nav-footer'>
                    <ul>
                        <a href="#">Link One</a>
                        <a href="#">Link Two</a>
                        <a href="#">Link Three</a>
                        <a href="#">Link Four</a>
                        <a href="#">Link Five</a>
                    </ul>
                </nav>

                {/* Parte das Midias Sociais */}
                <div className='social-midias'>
                    <a href="#">
                        <img src={LogoFacebook} alt="Icone do Facebook" />
                    </a>

                    <a href="#">
                        <img src={LogoInstagram} alt="Icone do Instagram" />
                    </a>

                    <a href="#">
                        <img src={LogoX} alt="Icone do X" />
                    </a>

                    <a href="#">
                        <img src={LogoLinkedin} alt="Icone do Linkedin" />
                    </a>

                    <a href="#">
                        <img src={LogoYoutube} alt="Icone do Youtube" />
                    </a>

                </div>

            </div>

            {/* Segunda Parte do Footer */}
            <div className='footer-end'>
                <p>© 2023 Relume. All rights reserved.</p>

                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookies Settings</a>
            </div>
        </footer>
    );
}