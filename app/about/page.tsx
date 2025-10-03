import Image from 'next/image'
import './about-us.css'

function Team(){
    return(
        <>
            <article className="coord">
                <Image src="/joaquin-team.png" width={300} height={300} alt="Joaquín Verdeja, Co-fundador de Undood Argentina"/>
                <h3>Joaquín Verdeja</h3>
                <p>Co-fundador<br/>Relaciones Institucionales</p>
            </article>
            <article className="coord">
                <Image src="/augusto-team.png" style={{objectFit:"cover"}} width={300} height={300} alt="Augusto Vitores, Co-fundador de Undood Argentina"/>
                <h3>Augusto Vitores</h3>
                <p>Co-fundador<br/>Relaciones Institucionales</p>
            </article>
            <article className="coord">
                <Image src="/milagros-team.png" style={{objectFit:"cover"}} width={300} height={300} alt="Milagros Cifre, Coordinadora de Comunicación Social en Undood"/>
                <h3>Milagros Cifre</h3>
                <p>Comunicación Social</p>
            </article>
            <article className="coord">
                <Image src="/francisco-team.png" style={{objectFit:"cover"}} width={300} height={300} alt="Francisco Laurence, Coordinador de Experiencia Undood"/>
                <h3>Francisco Laurence</h3>
                <p>Experiencia Undood</p>
            </article>
            <article className="coord">
                <Image src="/agostinad-team.png" style={{objectFit:"cover"}} width={300} height={300} alt="Agostina Dominguez, Coordinadora de Salud en Undood Argentina"/>
                <h3>Agostina Domingues</h3>
                <p>Salud</p>
            </article>
            <article className="coord">
                <Image src="/agustinaq-team.png" style={{objectFit:"cover"}} width={300} height={300} alt="Agustina Quintana, Coordinadora de Referentes Undood"/>
                <h3>Agustina Quintana</h3>
                <p>Referentes Undood</p>
            </article>
            <article className="coord">
                <Image src="/victoria-team.png" style={{objectFit:"cover"}} width={300} height={300} alt="Victoria Romero, Coordinadora de Logística en Undood Argentina"/>
                <h3>Victoria Romero</h3>
                <p>Logística</p>
            </article>
            <article className="coord">
                <Image src="/lourdes-team.png" style={{objectFit:"cover"}} width={300} height={300} alt="Lourdes Sosa, Coordinadora de Relaciones institucionales en Undood Argentina"/>
                <h3>Lourdes Sosa</h3>
                <p>Relaciones institucionales</p>
            </article>
        </>
    )
}

export default function AboutUs(){
    return(
        <main>
        <section className='about-header-section'>
            <Image src="/about_01.jpg" alt="Equipo de voluntarios de Undood Argentina trabajando con niños" width={0} height={0} sizes="100%" className="about-header-img" priority />
            <header className="about-header">
                <h1>¿Quiénes somos?</h1>
                <p>Undood Argentina es una <strong>Asociación Civil</strong> conformada por jóvenes de entre 16 a 30 años dedicada a brindar acompañamiento a
            hogares de niños, niñas y adolescentes (NNA) en situación de vulnerabilidad
            familiar.
            <br />
            <br />
            Colaboramos con <strong>más de 10 hogares transitorios</strong>.
            A través de nuestra diversa propuesta de programas y campañas,
            generamos un <strong>acompañamiento personalizado</strong>, cercano y
            comprometido trabajando en conjunto con los hogares.
            <br />
            <br />
            A su vez, acercamos a los jóvenes la posibilidad de <strong>involucrarse</strong> de
            manera activa con las infancias más desfavorecidas generando una
            toma de consciencia social enriquecida por la experiencia vivencial del
            voluntariado.
            </p>
            </header>
        </section>
        <section className="team-container">
            <div className="team">
                <Team />
            </div>
        </section>
        </main>
    )
}