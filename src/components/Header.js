import React from 'react'
import "./header.css"
import logo from '../components/images/kk.png';

function Header() {
  return (
    <header className="App-header">
        <img src={logo} alt="Logo" className="App-logo" />
    </header>
  )
}

export default Header