export const DISCORD_CONNECTOR_ID = "6ac6a34475c25c9e9ee8bb21";
export const DISCORD_GUILD_ID = "1545828463594840124";

// Ordine di priorità: il primo ruolo presente determina il grado dello staffer.
export const STAFF_ROLES = [
  { id: "1548385775798976595", label: "Founder" },
  { id: "1548385774804799609", label: "Owner" },
  { id: "1548385772099600486", label: "Sr.Admin" },
  { id: "1548385771147235428", label: "Admin" },
  { id: "1548385768890961940", label: "Sr.Dev" },
  { id: "1548385767368298567", label: "Dev" },
  { id: "1548385766323912704", label: "Pluginner" },
  { id: "1548385764927086603", label: "Sr.Mod" },
  { id: "1548385764138557631", label: "Mod" },
  { id: "1548385762968473703", label: "Sr.Helper" },
  { id: "1548385761261527172", label: "Helper" },
  { id: "1548385760653352971", label: "Trainee" },
  { id: "1556696692668244098", label: "Builder" },
];

// Legge l'identità Discord dell'utente collegato e il suo ruolo staff nel server.
export async function getDiscordStaff(base44) {
  let accessToken = null;
  try {
    const connection = await base44.asServiceRole.connectors.getCurrentAppUserConnection(DISCORD_CONNECTOR_ID);
    accessToken = connection?.accessToken || null;
  } catch {
    return { connected: false };
  }
  if (!accessToken) return { connected: false };

  const res = await fetch(
    `https://discord.com/api/v10/users/@me/guilds/${DISCORD_GUILD_ID}/member`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
      signal: AbortSignal.timeout(10000),
    }
  );

  if (res.status === 401 || res.status === 403) return { connected: false };
  if (res.status === 404) return { connected: true, inGuild: false, isStaff: false, staffRole: null };
  if (!res.ok) return { connected: true, inGuild: false, isStaff: false, staffRole: null };

  const member = await res.json();
  const memberRoles = Array.isArray(member.roles) ? member.roles : [];
  const match = STAFF_ROLES.find((role) => memberRoles.includes(role.id)) || null;
  const u = member.user || {};

  return {
    connected: true,
    inGuild: true,
    discord: {
      id: u.id,
      username: u.username,
      displayName: member.nick || u.global_name || u.username,
      avatar: u.avatar ? `https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}.png?size=128` : null,
    },
    isStaff: Boolean(match),
    staffRole: match ? match.label : null,
  };
}