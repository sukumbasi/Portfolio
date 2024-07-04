import React from 'react'
import "../components/Footer.css"
import eleven from '../components/images/1111.png'

function Footer() {
    return (
        <footer className="footer">
            <img src={eleven} alt="11:11" className="footer-logo" />
        </footer>
    );
}

export default Footer