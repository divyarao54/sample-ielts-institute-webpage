/*Website by Divya Rao
Github Link: https://github.com/divyarao54*/
import React, { useEffect, useState } from "react";
import "../styles/navbar.css";
//import logoWhite from "../images/logoWhite.png";

const NavBar = () => {
    const [isMobileMenu, setIsMobileMenu] = useState(false);
    const [hamburgerMenuActive, setHamburgerMenuActive] = useState(false);

    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const checkScreenSize = () => {
        setIsMobileMenu(window.innerWidth < 1250);
    };

    const toggleHamburgerMenu = () => {
        setHamburgerMenuActive(!hamburgerMenuActive);
    }

    const handleLinkClick = () => {
        window.location.href = "https://www.linkedin.com/in/divyarao54/";
    }
    return (
        <>
            {!isMobileMenu && (
                <div>
                    <header className="header">
                        <div className="navbar-section-1">
                            <div className="navbar-title">IELTS Institute</div>
                        </div>
                        <div className="navbar-section-2">
                            <div className="navbar-item">Home</div>
                            <div className="navbar-item" onClick={handleLinkClick}>Academics</div>
                            <div className="navbar-item" onClick={handleLinkClick}>Admissions</div>
                            <div className="navbar-item" onClick={handleLinkClick}>About Us</div>
                            <div className="navbar-item" onClick={handleLinkClick}>Student Life</div>
                            <div className="navbar-item" onClick={handleLinkClick}>Faculty & Alumni</div>
                        </div>
                    </header>
                </div>
            )}
            {isMobileMenu && (
                <header className="header">
                    <div className="navbar-section-1">
                        <div className="navbar-title">IELTS Institute</div>
                    </div>
                    <div className="navbar-section-2">
                        <div className={`hamburger ${hamburgerMenuActive ? "active" : ""}`} onClick={toggleHamburgerMenu}>
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                    </div>
                </header>
            )}
            <div className={`hamburger-menu ${hamburgerMenuActive ? "active": ""}`}>
                <div className="navbar-item">Home</div>
                <div className="navbar-item" onClick={handleLinkClick}>Academics</div>
                <div className="navbar-item" onClick={handleLinkClick}>Admissions</div>
                <div className="navbar-item" onClick={handleLinkClick}>About Us</div>
                <div className="navbar-item" onClick={handleLinkClick}>Student Life</div>
                <div className="navbar-item" onClick={handleLinkClick}>Faculty & Alumni</div>
            </div>
        </>
    );
}

export default NavBar;
