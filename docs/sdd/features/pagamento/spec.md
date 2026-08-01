# Objetivo
Consolidar serviços e consumo em pagamento único, com descontos/acréscimos, múltiplos meios e registro de caixa.

# Contexto
Após conclusão do atendimento, cliente realiza uma quitação única contemplando todos os itens.

# Problema
Sem consolidação robusta, há divergência de caixa, erro de comissão e baixa confiabilidade financeira.

# Personas
- Cliente
- Recepção/Caixa
- Gestor financeiro

# Fluxo Principal
1. Sistema consolida itens elegíveis (serviços + café).
2. Operador aplica descontos/acréscimos conforme política.
3. Operador define meios de pagamento (único ou misto).
4. Sistema autoriza/valida transações.
5. Sistema confirma pagamento, emite comprovante e registra no caixa.

# Fluxos Alternativos
- Falha em autorização de cartão/PIX.
- Pagamento parcial/misto.
- Troca de forma durante a operação.
- Estorno após confirmação.

# Casos de Uso
- UC01 Fechar conta consolidada.
- UC02 Aplicar desconto/acréscimo.
- UC03 Registrar pagamento misto.
- UC04 Emitir comprovante.
- UC05 Registrar estorno.

# Regras de Negócio
1. Não pode haver pagamento com total negativo.
2. Desconto máximo por perfil/configuração.
3. Acréscimos devem ter motivo.
4. Soma dos meios de pagamento deve igualar total final.
5. Comprovante é obrigatório para pagamento confirmado.
6. Registro de caixa deve ser atômico com confirmação.
7. Estorno deve manter vínculo ao pagamento original.
8. Métodos suportados: PIX, crédito, débito, dinheiro e misto.

# Requisitos Funcionais
- Consolidar itens.
- Calcular descontos e acréscimos.
- Aceitar múltiplos meios.
- Emitir comprovante.
- Registrar lançamento no caixa.

# Requisitos Não Funcionais
- Integridade financeira forte.
- Rastreabilidade fiscal e operacional.
- Operação <= 1s p95 (sem gateway externo).

# Eventos de Domínio
- `BillingConsolidated`
- `PaymentAuthorized`
- `PaymentConfirmed`
- `PaymentFailed`
- `ReceiptIssued`
- `CashRegisterEntryCreated`
- `PaymentRefunded`

# Critérios de Aceite
1. Total final considera itens + descontos + acréscimos corretamente.
2. Pagamento misto fecha somente quando soma confere.
3. Comprovante é emitido em pagamento confirmado.
4. Caixa registra lançamento no mesmo fluxo.

# Restrições
- Operação por unidade/caixa aberto.
- Permissão para descontos especiais.

# Dependências
- Atendimento.
- Consumo do Café.
- Caixa.

# Fora do Escopo
- Conciliação bancária automática.
