import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { useApp } from '../contexts/AppContext';
import { storage } from '../utils/storage';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const { setUser } = useApp();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setError('');
    setIsLoading(true);

    // Simular delay de autenticação
    setTimeout(() => {
      // Buscar usuário no localStorage
      const savedUser = storage.getUser();

      if (!savedUser) {
        setError('Nenhuma conta encontrada. Por favor, faça o cadastro primeiro.');
        setIsLoading(false);
        return;
      }

      if (savedUser.email !== email) {
        setError('Email não encontrado. Verifique e tente novamente.');
        setIsLoading(false);
        return;
      }

      // Login bem-sucedido
      setUser(savedUser);
      navigate('/dashboard');
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && email) {
      handleLogin();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">💜</div>
          <h1 className="text-4xl font-bold text-text mb-2">EndoVitta</h1>
          <p className="text-text/70">Bem-vinda de volta!</p>
        </div>

        {/* Login Card */}
        <Card className="mb-6">
          <h2 className="text-2xl font-bold text-text mb-6">Acessar Conta</h2>

          {/* Email Input */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-text mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
              onKeyPress={handleKeyPress}
              placeholder="seu@email.com"
              className="input-field"
              disabled={isLoading}
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-alert/10 border border-alert rounded-lg">
              <p className="text-sm text-alert font-semibold">⚠️ {error}</p>
            </div>
          )}

          {/* Login Button */}
          <Button
            variant="primary"
            onClick={handleLogin}
            isLoading={isLoading}
            disabled={!email || isLoading}
            className="w-full mb-4"
          >
            {isLoading ? 'Entrando...' : 'Entrar'}
          </Button>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-text/60">ou</span>
            </div>
          </div>

          {/* Sign Up Button */}
          <Button
            variant="outline"
            onClick={() => navigate('/onboarding')}
            disabled={isLoading}
            className="w-full"
          >
            Criar Nova Conta
          </Button>
        </Card>

        {/* Info Section */}
        <Card className="bg-primary/5 border border-primary/20">
          <div className="flex gap-3">
            <span className="text-2xl flex-shrink-0">ℹ️</span>
            <div>
              <p className="text-sm font-semibold text-text mb-1">
                Primeira vez aqui?
              </p>
              <p className="text-xs text-text/70">
                Clique em "Criar Nova Conta" para fazer seu cadastro e começar a monitorar seus sintomas.
              </p>
            </div>
          </div>
        </Card>

        {/* Demo Info */}
        <div className="mt-8 text-center">
          <p className="text-xs text-text/60 mb-3">
            💡 Para testar, use qualquer email que você cadastrou anteriormente
          </p>
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="w-full text-sm"
          >
            ← Voltar à Landing Page
          </Button>
        </div>
      </div>
    </div>
  );
};
