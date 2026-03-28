import quotes from "../data/randomQuotes.json";

export const getRandomQuote = () => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  return random;
};