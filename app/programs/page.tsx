import { InfoCard } from "../components/cards/cards";
import Link from "next/link";
import './programs.css'

export default function Programs(){

		return(
			<>
				<h1 className="programs-title">Conocé nuestros programas y actividades</h1>
				<div className="programs-banner">
					<article className="multiple-programs">
						<h1>Programas de salud</h1>
						<div className="program-card">
							<InfoCard 
								imgDir={"health-main.png"} 
								title="Odontología Preventiva" 
								info="¡El 90% de las enfermedades bucales se previenen con un correcto cepillado de dientes! Visitamos los hogares en labor preventiva entregando kits de cepillado de dientes asi como conscientizando sobre la salud bucal." 
								personalizedContentClass="program-card"
							/>
						</div>
						<div className="program-card">
							<InfoCard 
								imgDir={"birthday-main.png"} 
								title="Oftalmología" 
								info="Realizamos controles oftalmolgoicos anuales a fin de poder proporcionar anteojos o intervenciones quirurjicas a quienes lo precisen. ¡Garantizamos un chequeo anual a todos los niños y niñas de los hogares!" 
								personalizedContentClass="program-card"
							/>
						</div>
						<div className="program-card">
							<InfoCard 
								imgDir={"birthday-main.png"} 
								title="Casos Puntuales" 
								info="¡gracias a nuestros partners medicos podemos conectar a los niños y niñas de los hogares con alguna situación puntual con profesionales dispuesto a atenderlos de forma ad honorem!" 
								personalizedContentClass="program-card"
							/>
						</div>
					</article>
					<article className="multiple-programs">
						<h1>Campañas</h1>
						<article className="program-card">
							<InfoCard 
								imgDir={"recreative-afternoons-main.png"} 
								title="Tardes Recreativas"
								info="Vamos de visita al hogar de los niños, niñas y jóvenes quienes nos invitan a compartir una tarde de risas, juegos y actividades pensadas específicamente a raiz de sus gustos e intereses. "
								
								personalizedContentClass="program-card"
							/>
						</article>
						<div className="program-card">
							<InfoCard 
								imgDir={"campaigns-main.png"} 
								title="Día de la niñez"
								info="Durante todo el mes de Agosto festejamos el dia de la niñez generando festejos, eventos, salidas y programas que hagan sentir a los niños y niñas los protagonistas recordando que lo esencial en sus vidas es el derecho de disfrutar de una niñez en plenitud."
								personalizedContentClass="program-card"
							/>
						</div>
						<div className="program-card">
							<InfoCard 
								imgDir={"birthday-main.png"} 
								title="Festejo de Cumpleaños"
								info="Festejamos los cumpleaños de los niños, niñas y jóvenes de los hogares en los que
								colaboramos, enviándoles todo lo necesario para que tengan un muy lindo día. En esta
								celebración buscamos dejar una huella en la memoria de los niños y las niñas, buscamos
								generar un día en el cual ell@s sean el centro, se sientan queridos y especiales."
								personalizedContentClass="program-card"
							/>
						</div>
						<div className="program-card">
							<InfoCard 
								imgDir={"campaigns-main.png"} 
								title="Festejo de Cumpleaños"
								info='¡Festejamos la navidad de la mano de los niños y niñas de los hogares! Cada niño recibe un regalo perosnalizado que surge como resultado de la campaña "Convertite en Papa/Mama Noel". Además, ofrecemos una serie de eventos tematicos que nos permiten introducirnos de lleno en el espiritu navideño'
								personalizedContentClass="program-card"
							/>
						</div>
					</article>
				</div>
				<div className="programs-nav">
					<Link href={"/colaborate"} className="colaborate-redirect">
						Cómo Colaborar
					</Link>
				</div>
			</>
	)
}

