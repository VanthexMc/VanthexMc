import React from "react";
import { Link } from "react-router-dom";
import { Swords, ShieldCheck, Package, Crown, Scale, ArrowLeft, Lightbulb } from "lucide-react";
import Footer from "@/components/noxaris/Footer";
import FaqRegolamento from "@/components/noxaris/FaqRegolamento";

const LOGO = import.meta.env.BASE_URL + "logo.webp";

const SECTIONS = [
  {
    n: "1",
    emoji: "⚔️",
    Icon: Swords,
    title: "Comportamento in Gioco & Chat",
    rules: [
      { id: "1.1", label: "Rispetto Reciproco", text: "È severamente vietato insultare, molestare, minacciare o discriminare altri utenti (razzismo, sessismo, omofobia, ecc.)." },
      { id: "1.2", label: "Spam e Advertising", text: "È vietato intasare la chat con messaggi ripetitivi, inviare link esterni o fare pubblicità ad altri server Minecraft / canali non autorizzati." },
      { id: "1.3", label: "Linguaggio", text: "È richiesto un linguaggio decoroso sia in chat globale che nei messaggi privati (/msg)." },
      { id: "1.4", label: "Impersonificazione", text: "È vietato fingersi un membro dello Staff o un altro utente della community." },
    ],
  },
  {
    n: "2",
    emoji: "🛡️",
    Icon: ShieldCheck,
    title: "Fair Play & Client Modificati",
    rules: [
      { id: "2.1", label: "Cheating e Hack", text: "È severamente proibito l'uso di qualsiasi client modificato, hack, mod o risorsa che fornisca vantaggi sleali (es. Autoclicker, X-Ray, Fly, KillAura, Macro non ammesse)." },
      { id: "2.2", label: "Bug Exploiting", text: "Sfruttare bug o glitch del server/plugin per trarre vantaggio è vietato. Tutti i bug riscontrati devono essere segnalati immediatamente allo Staff." },
      { id: "2.3", label: "Multi-Account (Alt)", text: "L'uso di account secondari per aggirare sanzioni, abusare di ricompense o manipolare l'economia è punibile con il ban permanente." },
    ],
  },
  {
    n: "3",
    emoji: "📦",
    Icon: Package,
    title: "Economia & Commercio",
    rules: [
      { id: "3.1", label: "Scambi Sicuri", text: "I giocatori sono tenuti a effettuare scambi tramite i sistemi ufficiali del server. Lo Staff non si assume responsabilità per truffe avvenute al di fuori dei sistemi previsti." },
      { id: "3.2", label: "Vendite con Denaro Reale (RMT)", text: "È severamente vietato scambiare beni in gioco per denaro reale, giftcard o valute esterne al server." },
    ],
  },
  {
    n: "4",
    emoji: "👑",
    Icon: Crown,
    title: "Interazione con lo Staff",
    rules: [
      { id: "4.1", label: "Decisioni dello Staff", text: "Le decisioni prese dai membri dello Staff sono insindacabili. Se si ritiene di aver subito un'ingiustizia, è possibile aprire un Ticket sul nostro server Discord ufficiale." },
      { id: "4.2", label: "Aiuto e Supporto", text: "Non richiedere insistentemente item, vantaggi o modifiche di gioco allo Staff." },
      { id: "4.3", label: "Controlli Hack", text: "In caso di controllo hack da parte dello Staff, il rifiuto di collaborare, l'uscita dal server o l'ammissione comportano la sanzione immediata." },
    ],
  },
  {
    n: "5",
    emoji: "⚖️",
    Icon: Scale,
    title: "Sanzioni",
    body: "Lo Staff si riserva il diritto di applicare sanzioni (Avvertimento, Mute, Tempban, Ban Permanente o IP-Ban) in base alla gravità dell'infrazione commessa.",
  },
];

export default function Regolamento() {
  return (
    <div className="min-h-screen bg-[#0F0A1A] text-white">
      <header className="sticky top-0 z-50 bg-[#0F0A1A]/85 backdrop-blur-md border-b border-[#4C1D95]/50">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={LOGO}
              alt="VanthexMc"
              className="h-9 w-9 rounded object-cover border border-[#8B5CF6]/50 group-hover:glow-purple transition-all"
            />
            <span className="font-bold text-lg tracking-wide text-white">
              Vanthex<span className="text-[#C084FC]">Mc</span>
            </span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-[#E0D4FF] hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Torna alla Home
          </Link>
        </div>
      </header>

      <main className="relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] rounded-full bg-[#4C1D95]/15 blur-[130px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold tracking-[0.3em] text-[#C084FC] uppercase">VanthexMc</span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-white">
              📜 Regolamento <span className="text-[#C084FC]">Ufficiale</span>
            </h1>
            <p className="mt-6 text-[#E0D4FF] leading-relaxed max-w-2xl mx-auto">
              Benvenuto su VanthexMc! Per garantire a tutti i giocatori un'esperienza di gioco piacevole,
              corretta e sicura, è fondamentale rispettare le regole riportate di seguito. La connessione al
              server e l'utilizzo dei nostri servizi comportano l'accettazione automatica di questo regolamento.
            </p>
          </div>

          <div className="space-y-8">
            {SECTIONS.map((s) => {
              const Icon = s.Icon;
              return (
                <div
                  key={s.n}
                  className="relative p-6 sm:p-8 rounded-2xl border border-[#4C1D95]/40 bg-[#1A0B2E]/60 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/40">
                      <Icon className="text-[#C084FC]" size={22} />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">
                      <span className="text-[#C084FC] mr-1">{s.n}.</span>
                      {s.emoji} {s.title}
                    </h2>
                  </div>

                  {s.rules ? (
                    <div className="space-y-4">
                      {s.rules.map((r) => (
                        <div
                          key={r.id}
                          className="pl-4 border-l-2 border-[#8B5CF6]/40 hover:border-[#8B5CF6] transition-colors"
                        >
                          <p className="text-white font-semibold mb-1">
                            <span className="text-[#C084FC] mr-2">{r.id}</span>
                            {r.label}
                          </p>
                          <p className="text-[#E0D4FF]/80 leading-relaxed">{r.text}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-[#E0D4FF]/80 leading-relaxed">{s.body}</p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex items-start gap-3 p-5 rounded-xl border border-[#8B5CF6]/40 bg-[#8B5CF6]/10">
            <Lightbulb className="text-[#C084FC] flex-shrink-0 mt-0.5" size={20} />
            <p className="text-[#E0D4FF] leading-relaxed">
              <span className="font-semibold text-white">Nota:</span> il regolamento è soggetto a modifiche in
              qualsiasi momento. È responsabilità dei giocatori tenersi aggiornati sulle ultime novità.
            </p>
          </div>

          <FaqRegolamento />
        </div>
      </main>

      <Footer />
    </div>
  );
}