# Quickstart: Gestão de Agendamento

## Prerequisites

- Node.js 20.x ou superior
- npm 10.x ou superior
- PostgreSQL para ambiente de produção; SQLite aceitável para desenvolvimento local
- Git para clonar o repositório

## Setup

1. Clone o repositório e acesse o diretório do projeto:

```bash
git clone <repo-url>
cd barber-fow
```

2. Instale as dependências do backend e frontend:

```bash
cd backend
npm install
cd ../frontend
npm install
```

3. Crie um `.env` para o backend com variáveis mínimas:

```text
DATABASE_URL=postgresql://user:password@localhost:5432/barber
PORT=4000
```

4. Inicie o backend e o frontend em modo de desenvolvimento:

```bash
cd backend
npm run dev
```

Em outra aba:

```bash
cd frontend
npm run dev
```

## Validation scenarios

- **Criar sugestão de agendamento**: use o painel de cliente para enviar uma solicitação de horário e verifique se ela aparece como sugestão no painel de staff.
- **Confirmar agenda**: no painel de staff, confirme a sugestão e valide que a reserva é marcada como `confirmed` e passa a fazer parte da ocupação diária.
- **Registrar no-show/cancelamento tardio**: registre um evento de `no_show` ou `cancelamento_tardio` e verifique a atualização do histórico do cliente.
- **Validar conflito**: tente confirmar dois serviços que causam sobreposição para o mesmo profissional e confirme que o backend bloqueia a confirmação.
- **Ver painel de ocupação**: abra a visão diária e confirme que a ocupação é consolidada por profissional e por tipo de atendimento (`agendado` / `chegada`).

## Notes

- A separação de painéis staff x cliente deve ser feita por rotas distintas e por autorização no backend.
- As chamadas da UI devem seguir os contratos definidos em `contracts/appointment-api.md`.
