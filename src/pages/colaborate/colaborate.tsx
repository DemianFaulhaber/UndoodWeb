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
                imgDir={"placeHolder.jpg"}
                title={t("donate.title")}
                subtitle={t("donate.subtitle")}
                linkText={""}
                page={""}
                info={t("donate.description")} 
                insideAnchorText={""}
                insideAnchorLink={""}
            />
            <div className="donations-redirect">
                <a className="colaboration-redirect">{t("donate.options.monthly")}</a>
                <a className="colaboration-redirect">{t("donate.options.single")}</a>
            </div>
        </div>
        <InfoCard 
            imgDir={"placeHolder.jpg"}
            title={t("sponsor.title")}
            subtitle={t("sponsor.subtitle")}
            linkText={""}
            page={""}
            info={t("sponsor.description")} 
            insideAnchorText={t("sponsor.inside-anchor-text")}
            insideAnchorLink={"https://wa.me/5491130219151"}
        />
        <InfoCard 
            imgDir={"placeHolder.jpg"}
            title={t("join.title")}
            subtitle={t("join.subtitle")}
            linkText={""}
            page={""}
            info={t("join.description", "#")} 
            insideAnchorText={t("join.inside-anchor-text")}
            insideAnchorLink={""}
        />
    </div>
    </>)
}