import "./style.css";
import { useState } from "react";
import ButtonHeader from "../button";
// Importamos o logo chamando de "Logo" e buscamos o caminho da pasta assim.
import LogoHeader from "../../assets/images/company-logo.svg";  
import { ChevronDown, ChevronUp } from "lucide-react";  // Icone de seta para baixo do menu do Header.

export default function Header() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    
    return (
        <header>
            <a href="#">
                <img src={LogoHeader} alt="logomarca da empresa" />
            </a>

            <nav className="nav-header">
                <ul>
                    <a href="#">Link One</a>
                    <a href="#">Link Two</a>
                    <a href="#">Link Three</a>
                </ul>
            </nav>

            <div className="menu-link-four">
                <button onClick={() => setMenuIsOpen(!menuIsOpen)}>Link Four{menuIsOpen ? <ChevronUp size={25}/> : <ChevronDown size={25}/>} </button>
                
                {menuIsOpen && (
                    <ul className="dropdown-menu">
                        <a href="">Link One</a>
                        <a href="">Link Two</a>
                        <a href="">Link Three</a>
                    </ul>
                )}
            </div>

            <ButtonHeader switchButton="switch"
                buttonName="Try it for free"
            />

        </header>
    )
}