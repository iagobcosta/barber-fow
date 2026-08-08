export function isPeakPeriod(date: Date): boolean {
  const day = date.getDay();
  const hour = date.getHours();
  const isFridayOrSaturday = day === 5 || day === 6;
  const isEvening = hour >= 18 && hour < 22;
  return isFridayOrSaturday && isEvening;
}

export function scoreCandidateSlot(candidate: Date, requestedStart: Date): number {
  const distanceMinutes = Math.abs(candidate.getTime() - requestedStart.getTime()) / 60000;
  const peakPenalty = isPeakPeriod(candidate) ? 60 : 0;
  return distanceMinutes + peakPenalty;
}
