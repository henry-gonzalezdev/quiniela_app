import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quiniela Mundial 2026",
  description: "Haz tus predicciones y compite con tu familia en el Mundial 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen">
          {/* Sidebar para desktop */}
          <aside className="hidden md:block w-64 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800">
            <div className="p-6 border-b border-zinc-200 dark:border-zinc-800">
              <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                ⚽ Quiniela
              </h1>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                Mundial 2026
              </p>
            </div>
            <Navigation />
          </aside>

          {/* Contenido principal */}
          <main className="flex-1 md:ml-0">
            {children}
          </main>
        </div>

        {/* Navegación móvil */}
        <div className="md:hidden">
          <Navigation />
        </div>
      </body>
    </html>
  );
}
