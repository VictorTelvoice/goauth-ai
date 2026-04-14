# Assistant Rules for GoAuth.ai

Este archivo instruye a Antigravity sobre cómo operar en este repositorio.

## 🚀 Stitch First Protocol
Antes de codificar cualquier pantalla nueva (`page.tsx`) o componente visual mayor:
1. Usa `mcp_stitch_list_projects` para ubicar el contexto ("GoAuth privado") si no existe, crealo.
2. Genera la UI con `mcp_stitch_generate_screen_from_text`.
3. Presenta los resultados y variantes al usuario.
4. **SOLO** tras validación explícita, procede a la implementación en `web/src/...`.

## 🏗️ Arquitectura de Rutas (Next.js 15)
El proyecto utiliza **Route Groups** para separar experiencias:
- **Público**: `(public)` -> `/`, `/login`, `/pricing`.
- **App**: `(app)/app` -> `/app/dashboard`, `/app/settings`.
- **Admin**: `(admin)/admin` -> `/admin/dashboard`.

**CRITICAL**: Al crear páginas privadas, anidarlas siempre dentro de `/app` o `/admin` dentro de sus respectivos grupos para evitar colisiones y asegurar la protección del Middleware.

## 🛠 Comandos & Tech Stack
- **Dev**: `npm run dev` (Puerto 3020) en `/web`.
- **Build**: `npm run build`.
- **Estilos**: Tailwind v4 (CSS-First). No usar `tailwind.config.js`. Configurar en `src/app/globals.css` vía `@theme` y `@utility`.
- **Auth**: Middleware en `src/middleware.ts` protege todas las rutas `/app/*` y `/admin/*`.

## 📏 Reglas de Oro de UI
- **True Black**: Fondo base `#000000`. Superficies `#0A0A14`.
- **Dashboard Stability**: Estructura `flex flex-col` con `min-w-0` en el `main` content.
- **Centrado**: Contenido dentro de `max-w-[1600px] mx-auto` con padding robusto (`p-6` a `p-10`).
- **Interacción**: Elementos clicables deben tener `cursor-pointer`.

## 📂 Referencia
- Consultar `AGENTS.md` para el detalle extendido del sistema de diseño y arquitectura.
