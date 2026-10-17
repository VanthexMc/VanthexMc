import React from "react";
import { Pickaxe, Users, ShieldOff, Infinity as InfinityIcon } from "lucide-react";

const SMP_BG = "https://media.base44.com/images/public/6ac3b2cd1c34669978cf7ac9/07455a67f_generated_36569535.jpg";

const ASPECTS = [
  { icon: Pickaxe, text: "Costruisci la tua base ed esplora un mondo vasto" },
  { icon: Users, text: "Crea alleanze e vivi avventure infinite con gli amici" },
  { icon: ShieldOff, text: "Nessuno staff invasivo in-game, focus su gameplay puro" },
  { icon: InfinityIcon, text: "Economia, eventi e progressi che restano nel tempo" },
];

export default function GameMode() {
  return (
    <section id="gamemode" className="relative py-24 sm:py-32 bg-[#0F0A1A] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${SMP_BG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F0A1A] via-[#0F0A1A]/70 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold tracking-[0.3em] text-[#C084FC] uppercase">Modalità</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-white mb-5">
            Survival <span className="text-[#C084FC]">Multiplayer</span>
          </h2>
          <p className="text-lg text-[#E0D4FF] leading-relaxed mb-10">
            Unica modalità principale: l'esperienza survival pura al centro di tutto. Costruisci, esplora,
            fai economia e vivi avventure infinite con gli amici. Nessuno staff invasivo in-game, focus su
            gameplay puro e community.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {ASPECTS.map((a, i) => {
              const Icon = a.icon;
              return (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 rounded-xl border border-[#4C1D95]/40 bg-[#1A0B2E]/60 backdrop-blur-sm hover:border-[#8B5CF6]/60 transition-all"
                >
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-lg bg-[#8B5CF6]/15 border border-[#8B5CF6]/40">
                    <Icon className="text-[#C084FC]" size={20} />
                  </div>
                  <p className="text-[#E0D4FF] leading-relaxed pt-1">{a.text}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#8B5CF6]/40 bg-[#1A0B2E]/60 text-sm text-[#E0D4FF]">
            <span className="w-2 h-2 rounded-full bg-[#C084FC] animate-pulse" />
            Altre modalità potranno arrivare in futuro
          </div>
        </div>
      </div>
    </section>
  );
}