import "./style.css";

export default function emailInputButton({underline}) {
    return (
        <div className="email-input-container">
            <div className="email-button">
                <input type="email" placeholder=" Enter your email" />
        
                <button type="button">Try it for free</button>
            </div>
            
            <p className={`terms-conditions-${underline}`}>By clicking Sign Up you're confirming that you agree with our <span>Terms and Conditions</span>.</p>

        </div>
    )
}