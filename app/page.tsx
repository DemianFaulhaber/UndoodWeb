import { LinkCard } from "./components/cards/cards";
import './home.css'

export default async function Home(){

    return(
        <>
        <header className="introduction">
            <h1>Undood, Transformando realidades, una infancia a la vez</h1>
            <p>Somos Undood Argentina, una Asociación Civil que acompaña a hogares de niños, niñas y adolescentes en situación de vulnerabilidad familiar.</p>
            <br />
            <p>Buscamos estar presentes, compartir y apoyar a quienes más lo necesitan a partir de la detección y solución de necesidades reales, concretas y generalizadas.</p>
        </header>
        <article className="card-banner">
            <LinkCard imgDir="home_image01.jpg" linkText="Conocenos" page="/about"/>
            <LinkCard imgDir="home_image03.jpg" linkText="Aportá en un click" page="/collaborate"/>
            <LinkCard imgDir="home_image04.jpg" linkText="Programas" page="/programs"/>
            <LinkCard imgDir="home_image02.jpg" linkText="Contactanos" page="/contact"/>
        </article>
        <article className="impact-grid">
            <h1 style={{fontSize:"2.5vw"}}>Impacto</h1>
            <div className="items">
                <article className="impact-item">
                    <img src="kids_icon.svg" alt="reach" />
                    <p>+200 niños y niñas alcanzados</p>
                </article>
                <article className="impact-item">
                    <img src="home_icon.svg" alt="shelters" />
                    <p>+10 hogares con los que colaboramos</p>
                </article>
                <article className="impact-item">
                    <img src="hands_icon.svg" alt="volunteers" />
                    <p>+40 voluntarios trabajando</p>
                </article>
            </div>
        </article>
        </>
    )
}