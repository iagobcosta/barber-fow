# Data Model: Gestão de Agendamento

## Entities

### Client
- `id`: UUID
- `name`: string
- `contactPhone`: string
- `contactEmail`: string | null
- `status`: `active` | `inactive`
- `createdAt`: datetime
- `updatedAt`: datetime

### Professional
- `id`: UUID
- `name`: string
- `servicesEligible`: Service[]
- `workSchedule`: AvailabilityWindow[]
- `commissionRate`: decimal
- `status`: `active` | `inactive`
- `createdAt`: datetime
- `updatedAt`: datetime

### Service
- `id`: UUID
- `name`: string
- `durationMinutes`: integer
- `priority`: `normal` | `critical`
- `commissionPercent`: decimal
- `eligibleProfessionalIds`: UUID[]
- `createdAt`: datetime
- `updatedAt`: datetime

### Appointment
- `id`: UUID
- `clientId`: UUID
- `createdByStaffId`: UUID
- `status`: `suggested` | `pending_confirmation` | `confirmed` | `cancelled` | `no_show` | `rescheduled`
- `origin`: `agendado` | `chegada`
- `requestedStart`: datetime
- `scheduledStart`: datetime | null
- `scheduledEnd`: datetime | null
- `totalDurationMinutes`: integer
- `totalEstimatedValue`: decimal
- `confirmedByStaffId`: UUID | null
- `confirmedAt`: datetime | null
- `notes`: string | null
- `isPeakPeriod`: boolean
- `createdAt`: datetime
- `updatedAt`: datetime

### AppointmentItem
- `id`: UUID
- `appointmentId`: UUID
- `serviceId`: UUID
- `professionalId`: UUID
- `sequenceOrder`: integer
- `durationMinutes`: integer
- `commissionPercent`: decimal
- `status`: `scheduled` | `completed` | `cancelled`
- `createdAt`: datetime
- `updatedAt`: datetime

### Occurrence
- `id`: UUID
- `appointmentId`: UUID
- `type`: `cancelamento_tardio` | `no_show` | `atraso` | `remarcacao`
- `recordedByStaffId`: UUID
- `recordedAt`: datetime
- `reason`: string | null
- `notes`: string | null

### AvailabilityWindow
- `id`: UUID
- `professionalId`: UUID
- `start`: datetime
- `end`: datetime
- `type`: `work` | `blocked`
- `createdAt`: datetime
- `updatedAt`: datetime

## Relationships

- `Appointment` belongs to `Client`
- `Appointment` has many `AppointmentItem`
- `Appointment` has many `Occurrence`
- `AppointmentItem` belongs to `Service` and `Professional`
- `Professional` is eligible for multiple `Service`
- `AvailabilityWindow` belongs to `Professional`

## Validation rules

- A `Professional` não pode ter `AppointmentItem` confirmado com sobreposição de tempo.
- `Appointment` em `pending_confirmation` pode ser criado como sugestão; a confirmação final deve validar a janela e bloquear conflitos.
- Serviços múltiplos no mesmo `Appointment` devem formar uma sequência contínua ou paralela válida de acordo com elegibilidade e disponibilidade.
- `isPeakPeriod` é derivado por regra de negócio (sexta, sábado e horários críticos) para priorização de confirmação e registro de ocorrências.

## State transitions

- `suggested` → `pending_confirmation` quando a recepção cria a proposta.
- `pending_confirmation` → `confirmed` após validação de conflito e confirmação staff.
- `confirmed` → `cancelled` ou `no_show` quando ocorre registro de evento.
- `cancelled` / `no_show` → `rescheduled` se houver remarcação.
