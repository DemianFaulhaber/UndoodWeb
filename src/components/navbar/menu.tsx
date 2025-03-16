import React, {ReactNode, useEffect} from "react"

type MenuProps = {
    isOpen:boolean,
    children:ReactNode,
    closeMenu:()=> void,
}

export default function Menu({isOpen, children, closeMenu}:MenuProps){
    useEffect(() => {
        if (isOpen) {
            document.documentElement.style.overflow = "hidden"; // Bloquea scroll en toda la página
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
                {children}
            </div>
        </div>
        </>
    )
}