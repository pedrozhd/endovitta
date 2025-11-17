# 🔐 Fluxo de Login - EndoVitta MVP

## ✨ Melhorias Implementadas

Adicionei uma página de **Login** completa para usuárias que já possuem conta cadastrada.

## 🔄 Novo Fluxo de Navegação

### Para Novas Usuárias
```
Landing (/)
  ↓
Clique "Começar Agora"
  ↓
Onboarding (/onboarding)
  ↓ (4 etapas)
  ↓
Dashboard (/dashboard)
```

### Para Usuárias Cadastradas
```
Landing (/)
  ↓
Clique "Acessar Conta"
  ↓
Login (/login)
  ↓ (insira seu email)
  ↓
Dashboard (/dashboard)
```

## 📱 Página de Login

### Localização
- **URL**: `/login`
- **Acesso**: Botão "Acessar Conta" na Landing Page

### Componentes

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
   - Mostra loading durante a autenticação
   - Redireciona para Dashboard se bem-sucedido

4. **Mensagens de Erro**
   - "Nenhuma conta encontrada"
   - "Email não encontrado"
   - Exibidas em card com fundo vermelho

5. **Divider**
   - Separador visual com "ou"

6. **Botão Criar Nova Conta**
   - Leva para Onboarding
   - Para usuárias que ainda não têm cadastro

7. **Card Informativo**
   - Dica para primeira vez
   - Instruções de cadastro

8. **Botão Voltar**
   - Retorna à Landing Page

## 🔑 Como Funciona

### Autenticação
```
1. Usuária insere seu email
2. Sistema busca no localStorage
3. Se encontrar → Login bem-sucedido
4. Se não encontrar → Mensagem de erro
5. Redireciona para Dashboard
```

### Validações
- ✅ Email é obrigatório
- ✅ Botão desabilitado se email vazio
- ✅ Mensagens de erro claras
- ✅ Loading state durante autenticação

## 📊 Fluxo Completo de Proteção de Rotas

```
Rotas Públicas:
  / (Landing)
  /login (Login)
  /onboarding (Onboarding)

Rotas Protegidas (requerem login):
  /dashboard → Redireciona para /login se não autenticado
  /symptom-log → Redireciona para /login se não autenticado
  /history → Redireciona para /login se não autenticado
  /education → Redireciona para /login se não autenticado
  /profile → Redireciona para /login se não autenticado
```

## 🧪 Como Testar

### Teste 1: Novo Cadastro
1. Acesse `http://localhost:5173`
2. Clique "Começar Agora"
3. Preencha o Onboarding (4 etapas)
4. Será redirecionado para Dashboard

### Teste 2: Login com Conta Existente
1. Acesse `http://localhost:5173`
2. Clique "Acessar Conta"
3. Insira o email que cadastrou
4. Clique "Entrar"
5. Será redirecionado para Dashboard

### Teste 3: Email Inválido
1. Acesse `http://localhost:5173/login`
2. Insira um email que não existe
3. Clique "Entrar"
4. Verá mensagem de erro

### Teste 4: Logout e Re-login
1. No Dashboard, abra o menu (≡)
2. Clique "Sair"
3. Será redirecionado para Landing
4. Clique "Acessar Conta"
5. Insira seu email novamente
6. Será redirecionado para Dashboard

## 💾 Dados Persistidos

### No localStorage
```javascript
{
  "endovitta_user": {
    "id": "timestamp",
    "name": "Nome da Usuária",
    "age": 28,
    "email": "seu@email.com",
    "gynecologicalHistory": [...],
    "mainSymptoms": "...",
    "sleepHours": 7,
    "diet": "balanced",
    "exercises": "moderate"
  },
  "endovitta_logs": [...]
}
```

## 🔒 Segurança (MVP)

**Nota**: Este é um MVP com autenticação simulada. Em produção:
- ❌ Não usar localStorage para senhas
- ❌ Não fazer autenticação no cliente
- ✅ Implementar backend com JWT
- ✅ Usar HTTPS
- ✅ Hash de senhas
- ✅ Validação no servidor

## 📝 Mudanças Realizadas

### Arquivos Criados
- ✅ `src/pages/Login.tsx` - Página de login

### Arquivos Modificados
- ✅ `src/App.tsx` - Adicionada rota `/login`
- ✅ `src/pages/Landing.tsx` - Adicionado botão "Acessar Conta"

### Fluxo de Proteção
- ✅ Rotas protegidas redirecionam para `/login`
- ✅ Após login, usuária é redirecionada para `/dashboard`

## 🎯 Funcionalidades da Página de Login

| Funcionalidade | Status |
|---|---|
| Campo de email | ✅ |
| Validação de email | ✅ |
| Busca no localStorage | ✅ |
| Mensagens de erro | ✅ |
| Loading state | ✅ |
| Botão criar conta | ✅ |
| Botão voltar | ✅ |
| Design responsivo | ✅ |
| Feedback visual | ✅ |

## 🚀 Próximos Passos

Para usar o novo fluxo:

1. Reinstale dependências (se necessário)
   ```bash
   npm install
   ```

2. Inicie o servidor
   ```bash
   npm run dev
   ```

3. Teste o fluxo completo:
   - Landing → Cadastro → Dashboard
   - Landing → Login → Dashboard

## 📱 Responsividade

A página de login é totalmente responsiva:
- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)

## 🎨 Design

- Mantém a paleta de cores do design system
- Usa os mesmos componentes reutilizáveis
- Consistente com o resto da aplicação
- Acolhedor e intuitivo

---

**Desenvolvido com 💜 para mulheres com endometriose**
