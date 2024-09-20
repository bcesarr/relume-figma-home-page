import "./style.css";
import ButtonPS from "../button";
import ImageCube from "../../assets/images/icons/icon-cube.svg"
import IconDividerSummary from "../../assets/images/icons/icon-divider.svg";

export default function ProductService() {
    return (

        <section className="product-service-container">
            <div>
                <h6>How it works</h6>

                <h2>Headline with USP related to how your product or service works</h2>

                <ButtonPS
                    buttonName="Learn more"
                />
                
            </div>

            <div className="summary-card-container">
                <SummaryCard
                    summaryDivider={IconDividerSummary}

                    summaryTitle="Short summary of step one"
                />

                <SummaryCard
                    summaryDivider={IconDividerSummary}

                    summaryTitle="Short summary of step two"
                />

                <SummaryCard
                    summaryDivider={IconDividerSummary}

                    summaryTitle="Short summary of step three"
                />

                <SummaryCard iconRemove="remove"
                    summaryTitle="Short summary of step four"
                />

            </div>

        </section>
    )
}


function SummaryCard({summaryDivider, iconRemove, summaryTitle}) {
    return (
        <div className="summary-container">
                <div className="summary-icons">
                    <img className="image-cube" src={ImageCube} alt="icone de um cubo pequeno" />

                    <img className={`icon-divider-summary icon-divider-${iconRemove}`} src={summaryDivider} alt="barra de separação" />

                </div>

                <div className="summary-content">
                    <h3>{summaryTitle}</h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>

                </div>

            </div>
    ) 
}