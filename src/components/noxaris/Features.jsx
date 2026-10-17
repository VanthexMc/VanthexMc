import React from "react";
import { Zap, Users, Moon } from "lucide-react";

const FEATURES = [
  {
    icon: Zap,
    title: "Performance ottimizzate",
    text: "Server stabili, lag ridotto al minimo, protezione anti-cheat e infrastruttura pensata per crescere.",
  },
  {
    icon: Users,
    title: "Community & Staff attivi",
    text: "Team giovane, presente e appassionato. Discord sempre vivo, eventi regolari e supporto diretto.",
  },
  {
    icon: Moon,
    title: "Atmosfera unica",
    text: "Tema dark-fantasy viola, floating islands, castelli pixel e un vibe che non trovi su altri server italiani.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32 bg-gradient-to-b from-[#0F0A1A] to-[#1A0B2E] overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-[0.3em] text-[#C084FC] uppercase">Caratteristiche</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-white">
            Cosa rende VanthexMc <span className="text-[#C084FC]">speciale</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="group relative p-8 rounded-2xl border border-[#4C1D95]/40 bg-[#1A0B2E]/60 backdrop-blur-sm hover:border-[#8B5CF6]/70 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#8B5CF6]/0 to-[#8B5CF6]/0 group-hover:from-[#8B5CF6]/10 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/50 mb-6 group-hover:glow-purple transition-all">
                    <Icon className="text-[#C084FC]" size={30} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                  <p className="text-[#E0D4FF]/80 leading-relaxed">{f.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}