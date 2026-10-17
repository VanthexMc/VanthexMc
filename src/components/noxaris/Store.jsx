import React from "react";
import { ShoppingBag, Gem, Sparkles, Bell } from "lucide-react";

const PERKS = [
  {
    icon: Gem,
    title: "Rank & Crate",
    text: "Rank esclusivi, crate e cosmetici per personalizzare la tua esperienza.",
  },
  {
    icon: Sparkles,
    title: "Sempre bilanciato",
    text: "Niente pay-to-win: solo vantaggi estetici e quality-of-life.",
  },
  {
    icon: Bell,
    title: "Presto disponibile",
    text: "Stiamo ultimando lo store. Resta su Discord per il lancio ufficiale.",
  },
];

export default function Store() {
  return (
    <section id="store" className="relative py-24 sm:py-32 bg-gradient-to-b from-[#0F0A1A] to-[#1A0B2E] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[#8B5CF6]/10 blur-[130px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 text-center">
        <span className="text-sm font-semibold tracking-[0.3em] text-[#C084FC] uppercase">Store</span>
        <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-white mb-4">
          Store in arrivo, <span className="text-[#C084FC]">resta sintonizzato</span>
        </h2>
        <p className="text-lg text-[#E0D4FF]/80 max-w-xl mx-auto mb-6">
          Lo store ufficiale di VanthexMc è in fase di sviluppo. Presto potrai supportare il server e
          sbloccare contenuti esclusivi.
        </p>

        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#8B5CF6]/50 bg-[#8B5CF6]/15 text-sm font-semibold text-[#E0D4FF] mb-14 animate-pulse-glow">
          <span className="w-2 h-2 rounded-full bg-[#C084FC] animate-pulse" />
          In sviluppo — Coming Soon
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          {PERKS.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="p-7 rounded-2xl border border-[#4C1D95]/40 bg-[#1A0B2E]/60 backdrop-blur-sm hover:border-[#8B5CF6]/60 transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/40 mb-5">
                  <Icon className="text-[#C084FC]" size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-[#E0D4FF]/75 leading-relaxed">{p.text}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12">
          <a
            href="https://discord.gg/uggeCGqbJt"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#8B5CF6] hover:bg-[#A855F7] text-white font-semibold transition-all glow-purple"
          >
            <ShoppingBag size={18} />
            Avvisami su Discord
          </a>
        </div>
      </div>
    </section>
  );
}