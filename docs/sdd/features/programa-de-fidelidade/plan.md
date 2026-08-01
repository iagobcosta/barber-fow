# Objetivo Técnico
Implementar engine de fidelidade configurável por regras e campanhas.

# Arquitetura
- Cálculo orientado a eventos de pagamento.
- Ledger de pontos/visitas append-only.

# Componentes
- Loyalty Rules Service
- Loyalty Ledger Service
- Reward Redemption Service
- Campaign Service

# APIs
- `GET /v1/loyalty/{customerId}`
- `POST /v1/loyalty/redeem`
- `POST /v1/loyalty/campaigns`
- `GET /v1/loyalty/history/{customerId}`

# Banco de Dados
- `loyalty_accounts`
- `loyalty_ledger`
- `loyalty_rewards`
- `loyalty_campaigns`
- `loyalty_tiers`

# Modelo de Domínio
- Entidades: `LoyaltyAccount`, `LoyaltyTransaction`, `Reward`
- Políticas: accrual, expiração, tiering

# Eventos
- `LoyaltyPointsAccrued`, `LoyaltyRewardRedeemed`, `LoyaltyTierChanged`

# Segurança
- RBAC para configuração de campanha.

# Performance
- Projeções materializadas para saldo atual.

# Observabilidade
- Métricas de adesão, resgate e churn.

# Estratégia de Testes
- Unitários de regras de pontuação.
- Integração com pagamento e estorno.
- E2E de resgate.

# Estratégia de Deploy
- Lançamento por campanha piloto.

# Riscos Técnicos
- Complexidade de múltiplas regras vigentes.

# Critérios de Conclusão
- Acúmulo, resgate, expiração e níveis VIP funcionais.
