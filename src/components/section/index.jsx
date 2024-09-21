// Importando o CSS
import './style.css';

// Importando o Componente do Botão
import ButtonSection from '../button';

// Importando Imagem
import Image from '../../assets/images/placeholder-image.svg';

// Utilizando as "props" para Passar o Conteúdo de Forma Dinamica e para Poder ser Alterado se Necessário
export default function Section({ subtitle, title, paragraph, aligment }) {
    return (
        // A "prop" - "aligment" é para Mudar a Seção do Lado Contrário Quando Necessário
        <section className={`section-container section-${aligment}`}>
            {/* Imagem Grande */}
            <img src={Image} alt='Imagem de local de imagem vazio para se colocar imagem' />

            <div className='section-text'>
                {/* Mini Texto Acima do titulo */}
                <h6>{subtitle}</h6>
                
                {/* Titulo */}
                <h2>{title}</h2>
                
                {/* Texto da Seção */}
                <p>{paragraph}</p>
                
                {/* Chamando o Componente do Botão */}
                <ButtonSection
                    buttonName='Learn more'
                />

            </div>

        </section>
    )
}