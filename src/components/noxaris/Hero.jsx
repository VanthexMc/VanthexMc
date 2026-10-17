import React, { useState } from "react";
import { Copy, Check, MessageCircle, Gamepad2 } from "lucide-react";
import Particles from "./Particles";

const SERVER_IP = "Coming Soon";
const LOGO = import.meta.env.BASE_URL + "logo.webp";
const HERO_BG = "https://media.base44.com/images/public/6ac3b2cd1c34669978cf7ac9/c4812a255_generated_9899585d.jpg";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyIp = async () => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(SERVER_IP);
      ok = true;
    } catch {
      try {
        const ta = document.createElement("textarea");
        ta.value = SERVER_IP;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        ok = document.execCommand("copy");
        document.body.removeChild(ta);
      } catch {
        ok = false;
      }
    }
    setCopied(ok);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-void">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0A1A]/60 via-[#0F0A1A]/40 to-[#0F0A1A]" />

      <Particles count={28} />

      {/* Floating decorative logo glow rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-[#8B5CF6]/20 animate-pulse-glow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full border border-[#4C1D95]/20 pointer-events-none" />

      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto pt-20">
        <div className="flex justify-center mb-6">
          <img
            src={LOGO}
            alt="VanthexMc Logo"
            className="w-64 h-64 sm:w-96 sm:h-96 object-contain mix-blend-screen animate-drift drop-shadow-[0_0_40px_rgba(139,92,246,0.45)]"
          />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#8B5CF6]/40 bg-[#1A0B2E]/60 backdrop-blur-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-[#E0D4FF]">Server Online · Smp</span>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-white text-glow mb-4">
          Vanthex<span className="text-[#C084FC]">Mc</span>
        </h1>
        <p className="text-xl sm:text-2xl text-[#E0D4FF] font-semibold mb-3">
          Un'esperienza Survival immersiva e senza limiti
        </p>
        <p className="text-base sm:text-lg text-[#E0D4FF]/80 max-w-2xl mx-auto mb-9 leading-relaxed">
          Nato da un'idea che esisteva già da tempo, il server è ufficialmente online dal{" "}
          <span className="text-[#C084FC] font-semibold">5 settembre 2026</span>. Un mondo survival puro,
          community viva e atmosfera dark-fantasy.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={copyIp}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#8B5CF6] hover:bg-[#A855F7] text-white font-bold text-lg transition-all glow-purple-strong hover:scale-105"
          >
            <Gamepad2 size={22} />
            <span>{copied ? "IP Copiato!" : "Entra nel Server"}</span>
            {copied ? <Check size={20} className="text-green-300" /> : <Copy size={18} className="opacity-80" />}
            <span className="hidden sm:block text-xs font-mono opacity-70 ml-1 px-2 py-0.5 rounded bg-black/30">
              {SERVER_IP}
            </span>
          </button>

          <a
            href="https://discord.gg/uggeCGqbJt"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border-2 border-[#8B5CF6]/60 bg-[#1A0B2E]/60 backdrop-blur-sm text-white font-bold text-lg transition-all hover:bg-[#4C1D95]/40 hover:scale-105"
          >
            <MessageCircle size={22} className="text-[#C084FC]" />
            Unisciti al Discord
          </a>
        </div>

        <p className="mt-7 text-sm text-[#E0D4FF]/60 tracking-wide">
          Java &amp; Bedrock Edition • Survival • Community italiana
        </p>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#C084FC]/70 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-[#C084FC]/50 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-[#C084FC]" />
        </div>
      </div>
    </section>
  );
}
