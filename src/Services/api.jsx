import axios from "axios";

const localhost = "http://192.168.0.103"

const api = axios.create({
  baseURL: `${localhost}:3001`,
});

export default api;