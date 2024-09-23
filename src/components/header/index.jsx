// Importando o CSS
import './style.css';

// Importando o "useState"
import { useState } from 'react';

// Importando o Componente do Botão
import ButtonHeader from '../button';

// Importando Imagens
import { CompanyLogo } from '../../assets/images/importImages';

// Importando Icones da Biblioteca "lucide-react"
import { ChevronDown, ChevronUp } from 'lucide-react';  // Icone de seta para baixo do menu do Header.

export default function Header() {
    // Variavel criada para usar o "useState"
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <header>
            <a href='#'>
                {/* Imagem do Logo da Empresa */}
                <img src={CompanyLogo} alt="logomarca da empresa" />
            </a>

            {/* Menu dos Links do Topo da Página */}
            <nav className='nav-header'>
                <ul>
                    <a href="#">Link One</a>
                    <a href="#">Link Two</a>
                    <a href="#">Link Three</a>
                </ul>
            </nav>

            {/* Link com o Accordion - Setinha com Icone para Baixo e Outros Menus */}
            <div className='menu-link-four'>

                {/* Accordion com Operador Ternário */}
                {/* "onClick" - Evento ao Clicar no Botão; "setMenuIsOpen" - Mudar a Situação do "menuIsOpen" para Diferente do que Ela estiver - Se estiver "False" fica "True" e, vice versa; "menuIsOpen ?" - Significa: O Menu "está aberto ?" - Mude para a Seta para Cima, "Se Não" - ":", Seta para Baixo.    */}
                <button onClick={() => setMenuIsOpen(!menuIsOpen)}>Link Four{menuIsOpen ? <ChevronUp size={25} /> : <ChevronDown size={25} />} </button>

                {/* && Significa que o Resultado Daquela Ação Sera Somente este, no Caso, Mostrar o Menu Abaixo, Não Tera Outra Ação Depois */}
                {menuIsOpen && (
                    // Menu "Dentro" do Link Four que Aparecera ao Clicar na Seta.
                    <ul className='dropdown-menu'>
                        <a href="#">Link One</a>
                        <a href="#">Link Two</a>
                        <a href="#">Link Three</a>
                    </ul>
                )}
            </div>

            <div>
                {/* Chamando o Componente do Botão e Trocando com a "pror" - "switch" o Estilo e Cor do Botão */}
                <ButtonHeader switchButton='switch'
                    buttonName='Try it for free'
                />
            </div>
            
        </header>
    );
}