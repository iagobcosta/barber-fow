# Objetivo
Apurar e disponibilizar comissões de profissionais por dia, semana, mês e período customizado.

# Contexto
Comissão deriva dos serviços executados e regras de split, podendo ter ajustes posteriores.

# Problema
Sem apuração confiável há conflito de pagamento e baixa transparência para profissionais e gestão.

# Personas
- Profissional
- Gestor
- Financeiro

# Fluxo Principal
1. Sistema consolida serviços concluídos e pagos.
2. Calcula comissão por regra vigente.
3. Apresenta visão diária/semanal/mensal/período.
4. Permite ajustes auditáveis quando autorizado.
5. Disponibiliza exportação.

# Fluxos Alternativos
- Ajuste manual positivo/negativo.
- Reprocessamento por estorno/cancelamento retroativo.

# Casos de Uso
- UC01 Consultar comissão por período.
- UC02 Filtrar por unidade/profissional/serviço.
- UC03 Registrar ajuste.
- UC04 Exportar relatório.

# Regras de Negócio
1. Só serviços pagos entram no cálculo padrão.
2. Ajustes manuais exigem motivo e aprovador.
3. Estornos reduzem comissão no período vigente de processamento.
4. Histórico deve guardar valor bruto, ajustes e líquido.
5. Filtros devem respeitar escopo e permissões.

# Requisitos Funcionais
- Cálculo diário/semanal/mensal/período.
- Filtros avançados.
- Histórico detalhado.
- Ajustes.
- Exportação.

# Requisitos Não Funcionais
- Performance em consultas agregadas.
- Rastreabilidade e auditabilidade.

# Eventos de Domínio
- `CommissionCalculated`
- `CommissionAdjusted`
- `CommissionExportRequested`

# Critérios de Aceite
1. Apuração por período retorna valores corretos.
2. Ajustes impactam total líquido com trilha de auditoria.
3. Exportação reflete mesmos filtros da tela.

# Restrições
- Acesso restrito por perfil.

# Dependências
- Split Financeiro.
- Pagamento.

# Fora do Escopo
- Folha trabalhista.
