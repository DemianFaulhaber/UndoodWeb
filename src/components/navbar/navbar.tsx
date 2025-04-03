import React, { useEffect, useState } from "react";
import'./navbar.css'
import Menu from "./menu";
import { Link, useLocation} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useNavigation } from "../../context/navigationContext";

export default function Navbar(){
    const [scrollingUp, setScrollingUp] = useState(true)
    const [scrollPos,setScrollPos] = useState(window.scrollY)
    const [menuOpen, setMenuOpen] = useState(false) 
    
    const location = useLocation()

    useEffect(()=> {
        const handleScroll = () => {
            setScrollingUp(scrollPos > window.scrollY);
            setScrollPos(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    },[scrollPos])

    const {t} = useTranslation(['navbar']);    
    console.log(location.pathname)

    return(
        <article 
        className={`navbar ${
            scrollingUp?
            'scrolling-up':
            'scrolling-down'
        }`}
        >
            <Menu isOpen={menuOpen} closeMenu={() =>setMenuOpen(false)}>
                <img src="logo.svg" alt="logo" />
                <nav className="links">    
                    <Link 
                    to="/" 
                    onClick={(() => setMenuOpen(false))}
                    style={{color:location.pathname === "/" ? "white": "#064d79"}}
                    >
                        {t("links.Home")}
                    </Link>
                    <Link to="about" onClick={(() => setMenuOpen(false))}
                    style={{color:location.pathname === "/about" ? "white": "#064d79"}}
                    >
                        {t("links.About-us")}
                    </Link>
                    <Link to="news" onClick={(() => setMenuOpen(false))}
                    style={{color:location.pathname === "/news" ? "white": "#064d79"}}
                    >
                        {t("links.News")}
                    </Link>    
                    <Link to="colaborate" onClick={(() => setMenuOpen(false))}
                    style={{color:location.pathname === "/colaborate" ? "white": "#064d79"}}
                    >
                        {t("links.Colaborate")}
                    </Link>    
                    <Link to="programs" onClick={(() => setMenuOpen(false))}
                    style={{color:location.pathname === "/programs" ? "white": "#064d79"}}
                    >
                        {t("links.Programs")}
                    </Link>    
                </nav>
            </Menu>
            <button onClick={() => setMenuOpen(true)}>
                <i className="bi bi-list"></i>
            </button>
            <div className="navbar-logo">
                <img src="logo.svg" alt="logo" />
                <h1>Undood</h1>
            </div>
        </article>
    )

}
