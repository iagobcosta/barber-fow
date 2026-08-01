# Objetivo Técnico
Implementar livro caixa por sessão com trilha de auditoria e integração com pagamentos.

# Arquitetura
- Aggregate `CashSession`.
- Ledger append-only de movimentos.

# Componentes
- Cash Session Service
- Cash Movement Service
- Cash Reconciliation Service

# APIs
- `POST /v1/cash/open`
- `POST /v1/cash/{id}/movements`
- `POST /v1/cash/{id}/close`
- `GET /v1/cash/{id}/statement`

# Banco de Dados
- `cash_sessions`
- `cash_movements`
- `cash_reconciliations`

# Modelo de Domínio
- Entidades: `CashSession`, `CashMovement`
- Políticas: abertura, fechamento e aprovação de divergência

# Eventos
- `CashOpened`, `CashClosed`, `CashDivergenceDetected`

# Segurança
- RBAC caixa/gestão.

# Performance
- Escrita transacional leve por movimento.

# Observabilidade
- Métricas de divergência e tempo de fechamento.

# Estratégia de Testes
- Unitários de fechamento.
- Integração com pagamento/estorno.
- E2E de abertura a fechamento.

# Estratégia de Deploy
- Ativação por unidade e operador.

# Riscos Técnicos
- Concorrência de múltiplos operadores.

# Critérios de Conclusão
- Sessão de caixa completa com auditoria.
