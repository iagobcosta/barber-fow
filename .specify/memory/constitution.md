<!--
Sync Impact Report
- Version change: 0.0.0-template -> 1.0.0
- Modified principles:
  - Template Principle 1 -> I. Agendamento Confiável e Proteção contra No-show
  - Template Principle 2 -> II. Split Financeiro Automático e Auditável
  - Template Principle 3 -> III. Orquestração de Serviços Concorrentes
  - Template Principle 4 -> IV. Retenção Proativa e Fidelização Mensurável
  - Template Principle 5 -> V. Operação Parceiro-First com Transparência de Comissão
- Added sections:
  - Regras Operacionais Obrigatórias
  - Processo de Entrega e Qualidade
- Removed sections: none
- Follow-up TODOs: none
-->
# Nova Barbearia e Salão de Beleza Constitution

## Core Principles

### I. Agendamento Confiável e Proteção contra No-show
O sistema MUST aplicar confirmação ativa de agendamentos críticos e política explícita para faltas e
cancelamentos em cima da hora, incluindo registro de ocorrência por cliente e trilha de decisão
operacional. Horários de pico MUST receber tratamento prioritário para reduzir ociosidade dos
profissionais. Rationale: no-show impacta diretamente faturamento e uso da capacidade.

### II. Split Financeiro Automático e Auditável
Todo pagamento combinado (serviços + consumo) MUST ser consolidado em uma única transação para o
cliente e automaticamente rateado entre comissão do profissional e parcela do estabelecimento, com
memória de cálculo por item e por percentual aplicado. Nenhum repasse MUST depender de cálculo
manual. Rationale: reduz erro financeiro e conflitos de fechamento.

### III. Orquestração de Serviços Concorrentes
Agendamentos com múltiplos serviços e profissionais MUST ser validados contra conflitos de agenda em
tempo de criação/edição, garantindo sequência viável (ou paralelismo explícito) e duração total
consistente. O sistema MUST bloquear confirmação quando existir sobreposição inválida. Rationale:
evita promessas inviáveis e atrasos em cascata.

### IV. Retenção Proativa e Fidelização Mensurável
A plataforma MUST suportar regras de fidelidade configuráveis (ex.: a cada X serviços, Y benefício)
com rastreabilidade de saldo, resgates e validade. Também MUST disparar lembretes automáticos de
retorno com base em janela de recorrência por perfil de serviço. Rationale: retenção contínua é
objetivo de negócio central.

### V. Operação Parceiro-First com Transparência de Comissão
Todas as funcionalidades operacionais MUST preservar autonomia dos 8 profissionais parceiros no uso
de agenda e serviços, mantendo visibilidade clara da comissão de cada atendimento e do status de
repasse. Mudanças de regra de comissão MUST ser versionadas e aplicadas sem retroagir lançamentos
já fechados. Rationale: previsibilidade e confiança sustentam o modelo de parceria.

## Regras Operacionais Obrigatórias

- O fluxo de atendimento MUST suportar clientes agendados e por ordem de chegada sem quebrar o
  controle de disponibilidade em tempo real.
- Cada serviço MUST possuir duração, profissional elegível e impacto no cálculo de comissão.
- Cancelamentos e no-show MUST manter histórico para uso em políticas comerciais e priorização de
  agenda.
- O fechamento diário MUST permitir conciliação entre total cobrado, total do bar/café e total de
  comissões.

## Processo de Entrega e Qualidade

- Toda mudança de domínio (agendamento, pagamento/split, fidelidade, lembretes, comissão) MUST
  incluir critérios de aceitação rastreáveis ao princípio afetado desta constituição.
- Toda entrega MUST validar cenários de pico (sexta/sábado), incluindo no-show e conflitos de
  múltiplos serviços.
- Fluxos críticos MUST ser cobertos por testes automatizados de integração antes de liberação.
- Incidentes em produção MUST gerar ajuste de regra, teste de regressão e evidência de conformidade
  com esta constituição.

## Governance

Esta constituição prevalece sobre convenções locais de implementação para este projeto. Toda
proposta de alteração MUST incluir: motivação de negócio, impacto nos princípios, estratégia de
migração e atualização de artefatos dependentes. Revisões de conformidade MUST ocorrer em cada
entrega relevante de produto, registrando desvios e plano corretivo.

A política de versionamento desta constituição segue SemVer:
- MAJOR: remoção ou redefinição incompatível de princípio/governança.
- MINOR: adição de princípio/seção ou expansão material de regras.
- PATCH: clarificações sem mudança de comportamento normativo.

**Version**: 1.0.0 | **Ratified**: 2026-08-06 | **Last Amended**: 2026-08-06
