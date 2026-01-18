export function parseTimeData(data) {
  if (!data) return null;

  const time = new Date(data.datetime);
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");

  return {
    hour : hours,
    // Parsea formato de hora recibido a HH:MM
    formattedTime: `${hours}:${minutes}`,
    // Parsea formato de location recibido(America/Argentina/Buenos_Aires) cortando lo anterior al primer /.
    formattedLocation: data.timezone
      ? data.timezone
          .split("/") // Separa en los / y convierte en Array.
          .slice(1) // Corta desde el primer elemento del Array.
          .reverse() // Da vuelta el orden del array.
          .join(", ") // Convierte en String y une los elementos del array atraves de ", ".
          .replace("_", " ") // Reemplaza los "_" con " ".
      : "",
  };
}


import { useState, useEffect } from "react";

export function useScreenSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}