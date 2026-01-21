import axios from "axios";

export default async function handler(req, res) {
  try {
    const { minLength = 50, maxLength = 150 } = req.query;

    const response = await axios.get(
      "https://quoteslate.vercel.app/api/quotes/random",
      {
        params: { minLength, maxLength },
      }
    );

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching quote" });
  }
}