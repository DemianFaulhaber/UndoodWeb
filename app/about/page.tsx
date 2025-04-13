import { useTranslation } from "next-i18next";
import './about-us.css'
import { TText } from "../components/TText";

type teamProps = {
    t : (text:string) => string
}

function Team({t}:teamProps){
    return(
        <>

            <div className="coord">
                <img src="joaquin-team.png" alt="" />
                <h1>Joaquin Verdeja</h1>
                <h2>{t("team.founders")}</h2>
            </div>
            <div className="coord">
                <img src="augusto-team.png  " alt="" />
                <h1>Augusto Vitores</h1>
                <h2>{t("team.founders")}</h2>
            </div>
            <div className="coord">
                <img src="milagros-team.png" alt="" />
                <h1>Milagros Cifre</h1>
                <h2>{t("team.soc-com")}</h2>
            </div>
            <div className="coord">
                <img src="agostinad-team.png" alt="" />
                <h1>Agostina Domingues</h1>
                <h2>{t("team.health")}</h2>
            </div>
            <div className="coord">
                <img src="agustinaq-team.png" alt="" />
                <h1>Agustina Quintana</h1>
                <h2>{t("team.referents")}</h2>
            </div>
            <div className="coord">
                <img src="victoria-team.png" alt="" />
                <h1>Victoria Romero</h1>
                <h2>{t("team.logistic")}</h2>
            </div>
            <div className="coord">
                <img src="francisco-team.png" alt="" />
                <h1>Francisco Laurence</h1>
                <h2>{t("team.experience")}</h2>
            </div>
            <div className="coord">
                <img src="joaquin-team.png" alt="" />
                <h1>Joaquín Verdeja</h1>
                <h2>{t("team.institutional-relationships")}</h2>
            </div>
        </>
    )
}

export default function  AboutUs(){
    const {t} = useTranslation(["about-us"]);
    return(
        <>
        <article className="about-us">
            <TText as="p" i18nKey="info.first-p" ns="about-us"/>
            <br />
            <TText as="p" i18nKey="info.second-p" ns="about-us"/>
            <br />
            <TText as="p" i18nKey="info.third-p" ns="about-us"/>
            <TText as="p" i18nKey="info.fourth-p" ns="about-us"/>
            <br />
        </article>
        <article className="team-container">
            <h1>{t("our-team")}</h1>
            <div className="team">
                <Team t={t}/>
            </div>
        </article>
        </>
    )
}