import { useState, useRef } from 'react'
import "./LandingPage.css";
import hamburger from "../assets/hamburger.svg";
import hamburgerClose from "../assets/hamburger-close.svg";
import logo from "../assets/logo.svg"
import topbarDesktop from "../assets/topbar-desktop.png"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const mobileMenu = useRef(null);
    const toggleMenu = () => {
        if (!isOpen) {
            mobileMenu.current.style.display = "none";
            setIsOpen(true);
        } else {
            mobileMenu.current.style.display = "block";
            setIsOpen(false);
        }
    };

    return (
        <>
            <nav className="nav-wrapper">
                <img src={topbarDesktop} alt="topbar" className="topbar" />
                <div className="main-div">
                    <img src={logo} alt="logo" className="logo" />
                    <ul className="menu-item">
                        <li>THIS MONTH</li>
                        <li>SKIN</li>
                        <li>HAIR</li>
                        <li>BATH</li>
                        <li>SALE</li>
                        <li className="outline-button">{"LOG IN >"}</li>
                    </ul>
                    <div className="menu-icon">
                        {isOpen ? (
                            <img src={hamburger}
                                onClick={toggleMenu}
                                alt="menu icon"
                            />
                        ) : (
                            <img src={hamburgerClose}
                                onClick={toggleMenu}
                                alt="close icon"
                            />
                        )}
                    </div>
                </div>
                <div className="mobile-menu" ref={mobileMenu}>
                    <ul className="mobile-menu-item">
                        <li>THIS MONTH</li>
                        <li>SKIN</li>
                        <li>HAIR</li>
                        <li>BATH</li>
                        <li>SALE</li>
                        <li className="outline-button">{"LOG IN >"}</li>
                    </ul>
                </div>
            </nav>
        </>
    );
};
export default Navbar;