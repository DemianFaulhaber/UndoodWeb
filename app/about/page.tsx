import './about-us.css'



function Team(){
    return(
        <>

            <div className="coord">
                <img src="joaquin-team.png" alt="" />
                <h1>Joaquin Verdeja</h1>
                <h2>Co-fundador</h2>
            </div>
            <div className="coord">
                <img src="augusto-team.png  " alt="" />
                <h1>Augusto Vitores</h1>
                <h2>Co-fundador</h2>
            </div>
            <div className="coord">
                <img src="milagros-team.png" alt="" />
                <h1>Milagros Cifre</h1>
                <h2>Comunicación Social</h2>
            </div>
            <div className="coord">
                <img src="agostinad-team.png" alt="" />
                <h1>Agostina Domingues</h1>
                <h2>Salud</h2>
            </div>
            <div className="coord">
                <img src="agustinaq-team.png" alt="" />
                <h1>Agustina Quintana</h1>
                <h2>Referentes Undood</h2>
            </div>
            <div className="coord">
                <img src="victoria-team.png" alt="" />
                <h1>Victoria Romero</h1>
                <h2>Logística</h2>
            </div>
            <div className="coord">
                <img src="francisco-team.png" alt="" />
                <h1>Francisco Laurence</h1>
                <h2>Experiencia Undood</h2>
            </div>
            <div className="coord">
                <img src="joaquin-team.png" alt="" />
                <h1>Joaquín Verdeja</h1>
                <h2>Relaciones Institucionales</h2>
            </div>
        </>
    )
}

export default function  AboutUs(){
    return(
        <>
        <article className="about-us">
            <p>Undood Argentina es una <strong>Asociación Civil</strong> conformada por jóvenes de entre 17 a 24 años de edad dedicada a brindar acompañamiento a
            hogares de niños, niñas y jóvenes en situación de vulnerabilidad
            familiar.
            <br />
            <br />
            Colaboramos con mas de 10 hogares transitorios que albergan a niños,
            niñas y jóvenes en situación de vulnerabilidad familiar.
            A través de nuestra diversa propuesta de programas y campañas,
            generamos un acompañamiento personalizado, cercano y
            comprometido ayudando a los hogares en la ardua tarea de restituir la
            niñez en los niños y niñas.
            <br />
            <br />
            A su vez, acercamos a los jóvenes la posibilidad de involucrarse de
            manera activa con las infancias mas desfavorecidas generando una
            toma de conciencia social enriquecida por la experiencia vivencial del
            voluntariado.
            </p>
            <br />
        </article>
        <article className="team-container">
            <h1>Nuestro equipo</h1>
            <div className="team">
                <Team />
            </div>
        </article>
        </>
    )
}