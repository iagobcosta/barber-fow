# Objetivo
Disponibilizar relatórios gerenciais e dashboards para acompanhamento de indicadores do negócio.

# Contexto
Gestão precisa visão consolidada de faturamento, operação, clientes e performance.

# Problema
Sem relatórios consistentes, decisões estratégicas são lentas e imprecisas.

# Personas
- Gestor
- Financeiro
- Operação
- Marketing

# Fluxo Principal
1. Usuário seleciona relatório e filtros.
2. Sistema consolida dados por domínio.
3. Exibe dashboard e tabela detalhada.
4. Permite exportar PDF e Excel.

# Fluxos Alternativos
- Agendamento de relatórios periódicos.
- Exportação assíncrona para grandes volumes.

# Casos de Uso
- UC01 Relatório de faturamento.
- UC02 Relatório de atendimentos/ocupação.
- UC03 Relatório de comissão e profissionais.
- UC04 Relatório de café, fidelidade, no-show, cancelamentos e clientes.

# Regras de Negócio
1. Filtros por período, unidade, profissional, serviço e canal.
2. Indicadores devem usar mesma regra dos módulos de origem.
3. Exportação deve refletir exatamente os filtros aplicados.
4. Dados sensíveis devem respeitar permissão.
5. Fechamentos financeiros só consideram pagamentos confirmados.

# Requisitos Funcionais
- Relatórios: faturamento, atendimentos, ocupação, comissão, serviços, café, fidelidade, clientes, cancelamentos, no-show, profissionais.
- Filtros avançados.
- Exportação PDF e Excel.
- Dashboards com KPIs.

# Requisitos Não Funcionais
- Tempo de geração interativa <= 3s p95 (consultas padrão).
- Escalabilidade para exportações grandes assíncronas.

# Eventos de Domínio
- `ManagerReportRequested`
- `ManagerReportGenerated`
- `ManagerReportExported`

# Critérios de Aceite
1. Todos os relatórios listados disponíveis.
2. Filtros aplicados corretamente.
3. Exportação PDF/Excel consistente com visualização.
4. KPIs aderentes aos dados de origem.

# Restrições
- Permissões por perfil e unidade.

# Dependências
- Pagamento, Atendimento, Estoque, Café, No-show, Fidelidade, Comissão.

# Fora do Escopo
- BI externo self-service completo.
