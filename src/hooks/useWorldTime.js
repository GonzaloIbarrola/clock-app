import { useQuery } from "@tanstack/react-query";
import { getTimeByTimezone } from "../api/worldtime";

export const useWorldTime = (timezone) => 
  useQuery({
    queryKey: ["time", timezone],
    queryFn: async () => (await getTimeByTimezone(timezone)).data,
    staleTime: 1000 * 30,
    refetchInterval: 1000 * 60,
    enabled: !!timezone,
  },);