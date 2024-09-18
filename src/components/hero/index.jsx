import "./style.css";
import Placeholder from "../../assets/images/placeholder-image.svg";

export default function Hero() {
    return (
        // Hero da Página
        <section className="hero">
            <div className="hero-infos">
                <h2>Resonate with the<br />visitor's problem</h2>
                <p>Describe exactly what your product or service does to solve this problem.<br /> Avoid using verbose words or phrases.</p>

                <div className="email-button">
                    <input type="email" placeholder=" Enter your email" />

                    <button type="button">Try it for free</button>

                </div>

                <p><span>By clicking Sign Up you're confirming that you agree with our Terms and Conditions.</span></p>
            </div>

            <img src={Placeholder} alt="Imagem de um local vazio na pag, esperando uma imagem ser adicionada" />

        </section>

    )
}