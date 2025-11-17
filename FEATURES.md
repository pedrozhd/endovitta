# 🎯 Funcionalidades Detalhadas - EndoVitta MVP

## 📱 Páginas e Funcionalidades

### 0. 🔐 Login Page (`/login`)

**Objetivo**: Permitir que usuárias cadastradas façam login

**Componentes**:
1. **Logo e Título**
   - Ícone: 💜
   - Título: "EndoVitta"
   - Subtítulo: "Bem-vinda de volta!"

2. **Campo de Email**
   - Input de email
   - Placeholder: "seu@email.com"
   - Validação: Campo obrigatório

3. **Botão de Entrar**
   - Verifica se o email existe no localStorage
   - Loading state durante autenticação
   - Redireciona para Dashboard se bem-sucedido

4. **Mensagens de Erro**
   - "Nenhuma conta encontrada"
   - "Email não encontrado"
   - Exibidas em card com fundo vermelho

5. **Divider Visual**
   - Separador com "ou"

6. **Botão Criar Nova Conta**
   - Leva para Onboarding

7. **Card Informativo**
   - Dica para primeira vez
   - Instruções de cadastro

8. **Botão Voltar**
   - Retorna à Landing Page

**Funcionalidades**:
- ✅ Autenticação simulada
- ✅ Validação de email
- ✅ Mensagens de erro claras
- ✅ Loading state
- ✅ Redirecionamento automático
- ✅ Design responsivo

---

### 1. 🏠 Landing Page (`/`)

**Objetivo**: Apresentar o aplicativo e seus benefícios

**Seções**:
1. **Hero Section**
   - Logo (💜)
   - Título: "EndoVitta"
   - Subtítulo: "Seu companheiro no monitoramento da endometriose"
   - Descrição
   - CTA: "Começar Agora"

2. **Benefícios (6 Cards)**
   - 📊 Monitore Seus Sintomas
   - 📈 Acompanhe Sua Evolução
   - 📚 Aprenda e Cresça
   - 🎯 Dicas Personalizadas
   - 🏥 Compartilhe com Médicos
   - 💪 Empoderamento

3. **Sobre Endometriose**
   - Explicação simples
   - Sintomas principais
   - Ícone ilustrativo

4. **CTA Final**
   - Botão "Começar Agora"

---

### 2. 📝 Onboarding (`/onboarding`)

**Objetivo**: Cadastro inicial com coleta de dados

**Etapa 1: Dados Básicos**
- Nome completo (texto)
- Idade (número)
- Email (email)
- Validação: Todos os campos obrigatórios

**Etapa 2: Histórico Ginecológico**
- Menstruação irregular (checkbox)
- Sangramento intenso (checkbox)
- Menstruação dolorosa (checkbox)
- Dificuldade em engravidar (checkbox)
- Dor durante relações sexuais (checkbox)
- Histórico familiar (checkbox)

**Etapa 3: Sintomas Principais**
- Descrição de sintomas (textarea)
- Validação: Campo obrigatório

**Etapa 4: Hábitos de Vida**
- Horas de sono (número)
- Tipo de alimentação (select)
  - Balanceada
  - Vegetariana
  - Vegana
  - Low-carb
- Nível de atividade (select)
  - Sedentária
  - Leve (1-2x/semana)
  - Moderada (3-4x/semana)
  - Intensa (5+x/semana)

**Componentes**:
- Barra de progresso (visual)
- Botões: Anterior, Próximo, Concluir
- Validação de campos

---

### 3. 📊 Dashboard (`/dashboard`)

**Objetivo**: Visão geral da saúde da usuária

**Componentes**:

1. **Header Personalizado**
   - "Bem-vinda de volta, [Nome]! 👋"
   - Subtítulo: "Aqui está um resumo da sua saúde"

2. **Cards Informativos (3)**
   
   **Card 1: Perfil de Risco**
   - Ícone: ⚠️
   - Título: "Perfil de Risco"
   - Badge: Baixo/Médio/Alto
   - Mensagem contextual
   
   **Card 2: Próximo Registro**
   - Ícone: 📅
   - Título: "Próximo Registro"
   - Data do próximo dia
   - Botão: "Registrar Agora"
   
   **Card 3: Dica do Dia**
   - Ícone: 💡
   - Título: "Dica do Dia"
   - Dica aleatória

