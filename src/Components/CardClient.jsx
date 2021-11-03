import React from "react";
// import { useHistory } from "react-router";
import Button from "@material-ui/core/Button" ;
// import AddIcon from '@material-ui/icons/Add';
import "../CSS/CardClient.css";
import { useEnergyProvider } from "../Context/EnergyProvider";
import GeneratedValue from "../utils/GeneratedValue";
import api from "../Services/api";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const CardClient = ({ client, match }) => {
  const history = useHistory()
  const { powerPlant } = useEnergyProvider()

  const handleDeleteClient = () => {
    const resp = window.confirm(
      `Tem certeza de deseja excluir ${client.nomeCliente}, esta ação não podera ser desfeita.`)
    if (resp === true) {
      const id = client._id
      api.delete(`/client/${id}`)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
      window.location.reload();
      }
  }

  return(
    <li className="client-li-container">
      <section className="client-data">
        <div>
          <span>#{ client.numeroCliente }</span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span>
            { client.nomeCliente }
          </span>
        </div>
        <div>
          <Button component={Link} to={ `/client/update/${client._id}` }>Atualizar</Button>
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
        </div>
        {client.usinas.map(({ usinaId, percentualDeParticipacao }, index) => {
          return (
            <div key={ index }>
              <p className="power-plant-by-client">
                <span>id: { usinaId }&nbsp;&nbsp;Participação: { percentualDeParticipacao }%</span>
                <span>
                  Valor Gerado(Dia): {
                    GeneratedValue(percentualDeParticipacao)
                      .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                  }
                </span>
              </p>
              
            </div>
          )
        })}
      </div>
    </li>
  )
}

export default CardClient;
