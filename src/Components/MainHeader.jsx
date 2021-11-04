import { Button } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../Assets/logo.png"
import EnergyContext from '../Context/EnergyContext';
import "../CSS/MainHeader.css";

const MainHeader = () => {
  const { userActive, setUserActive } = useContext(EnergyContext);
  const [user, setUser] = useState()

  useEffect(() => {
    setUser(userActive)
  }, [userActive])

  const handleLogout = () => {
    localStorage.removeItem("testUserSharenergy");
    localStorage.removeItem("testTokenSharenergy");
    setUserActive(null);
    window.location.reload();
  }

  return (
    <div className="main-header-container">
      <Link to="/">
        <img src={ logo } alt=""logo-sharenergy/>
      </Link>
      <nav>
        <Link exact to="/">Inicio</Link>
        {(user && user.role === "admin") && <Link exact to="/clients">Clientes</Link>}
        {(!user) 
          ? (<Button 
              sx={{ borderRadius: "20px", backgroundColor: "#389393", color: "#fff" }}
              variant="contained"
              component={Link}
              className="button-login"
              to="/login"
            >
              Entrar
            </Button>)
          : (
            <Button 
              sx={{ borderRadius: "20px", backgroundColor: "#389393", color: "#fff" }}
              variant="contained"
              onClick={ handleLogout }
            >
              Sair
            </Button>
          )
        }
        {/* <Link variant="contained" className="login-button">Login</Link> */}
      </nav>
    </div>
  )
}

export default MainHeader;
