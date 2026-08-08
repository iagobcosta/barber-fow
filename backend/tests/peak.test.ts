import { describe, it, expect } from 'vitest';
import { isPeakPeriod, scoreCandidateSlot } from '../src/lib/peak';

describe('peak-period logic', () => {
  it('detects friday evening as a peak period', () => {
    const peakDate = new Date('2026-08-07T19:00:00');
    expect(isPeakPeriod(peakDate)).toBe(true);
  });

  it('penalizes peak slots when scoring suggestions', () => {
    const reference = new Date('2026-08-03T17:00:00');
    const peakSlot = new Date('2026-08-07T19:00:00');
    const nonPeakSlot = new Date('2026-08-03T17:30:00');

    expect(scoreCandidateSlot(peakSlot, reference)).toBeGreaterThan(scoreCandidateSlot(nonPeakSlot, reference));
  });
});
