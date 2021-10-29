import React, { useState } from "react";
import { Button, FormControl, TextField } from "@material-ui/core";
import { useHistory } from "react-router";
import dadosClientes from "../dadosClientes.json";

const FormUpdateCliente = ({ onclick, idUpdate }) => {
  const [clienteName, setClientName] = useState();
  const handleClientName = ({ target: { value } }) => setClientName(value)

  const history = useHistory();

  const handleUpdateClient = () => {
    onclick()
    dadosClientes.forEach((client, index) => {
      if (client.numeroCliente == idUpdate) {
        dadosClientes[index].nomeCliente = clienteName
        history.push("/clients")
      }
    })
  }

  return (
    <div className="new-client-container">
      <FormControl className="form-new-client">
        <p>Atualizar cliente</p>
        <TextField
          id="outlined-basic"
          label="Nome do cliente"
          variant="outlined"
          onInput={ handleClientName }
        />
        <Button 
          variant="outlined"
          onClick={ handleUpdateClient }
        >
          Atualizar
        </Button>
      </FormControl>
    </div>
  )
}

export default FormUpdateCliente