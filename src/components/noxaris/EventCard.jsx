import React, { useState } from "react";
import { Clock, ArrowUpRight, Pencil, Trash2, Check, X, Loader2 } from "lucide-react";

const CATEGORY_STYLES = {
  Torneo: "bg-[#8B5CF6]/15 text-[#C084FC] border-[#8B5CF6]/40",
  Aggiornamento: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
  Evento: "bg-amber-500/10 text-amber-300 border-amber-500/30",
};

export default function EventCard({ event, canManage, onEdit, onDelete }) {
  const [confirming, setConfirming] = useState(false);
  const [busy, setBusy] = useState(false);

  const d = event.date ? new Date(`${event.date}T00:00:00`) : null;
  const day = d ? d.toLocaleDateString("it-IT", { day: "2-digit" }) : "--";
  const month = d
    ? d.toLocaleDateString("it-IT", { month: "short" }).replace(".", "").toUpperCase()
    : "";
  const category = event.category || "Evento";
  const badge = CATEGORY_STYLES[category] || CATEGORY_STYLES.Evento;

  const handleDelete = async () => {
    setBusy(true);
    try {
      await onDelete(event);
    } finally {
      setBusy(false);
      setConfirming(false);
    }
  };

  const iconBtn =
    "p-2 rounded-lg border border-[#4C1D95]/50 text-[#E0D4FF]/70 hover:text-white hover:bg-[#8B5CF6]/15 transition-all";

  return (
    <article className="flex gap-5 p-5 sm:p-6 rounded-2xl border border-[#4C1D95]/40 bg-[#1A0B2E]/60 backdrop-blur-sm hover:border-[#8B5CF6]/60 transition-all">
      <div className="flex-shrink-0 flex flex-col items-center justify-center w-16 h-16 rounded-xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/40">
        <span className="text-2xl font-extrabold text-white leading-none">{day}</span>
        <span className="text-[11px] font-semibold tracking-widest text-[#C084FC] mt-1">{month}</span>
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${badge}`}>
            {category}
          </span>
          {event.time && (
            <span className="inline-flex items-center gap-1.5 text-xs text-[#E0D4FF]/70">
              <Clock size={13} />
              {event.time}
            </span>
          )}
        </div>
        <h3 className="text-lg font-bold text-white mb-1">{event.title}</h3>
        {event.description && (
          <p className="text-sm text-[#E0D4FF]/75 leading-relaxed">{event.description}</p>
        )}
        {event.link && (
          <a
            href={event.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-[#C084FC] hover:text-white transition-colors"
          >
            Dettagli
            <ArrowUpRight size={15} />
          </a>
        )}
      </div>

      {canManage && (
        <div className="flex-shrink-0 flex items-start gap-2">
          {confirming ? (
            <>
              <button
                onClick={handleDelete}
                disabled={busy}
                className={`${iconBtn} text-red-300 hover:bg-red-500/20`}
                aria-label="Conferma eliminazione"
              >
                {busy ? <Loader2 size={16} className="animate-spin" /> : <Check size={16} />}
              </button>
              <button
                onClick={() => setConfirming(false)}
                disabled={busy}
                className={iconBtn}
                aria-label="Annulla"
              >
                <X size={16} />
              </button>
            </>
          ) : (
            <>
              <button onClick={() => onEdit(event)} className={iconBtn} aria-label="Modifica evento">
                <Pencil size={16} />
              </button>
              <button
                onClick={() => setConfirming(true)}
                className={`${iconBtn} text-red-300 hover:bg-red-500/20`}
                aria-label="Elimina evento"
              >
                <Trash2 size={16} />
              </button>
            </>
          )}
        </div>
      )}
    </article>
  );
}