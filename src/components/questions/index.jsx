import "./style.css";
import { useState } from "react"
import ButtonQuestion from "../button";
import { ChevronUp, ChevronDown } from "lucide-react";  // Icone de seta para cima do campo das questions.

export default function Questions() {
    return (

        <section className="questions-container-geral">
            <div className="questions-content">
                <h2>Frequently asked questions</h2>

                <p>Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.</p>

                <ButtonQuestion
                    buttonName="Contact us"
                />

            </div>

            <div>
                <QuestionCard isOpenDefault="true"/>
                <QuestionCard />
                <QuestionCard />
                <QuestionCard />
                <QuestionCard borderLine="bottom"/>
            </div>

        </section>
    )
}

function QuestionCard({borderLine, isOpenDefault = false}) {
    const [isOpen, setIsOpen] = useState(isOpenDefault);

    return (
        <div className={`questions-card-container question-card-border-${borderLine}`}>
            <div className="questions-top">
                <h3>Question text goes here</h3>

                <button type="button" onClick={() => setIsOpen(!isOpen)} > {isOpen ? <ChevronUp /> : <ChevronDown />}</button>
            </div>

            {isOpen && (
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            )}

        </div>
    )
}