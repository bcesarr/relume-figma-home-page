import "./style.css";
import Image from "../../assets/images/placeholder-image.svg";

export default function Section({ aligment }) {
    return (
        <div className={`section-container section-${aligment}`}>
            <img src={Image} alt="Imagem de local de imagem vazio para se colocar imagem" />

            <div className="section-text">
                <h6>Feature three</h6>

                <h2>Describe benefit of feature three</h2>

                <p>Highlight Unique Selling Proposition (USP) with a short summary of the key feature and how it benefits customers.</p>

                <button>Learn more</button>

            </div>

        </div>
    )
}