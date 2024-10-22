// Importando o CSS
import './style.css';

// Importando Imagens
import { IconStars, AvatarImage, IconDivider, WebflowLogo } from '../../assets/images/importImages';

// A "prop" - "peapleName" é usada para passar o nome da pessoa em cada caso especifico em que o componente é chamado.
export default function Comments({ peapleName }) {
    return (
        <section className='comments-container'>
            {/* Estrelas do Inicio do Comentario */}
            <img src={IconStars} alt="icone com 5 estrelas" />


            {/* Texto do Comentario */}
            <p> <b>"A customer testimonial that highlights features and answers potential<br />customer doubts about your product or service. Showcase testimonials<br />from a similar demographic to your customers."</b> </p>

            <div className='custumer-container'>
                {/* Imagem do Avatar dos Comentaristas */}
                <img className='avatar-image' src={AvatarImage} alt="imagem de campo vazio para colocar uma foto de um comentarista" />

                <div className='custumer-info'>
                    {/* Nome do Comentarista */}
                    <h3>{peapleName}</h3>

                    {/* Posição , Nome da Empresa do Comentarista */}
                    <p>Position, Company Name</p>
                </div>

                {/* Icone de Barra de Divisão */}
                <img className='icon-divider-comments' src={IconDivider} alt="barra de separação" />

                {/* Imagem do Logo da Webflow */}
                <img className='webflow-logo' src={WebflowLogo} alt="logo da webflow" />
            </div>
            
        </section>
    );
}