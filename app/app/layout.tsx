
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "INTELIGENTIA | Sua IA",
  description: "Sua assistente de inteligência artificial."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
