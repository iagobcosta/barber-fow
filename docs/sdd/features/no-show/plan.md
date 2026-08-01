# Objetivo Técnico
Implementar política de no-show automática e manual com efeitos em elegibilidade de agendamento.

# Arquitetura
- Job/evento temporal para varredura de ausência.
- Serviço de política de reincidência.

# Componentes
- NoShow Detection Service
- NoShow Policy Service
- Booking Eligibility Service

# APIs
- `POST /v1/no-show/register`
- `POST /v1/no-show/revert`
- `GET /v1/no-show/customer/{customerId}`
- `GET /v1/no-show/policies`

# Banco de Dados
- `no_show_records`
- `no_show_policies`
- `customer_no_show_counters`
- `no_show_fee_entries`

# Modelo de Domínio
- Entidades: `NoShowRecord`, `NoShowPolicy`
- Políticas: tolerância, reincidência, bloqueio, taxa

# Eventos
- `NoShowRegistered`, `NoShowReverted`, `BookingBlockedByNoShowPolicy`

# Segurança
- RBAC para reversão/aprovação.

# Performance
- Processamento incremental por janela de tempo.

# Observabilidade
- Métricas de taxa de no-show e bloqueios.

# Estratégia de Testes
- Unitários de política de reincidência.
- Integração com agendamento/check-in.
- E2E com bloqueio e taxa.

# Estratégia de Deploy
- Feature flag para cobrança de taxa.

# Riscos Técnicos
- Falso positivo sem sincronismo de check-in.

# Critérios de Conclusão
- No-show e consequências aplicadas corretamente.
