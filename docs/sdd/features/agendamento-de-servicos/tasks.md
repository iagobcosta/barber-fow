# Backend

- [ ] Criar Aggregate `Appointment` com suporte a 1..N serviços e validação de estado.
- [ ] Implementar caso de uso de criação de agendamento com atribuição de profissional por item.
- [ ] Implementar política de detecção de conflito por `TimeRange` + buffers.
- [ ] Implementar caso de uso de reagendamento com histórico versionado.
- [ ] Implementar caso de uso de cancelamento com motivo e autor.
- [ ] Implementar caso de uso de solicitação/aprovação/rejeição de encaixe.
- [ ] Implementar caso de uso de bloqueio e desbloqueio de agenda.
- [ ] Implementar idempotência por `Idempotency-Key` em operações críticas.
- [ ] Publicar eventos de domínio com Outbox Pattern.
- [ ] Implementar RBAC e escopo por unidade nos endpoints.

# Frontend

- [ ] Criar fluxo de criação de agendamento multi-serviço.
- [ ] Implementar seleção de profissional por serviço.
- [ ] Exibir disponibilidade em tempo real com feedback de conflito.
- [ ] Implementar UI de encaixe com justificativa obrigatória.
- [ ] Implementar UI de bloqueio de agenda para perfis autorizados.
- [ ] Implementar fluxos de reagendamento e cancelamento.
- [ ] Exibir histórico de alterações do agendamento.
- [ ] Exibir mensagens de erro padronizadas por regra de negócio.

# Banco

- [ ] Criar tabelas: `appointments`, `appointment_items`, `appointment_item_professionals`.
- [ ] Criar tabelas: `schedule_blocks`, `fit_in_requests`, `appointment_history`.
- [ ] Criar tabelas: `idempotency_keys`, `outbox_events`, `audit_logs`.
- [ ] Criar índices para consulta de disponibilidade e conflito.
- [ ] Implementar constraints de integridade referencial e regras obrigatórias.
- [ ] Criar migração para status e transições válidas de agendamento.

# Integrações

- [ ] Integrar módulo de autenticação/autorização para RBAC.
- [ ] Integrar provedor de notificações para eventos de agendamento.
- [ ] Integrar barramento de eventos para publicação assíncrona.
- [ ] Integrar calendário/agenda interna por profissional e unidade.

# Infraestrutura

- [ ] Configurar feature flag da funcionalidade por unidade.
- [ ] Configurar observabilidade (logs, métricas, tracing).
- [ ] Configurar alertas de latência, erro e falha de publicação de evento.
- [ ] Configurar políticas de retry/dead-letter para eventos.

# Testes

- [ ] Escrever testes unitários para políticas de conflito, encaixe, cancelamento e reagendamento.
- [ ] Escrever testes de integração para persistência e transações.
- [ ] Escrever testes de concorrência para disputa do mesmo slot.
- [ ] Escrever testes de contrato OpenAPI.
- [ ] Escrever testes E2E para fluxo completo criar -> reagendar -> cancelar.

# Documentação

- [ ] Publicar contrato OpenAPI da feature.
- [ ] Documentar políticas operacionais (encaixe, cancelamento, bloqueio).
- [ ] Documentar eventos de domínio e payloads versionados.
- [ ] Documentar runbook de incidentes de agenda (conflito/concorrência).
