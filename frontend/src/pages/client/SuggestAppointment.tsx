import React, { useState } from 'react';
import { suggestAppointment, createAppointment } from '../../services/api';

const sampleServices = [
  { id: 'svc-cut', name: 'Corte', durationMin: 30 },
  { id: 'svc-beard', name: 'Barba', durationMin: 20 },
  { id: 'svc-shave', name: 'Barba+Barbeador', durationMin: 25 },
];

export default function SuggestAppointment() {
  const [selectedServices, setSelectedServices] = useState<any[]>([]);
  const [requestedStart, setRequestedStart] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [message, setMessage] = useState<string>('');

  function toggleService(svc: any) {
    setSelectedServices((s) =>
      s.find((x: any) => x.id === svc.id) ? s.filter((x: any) => x.id !== svc.id) : [...s, svc]
    );
  }

  async function onSuggest(e: React.FormEvent) {
    e.preventDefault();
    if (selectedServices.length === 0) return setMessage('Selecione pelo menos um serviço');
    const payload = {
      clientId: 'demo-client',
      services: selectedServices.map((s) => ({ serviceId: s.id, durationMin: s.durationMin })),
      requestedStart: requestedStart || new Date().toISOString(),
    };
    const res = await suggestAppointment(payload);
    setSuggestions(res.suggestions || []);
    setMessage('');
  }

  async function book(slot: string) {
    const payload = {
      clientId: 'demo-client',
      services: selectedServices.map((s) => ({ serviceId: s.id, durationMin: s.durationMin })),
      startAt: slot,
      origin: 'agendado',
      status: 'suggested',
    };
    const res = await createAppointment(payload);
    if (res.id) setMessage('Agendamento criado (suggested).');
    else setMessage('Falha ao criar agendamento');
  }

  return (
    <section>
      <h2>Solicitar sugestão de horário</h2>
      <form onSubmit={onSuggest}>
        <div>
          {sampleServices.map((s) => (
            <label key={s.id} style={{ display: 'block' }}>
              <input type="checkbox" onChange={() => toggleService(s)} /> {s.name} ({s.durationMin} min)
            </label>
          ))}
        </div>
        <div>
          <label>Horário preferido (opcional)</label>
          <input type="datetime-local" value={requestedStart} onChange={(e) => setRequestedStart(e.target.value)} />
        </div>
        <button type="submit">Obter sugestões</button>
      </form>

      <div>
        <h3>Sugestões</h3>
        {suggestions.length === 0 && <p>Nenhuma sugestão ainda.</p>}
        <ul>
          {suggestions.map((s) => (
            <li key={s}>
              {new Date(s).toLocaleString()} <button onClick={() => book(s)}>Reservar</button>
            </li>
          ))}
        </ul>
      </div>

      {message && <div className="message">{message}</div>}
    </section>
  );
}
