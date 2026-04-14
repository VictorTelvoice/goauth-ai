# GoAuth.ai Technical Stack & Design System

Este documento define los estándares técnicos y visuales para el desarrollo de GoAuth.ai.

## 🛠 Tech Stack

- **Framework**: Next.js (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4 (Glassmorphism & True Black)
- **Iconografía**: Lucide React
- **Notificaciones**: Sonner
- **Prototipado**: Stitch (Obligatorio para nuevas pantallas) Utilizar el proyecto "GoAuth privado"

## 🎨 Design System: "True Black Premium"

### Colores Base
- **Dark Principal**: `#000000` (Verdadera profundidad)
- **Superficies**: `#0A0A14` / `#12121F` (Dark2)
- **Brand**: `#6C3BFF` (Purple Pulse)
- **Accent**: `#00E5C0` (Aqua Glow)

### Reglas de Layout
1. **Safe Zone**: Todo el contenido del dashboard debe estar contenido en un `max-w-[1600px] mx-auto`.
2. **Dashboard Main**: El contenedor principal debe manejar el margen lateral de 256px dinámicamente según el estado de la sidebar.
3. **Cards**: Usar la clase `.dashboard-card-premium` para contenedores de información.

### Tipografía y Alineación (Critical)
- **Evitar fragmentación**: NO usar `flex` con `justify-between` en contenedores que tengan nodos de texto mezclados con etiquetas hijas (esto rompe la cohesión de la frase).
- **Listas**: Usar `relative pl-6` con bullets posicionados absolutamente (`absolute left-0`) para asegurar alineación izquierda perfecta.
- **Interactividad**: Todo elemento clicable DEBE tener `cursor: pointer`.

## 🔄 Workflow "Stitch First"

1. **Ideación**: Describir la funcionalidad.
2. **Prototipado**: Generar la pantalla en Stitch (`mcp_stitch_generate_screen_from_text`), contemplar diseños para mobile, desktop, tablet.
3. **Validación**: Mostrar variantes al usuario y recibir feedback.
4. **Implementación**: Codificar basándose en el diseño validado utilizando el sistema de diseño definido arriba.
