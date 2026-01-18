import { useQuery } from "@tanstack/react-query";
import { getIPInfo } from "../api/ipGeolocation";

export const useIPGeolocation = (ip) => 
  useQuery({
    queryKey: ["ipInfo", ip],
    queryFn: async () => (await getIPInfo(ip)).data,
    staleTime: 1000 * 60 * 10,
  });