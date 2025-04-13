import { useTranslation } from "next-i18next";
import { InfoCard } from "../components/cards/cards";
import './colaborate.css'
import Link  from "next/link";


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
                <Link href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380847379c3410173a5bad04f4caf" target="blank" className="colaboration-redirect">{t("donate.options.monthly")}</Link>
                <Link href="https://link.mercadopago.com.ar/colaboracion3000?fbclid=PAZXh0bgNhZW0CMTEAAaefzzuhq0FzBU0GUCundnxygcQ9DZoZWMFQkejbeKTc7OILsijn56A2KiP3SA_aem_i6HkV5QVBQWe6PAxZCcNww" target="blank" className="colaboration-redirect">{t("donate.options.single")}</Link>
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