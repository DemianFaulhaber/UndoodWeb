"use client"
import { useTranslation } from 'next-i18next'
import './footer.css'
import Link from 'next/link'

export default function Footer(){
    const {t} = useTranslation(['footer'])


    return(
        <footer className="footer">
            <div className="social-media">
                <a href="https://www.instagram.com/undood.ar/" className="social-link" target='blank'>
                    <img src="instagram-logo.svg" alt="social-link-logo" />
                </a>
                <a href="https://www.linkedin.com/company/undood-argentina/" className="social-link" target='blank'>
                    <img src="linkedin-logo.svg" alt="social-link-logo" />
                </a>
                <a href="#" className="social-link" target='blank'>
                    <img src="FB-logo.svg" alt="social-link-logo" />
                </a>
            </div>
            <div className="contact">
                <div className="suscribe contact-container">
                    <a href="#" target='blank'>
                        <img src="mail-logo.svg" alt="mail-logo" />
                    </a>
                    <p>{t("suscribe")}</p>
                </div>
                {/* <div className="contact-us contact-container">
                    <Link to="contact" >
                        <img src="contact-icon.svg" alt="contact-logo" />
                    </Link>
                    <p>{t("contact-us")}</p>
                </div> */}
            </div>
        </footer>
    )   
}