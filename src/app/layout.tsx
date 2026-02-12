/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { Nunito } from "next/font/google"; //

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Providers } from "@/lib/providers";
import { GlobalStyles } from "@/styles/globalStyles";

// 1. Configuração da fonte otimizada
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito", //
});

export const metadata: Metadata = {
  title: "Lacrei Saúde",
  description:
    "Conectamos pessoas LGBTQIAPN com profissionais de saúde qualificados",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={nunito.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
      </head>
      <body>
        <Providers>
          <GlobalStyles />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
