// Importando o CSS
import './style.css';

// A "props" - "underline" serve para deixar todo o texto subilinhado quando ela for setada, na ocasião necessaria.
export default function emailInputButton({ underline }) {
    return (
        <div className='email-input-container'>
            <div className='email-button'>
                {/* Input para Colocar o Email */}
                <input type="email" placeholder=' Enter your email' />

                {/* Botão */}
                <button type="button">Try it for free</button>
            </div>

            {/* Texto de Termos e Condições */}
            <p className={`terms-conditions-${underline}`}>By clicking Sign Up you're confirming that you agree with our <span>Terms and Conditions</span>.</p>

        </div>
    );
}