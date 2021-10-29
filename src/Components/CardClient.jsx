import React from "react";
import { useHistory } from "react-router";
import dadosClientes from "../dadosClientes.json";
import Button from "@material-ui/core/Button" ;
import AddIcon from '@material-ui/icons/Add';
import "../CSS/CardClient.css";
import handleValueEnergy from "../utils/valorGerado";

const CardClient = ({ client, handleUpdateForm, setUpdate }) => {
  const history = useHistory()

  const handleUpdateClient = () => {
    handleUpdateForm()
    setUpdate(client.numeroCliente)
  }

  const handleDeleteClient = (id) => {
    dadosClientes.forEach((usuario, index) => {
      if (client.numeroCliente == usuario.numeroCliente) {
        dadosClientes.splice(index, 1);
        history.push("/clients")
      }
    })
  }

  return(
    <li className="client-li-container">
      <section className="client-data">
        <div>
          <span>#{ client.numeroCliente }</span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          {/* <Link to={`/client/${client.numeroCliente}`}> */}
          <span>
            { client.nomeCliente }
          </span>
        </div>
        <div>
          <Button onClick={ handleUpdateClient }>Atualizar</Button>
          <Button onClick={ handleDeleteClient }>deletar</Button>
        </div>
      </section>
      {/* </Link> */}
      {/* <div>
        <Button variant="outlined" color="error" startIcon={<DeleteIcon />}></Button>
      </div> */}
      <hr/>
      <div>
        <div className="usina-controller">
          Usinas:
          <Button variant="contained" size="small" startIcon={<AddIcon />}>
            Adicionar Usina
          </Button>
        </div>
        {client.usinas.map((usina) => {
          return (
            <>
              <p>id: { usina.usinaId } Participação: { usina.percentualDeParticipacao }%</p>
              
            </>
          )
        })}
      </div>
    </li>
  )
}

export default CardClient;
