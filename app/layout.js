import { Khmer } from "next/font/google";
import "./globals.css";
import Footer from "./component/Foot.js";
//import Header from "./component/Header.js";

const inter = Khmer({ subsets: ["khmer"], weight: '400' });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}
