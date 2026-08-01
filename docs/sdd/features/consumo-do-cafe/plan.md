# Objetivo Técnico
Construir submódulo de pedidos do café integrado a atendimento, estoque e pagamento.

# Arquitetura
- Aggregate `CafeOrder`.
- Integração síncrona com estoque para validação/baixa.
- Eventos para consolidação financeira.

# Componentes
- Cafe Order Service
- Stock Reservation Service
- Billing Link Service

# APIs
- `POST /v1/cafe/orders`
- `POST /v1/cafe/orders/{id}/items`
- `PATCH /v1/cafe/orders/{id}/items/{itemId}`
- `DELETE /v1/cafe/orders/{id}/items/{itemId}`
- `POST /v1/cafe/orders/{id}/close`

# Banco de Dados
- `cafe_orders`
- `cafe_order_items`
- `cafe_order_history`

# Modelo de Domínio
- Entidades: `CafeOrder`, `CafeOrderItem`
- Políticas: cancelamento, baixa de estoque, vinculação financeira

# Eventos
- `CafeOrderCreated`, `CafeItemAdded`, `CafeOrderClosed`, `StockDebitedForCafe`

# Segurança
- RBAC para registrar/cancelar itens.

# Performance
- Inserção em lote de itens.

# Observabilidade
- Métricas de ticket médio do café e cancelamento.

# Estratégia de Testes
- Unitários de regra de estoque e cancelamento.
- Integração estoque + pagamento.
- E2E consumo antes/durante/após atendimento.

# Estratégia de Deploy
- Rollout por unidade.

# Riscos Técnicos
- Divergência entre baixa de estoque e cobrança.

# Critérios de Conclusão
- Consumo vinculado e consolidado no pagamento com estoque consistente.
