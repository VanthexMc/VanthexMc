import React from "react";
import { MessageCircle, Youtube, Music2 } from "lucide-react";

const SOCIALS = [
  {
    icon: MessageCircle,
    name: "Discord",
    handle: "discord.gg/uggeCGqbJt",
    url: "https://discord.gg/uggeCGqbJt",
    desc: "Il cuore della community. Entra, presentaiti e resta aggiornato.",
    primary: true,
  },
  {
    icon: Youtube,
    name: "YouTube",
    handle: "NoxarisMc",
    url: "https://www.youtube.com/channel/UC7Cbsy_YMLcBnixquAOo5aw",
    desc: "Video, contenuti e momenti migliori dal server.",
    primary: false,
  },
  {
    icon: Music2,
    name: "TikTok",
    handle: "@noxarismc",
    url: "https://www.tiktok.com/@noxarismc?_r=1&_t=ZN-9AIsJKvwFvC",
    desc: "Clip, meme e momenti virali della community.",
    primary: false,
  },
];

export default function Social() {
  return (
    <section id="social" className="relative py-24 sm:py-32 bg-[#0F0A1A] overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#4C1D95]/15 blur-[130px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 text-center">
        <span className="text-sm font-semibold tracking-[0.3em] text-[#C084FC] uppercase">Social & Community</span>
        <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-white mb-3">
          Restiamo in <span className="text-[#C084FC]">contatto</span>
        </h2>
        <p className="text-lg text-[#E0D4FF]/80 mb-14 max-w-xl mx-auto">
          Seguici per aggiornamenti, eventi e contenuti esclusivi!
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {SOCIALS.map((s, i) => {
            const Icon = s.icon;
            return (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className={`group p-7 rounded-2xl border backdrop-blur-sm hover:-translate-y-2 transition-all duration-300 text-left ${
                  s.primary
                    ? "border-[#8B5CF6] bg-[#8B5CF6]/15 hover:glow-purple-strong"
                    : "border-[#4C1D95]/40 bg-[#1A0B2E]/60 hover:border-[#8B5CF6]/60"
                }`}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 mb-5">
                  <Icon className="text-[#C084FC]" size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{s.name}</h3>
                <p className="text-sm text-[#C084FC] font-mono mb-3 break-all">{s.handle}</p>
                <p className="text-sm text-[#E0D4FF]/75 leading-relaxed">{s.desc}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}