# Objetivo Técnico
Implementar um módulo de check-in transacional e auditável integrado à agenda e fila de espera.

# Arquitetura
- Camadas DDD/Clean: API, Aplicação, Domínio, Infra.
- Agregado principal: `CheckInSession`.
- Integração por eventos com agenda e notificações.

# Componentes
- CheckIn Service
- Queue Service
- Late Policy Service
- Professional Alert Service

# APIs
- `POST /v1/check-ins`
- `GET /v1/check-ins/search`
- `POST /v1/walk-in-queue`
- `PATCH /v1/check-ins/{id}/override`

# Banco de Dados
- `check_ins`
- `walk_in_queue`
- `check_in_audit`
- índices por `unit_id`, `arrival_at`, `appointment_id`, `status`

# Modelo de Domínio
- Entidades: `CheckIn`, `QueueEntry`
- VOs: `ArrivalTime`, `LatePolicyResult`
- Políticas: tolerância, ordem de chegada, prioridade

# Eventos
- `ClientCheckedIn`, `WalkInQueued`, `LateArrivalDetected`, `ProfessionalNotified`

# Segurança
- RBAC recepção/gestão.
- Escopo por unidade + trilha de auditoria.

# Performance
- Busca por cliente/agendamento indexada.
- Atualização de fila em tempo real.

# Observabilidade
- Métricas: tempo médio de espera, taxa de atraso, taxa de avulso.
- Logs com `correlation_id`.

# Estratégia de Testes
- Unitários de política de atraso.
- Integração de check-in + alteração de status.
- E2E de fila por ordem de chegada.

# Estratégia de Deploy
- Feature flag por unidade.
- Rollout gradual com monitoração de fila.

# Riscos Técnicos
- Conflitos entre prioridade de agenda e ordem de chegada.
- Picos de chegada simultânea.

# Critérios de Conclusão
- Fluxo de check-in/fila funcionando com auditoria.
- Notificação ao profissional operacional.
