import { api } from "./axiosInstance";

export const getIPInfo = (ip = "", format = "json") => 
  api.get(`https://ipapi.co/${ip}/${format}/`);