import { api } from "./axiosInstance";

export const getTimeByTimezone = (timezone = "Etc/UTC") =>
  api.get(`http://worldtimeapi.org/api/timezone/${timezone}`);