// import axios from "axios";

// export default async function handler(req, res) {
//   try {
//     const response = await axios.get(
//       `https://quoteslate.vercel.app/api/quotes/random?minLength=50&maxLength=150`
//     );

//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.status(200).json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching quote" });
//   }
// }

import axios from "axios";

export default async function handler(req, res) {
  try {
    const { minLength = 50, maxLength = 150 } = req.query;

    const { data } = await axios.get(
      "https://quoteslate.vercel.app/api/quotes/random",
      { params: { minLength, maxLength } }
    );

    // Header para que no haya problemas de CORS si lo usás directo
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching quote" });
  }
}