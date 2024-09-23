// Importando o CSS
import './style.css';

// Importando o Componente do Botão
import ButtonPS from '../button';

// Importando Imagens
import { IconCube, IconDivider } from '../../assets/images/importImages';

export default function ProductService() {
    return (

        <section className='product-service-container'>
            {/* Conteúdo do Lado Esquerdo da Seção */}
            <div className='product-service-content-left'>
                <h6>How it works</h6>

                <h2>Headline with USP related to how your product or service works</h2>

                {/* Chamando o Componente do Botão */}
                <div>
                    <ButtonPS
                        buttonName='Learn more'
                    />
                </div>

            </div>

            {/* Parte dos Cards */}
            <div className='summary-card-container'>
                {/* Chamando o Componente dos Cards Criado Abaixo */}
                <SummaryCard
                    // Icone da Barra
                    summaryDivider={IconDivider}

                    // Titulo do Card
                    summaryTitle='Short summary of step one'
                />

                <SummaryCard
                    // Icone da Barra
                    summaryDivider={IconDivider}

                    // Titulo do Card
                    summaryTitle='Short summary of step two'
                />

                <SummaryCard
                    // Icone da Barra
                    summaryDivider={IconDivider}

                    // Titulo do Card
                    summaryTitle='Short summary of step three'
                />

                {/* A "prop" - "iconRemove" é para Remover a Barra Neste Ultimo Card */}
                <SummaryCard iconRemove='remove'
                    // Titulo do Card
                    summaryTitle='Short summary of step four'
                />

            </div>

        </section>
    );
}

// Componente dos Cards
// As "props" Utilizadas São para - "summaryDivider" - Barra que vai Abaixo da Imagem do Cubo; "iconRemove" - Utilizada para Remover a Barra Somente Quando Chamada e Passada no Card; "summaryTitle" - Para Passar o Titulo
function SummaryCard({ summaryDivider, iconRemove, summaryTitle }) {
    return (
        <div className='summary-container'>
            {/* Div Somente dos Icones */}
            <div className='summary-icons'>
                {/* Imagem do Cubo */}
                <img className='image-cube' src={IconCube} alt="icone de um cubo pequeno" />

                {/* Imagem da Barra */}
                <img className={`icon-divider-summary icon-divider-${iconRemove}`} src={summaryDivider} alt="barra de separação" />

            </div>

            {/* Div dos Conteúdos */}
            <div className='summary-content'>
                {/* Titulo do Card */}
                <h3>{summaryTitle}</h3>

                {/* Texto do Card */}
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>

            </div>

        </div>
    );
}