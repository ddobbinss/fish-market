import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/HeaderNav.css';

const HeaderNav = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };





    return (
        <div id="header-nav">
            <header>Exotic Imports</header>
                <div id="main-nav">
                    <div id="hamburger-menu" className={menuOpen ? "open" : ""} onClick={toggleMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <ul className={`columns ${menuOpen ? "open" : "hide-small"}`}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/faq">Faq</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                    </ul>
                </div>
        </div>
                
);
}

export default HeaderNav;