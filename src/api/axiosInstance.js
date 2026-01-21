import axios from "axios";

export const api = axios.create({
  baseURL: "/api",
});

export const getRandomQuote = async () => {
  const { data } = await api.get("/quote", {
    params: {
      minLength: 50,
      maxLength: 150,
    },
  });

  return data;
};