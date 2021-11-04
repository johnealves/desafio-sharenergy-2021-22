import React, { useContext, useState } from 'react';
import { Button, FormControl, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import '../CSS/Login.css'
import api from '../Services/api';
import EnergyContext from '../Context/EnergyContext';

function Login({ newToken, newUser }) {
  const { setUserActive } = useContext(EnergyContext);
  const history = useHistory();
  const [loginData, setLoginData] = useState({});
  const handleLogin = ({ target: { name, value } }) => {
    setLoginData({ ...loginData, [`${name}`]: value });
  }

  const onSubmit = (ev) => {
    try {
      console.log(loginData)
      api.post("/login", loginData)
        .then(({ data }) => {
          localStorage.setItem("testTokenSharenergy", data.token);
          localStorage.setItem("testUserSharenergy", JSON.stringify(data.user));
          setUserActive(data.user);
          history.push("/");
        })
        .catch(err => {
          console.log(err)
          alert("Dados incorretos! Verifique os dados e tente novamente.")
        });
    } catch (error) {
      alert("Dados incorretos! Verifique os dados e tente novamente.")
    }
  }

  //  Mock response
  //   "data": {
  //       "user": {
  //           "_id": "618331191da6d5a47ab2a3b3",
  //           "numeroCliente": 999,
  //           "nomeCliente": "admin",
  //           "role": "admin",
  //           "email": "admin@email.com",
  //           "usinas": [
  //               {
  //                   "usinaId": 1,
  //                   "percentualDeParticipacao": 30
  //               }
  //           ]
  //       },
  //       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgzMzExOTFkYTZkNWE0N2FiMmEzYjMiLCJudW1lcm9DbGllbnRlIjo5OTksIm5vbWVDbGllbnRlIjoiYWRtaW4iLCJyb2xlIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsInVzaW5hcyI6W3sidXNpbmFJZCI6MSwicGVyY2VudHVhbERlUGFydGljaXBhY2FvIjozMH1dLCJpYXQiOjE2MzU5ODg1MjEsImV4cCI6MTYzNjU5MzMyMX0.jTJpIo5rYsy6ScA4lyyIb0Bcyc81d5J7O1h4KjCBYc4"

  return (
    <div className="login-container">
      <section className="login-form">
        <h1>Login</h1>
        <FormControl sx={{ 
          "& .MuiTextField-root": {m: 1.5} }}>
          <TextField
            id="email-login"
            type="email"
            name="email"
            label="email"
            variant="filled"
            onInput={ handleLogin }
          />
          <TextField
            id="password-login"
            type="password"
            name="password"
            label="password"
            variant="filled"
            onInput={ handleLogin }
          />
          <Button variant="contained" onClick={ onSubmit } sx={{ m: 2 }}>
            Entrar
          </Button>
        </FormControl>
      </section>
    </div>
  )
}

export default Login;