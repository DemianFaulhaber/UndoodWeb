import { useState } from "react";
import { useTranslation } from "react-i18next";
import { InfoCard } from "../../components/cards/cards";
import { Link } from "react-router-dom";
import './programs.css'

function Program(props:any){
	return(
		<>
			<article className="program">
				<h1 className="program-title">{props.title}</h1>
				<img src={props.imgDir} alt="" />
				<p>
					{props.desc}
				</p>
			</article>
		</>
	)
}

export default function Programs(){
	const {t} = useTranslation(['programs'])
	const [program, setProgram] = useState("")



	if(!program){
		return(
			<>
				<div className="programs-banner">
					<h1 className="programs-title">{t("main-title")}</h1>
					<img className="card-icon" src="pallete.svg" alt="" />
					<InfoCard 
						imgDir={"recreative-afternoons-main.png"} 
						title={t("recreative-afternoons.title")} 
						info={t("recreative-afternoons.desc")} 
						onClick={() => setProgram("recreative")} 
						personalizedContentClass="program-card"
					/>
					<img className="card-icon" src="health-ico.svg" alt="" />
					<InfoCard 
						imgDir={"health-main.png"} 
						title={t("health.title")} 
						info={t("health.desc")} 
						onClick={() => setProgram("health")} 
						personalizedContentClass="program-card"
					/>
					<img src="balloons-ico.svg" alt="" className="card-icon" />
					<InfoCard 
						imgDir={"birthday-main.png"} 
						title={t("birthday.title")} 
						info={t("birthday.desc")} 
						onClick={() => setProgram("birthday")} 
						personalizedContentClass="program-card"
					/>
					<img src="gift-ico.svg" alt="" className="card-icon" />
					<InfoCard 
						imgDir={"campaigns-main.png"} 
						title={t("campaigns.title")} 
						info={t("campaigns.desc")} 
						onClick={() => setProgram("campaigns")} 
						personalizedContentClass="program-card"
					/>
					<Link to={"/colaborate"} className="colaborate-redirect">{t("colaborate-button")}</Link>
				</div>
			</>
	)
	}
	else{
		return(
			<>
				{(() => { 
						switch(program){
							case "recreative":
								return(
									<Program
										title={t("recreative-afternoons.title")}
										imgDir="recreative-afternoons-secondary.png"
										desc={t("recreative-afternoons.expanded-desc")}
									/>
								)
							case "health":
								return(
									<Program
										title={t("health.title")}
										imgDir="health-secondary.png"
										desc={t("health.expanded-desc")}
									/>
								)
							case "birthday":
								return(
									<Program
										title={t("birthday.title")}
										imgDir="birthday-secondary.png"
										desc={t("birthday.expanded-desc")}
									/>
								)
							case "campaigns":
								return(
									<article className="campaigns">
										<div className="campaign">
											<h1 className="campaign-title">{t("campaigns.children-days.title")}</h1>
											<img src="children-day.png" alt="" />
											<p className="campaign-desc">{t("campaigns.children-days.desc")}</p>
										</div>
										<div className="campaign">
											<h1 className="campaign-title">{t("campaigns.christmas.title")}</h1>
											<img src="christmas.png" alt="" />
											<p className="campaign-desc">{t("campaigns.christmas.desc")}</p>
										</div>
									</article>
								)
						}
			})()}
			<nav className="programs-nav">
				<Link to={"/colaborate"} className="colaborate-redirect">{t("colaborate-button")}</Link>
				<button onClick={() => setProgram("")}>ver más</button>
			</nav>
		</>
		)
	}

}