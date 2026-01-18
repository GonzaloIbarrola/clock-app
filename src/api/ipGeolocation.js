import { api } from "./axiosInstance";

export const getIPInfo = (ip = "") => 
  api.get(`http://ip-api.com/json/${ip}`);