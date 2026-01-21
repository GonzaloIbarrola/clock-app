// import { useQuery } from "@tanstack/react-query";
// import { getRandomQuote } from "../api/quotable";

// export const useQuote = () => 
//   useQuery({
//     queryKey: ["quote"],
//     queryFn: getRandomQuote
//   });


import { useQuery } from "@tanstack/react-query";
import { getRandomQuote } from "../api/axiosInstance";

export const useQuote = () => {
  return useQuery({
    queryKey: ["quote"],
    queryFn: getRandomQuote,
    refetchOnWindowFocus: false,
  });
};