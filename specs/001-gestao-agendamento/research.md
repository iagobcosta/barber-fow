# Research: Gestão de Agendamento

## Decision: Full TypeScript stack with Node/Express API and React/Vite frontend

**Rationale**: O pedido explícito foi por TypeScript, Node, Express e React/Vite. Usar a mesma linguagem no backend e frontend reduz atrito de integração e acelera a construção de painéis staff/cliente.

**Alternatives considered**:
- Next.js ou outro framework full-stack: rejeitado porque a arquitetura solicitada é uma API Node/Express separada e uma interface React/Vite.
- Web mobile-first vs app nativo: rejeitado em favor de um produto web responsivo que atenda mobile e desktop e minimize custo inicial.
- Autoatendimento direto do cliente na primeira versão: rejeitado devido à necessidade de controle staff-operated e confirmação final pela equipe.

## Decision: API internalizada com contratos claros para painéis separados

**Rationale**: A separação entre staff e cliente deve estar implementada como políticas de autorização no backend, não como duplicação de dados.

**Alternatives considered**:
- Backend monolítico sem contratos formais: rejeitado porque o uso de uma API documentada facilita o desenvolvimento paralelo do frontend e futuras integrações.

## Decision: Modelar agendamento com status e ocorrências

**Rationale**: O fluxo de "solicitação como sugestão" exige um estado intermediário de confirmação e histórico auditável para no-show/cancelamento.

**Alternatives considered**:
- Modelo único de agendamento confirmado desde o início: rejeitado por não dar suporte ao staff-only confirmation flow.
- Uso de serviço de calendário externo: rejeitado em favor de uma solução interna de validação de conflito para manter controle total do negócio.
