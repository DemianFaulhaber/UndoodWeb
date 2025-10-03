import Link from "next/link";
import Image from "next/image";
import './programs.css'

export default function Programs(){
	return(
        <main>
            <section className="afternoons-section">
                <Image 
                    src="/campaigns_01.jpg" 
                    alt="Campañas de recreación de Undood Argentina" 
                    width={0} 
                    height={0} 
                    sizes="100vw"
                    className="programs-img"
                    priority
                />
                <article className="afternoons-article">
                    <h2 className="programs-title">Tardes Recreativas</h2>
                    <p className="programs-text">
                        Vamos de <strong>visita al hogar</strong> de los niños, niñas y adolescentes quienes nos invitan a compartir una tarde de risas, juegos y actividades pensadas específicamente a raíz de sus gustos e intereses.
                    </p>
                </article>
            </section>
            <section className="childrens-day-section">
                <Image 
                    src="/campaigns_02.jpg" 
                    alt="Campañas del día del niño de Undood Argentina" 
                    width={0} 
                    height={0} 
                    sizes="100vw"
                    className="programs-img"
                    priority
                />
                <article className="childrens-day-article">
                    <h2 className="programs-title">Día de la Niñez</h2>
                    <p className="programs-text">
                        Durante todo el mes de Agosto festejamos el día de la niñez. Generando <strong>festejos, eventos, salidas y programas</strong> que hagan sentir a los niños y niñas los protagonistas, recordando que lo esencial en sus vidas es el derecho de disfrutar de una niñez en plenitud
                    </p>
                </article>
            </section>
            <section className="birthday-section">
                <Image 
                    src="/campaigns_03.jpg" 
                    alt="Campañas de cumpleaños de Undood Argentina" 
                    width={0} 
                    height={0} 
                    sizes="100vw"
                    className="programs-img"
                    priority
                />
                <article className="birthday-article">
                    <h2 className="programs-title">Festejo de Cumpleaños</h2>
                    <p className="programs-text">
                       Festejamos los cumpleaños de los niños, niñas y adolescentes de los hogares en los que colaboramos, enviándoles todo lo necesario para que tengan un día especial.<br/><br/>En esta celebración buscamos <strong>dejar una huella</strong> en la memoria de los niños y las niñas, con el fin de generar un día en el cual ellos sean el centro, se sientan queridos y especiales.
                    </p>
                </article>
            </section>
            <section className="christmas-section">
                <Image 
                    src="/campaigns_04.jpg" 
                    alt="Campañas de Navidad de Undood Argentina" 
                    width={0} 
                    height={0} 
                    sizes="100vw"
                    className="programs-img"
                    priority
                />
                <article className="christmas-article">
                    <h2 className="programs-title">Campaña Navideña</h2>
                    <p className="programs-text">
                        ¡Festejamos la navidad junto a los niños y niñas de los hogares!<br/><br/>Gracias a la campaña “Convertite en Papá/Mamá Noel”:</p>
						<ul className="christmas-list">
							<li className="programs-text">Cada niño/a recibe un regalo personalizado.</li>
							<li className="programs-text">Los sorprende la visita de actores y actrices profesionales como Papá y Mamá Noel.</li>
							<li className="programs-text">Participan de actividades temáticas organizadas para llenar de alegría y espíritu navideño a todos los hogares.</li>
						</ul> 
						<p className="programs-text">
						Esta campaña alcanza a más de 200 niños y niñas en más de 10 hogares transitorios.
                    </p>
                </article>
            </section>
            <section className="another-activities-section an-act-campaigns">
                <h2 className="programs-title">Otras Actividades de Undood</h2>
                <article>
                    <Image 
                        src="/programs_01.jpg" 
                        alt="Otras actividades de Undood Argentina" 
                        width={0} 
                        height={0} 
                        sizes="100vw"
                        className="programs-img"
                        priority
                    />
                    <div className="programs-ac-description">
                        <h2 className="programs-title">Programas de Salud</h2>
                        <p className="programs-text">
                            Conocé más sobre nuestros esfuerzos por llevar campañas de salud e higiene a los niños y niñas que más los necesitan.
                        </p>
                        <Link href="/programs/health" className="programs-buttons">Ver Más</Link>
                    </div>
                </article>
            </section>
        </main>
    )
}

