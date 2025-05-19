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
  description:
    "Especialistas em estética automotiva premium em Criciúma: vitrificação de pintura, polimento técnico e comercial, lavagem técnica, oxizanitização, pintura de pinças e muito mais. Seu carro tratado com excelência!",
  keywords: [
    "Estética automotiva Criciúma",
    "Estética automotiva em Criciúma SC",
    "Polimento técnico Criciúma",
    "Polimento comercial Criciúma",
    "Vitrificação de pintura Criciúma",
    "Lavagem técnica detalhada",
    "Pintura de pinças Criciúma",
    "Restauração de bancos de couro",
    "Higienização interna de carro",
    "Oxizanitização automotiva",
    "Troca de filtro do ar-condicionado",
    "Enceramento técnico Criciúma",
    "Lavagem técnica do motor",
    "Detailing automotivo Criciúma",
    "MK Studio Automotivo",
    "Serviços automotivos Criciúma",
    "Cuidados com carro Criciúma",
    "Estética premium para veículos",
    "Limpeza profissional de carro",
    "Studio de estética automotiva",
  ],
  authors: [{ name: "MK Studio Automotivo", url: "https://seudominio.com.br" }],
  creator: "MK Studio Automotivo",
  publisher: "MK Studio Automotivo",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "MK Studio Automotivo | Estética Automotiva em Criciúma - SC",
    description:
      "Transforme seu carro com vitrificação, polimento, higienização e muito mais. Detalhamento automotivo de alto nível em Criciúma.",
    url: "https://mkstudioautomotivo.com.br",
    siteName: "MK Studio Automotivo",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://mkstudioautomotivo.com.br/logo_mk_fundo.jpg", // aqui entra a logo da pasta public
        width: 1200,
        height: 630,
        alt: "MK Studio Automotivo - Estética automotiva Criciúma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MK Studio Automotivo | Estética Automotiva em Criciúma",
    description:
      "Polimento técnico, vitrificação, lavagem e muito mais com padrão premium em Criciúma - SC.",
    images: ["https://mkstudioautomotivo.com.br/logo_mk_fundo.jpg"],
  },
  metadataBase: new URL("https://seudominio.com.br"),
};

export default function RootLayout({  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
