import React, { useEffect, useState } from "react";
import { 
  CartesianGrid, XAxis, YAxis, AreaChart,
  Area, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import Button from "@material-ui/core/Button" ;
// import dadosUsina from "../dadosUsina.json";
import convertTime from "../utils/convertTime";
import "../App.css";
// import MainHeader from "../Components/MainHeader";
import api from "../Services/api";

const Home = () => {
  const [usina, setUsina] = useState([])
  const [metric, setMetric] = useState("tensao_V")

  useEffect(() => {
    const fecthData = async() => {
      const dadosUsina = await api.get("/usinas")
        .then((response) => response.data)
        .catch((err) => console.log(err));
      setUsina(convertTime(dadosUsina))
    }
    fecthData()
  }, [])

  const handleMetric = ({target}) => setMetric(target.name)

  return(
    <div className="graphic-container">
      <div className="usina">
        <h1>Usina 1</h1>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={usina}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="tempo_h" height={75}/>
            <YAxis dataKey={metric} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend verticalAlign="top" height={0}/>
            <Area type="monotone" dataKey={metric} stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="tempo_h" stroke="" fillOpacity={1} fill="url(#colorPv)" unit="hs"/>
          </AreaChart>
        </ResponsiveContainer>
        <div className="buttons-controller">
          <Button name="tensao_V" variant="contained" color="secondary" onClick={ handleMetric }>
            Tensão
          </Button>
          <Button name="corrente_A" variant="contained" onClick={ handleMetric }>Corrente</Button>
          <Button name="potencia_kW" variant="contained" color="success" onClick={ handleMetric }>Potência</Button>
          <Button name="temperatura_C" variant="contained" color="error" onClick={ handleMetric }>Temperatura</Button>
          <section>
            <h3>Energia Fotovoltaica</h3>
            <div>
              <div>
                <p>O Brasil é um país privilegiado por receber elevados índices de radiação solar, o que eleva o potencial gerador da energia fotovoltaica.</p>
                <p>A energia fotovoltaica é barata, abundante, limpa e confiável, caracterizando-se por uma fonte de energia alternativa aos combustíveis fósseis, que são os maiores responsáveis pelas mudanças climáticas no planeta</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Home;
