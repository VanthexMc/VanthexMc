import { base44 } from "@/api/base44Client";
import React, { useState, useEffect } from "react";

import { CalendarDays, Plus } from "lucide-react";
import EventCard from "./EventCard";
import EventForm from "./EventForm";
import DiscordStaffPanel from "./DiscordStaffPanel";
import useDiscordStaff from "@/hooks/useDiscordStaff";
import { useToast } from "@/components/ui/use-toast";

const sortEvents = (list) =>
  [...list].sort((a, b) => (a.date || "").localeCompare(b.date || ""));

export default function BachecaEventi() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const { loading: staffLoading, authenticated, staff, connect, disconnect } = useDiscordStaff();
  const { toast } = useToast();

  const canManage = isAdmin || Boolean(staff?.isStaff);

  useEffect(() => {
    base44.entities.Event
      .filter({}, { sort: "date", limit: 50 })
      .then(({ items }) => setEvents(items))
      .finally(() => setLoading(false));

    base44.auth
      .me()
      .then((u) => setIsAdmin(u?.role === "admin"))
      .catch(() => setIsAdmin(false));
  }, []);

  const handleSaved = (saved) => {
    setEvents((prev) =>
      sortEvents(
        prev.some((e) => e.id === saved.id)
          ? prev.map((e) => (e.id === saved.id ? saved : e))
          : [...prev, saved]
      )
    );
    setShowForm(false);
    setEditing(null);
  };

  const handleDelete = async (ev) => {
    try {
      await base44.functions.invoke("publishEvent", { action: "delete", id: ev.id });
      setEvents((prev) => prev.filter((e) => e.id !== ev.id));
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Eliminazione non riuscita",
        description: err?.response?.data?.error || "Riprova tra poco.",
      });
    }
  };

  const openEdit = (ev) => {
    setEditing(ev);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditing(null);
  };

  return (
    <section id="eventi" className="relative py-24 sm:py-32 bg-gradient-to-b from-[#1A0B2E] to-[#0F0A1A] overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full bg-[#8B5CF6]/10 blur-[130px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-[0.3em] text-[#C084FC] uppercase">Bacheca</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-white">
            Prossimi <span className="text-[#C084FC]">Eventi</span>
          </h2>
          <p className="mt-4 text-lg text-[#E0D4FF]/80">
            Tornei, aggiornamenti e appuntamenti importanti della community.
          </p>
        </div>

        {canManage && (
          <div className="mb-8">
            {showForm ? (
              <EventForm
                key={editing?.id || "new"}
                event={editing}
                onSaved={handleSaved}
                onCancel={closeForm}
              />
            ) : (
              <div className="flex justify-center">
                <button
                  onClick={() => setShowForm(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#8B5CF6] hover:bg-[#A855F7] text-white font-semibold transition-all glow-purple"
                >
                  <Plus size={18} />
                  Pubblica evento
                </button>
              </div>
            )}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center py-16">
            <div className="w-8 h-8 border-4 border-[#4C1D95] border-t-[#8B5CF6] rounded-full animate-spin" />
          </div>
        ) : events.length === 0 ? (
          <div className="text-center py-16 rounded-2xl border border-dashed border-[#4C1D95]/50 bg-[#1A0B2E]/40">
            <CalendarDays className="mx-auto text-[#C084FC]/70 mb-3" size={34} />
            <p className="text-[#E0D4FF]/80">Nessun evento in programma al momento.</p>
            <p className="text-sm text-[#E0D4FF]/50 mt-1">Torna presto: stiamo preparando nuove sorprese.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {events.map((ev) => (
              <EventCard
                key={ev.id}
                event={ev}
                canManage={canManage}
                onEdit={openEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}

        <div className="mt-10">
          <DiscordStaffPanel
            loading={staffLoading}
            authenticated={authenticated}
            staff={staff}
            onConnect={connect}
            onDisconnect={disconnect}
          />
        </div>
      </div>
    </section>
  );
}