# React + TypeScript + Vite

🎨 Interface Moderna e Responsiva

Design clean com gradientes e cards modernos
Responsivo para desktop, tablet e mobile
Ícones do Lucide React para melhor UX
Animações suaves e loading states

🔧 Funcionalidades Implementadas

Criação de Transações: Formulário com validação de valor e timestamp
Visualização de Estatísticas: Cards com métricas dos últimos 60 segundos
Exclusão de Transações: Botão para limpar todas as transações
Auto-refresh: Atualização automática das estatísticas a cada 5 segundos

📊 Estatísticas Exibidas

Total de transações
Soma total (formatada em BRL)
Média dos valores
Menor valor
Maior valor

🛠 Estrutura Técnica

Fetch API nativa (não precisa do axios para esta implementação)
TypeScript com tipagem completa
Estado gerenciado com hooks (useState, useEffect)
Tratamento de erros robusto
Validações client-side

# Estrutura do Projeto
src/
├── components/
│   ├── UI/
│   │   ├── StatCard.tsx
│   │   └── Alert.tsx
│   ├── Forms/
│   │   └── TransactionForm.tsx
│   ├── Statistics/
│   │   └── StatisticsGrid.tsx
│   ├── Actions/
│   │   └── ActionsPanel.tsx
│   └── Layout/
│       ├── Header.tsx
│       └── Footer.tsx
├── hooks/
│   └── useTransactions.ts
├── pages/
│   └── TransactionsPage.tsx
├── services/
│   └── api.ts
├── types/
│   └── index.ts
└── App.tsx
