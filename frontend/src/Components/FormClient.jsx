import { Button, FormControl, List, ListItem, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "../CSS/Clients.css";
import api from "../Services/api";
import { useHistory } from "react-router";
import { Delete } from "@material-ui/icons";

const FormClient = ({ match: { params: { id } } }) => {
  const [clientId, setClientId] = useState(undefined)
  const [clientData, setClientData] = useState({
    nomeCliente: "",
    numeroCliente: "",
  });
  const [powerPlantData, setPowerPlantData] = useState({})
  const [powerPlants, setPowerPlants] = useState([])
  const [typeForm, setTypeForm] = useState("add")
  const history = useHistory()

  useEffect(() => {
    if (id) {
      setClientId(id);
      api.get(`/client/${id}`).then(resp => {
        setClientData({
          nomeCliente: resp.data.nomeCliente,
          numeroCliente: resp.data.numeroCliente,
        })
        setPowerPlants(resp.data.usinas)
        setTypeForm("update")
      })
    }
  }, [id])

  const handleClientData = ({ target: { name, value } }) => {
    setClientData({ ...clientData, [`${name}`]: value })
  }

  const handlePowerPlantData = ({ target: { name, value } }) => {
    setPowerPlantData({ ...powerPlantData, [`${name}`]: value })
  }

  const handlePowerPlants = () => {
    setPowerPlants([...powerPlants, {
      usinaId: Number(powerPlantData.id),
      percentualDeParticipacao: Number(powerPlantData.percentual)
    }])
  }

  const handleClient = () => {
    if (typeForm === "add") {
      api.post("/client",
        {
          "numeroCliente": Number(clientData.numeroCliente),
          "nomeCliente": clientData.nomeCliente,
          "usinas": powerPlants
        })
      .then(resp => history.push("/clients"))
      .catch(err => alert("Dados incorretos, verifique os dados e tente"))
    } else {
      api.put(`/client/${clientId}`,
        {
          "numeroCliente": Number(clientData.numeroCliente),
          "nomeCliente": clientData.nomeCliente,
          "usinas": powerPlants
        })
      .then(resp => history.push("/clients"))
      .catch(err => console.log(err))
    }
  }

  const removePowerPlant = (id) => {
    const updatePowerPlants = powerPlants.filter((value) => value.usinaId !== id )
    setPowerPlants(updatePowerPlants)
  }

  return(
    <div className="new-client-container">
      <FormControl className="form-new-client">
        {(clientId) ? <h1>Atualizar cliente</h1> : <h1>Novo cliente</h1> }
        <TextField
          value={ clientData.numeroCliente }
          id="outlined-basic"
          type="number"
          name="numeroCliente"
          label="Numero do cliente"
          variant="outlined"
          onInput={ handleClientData }
        />
        <TextField
          value={ clientData.nomeCliente }
          id="outlined-basic"
          name="nomeCliente"
          label="Nome do cliente"
          variant="outlined"
          onInput={ handleClientData }
        />
        <div>
          <TextField
            id="outlined-basic"
            type="number"
            name="id"
            label="id da usina"
            variant="outlined"
            onInput={ handlePowerPlantData }
          />
          <TextField
            id="outlined-basic"
            type="number"
            name="percentual"
            label="Participação(%)"
            variant="outlined"
            onInput={ handlePowerPlantData }
          />
          <Button
            className="button-add-power-plant"
            variant="outlined"
            onClick={ handlePowerPlants }
          >
            Adicionar usina
          </Button>
          <List>
            { (powerPlants.length!==0) && <h3>Usinas a cadastrar: </h3> }
            { powerPlants.map((value, index) => {
              return(
                <ListItem key={ index }>
                  Id da usina: { value.usinaId } &nbsp;&nbsp;&nbsp; Participação { value.percentualDeParticipacao }%
                  <Button startIcon={<Delete />} onClick={ () => removePowerPlant(value.usinaId) }/>
                </ListItem>
              )
            }) }
          </List>
        </div>
        <Button 
          variant="outlined"
          onClick={ handleClient }
        >
          Cadastrar cliente
        </Button>
      </FormControl>
    </div>
  )
}

export default FormClient;
