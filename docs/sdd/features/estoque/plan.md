# Objetivo Técnico
Implementar submódulo de estoque com ledger de movimentações, lotes e inventário.

# Arquitetura
- Aggregate `StockItem`.
- Ledger de movimentos por lote/local.

# Componentes
- Stock Movement Service
- Inventory Service
- Supplier & Purchase Service
- Auto Debit Service

# APIs
- `POST /v1/stock/entries`
- `POST /v1/stock/exits`
- `POST /v1/stock/losses`
- `POST /v1/stock/inventories`
- `GET /v1/stock/items`

# Banco de Dados
- `stock_items`
- `stock_lots`
- `stock_movements`
- `inventory_counts`
- `suppliers`
- `purchase_orders`

# Modelo de Domínio
- Entidades: `StockItem`, `StockLot`, `StockMovement`
- Políticas: baixa automática, validade, custo médio

# Eventos
- `StockEntryRegistered`, `StockExitRegistered`, `StockAdjustedByInventory`

# Segurança
- RBAC para ajustes e inventário.

# Performance
- Índices por produto, lote, validade e unidade.

# Observabilidade
- Métricas de ruptura, perda e giro.

# Estratégia de Testes
- Unitários de saldo e validade.
- Integração com consumo/atendimento.
- E2E inventário e ajuste.

# Estratégia de Deploy
- Migração inicial de cadastro e saldo.

# Riscos Técnicos
- Divergência de ficha técnica para baixa automática.

# Critérios de Conclusão
- Estoque íntegro com inventário e integrações ativas.
