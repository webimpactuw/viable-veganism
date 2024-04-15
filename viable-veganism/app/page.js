"use client";
import Image from "next/image";
// import Footer from "@/components/footer";
import Footer from "./components/footer";
import HomePage from "./components/homepage";
import Carousel from"./components/carousel";

export default function Home() {
  return (
    <div>
      <HomePage />
      <Footer />
    </div>
  );
}
