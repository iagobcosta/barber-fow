# Objetivo
Controlar a execução do atendimento após check-in, com gestão de status, serviços, profissionais e duração real até encaminhamento para pagamento.

# Contexto
Após o check-in, o profissional inicia a execução dos serviços agendados e pode ocorrer pausa, troca de profissional e serviços extras.

# Problema
Sem um fluxo formal, há perda de rastreabilidade, inconsistência de cobrança e falhas no cálculo operacional.

# Personas
- Profissional
- Recepção
- Cliente
- Gestor

# Fluxo Principal
1. Profissional inicia atendimento (`EM_ANDAMENTO`).
2. Sistema registra horário de início.
3. Profissional executa serviços planejados.
4. Profissional conclui atendimento.
5. Sistema registra duração real e encaminha para pagamento.

# Fluxos Alternativos
- Pausa e retomada de atendimento.
- Troca de profissional durante execução.
- Adição/remoção de serviços.
- Atendimento simultâneo com múltiplos profissionais.

# Casos de Uso
- UC01 Iniciar atendimento.
- UC02 Pausar/retomar.
- UC03 Concluir atendimento.
- UC04 Trocar profissional.
- UC05 Adicionar/remover serviços.
- UC06 Registrar observações.

# Regras de Negócio
1. Só inicia atendimento para agendamento com check-in válido.
2. Toda mudança de status deve registrar autor e timestamp.
3. Pausa não encerra atendimento; deve acumular tempo parado.
4. Troca de profissional exige motivo e histórico.
5. Serviços adicionados alteram total e split financeiro.
6. Serviços removidos após início exigem justificativa.
7. Conclusão só é permitida com todos serviços finalizados/cancelados.
8. Encaminhamento ao pagamento é automático ao concluir.

# Requisitos Funcionais
- Iniciar, pausar, retomar e concluir atendimento.
- Trocar profissional.
- Adicionar/remover serviços em execução.
- Registrar observações e duração real.
- Encaminhar automaticamente para pagamento.

# Requisitos Não Funcionais
- Auditoria completa.
- Consistência transacional entre itens e status.
- Latência de operação <= 500ms p95.

# Eventos de Domínio
- `ServiceStarted`
- `ServicePaused`
- `ServiceResumed`
- `ServiceCompleted`
- `ProfessionalChanged`
- `ExtraServiceAdded`
- `ServiceRemoved`
- `ServiceOrderReadyForPayment`

# Critérios de Aceite
1. Atendimento só inicia após check-in.
2. Pausa/retomada ajusta duração corretamente.
3. Troca de profissional mantém histórico.
4. Serviços extras impactam total a pagar.
5. Conclusão encaminha para pagamento automaticamente.

# Restrições
- Escopo por unidade.
- Apenas perfis autorizados alteram serviços/profissional.

# Dependências
- Check-in do Cliente.
- Agendamento.
- Pagamento.

# Fora do Escopo
- Prescrição técnica clínica.
