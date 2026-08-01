# Objetivo Técnico
Implementar motor de cobrança consolidada com suporte a split de meios de pagamento e integração com caixa.

# Arquitetura
- Aggregate `PaymentOrder`.
- Serviço de cálculo (`BillingCalculator`).
- Adaptadores para gateways e emissão de comprovante.

# Componentes
- Billing Consolidation Service
- Payment Processing Service
- Receipt Service
- Cash Posting Service

# APIs
- `GET /v1/payments/billing/{attendanceId}`
- `POST /v1/payments`
- `POST /v1/payments/{id}/confirm`
- `POST /v1/payments/{id}/refund`
- `GET /v1/payments/{id}/receipt`

# Banco de Dados
- `payment_orders`
- `payment_items`
- `payment_transactions`
- `payment_methods_split`
- `payment_receipts`

# Modelo de Domínio
- Entidades: `PaymentOrder`, `PaymentTransaction`, `PaymentSplit`
- Políticas: desconto, acréscimo, validação de soma

# Eventos
- `BillingConsolidated`, `PaymentConfirmed`, `ReceiptIssued`, `CashRegisterEntryCreated`

# Segurança
- RBAC para desconto e estorno.
- Tokenização de dados sensíveis.

# Performance
- Cálculo determinístico em memória + persistência transacional.

# Observabilidade
- Métricas de aprovação, falha por método e estorno.

# Estratégia de Testes
- Unitários do cálculo.
- Integração com caixa.
- Contrato com gateway.
- E2E pagamento misto.

# Estratégia de Deploy
- Feature flag por método de pagamento.

# Riscos Técnicos
- Inconsistência em falha parcial entre gateway e banco.

# Critérios de Conclusão
- Pagamento único, misto e estorno funcionando com comprovante e caixa.
