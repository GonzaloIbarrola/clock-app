import { useQuery } from "@tanstack/react-query";
import { getRandomQuote } from "../api/quotable";

export const useQuote = () => 
  useQuery({
    queryKey: ["quote"],
    queryFn: async () => (await getRandomQuote()).data
  });
