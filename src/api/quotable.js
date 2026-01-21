import axios from "axios";

export const getRandomQuote = async () => {
  const { data } = await axios.get("/api/quote", {
    params: {
      minLength: 50,
      maxLength: 150,
    },
  });

  return data;
};