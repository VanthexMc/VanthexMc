import React from "react";
import { Link } from "react-router-dom";
import { Loader2, ShieldCheck, Link2, LogOut, UserX } from "lucide-react";

export default function DiscordStaffPanel({ loading, authenticated, staff, onConnect, onDisconnect }) {
  if (loading) {
    return (
      <div className="flex items-center justify-center gap-2 text-sm text-[#E0D4FF]/60">
        <Loader2 className="animate-spin" size={16} />
        Verifica dello stato staff...
      </div>
    );
  }

  if (!authenticated) {
    return (
      <p className="text-center text-sm text-[#E0D4FF]/60">
        Sei dello staff?{" "}
        <Link to="/login" className="text-[#C084FC] font-semibold hover:text-white transition-colors">
          Accedi e collega il tuo Discord
        </Link>
      </p>
    );
  }

  if (!staff?.connected) {
    return (
      <div className="flex flex-col items-center gap-3 text-center">
        <p className="text-sm text-[#E0D4FF]/70">
          Collega il tuo account Discord per verificare il tuo ruolo nello staff.
        </p>
        <button
          onClick={onConnect}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#8B5CF6]/60 text-[#E0D4FF] hover:text-white hover:bg-[#8B5CF6]/15 font-semibold transition-all"
        >
          <Link2 size={17} />
          Collega Discord
        </button>
      </div>
    );
  }

  const name = staff.discord?.displayName || staff.discord?.username || "Utente Discord";

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      {staff.isStaff ? (
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#8B5CF6]/50 bg-[#8B5CF6]/10">
          <ShieldCheck size={18} className="text-[#C084FC]" />
          <span className="text-sm text-[#E0D4FF]">
            <span className="font-semibold text-white">{name}</span> · Staff{" "}
            <span className="font-bold text-[#C084FC]">{staff.staffRole}</span>
          </span>
        </div>
      ) : (
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#4C1D95]/60 bg-[#1A0B2E]/60">
          <UserX size={17} className="text-[#E0D4FF]/60" />
          <span className="text-sm text-[#E0D4FF]/70">
            {name} · {staff.inGuild ? "nessun ruolo staff" : "non sei nel server Discord"}
          </span>
        </div>
      )}
      <button
        onClick={onDisconnect}
        className="inline-flex items-center gap-1.5 text-xs text-[#E0D4FF]/50 hover:text-white transition-colors"
      >
        <LogOut size={13} />
        Scollega Discord
      </button>
    </div>
  );
}