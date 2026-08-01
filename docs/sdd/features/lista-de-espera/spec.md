# Objetivo
Gerenciar lista de espera para preenchimento automático de vagas liberadas.

# Contexto
Clientes sem horário imediato desejam entrar em fila para oportunidades próximas.

# Problema
Sem lista de espera estruturada, vagas ociosas não são aproveitadas.

# Personas
- Cliente
- Recepção
- Gestor

# Fluxo Principal
1. Cliente entra na lista com serviços e preferências.
2. Sistema prioriza conforme regras.
3. Ao abrir vaga compatível, sistema notifica cliente.
4. Cliente confirma dentro do tempo limite.
5. Sistema cria agendamento automaticamente.

# Fluxos Alternativos
- Desistência do cliente.
- Expiração do tempo limite.
- Múltiplos profissionais elegíveis.

# Casos de Uso
- UC01 Cadastrar em lista.
- UC02 Atualizar prioridade.
- UC03 Preencher vaga automaticamente.
- UC04 Remover por desistência.

# Regras de Negócio
1. Entrada deve registrar serviços desejados e janela de disponibilidade.
2. Prioridade padrão: ordem de entrada, com pesos configuráveis.
3. Confirmação de vaga tem SLA configurável.
4. Sem confirmação no prazo, vaga passa ao próximo da fila.
5. Notificação e tentativas devem ser auditadas.

# Requisitos Funcionais
- Cadastrar fila.
- Priorizar clientes.
- Preencher vagas automaticamente.
- Notificar com prazo.
- Tratar desistência.

# Requisitos Não Funcionais
- Processamento near real-time.
- Idempotência no preenchimento.

# Eventos de Domínio
- `WaitlistJoined`
- `WaitlistPriorityUpdated`
- `VacancyMatched`
- `WaitlistOfferExpired`
- `WaitlistConvertedToBooking`

# Critérios de Aceite
1. Vaga aberta aciona matching automático.
2. Cliente notificado recebe prazo de confirmação.
3. Expiração promove próximo da fila.
4. Conversão gera agendamento válido.

# Restrições
- Escopo por unidade.

# Dependências
- Agendamento.
- Notificações.

# Fora do Escopo
- Leilão de vaga.
