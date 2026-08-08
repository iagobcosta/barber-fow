# Appointment API Contract

## Overview

This contract defines the internal HTTP API between the React/Vite frontend and the Node/Express backend for the Gestão de Agendamento feature.

## Authentication

- Staff and client panels authenticate via bearer tokens.
- Staff endpoints must verify the user role is `staff`.

## Endpoints

### GET /api/appointments

Retrieves appointments visible to the current user.

Query parameters:
- `role=staff|client`
- `date=YYYY-MM-DD`
- `status=confirmed|pending_confirmation|cancelled|no_show|suggested`

Response:
```json
{
  "appointments": [
    {
      "id": "uuid",
      "clientId": "uuid",
      "status": "suggested",
      "origin": "agendado",
      "requestedStart": "2026-08-06T10:00:00Z",
      "scheduledStart": null,
      "scheduledEnd": null,
      "totalDurationMinutes": 90,
      "isPeakPeriod": true,
      "items": [
        {
          "serviceId": "uuid",
          "professionalId": "uuid",
          "sequenceOrder": 1,
          "durationMinutes": 60
        }
      ]
    }
  ]
}
```

### POST /api/appointments

Create a suggested appointment request.

Request body:
```json
{
  "clientId": "uuid",
  "origin": "agendado",
  "requestedStart": "2026-08-06T10:00:00Z",
  "items": [
    {"serviceId": "uuid", "professionalId": "uuid", "sequenceOrder": 1 }
  ]
}
```

Response:
```json
{
  "id": "uuid",
  "status": "pending_confirmation",
  "requestedStart": "2026-08-06T10:00:00Z"
}
```

### POST /api/appointments/:id/confirm

Confirm a suggested appointment.

Response:
```json
{
  "id": "uuid",
  "status": "confirmed",
 "confirmedAt": "2026-08-06T10:05:00Z"
}
```

### POST /api/appointments/:id/occurrences

Record a cancellation, no-show, or reschedule event.

Request body:
```json
{
  "type": "cancelamento_tardio",
  "reason": "Cliente avisou 10 minutos antes",
  "recordedByStaffId": "uuid"
}
```

Response:
```json
{
  "id": "uuid",
  "type": "cancelamento_tardio"
}
```

## Error responses

Example:
```json
{
  "error": "Conflict detected for professional schedule"
}
```
