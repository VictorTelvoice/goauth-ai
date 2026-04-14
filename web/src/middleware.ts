import { NextResponse } from "next/server";
import { auth } from "@/auth";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  // Rutas que requieren autenticación de usuario (App)
  const isAppRoute = nextUrl.pathname.startsWith("/app");

  // Rutas que requieren autenticación de administrador (Admin)
  const isAdminRoute = nextUrl.pathname.startsWith("/admin");

  // Rutas públicas (no requieren auth)
  const isPublicRoute = nextUrl.pathname === "/" || 
                        nextUrl.pathname.startsWith("/login") || 
                        nextUrl.pathname.startsWith("/register") ||
                        nextUrl.pathname.startsWith("/pricing") ||
                        nextUrl.pathname.startsWith("/contact");

  if (isAppRoute || isAdminRoute) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/login", nextUrl));
    }
  }

  // Si está logueado e intenta ir a login/register, redirigir a dashboard
  if (isLoggedIn && (nextUrl.pathname.startsWith("/login") || nextUrl.pathname.startsWith("/register"))) {
    return NextResponse.redirect(new URL("/app/dashboard", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
