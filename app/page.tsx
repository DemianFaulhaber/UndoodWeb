import { LinkCard } from "./components/cards/cards";
import './home.css'

export default async function Home(){

    return(
        <>
        <article className="card-banner">
            <LinkCard imgDir="home_image01.svg" linkText="Conocenos" page="/about"/>
            <LinkCard imgDir="home_image03.svg" linkText="Aportá en un click" page="/colaborate"/>
            <LinkCard imgDir="home_image04.svg" linkText="Programas" page="/programs"/>
            <LinkCard imgDir="home_image02.svg" linkText="Contactanos" page="/contact"/>
        </article>
        <article className="impact-grid">
            <h1>Impacto</h1>
            <div className="items">
                <article className="impact-item">
                    <img src="kids_icon.svg" alt="reach" />
                    <p>+200 niños y niñas alcanzados</p>
                </article>
                <article className="impact-item">
                    <img src="home_icon.svg" alt="shelters" />
                    <p>6 hogares con los que colaboramos</p>
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