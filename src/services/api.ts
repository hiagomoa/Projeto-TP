import axios from "axios";

const api = axios.create({
  baseURL: "https://backpatricia.herokuapp.com",
});

export default api;
