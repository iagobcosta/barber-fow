# Objetivo
Orquestrar notificações automáticas multicanal para eventos de negócio, com templates, recorrência, opt-in e conformidade LGPD.

# Contexto
A operação exige comunicação ativa de confirmação, lembrete, aniversário, retorno sugerido, promoção, cancelamento e fila.

# Problema
Sem centralização de notificações há baixa entrega, inconsistência de mensagens e risco regulatório.

# Personas
- Cliente
- Marketing
- Operação
- Gestor

# Fluxo Principal
1. Evento de domínio é publicado.
2. Motor de notificações resolve template/canal/consentimento.
3. Mensagem é agendada ou enviada imediatamente.
4. Sistema acompanha entrega e tentativas.
5. Resultado é persistido para auditoria.

# Fluxos Alternativos
- Falha de canal primário com fallback.
- Opt-out de canal.
- Mensagens recorrentes (ex.: lembretes).

# Casos de Uso
- UC01 Enviar confirmação.
- UC02 Enviar lembrete.
- UC03 Enviar promoção.
- UC04 Notificar vaga de lista de espera.

# Regras de Negócio
1. Envio depende de opt-in válido por canal/finalidade.
2. Templates são versionados e aprovados.
3. Recorrência respeita janelas silenciosas.
4. Fallback entre canais é configurável.
5. Histórico deve registrar conteúdo, status e provider.
6. Cancelamento de agendamento deve disparar notificação imediata.

# Requisitos Funcionais
- Disparos automáticos por evento.
- Agendamento/recorrência.
- Gestão de templates.
- Gestão de consentimento.
- Multi-canal: WhatsApp, SMS, E-mail, Push.

# Requisitos Não Funcionais
- Alta entregabilidade e observabilidade.
- Conformidade LGPD.

# Eventos de Domínio
- `NotificationRequested`
- `NotificationDispatched`
- `NotificationDelivered`
- `NotificationFailed`
- `NotificationOptInUpdated`

# Critérios de Aceite
1. Eventos corretos geram notificações corretas.
2. Sem opt-in, mensagem não é enviada.
3. Falha de canal aciona fallback configurado.
4. Histórico mostra status fim a fim.

# Restrições
- Políticas anti-spam e horário local.

# Dependências
- Agendamento, Lista de Espera, Marketing, Check-in.

# Fora do Escopo
- Criação de conteúdo publicitário por IA.
