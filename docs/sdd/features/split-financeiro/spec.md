# Objetivo
Dividir automaticamente os valores recebidos entre profissionais e estabelecimento após pagamento confirmado.

# Contexto
Serviços possuem comissões variáveis por profissional e regras específicas por unidade.

# Problema
Sem split automático há erro de repasse, baixa confiança da equipe e retrabalho financeiro.

# Personas
- Gestor financeiro
- Profissionais
- Operador de caixa

# Fluxo Principal
1. Pagamento é confirmado.
2. Sistema carrega itens pagos e regras de comissão vigentes.
3. Calcula parcela de cada profissional e da casa.
4. Registra lançamentos de repasse e histórico.
5. Disponibiliza extrato por atendimento/pagamento.

# Fluxos Alternativos
- Desconto rateado proporcional.
- Desconto absorvido pela casa (configurável).
- Cancelamento/estorno parcial com recálculo.
- Vários profissionais no mesmo serviço.

# Casos de Uso
- UC01 Calcular split por pagamento.
- UC02 Recalcular split após estorno.
- UC03 Registrar repasse manual/automático.
- UC04 Consultar histórico de split.

# Regras de Negócio
1. Split só ocorre para pagamento confirmado.
2. Percentual de comissão pode variar por serviço e profissional.
3. A soma das parcelas deve fechar o total líquido.
4. Descontos e acréscimos devem seguir política de rateio configurada.
5. Estornos devem gerar ajuste inverso no split.
6. Histórico deve manter versão da regra utilizada no cálculo.
7. Não permitir comissão negativa.

# Requisitos Funcionais
- Calcular comissão.
- Calcular parte do estabelecimento.
- Registrar repasse.
- Registrar histórico e recálculo.
- Suportar regras por profissional.

# Requisitos Não Funcionais
- Precisão monetária (decimal fixo).
- Rastreabilidade contábil completa.
- Reprocessamento idempotente.

# Eventos de Domínio
- `FinancialSplitCalculated`
- `ProfessionalCommissionCalculated`
- `EstablishmentShareCalculated`
- `SplitAdjustedAfterRefund`
- `RepasseRegistered`

# Critérios de Aceite
1. Split fecha total líquido pago.
2. Regras por serviço/profissional são respeitadas.
3. Estorno ajusta split automaticamente.
4. Histórico exibe cálculo e regra aplicada.

# Restrições
- Configuração de regra por vigência.
- Escopo por unidade.

# Dependências
- Pagamento.
- Cadastro de Serviços/Profissionais.

# Fora do Escopo
- Folha de pagamento completa.
