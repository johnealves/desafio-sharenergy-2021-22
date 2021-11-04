const convertTime = (data) => {
  return data.map((value) => {
    const hours = Math.floor(value.tempo_h);
    const minutes = ((value.tempo_h - hours) * 60) /100;
    const convertedHour = (hours + minutes).toFixed(2);
    value.tempo_h = convertedHour;
    return value;
  })
}

export default convertTime;
