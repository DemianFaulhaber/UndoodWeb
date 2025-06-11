"use client"
import { useEffect, useState } from "react";
import'./navbar.css'
import Menu from "./menu";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar(){
    // const [scrollingUp, setScrollingUp] = useState(true)
    // const [scrollPos,setScrollPos] = useState(0)
    const [menuOpen, setMenuOpen] = useState(false) 
    
    const location = usePathname()

    // useEffect(()=> {
    //     const handleScroll = () => {
    //         setScrollingUp(scrollPos > window.scrollY);
    //         setScrollPos(window.scrollY);
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // },[scrollPos])
 
    return(
        <article 
        className='navbar'
        >
            <Menu isOpen={menuOpen} closeMenu={() =>setMenuOpen(false)} location={location} setMenuOpen={setMenuOpen}/>
            <button onClick={() => setMenuOpen(true)}>
                <i className="bi bi-list"></i>
            </button>
            <Link href="/" className="navbar-logo">
                <img src="logo.svg" alt="logo" />
                <h1>Undood</h1>
            </Link>
        </article>
    )

}
