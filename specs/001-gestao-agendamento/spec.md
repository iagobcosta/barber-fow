# Feature Specification: Gestão de Agendamento

**Feature Branch**: `[001-gestao-agendamento]`

**Created**: 2026-08-06

**Status**: Draft

**Input**: User description: "Agendamento"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Agendar serviços sem conflito (Priority: P1)

Como cliente, quero marcar um ou mais serviços no mesmo dia para sair com meu atendimento
organizado, sem colisões de horário entre profissionais.

**Why this priority**: É o fluxo principal de geração de receita e base para operação diária.

**Independent Test**: Pode ser testado criando uma reserva com corte + barba + manicure em uma
única jornada e validando que todos os horários são viáveis.

**Acceptance Scenarios**:

1. **Given** um cliente com serviços selecionados e horários disponíveis, **When** ele confirma o
   agendamento, **Then** o sistema cria uma agenda sem sobreposição inválida entre profissionais.
2. **Given** um cliente tentando combinar serviços em horários incompatíveis, **When** ele tenta
   confirmar, **Then** o sistema bloqueia a confirmação e oferece alternativas de horário viáveis.

---

### User Story 2 - Reduzir impacto de no-show em horários críticos (Priority: P2)

Como gerente, quero controlar faltas e cancelamentos em cima da hora para reduzir ociosidade dos
profissionais e perda de faturamento em dias de pico.

**Why this priority**: Protege capacidade e resultado financeiro da operação.

**Independent Test**: Pode ser testado registrando cancelamento tardio e falta em horários de
pico e verificando aplicação das regras e rastreabilidade de ocorrências.

**Acceptance Scenarios**:

1. **Given** um agendamento em horário de pico, **When** o cliente cancela em cima da hora ou não
   comparece, **Then** o evento é registrado com classificação de no-show/cancelamento tardio e
   histórico do cliente é atualizado.
2. **Given** um cliente com recorrência de no-show, **When** ele tenta novo agendamento em horário
   crítico, **Then** o sistema aplica as regras comerciais definidas para esse perfil.

---

### User Story 3 - Operar atendimento híbrido (agendado + chegada) (Priority: P3)

Como recepcionista, quero encaixar clientes por ordem de chegada sem perder o controle da agenda já
reservada para manter fluidez da operação.

**Why this priority**: Aumenta ocupação e melhora experiência sem quebrar compromissos já marcados.

**Independent Test**: Pode ser testado inserindo clientes de chegada no meio da operação e
validando que o atendimento agendado mantém prioridade e horários respeitados.

**Acceptance Scenarios**:

1. **Given** uma agenda ativa com reservas futuras, **When** um cliente chega sem agendamento,
   **Then** o sistema sugere janelas de encaixe sem comprometer os horários já confirmados.

---

### Edge Cases

- O que acontece quando um profissional fica indisponível após já possuir agenda confirmada?
- Como o sistema reage quando um cliente solicita múltiplos serviços sem janela contínua disponível?
- O que ocorre quando dois atendentes tentam reservar simultaneamente o mesmo horário?
- Como o fluxo trata atraso do cliente que inviabiliza a cadeia de serviços planejada?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: O sistema MUST permitir criação de agendamentos para um único serviço com
  profissional, data e horário definidos.
- **FR-002**: O sistema MUST permitir agendamentos com múltiplos serviços no mesmo dia para o mesmo
  cliente, validando sequência viável dos atendimentos.
- **FR-003**: O sistema MUST bloquear confirmação de qualquer agendamento que gere sobreposição
  inválida para um profissional.
- **FR-004**: O sistema MUST sugerir horários alternativos quando a combinação solicitada não for
  viável.
- **FR-005**: O sistema MUST suportar atendimento por ordem de chegada com sugestão de encaixe sem
  quebrar compromissos agendados.
- **FR-006**: O sistema MUST registrar cancelamentos e no-show com data, horário e responsável pelo
  registro.
- **FR-007**: O sistema MUST manter histórico de ocorrências de no-show/cancelamento por cliente
  para aplicação de políticas comerciais.
- **FR-008**: O sistema MUST classificar automaticamente horários críticos (ex.: sexta e sábado) e
  aplicar regras prioritárias de confirmação e controle.
- **FR-009**: Usuários operacionais MUST ser capazes de remarcar agendamentos mantendo validações de
  conflito e histórico de alterações.
- **FR-010**: O sistema MUST disponibilizar visão diária consolidada da ocupação por profissional e
  por tipo de atendimento (agendado/chegada).

### Key Entities *(include if feature involves data)*

- **Agendamento**: Reserva de atendimento contendo cliente, serviços, janela de horário, status e
  origem (agendado ou chegada).
- **Serviço**: Item atendível com duração prevista, elegibilidade de profissionais e prioridade
  operacional.
- **Profissional**: Parceiro apto a executar serviços, com agenda diária e estado de
  disponibilidade.
- **Ocorrência de Presença**: Registro de cancelamento, no-show, atraso ou remarcação associado a
  um agendamento e cliente.
- **Janela de Agenda**: Bloco de tempo disponível/ocupado usado para validação de conflitos e
  sugestões de encaixe.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Pelo menos 95% dos agendamentos simples são concluídos pelos atendentes em até
  2 minutos.
- **SC-002**: Pelo menos 90% dos agendamentos com múltiplos serviços são confirmados sem retrabalho
  manual de horários.
- **SC-003**: Redução mínima de 30% na ociosidade em horários críticos em até 90 dias após adoção
  do fluxo.
- **SC-004**: Pelo menos 95% dos eventos de no-show e cancelamento tardio ficam registrados com
  rastreabilidade completa no mesmo dia da ocorrência.
- **SC-005**: Taxa de conflitos de agenda detectados após confirmação fica abaixo de 1% por mês.

## Assumptions

- O escopo desta feature cobre a operação presencial da unidade única da barbearia/salão.
- A feature será usada por recepção/gerência e não inclui autoagendamento direto pelo cliente final
  nesta primeira versão.
- Os 8 profissionais parceiros já possuem cadastro ativo e elegibilidade básica de serviços.
- Regras comerciais detalhadas para penalidade de no-show serão parametrizadas pela gerência no
  processo operacional vigente.
