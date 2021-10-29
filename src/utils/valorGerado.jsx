import dadosUsina from "../dadosUsina.json";

const handleValueEnergy = () => {
  let energia = 0
  let lastTime = 0
  let potencia = 0
  dadosUsina.forEach((element, index) => {
    if (index > 0) {
      energia += (element.tempo_h - lastTime) * potencia
      console.log("Energia " + energia)
    }
    potencia = element.potencia_kW
    lastTime = element.tempo_h
  });
  return energia * 0.95
}

export default handleValueEnergy;
