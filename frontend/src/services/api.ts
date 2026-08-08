const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000';

export async function suggestAppointment(payload: any) {
  const res = await fetch(`${API_BASE}/appointments/suggest`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return res.json();
}

export async function createAppointment(payload: any) {
  const res = await fetch(`${API_BASE}/appointments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return res.json();
}

export async function listAppointments(from?: string, to?: string) {
  const params = new URLSearchParams();
  if (from) params.set('from', from);
  if (to) params.set('to', to);
  const res = await fetch(`${API_BASE}/appointments?${params.toString()}`);
  return res.json();
}
