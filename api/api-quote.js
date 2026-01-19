export default async function handler(req, res) {
  const response = await fetch(
    "https://api.quotable.io/random?maxLength=140"
  );
  const data = await response.json();
  res.status(200).json(data);
}