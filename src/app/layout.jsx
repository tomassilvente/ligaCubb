import { Inter } from "next/font/google";
import "./globals.css";
import "animate.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Liga Cubb",
  description: "Liga de Fútbol Universitario de Bahía Blanca",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>{children}</body>
    </html>
  );
}
