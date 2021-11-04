import React from "react";
import Button from "@material-ui/core/Button" ;
import { Link } from "react-router-dom";
import GeneratedValue from "../utils/GeneratedValue";
import api from "../Services/api";
import "../CSS/CardClient.css";

const CardClient = ({ client }) => {
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
          <span>{ client.nomeCliente }</span>
        </div>
        <div>
          <Button component={Link} to={ `/client/update/${client._id}` }>Atualizar</Button>
          <Button onClick={ handleDeleteClient }>deletar</Button>
        </div>
      </section>
      <hr/>
      <div>
        <div>
          Usinas:
        </div>
        {client.usinas.map(({ usinaId, percentualDeParticipacao }, index) => {
          return (
            <div key={ index } >
              <p className="power-plant-by-client usina-controller">
                <span>id: { usinaId }&nbsp;&nbsp;Participação: { percentualDeParticipacao }%</span>
                {(usinaId === 1) && <span>
                  Valor Gerado(Dia): {
                    GeneratedValue(percentualDeParticipacao)
                      .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                  }
                </span>}
              </p>
            </div>
          )})}
      </div>
    </li>
  )
}

export default CardClient;
