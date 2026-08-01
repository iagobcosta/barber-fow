# Objetivo
Controlar estoque de produtos de serviços e café, cobrindo entradas, saídas, perdas, validade, fornecedores, inventário e compras.

# Contexto
Produtos são consumidos em atendimentos e vendidos no café, exigindo baixa automática e governança de reposição.

# Problema
Sem controle central há ruptura, desperdício e erro de custo.

# Personas
- Estoquista
- Compras
- Operação
- Gestor

# Fluxo Principal
1. Registrar entradas de compra.
2. Registrar saídas por consumo/venda.
3. Registrar perdas e ajustes.
4. Monitorar validade e nível mínimo.
5. Executar inventário e correções.

# Fluxos Alternativos
- Baixa automática por atendimento/consumo.
- Recebimento parcial de compra.
- Ajuste pós-inventário.

# Casos de Uso
- UC01 Lançar entrada.
- UC02 Lançar saída.
- UC03 Registrar perda.
- UC04 Realizar inventário.
- UC05 Gerenciar fornecedores.

# Regras de Negócio
1. Estoque não pode ser negativo.
2. Toda movimentação exige origem e responsável.
3. Produtos com validade vencida não podem ser consumidos/vendidos.
4. Baixa automática deve respeitar ficha técnica/BOM.
5. Inventário gera ajuste auditável.
6. Compras atualizam custo médio conforme política.

# Requisitos Funcionais
- Controlar entradas, saídas e perdas.
- Controlar validade.
- Controlar fornecedores e compras.
- Baixa automática.
- Inventário.

# Requisitos Não Funcionais
- Consistência de saldo em tempo real.
- Rastreabilidade de lote e validade.

# Eventos de Domínio
- `StockEntryRegistered`
- `StockExitRegistered`
- `StockLossRegistered`
- `StockAdjustedByInventory`
- `StockBelowMinimumDetected`

# Critérios de Aceite
1. Entradas/saídas alteram saldo corretamente.
2. Baixa automática ocorre em atendimento e café.
3. Inventário ajusta divergências com histórico.
4. Validade vencida bloqueia consumo/venda.

# Restrições
- Controle por unidade e local de armazenagem.

# Dependências
- Atendimento.
- Consumo do Café.
- Compras.

# Fora do Escopo
- Planejamento avançado MRP.
