import { useQuery } from "@tanstack/react-query";
import { getTimeByTimezone } from "../api/worldtime";

export const useWorldTime = (timezone) =>
  useQuery({
    queryKey: ["time", timezone ?? "local"],
    queryFn: () => getTimeByTimezone(timezone),
    staleTime: 0,
    refetchInterval: 1000,
    refetchIntervalInBackground: true,
  });
