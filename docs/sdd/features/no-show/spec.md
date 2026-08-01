# Objetivo
Detectar e tratar ausência de clientes, aplicando políticas de tolerância, reincidência, bloqueio de agendamento e taxa quando configurado.

# Contexto
Clientes podem não comparecer, impactando ocupação e receita.

# Problema
Sem governança de no-show há alta ociosidade e injustiça operacional.

# Personas
- Recepção
- Gestor
- Cliente

# Fluxo Principal
1. Sistema monitora agendamentos sem check-in até limite de tolerância.
2. Marca status `NO_SHOW` quando regra é atendida.
3. Registra motivo/justificativa (quando existir).
4. Atualiza reincidência do cliente.
5. Aplica consequências (taxa e/ou bloqueio).

# Fluxos Alternativos
- Cancelamento antecipado dentro da política: não conta no-show.
- Reagendamento autorizado: sem penalidade conforme regra.
- Justificativa aprovada: reversão de no-show.

# Casos de Uso
- UC01 Marcar no-show automático.
- UC02 Marcar no-show manual.
- UC03 Reverter no-show com justificativa.
- UC04 Aplicar bloqueio por reincidência.

# Regras de Negócio
1. Tolerância é configurável por unidade/serviço.
2. No-show exige ausência de check-in válido.
3. Reincidência considera janela temporal configurável.
4. Bloqueio de novos agendamentos depende de limiar de reincidência.
5. Taxa de no-show é opcional e parametrizada.
6. Cancelamento antecipado elegível não gera no-show.
7. Toda reversão exige justificativa e aprovação.

# Requisitos Funcionais
- Identificar ausência.
- Registrar no-show.
- Calcular reincidência.
- Bloquear agendamento quando necessário.
- Cobrar taxa configurável.

# Requisitos Não Funcionais
- Processamento confiável e idempotente.
- Auditoria de marcações e reversões.

# Eventos de Domínio
- `NoShowDetected`
- `NoShowRegistered`
- `NoShowReverted`
- `NoShowFeeApplied`
- `BookingBlockedByNoShowPolicy`

# Critérios de Aceite
1. Cliente ausente sem check-in dentro da tolerância vira no-show.
2. Reincidência é recalculada corretamente.
3. Bloqueio e taxa respeitam política.
4. Reversão exige justificativa e histórico.

# Restrições
- Regras por unidade.

# Dependências
- Agendamento.
- Check-in.
- Pagamento.

# Fora do Escopo
- Cobrança judicial.
