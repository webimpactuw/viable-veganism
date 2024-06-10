import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/Header.js";
import Footer from "./component/Foot.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Viable Veganism",
  description: "Viable Veganism",
  icon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Martel+Sans:wght@200;300;400;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Akaya+Kanadaka&display=swap" rel="stylesheet"/>
      </head>
      <body className={inter.className}>
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  );
}
