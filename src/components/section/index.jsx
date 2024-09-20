import "./style.css";
import ButtonSection from "../button";
import Image from "../../assets/images/placeholder-image.svg";

export default function Section({ subtitle, title, paragraph, aligment }) {
    return (
        <section className={`section-container section-${aligment}`}>
            <img src={Image} alt="Imagem de local de imagem vazio para se colocar imagem" />

            <div className="section-text">
                <h6>{subtitle}</h6>
                
                <h2>{title}</h2>
                
                <p>{paragraph}</p>

                <ButtonSection
                    buttonName="Learn more"
                />

            </div>

        </section>
    )
}