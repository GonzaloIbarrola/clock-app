# Clock App 🕰️

Clock App muestra la hora actual según la zona horaria del usuario, una cita inspiradora aleatoria y datos de ubicación basados en la IP. La interfaz cambia entre modo día y noche según la hora local y está optimizada para móviles, tablet y escritorio.

## 🚀 Demo
🔗 https://gonzaloibarrola.github.io/clock-app/

## 📌 Características
- Geolocalización por IP para determinar la ubicación y la zona horaria
- Hora actual formateada y actualizada usando la API de tiempo mundial
- Citas motivacionales aleatorias con opción de refrescar
- Tema dinámico de día/noche según la hora local
- Diseño responsive para móvil, tablet y escritorio

## 🧩 Tech Stack
- Vite
- React
- Tailwind CSS
- React Query
- Axios

## 📂 Estructura principal
- `src/App.jsx` — componente principal que orquesta la app
- `src/hooks/` — hooks personalizados para geolocalización, hora mundial y citas
- `src/components/` — componentes reutilizables de UI
- `src/api/` — funciones para llamadas HTTP a servicios externos
- `src/assets/` — imágenes y recursos estáticos
