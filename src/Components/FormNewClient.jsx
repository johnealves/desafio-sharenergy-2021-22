import { Button, FormControl, TextField } from "@material-ui/core";
import React, { useState } from "react";
import dadosClientes from "../dadosClientes.json";
import "../CSS/Clients.css";

const FormNewClient = ({onclick}) => {
  const [clienteName, setClientName] = useState();
  const handleClientName = ({ target: { value } }) => setClientName(value)

  const handleNewClient = () => {
    onclick()
    dadosClientes.push(
      {
        "numeroCliente": dadosClientes.length + 1,
        "nomeCliente": clienteName,
        "usinas": []
      })
  }

  return(
    <div className="new-client-container">
      <FormControl className="form-new-client">
        <h1>Novo cliente</h1>
        <TextField
          id="outlined-basic"
          label="Nome do cliente"
          variant="outlined"
          onInput={ handleClientName }
        />
        <Button 
          variant="outlined"
          onClick={ handleNewClient }
        >
          Adicionar
        </Button>
      </FormControl>
    </div>
  )
}

export default FormNewClient;
