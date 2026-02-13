
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Providers } from "@/lib/providers";
import { GlobalStyles } from "@/styles/globalStyles";


const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito",
  display: "swap",
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
    <html lang="pt-BR" className={`${nunito.variable} antialiased`}>
      <head>
      </head>
      <body suppressHydrationWarning>
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
