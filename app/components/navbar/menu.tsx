"use client"
import React, {ReactNode, useEffect} from "react"
import Link from "next/link";

type MenuProps = {
    isOpen:boolean,
    location:string,
    closeMenu:()=> void,
    setMenuOpen:(state:boolean)=> void,
}

export default function Menu({isOpen, location, closeMenu, setMenuOpen}:MenuProps){
    useEffect(() => {
        if (isOpen) {
            document.documentElement.style.overflow = "visible"; // Bloquea scroll en toda la página
            document.body.style.overflow = "hidden";
        } else {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        }

        return () => {
            document.documentElement.style.overflow = ""; // Asegura que el scroll se reactive siempre
            document.body.style.overflow = "";
        };
    }, [isOpen]);



    return(  
        <>
        <div 
        className={`menu-background ${isOpen?'menu-visible':'menu-hide'}`}
        onClick={closeMenu}
        style={{"opacity":isOpen?'50%':'0'}}
        ></div>
        <div 
        className={`menu-container ${isOpen?'menu-visible':'menu-hide'}`}
        >
            <div className="menu">
            <img src="logo.svg" alt="logo" />
                <nav className="links">    
                    <Link 
                    href="/" 
                    onClick={(() => setMenuOpen(false))}
                    style={{color:location === "/" ? "white": "#064d79"}}
                    >
                    Inicio
                    </Link>
                    <Link href="about" onClick={(() => setMenuOpen(false))}
                    style={{color:location === "/about" ? "white": "#064d79"}}
                    >
                    Nosotros
                    </Link>
                    {/* <Link href="news" onClick={(() => setMenuOpen(false))}
                    style={{color:location === "/news" ? "white": "#064d79"}}
                    >
                    {t("links.News")}
                    </Link>     */}
                    <Link href="colaborate" onClick={(() => setMenuOpen(false))}
                    style={{color:location === "/colaborate" ? "white": "#064d79"}}
                    >
                    Sumate
                    </Link>    
                    <Link href="programs" onClick={(() => setMenuOpen(false))}
                    style={{color:location === "/programs" ? "white": "#064d79"}}
                    >
                    Programas
                    </Link>    
                    <Link href="contact" onClick={(() => setMenuOpen(false))}
                    style={{color:location === "/contact" ? "white": "#064d79"}}
                    >
                    Contacto
                    </Link>    
                </nav>
            </div>
        </div>
        </>
    )
}