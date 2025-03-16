import './cards.css'

type LinkCardProps={
    imgDir:string,
    linkText:string,
    page:string
}

function LinkCard({imgDir,page,linkText}:LinkCardProps){
    return(
        <article className="vertical-action-card" 
        style={{"backgroundImage":`url(/${imgDir})`}}>
            {/* <img src={imgDir} alt="content"  /> */}
            <a href={page}>
                {linkText}
            </a>
        </article>
    )
}

type InfoCardProps = {
    imgDir:string,
    title:string,
    subtitle:string,
    linkText:string,
    page:string,
    info:string,
    insideAnchorText:string,
    insideAnchorLink:string
}

function InfoCard({imgDir,title,info,linkText,page,insideAnchorText,insideAnchorLink,subtitle}:InfoCardProps){
    return(
        <>
            <article className="vertical-info-card">
                <img src={imgDir} alt="" />
                <div className="card-info-container">
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    <p>{info}<a href={insideAnchorLink}>{insideAnchorText}</a></p>
                    <a href={page}>
                        {linkText}
                    </a>
                </div>
            </article>
        </>
    )
}

export {LinkCard, InfoCard}