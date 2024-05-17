"use client";
import Footer from "./components/footer";
import HomePage from "./components/homepage";
import Header from "./components/header";
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      {/* <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Martel+Sans:wght@200;300;400;600;700;800;900&family=Moulpali&display=swap" rel="stylesheet"/>
      </Head> */}
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}
