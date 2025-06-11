import { InfoCard } from "../components/cards/cards";
import './collaborate.css'


export default function collaborate(){


    return(
    <>
    <div className="collaborate-card-banner">
        <div className="donations">
            <InfoCard 
                imgDir={"collaborate_1.png"}
                title="Doná"
                subtitle="Ayudanos a financiar el proyecto"
                info="Tu colaboración económica nos permite cubrir los gastos necesarios para continuar con nuestras actividades." 
                target="blank"
                personalizedContentClass="horizontal-card"
            >
                <div className="collaborate-redirect">
                    <a className="active-underline" href="https://link.mercadopago.com.ar/colaboracion3000">Donación Única</a>
                    <a className="active-underline" href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380847379c3410173a5bad04f4caf&fbclid=PAZXh0bgNhZW0CMTEAAafa6WzcI3uFjEejt6Tq55KYQnDucawTUek4N-TuH-Lg4QsTIrCmCeQ8S-LMxw_aem_f6Pr-A0dLvP-tXOf7uSxpQ">Donación Periódica</a>
                </div>
            </InfoCard>
        </div>
        <InfoCard 
            imgDir={"collaborate_2.png"}
            title="Sponsoreá"
            subtitle="Acompañanos con tu empresa"
            info="Si queres que tu empresa forme parte de nuestras alianzas y colaborar con nosotros, escribinos."
            target="blank"
            personalizedContentClass="horizontal-card"
        >
            <div className="collaborate-redirect">
                <a className="active-underline" href="https://wa.me/5491130219151">Contactanos</a>
            </div>
        </InfoCard>
        <InfoCard 
            imgDir={"collaborate_3.png"}
            title="Sumate"
            subtitle="Sé parte del equipo"
            info="Si tenés entre 16 y 25 años, vivis en CABA o GBA, y estás buscando un equipo con el cual generar un cambio en más de 200 niños, ¡este es el lugar para vos!"
            personalizedContentClass="horizontal-card"
        >
            <div className="collaborate-redirect">
                    <a className="active-underline" href="https://docs.google.com/forms/d/e/1FAIpQLSeDI7JtpnmIO5_TP05wg5Z63MJYZkjCjx6M9RS6RaKUeR9riw/viewform?fbclid=PAZXh0bgNhZW0CMTEAAadXcH2ebLMIyYzzJ8dTn7bgTOOdlHb-I_HEvNNrV-uScxTdMlu3bVn-MJheuQ_aem_RRI002_fT2qhRAOG6HMDbA">Sumate</a>
            </div>
        </InfoCard>
    </div>
    </>)
}