import { api } from "./axiosInstance";

export const getTimeByTimezone = (timezone = "Etc/UTC") =>
  api.get(`https://worldtimeapi.org/api/timezone/${timezone}`);