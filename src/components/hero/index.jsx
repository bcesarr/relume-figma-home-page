// Importando o CSS
import './style.css';

// Importando o Componente do Email
import EmailInputButton from '../email-input-button';

// Importando Imagem
import { PlaceholderImage } from '../../assets/images/importImages';

export default function Hero() {
    return (
        // Hero da Página
        <section className='hero'>
            <div className='hero-infos'>
                <h2>Resonate with the<br />visitor's problem</h2>
                <p>Describe exactly what your product or service does to solve this problem. Avoid using verbose words or phrases.</p>
                
                <div>
                    {/* Chamando Componente do Email */}
                    <EmailInputButton underline='true' />
                </div>

            </div>

            <img src={PlaceholderImage} alt="Imagem de um local vazio na pag, esperando uma imagem ser adicionada" />

        </section>
    );
}