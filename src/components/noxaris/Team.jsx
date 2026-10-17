import React from "react";

// Staff in ordine di grado. Per aggiungere qualcuno copia un blocco.
// skin = avatar dal nickname Minecraft (se il nickname è diverso dal nome Discord, cambia l'URL).
const TEAM = [
  {
    name: "Xyrvane",
    role: "Founder & CEO",
    skin: "https://minotar.net/avatar/Xyrvane/128",
    desc: "La mente e il volto del progetto. Visionario e leader, guida VanthexMc e ne coordina ogni aspetto.",
  },
  {
    name: "ThePenguinYT_",
    role: "Founder",
    skin: "https://minotar.net/avatar/ThePenguinYT_/128",
    desc: "Co-fondatore e anima creativa. Porta energia, contenuti e la passione YouTube/TikTok dentro il progetto. Sempre presente per la community.",
  },
];

const NUMERI = ["Zero", "Una", "Due", "Tre", "Quattro", "Cinque", "Sei", "Sette", "Otto", "Nove", "Dieci", "Undici", "Dodici", "Tredici", "Quattordici", "Quindici"];

export default function Team() {
  return (
    <section id="team" className="relative py-24 sm:py-32 bg-gradient-to-b from-[#1A0B2E] to-[#0F0A1A] overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-[#4C1D95]/15 blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-[0.3em] text-[#C084FC] uppercase">Il Team</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-white">
            Scopri chi c'è <span className="text-[#C084FC]">dietro</span>
          </h2>
          <p className="mt-4 text-[#E0D4FF]/70 max-w-xl mx-auto">
            {NUMERI[TEAM.length] || TEAM.length} persone, una visione. Il team che guida VanthexMc.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {TEAM.map((m, i) => (
            <div
              key={i}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] group relative p-6 rounded-2xl border border-[#4C1D95]/40 bg-[#1A0B2E]/60 backdrop-blur-sm hover:border-[#8B5CF6]/70 hover:-translate-y-2 transition-all duration-300 text-center"
            >
              <div className="relative inline-block mb-5">
                <div className="absolute inset-0 rounded-full bg-[#8B5CF6]/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src={m.skin}
                  alt={m.name}
                  className="relative w-24 h-24 rounded-full object-cover border-2 border-[#8B5CF6] group-hover:glow-purple transition-all"
                />
              </div>
              <h3 className="text-lg font-bold text-white">{m.name}</h3>
              <p className="text-sm text-[#C084FC] font-semibold mb-3">{m.role}</p>
              <p className="text-sm text-[#E0D4FF]/75 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
