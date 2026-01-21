import axios from "axios";

export const getRandomQuote = async () => {
  const { data } = await axios.get("/api/quote");

  return data;
};