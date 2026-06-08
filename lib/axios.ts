import axios from "axios";

const api = axios.create({
  baseURL: "https://wizard-world-api.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
