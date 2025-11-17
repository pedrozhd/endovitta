# 🛍️ Página de Produtos - EndoVitta MVP

## ✨ Nova Funcionalidade: Marketplace de Produtos

Adicionei uma **página de Loja** completa com produtos selecionados para melhorar a qualidade de vida de mulheres com endometriose.

## 📁 Produtos Integrados

### 1. 👕 Roupas Confortáveis e Terapêuticas (mockup2 e mockup3)

**Calça Confortável Terapêutica** - R$ 89,90
- Cintura alta com tecido elástico
- Suporte abdominal sem apertar
- Ideal para dias de cólica
- Rating: 4.8/5 (245 avaliações)

**Top Terapêutico com Suporte** - R$ 79,90
- Algodão orgânico 100%
- Compressão leve e confortável
- Sem costuras irritantes
- Rating: 4.7/5 (189 avaliações)

### 2. 🩸 Coletor Menstrual (mockup4)

**Coletor Menstrual de Silicone** - R$ 49,90
- Silicone médico hipoalergênico
- Reutilizável por até 10 anos
- Ecológico e econômico
- Reduz resíduos em 99%
- Rating: 4.9/5 (512 avaliações)

### 3. 🔥 Compressa Térmica (mockup5)

**Compressa Térmica Reutilizável** - R$ 59,90
- Aquecimento por até 2 horas
- Reutilizável indefinidamente
- Capa removível e lavável
- Tamanho ergonômico
- Rating: 4.8/5 (378 avaliações)

### 4. 🍵 Chás Funcionais (mockup6)

**Kit Chás Funcionais para Endometriose** - R$ 69,90
- Chá de gengibre anti-inflamatório
- Chá de camomila relaxante
- Chá de cúrcuma analgésico
- Chá de hortelã digestivo
- Chá de hibisco antioxidante
- Rating: 4.9/5 (423 avaliações)

## 🎯 Funcionalidades da Página

### 1. **Filtros por Categoria**
- Todos os Produtos
- Roupas Confortáveis
- Coletor Menstrual
- Compressa Térmica
- Chás Funcionais

### 2. **Grid de Produtos**
- Visualização em cards responsivos
- Imagem do produto
- Nome e descrição
- Rating com estrelas
- Número de avaliações
- Preço destacado
- Botão de favorito (❤️)
- Botão de carrinho (🛒)

### 3. **Modal de Detalhes**
- Imagem ampliada
- Rating completo
- Preço
- Descrição detalhada
- Lista de benefícios
- Status de estoque
- Botão "Adicionar ao Carrinho"
- Botão de favorito

### 4. **Interações**
- ❤️ Adicionar/remover de favoritos
- 🛒 Adicionar ao carrinho
- 📸 Clique no produto para ver detalhes
- 🔍 Filtrar por categoria
- ⭐ Visualizar avaliações

### 5. **Feedback Visual**
- Notificação de produto adicionado ao carrinho
- Hover effects nos cards
- Animações suaves
- Status de estoque visível

## 📱 Responsividade

- ✅ Mobile (1 coluna)
- ✅ Tablet (2 colunas)
- ✅ Desktop (3 colunas)

## 🔄 Fluxo de Navegação

```
Dashboard
  ↓
Menu (≡) → Clique "🛍️ Loja"
  ↓
Página de Produtos
  ↓
Filtrar por categoria (opcional)
  ↓
Clique no produto para ver detalhes
  ↓
Adicionar ao carrinho ou favoritar
```

## 💾 Dados dos Produtos

Todos os produtos têm:
- ID único
- Nome descritivo
- Categoria (roupas, coletor, compressa, chás)
- Preço em reais
- Rating (0-5)
- Número de avaliações
- Imagem (mockup)
- Descrição
- Lista de benefícios
- Status de estoque

## 🎨 Design

- Mantém a paleta de cores do design system
- Usa componentes reutilizáveis (Card, Button, Modal)
- Consistente com o resto da aplicação
- Acolhedor e intuitivo
- Foco em produtos para endometriose

## 📊 Estrutura da Página

```
Header
  ↓
Seção de Título e Descrição
  ↓
Filtros por Categoria
  ↓
Grid de Produtos (5 produtos)
  ↓
Modal de Detalhes (ao clicar)
  ↓
Notificação de Carrinho
```

## 🛒 Funcionalidades do Carrinho

- ✅ Adicionar produtos
- ✅ Notificação visual
- ✅ Favoritar produtos
- ✅ Visualizar detalhes
- ⏳ Carrinho persistente (próxima versão)

## 🧪 Como Testar

1. Faça login ou cadastro
2. Acesse o Dashboard
3. Clique no menu (≡)
4. Selecione "🛍️ Loja"
5. Explore os produtos:
   - Clique em um produto para ver detalhes
   - Use os filtros para categorizar
   - Clique no ❤️ para favoritar
   - Clique no 🛒 para adicionar ao carrinho

## 📝 Mudanças Realizadas

### Arquivos Criados
- ✅ `src/pages/Products.tsx` - Página de produtos

### Arquivos Modificados
- ✅ `src/App.tsx` - Adicionada rota `/products`
- ✅ `src/components/layout/Header.tsx` - Adicionado link para loja

### Assets Utilizados
- ✅ `src/assets/mockup2.jpeg` - Calça terapêutica
- ✅ `src/assets/mockup3.jpeg` - Top terapêutico
- ✅ `src/assets/mockup4.jpeg` - Coletor menstrual
- ✅ `src/assets/mockup5.jpeg` - Compressa térmica
- ✅ `src/assets/mockup6.jpeg` - Chás funcionais

## 🚀 Próximas Melhorias (Futuro)

- Integração com carrinho persistente
- Sistema de checkout
- Integração com pagamento
- Avaliações de usuários
- Recomendações personalizadas
- Cupons de desconto
- Histórico de compras

## 💜 Objetivo

Oferecer produtos selecionados que ajudem mulheres com endometriose a:
- Melhorar o conforto diário
- Aliviar sintomas
- Ter acesso a produtos de qualidade
- Apoiar sua jornada de bem-estar

---

**Desenvolvido com 💜 para mulheres com endometriose**
