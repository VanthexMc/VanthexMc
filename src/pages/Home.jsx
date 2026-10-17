import React from "react";
import Navbar from "@/components/noxaris/Navbar";
import Hero from "@/components/noxaris/Hero";
import About from "@/components/noxaris/About";
import Features from "@/components/noxaris/Features";
import GameMode from "@/components/noxaris/GameMode";
import BachecaEventi from "@/components/noxaris/BachecaEventi";
import Store from "@/components/noxaris/Store";
import Team from "@/components/noxaris/Team";
import StaffApplication from "@/components/noxaris/StaffApplication";
import Social from "@/components/noxaris/Social";
import Faq from "@/components/noxaris/Faq";
import Footer from "@/components/noxaris/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F0A1A] text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <GameMode />
        <BachecaEventi />
        <Store />
        <Team />
        <StaffApplication />
        <Social />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}