# Objetivo
Gerenciar abertura/fechamento diário de caixa com sangrias, suprimentos, pagamentos, estornos e auditoria.

# Contexto
Operação financeira diária exige controle por operador e conferência de valores.

# Problema
Sem controle formal de caixa há risco de fraude, divergência e falta de rastreabilidade.

# Personas
- Operador de caixa
- Gestor
- Financeiro

# Fluxo Principal
1. Operador abre caixa com saldo inicial.
2. Sistema registra pagamentos e movimentações.
3. Operador registra sangrias/suprimentos quando necessário.
4. Ao fim do turno, realiza fechamento e conferência.
5. Gestor audita divergências.

# Fluxos Alternativos
- Múltiplos operadores no mesmo dia.
- Reabertura controlada de caixa encerrado.
- Estorno após fechamento (lançamento de ajuste).

# Casos de Uso
- UC01 Abrir caixa.
- UC02 Registrar movimentação.
- UC03 Fechar caixa.
- UC04 Auditar divergência.

# Regras de Negócio
1. Não pode registrar pagamento sem caixa aberto.
2. Uma sessão de caixa ativa por operador/terminal (configurável).
3. Sangria e suprimento exigem motivo.
4. Fechamento deve calcular saldo teórico e diferença.
5. Divergência acima do limite exige aprovação.
6. Estornos devem ficar vinculados ao lançamento original.

# Requisitos Funcionais
- Abrir/fechar caixa.
- Registrar sangrias e suprimentos.
- Registrar pagamentos e estornos.
- Conferir e auditar.

# Requisitos Não Funcionais
- Integridade contábil.
- Auditoria imutável.

# Eventos de Domínio
- `CashOpened`
- `CashMovementRegistered`
- `CashClosed`
- `CashDivergenceDetected`
- `CashRefundRegistered`

# Critérios de Aceite
1. Não há pagamento sem caixa aberto.
2. Fechamento calcula diferença corretamente.
3. Sangrias/suprimentos aparecem no extrato da sessão.
4. Divergências ficam auditáveis.

# Restrições
- Escopo por unidade e operador.

# Dependências
- Pagamento.

# Fora do Escopo
- Conciliação bancária automática.
