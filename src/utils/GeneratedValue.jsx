import { useEnergyProvider } from "../Context/EnergyProvider";

const GeneratedValue = (percentual) => {
  const { powerPlant } = useEnergyProvider();
  let totalPower = 0
  if (powerPlant.length) {
    powerPlant.forEach((value, index) => {
      if (index !== 0) {
        const time = powerPlant[index].tempo_h - powerPlant[index-1].tempo_h
        const power = powerPlant[index-1].potencia_kW
        totalPower += time * power;
      }
    });
  }
  
  return (percentual / 100) * (totalPower * 0.95);
}

export default GeneratedValue;