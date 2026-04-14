import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GoAuth.ai | SMS AI Agent Control",
  description: "Securely manage your AI agents via SMS. True control, offline.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <SessionProvider>
          {children}
          <Toaster position="bottom-right" theme="dark" />
        </SessionProvider>
      </body>
    </html>
  );
}
