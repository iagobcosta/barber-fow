# Implementation Plan: Gestão de Agendamento

**Branch**: `[001-gestao-agendamento]` | **Date**: 2026-08-06 | **Spec**: `/specs/001-gestao-agendamento/spec.md`

**Input**: Feature specification from `/specs/001-gestao-agendamento/spec.md`

## Summary

Construir a primeira versão de um produto web de agendamento com agenda operacional interna, usando TypeScript em toda a pilha.
O backend será uma API Node.js/Express que valida conflitos, registra no-shows/cancelamentos e preserva dados de comissão.
O frontend será React com Vite e layout mobile-first, fornecendo painéis distintos para staff e para o cliente sugerido.

## Technical Context

**Language/Version**: TypeScript 5.x no backend e frontend

**Primary Dependencies**: Node.js, Express, React, Vite, Prisma (opcional para modelagem de dados), Zod ou Joi para validação de esquema

**Storage**: PostgreSQL em produção, SQLite ou um banco em memória para desenvolvimento local

**Testing**: Jest/Vitest para backend, Vitest/Playwright para frontend e contratos de API

**Target Platform**: Web application com suporte responsivo para dispositivos mobile e desktop

**Project Type**: Web application (backend + frontend)

**Performance Goals**: API de agendamento com p95 <200ms para consultas de disponibilidade, UI de confirmação reativa em <100ms para ações de staff no navegador

**Constraints**: mobile-first e web responsivo; separação clara de painéis staff x cliente; fluxo inicial sem autoatendimento direto do cliente final.

**Scale/Scope**: Unidade presencial única com 8 profissionais parceiros, suporte a dezenas de atendimentos diários e histórico de ocorrências para fidelização e regras comerciais.

## Constitution Check

- **Principle I**: implementação mantém confirmação ativa de agendamentos críticos e rastreabilidade de no-show/cancelamento.
- **Principle II**: esta fase preserva dados de comissão por item de serviço; o cálculo de repasse automático fica fora do escopo de agendamento inicial.
- **Out of Scope**: processamento de pagamentos e cálculo/rateio de comissões auditáveis são tratados por integração financeira separada, não neste recurso.
- **Principle III**: o design exige validação de conflitos em tempo de criação/edição e bloqueio de confirmações inválidas.
- **Principle IV**: o modelo de dados inclui histórico de ocorrências e base para regra de retorno/recompensa.
- **Principle V**: painéis distintos e confirmação final pela equipe mantêm a autonomia dos profissionais e transparência da operação.

## Project Structure

```text
backend/
├── src/
│   ├── api/
│   ├── domain/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── types/
└── tests/

frontend/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── services/
│   ├── stores/
│   └── styles/
└── tests/

specs/001-gestao-agendamento/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── appointment-api.md
└── spec.md
```

**Structure Decision**: selecionar a opção de aplicação web com backend Node/Express e frontend React/Vite para suportar painéis separados e máxima flexibilidade responsiva.

## Complexity Tracking

Nenhuma violação de constituição exigiu exceção. O design mantém o escopo dentro de um único produto web interno, com futuras integrações financeiras e de fidelidade planejadas como extensões.
