import Image from "next/image"
import '../programs.css'

export default function Health(){
    return(
        <main>
            {/* <section className="health-programs-header">
                <header>
                    <h1 className="programs-title">
                        Programas de salud
                    </h1>
        
                </header>
            </section> */}
            <section className="dentistry-section">
                    <Image 
                        src="/health_01.jpg" 
                        alt="Programas de salud de Undood Argentina" 
                        width={0} 
                        height={0} 
                        sizes="100vw"
                        className="programs-img"
                        priority
                    />
                    <article className="dentistry-article">
                        <h2 className="programs-title">Odontología Preventiva</h2>
                        <p className="programs-text">
                            ¡El 90% de las enfermedades bucales se previenen con un correcto cepillado de dientes!<br/><br/>Visitamos los hogares en <strong>labor preventiva</strong> entregando kits de cepillado de dientes y conscientizando sobre la salud bucal.
                        </p>
                    </article>
            </section>
            <section className="ophtalmology-section">
                <Image 
                    src="/health_02.jpg" 
                    alt="Programas de salud de Undood Argentina" 
                    width={0} 
                    height={0} 
                    sizes="100vw"
                    className="programs-img"
                    priority
                />
                <article className="ophtalmology-article">
                    <h2 className="programs-title">Oftalmología</h2>
                    <p className="programs-text">
                        Realizamos controles oftalmológicos anuales a fin de poder proporcionar <strong>anteojos o intervenciones quirúrgicas</strong> a quienes lo precisen. <br/><br/>¡Garantizamos un chequeo anual a todos los niños y niñas de los hogares!
                    </p>
                </article>
            </section>
            <section className="specific-section">
                <Image 
                    src="/health_03.jpg" 
                    alt="Programas de casos puntuales de Undood Argentina" 
                    width={0} 
                    height={0} 
                    sizes="100vw"
                    className="programs-img"
                    priority
                />
                <article className="specific-article">
                    <h2 className="programs-title">Casos Puntuales</h2>
                    <p className="programs-text">
                        ¡Gracias a nuestros partners médicos podemos <strong>conectar</strong> a los niños y niñas de los hogares con alguna situación puntual, con <strong>profesionales</strong> dispuestos a atenderlos de forma ad honorem!
                    </p>
                </article>
            </section>
            {/* <section className="another-activities-section">
                <h2 className="programs-title">Otras Actividades de Undood</h2>
                <article>
                    <Image 
                        src="/programs_02.jpg" 
                        alt="Otras actividades de Undood Argentina" 
                        width={0} 
                        height={0} 
                        sizes="100vw"
                        className="programs-img"
                        priority
                    />
                    <div className="programs-ac-description">
                        <h2 className="programs-title">Campañas</h2>
                        <p className="programs-text">
                            Conocé más sobre nuestras visitas a hogares, festejos y campañas de Navidad y Día de la Niñez en los hogares que visitamos.
                        </p>
                        <Link href="/programs/campaigns" className="programs-buttons">Ver Más</Link>
                    </div>
                </article>
            </section> */}
        </main>
    )
}