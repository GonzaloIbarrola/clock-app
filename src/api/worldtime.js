import { api } from "./axiosInstance";

export const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

export const getTimeByTimezone = () =>
  api.get(`https://worldtimeapi.org/api/timezone/${timezone}`);