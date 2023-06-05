import api from "../api";

export async function getUsers() {
  // console.log(email, idade,  nome, telefone, tipo)

  const response = await api.get("/Users");

  return response;
}
