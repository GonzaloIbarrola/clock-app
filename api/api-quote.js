// export default async function handler(req, res) {
//   const response = await fetch(
//     "https://api.quotable.io/random?maxLength=140"
//   );
//   const data = await response.json();
//   res.status(200).json(data);
// }

export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://api.quotable.io/random?maxLength=140"
    );

    if (!response.ok) {
      throw new Error(`Error en la API externa: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error); // <-- esto ayuda a ver qué falla en Vercel
    res.status(500).json({ error: error.message });
  }
}