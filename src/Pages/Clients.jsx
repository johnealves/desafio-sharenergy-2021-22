import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CardClient from "../Components/CardClient";
import Button from "@material-ui/core/Button" ;
import AddIcon from '@material-ui/icons/Add';
import "../CSS/Clients.css";
import api from "../Services/api";
import { Link } from "react-router-dom";
import EnergyContext from "../Context/EnergyContext";

const Clients = () => {
  const [dataClients, setDataClients] = useState([]);
  const { userActive } = useContext(EnergyContext);
  const [redirectlogin, setRedirectLogin] = useState(false);
  const history = useHistory()

  useEffect(() => {
    const fecthData = async() => {
      const dados = await api.get("/clients", { headers: {
        authorization: localStorage.getItem("testTokenSharenergy")
      }})
        .then((response) => response.data)
        .catch((err) => {
          console.log(err)
          setRedirectLogin(true)
        });
      setDataClients(dados);
    }
    fecthData();
  }, []);

  if (redirectlogin) history.push("/login")

  return(
    <div className="clients-container">
      <h1>Clientes</h1>
      <Button 
        variant="outlined"
        startIcon={<AddIcon />}
        component={ Link }
        to="/signup"
      >
        Adicionar cliente
      </Button>
      <ul>
        { (dataClients) && dataClients.map((client, i) => {
          if (client.nomeCliente !== "admin") {
           return <CardClient client={ client } key={ i } />
          }
        }) }
      </ul>
    </div>
  )
}

export default Clients;