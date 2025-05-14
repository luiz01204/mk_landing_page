import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MK Studio Automotivo | Estética Automotiva em Criciúma - SC",
  description: "Estética automotiva premium em Criciúma: polimento, vitrificação, lavação detalhada e limpeza de motor. Atendimento especializado para quem é exigente com o carro.",
  keywords: [
    "Estética automotiva Criciúma",
    "Polimento automotivo",
    "Vitrificação de pintura",
    "Lavação detalhada de carro",
    "Limpeza de motor Criciúma",
    "Cuidado automotivo",
    "Detailing Criciúma",
    "Lavagem técnica de carro",
    "MK Studio Automotivo",
    "Serviços automotivos premium",
  ],
  authors: [{ name: "MK Studio Automotivo", url: "https://seudominio.com.br" }],
  creator: "MK Studio Automotivo",
  publisher: "MK Studio Automotivo",
  robots: "index, follow",
  openGraph: {
    title: "MK Studio Automotivo | Estética Automotiva em Criciúma - SC",
    description: "Transforme seu carro com polimento, vitrificação, e lavação detalhada. Qualidade e dedicação em cada detalhe.",
    url: "https://seudominio.com.br",
    siteName: "MK Studio Automotivo",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://seudominio.com.br/og-image.jpg", // Troca isso pela URL real de uma imagem bonita da loja ou serviço
        width: 1200,
        height: 630,
        alt: "MK Studio Automotivo - Estética automotiva Criciúma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MK Studio Automotivo | Estética Automotiva em Criciúma",
    description: "Polimento, vitrificação e lavação detalhada com qualidade premium em Criciúma - SC.",
    images: ["https://seudominio.com.br/og-image.jpg"], // mesma imagem do Open Graph
  },
  metadataBase: new URL("https://seudominio.com.br"), // coloca o domínio real aqui
};


export default function RootLayout({  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
