import Image from 'next/image'
import './about-us.css'



function Team(){
    return(
        <>

            <div className="coord">
                {/* <img src="joaquin-team.png" alt="" /> */}
                <Image src="/joaquin-team.png" width={300} height={300} alt="Joaquín Verdeja"/>
                <h1>Joaquín Verdeja</h1>
                <h2>Co-fundador</h2>
            </div>
            <div className="coord">
                <Image src="/augusto-team.png" style={{objectFit:"cover"}} width={300} height={300} alt="Augusto Vitores"/>
                <h1>Augusto Vitores</h1>
                <h2>Co-fundador</h2>
            </div>
            <div className="coord">
                <Image src="/milagros-team.png" style={{objectFit:"cover"}} width={300} height={300} alt="Milagros Cifre"/>
                <h1>Milagros Cifre</h1>
                <h2>Comunicación Social</h2>
            </div>
            <div className="coord">
                <Image src="/agostinad-team.png" style={{objectFit:"cover"}} width={300} height={300} alt="Agostina Domingues"/>
                <h1>Agostina Domingues</h1>
                <h2>Salud</h2>
            </div>
            <div className="coord">
                <Image src="/agustinaq-team.png" style={{objectFit:"cover"}} width={300} height={300} alt="Agustina Quintana"/>
                <h1>Agustina Quintana</h1>
                <h2>Referentes Undood</h2>
            </div>
            <div className="coord">
                <Image src="/victoria-team.png" style={{objectFit:"cover"}} width={300} height={300} alt="Victoria Romero"/>
                <h1>Victoria Romero</h1>
                <h2>Logística</h2>
            </div>
            <div className="coord">
                <Image src="/francisco-team.png" style={{objectFit:"cover"}} width={300} height={300} alt="Franciso Laurence"/>
                <h1>Francisco Laurence</h1>
                <h2>Experiencia Undood</h2>
            </div>
            <div className="coord">
                <img src="lourdes-team.png" alt="" />
                <h1>Lourdes Sosa</h1>
                <h2></h2>
            </div>
            <div className="coord">
                <img src="joaquin-team.png" alt="" />
                <h1>Joaquín Verdeja</h1>
                <h2>Relaciones Institucionales</h2>
            </div>
            <div className="coord">
                <img src="augusto-team.png" alt="" />
                <h1>Augusto Vitores</h1>
                <h2>Relaciones Institucionales</h2>
            </div>
        </>
    )
}

export default function  AboutUs(){
    return(
        <>
        <article className="about-us">
            <p>Undood Argentina es una <strong>Asociación Civil</strong> conformada por jóvenes de entre 16 a 30 años dedicada a brindar acompañamiento a
            hogares de niños, niñas y adolescentes (NNA) en situación de vulnerabilidad
            familiar.
            <br />
            <br />
            Colaboramos con más de 10 hogares transitorios.
            A través de nuestra diversa propuesta de programas y campañas,
            generamos un acompañamiento personalizado, cercano y
            comprometido trabajando en conjunto con los hogares.
            <br />
            <br />
            A su vez, acercamos a los jóvenes la posibilidad de involucrarse de
            manera activa con las infancias mas desfavorecidas generando una
            toma de consciencia social enriquecida por la experiencia vivencial del
            voluntariado.
            </p>
            <br />
        </article>
        <article className="team-container">
            <h1 className='about-title'>Nuestro equipo</h1>
            <div className="team">
                <Team />
            </div>
        </article>
        </>
    )
}