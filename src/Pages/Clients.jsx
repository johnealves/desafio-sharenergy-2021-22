import React, { useState } from "react";
import CardClient from "../Components/CardClient";
import dadosClientes from "../dadosClientes.json";
import Button from "@material-ui/core/Button" ;
import AddIcon from '@material-ui/icons/Add';
import FormNewClient from "../Components/FormNewClient";
import "../CSS/Clients.css";
import FormUpdateCliente from "../Components/FormUpdateClient";
import handleValueEnergy from "../utils/valorGerado";

const Clients = () => {
  const [addForm, setAddForm] = useState(false)
  const [updateForm, setUpdateForm] = useState(false)
  const [clientUpdate, setClientUpdate] = useState(0)

  const handleAddForm = () => setAddForm(!addForm);
  const handleUpdateForm = () => setUpdateForm(!updateForm);

  return(
    <div className="clients-container">
      <h1>Clientes</h1>
      <p>Valor gerado: { handleValueEnergy() }</p>
      <Button onClick={ handleAddForm } variant="outlined" startIcon={<AddIcon />}>
        Adicionar cliente
      </Button>
      {(addForm) && <FormNewClient onclick={ handleAddForm } />}
      {(updateForm) && <FormUpdateCliente 
        onclick={ handleUpdateForm }
        idUpdate={ clientUpdate }
      />}
      <ul>
        { dadosClientes.map(
          (client) => <CardClient client={ client } handleUpdateForm={ handleUpdateForm } setUpdate={ setClientUpdate }/>) }  
      </ul>
    </div>
  )
}

export default Clients;