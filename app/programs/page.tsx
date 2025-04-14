import { InfoCard } from "../components/cards/cards";
import Link from "next/link";
import './programs.css'

function Program(props:any){
	return(
		<>
			<article className="program">
				<h1 className="program-title">{props.title}</h1>
				<div className="program-data">
					<img src={props.imgDir} alt="" />
					<p>
						{props.desc}
					</p>
				</div>
			</article>
		</>
	)
}

export default function Programs(){

		return(
			<>
				<h1 className="programs-title">"Conocé nuestros programas y actividades"</h1>
				<div className="programs-banner">
					<div className="program-card">
						<img className="card-icon" src="pallete.svg" alt="" />
						<InfoCard 
							imgDir={"recreative-afternoons-main.png"} 
							title="Tardes Recreativas"
							info="Vamos de visita al hogar de los niños, niñas y jóvenes quienes nos invitan a compartir una tarde de risas, juegos y actividades pensadas específicamente a raiz de sus gustos e intereses. "
							
							personalizedContentClass="program-card"
						/>
					</div>
					{/* <div className="program-card">
						<img className="card-icon" src="health-ico.svg" alt="" />
						<InfoCard 
							imgDir={"birthday-main.png"} 
							title="Programas de salud" 
							info={t("health.desc")} 
							onClick={() => setProgram("health")} 
							personalizedContentClass="program-card"
						/>
					</div> */}
					<div className="program-card">
						<img src="balloons-ico.svg" alt="" className="card-icon" />
						<InfoCard 
							imgDir={"health-main.png"} 
							title="Festejo de cumpleaños"
							info="Celebramos los cumpleaños de los chicos en los hogares, enviándoles todo lo necesario para que tengan un día especial y se sientan queridos."
							
							personalizedContentClass="program-card"
						/>
					</div>
					{/* <div className="program-card">
						<img src="gift-ico.svg" alt="" className="card-icon" />
						<InfoCard 
							imgDir={"campaigns-main.png"} 
							title={t("campaigns.title")} 
							info={t("campaigns.desc")} 
							onClick={() => setProgram("campaigns")} 
							personalizedContentClass="program-card"
						/>
					</div> */}
				</div>
				<div className="programs-nav">
					<Link href={"/colaborate"} className="colaborate-redirect">
						Cómo Colaborar
					</Link>
				</div>
			</>
	)
}

