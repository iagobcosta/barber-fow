# Objetivo
Padronizar o check-in presencial na recepção, conectando chegada do cliente ao agendamento, fila de espera e início operacional do atendimento.

# Contexto
O sistema já possui agendamento de serviços. No momento da chegada, a recepção precisa confirmar presença, registrar horário real e sinalizar o profissional.

# Problema
Sem check-in estruturado há atraso não controlado, baixa previsibilidade de fila, falhas de comunicação e perda de capacidade.

# Personas
- Recepcionista
- Cliente
- Profissional
- Gestor da unidade

# Fluxo Principal
1. Recepção busca cliente/telefone/agendamento do dia.
2. Sistema localiza agendamento elegível da unidade.
3. Recepção confirma presença.
4. Sistema registra horário de chegada.
5. Sistema altera status do agendamento para `CHECKED_IN`.
6. Sistema notifica profissional responsável.

# Fluxos Alternativos
- Cliente sem agendamento: inclusão em fila de espera com ordem de chegada.
- Cliente sem cadastro: cadastro rápido mínimo + check-in/fila.
- Cliente adiantado: check-in permitido, status `AGUARDANDO_JANELA`.
- Cliente atrasado: política de tolerância (manter, encaixe, remarcação ou no-show).
- Múltiplos atendimentos no dia: selecionar qual agendamento será vinculado ao check-in.

# Casos de Uso
- UC01 Confirmar check-in de agendamento do dia.
- UC02 Registrar cliente avulso na fila.
- UC03 Tratar atraso acima da tolerância.
- UC04 Notificar profissional e atualizar painel de fila.

# Regras de Negócio
1. Check-in só pode ocorrer na data da unidade e dentro da janela configurada.
2. Um agendamento não pode receber check-in duplicado.
3. Horário de chegada é imutável; correções devem gerar auditoria.
4. Cliente sem cadastro exige identificação mínima (nome + contato).
5. Ordem de chegada usa timestamp de check-in/fila.
6. Atendimento por ordem de chegada só se não houver conflito com agenda confirmada.
7. Clientes atrasados seguem regra por serviço/unidade (tolerância em minutos).
8. Notificação ao profissional é obrigatória.

# Requisitos Funcionais
- Localizar agendamento do dia.
- Confirmar presença e registrar chegada.
- Alterar status de agendamento.
- Gerenciar fila de espera por ordem de chegada.
- Registrar cliente sem cadastro.
- Notificar profissional.

# Requisitos Não Funcionais
- Resposta da busca <= 300ms p95.
- Rastreabilidade completa (auditoria).
- Controle de acesso por perfil (recepção/gestão).
- Conformidade LGPD.

# Eventos de Domínio
- `ClientCheckedIn`
- `WalkInQueued`
- `LateArrivalDetected`
- `ProfessionalNotified`

# Critérios de Aceite
1. Check-in atualiza status e registra horário.
2. Cliente sem agendamento entra na fila corretamente.
3. Cliente sem cadastro pode ser atendido com cadastro mínimo.
4. Cliente atrasado recebe tratamento conforme política.
5. Profissional é notificado para todo check-in válido.

# Restrições
- Escopo por unidade (sem cross-unit).
- Timezone da unidade obrigatório.

# Dependências
- Feature de Agendamento.
- Módulo de Notificações.
- Cadastro de Clientes.

# Fora do Escopo
- Auto check-in por app do cliente.
- Reconhecimento facial.
