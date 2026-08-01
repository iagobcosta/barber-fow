# Objetivo Técnico
Implementar motor de estado do atendimento com suporte a múltiplos serviços e profissionais.

# Arquitetura
- Aggregate `ServiceOrder`.
- State machine explícita (`INICIADO`, `PAUSADO`, `CONCLUIDO`).
- Integração por eventos com pagamento e split.

# Componentes
- Attendance Service
- Service Mutation Service
- Professional Assignment Service
- Duration Tracker

# APIs
- `POST /v1/attendances/{id}/start`
- `POST /v1/attendances/{id}/pause`
- `POST /v1/attendances/{id}/resume`
- `POST /v1/attendances/{id}/complete`
- `PATCH /v1/attendances/{id}/professional`
- `POST /v1/attendances/{id}/services`
- `DELETE /v1/attendances/{id}/services/{serviceItemId}`

# Banco de Dados
- `attendances`
- `attendance_service_items`
- `attendance_transitions`
- `attendance_notes`

# Modelo de Domínio
- Entidades: `Attendance`, `AttendanceItem`
- Políticas: mudança de estado, troca de profissional, serviço extra

# Eventos
- `ServiceStarted`, `ServicePaused`, `ServiceCompleted`, `ServiceOrderReadyForPayment`

# Segurança
- RBAC por papel operacional.

# Performance
- Registro de transição append-only.

# Observabilidade
- Métricas de duração média, pausas e serviços extras.

# Estratégia de Testes
- Unitários de state machine.
- Integração de mutação de serviços e cálculo de duração.
- E2E até encaminhamento para pagamento.

# Estratégia de Deploy
- Feature flag por unidade/equipe.

# Riscos Técnicos
- Complexidade de atendimentos simultâneos.

# Critérios de Conclusão
- Fluxo completo start/pause/resume/complete funcional e auditável.
