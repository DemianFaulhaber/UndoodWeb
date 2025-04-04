import { LinkCard } from "../../components/cards/cards";
import { useTranslation } from "react-i18next";
import './home.css'

export default function Home(){
    const {t} =useTranslation(["home"])

    return(
        <>
        <article className="card-banner">
            <LinkCard imgDir="home_image01.svg" linkText={t("cards.meet-us")} page="/about"/>
            <LinkCard imgDir="home_image02.svg" linkText={t("cards.news")} page="/news"/>
            <LinkCard imgDir="home_image03.svg" linkText={t("cards.donate")} page="/colaborate"/>
            <LinkCard imgDir="home_image04.svg" linkText={t("cards.programs")} page="/programs"/>
        </article>
        <article className="impact-grid">
            <h1>{t("impact.title")}</h1>
            <div className="items">
                <article className="impact-item">
                    <img src="kids_icon.svg" alt="reach" />
                    <p>{t("impact.reach")}</p>
                </article>
                <article className="impact-item">
                    <img src="home_icon.svg" alt="shelters" />
                    <p>{t("impact.shelters")}</p>
                </article>
                <article className="impact-item">
                    <img src="hands_icon.svg" alt="volunteers" />
                    <p>{t("impact.volunteers")}</p>
                </article>
            </div>
        </article>
        </>
    )
}