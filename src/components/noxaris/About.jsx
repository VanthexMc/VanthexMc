import React from "react";
import { Sparkles, Calendar, Shield, Moon } from "lucide-react";

const POINTS = [
  {
    icon: Calendar,
    title: "5 settembre 2026",
    text: "Il giorno in cui abbiamo acceso ufficialmente i motori del progetto.",
  },
  {
    icon: Sparkles,
    title: "Un'idea coltivata a lungo",
    text: "Il progetto viveva già nelle nostre teste molto prima del lancio.",
  },
  {
    icon: Shield,
    title: "Progressi reali",
    text: "Niente pay-to-win aggressivo, niente reset continui: solo crescita autentica.",
  },
  {
    icon: Moon,
    title: "Atmosfera dark-fantasy",
    text: "Un vibe viola che ti cattura dal primo login, unico tra i server italiani.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#0F0A1A] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#4C1D95]/15 blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-[0.3em] text-[#C084FC] uppercase">Chi siamo</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-white">
            Non è solo un server. È un'idea diventata <span className="text-[#C084FC]">realtà</span>.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-[#E0D4FF] leading-relaxed">
            VanthexMc non è solo un server: è il risultato di un'idea coltivata a lungo. Vogliamo offrire
            un'esperienza Survival autentica — build, esplorazione, economia, eventi e una community che cresce
            insieme. Niente pay-to-win aggressivo, niente reset continui: solo progressi reali e
            un'atmosfera dark viola che ti cattura dal primo login.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#8B5CF6]/50 to-transparent -translate-x-1/2 hidden sm:block" />
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-10">
            {POINTS.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className={`relative p-6 rounded-2xl border border-[#4C1D95]/40 bg-[#1A0B2E]/60 backdrop-blur-sm hover:border-[#8B5CF6]/60 transition-all ${
                    i % 2 === 0 ? "sm:text-right" : "sm:mt-16"
                  }`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/40 mb-4 ${
                      i % 2 === 0 ? "sm:ml-auto" : ""
                    }`}
                  >
                    <Icon className="text-[#C084FC]" size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1.5">{p.title}</h3>
                  <p className="text-[#E0D4FF]/80 leading-relaxed">{p.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}