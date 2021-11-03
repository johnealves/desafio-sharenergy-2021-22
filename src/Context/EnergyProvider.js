import React, { useContext, useEffect, useState } from "react"
import fetchUsina from "../utils/fetchUsina";
import EnergyContext from "./EnergyContext"

export const EnergyProvider = ({ children }) => {
  const [powerPlant, setPowerPlant] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      const power = await fetchUsina();
      setPowerPlant([...power])
    }
    fetchData()
  }, [])

  const context = {
    powerPlant
  }

  return(
    <EnergyContext.Provider value={ context }>
      { children }
    </EnergyContext.Provider>
  )
}

export const useEnergyProvider = () => useContext(EnergyContext);
