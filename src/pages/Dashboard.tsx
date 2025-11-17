import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { useApp } from '../contexts/AppContext';
import { dailyTips } from '../data/mockData';

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user, symptomLogs } = useApp();

  // Calculate risk profile
  const getRiskProfile = () => {
    if (!user) return 'baixo';
    const hasRiskFactors = user.gynecologicalHistory.length > 2;
    const averagePain = symptomLogs.length > 0
      ? symptomLogs.reduce((sum, log) => sum + log.painLevel, 0) / symptomLogs.length
      : 0;

    if (averagePain > 6 || hasRiskFactors) return 'alto';
    if (averagePain > 3) return 'médio';
    return 'baixo';
  };

  const riskProfile = getRiskProfile();
  const riskColors: Record<string, 'low' | 'medium' | 'high'> = {
    baixo: 'low',
    médio: 'medium',
    alto: 'high',
  };

  // Get chart data (last 7 days)
  const getChartData = () => {
    const last7Days = symptomLogs.slice(-7);
    return last7Days.map(log => ({
      date: new Date(log.date).toLocaleDateString('pt-BR', { month: 'short', day: 'numeric' }),
      pain: log.painLevel,
    }));
  };

  const chartData = getChartData();

  // Get daily tip
  const dailyTip = dailyTips[Math.floor(Math.random() * dailyTips.length)];

  // Get next symptom log date
  const nextLogDate = new Date();
  nextLogDate.setDate(nextLogDate.getDate() + 1);

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-text mb-2">
            Bem-vinda de volta, {user?.name}! 👋
          </h1>
          <p className="text-text/70">Aqui está um resumo da sua saúde</p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Risk Profile */}
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-text">Perfil de Risco</h3>
              <span className="text-2xl">⚠️</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge
                label={riskProfile.charAt(0).toUpperCase() + riskProfile.slice(1)}
                variant={riskColors[riskProfile as keyof typeof riskColors]}
              />
              <p className="text-sm text-text/70">
                {riskProfile === 'baixo' && 'Você está bem!'}
                {riskProfile === 'médio' && 'Monitore seus sintomas'}
                {riskProfile === 'alto' && 'Considere consultar um médico'}
              </p>
            </div>
          </Card>

          {/* Next Log */}
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-text">Próximo Registro</h3>
              <span className="text-2xl">📅</span>
            </div>
            <p className="text-2xl font-bold text-primary mb-2">
              {nextLogDate.toLocaleDateString('pt-BR')}
            </p>
            <Button
              variant="outline"
              onClick={() => navigate('/symptom-log')}
              className="w-full text-sm"
            >
              Registrar Agora
            </Button>
          </Card>

          {/* Daily Tip */}
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-text">Dica do Dia</h3>
              <span className="text-2xl">💡</span>
            </div>
            <p className="text-text/70 text-sm">{dailyTip}</p>
          </Card>
        </div>

        {/* Pain Evolution Chart */}
        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-text mb-6">Evolução da Dor (Últimos 7 Dias)</h2>
          {chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="date" stroke="#2C3E50" />
                <YAxis domain={[0, 10]} stroke="#2C3E50" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '2px solid #E8B4B8',
                    borderRadius: '8px',
                  }}
                  formatter={(value: any) => [`Dor: ${value}/10`, '']}
                />
                <Line
                  type="monotone"
                  dataKey="pain"
                  stroke="#E8B4B8"
                  strokeWidth={3}
                  dot={{ fill: '#E8B4B8', r: 5 }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-center text-text/70 py-8">
              Nenhum registro ainda. Comece a registrar seus sintomas!
            </p>
          )}
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Button
            variant="primary"
            onClick={() => navigate('/symptom-log')}
            className="py-4 text-lg"
          >
            📝 Registrar Sintomas
          </Button>
          <Button
            variant="secondary"
            onClick={() => navigate('/history')}
            className="py-4 text-lg"
          >
            📊 Ver Histórico
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate('/education')}
            className="py-4 text-lg"
          >
            📚 Aprender Mais
          </Button>
        </div>
      </div>
    </div>
  );
};
