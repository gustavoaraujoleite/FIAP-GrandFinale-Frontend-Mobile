import axios from "axios";
let personal_IP;
const api = axios.create({
  baseURL: `http://${personal_IP}`,
});

export default api;