3. **Gráfico de Evolução**
   - Título: "Evolução da Dor (Últimos 7 Dias)"
   - Gráfico de linha com Recharts
   - Eixo X: Datas
   - Eixo Y: Intensidade (0-10)
   - Cores: Gradiente primária-acento
   - Tooltip interativo

4. **Botões de Ação Rápida (3)**
   - 📝 Registrar Sintomas
   - 📊 Ver Histórico
   - 📚 Aprender Mais

---

### 4. 📝 Registro Diário de Sintomas (`/symptom-log`)

**Objetivo**: Registrar sintomas diários

**Componentes**:

1. **Intensidade da Dor**
   - Slider (0-10)
   - Feedback emoji em tempo real
   - Rótulo: "Sem dor" → "Dor máxima"
   - Display: "X/10"

2. **Localização da Dor**
   - 6 botões clicáveis:
     - ✅ Sem dor
     - 🔴 Abdômen inferior
     - 🔴 Costas
     - 🔴 Pelve
     - 🔴 Pernas
     - ❓ Outro
   - Seleção única
   - Feedback visual (border + background)

3. **Humor**
   - 4 botões com emojis:
     - 😊 Feliz
     - 😐 Neutro
     - 😢 Triste
     - 😰 Ansioso
   - Seleção única
   - Feedback visual

4. **Sintomas Comuns**
   - 6 botões toggle:
     - 😴 Cansaço
     - 🤢 Náusea
     - 🫧 Inchaço
     - 🔴 Dor nas costas
     - 🔴 Dor abdominal
     - 🚽 Alteração intestinal
   - Seleção múltipla
   - Feedback visual

5. **Notas Adicionais**
   - Textarea
   - Placeholder: "Adicione qualquer informação adicional..."

6. **Ações**
   - Botão: "Cancelar"
   - Botão: "Salvar Registro"

7. **Feedback de Sucesso**
   - Modal com ✅
   - Mensagem de confirmação
   - Redirecionamento automático

---

### 5. 📈 Histórico e Evolução (`/history`)

**Objetivo**: Acompanhar evolução e identificar padrões

**Componentes**:

1. **Filtros por Período**
   - Botão: "Última Semana"
   - Botão: "Último Mês"
   - Botão: "Últimos 3 Meses"
   - Seleção única

2. **Cards de Estatísticas (4)**
   
   **Card 1: Dor Média**
   - Ícone: 📊
   - Valor: X.X (em 10)
   
   **Card 2: Dias com Sintomas**
   - Ícone: 📅
   - Valor: X de Y
   
   **Card 3: Pior Dia**
   - Ícone: 📈
   - Valor: X (intensidade)
   
   **Card 4: Registros**
   - Ícone: ✅
   - Valor: X (neste período)

3. **Gráfico de Evolução**
   - Gráfico de linha com Recharts
   - Eixo X: Datas
   - Eixo Y: Intensidade (0-10)
   - Cores: Primária
   - Tooltip interativo

4. **Distribuição de Humor**
   - 4 cards com emojis:
     - 😊 Feliz: X
     - 😐 Neutro: X
     - 😢 Triste: X
     - 😰 Ansioso: X

5. **Registros Recentes**
   - Lista dos últimos 10 registros
   - Cada registro mostra:
     - Data (formatada)
     - Dor: X/10
     - Localização
     - Humor (emoji)
     - Notas (se houver)
   - Borda esquerda colorida

---

### 6. 📚 Centro Educacional (`/education`)

**Objetivo**: Educação sobre endometriose

**Conteúdos (6 Cards)**:

1. **O que é Endometriose?**
   - Ícone: 📚
   - Descrição: Explicação simples da condição

2. **Alimentação Anti-inflamatória**
   - Ícone: 🥗
   - Descrição: Dicas de alimentação

3. **Exercícios Recomendados**
   - Ícone: 🧘
   - Descrição: Tipos de exercícios

4. **Gerenciamento da Dor**
   - Ícone: 💊
   - Descrição: Estratégias de manejo

5. **Saúde Mental**
   - Ícone: 🧠
   - Descrição: Importância do apoio emocional

6. **Quando Procurar Ajuda**
   - Ícone: 🏥
   - Descrição: Sinais de alerta

**Interação**:
- Cards clicáveis
- Modal com conteúdo detalhado
- Botão de fechar
- Dica adicional em destaque

---

### 7. 👤 Perfil da Usuária (`/profile`)

**Objetivo**: Gerenciar dados e planos

**Componentes**:

