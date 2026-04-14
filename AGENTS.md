# GoAuth.ai Technical Stack & Design System

Este documento define los estándares técnicos, arquitectónicos y visuales para el desarrollo de GoAuth.ai.

## 🏗️ Arquitectura en Capas (Next.js 15)

El proyecto se divide en tres capas de responsabilidad claramente separadas mediante **Route Groups**:

1.  **Capa Pública (`(public)`)**: 
    - **Uso**: Landing page, precios, contacto, login y registro.
    - **Rutas**: `/`, `/login`, `/register`, `/pricing`.
    - **Layout**: Incluye `Navbar` y `Footer` globales.

2.  **Portal de Clientes (`(app)`)**:
    - **Uso**: Experiencia privada para el usuario final (SaaS).
    - **Prefijo de Ruta**: `/app/*` (ej: `/app/dashboard`).
    - **Layout**: Sidebar colapsable, Topbar premium y protección vía Middleware.

3.  **Administración (`(admin)`)**:
    - **Uso**: Backoffice y métricas globales para super-admins.
    - **Prefijo de Ruta**: `/admin/*` (ej: `/admin/dashboard`).
    - **Acento Visual**: Color `Aqua Glow` (`#00E5C0`).

## 🛠️ Tech Stack

- **Framework**: Next.js (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4 (CSS-First)
- **Iconografía**: Lucide React
- **Seguridad**: NextAuth.js + Middleware de protección de rutas.

## 🎨 Design System: "True Black Premium"

### Integración Tailwind v4
En lugar de `tailwind.config.js`, se utilizan directivas CSS en `globals.css`:
- **Tokens**: Definidos en el bloque `@theme` (`--color-brand`, `--color-accent`, etc.).
- **Componentes**: Registrados mediante `@utility` (`dashboard-card-premium`, `btn-primary`).

### Colores Base
- **Dark Principal**: `#000000` (Verdadera profundidad)
- **Superficies**: `#0A0A14` / `#12121F` (Dark2 / Surface)
- **Brand**: `#6C3BFF` (Purple Pulse)
- **Accent**: `#00E5C0` (Aqua Glow)

### Reglas de Layout (Critical)
1.  **Safe Zone**: Contenido contenido en `max-w-[1600px] mx-auto`.
2.  **Structural Stability**: El contenedor `main` debe tener `min-w-0` y `flex-col` para evitar colapsos.
3.  **Independent Scroll**: El contenido principal debe ser desplazable independientemente del sidebar/topbar.

## 🔄 Workflow "Stitch First"

1. **Ideación**: Describir la funcionalidad.
2. **Prototipado**: Generar la pantalla en Stitch (`mcp_stitch_generate_screen_from_text`).
3. **Validación**: Mostrar variantes al usuario.
4. **Implementación**: Codificar basándose en el diseño validado.
