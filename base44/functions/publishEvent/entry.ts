import { createClientFromRequest } from 'npm:@base44/sdk@0.8.52';
import { getDiscordStaff } from '../../shared/discordStaff.ts';

export default async function (req) {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });

    const isAdmin = user.role === 'admin';
    if (!isAdmin) {
      const staff = await getDiscordStaff(base44);
      if (!staff.isStaff) {
        return Response.json({ error: 'Solo lo staff può gestire gli eventi.' }, { status: 403 });
      }
    }

    const body = await req.json();
    const action = body.action || 'create';

    if (action === 'delete') {
      const id = String(body.id || '').trim();
      if (!id) return Response.json({ error: 'Evento non valido.' }, { status: 400 });
      await base44.asServiceRole.entities.Event.delete(id);
      return Response.json({ deleted: true });
    }

    const title = String(body.title || '').trim();
    const date = String(body.date || '').trim();
    if (!title || !date) {
      return Response.json({ error: 'Titolo e data sono obbligatori.' }, { status: 400 });
    }

    const data = {
      title,
      date,
      time: String(body.time || '').trim(),
      category: body.category || 'Evento',
      description: String(body.description || '').trim(),
      link: String(body.link || '').trim(),
    };

    if (action === 'update') {
      const id = String(body.id || '').trim();
      if (!id) return Response.json({ error: 'Evento non valido.' }, { status: 400 });
      const updated = await base44.asServiceRole.entities.Event.update(id, data);
      return Response.json({ event: updated });
    }

    const created = await base44.asServiceRole.entities.Event.create(data);
    return Response.json({ event: created });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}