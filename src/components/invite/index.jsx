// Importando o CSS
import './style.css';

// Importando o Componente do Email
import EmailInputButton from '../email-input-button';

// Importando Imagens
import WebflowLogoInvite from '../../assets/images/webflow-logo.svg';
import RelumeLogoInvite from '../../assets/images/relume-logo.svg';

export default function Invite() {
    return (
        <section className='invite-container'>
            <div className='invite-content'>
                <h2>Call to action that invites visitor to<br/>try the product for free</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros<br /> elementum tristique.</p>
                
            </div>

            {/* Chamando o Componente do Email */}
            <div className='input-container'>
                <EmailInputButton />
            </div>

            {/* Parte dos Logos das Empresas */}
            <div className='invite-companies'>
                <p>Trusted by the world's best companies [social proof to build credibility]</p>

                <div className='companies-logos-div'>
                    {/* Chamando o Componente Criado Abaixo que Contém os Logos das Empresas */}
                    <InviteLogos />
                    <InviteLogos />
                    <InviteLogos />
                </div>
            </div>

        </section>
    )
}

// Componente Criado para Colocar os Logos das Empresas de Forma mais Agil onde Necessário
function InviteLogos() {
    return (
        <div className='invite-logos-div'>
            <img className='webflow-logo-invite' src={WebflowLogoInvite} alt='Logo da Webflow'/>
            <img className='relume-logo-invite' src={RelumeLogoInvite} alt='Logo da Relume'/>
        </div>
    )
}