import { addMinutes, isBefore } from 'date-fns';
import prisma from '../lib/prisma';
import { scoreCandidateSlot } from '../lib/peak';

const SLOT_STEP_MIN = 15;
const SEARCH_WINDOW_DAYS = 7;

export async function hasConflictForProfessional(professionalId: string, startAt: Date, endAt: Date) {
  const overlapping = await prisma.appointment.findFirst({
    where: {
      items: { some: { professionalId } },
      AND: [
        { startAt: { lt: endAt } },
        { endAt: { gt: startAt } },
        { status: { not: 'cancelled' } },
      ],
    },
  });
  return overlapping !== null;
}

export async function isSlotAvailable(startAt: Date, endAt: Date, professionals: (string | null)[]) {
  for (const p of professionals) {
    if (!p) continue;
    const conflict = await hasConflictForProfessional(p, startAt, endAt);
    if (conflict) return false;
  }
  return true;
}

export async function suggestSlots(requestedStart: Date, totalDurationMin: number, professionals: (string | null)[]) {
  const candidates: Array<{ slot: Date; score: number }> = [];
  const windowEnd = addMinutes(requestedStart, SEARCH_WINDOW_DAYS * 24 * 60);
  let cursor = requestedStart;
  while (isBefore(cursor, windowEnd)) {
    const endAt = addMinutes(cursor, totalDurationMin);
    const ok = await isSlotAvailable(cursor, endAt, professionals);
    if (ok) {
      candidates.push({ slot: cursor, score: scoreCandidateSlot(cursor, requestedStart) });
    }
    cursor = addMinutes(cursor, SLOT_STEP_MIN);
    if (candidates.length >= 5) break;
  }

  return candidates
    .sort((a, b) => a.score - b.score)
    .slice(0, 5)
    .map((item) => item.slot);
}
