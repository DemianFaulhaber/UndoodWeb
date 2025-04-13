import React from "react";


type TriggerBannerProps = {
    title:string,
    imgLink:string
}

function TriggerBanner({title,imgLink}:TriggerBannerProps){
    return(
        <article className="trigger-banner">
            <img src={imgLink} alt="bg" />
            <h1>{title}</h1>
        </article>
    )
}

export {TriggerBanner}