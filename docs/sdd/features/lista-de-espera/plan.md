# Objetivo Técnico
Implementar motor de fila e matching automático de vagas.

# Arquitetura
- Worker orientado a eventos de vaga.
- Fila priorizada com regras configuráveis.

# Componentes
- Waitlist Service
- Vacancy Matcher
- Offer Expiration Scheduler

# APIs
- `POST /v1/waitlist`
- `GET /v1/waitlist`
- `POST /v1/waitlist/{id}/cancel`
- `POST /v1/waitlist/process-vacancy`

# Banco de Dados
- `waitlist_entries`
- `waitlist_offers`
- `waitlist_rules`

# Modelo de Domínio
- Entidades: `WaitlistEntry`, `WaitlistOffer`
- Políticas: prioridade e expiração

# Eventos
- `WaitlistJoined`, `VacancyMatched`, `WaitlistOfferExpired`, `WaitlistConvertedToBooking`

# Segurança
- RBAC para operações de recepção/gestão.

# Performance
- Índices por serviço, profissional, data e prioridade.

# Observabilidade
- Taxa de conversão da fila e tempo de resposta.

# Estratégia de Testes
- Unitários de prioridade/matching.
- Integração com agendamento e notificações.
- E2E de expiração e conversão.

# Estratégia de Deploy
- Rollout por unidade.

# Riscos Técnicos
- Corridas de concorrência em vagas simultâneas.

# Critérios de Conclusão
- Fila automática preenchendo vagas com notificação e SLA.
