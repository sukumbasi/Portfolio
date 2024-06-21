import React from 'react'
import "./home.css"
import logo from '../components/images/kk.png';
import cvPdf from '../components/doc/KK.pdf'
import './nav.css';

const Nav = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="Logo" className="navbar-logo" />
                </div>
            <div className="navbar-center">
                <ul className="navbar-links">
                    <li><a href="https://blog.kaushalkhatiwada.com.np">BLOG</a></li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul className="navbar-actions">
                    <li><a href={cvPdf} download>GET CV</a></li>
                    <li><a href="mailto:info@kaushalkhatiwada.com.np">EMAIL</a></li>
                </ul>
            </div>
        </nav>
      );

};

export default Nav;
