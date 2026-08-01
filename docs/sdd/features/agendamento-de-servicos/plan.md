# Objetivo Técnico

Implementar um módulo de agendamento confiável, auditável e escalável que suporte múltiplos serviços por agendamento, múltiplos profissionais, prevenção de conflitos, encaixes, bloqueios, reagendamento e cancelamento.

# Arquitetura

- Estilo: Clean Architecture + DDD.
- Camadas:
  - Apresentação (REST API / BFF).
  - Aplicação (casos de uso).
  - Domínio (entidades, VOs, políticas e eventos).
  - Infraestrutura (persistência, mensageria, observabilidade).
- Consistência:
  - Transações ACID para confirmação de slots.
  - Controle de concorrência (locking otimista/pessimista por slot).

# Componentes

- Appointment Service (orquestra agendamentos).
- Availability Service (cálculo de disponibilidade e conflitos).
- Schedule Block Service (bloqueios pontuais e recorrentes).
- Fit-In Policy Service (regras de encaixe e override).
- Notification Adapter (envio de notificações).
- Audit Service (trilha imutável de alterações).

# APIs

- `POST /v1/appointments`
- `GET /v1/appointments/{id}`
- `GET /v1/availability`
- `PATCH /v1/appointments/{id}/reschedule`
- `PATCH /v1/appointments/{id}/cancel`
- `POST /v1/schedule-blocks`
- `DELETE /v1/schedule-blocks/{id}`
- `POST /v1/appointments/{id}/fit-in-request`
- `PATCH /v1/appointments/{id}/status`

Diretrizes:

- Contratos OpenAPI com versionamento.
- Idempotency-Key obrigatória em criação/reagendamento/cancelamento.
- Erros padronizados (código, mensagem, causa, correlation_id).

# Banco de Dados

Entidades principais:

- `appointments`
- `appointment_items` (serviços do agendamento)
- `appointment_item_professionals`
- `schedule_slots` (visão materializada ou tabela de ocupação)
- `schedule_blocks`
- `fit_in_requests`
- `appointment_history`
- `idempotency_keys`
- `audit_logs`

Regras de modelagem:

- Índices por `unit_id`, `professional_id`, `start_at`, `end_at`.
- Constraint de integridade para evitar itens sem profissional.
- Soft delete apenas quando necessário para compliance; histórico sempre preservado.

# Modelo de Domínio

Agregados e entidades:

- Aggregate Root: `Appointment`
  - `AppointmentItem`
  - `AssignedProfessional`
  - `AppointmentStatus`
- Entidade: `ScheduleBlock`
- Entidade: `FitInRequest`

Value Objects:

- `TimeRange`
- `ServiceDuration`
- `UnitTimezone`
- `CancellationReason`
- `RescheduleReason`

Políticas de domínio:

- `ConflictDetectionPolicy`
- `FitInEligibilityPolicy`
- `RescheduleWindowPolicy`
- `CancellationPolicy`

# Eventos

Publicação de eventos de domínio após sucesso transacional:

- AppointmentCreated
- AppointmentConfirmed
- AppointmentRescheduled
- AppointmentCancelled
- ScheduleBlocked
- ScheduleUnblocked
- FitInRequested
- FitInApproved / FitInRejected

Estratégia:

- Outbox Pattern para consistência entre banco e mensageria.
- Versionamento de payloads para evolução compatível.

# Segurança

- RBAC por perfil (cliente, atendente, profissional, gestor, admin).
- Escopo por unidade (tenant lógico).
- Proteção OWASP:
  - validação de entrada;
  - rate limit por usuário/IP em endpoints críticos;
  - proteção contra IDOR por validação de pertencimento.
- LGPD:
  - retenção de dados conforme política;
  - anonimização/pseudonimização para analytics.

# Performance

- Cache curto para disponibilidade por filtros de alta repetição.
- Pré-cálculo de slots de agenda por janela temporal.
- Paginação e filtros obrigatórios para listagens.
- Índices compostos orientados às consultas de disponibilidade.

# Observabilidade

- Logs estruturados com `correlation_id`, `appointment_id`, `unit_id`.
- Métricas:
  - taxa de conflitos evitados;
  - taxa de encaixe aprovado/rejeitado;
  - latência p95 por endpoint;
  - taxa de cancelamento e no-show.
- Tracing distribuído nos fluxos de criação/reagendamento/cancelamento.
- Alertas para erro 5xx e degradação de latência.

# Estratégia de Testes

- Unitários:
  - políticas de conflito, encaixe, cancelamento e reagendamento.
- Integração:
  - persistência transacional e constraints.
  - idempotência em retry.
- Contrato:
  - compatibilidade OpenAPI.
- Concorrência:
  - disputa simultânea de mesmo slot.
- E2E:
  - criar -> reagendar -> cancelar -> auditar histórico.

# Estratégia de Deploy

- Rollout gradual por feature flag por unidade.
- Migrações backward-compatible.
- Publicação de eventos com monitoramento de lag.
- Plano de rollback:
  - desativar feature flag;
  - preservar dados já gravados;
  - reprocessar outbox pendente.

# Riscos Técnicos

- Alta contenção concorrencial em horários de pico.
- Complexidade de regra para agendamentos com múltiplos profissionais.
- Regressão de performance em consultas de disponibilidade.
- Inconsistência entre estado transacional e eventos sem outbox.
- Regras divergentes por unidade sem governança de configuração.

# Critérios de Conclusão

1. APIs documentadas e publicadas em OpenAPI.
2. Fluxos de criação, encaixe, bloqueio, reagendamento e cancelamento funcionais.
3. Bloqueio de conflitos validado por testes de concorrência.
4. Histórico e auditoria completos para alterações críticas.
5. Observabilidade com métricas e logs mínimos operacionais ativos.
6. Critérios de aceite de [spec.md](/Users/iagobarbosa/Documents/pos-unifor/topicos-avancados/docs/sdd/features/agendamento-de-servicos/spec.md) atendidos.
