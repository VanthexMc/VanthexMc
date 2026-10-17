import { createClientFromRequest } from 'npm:@base44/sdk@0.8.52';
import { getDiscordStaff } from '../../shared/discordStaff.ts';

export default async function (req) {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });

    const result = await getDiscordStaff(base44);
    return Response.json(result);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}