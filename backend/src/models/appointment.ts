import prisma from '../lib/prisma';
import { Appointment, AppointmentItem } from '@prisma/client';

export async function createAppointment(data: {
  clientId: string;
  startAt: Date;
  endAt: Date;
  origin?: string;
  status?: string;
  items?: { serviceId: string; professionalId?: string; durationMin: number }[];
}): Promise<Appointment> {
  const created = await prisma.appointment.create({
    data: {
      clientId: data.clientId,
      startAt: data.startAt,
      endAt: data.endAt,
      origin: data.origin ?? 'agendado',
      status: data.status ?? 'suggested',
      items: {
        create: (data.items || []).map((i) => ({
          serviceId: i.serviceId,
          professionalId: i.professionalId,
          durationMin: i.durationMin,
        })),
      },
    },
    include: { items: true },
  });
  return created;
}

export async function listAppointments(filter?: {
  from?: Date;
  to?: Date;
}): Promise<(Appointment & { items: AppointmentItem[] })[]> {
  const where: any = {};
  if (filter?.from || filter?.to) where.AND = [];
  if (filter?.from) where.AND.push({ startAt: { gte: filter.from } });
  if (filter?.to) where.AND.push({ endAt: { lte: filter.to } });
  return prisma.appointment.findMany({ where, include: { items: true } });
}

export async function findAppointmentsByProfessional(professionalId: string, from: Date, to: Date) {
  return prisma.appointment.findMany({
    where: {
      items: {
        some: {
          professionalId,
          AND: [{
            appointment: {
              startAt: { lte: to },
              endAt: { gte: from },
            },
          }],
        },
      },
    },
    include: { items: true },
  });
}
