import React from 'react';
import { Link } from 'react-router-dom';
import '../css/HeaderNav.css';

const HeaderNav = () => {
    return (
        <div id="header-nav">
            <header>Exotic Imports</header>
                <div id="main-nav">
                    <div id="hamburger-menu">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <ul className="columns hide-small">
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