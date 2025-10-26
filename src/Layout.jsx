import React from 'react';
import {Outlet} from 'react-router-dom';
import HeaderNav from './components/HeaderNav.jsx';
import Footer from './components/Footer.jsx';

const Layout = () => {
    return (
        <div id="page">
            <HeaderNav />
                        
            
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;