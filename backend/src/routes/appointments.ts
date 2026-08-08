import express from 'express';
import { suggestSlots, isSlotAvailable } from '../services/conflictService';
import { createAppointment, listAppointments } from '../models/appointment';

const router = express.Router();

router.get('/', async (req, res) => {
  const from = req.query.from ? new Date(String(req.query.from)) : undefined;
  const to = req.query.to ? new Date(String(req.query.to)) : undefined;
  const list = await listAppointments({ from, to });
  res.json(list);
});

router.post('/suggest', async (req, res) => {
  try {
    const body = req.body;
    // expected body: { clientId, services: [{serviceId,durationMin,professionalId?}], requestedStart }
    if (!body || !body.services || !Array.isArray(body.services)) return res.status(400).json({ error: 'invalid body' });
    const requestedStart = body.requestedStart ? new Date(body.requestedStart) : new Date();
    const totalDuration = body.services.reduce((s: number, it: any) => s + (it.durationMin || 0), 0);
    const professionals = body.services.map((it: any) => it.professionalId || null);
    const suggestions = await suggestSlots(requestedStart, totalDuration, professionals);
    res.json({ suggestions });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    res.status(500).json({ error: 'server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const body = req.body;
    if (!body || !body.clientId || !body.services) return res.status(400).json({ error: 'invalid body' });
    const startAt = body.startAt ? new Date(body.startAt) : new Date();
    const totalDuration = body.services.reduce((s: number, it: any) => s + (it.durationMin || 0), 0);
    const endAt = new Date(startAt.getTime() + totalDuration * 60000);
    // basic availability check
    const professionals = body.services.map((it: any) => it.professionalId || null);
    const available = await isSlotAvailable(startAt, endAt, professionals);
    if (!available) return res.status(409).json({ error: 'slot not available' });
    const appointment = await createAppointment({
      clientId: body.clientId,
      startAt,
      endAt,
      origin: body.origin,
      status: body.status || 'suggested',
      items: body.services.map((it: any) => ({ serviceId: it.serviceId, professionalId: it.professionalId, durationMin: it.durationMin })),
    });
    res.status(201).json(appointment);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    res.status(500).json({ error: 'server error' });
  }
});

export default router;