1. **Informações Pessoais**
   - Avatar (👩)
   - Nome
   - Email
   - Botão: "Editar"

2. **Dados Cadastrais**
   - Idade
   - Email
   - Horas de sono
   - Tipo de alimentação
   - Atividade física
   - Modo edição (com inputs)

3. **Histórico Ginecológico**
   - Badges com itens selecionados
   - Ou mensagem: "Nenhum item registrado"

4. **Sintomas Principais**
   - Texto descritivo

5. **Planos Disponíveis (3)**
   
   **Plano 1: Básico**
   - Preço: Grátis
   - Badge: "Plano Atual"
   - Recursos:
     - Registrar sintomas
     - Visualizar gráficos
     - Dicas diárias
   - Botão: Desabilitado
   
   **Plano 2: Completo**
   - Preço: R$ 9,90/mês
   - Recursos:
     - Tudo do Básico
     - Análises avançadas
     - Relatórios PDF
     - Suporte prioritário
   - Botão: "Fazer Upgrade"
   
   **Plano 3: Premium**
   - Preço: R$ 19,90/mês
   - Recursos:
     - Tudo do Completo
     - Consultas com especialistas
     - Comunidade privada
     - Conteúdo exclusivo
   - Botão: "Fazer Upgrade"

6. **Ações**
   - Botão: "Voltar"
   - Botão: "Sair da Conta"

---

## 🎨 Componentes Reutilizáveis

### Button
```tsx
<Button variant="primary" onClick={handleClick}>
  Texto
</Button>
```
- Variantes: primary, secondary, outline
- Props: onClick, disabled, isLoading

### Card
```tsx
<Card onClick={handleClick}>
  Conteúdo
</Card>
```
- Props: onClick, className

### Modal
```tsx
<Modal isOpen={true} onClose={handleClose} title="Título">
  Conteúdo
</Modal>
```
- Props: isOpen, onClose, title

### ProgressBar
```tsx
<ProgressBar current={2} total={4} />
```
- Props: current, total

### Badge
```tsx
<Badge label="Baixo" variant="low" />
```
- Variantes: low, medium, high, default

---

## 💾 Dados Mockados

### Sintomas Comuns (6)
- Cansaço
- Náusea
- Inchaço
- Dor nas costas
- Dor abdominal
- Alteração intestinal

### Conteúdos Educacionais (6)
- O que é Endometriose
- Alimentação Anti-inflamatória
- Exercícios Recomendados
- Gerenciamento da Dor
- Saúde Mental
- Quando Procurar Ajuda

### Dicas Diárias (8)
- Beba bastante água
- Pratique respiração profunda
- Mantenha registro consistente
- Durma o suficiente
- Considere aplicar calor
- Evite alimentos que pioram
- Pratique atividades que o fazem feliz
- Conecte-se com outras pessoas

### Histórico de Exemplo (7 dias)
- Dados mockados para demonstração
- Variam em intensidade de dor
- Diferentes localizações
- Diferentes humores

---

## 🔄 Fluxos de Interação

### Fluxo de Onboarding
```
Landing → Clique "Começar"
  ↓
Onboarding (Etapa 1)
  ↓
Onboarding (Etapa 2)
  ↓
Onboarding (Etapa 3)
  ↓
Onboarding (Etapa 4)
  ↓
Dashboard (Sucesso)
```

### Fluxo de Registro de Sintomas
```
Dashboard → Clique "Registrar Sintomas"
  ↓
Symptom Log (Preenchimento)
  ↓
Clique "Salvar Registro"
  ↓
Feedback de Sucesso
  ↓
Dashboard (Automático)
```

### Fluxo de Visualização de Histórico
```
Dashboard → Clique "Ver Histórico"
  ↓
History (Semana padrão)
  ↓
Selecione período
  ↓
Visualize gráficos e estatísticas
```

---

## 🎯 Recursos Principais

✅ **Navegação Fluida**: Transições suaves entre páginas
✅ **Formulários Validados**: Validação básica de campos
✅ **Gráficos Interativos**: Recharts com tooltips
✅ **Design Responsivo**: Mobile, tablet, desktop
✅ **Animações**: Transições e hover effects
✅ **Feedback Visual**: Confirmações e mensagens
✅ **Persistência**: LocalStorage para dados
✅ **Estado Global**: Context API
✅ **Type Safety**: TypeScript completo
✅ **Componentes Reutilizáveis**: DRY principles

---

**Desenvolvido com 💜 para mulheres com endometriose**
