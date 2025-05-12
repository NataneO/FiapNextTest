import "./globals.css";
import "../../public/fonts/gotham.css";
import './styles/index.scss';
import Navbar from "./components/Navbar";
import { ReactNode } from "react";

export const metadata = {
  title: "FIAP",
  description: "Teste Front-end",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
