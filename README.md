# Clock App 🕰️

Esta app muestra la hora actual según la zona horaria del usuario, una cita aleatoria del día y datos de ubicación obtenidos a partir de la IP. El diseño cambia entre modo día y noche en función de la hora local.

## 🚀 Demo
🔗 https://gonzaloibarrola.github.io/clock-app/

## 📌 Features
- Geolocalización por IP para determinar la zona horaria
- Hora actual formateada y actualizada desde la API de tiempo mundial
- Cita inspiradora aleatoria con opción de refrescar
- Cambia la apariencia entre día y noche
- Diseño responsive para móvil, tablet y escritorio

## 🛠️ Tech Stack
- Vite
- Tailwind CSS
- React Query
- Axios

## Estructura principal
- `src/App.jsx`: componente principal que orquesta la lógica de la app
- `src/hooks/`: hooks personalizados para geolocalización, hora mundial y citas
- `src/components/`: componentes reutilizables de UI
- `src/api/`: funciones para llamadas HTTP a servicios externos
- `src/assets/`: imágenes y recursos estáticos
