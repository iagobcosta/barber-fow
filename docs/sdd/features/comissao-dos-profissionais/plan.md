# Objetivo Técnico
Implementar módulo analítico-transacional de comissão com agregações por período e ajustes auditáveis.

# Arquitetura
- Pipeline de apuração incremental + consultas agregadas.
- CQRS opcional para leitura performática.

# Componentes
- Commission Calculation Service
- Commission Adjustment Service
- Commission Query Service
- Export Service

# APIs
- `GET /v1/commissions`
- `POST /v1/commissions/recalculate`
- `POST /v1/commissions/adjustments`
- `GET /v1/commissions/export`

# Banco de Dados
- `commission_snapshots`
- `commission_items`
- `commission_adjustments`
- `commission_exports`

# Modelo de Domínio
- Entidades: `CommissionStatement`, `CommissionAdjustment`
- Políticas: elegibilidade e ajuste

# Eventos
- `CommissionCalculated`, `CommissionAdjusted`

# Segurança
- RBAC de leitura/ajuste/exportação.

# Performance
- Tabelas agregadas por partição de data.

# Observabilidade
- Métricas de tempo de apuração e divergências.

# Estratégia de Testes
- Unitários de cálculo.
- Integração com split/estorno.
- Testes de exportação com filtros.

# Estratégia de Deploy
- Execução em lote inicial + incremental.

# Riscos Técnicos
- Reprocessamento de grande volume histórico.

# Critérios de Conclusão
- Consulta por período e ajustes funcionando com exportação.
