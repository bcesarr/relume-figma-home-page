import "./style.css";

export default function emailInputButton() {
    return (
        <div className="email-input-container">
            <div className="email-button">
                <input type="email" placeholder=" Enter your email" />
        
                <button type="button">Try it for free</button>
            </div>
                
            <div>
                <p><span>By clicking Sign Up you're confirming that you agree with our Terms and Conditions.</span></p>
            </div>

        </div>
    )
}