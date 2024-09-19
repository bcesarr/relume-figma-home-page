// Importando os componentes da Página.
import Header from "../../components/header";
import Hero from "../../components/hero";
import Card from "../../components/card";
import Section from "../../components/section";

// Importando imagens e icones.
import Cube from "../../assets/images/icons/icon-cube.svg";

export default function Home() {
    return (
        <div className="app-container">
            <Header />
            <Hero />
            
            <div className="card-container">
                <Card
                    image={Cube}

                    imgAlt="Imagem de um cubo pequeno"

                    title="Highlight benefit one"

                    paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
                />

                <Card
                    image={Cube}

                    imgAlt="Imagem de um cubo pequeno"

                    title="Highlight benefit two"

                    paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
                />

                <Card
                    image={Cube}

                    imgAlt="Imagem de um cubo pequeno"

                    title="Highlight benefit three"

                    paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
                />

            </div>

            <div>
                <Section
                    subtitle="Feature one"

                    title="Describe benefit of feature one"
    
                    paragraph="Highlight Unique Selling Proposition (USP) with a short summary of the key feature and how it benefits customers."
                />

                <Section aligment="right"

                    subtitle="Feature two"

                    title="Describe benefit of feature two"
    
                    paragraph="Highlight Unique Selling Proposition (USP) with a short summary of the key feature and how it benefits customers."
                />

                <Section
                    subtitle="Feature three"

                    title="Describe benefit of feature three"
    
                    paragraph="Highlight Unique Selling Proposition (USP) with a short summary of the key feature and how it benefits customers."
                />

            </div>
            
            
        </div>
    )
}