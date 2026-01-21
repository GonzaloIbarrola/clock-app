import axios from "axios";

// export const api = axios.create({
//   timeout: 10000,
// });
export const api = axios.create({
  baseURL: "/api", 
});

export const getRandomQuote = () => api.get("quotes"); 