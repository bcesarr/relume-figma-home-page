import "./style.css";
import ButtonHeader from "../button";
// Importamos o logo chamando de "Logo" e buscamos o caminho da pasta assim.
import Logo from "../../assets/images/company-logo.svg";  
import { ChevronDown } from "lucide-react";  // Icone de seta para baixo do menu do Header.

export default function Header() {
    return (
        <header>
            <img src={Logo} alt="logomarca da empresa" />

            <nav>
                <ul>
                    <a href="#">Link One</a>
                    <a href="#">Link Two</a>
                    <a href="#">Link Three</a>
                    <a href="#">Link Four <ChevronDown /> </a>
                </ul>
            </nav>

            <ButtonHeader switchButton="switch"
                buttonName="Try it for free"
            />

        </header>
    )
}