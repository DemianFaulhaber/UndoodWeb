import { useTranslation } from "react-i18next";
import { InfoCard } from "../../components/cards/cards";
import './colaborate.css'


export default function Colaborate(){

    const {t} = useTranslation(["colaborate"])

    return(
    <>
    <div className="colaborate-card-banner">
        <div className="donations">
            <InfoCard 
                imgDir={"colaborate_1.png"}
                title={t("donate.title")}
                subtitle={t("donate.subtitle")}
                info={t("donate.description")} 
                target="blank"
            />
            <div className="donations-redirect">
                <a className="colaboration-redirect">{t("donate.options.monthly")}</a>
                <a className="colaboration-redirect">{t("donate.options.single")}</a>
            </div>
        </div>
        <InfoCard 
            imgDir={"colaborate_2.png"}
            title={t("sponsor.title")}
            subtitle={t("sponsor.subtitle")}
            info={t("sponsor.description")} 
            insideAnchorText={t("sponsor.inside-anchor-text")}
            insideAnchorLink={"https://wa.me/5491130219151"}
            target="blank"
        />
        <InfoCard 
            imgDir={"colaborate_3.png"}
            title={t("join.title")}
            subtitle={t("join.subtitle")}
            info={t("join.description", "#")} 
            insideAnchorText={t("join.inside-anchor-text")}
        />
    </div>
    </>)
}