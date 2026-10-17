import React from "react";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "Come entro nel server?",
    a: "Copia l'IP dalla sezione iniziale della pagina e incollalo in Minecraft: Multiplayer → Aggiungi server. Una volta connesso, sei dentro VanthexMc.",
  },
  {
    q: "Serve un account Minecraft a pagamento?",
    a: "No, non serve per forza un account premium: il server supporta sia Java Edition che Bedrock, quindi puoi giocare anche con un account gratuito.",
  },
  {
    q: "Quali versioni di Minecraft sono supportate?",
    a: "Supportiamo sia Java Edition che Bedrock. Consigliamo di giocare con l'ultima versione stabile; se usi una versione diversa, controlla su Discord per l'elenco aggiornato di quelle compatibili.",
  },
  {
    q: "Giocare è gratis?",
    a: "Assolutamente sì. L'accesso al server è gratuito: lo store, quando arriverà, offrirà solo contenuti estetici e quality-of-life, mai vantaggi pay-to-win.",
  },
  {
    q: "La mappa verrà resettata?",
    a: "No. Niente reset continui: i tuoi progressi, le tue build e i tuoi averi restano nel tempo. Cresciamo insieme, senza ricominciare da zero.",
  },
  {
    q: "Dove trovo le regole del server?",
    a: "Il regolamento completo è nella pagina dedicata, raggiungibile dal menu in alto. Ti consigliamo di leggerlo prima di iniziare a giocare.",
  },
  {
    q: "Come faccio a entrare nella community?",
    a: "Entra nel nostro server Discord: è il posto giusto per eventi, annunci, supporto e per conoscere gli altri giocatori. Trovi il link nella sezione Social.",
  },
  {
    q: "Come posso candidarmi come staff?",
    a: "Compila il modulo di candidatura presente più in alto in questa pagina. Lo staff esaminerà la tua richiesta e ti ricontatterà tramite Discord.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-[#0F0A1A] overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#4C1D95]/15 blur-[130px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-[0.3em] text-[#C084FC] uppercase">FAQ</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-white">
            Domande <span className="text-[#C084FC]">frequenti</span>
          </h2>
          <p className="mt-4 text-lg text-[#E0D4FF]/80">
            Le risposte ai dubbi più comuni dei nuovi giocatori.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-[#4C1D95]/40 bg-[#1A0B2E]/60 backdrop-blur-sm px-5 sm:px-6 data-[state=open]:border-[#8B5CF6]/60 transition-all"
            >
              <AccordionTrigger className="text-left text-base sm:text-lg font-bold text-white hover:text-[#C084FC] hover:no-underline py-5">
                <span className="flex items-center gap-3">
                  <HelpCircle size={20} className="text-[#C084FC] shrink-0" />
                  {item.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-[#E0D4FF]/80 leading-relaxed pb-5 pl-8">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="mt-10 text-center text-sm text-[#E0D4FF]/60">
          Non trovi la risposta? Chiedi pure su{" "}
          <a
            href="https://discord.gg/uggeCGqbJt"
            target="_blank"
            rel="noreferrer"
            className="text-[#C084FC] font-semibold hover:text-white transition-colors"
          >
            Discord
          </a>
          .
        </p>
      </div>
    </section>
  );
}