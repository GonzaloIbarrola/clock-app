import { useQuery } from "@tanstack/react-query";
import { getTimeByTimezone } from "../api/worldtime";

export const useWorldTime = (timezone) =>
  useQuery({
    queryKey: ["time", timezone],
    queryFn: async () => {
      try {
        const res = await getTimeByTimezone(timezone);
        return res.data;
      } catch (err) {
        console.warn("Error fetching time:", err);
        return null;
      }
    },
    staleTime: 1000 * 30,
    refetchInterval: 1000 * 60,
    enabled: !!timezone,
  });