# Objetivo Técnico
Implementar engine de split financeiro orientada a regras versionadas.

# Arquitetura
- Serviço de cálculo puro + persistência transacional.
- Outbox para publicação de eventos de repasse/ajuste.

# Componentes
- Split Engine
- Commission Rules Service
- Repasse Ledger Service

# APIs
- `POST /v1/financial-split/calculate`
- `GET /v1/financial-split/{paymentId}`
- `POST /v1/financial-split/{id}/repasse`
- `POST /v1/financial-split/{id}/recalculate`

# Banco de Dados
- `split_rules`
- `payment_splits`
- `payment_split_items`
- `repasse_ledger`
- `split_adjustments`

# Modelo de Domínio
- Entidades: `Split`, `SplitItem`, `Repasse`
- Políticas: rateio de desconto/acréscimo, ajuste por estorno

# Eventos
- `FinancialSplitCalculated`, `SplitAdjustedAfterRefund`, `RepasseRegistered`

# Segurança
- RBAC financeiro.

# Performance
- Cálculo por lote de itens por pagamento.

# Observabilidade
- Métricas de divergência e tempo de cálculo.

# Estratégia de Testes
- Unitários da engine de rateio.
- Integração com pagamento e estorno.
- Testes de precisão monetária.

# Estratégia de Deploy
- Migração de regras com vigência.

# Riscos Técnicos
- Complexidade de regras especiais por profissional.

# Critérios de Conclusão
- Split e ajuste por estorno operacionais com histórico.
