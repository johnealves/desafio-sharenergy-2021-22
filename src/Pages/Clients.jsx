import React, { useEffect, useState } from "react";
import CardClient from "../Components/CardClient";
import Button from "@material-ui/core/Button" ;
import AddIcon from '@material-ui/icons/Add';
import "../CSS/Clients.css";
import api from "../Services/api";
import { Link } from "react-router-dom";

const Clients = () => {
  const [dataClients, setDataClients] = useState([]);

  useEffect(() => {
    const fecthData = async() => {
      const dados = await api.get("/clients")
        .then((response) => response.data)
        .catch((err) => console.log(err));
        setDataClients(dados);
    }
    fecthData();
  }, []);

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
        { dataClients.map(
          (client, i) => <CardClient client={ client } key={ i } />) }  
      </ul>
    </div>
  )
}

export default Clients;