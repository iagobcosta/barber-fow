import React, { useEffect, useState } from 'react';
import { listAppointments } from '../../../services/api';

export default function StaffAppointments() {
  const [appointments, setAppointments] = useState<any[]>([]);
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  const todayEnd = new Date();
  todayEnd.setHours(23, 59, 59, 999);

  useEffect(() => {
    async function load() {
      const res = await listAppointments(todayStart.toISOString(), todayEnd.toISOString());
      setAppointments(res || []);
    }
    load();
  }, []);

  return (
    <section>
      <h2>Agenda do dia</h2>
      <table>
        <thead>
          <tr>
            <th>Horário</th>
            <th>Cliente</th>
            <th>Serviços</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.length === 0 && (
            <tr>
              <td colSpan={4}>Nenhum agendamento hoje.</td>
            </tr>
          )}
          {appointments.map((a) => (
            <tr key={a.id}>
              <td>{new Date(a.startAt).toLocaleTimeString()}</td>
              <td>{a.clientId}</td>
              <td>{a.items?.map((it: any) => it.serviceId).join(', ')}</td>
              <td>{a.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
