# Objetivo

Definir a funcionalidade de Agendamento de Serviços para uma plataforma integrada de Barbearia, Salão de Beleza e Café, garantindo controle de agenda por profissional, prevenção de conflitos, suporte a encaixes, bloqueios de horários, reagendamento e cancelamento com rastreabilidade.

# Contexto

A plataforma atende operações de serviços com duração e execução por profissional. O cliente pode contratar um ou mais serviços em um único agendamento, incluindo:

- Corte
- Barba
- Sobrancelha
- Manicure
- Pedicure
- Massagem
- Consumo no Café

Cada serviço precisa ser alocado em agenda de profissional responsável, respeitando disponibilidade operacional.

# Problema

Sem uma orquestração robusta de agenda:

- ocorrem sobreposições de horários;
- há baixa previsibilidade de operação;
- encaixes são feitos sem governança;
- bloqueios de agenda não são respeitados consistentemente;
- reagendamentos e cancelamentos não têm trilha clara.

# Personas

- Cliente Final: agenda, reagenda e cancela serviços.
- Recepcionista/Atendente: cria e gerencia agendamentos em nome do cliente.
- Profissional: executa serviços e necessita agenda confiável.
- Gestor da Unidade: define políticas (encaixe, bloqueio, cancelamento) e monitora ocupação.

# Fluxo Principal

1. Usuário seleciona unidade, data e horário desejados.
2. Usuário adiciona um ou mais serviços ao carrinho de agendamento.
3. Sistema sugere profissionais elegíveis por serviço.
4. Usuário confirma profissional por serviço (ou aceita sugestão automática).
5. Sistema calcula janela total do agendamento (considerando duração, buffers e sequência de serviços).
6. Sistema valida conflitos em tempo real para todos os profissionais envolvidos.
7. Sistema cria reserva transacional dos slots.
8. Sistema confirma agendamento e gera identificador único.
9. Sistema emite eventos de domínio e dispara notificações.

# Fluxos Alternativos

## A1 - Não há disponibilidade no horário escolhido

- Sistema oferece horários alternativos mais próximos.
- Sistema pode propor divisão do agendamento em janelas diferentes somente se política da unidade permitir.
- Ter uma fila de espera quando não ter um horário disponível.

## A2 - Encaixe solicitado

- Usuário solicita encaixe em horário sem vaga regular.
- Sistema valida política de encaixe da unidade/profissional.
- Se permitido, cria agendamento com flag `is_fit_in=true` e motivo registrado.

## A3 - Bloqueio de horário existente

- Ao detectar bloqueio na agenda, sistema impede confirmação.
- Se usuário tiver permissão de override (perfil autorizado), pode criar encaixe sobre bloqueio com justificativa obrigatória.

## A4 - Reagendamento

- Usuário seleciona novo horário.
- Sistema repete validações de conflito, bloqueio e regras de antecedência.
- Em caso de sucesso, move o agendamento e mantém histórico de alterações.

## A5 - Cancelamento

- Usuário solicita cancelamento.
- Sistema aplica política de janela mínima de cancelamento e eventual cobrança/no-show.
- Agenda é liberada e evento de cancelamento é emitido.

# Casos de Uso

- UC01: Criar agendamento com único serviço.
- UC02: Criar agendamento com múltiplos serviços.
- UC03: Criar agendamento com múltiplos profissionais.
- UC04: Criar agendamento por encaixe.
- UC05: Bloquear horário de profissional/unidade.
- UC06: Reagendar agendamento existente.
- UC07: Cancelar agendamento.
- UC08: Consultar disponibilidade por serviço/profissional.
- UC09: Listar agenda do dia por profissional.
- UC10: Auditar histórico de mudanças de status e horário.

# Regras de Negócio

1. Todo agendamento deve ter pelo menos um serviço.
2. Todo serviço deve ter exatamente um profissional responsável no momento da confirmação.
3. Um profissional não pode possuir sobreposição de serviços em intervalos conflitantes.
4. Conflito é definido por interseção entre `inicio_real` e `fim_real`, incluindo buffers pré e pós-serviço.
5. Um agendamento multi-serviço pode ser:
   - sequencial (serviços em ordem temporal), ou
   - paralelo (serviços no mesmo intervalo, desde que profissionais diferentes e permitido pela unidade).
6. A agenda deve considerar timezone da unidade.
7. Horários bloqueados impedem novos agendamentos, exceto por perfis com permissão de override.
8. Encaixe só pode ser criado quando:
   - política da unidade permitir;
   - profissional estiver marcado como elegível para encaixe;
   - justificativa for informada.
