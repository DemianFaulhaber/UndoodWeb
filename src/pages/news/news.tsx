import { TriggerBanner } from "../../components/banners/banners";
import { useTranslation } from "react-i18next";


export default function News(){
    const {t,i18n} = useTranslation(["news"])

    return(
        <article className="newsAcces">
            <h1>{t("title")}</h1>
            <TriggerBanner
            imgLink="#"
            title="#"
            />
            <TriggerBanner
            imgLink="#"
            title="#"
            />
        </article>
    )
}