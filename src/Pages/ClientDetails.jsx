import React, { useEffect, useState } from "react";
import dadosClientes from "../dadosClientes.json";

const ClientDetails = ({ match: { params: { id } } }) => {
  const [client, setClient] = useState({
    nomeCliente: "",
    usinas: []
  })
  useEffect(() => {
    const searchedClient = dadosClientes.find(
      (client) => client.numeroCliente === parseInt(id))
    setClient(searchedClient)
  }, [])
  return(
    <div>
      <p>Cliente: <strong>{ client.nomeCliente }</strong></p>
      <p>Usinas: {client.usinas.map((usina) => {
        return <p>id: { usina.usinaId } Participação: { usina.percentualDeParticipacao }%</p>
      })}</p>
    </div>
  )
}

export default ClientDetails;