9. Reagendamento mantém o mesmo identificador de agendamento e incrementa versão/histórico.
10. Cancelamento deve registrar motivo e autor (cliente, atendente ou sistema).
11. Status válidos do agendamento: `PENDENTE`, `CONFIRMADO`, `EM_ANDAMENTO`, `CONCLUIDO`, `REAGENDADO`, `CANCELADO`, `NO_SHOW`.
12. Transições de status inválidas devem ser rejeitadas.
13. Operações de criação/reagendamento/cancelamento devem ser idempotentes por chave de requisição.
14. Operações concorrentes sobre o mesmo slot devem usar controle transacional para evitar dupla reserva.
15. Consumo no Café também é tratado como serviço e deve seguir a mesma governança de agenda (duração, profissional/setor, capacidade).
16. Unidade pode definir capacidade simultânea para serviços específicos (ex.: Café, Massagem).
17. Bloqueios podem ser pontuais ou recorrentes; ambos devem ser respeitados nas consultas.
18. Alterações críticas devem gerar trilha de auditoria imutável.

# Requisitos Funcionais

- RF01: Cadastrar agendamento com 1..N serviços.
- RF02: Atribuir profissional por serviço.
- RF03: Consultar disponibilidade por data, serviço, profissional e unidade.
- RF04: Detectar e bloquear conflitos de agenda em tempo real.
- RF05: Permitir criação de encaixe conforme política.
- RF06: Permitir bloqueio de horários (pontual/recorrente) por usuário autorizado.
- RF07: Permitir reagendamento com revalidação total.
- RF08: Permitir cancelamento com aplicação de regras de antecedência e motivo.
- RF09: Manter histórico completo de alterações.
- RF10: Emitir notificações de criação, alteração e cancelamento.
- RF11: Expor agenda diária/semanal por profissional e unidade.
- RF12: Garantir idempotência em operações críticas.

# Requisitos Não Funcionais

- RNF01: Consistência forte na confirmação de slots (sem dupla reserva).
- RNF02: Tempo de resposta de consulta de disponibilidade <= 500 ms p95.
- RNF03: Tempo de resposta de confirmação/reagendamento <= 2 s p95.
- RNF04: Alta observabilidade (logs estruturados, métricas, tracing).
- RNF05: Segurança de acesso por perfil (RBAC) e trilha de auditoria.
- RNF06: Conformidade LGPD para dados pessoais (minimização, finalidade, retenção).
- RNF07: Resiliência a concorrência e reprocessamento (idempotência).
- RNF08: APIs versionadas e documentadas em OpenAPI.

# Eventos de Domínio

- `AppointmentCreated`
- `AppointmentConfirmed`
- `AppointmentRescheduled`
- `AppointmentCancelled`
- `AppointmentNoShowMarked`
- `ScheduleBlocked`
- `ScheduleUnblocked`
- `FitInRequested`
- `FitInApproved`
- `FitInRejected`

Cada evento deve conter: `event_id`, `appointment_id` (quando aplicável), `unit_id`, `occurred_at`, `actor_id`, `actor_role`, `payload_version`.

# Critérios de Aceite

1. Não é possível confirmar dois serviços sobrepostos para o mesmo profissional.
2. Agendamento com múltiplos serviços é confirmado somente se todos os serviços tiverem slot válido.
3. Bloqueio de horário impede agendamento padrão no intervalo bloqueado.
4. Encaixe só é permitido quando política autoriza e justificativa é preenchida.
5. Reagendamento move o agendamento sem perda de histórico.
6. Cancelamento libera agenda e mantém registro de motivo e autor.
7. Em concorrência simultânea para o mesmo slot, apenas uma confirmação é bem-sucedida.
8. Todas as operações críticas geram evento de domínio e log auditável.
9. Consulta de disponibilidade ignora slots já reservados, bloqueados ou indisponíveis por capacidade.
10. Serviço de Café respeita capacidade configurada e profissional/setor responsável.

# Restrições

- Operação multiunidade: agendas não se misturam entre unidades.
- Horário de funcionamento da unidade deve ser respeitado.
- Duração padrão por serviço é parametrizável por unidade.
- Usuários sem permissão não podem criar bloqueios nem override de bloqueio.
- Timezone por unidade é obrigatório e não pode ser herdado implicitamente do cliente.

# Dependências

- Cadastro de serviços e duração.
- Cadastro de profissionais e competências por serviço.
- Cadastro de unidades, horários de funcionamento e timezone.
- Módulo de autenticação/autorização (RBAC).
- Módulo de notificações (e-mail, push, WhatsApp/SMS se existir).
- Infra de mensageria/eventos (quando aplicável).

# Fora do Escopo

- Pagamento online e antifraude.
- Otimização automática avançada de agenda com IA.
- Programa de fidelidade/cashback.
- Gestão de estoque de insumos.
- Prontuário clínico detalhado para serviços de saúde.
