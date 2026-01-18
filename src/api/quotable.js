import { api } from "./axiosInstance";

export const getRandomQuote = () => api.get("http://api.quotable.io/random?maxLength=140");