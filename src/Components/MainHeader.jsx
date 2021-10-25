import React from 'react';
import { Link } from 'react-router-dom';
import "../CSS/MainHeader.css";

const MainHeader = () => {
  return (
    <div className="main-header-container">
      <nav>
        <Link exact to="/">Inicio</Link>
        <Link exact to="/clients">Clientes</Link>
      </nav>
    </div>
  )
}

export default MainHeader;
