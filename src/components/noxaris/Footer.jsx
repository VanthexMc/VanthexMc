import React from "react";

const LOGO = import.meta.env.BASE_URL + "logo.webp";

const QUICK = [
  { label: "Home", href: "/#hero" },
  { label: "Regolamento", href: "/regolamento" },
  { label: "Candidature", href: "/#staff" },
  { label: "Discord", href: "https://discord.gg/uggeCGqbJt" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UC7Cbsy_YMLcBnixquAOo5aw" },
  { label: "TikTok", href: "https://www.tiktok.com/@noxarismc" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0613] border-t border-[#4C1D95]/40 pt-16 pb-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[#8B5CF6] to-transparent" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <img
            src={LOGO}
            alt="VanthexMc"
            className="w-28 h-28 object-contain mix-blend-screen mb-2"
          />
          <h3 className="text-2xl font-extrabold text-white">
            Vanthex<span className="text-[#C084FC]">Mc</span>
          </h3>
          <p className="mt-3 italic text-[#E0D4FF]/70 max-w-md">
            "Server creato il 5 settembre 2026 — L'idea c'era già da prima."
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-10">
          {QUICK.map((q) => (
            <a
              key={q.label}
              href={q.href}
              target={q.href.startsWith("http") ? "_blank" : undefined}
              rel={q.href.startsWith("http") ? "noreferrer" : undefined}
              className="relative text-sm text-[#E0D4FF] hover:text-white transition-colors group"
            >
              {q.label}
              {q.soon && (
                <span className="ml-1.5 text-[10px] px-1.5 py-0.5 rounded bg-[#8B5CF6]/20 text-[#C084FC] font-semibold align-middle">
                  soon
                </span>
              )}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B5CF6] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="pt-8 border-t border-[#4C1D95]/30 text-center">
          <p className="text-sm text-[#E0D4FF]/50">
            VanthexMc © 2026 · Java &amp; Bedrock Edition · Survival · Community italiana
          </p>
        </div>
      </div>
    </footer>
  );
}