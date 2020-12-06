import axios from "axios";

const api = axios.create({
  baseURL: "http://backendtopicos.herokuapp.com",
});

export default api;
