# 🚀 Guia de Setup - EndoVitta MVP

## ✅ Projeto Completo

O projeto EndoVitta MVP foi totalmente desenvolvido com todas as funcionalidades solicitadas.

## 📦 Dependências Instaladas

```json
{
  "dependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-router-dom": "^6.20.0",
    "recharts": "^2.10.3",
    "lucide-react": "^0.294.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.1",
    "postcss": "^8.4.32",
    "autoprefixer": "^10.4.16",
    "typescript": "~5.9.3",
    "vite": "^7.2.2",
    "@vitejs/plugin-react-swc": "^4.2.1"
  }
}
```

## 🎯 Próximos Passos

### 1. Instalar Dependências
```bash
npm install
```

### 2. Iniciar Servidor de Desenvolvimento
```bash
npm run dev
```

O aplicativo estará disponível em: **http://localhost:5173**

### 3. Fluxo de Teste Recomendado

1. **Landing Page** (`/`)
   - Visualize a apresentação do app
   - Clique em "Começar Agora"

2. **Onboarding** (`/onboarding`)
   - Preencha os 4 passos do formulário
   - Observe a barra de progresso
   - Clique em "Concluir"

3. **Dashboard** (`/dashboard`)
   - Veja o perfil de risco
   - Visualize o gráfico de evolução
   - Clique em "Registrar Sintomas"

4. **Symptom Log** (`/symptom-log`)
   - Ajuste o slider de dor
   - Selecione localização da dor
   - Escolha seu humor
   - Selecione sintomas
   - Adicione notas
   - Clique em "Salvar Registro"

5. **History** (`/history`)
   - Filtre por período (semana/mês/3 meses)
   - Visualize estatísticas
   - Veja gráfico de evolução
   - Confira distribuição de humor

6. **Education** (`/education`)
   - Clique em qualquer card
   - Leia o conteúdo no modal
   - Feche o modal

7. **Profile** (`/profile`)
   - Visualize seus dados
   - Clique em "Editar" para modificar
   - Veja os planos disponíveis
   - Clique em "Sair da Conta"

## 📁 Arquivos Criados

### Componentes (7 arquivos)
- ✅ `components/common/Button.tsx` - Botão reutilizável
- ✅ `components/common/Card.tsx` - Card reutilizável
- ✅ `components/common/Modal.tsx` - Modal com overlay
- ✅ `components/common/ProgressBar.tsx` - Barra de progresso
- ✅ `components/common/Badge.tsx` - Badge de status
- ✅ `components/layout/Header.tsx` - Header com navegação

### Páginas (7 arquivos)
- ✅ `pages/Landing.tsx` - Landing page
- ✅ `pages/Onboarding.tsx` - Formulário multi-etapa
- ✅ `pages/Dashboard.tsx` - Dashboard principal
- ✅ `pages/SymptomLog.tsx` - Registro de sintomas
- ✅ `pages/History.tsx` - Histórico e evolução
- ✅ `pages/Education.tsx` - Centro educacional
- ✅ `pages/Profile.tsx` - Perfil da usuária

### Contextos e Utilitários
- ✅ `contexts/AppContext.tsx` - Context API para estado global
- ✅ `utils/storage.ts` - Funções de localStorage
- ✅ `data/mockData.ts` - Dados mockados

### Configuração
- ✅ `App.tsx` - Routing principal
- ✅ `tailwind.config.js` - Configuração Tailwind
- ✅ `postcss.config.js` - Configuração PostCSS
- ✅ `index.css` - Estilos globais

## 🎨 Funcionalidades Implementadas

### ✅ Landing Page
- Hero section acolhedor
- 6 cards de benefícios
- Seção sobre endometriose
- CTA para começar

### ✅ Onboarding Multi-etapa
- Etapa 1: Dados básicos
- Etapa 2: Histórico ginecológico
- Etapa 3: Sintomas principais
- Etapa 4: Hábitos de vida
- Barra de progresso visual
- Validação de campos

### ✅ Dashboard
- Perfil de risco (baixo/médio/alto)
- Próximo registro de sintomas
- Dica do dia aleatória
- Gráfico de evolução (últimos 7 dias)
- 3 botões de ação rápida

### ✅ Registro de Sintomas
- Slider de dor (0-10) com feedback visual
- Seletor de localização (6 opções)
- Seletor de humor (4 emojis)
- Toggle de sintomas comuns (6 opções)
- Campo de notas livres
- Feedback de sucesso

### ✅ Histórico e Evolução
- Filtros por período (semana/mês/3 meses)
- 4 cards de estatísticas
- Gráfico de linha interativo
- Distribuição de humor
- Lista de registros recentes

### ✅ Centro Educacional
- 6 cards educacionais
- Modal com conteúdo detalhado
- Temas: endometriose, alimentação, exercícios, dor, saúde mental, quando procurar ajuda

### ✅ Perfil da Usuária
- Visualização de dados
- Edição de informações
- 3 planos (Básico/Completo/Premium)
- Logout com limpeza de dados

## 💾 Persistência de Dados

Todos os dados são salvos automaticamente no localStorage:
- `endovitta_user` - Dados do usuário
- `endovitta_logs` - Registros de sintomas

Os dados persistem entre sessões até fazer logout.

## 🎨 Design System

### Paleta de Cores
- Primária: `#E8B4B8` (rosa suave)
- Secundária: `#5B8C85` (verde água)
- Acento: `#F4A261` (laranja suave)
- Alerta: `#E76F51` (vermelho suave)
- Fundo: `#FAF9F6` (off-white)
- Texto: `#2C3E50` (cinza escuro)

### Tipografia
- Headings: Poppins (bold)
- Body: Open Sans (regular)

## 📱 Responsividade

- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)

## 🔧 Comandos Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Lint
npm run lint
```

## 📊 Dados de Demonstração

O app vem com dados mockados:
- 7 dias de histórico de sintomas
- 6 conteúdos educacionais
- 8 dicas diárias
- 6 sintomas comuns

## 🚀 Pronto para Usar!

O projeto está **100% completo** e pronto para:
1. ✅ Demonstração
2. ✅ Prototipagem
3. ✅ Validação de UX/UI
4. ✅ Expansão futura

Basta executar `npm install` e `npm run dev` para começar!

---

**Desenvolvido com 💜 para mulheres com endometriose**
