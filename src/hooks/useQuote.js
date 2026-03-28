import { useQuery } from "@tanstack/react-query";
import { getRandomQuote } from "../api/quotable";

export const useQuote = () =>
  useQuery({
    queryKey: ["quote"],
    queryFn: async () => getRandomQuote(), // 👈 ya es la quote
    enabled: true, // si querés que no se ejecute automáticamente
  });