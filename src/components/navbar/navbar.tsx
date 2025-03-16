import React, { useEffect, useState } from "react";
import'./navbar.css'
import Menu from "./menu";
import { Link } from "react-router-dom";

export default function Navbar(){
    const [scrollingUp, setScrollingUp] = useState(true)
    const [scrollPos,setScrollPos] = useState(window.scrollY)
    const [menuOpen, setMenuOpen] = useState(false) 
    

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
                {/* <Link to='#'>
                    lorem
                </Link> */}
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