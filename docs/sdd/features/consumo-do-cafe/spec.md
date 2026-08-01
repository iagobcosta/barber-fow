# Objetivo
Gerenciar consumo do café vinculado ao atendimento, com múltiplos pedidos, controle de quantidade, estoque e integração financeira.

# Contexto
O cliente pode consumir antes, durante e após o atendimento, devendo consolidar tudo em um único pagamento.

# Problema
Sem vínculo formal entre consumo e atendimento há perdas de cobrança e inconsistência de estoque.

# Personas
- Cliente
- Atendente do café/recepção
- Profissional
- Gestor

# Fluxo Principal
1. Atendente localiza atendimento/check-in do cliente.
2. Registra itens e quantidades do pedido.
3. Sistema reserva/baixa estoque conforme política.
4. Pedido fica vinculado ao atendimento.
5. Na finalização, itens seguem para pagamento consolidado.

# Fluxos Alternativos
- Cliente sem atendimento ativo: cria consumo vinculado ao check-in/conta temporária.
- Cancelamento total/parcial de item.
- Múltiplos pedidos no mesmo atendimento.

# Casos de Uso
- UC01 Registrar pedido.
- UC02 Alterar quantidade.
- UC03 Cancelar item/pedido.
- UC04 Fechar consumo e enviar ao pagamento.

# Regras de Negócio
1. Todo consumo deve estar vinculado a atendimento/check-in válido.
2. Múltiplos pedidos são permitidos e consolidados.
3. Quantidade deve ser inteira positiva.
4. Cancelamentos após preparo podem gerar cobrança parcial (configurável).
5. Estoque não pode ficar negativo.
6. Baixa de estoque deve respeitar unidade de medida e fator de conversão.
7. Itens cancelados devem manter histórico auditável.

# Requisitos Funcionais
- Registrar vários produtos por pedido.
- Controlar quantidade.
- Permitir cancelamento.
- Controlar estoque integrado.
- Integrar com pagamento unificado.

# Requisitos Não Funcionais
- Consistência estoque-cobrança.
- Operação <= 400ms p95.
- Auditoria de alterações.

# Eventos de Domínio
- `CafeOrderCreated`
- `CafeItemAdded`
- `CafeItemCancelled`
- `CafeOrderClosed`
- `StockDebitedForCafe`

# Critérios de Aceite
1. Consumo é sempre vinculado ao atendimento/check-in.
2. Múltiplos pedidos consolidam no pagamento final.
3. Cancelamento atualiza cobrança e estoque conforme regra.
4. Estoque impede venda sem saldo.

# Restrições
- Catálogo e preço por unidade.
- Permissões por perfil.

# Dependências
- Atendimento.
- Estoque.
- Pagamento.

# Fora do Escopo
- Delivery externo.
