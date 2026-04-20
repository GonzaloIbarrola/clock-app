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


## portfolio-meta
```json
{
  "published": true,
  "featured": false,
  "slug": "clock-app",
  "title": "Clock App",
  "summary": "Aplicación que muestra la hora local del usuario, ubicación por IP y una cita aleatoria con interfaz adaptada a modo día y noche.",
  "seoDescription": "Clock App es una aplicación construida con React, Vite y Tailwind CSS que muestra la hora actual según la zona horaria del usuario, incorpora geolocalización por IP y una experiencia visual dinámica con modo día y noche.",
  "tags": ["React", "Vite", "Tailwind CSS", "React Query", "Axios"],
  "thumbnail": "/images/projects/clock-app/cover.png",
  "thumbnailAlt": "Vista principal del proyecto Clock App",
  "demoUrl": "https://gonzaloibarrola.github.io/clock-app/",
  "repoUrl": "https://github.com/GonzaloIbarrola/clock-app",
  "priority": 1,
  "status": "completed"
}
