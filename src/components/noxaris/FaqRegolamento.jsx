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
    q: "Cosa succede se infrango una regola?",
    a: "In base alla gravità dell'infrazione lo Staff può applicare un Avvertimento, un Mute, un Tempban, un Ban Permanente o un IP-Ban. Le sanzioni sono cumulative: infrazioni ripetute comportano conseguenze più severe.",
  },
  {
    q: "Come posso contestare una sanzione?",
    a: "Le decisioni dello Staff sono insindacabili in gioco, ma puoi sempre aprire un Ticket sul nostro Discord ufficiale per esporre la tua situazione e chiedere un riesame.",
  },
  {
    q: "Posso usare mod o texture pack?",
    a: "Sono ammessi solo client e mod che non offrono vantaggi sleali. Texture pack puramente estetici e mod di qualità della vita sono consentiti; hack, X-Ray, Fly, Autoclicker e simili sono severamente vietati.",
  },
  {
    q: "Posso fare pubblicità ad altri server?",
    a: "No. Invitare ad altri server Minecraft o condividere link e canali non autorizzati in chat è vietato e può portare a sanzioni immediate.",
  },
  {
    q: "Cosa devo fare se trovo un bug?",
    a: "Segnalalo subito allo Staff tramite Discord. Sfruttare un bug per trarne vantaggio è vietato: la segnalazione tempestiva, invece, è sempre apprezzata e premiata.",
  },
  {
    q: "Posso usare account secondari?",
    a: "No. L'uso di account alternativi per aggirare sanzioni, abusare di ricompense o manipolare l'economia è punibile con il ban permanente.",
  },
  {
    q: "Come segnalo un giocatore?",
    a: "Raccogli più prove possibili (screenshot o video) e apri un Ticket sul Discord ufficiale descrivendo l'accaduto. Lo Staff valuterà la segnalazione il prima possibile.",
  },
  {
    q: "Dove posso chiedere supporto?",
    a: "Il canale principale è il nostro server Discord, dove puoi aprire un Ticket e parlare direttamente con lo Staff.",
  },
];

export default function FaqRegolamento() {
  return (
    <section id="faq-regolamento" className="mt-16">
      <div className="text-center mb-10">
        <span className="text-sm font-semibold tracking-[0.3em] text-[#C084FC] uppercase">FAQ</span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
          Domande <span className="text-[#C084FC]">frequenti</span>
        </h2>
        <p className="mt-4 text-[#E0D4FF]/80">
          I dubbi più comuni dei giocatori sul regolamento e sulla vita nel server.
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {FAQS.map((item, i) => (
          <AccordionItem
            key={i}
            value={`reg-${i}`}
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

      <p className="mt-8 text-center text-sm text-[#E0D4FF]/60">
        Non trovi la risposta? Apri un Ticket sul nostro{" "}
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
    </section>
  );
}