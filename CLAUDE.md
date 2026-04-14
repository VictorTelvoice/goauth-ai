# Assistant Rules for GoAuth.ai

Este archivo instruye a Antigravity sobre cómo operar en este repositorio.

## 🚀 Stitch First Protocol
Antes de codificar cualquier pantalla nueva (`page.tsx`) o componente visual mayor:
1. Usa `mcp_stitch_create_project` (si es necesario) o `mcp_stitch_list_projects` para ubicar el contexto.
2. Genera la UI con `mcp_stitch_generate_screen_from_text`.
3. Presenta los resultados y variantes al usuario.
4. **SOLO** tras validación explícita, procede a la implementación en el código fuente (`web/src/...`).

## 🛠 Comandos Frecuentes
- **Dev Server**: `npm run dev` (Puerto 3020 por defecto)
- **Verificación**: Usa el subagente de navegación para auditar alineación tras cambios en CSS global.

## 📏 Reglas de Oro de UI
- **True Black**: El fondo principal siempre debe ser `#000000`.
- **Alineación Defensiva**: Siempre inyectar o verificar que `p` y `li` no hereden comportamientos de centrado que fragmenten el texto.
- **Centrado Dash**: El contenido principal debe vivir dentro de un contenedor `mx-auto` limitado a `1600px`.
- **Interacción**: Inyectar `cursor-pointer` en `DashboardContent.tsx` para elementos no semánticos si es necesario.

## 📂 Estructura de Referencia
- Consultar `AGENTS.md` para el detalle del stack y el sistema de diseño.
