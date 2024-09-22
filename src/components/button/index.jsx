// Importando o CSS
import './style.css';

// "buttonName" é a "prop" para setar o nome quando o botão for chamado.
// "switchButton" é a "prop" para mudar o estilo do botão, como for e tamanho, quando chamado.
export default function ButtonComponent({ buttonName, switchButton }) {
    return (
        <button className={`button-${switchButton}`} type='button'>{buttonName}</button>
    );
}