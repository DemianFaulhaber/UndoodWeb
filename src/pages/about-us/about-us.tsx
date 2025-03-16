import React from "react";
import { useTranslation } from "react-i18next";
import './about-us.css'
import { LinkCard } from "../../components/cards/cards";

export default function  AboutUs(){
    const {t, i18n} = useTranslation(["about-us"]);
    return(
        <>
        <article className="about-us">
            <img src="about_us_image03.svg" alt="recreation" className="first-image"/>
            <p className="wrapping-text">{t("info.first-p")}</p>
            <br />
            <p>{t("info.second-p")}</p>
            <br />
            <p>{t("info.third-p")}</p>
            <img src="about_us_image02.svg" alt="recreation" className="second-image"/>
            <p className="wrapping-text ">{t("info.fourth-p")}</p>
            <p className="join-us">{t("info.join")}</p>
        </article>
        <article className="team">
            <h1>
                {t("our-team")}
            </h1>
            <LinkCard imgDir="about_us_image01.svg" page="#" linkText={t('view-more')}/>
        </article>
        </>
    )
}