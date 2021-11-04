import React, { useContext, useEffect, useState } from "react"
import fetchUsina from "../utils/fetchUsina";
import EnergyContext from "./EnergyContext"

export const EnergyProvider = ({ children }) => {
  const [powerPlant, setPowerPlant] = useState([])
  const [userActive, setUserActive] = useState({})

  useEffect(() => {
    const fetchData = async() => {
      const power = await fetchUsina();
      setPowerPlant([...power])
    }
    fetchData()
    localStorage.getItem("testTokenSharenergy");
    setUserActive(JSON.parse(localStorage.getItem("testUserSharenergy")));
  }, [])

  const context = {
    powerPlant,
    userActive,
    setUserActive,
  }

  return(
    <EnergyContext.Provider value={ context }>
      { children }
    </EnergyContext.Provider>
  )
}

export const useEnergyProvider = () => useContext(EnergyContext);
