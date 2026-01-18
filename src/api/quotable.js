import { api } from "./axiosInstance";

export const getRandomQuote = () => api.get("https://api.quotable.io/random?maxLength=140");