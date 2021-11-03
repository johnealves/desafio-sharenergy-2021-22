import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../Assets/logo.png"
import "../CSS/MainHeader.css";

const MainHeader = () => {
  return (
    <div className="main-header-container">
      <Link to="/">
        <img src={ logo } alt=""logo-sharenergy/>
      </Link>
      <nav>
        <Link exact to="/">Inicio</Link>
        <Link exact to="/clients">Clientes</Link>
      </nav>
    </div>
  )
}

export default MainHeader;
