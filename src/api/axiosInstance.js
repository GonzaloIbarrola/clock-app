import axios from "axios";

// export const api = axios.create({
//   timeout: 10000,
// });
export const api = axios.create({
  baseURL: "/", 
});

export const getRandomQuote = () => api.get("api-quote"); 