"use client"
import { useState } from "react";
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
            <Link href="/" className="navbar-logo">
                <img src="/ISO_LOGO_UNDOOD.svg" alt="logo" />
            </Link>
            <Menu isOpen={menuOpen} closeMenu={() =>setMenuOpen(false)} location={location} setMenuOpen={setMenuOpen}/>
            <button onClick={() => setMenuOpen(true)}>
                <i className="bi bi-list"></i>
            </button>
        </article>
    )

}