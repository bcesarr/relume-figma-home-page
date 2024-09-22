// Importando os componentes da Página.
import { Header, Hero, ProductService, Card, Section, Comments, Invite, Questions, Footer } from '../../components/importComponents';

// Importando imagem
import { IconCube } from '../../assets/images/importImages';


export default function Home() {
    return (
        <div className='app-container'>
            <Header />
            <Hero />

            <div className='card-container'>
                <Card
                    image={IconCube}

                    imgAlt='Imagem de um icone de um cubo pequeno'

                    title='Highlight benefit one'

                    paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.'
                />

                <Card
                    image={IconCube}

                    imgAlt='Imagem de um icone de um cubo pequeno'

                    title='Highlight benefit two'

                    paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.'
                />

                <Card
                    image={IconCube}

                    imgAlt='Imagem de um icone de um cubo pequeno'

                    title='Highlight benefit three'

                    paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.'
                />

            </div>

            <ProductService />

            <Section
                subtitle='Feature one'

                title='Describe benefit of feature one'

                paragraph='Highlight Unique Selling Proposition (USP) with a short summary of the key feature and how it benefits customers.'
            />

            <Comments
                peapleName='Custumer Name'
            />

            <Section aligment='right'

                subtitle='Feature two'

                title='Describe benefit of feature two'

                paragraph='Highlight Unique Selling Proposition (USP) with a short summary of the key feature and how it benefits customers.'
            />

            <Comments
                peapleName='Name Surname'
            />

            <Section
                subtitle='Feature three'

                title='Describe benefit of feature three'

                paragraph='Highlight Unique Selling Proposition (USP) with a short summary of the key feature and how it benefits customers.'
            />

            <Invite />

            <Questions />

            <Footer />

        </div>
    );
}