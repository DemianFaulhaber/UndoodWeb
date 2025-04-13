import Link from 'next/link'
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
            <Link href={page}>
                {linkText}
            </Link>
        </article>
    )
}

type InfoCardProps = {
    imgDir:string,
    title:string,
    info:string,
    subtitle?:string,
    linkText?:string,
    insideAnchorText?:string,
    target?:string,
    insideAnchorLink?:string,
    personalizedContentClass?:string,
    onClick?: () => void
}

function InfoCard({onClick,personalizedContentClass,imgDir,title,info,insideAnchorText,insideAnchorLink,target,subtitle}:InfoCardProps){
    return(
        <>
            <article 
            className={`vertical-info-card  ${personalizedContentClass}`}>
                <img onClick={onClick} src={imgDir} alt="" />
                <div className={`card-info-container`}>
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    <p>{info}{insideAnchorLink ? <Link href={insideAnchorLink} target={target}>{insideAnchorText}</Link>: ""}</p>
                </div>
            </article>
        </>
    )
}

export {LinkCard, InfoCard}