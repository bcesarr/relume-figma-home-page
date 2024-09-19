import "./style.css";
import Stars from "../../assets/images/icons/icon-stars.svg";
import AvatarImage from "../../assets/images/avatar-image.svg";
import IconDividerComments from "../../assets/images/icons/icon-divider.svg"
import WebflowLogo from "../../assets/images/webflow-logo.svg";

export default function Comments({peapleName}) {
    return (
        <section className="comments-container">
            <img src={Stars} alt="icone com 5 estrelas" />

            <p> <b>"A customer testimonial that highlights features and answers potential<br/>customer doubts about your product or service. Showcase testimonials<br/>from a similar demographic to your customers."</b> </p>

            <div className="custumer-container">
                <img className="a-vatar-image" src={AvatarImage} alt="imagem de campo vazio para colocar uma foto de um comentarista" />
                
                <div className="custumer-info">
                    <h3>{peapleName}</h3>

                    <p>Position, Company Name</p>
                </div>

                <img className="icon-divider-comments" src={IconDividerComments} alt="barra de separação" />

                <img className="webflow-logo" src={WebflowLogo} alt="logo da webflow" />

            </div>

        </section>
    )
}