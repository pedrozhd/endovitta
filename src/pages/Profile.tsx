import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { useApp } from '../contexts/AppContext';

interface User {
  id: string;
  name: string;
  age: number;
  email: string;
  gynecologicalHistory: string[];
  mainSymptoms: string;
  sleepHours: number;
  diet: string;
  exercises: string;
}

export const Profile: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useApp();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState<User>(user || {} as User);

  if (!user) {
    return (
      <div className="min-h-screen bg-background py-8 px-4 flex items-center justify-center">
        <Card className="text-center">
          <p className="text-text/70 mb-4">Você precisa estar logado para acessar esta página</p>
          <Button onClick={() => navigate('/')}>Voltar ao Início</Button>
        </Card>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-text mb-8">Meu Perfil</h1>

        {/* User Info */}
        <Card className="mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-3xl">
                👩
              </div>
              <div>
                <h2 className="text-3xl font-bold text-text">{user.name}</h2>
                <p className="text-text/70">{user.email}</p>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? 'Cancelar' : 'Editar'}
            </Button>
          </div>

          {!isEditing ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-semibold text-text/70 mb-1">Idade</p>
                <p className="text-lg text-text">{user.age} anos</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-text/70 mb-1">Email</p>
                <p className="text-lg text-text">{user.email}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-text/70 mb-1">Horas de Sono</p>
                <p className="text-lg text-text">{user.sleepHours} horas/noite</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-text/70 mb-1">Tipo de Alimentação</p>
                <p className="text-lg text-text capitalize">{user.diet}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-text/70 mb-1">Atividade Física</p>
                <p className="text-lg text-text capitalize">{user.exercises}</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-text mb-2">Idade</label>
                  <input
                    type="number"
                    value={editData.age || ''}
                    onChange={(e) => setEditData({ ...editData, age: parseInt(e.target.value) })}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-text mb-2">Horas de Sono</label>
                  <input
                    type="number"
                    value={editData.sleepHours || ''}
                    onChange={(e) => setEditData({ ...editData, sleepHours: parseInt(e.target.value) })}
                    className="input-field"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-text mb-2">Tipo de Alimentação</label>
                <select
                  value={editData.diet || ''}
                  onChange={(e) => setEditData({ ...editData, diet: e.target.value })}
                  className="input-field"
                >
                  <option value="balanced">Balanceada</option>
                  <option value="vegetarian">Vegetariana</option>
                  <option value="vegan">Vegana</option>
                  <option value="low_carb">Low-carb</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-text mb-2">Atividade Física</label>
                <select
                  value={editData.exercises || ''}
                  onChange={(e) => setEditData({ ...editData, exercises: e.target.value })}
                  className="input-field"
                >
                  <option value="sedentary">Sedentária</option>
                  <option value="light">Leve (1-2x/semana)</option>
                  <option value="moderate">Moderada (3-4x/semana)</option>
                  <option value="intense">Intensa (5+x/semana)</option>
                </select>
              </div>
            </div>
          )}
        </Card>

        {/* Gynecological History */}
        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-text mb-4">Histórico Ginecológico</h2>
          {user.gynecologicalHistory.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {user.gynecologicalHistory.map(item => (
                <Badge key={item} label={item} variant="default" />
              ))}
            </div>
          ) : (
            <p className="text-text/70">Nenhum item registrado</p>
          )}
        </Card>

        {/* Main Symptoms */}
        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-text mb-4">Sintomas Principais</h2>
          <p className="text-text/70">{user.mainSymptoms}</p>
        </Card>

        {/* Plans */}
        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-text mb-6">Planos Disponíveis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Básico',
                price: 'Grátis',
                features: ['Registrar sintomas', 'Visualizar gráficos', 'Dicas diárias'],
                current: true,
              },
              {
                name: 'Completo',
                price: 'R$ 9,90/mês',
                features: ['Tudo do Básico', 'Análises avançadas', 'Relatórios PDF', 'Suporte prioritário'],
              },
              {
                name: 'Premium',
                price: 'R$ 19,90/mês',
                features: ['Tudo do Completo', 'Consultas com especialistas', 'Comunidade privada', 'Conteúdo exclusivo'],
              },
            ].map(plan => (
              <div
                key={plan.name}
                className={`border-2 rounded-lg p-6 ${
                  plan.current ? 'border-primary bg-primary/5' : 'border-gray-200'
                }`}
              >
                <h3 className="text-xl font-bold text-text mb-2">{plan.name}</h3>
                <p className="text-2xl font-bold text-primary mb-4">{plan.price}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map(feature => (
                    <li key={feature} className="text-sm text-text/70 flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.current ? 'secondary' : 'outline'}
                  className="w-full"
                  disabled={plan.current}
                >
                  {plan.current ? 'Plano Atual' : 'Fazer Upgrade'}
                </Button>
              </div>
            ))}
          </div>
        </Card>

        {/* Logout */}
        <div className="flex gap-4">
          <Button
            variant="outline"
            onClick={() => navigate('/dashboard')}
            className="flex-1"
          >
            Voltar
          </Button>
          <Button
            variant="outline"
            onClick={handleLogout}
            className="flex-1 text-alert border-alert hover:bg-red-50"
          >
            Sair da Conta
          </Button>
        </div>
      </div>
    </div>
  );
};
