import "../collaborate.css"
import Image from "next/image";
import Link from "next/link";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Únete como Voluntario',
  description: 'Convertite en voluntario de Undood y transformá la realidad de niños en situación de vulnerabilidad. Descubrí los beneficios de ser parte de nuestro equipo.',
  keywords: 'voluntario, voluntariado, joven, 16-25 años, CABA, GBA, cambio social',
}

export default function Join() {
  return (
    <main>
      <section className="join-header">
        <Image 
          src="/join_01.jpg" 
          alt="Voluntarios de Undood Argentina trabajando con niños en actividades comunitarias" 
          width={0} 
          height={0} 
          sizes="100%" 
          style={{width: '100%'}} 
          priority 
        />
        <header>
            <h1 className="collaborate-section-title">Convertite en voluntario/a</h1>
            <p className="collaborate-section-text">Ser parte de Undood significa mucho más que donar tu tiempo.<br/><br/>Significa estar presente donde más se necesita, crear vínculos reales, y dejar huella en infancias que merecen oportunidades.<br/><br/>Significa aprender, acompañar, emocionarte, crecer en equipo y confiar en que cada acción, por más chiquita que parezca, suma.</p>
        </header>
      </section>
      <section className="section-benefits" aria-labelledby="benefits-heading">
            <Image 
              src="/join_02.jpg" 
              alt="Beneficios de ser voluntario en Undood Argentina" 
              width={0} 
              height={0} 
              sizes="100%" 
              style={{width: '100%'}} 
              className="collaborate-header-img"
            />
            <article className='benefits'>
                <h2 id="benefits-heading" className="collaborate-section-title">Beneficios</h2>
                <p className="collaborate-section-text">
                    Experiencia de trabajo en equipo dentro de una Asociación Civil. Certificado de voluntariado al finalizar Descuentos en capacitaciones de CoderHouse. Ambiente joven, dinámico y colaborativo Oportunidades reales de aprendizaje y crecimiento Acompañamiento y mentoría constante.
                </p>
                <Link href="https://www.idealist.org/es/ong/78c7d8c0786f49948da10d7a01f22d74-undood-argentina-recoleta?utm_campaign=visitorshare&utm_medium=social&utm_source=copy" className="coll-buttons" aria-label="Ver todas las posiciones de voluntariado disponibles" target="_blank">Ver posiciones abiertas</Link>
            </article>
        </section>
        <section className="section-values" aria-labelledby="values-heading">
            <article className="values">
                <h2 id="values-heading" className="collaborate-section-title">Valores</h2>
                <p className="collaborate-section-text">Soñamos con un futuro en donde los niños y niñas que hoy se encuentran vulnerabilizados, carenciados y marginados puedan construir una autoestima sólida e incorporar herramientas para desarrollarse plenamente en la vida adulta.</p>
            </article>
            <article className="values-items">
                <div className="values-item">
                    <Image src="/join_value_01.svg" alt="Icono valor amor" width={0} height={0} sizes="100%" priority={false} />
                    <div className="values-item-text">
                        <h2>Amor</h2>
                        <p>Todo lo hacemos con mucho amor, dedicación y cariño para sus destinatarios, sean los hogares y quienes residen en ellos, o bien nosotros mismos, los voluntarios.</p>
                    </div>
                </div>
                <div className="values-item">
                    <Image src="/join_value_02.svg" alt="Icono valor empatía" width={0} height={0} sizes="100%" priority={false} />
                    <div className="values-item-text">
                        <h2>Empatía</h2>
                        <p>Nos conectamos con el otro desde la empatía, percibiendo sus necesidades, miradas y emociones; poniéndonos en su lugar para comprenderlo e intentar colaborar.</p>
                    </div>
                </div>
                <div className="values-item">
                    <Image src="/join_value_03.svg" alt="Icono valor familia" width={0} height={0} sizes="100%" priority={false} />
                    <div className="values-item-text">
                        <h2>Familia</h2>
                        <p>Nos sentimos en equipo como una familia. Nadie está solo; nos cuidamos, cooperamos, aprendemos y nos divertimos en conjunto.</p>
                    </div>
                </div>
                <div className="values-item">
                    <Image src="/join_value_04.svg" alt="Icono valor compromiso" width={0} height={0} sizes="100%" priority={false} />
                    <div className="values-item-text">
                        <h2>Compromiso</h2>
                        <p>Actuamos con profunda responsabilidad con nuestra misión, siendo conscientes del alcance e implicancias de nuestras acciones y decisiones.</p>
                    </div>
                </div>
            </article>
        </section>
        <section className="section-testimonials" aria-labelledby="testimonials-heading">
            <p className="testimonials-title-desktop">/<em>Testimonios Undood</em></p>
            <div className="testimonials-container">
                <Image 
                src="/join_03.jpg" 
                alt="Voluntaria de Undood compartiendo su experiencia" 
                width={0} 
                height={0} 
                sizes="100%" 
                style={{width: '100%'}} 
                className="collaborate-header-img"
                />
                <article>
                    <p className="testimonials-title-mobile">/<em>Testimonios Undood</em></p>
                    <blockquote>
                        <h2 id="testimonials-heading" className="collaborate-section-title">&quot;Encontré mucho más de lo que fuí a dar&quot;</h2>
                        <footer className="testimonials-footer">
                            <cite>
                                <h3>Milagros, voluntaria desde 2019</h3>
                            </cite>
                        </footer>
                        <p className="collaborate-section-text">Empecé buscando una forma de ayudar... y terminé encontrando un lugar.<br/> En Undood no solo acompañamos a chicos en situaciones difíciles, también construimos un espacio donde el tiempo, el juego y la presencia tienen un valor inmenso.<br/><br/> Ser voluntaria me enseñó a estar, a escuchar, a mirar con otros ojos. Cada actividad es un intercambio: lo que damos vuelve multiplicado. Y cuando te das cuenta del impacto que puede tener un ratito tuyo en la vida de alguien, ya no hay vuelta atrás.</p>
                    </blockquote>
                </article>
            </div>
        </section>
    </main>
  );
}