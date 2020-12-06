import axios from "axios";

const api = axios.create({
  baseURL: "https://backendtopicos.herokuapp.com/",
});

export default api;
