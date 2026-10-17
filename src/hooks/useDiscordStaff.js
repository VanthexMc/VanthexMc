import { useCallback, useEffect, useState } from "react";
import { base44 } from "@/api/base44Client";

// ID del connettore Discord (utente dell'app) configurato su Base44.
const DISCORD_CONNECTOR_ID = "6ac6a34475c25c9e9ee8bb21";

// Legge dal backend se l'utente loggato ha collegato Discord e se ha un ruolo staff.
export default function useDiscordStaff() {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [staff, setStaff] = useState(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const loggedIn = await base44.auth.isAuthenticated();
      setAuthenticated(loggedIn);
      if (!loggedIn) {
        setStaff(null);
        return;
      }
      const res = await base44.functions.invoke("discordStaffCheck", {});
      setStaff(res?.data ?? { connected: false });
    } catch {
      setStaff({ connected: false });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const connect = useCallback(async () => {
    const url = await base44.connectors.connectAppUser(DISCORD_CONNECTOR_ID);
    window.location.href = url;
  }, []);

  const disconnect = useCallback(async () => {
    await base44.connectors.disconnectAppUser(DISCORD_CONNECTOR_ID);
    await refresh();
  }, [refresh]);

  return { loading, authenticated, staff, connect, disconnect };
}
