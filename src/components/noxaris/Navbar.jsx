import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Chi siamo", href: "#about" },
  { label: "Caratteristiche", href: "#features" },
  { label: "Modalità", href: "#gamemode" },
  { label: "Store", href: "#store" },
  { label: "Team", href: "#team" },
  { label: "Social", href: "#social" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0F0A1A]/85 backdrop-blur-md border-b border-[#4C1D95]/50" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <img
            src={import.meta.env.BASE_URL + "logo.webp"}
            alt="VanthexMc"
            className="h-9 w-9 rounded object-cover border border-[#8B5CF6]/50 group-hover:glow-purple transition-all"
          />
          <span className="font-bold text-lg tracking-wide text-white">
            Vanthex<span className="text-[#C084FC]">Mc</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#E0D4FF] hover:text-white transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B5CF6] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-[#E0D4FF] hover:text-white transition-colors outline-none">
              Altro
              <ChevronDown size={14} />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-[#1A0B2E] border-[#4C1D95]/60 text-[#E0D4FF]"
            >
              <DropdownMenuItem asChild className="focus:bg-[#8B5CF6]/20 focus:text-white cursor-pointer">
                <Link to="/regolamento">Regolamento</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="focus:bg-[#8B5CF6]/20 focus:text-white cursor-pointer">
                <a href="#faq">FAQ</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="focus:bg-[#8B5CF6]/20 focus:text-white cursor-pointer">
                <a href="#staff">Candidatura</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <a
          href="https://discord.gg/uggeCGqbJt"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-[#8B5CF6] hover:bg-[#A855F7] text-white text-sm font-semibold transition-all glow-purple"
        >
          Discord
        </a>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[#0F0A1A]/95 backdrop-blur-md border-t border-[#4C1D95]/50">
          <div className="flex flex-col px-5 py-4 gap-3">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[#E0D4FF] hover:text-white py-2 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <Link
              to="/regolamento"
              onClick={() => setOpen(false)}
              className="text-[#E0D4FF] hover:text-white py-2 transition-colors"
            >
              Regolamento
            </Link>
            <a
              href="#faq"
              onClick={() => setOpen(false)}
              className="text-[#E0D4FF] hover:text-white py-2 transition-colors"
            >
              FAQ
            </a>
            <a
              href="#staff"
              onClick={() => setOpen(false)}
              className="text-[#E0D4FF] hover:text-white py-2 transition-colors"
            >
              Candidatura
            </a>
            <a
              href="https://discord.gg/uggeCGqbJt"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-[#8B5CF6] text-white font-semibold"
            >
              Discord
            </a>
          </div>
        </div>
      )}
    </header>
  );
}