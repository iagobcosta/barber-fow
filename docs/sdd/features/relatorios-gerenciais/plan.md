# Objetivo Técnico
Implementar camada de analytics operacional com relatórios tabulares e dashboards exportáveis.

# Arquitetura
- Camada de leitura (OLAP leve / views materializadas).
- Consultas parametrizadas por domínio.

# Componentes
- Report Query Service
- KPI Aggregation Service
- Export Service (PDF/Excel)
- Dashboard Service

# APIs
- `GET /v1/reports/revenue`
- `GET /v1/reports/operations`
- `GET /v1/reports/commissions`
- `GET /v1/reports/customers`
- `GET /v1/reports/export`

# Banco de Dados
- `report_snapshots`
- `kpi_daily`
- `report_jobs`
- views materializadas por domínio

# Modelo de Domínio
- Entidades: `ReportRequest`, `KpiSnapshot`
- Políticas: consistência de fonte e segurança de acesso

# Eventos
- `ManagerReportRequested`, `ManagerReportGenerated`, `ManagerReportExported`

# Segurança
- RBAC e mascaramento de dados sensíveis.

# Performance
- Pré-agregação diária e caches por filtro comum.

# Observabilidade
- Métricas de latência, falha e volume de exportação.

# Estratégia de Testes
- Unitários de agregação.
- Integração por relatório.
- E2E de exportação PDF/Excel.

# Estratégia de Deploy
- Habilitar por conjunto de relatórios.

# Riscos Técnicos
- Divergência de métricas entre domínios.

# Critérios de Conclusão
- Relatórios/KPIs/exposição e exportação funcionando.
