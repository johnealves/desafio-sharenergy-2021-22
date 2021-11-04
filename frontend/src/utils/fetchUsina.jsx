import api from "../Services/api";

const fetchUsina = () => {
  return api.get("/usinas")
    .then((response) => response.data)
    .catch((err) => console.log(err));
}

export default fetchUsina;
