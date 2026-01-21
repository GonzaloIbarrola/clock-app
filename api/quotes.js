export default async function handler(req, res) {
  const url =
    "https://quoteslate.vercel.app/api/quotes/random?minLength=50&maxLength=150";

  const response = await fetch(url);
  const data = await response.json();

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}