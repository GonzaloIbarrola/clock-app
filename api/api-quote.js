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

    // Esto asegura que si falla la API externa, veas el error
    if (!response.ok) {
      return res.status(500).json({ error: `Status ${response.status}` });
    }

    const data = await response.json();

    // Solo devolvemos lo que necesitamos
    res.status(200).json({
      content: data.content,
      author: data.author
    });
  } catch (error) {
    console.error("Error en serverless:", error.message);
    res.status(500).json({ error: error.message });
  }
}