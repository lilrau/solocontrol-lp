import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Solocontrol | Engenharia que transforma dados em decisão",
  description:
    "Controle tecnológico em pavimentação, concreto e solos para decisões seguras na obra.",
  openGraph: {
    title: "Solocontrol | Dados confiáveis para decisões seguras",
    description: "Engenharia e controle tecnológico do campo ao resultado.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/assets/hero-pavement-field.png", width: 1600, height: 1067 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solocontrol | Engenharia e controle tecnológico",
    description: "Dados confiáveis para decisões seguras na obra.",
    images: ["/assets/hero-pavement-field.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
