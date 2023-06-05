import api from "../api";

export async function registerUser(email, idade, nome, telefone, tipo) {
  console.log(email, idade, nome, telefone, tipo);

  const config = {
    "content-Type": "application/json",
  };
  const response = await api.post(
    "/Users",
    {
      email,
      idade,
      nome,
      telefone,
      tipo,
    },
    config
  );

  return response;
}
