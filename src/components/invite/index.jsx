import "./style.css";
import EmailInputButton from "../email-input-button";
import WebflowLogoInvite from "../../assets/images/webflow-logo.svg";
import RelumeLogoInvite from "../../assets/images/relume-logo.svg";

export default function Invite() {
    return (
        <section className="invite-container">
            <div className="invite-content">
                <h2>Call to action that invites visitor to<br/>try the product for free</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros<br /> elementum tristique.</p>
                
            </div>

            <div>
                <EmailInputButton />
            </div>

            <div className="invite-companies">
                <p>Trusted by the world's best companies [social proof to build credibility]</p>

                <div className="companies-logos-div">
                    <InviteLogos />
                    <InviteLogos />
                    <InviteLogos />
                </div>
            </div>

        </section>
    )
}

function InviteLogos() {
    return (
        <div className="invite-logos-div">
            <img className="webflow-logo-invite" src={WebflowLogoInvite} alt="Logo da Webflow" />
            <img className="relume-logo-invite" src={RelumeLogoInvite} alt="Logo da Relume" />
        </div>
    )
}