# 💜 EndoVitta - MVP Aplicativo de Monitoramento de Endometriose

Um protótipo visual e interativo do aplicativo EndoVitta para demonstração do conceito e validação da experiência do usuário no monitoramento da endometriose.

## 🎯 Objetivo

Criar uma plataforma acolhedora e intuitiva que permita mulheres com endometriose registrar seus sintomas, acompanhar sua evolução e receber orientações personalizadas para melhorar sua qualidade de vida.

## 🛠️ Stack Tecnológica

- **React 18+** - Biblioteca UI
- **Vite + SWC** - Build tool otimizado
- **TypeScript** - Type safety
- **TailwindCSS** - Styling
- **React Router** - Navegação
- **Recharts** - Gráficos interativos
- **Lucide React** - Ícones
- **LocalStorage** - Persistência de dados

## 📋 Funcionalidades Implementadas

### 1. **Landing Page** 🏠
- Hero section com apresentação do app
- Cards explicativos sobre endometriose
- Benefícios do aplicativo
- Botões: "Começar Agora" (novo cadastro) e "Acessar Conta" (login)

### 1.5. **Login** 🔐
- Página de login para usuárias cadastradas
- Validação de email
- Mensagens de erro claras
- Loading state
- Redirecionamento automático para Dashboard

### 2. **Onboarding com Formulário Multi-etapa** 📝
- Etapa 1: Dados básicos (nome, idade, email)
- Etapa 2: Histórico ginecológico
- Etapa 3: Sintomas principais
- Etapa 4: Hábitos de vida
- Barra de progresso visual
- Validação de campos
- Salvamento automático no localStorage

### 3. **Dashboard Principal** 📊
- Perfil de risco (baixo/médio/alto)
- Próximo registro de sintomas
- Dica do dia
- Gráfico de evolução da dor (últimos 7 dias)
- Botões de ação rápida

### 4. **Registro Diário de Sintomas** 📝
- Slider interativo para intensidade da dor (0-10)
- Seletor visual de localização da dor
- Radio buttons para humor (emoji faces)
- Toggle para sintomas comuns
- Campo de notas livres
- Feedback visual após salvar

### 5. **Histórico e Evolução** 📈
- Filtros por período (semana/mês/3 meses)
- Gráfico de linha com evolução da dor
- Estatísticas resumidas
- Distribuição de humor
- Lista de registros recentes

### 6. **Centro Educacional** 📚
- 6 cards com conteúdos educacionais
- Modal com informações detalhadas
- Temas: O que é endometriose, alimentação, exercícios, gerenciamento de dor, saúde mental, quando procurar ajuda

### 7. **Perfil da Usuária** 👤
- Visualização de dados cadastrais
- Edição de informações
- Planos disponíveis (Básico/Completo/Premium)
- Logout

## 🎨 Design System

### Cores
- **Primária**: #E8B4B8 (rosa suave - acolhedor)
- **Secundária**: #5B8C85 (verde água - calma)
- **Acento**: #F4A261 (laranja suave - energia)
- **Alerta**: #E76F51 (vermelho suave - atenção)
- **Fundo**: #FAF9F6 (off-white)
- **Texto**: #2C3E50 (cinza escuro)

### Tipografia
- **Headings**: Poppins (bold)
- **Body**: Open Sans (regular)

## 📁 Estrutura de Pastas

```
src/
├── components/
│   ├── common/          # Botões, inputs, cards, modais
│   └── layout/          # Header
├── pages/
│   ├── Landing.tsx
│   ├── Onboarding.tsx
│   ├── Dashboard.tsx
│   ├── SymptomLog.tsx
│   ├── History.tsx
│   ├── Education.tsx
│   └── Profile.tsx
├── contexts/
│   └── AppContext.tsx   # Context API para estado global
├── utils/
│   └── storage.ts       # Funções de localStorage
├── data/
│   └── mockData.ts      # Dados mockados
├── App.tsx              # Routing principal
├── main.tsx
└── index.css            # Estilos globais
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 16+ instalado
- npm ou yarn

### Instalação

```bash
# Clonar o repositório
cd EndoVitta

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

### Preview da Build

```bash
npm run preview
```

## 📊 Dados Mockados

O aplicativo utiliza dados mockados para demonstração:
- 7 dias de histórico de sintomas
- 6 conteúdos educacionais
- 8 dicas diárias
- 6 sintomas comuns

Todos os dados são salvos no localStorage e persistem entre sessões.

## 🔄 Fluxo de Navegação

### Para Novas Usuárias
1. **Landing** → Apresentação do app
2. **Onboarding** → Cadastro inicial (4 etapas)
3. **Dashboard** → Visão geral da saúde

### Para Usuárias Cadastradas
1. **Landing** → Apresentação do app
2. **Login** → Acessar conta com email
3. **Dashboard** → Visão geral da saúde

### Após Login
4. **Symptom Log** → Registrar sintomas diários
5. **History** → Acompanhar evolução
6. **Education** → Aprender sobre endometriose
7. **Profile** → Gerenciar dados e planos

## 💾 Persistência de Dados

- Dados do usuário salvos em `endovitta_user`
- Registros de sintomas salvos em `endovitta_logs`
- Limpeza de dados ao fazer logout

## 🎯 Recursos Principais

✅ Navegação fluida entre telas
✅ Formulários com validação básica
✅ Gráficos interativos com Recharts
✅ Design responsivo (mobile-first)
✅ Animações suaves nas transições
✅ Feedback visual em ações
✅ LocalStorage para persistência
✅ Context API para estado global
✅ TypeScript para type safety
✅ Componentes reutilizáveis

## 📱 Responsividade

O aplicativo é totalmente responsivo e funciona perfeitamente em:
- 📱 Dispositivos móveis (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)

## 🚫 O que NÃO foi implementado

- ❌ Backend/API
- ❌ Autenticação real
- ❌ Integração com APIs externas
- ❌ Banco de dados real
- ❌ Envio de emails

## 📝 Notas Importantes

- Este é um **MVP (Minimum Viable Product)** para demonstração
- Todos os dados são armazenados localmente no navegador
- Ideal para prototipagem e validação de UX/UI
- Pronto para ser expandido com funcionalidades reais

## 🤝 Contribuições

Este é um projeto de demonstração. Para sugestões ou melhorias, entre em contato.

## 📄 Licença

MIT

---

**Desenvolvido com 💜 para mulheres com endometriose**
