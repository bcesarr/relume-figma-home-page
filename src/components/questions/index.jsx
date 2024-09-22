// Importando o CSS
import './style.css';

// Importando o "useState"
import { useState } from 'react';

// Importando o Componente do Botão
import ButtonQuestion from '../button';

// Importando Icones da Biblioteca "lucide-react"
import { ChevronUp, ChevronDown } from 'lucide-react';  // Icone de seta para cima do campo das questions.

export default function Questions() {
    return (

        <section className='questions-container-geral'>
            {/* Parte dos Conteúdos da Esquerda da Seção */}
            <div className='questions-content'>
                {/* Titulo */}
                <h2>Frequently asked questions</h2>

                <p>Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.</p>

                {/* Chamando o Componente do Botão */}
                <ButtonQuestion
                    buttonName='Contact us'
                />

            </div>

            {/* Chamando o Componente dos Cards a Direita da Seção */}
            <div>
                {/* A "prop" - "isOpenDefault" é por Padrão "false", no Primeiro Card ela esta como "true" para Iniciar com o Card já Aberto */}
                <QuestionCard isOpenDefault='true' />
                <QuestionCard />
                <QuestionCard />
                <QuestionCard />
                {/* A "prop" - "borderLine" é para Adicionar a Borda de baixo do Ultimo Card */}
                <QuestionCard borderLine='bottom' />
            </div>

        </section>
    );
}

// Componente dos Cards 
// A "prop" - "borderLine" é para Colocar uma Borda no Final do Ultimo Card; a "prop" - "isOpenDefault" está setando que o Estado Dela já Começa com "false" e, ficara como "true" ao Clicarem no Botão, Porém, no Card que for Necessário, ela Começa como "true" para o Card Iniciar Aberto
function QuestionCard({ borderLine, isOpenDefault = false }) {
    // Variavel criada para usar o "useState"
    const [isOpen, setIsOpen] = useState(isOpenDefault);

    return (
        // Passando a "prop" - "borderLine" para Adicionar a Borda de Baixo do Ultimo Card Importando
        <div className={`questions-card-container question-card-border-${borderLine}`}>
            {/* Topo do Card */}
            <div className='questions-top'>
                <h3>Question text goes here</h3>

                {/* Accordion com Operador Ternário */}
                {/* "onClick" - Evento ao Clicar no Botão; "setMenuIsOpen" - Mudar a Situação do "menuIsOpen" para Diferente do que Ela estiver - Se estiver "False" fica "True" e, vice versa; "menuIsOpen ?" - Significa: O Menu "está aberto ?" - Mude para a Seta para Cima, "Se Não" - ":", Seta para Baixo.    */}
                <button type="button" onClick={() => setIsOpen(!isOpen)} > {isOpen ? <ChevronUp /> : <ChevronDown />}</button>
            </div>

            {/* Final do Card */}
            {/* && Significa que o Resultado Daquela Ação Sera Somente este, no Caso, Mostrar o Menu Abaixo, Não Tera Outra Ação Depois */}
            {isOpen && (
                // Texto do Card
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            )}

        </div>
    );
}