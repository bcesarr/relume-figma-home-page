import "./style.css";
import EmailInputButton from "../email-input-button";
import Placeholder from "../../assets/images/placeholder-image.svg";

export default function Hero() {
    return (
        // Hero da Página
        <section className="hero">
            <div className="hero-infos">
                <h2>Resonate with the<br />visitor's problem</h2>
                <p>Describe exactly what your product or service does to solve this problem.<br /> Avoid using verbose words or phrases.</p>

                <div>
                    <EmailInputButton />
                </div>

            </div>

            <img src={Placeholder} alt="Imagem de um local vazio na pag, esperando uma imagem ser adicionada" />

        </section>

    )
}