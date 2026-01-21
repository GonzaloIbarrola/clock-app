import { api } from "./axiosInstance";

export const getRandomQuote = () => api.get("api-quote");
