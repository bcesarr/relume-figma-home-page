//  ---------- Card Dinamico ----------  \
// Importando o CSS
import './style.css';

// As "props" - "image", "imgAlt", "title", "paragraph" são para serem alteradas em cada card quando chamados, se necessário. - O valor delas é passado onde o componente é chamado.
export default function Card({ image, imgAlt, title, paragraph }) {
  return (
    <section className='card'>
      {/* Imagem do Cubo */}
      <img src={image} alt={imgAlt} />

      {/* Titulo do Card */}
      <h3>{title}</h3>

      {/* Texto do Card */}
      <p>{paragraph}</p>
    </section>
  );
}