//  ---------- Card Dinamico ----------  \
import "./style.css";

export default function Card ({image, imgAlt, title, paragraph}) {
  return (
        <section className="card">
            <img src={image} alt={imgAlt}/>

            <h3>{title}</h3>

            <p>{paragraph}</p>
        </section>

    )
}