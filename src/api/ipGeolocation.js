import { api } from "./axiosInstance";

export const getIPInfo = (ip = "") => 
  api.get(`https://ip-api.com/json/${ip}`);