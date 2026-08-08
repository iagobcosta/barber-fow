# Implementation Tasks: Gestão de Agendamento

**Feature**: specs/001-gestao-agendamento/spec.md
**Plan**: specs/001-gestao-agendamento/plan.md

## Phase 1 — Setup

 - [x] T001 Initialize repository skeleton and create `backend/` and `frontend/` directories (`backend/package.json`, `frontend/package.json`)
 - [x] T002 Add TypeScript config files for backend and frontend (`backend/tsconfig.json`, `frontend/tsconfig.json`)
 - [x] T003 Add ESLint and Prettier configuration (`.eslintrc.cjs`, `.prettierrc`) at repo root
 - [x] T004 Create `.env.example` templates for backend and frontend (`backend/.env.example`, `frontend/.env.example`)

## Phase 2 — Foundational

 - [x] T005 [P] Add database schema and migration setup (Prisma or equivalent) (`backend/prisma/schema.prisma`)
- [ ] T006 Configure database connection and environment loading (`backend/src/config/database.ts`, `backend/.env`)
- [ ] T007 Implement authentication middleware skeleton (`backend/src/middleware/auth.ts`)
 - [x] T008 Implement Express app bootstrapping and server entry (`backend/src/index.ts`)
- [ ] T009 [P] Initialize frontend base with Vite + React and root app (`frontend/src/main.tsx`, `frontend/index.html`)
- [ ] T010 Implement API client and shared types on frontend (`frontend/src/services/api.ts`, `frontend/src/types/api.d.ts`)
 

## Phase 3 — User Story 1 (P1) Agendar serviços sem conflito

- [ ] T011 [US1] Create `Appointment` entity and ORM model (`backend/src/models/appointment.ts`)
- [ ] T012 [US1] Create `AppointmentItem`, `Service`, and `Professional` models (`backend/src/models/appointmentItem.ts`, `backend/src/models/service.ts`, `backend/src/models/professional.ts`)
- [ ] T013 [US1] Implement conflict validation service (validate sequences and professional availability) (`backend/src/services/conflictService.ts`)
- [ ] T014 [US1] Implement API endpoints for listing and creating suggested appointments (`backend/src/routes/appointments.ts`)
 - [x] T011 [US1] Create `Appointment` entity and ORM model (`backend/src/models/appointment.ts`)
 - [x] T012 [US1] Create `AppointmentItem`, `Service`, and `Professional` models (`backend/src/models/appointmentItem.ts`, `backend/src/models/service.ts`, `backend/src/models/professional.ts`)
 - [x] T013 [US1] Implement conflict validation service (validate sequences and professional availability) (`backend/src/services/conflictService.ts`)
 - [x] T014 [US1] Implement API endpoints for listing and creating suggested appointments (`backend/src/routes/appointments.ts`)
- [ ] T015 [P] [US1] Implement staff panel UI to review and confirm suggestions (`frontend/src/pages/staff/appointments/index.tsx`)
- [ ] T016 [P] [US1] Implement client suggestion UI (form to request appointment suggestion) (`frontend/src/pages/client/suggestAppointment.tsx`)
- [ ] T017 [US1] Add unit/integration tests for conflict validation and appointment creation (`backend/tests/conflict.test.ts`, `backend/tests/appointments.test.ts`)

## Phase 4 — User Story 2 (P2) Reduzir impacto de no-show

- [ ] T018 [US2] Implement `Occurrence` entity and persistence (`backend/src/models/occurrence.ts`)
- [ ] T019 [US2] Implement API endpoints to record occurrences (no-show, cancelamento_tardio, remarcacao) (`backend/src/routes/occurrences.ts`)
- [ ] T020 [P] [US2] Implement staff UI to record occurrences and view client history (`frontend/src/pages/staff/occurrences.tsx`)
- [ ] T021 [US2] Add tests validating occurrence recording and history updates (`backend/tests/occurrence.test.ts`)

## Phase 5 — User Story 3 (P3) Operar atendimento híbrido (agendado + chegada)

- [ ] T022 [US3] Implement walk-in encaixe suggestion service (`backend/src/services/encaixeService.ts`)
- [ ] T023 [P] [US3] Implement staff UI for managing walk-ins and quick suggestions (`frontend/src/pages/staff/walkin.tsx`)

## Final Phase — Polish & Cross-cutting Concerns

- [ ] T024 Implement daily occupancy aggregation endpoint and staff UI (`backend/src/routes/occupancy.ts`, `frontend/src/pages/staff/occupancy.tsx`)
- [ ] T025 Add logging, metrics, and structured error handling (`backend/src/lib/logger.ts`, `backend/src/middleware/errorHandler.ts`)
- [ ] T026 [P] Add CI scripts and `npm` scripts for dev/start/test in `backend/package.json` and `frontend/package.json` (`backend/package.json`, `frontend/package.json`)
- [ ] T027 Update `specs/001-gestao-agendamento/contracts/appointment-api.md` if any API changes occur (`specs/001-gestao-agendamento/contracts/appointment-api.md`)

## Additional Cross-cutting Tasks

- [ ] T028 Instrumentation & metrics: implement metrics collection and dashboards (e.g. `/metrics` endpoint, Prometheus counters, Grafana dashboard) (`backend/src/lib/metrics.ts`, `monitoring/grafana-dashboard.json`)
- [ ] T029 Peak-period derivation & tests: implement peak detection logic and unit tests for FR-008 (e.g. `isPeakPeriod(date)`) (`backend/src/lib/peak.ts`, `backend/tests/peak.test.ts`)
- [ ] T030 Reschedule flow: implement remarcação endpoints, staff UI and tests (FR-009) (`backend/src/routes/reschedule.ts`, `frontend/src/pages/staff/reschedule.tsx`, `backend/tests/reschedule.test.ts`)
- [ ] T031 Concurrency control & tests: implement DB transaction/locking strategy and concurrency tests for simultaneous edits (`backend/src/services/concurrency.ts`, `backend/tests/concurrency.test.ts`)
- [ ] T032 Premium visual system & design tokens: implement a cohesive premium visual language for the landing page, client booking flow, and staff experience using a shared theme, typography, spacing, and motion system (`frontend/src/styles/`, `frontend/src/components/`)
- [ ] T033 Public landing page: implement a presentation landing page highlighting Beauty Salon, Barbershop, and Bar with strong copy, CTA sections, and responsive layout (`frontend/src/pages/public/LandingPage.tsx`)
- [ ] T034 Landing-page and booking route navigation: wire the landing page into the app router and connect the public experience to the booking and staff entry points (`frontend/src/App.tsx`, `frontend/src/router/`)

## Dependencies & Parallelization

- Foundational tasks (T005–T010) should complete before most story-specific tasks; however, T005, T009, T010, T015, T016, T020, T023, T026 are parallelizable across teams.

## Independent Test Criteria (per story)

- US1: Ability to create a suggested appointment and have `conflictService` return alternative times or block confirmation; staff confirms suggestion and appointment becomes `confirmed`.
- US2: Occurrence recording endpoint must persist event with `recordedAt` on the same day and update client history.
- US3: Walk-in encaixe suggestions should propose slots that do not invalidate existing confirmed appointments.

## Suggested MVP Scope

- MVP: Deliver Phase 1, Phase 2, and Phase 3 (User Story 1) so reception can accept and confirm suggested appointments with conflict validation.


---

*Generated by `/speckit-tasks`*