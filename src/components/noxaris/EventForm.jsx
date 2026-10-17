import { base44 } from "@/api/base44Client";
import React, { useState } from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, AlertCircle, Send, X } from "lucide-react";

const CATEGORIES = ["Torneo", "Aggiornamento", "Evento"];
const EMPTY = { title: "", date: "", time: "", category: "Evento", description: "", link: "" };

export default function EventForm({ event, onSaved, onCancel }) {
  const isEdit = Boolean(event?.id);
  const [form, setForm] = useState(() => ({
    title: event?.title || "",
    date: event?.date || "",
    time: event?.time || "",
    category: event?.category || "Evento",
    description: event?.description || "",
    link: event?.link || "",
  }));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.date) {
      setError("Inserisci almeno il titolo e la data.");
      return;
    }
    setError("");
    setSaving(true);
    try {
      const res = await base44.functions.invoke("publishEvent", {
        action: isEdit ? "update" : "create",
        id: event?.id,
        title: form.title.trim(),
        date: form.date,
        time: form.time,
        category: form.category,
        description: form.description.trim(),
        link: form.link.trim(),
      });
      if (!isEdit) setForm(EMPTY);
      onSaved(res.data.event);
    } catch (err) {
      setError(err?.response?.data?.error || "Qualcosa è andato storto. Riprova tra poco.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full p-6 sm:p-8 rounded-2xl border border-[#8B5CF6]/40 bg-[#1A0B2E]/80 backdrop-blur-sm text-left"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-white">
          {isEdit ? "Modifica evento" : "Pubblica un evento"}
        </h3>
        <button
          type="button"
          onClick={onCancel}
          className="text-[#E0D4FF]/60 hover:text-white transition-colors"
          aria-label="Chiudi"
        >
          <X size={20} />
        </button>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="ev-title" className="text-[#E0D4FF]">Titolo</Label>
          <Input
            id="ev-title"
            value={form.title}
            onChange={(e) => update("title", e.target.value)}
            placeholder="Es. Torneo PvP di Halloween"
            className="bg-[#0F0A1A]/60 border-[#4C1D95]/50 text-white placeholder:text-[#E0D4FF]/40"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="ev-date" className="text-[#E0D4FF]">Data</Label>
          <Input
            id="ev-date"
            type="date"
            value={form.date}
            onChange={(e) => update("date", e.target.value)}
            className="bg-[#0F0A1A]/60 border-[#4C1D95]/50 text-white [color-scheme:dark]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="ev-time" className="text-[#E0D4FF]">Orario (opzionale)</Label>
          <Input
            id="ev-time"
            type="time"
            value={form.time}
            onChange={(e) => update("time", e.target.value)}
            className="bg-[#0F0A1A]/60 border-[#4C1D95]/50 text-white [color-scheme:dark]"
          />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label className="text-[#E0D4FF]">Tipo</Label>
          <Select value={form.category} onValueChange={(v) => update("category", v)}>
            <SelectTrigger className="bg-[#0F0A1A]/60 border-[#4C1D95]/50 text-white">
              <SelectValue placeholder="Seleziona il tipo" />
            </SelectTrigger>
            <SelectContent className="bg-[#1A0B2E] border-[#4C1D95]/50 text-white">
              {CATEGORIES.map((c) => (
                <SelectItem key={c} value={c} className="focus:bg-[#8B5CF6]/20 focus:text-white">
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="ev-desc" className="text-[#E0D4FF]">Descrizione</Label>
          <Textarea
            id="ev-desc"
            value={form.description}
            onChange={(e) => update("description", e.target.value)}
            placeholder="Dettagli sull'evento o sull'aggiornamento..."
            rows={3}
            className="bg-[#0F0A1A]/60 border-[#4C1D95]/50 text-white placeholder:text-[#E0D4FF]/40 resize-none"
          />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="ev-link" className="text-[#E0D4FF]">Link (opzionale)</Label>
          <Input
            id="ev-link"
            value={form.link}
            onChange={(e) => update("link", e.target.value)}
            placeholder="https://discord.gg/..."
            className="bg-[#0F0A1A]/60 border-[#4C1D95]/50 text-white placeholder:text-[#E0D4FF]/40"
          />
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2 mt-5 text-sm text-[#FCA5A5]">
          <AlertCircle size={16} />
          {error}
        </div>
      )}

      <div className="flex flex-wrap gap-3 mt-6">
        <Button
          type="submit"
          disabled={saving}
          className="bg-[#8B5CF6] hover:bg-[#A855F7] text-white font-semibold glow-purple"
        >
          {saving ? (
            <>
              <Loader2 className="mr-2 animate-spin" size={18} />
              Salvataggio...
            </>
          ) : (
            <>
              <Send className="mr-2" size={18} />
              {isEdit ? "Salva modifiche" : "Pubblica"}
            </>
          )}
        </Button>
        <Button
          type="button"
          variant="ghost"
          onClick={onCancel}
          className="text-[#E0D4FF] hover:text-white hover:bg-[#8B5CF6]/15"
        >
          Annulla
        </Button>
      </div>
    </form>
  );
}