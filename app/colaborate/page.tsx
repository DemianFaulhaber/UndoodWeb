import { InfoCard } from "../components/cards/cards";
import './colaborate.css'
import Link  from "next/link";


export default function Colaborate(){


    return(
    <>
    <div className="colaborate-card-banner">
        <div className="donations">
            <InfoCard 
                imgDir={"colaborate_1.png"}
                title="Doná"
                subtitle="Ayudanos a financiar el proyecto"
                info="Tu colaboración económica nos permite cubrir los gastos necesarios para continuar con nuestras atividades." 
                target="blank"
            />
            <div className="donations-redirect">
                {/* <Link href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380847379c3410173a5bad04f4caf" target="blank" className="colaboration-redirect">{t("donate.options.monthly")}</Link>
                <Link href="https://link.mercadopago.com.ar/colaboracion3000?fbclid=PAZXh0bgNhZW0CMTEAAaefzzuhq0FzBU0GUCundnxygcQ9DZoZWMFQkejbeKTc7OILsijn56A2KiP3SA_aem_i6HkV5QVBQWe6PAxZCcNww" target="blank" className="colaboration-redirect">{t("donate.options.single")}</Link> */}
            </div>
        </div>
        <InfoCard 
            imgDir={"colaborate_2.png"}
            title="Sponsoreá"
            subtitle="Acompañanos con tu empresa"
            info="Si queres que tu empresa forme parte de nuestras alianzas y colaborar con nosotros,"
            insideAnchorText=" escribinos acá."
            insideAnchorLink={"https://wa.me/5491130219151"}
            target="blank"
        />
        <InfoCard 
            imgDir={"colaborate_3.png"}
            title="Sumate"
            subtitle="Se parte del equipo"
            info="Si tenés entre 18 y 25 años, vivis en CABA o GBA, y estás buscando un equipo con el cual generar un cambio, ¡este es el lugar para vos! "
            insideAnchorText="sumate acá"
        />
    </div>
    </>)
}