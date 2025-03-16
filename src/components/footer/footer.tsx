import { useTranslation } from 'react-i18next'
import './footer.css'

export default function Footer(){
    const {t, i18n} = useTranslation(['footer'])


    return(
        <article className="footer">
            <div className="social-media">
                <a href="#" className="social-link">
                    <img src="#" alt="socail-link-logo" />
                </a>
                <a href="#" className="social-link">
                    <img src="#" alt="socail-link-logo" />
                </a>
                <a href="#" className="social-link">
                    <img src="#" alt="socail-link-logo" />
                </a>
            </div>
            <div className="suscribe">
                <img src="#" alt="mail-logo" />
                <p>{t("suscribe")}</p>
            </div>
            <div className="contact-us">
                <img src="#" alt="contact-logo" />
                <p>{t("contact-us")}</p>
            </div>
        </article>
    )   
}