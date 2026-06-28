import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = "https://burpilot.com"; // ← cambia cuando tengas el dominio activo

export const metadata: Metadata = {
  // ── Básico ──────────────────────────────────
  title: {
    default: "BURPILOT — Automatización empresarial con IA",
    template: "%s | BURPILOT",
  },
  description:
    "Sistemas de automatización diseñados a la medida de tu negocio. WhatsApp → IA → CRM → Agenda. Tú lideras. Nosotros piloteamos.",

  // ── Indexación ──────────────────────────────
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  // ── Open Graph (WhatsApp, Facebook, LinkedIn) ──
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "BURPILOT",
    title: "BURPILOT — Automatización empresarial con IA",
    description:
      "Sistemas de automatización diseñados a la medida de tu negocio. WhatsApp → IA → CRM → Agenda. Tú lideras. Nosotros piloteamos.",
    images: [
      {
        url: "/og-image.png", // ← genera esta imagen (ver instrucciones abajo)
        width: 1200,
        height: 630,
        alt: "BURPILOT — You Lead. We Pilot.",
      },
    ],
    locale: "es_MX",
  },

  // ── Twitter / X ─────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "BURPILOT — Automatización empresarial con IA",
    description:
      "Sistemas de automatización a la medida. WhatsApp → IA → CRM → Agenda.",
    images: ["/og-image.png"],
  },

  // ── Palabras clave ───────────────────────────
  keywords: [
    "automatización empresarial",
    "automatización con IA",
    "WhatsApp automatizado",
    "CRM automático",
    "agentes de IA",
    "automatización México",
    "agenda inteligente",
    "BURPILOT",
  ],

  // ── Autor / Verificación ─────────────────────
  authors: [{ name: "BURPILOT", url: BASE_URL }],
  creator: "BURPILOT",

  // ── Favicon (Next.js los toma de /app/favicon.ico automáticamente) ──
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}