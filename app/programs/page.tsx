import { InfoCard } from "../components/cards/cards";
import Link from "next/link";
import './programs.css'

export default function Programs(){

		return(
			<>
				<h1 className="programs-title">Conocé nuestros programas y actividades</h1>
				<div className="programs-banner">
					<article className="multiple-programs">
						<h1 className="programs-category-title">Programas de salud</h1>
						<div className="program-card">
							<InfoCard 
								imgDir={"dentistry.jpg"} 
								title="Odontología Preventiva" 
								info="¡El 90% de las enfermedades bucales se previenen con un correcto cepillado de dientes! Visitamos los hogares en labor preventiva entregando kits de cepillado de dientes asi como conscientizando sobre la salud bucal." 
								personalizedContentClass="program-card"
							/>
						</div>
						<div className="program-card">
							<InfoCard 
								imgDir={"ophtalmology.jpg"} 
								title="Oftalmología" 
								info="Realizamos controles oftalmológicos anuales a fin de poder proporcionar anteojos o intervenciones quirúrgicas a quienes lo precisen. ¡Garantizamos un chequeo anual a todos los niños y niñas de los hogares!" 
								personalizedContentClass="program-card"
							/>
						</div>
						<div className="program-card">
							<InfoCard 
								imgDir={"specific_cases.jpeg"} 
								title="Casos Puntuales" 
								info="¡Gracias a nuestros partners médicos podemos conectar a los niños y niñas de los hogares con alguna situación puntual, con profesionales dispuestos a atenderlos de forma ad honorem!" 
								personalizedContentClass="program-card"
							/>
						</div>
					</article>
					<article className="multiple-programs">
						<h1 className="programs-category-title">Campañas</h1>
						<article className="program-card">
							<InfoCard 
								imgDir={"recreative-afternoons-main.jpg"} 
								title="Tardes Recreativas"
								info="Vamos de visita al hogar de los niños, niñas y adolescentes quienes nos invitan a compartir una tarde de risas, juegos y actividades pensadas específicamente a raiz de sus gustos e intereses. "
								
								personalizedContentClass="program-card"
							/>
						</article>
						<div className="program-card">
							<InfoCard 
								imgDir={"childrens_day.jpg"} 
								title="Día de la niñez"
								info="Durante todo el mes de Agosto festejamos el día de la niñez. Generando festejos, eventos, salidas y programas que hagan sentir a los niños y niñas los protagonistas, recordando que lo esencial en sus vidas es el derecho de disfrutar de una niñez en plenitud."
								personalizedContentClass="program-card"
							/>
						</div>
						<div className="program-card">
							<InfoCard 
								imgDir={"birthday.jpg"} 
								title="Festejo de Cumpleaños"
								info="Festejamos los cumpleaños de los niños, niñas y adolescentes de los hogares en los que
								colaboramos, enviándoles todo lo necesario para que tengan día especial. En esta
								celebración buscamos dejar una huella en la memoria de los niños y las niñas, con el fin de
								generar un día en el cual ellos sean el centro, se sientan queridos y especiales."
								personalizedContentClass="program-card"
							/>
						</div>
						<div className="program-card">
							<InfoCard 
								imgDir={"christmas.jpg"} 
								title="Campaña Navideña"
								info='¡Festejamos la navidad de la mano de los niños y niñas de los hogares! Cada niño recibe un regalo personalizado que surge como resultado de la campaña "Convertite en Papá/Mamá Noel". Además, ofrecemos una serie de eventos temáticos que nos permiten introducirnos de lleno en el espíritu navideño. Esta campaña alcanza a más de 120 niños y niñas en 5 hogares de tránsito'
								personalizedContentClass="program-card"
							/>
						</div>
					</article>
				</div>
				<div className="programs-nav">
					<Link href={"/collaborate"} className="redirect-programs">
						Cómo Colaborar
					</Link>
				</div>
			</>
	)
}

