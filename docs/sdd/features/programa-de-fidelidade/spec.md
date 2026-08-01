# Objetivo
Fidelizar clientes por pontos, visitas, recompensas e campanhas configuráveis.

# Contexto
A empresa deseja aumentar retenção e frequência com benefícios progressivos.

# Problema
Sem programa estruturado há menor recorrência e menor LTV.

# Personas
- Cliente
- Marketing/Gestor
- Recepção

# Fluxo Principal
1. Sistema acumula pontos/visitas após pagamento elegível.
2. Avalia nível VIP e validade.
3. Disponibiliza recompensas elegíveis.
4. Cliente resgata benefício.
5. Sistema registra histórico completo.

# Fluxos Alternativos
- Campanha sazonal com regra especial.
- Expiração de pontos.
- Resgate parcial/total.

# Casos de Uso
- UC01 Acumular pontos.
- UC02 Acumular visitas.
- UC03 Resgatar serviço/produto gratuito.
- UC04 Configurar campanha.

# Regras de Negócio
1. Pontos e visitas só acumulam em pagamentos confirmados.
2. Regras são versionadas por vigência.
3. Recompensa deve validar saldo e elegibilidade.
4. Pontos podem expirar por política.
5. Níveis VIP são recalculados periodicamente.
6. Estornos removem pontos/visitas correspondentes.

# Requisitos Funcionais
- Acúmulo de pontos e visitas.
- Recompensas de produtos e serviços.
- Campanhas configuráveis.
- Níveis VIP.
- Histórico.

# Requisitos Não Funcionais
- Consistência de saldo.
- Alta rastreabilidade.

# Eventos de Domínio
- `LoyaltyPointsAccrued`
- `LoyaltyVisitAccrued`
- `LoyaltyRewardRedeemed`
- `LoyaltyPointsExpired`
- `LoyaltyTierChanged`

# Critérios de Aceite
1. Pagamento gera pontos/visitas conforme regra.
2. Resgate reduz saldo corretamente.
3. Expiração ocorre na data configurada.
4. VIP muda automaticamente por critérios.

# Restrições
- Regras por unidade/campanha.

# Dependências
- Pagamento.
- Atendimento.
- Consumo do Café.

# Fora do Escopo
- Marketplace de parceiros externos.
