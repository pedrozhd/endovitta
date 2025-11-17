import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from '../components/common/Card';
import { useApp } from '../contexts/AppContext';

export const History: React.FC = () => {
  const { symptomLogs } = useApp();
  const [period, setPeriod] = useState<'week' | 'month' | '3months'>('week');

  const getFilteredLogs = () => {
    const now = new Date();
    let startDate = new Date();

    if (period === 'week') {
      startDate.setDate(now.getDate() - 7);
    } else if (period === 'month') {
      startDate.setMonth(now.getMonth() - 1);
    } else {
      startDate.setMonth(now.getMonth() - 3);
    }

    return symptomLogs.filter(log => new Date(log.date) >= startDate);
  };

  const filteredLogs = getFilteredLogs();

  // Calculate statistics
  const stats = {
    averagePain: filteredLogs.length > 0
      ? (filteredLogs.reduce((sum, log) => sum + log.painLevel, 0) / filteredLogs.length).toFixed(1)
      : 0,
    daysWithSymptoms: filteredLogs.filter(log => log.symptoms.length > 0).length,
    totalDays: filteredLogs.length,
    highestPain: filteredLogs.length > 0
      ? Math.max(...filteredLogs.map(log => log.painLevel))
      : 0,
  };

  // Chart data
  const chartData = filteredLogs.map(log => ({
    date: new Date(log.date).toLocaleDateString('pt-BR', { month: 'short', day: 'numeric' }),
    pain: log.painLevel,
  }));

  // Mood distribution
  const moodCounts = {
    happy: filteredLogs.filter(log => log.mood === 'happy').length,
    neutral: filteredLogs.filter(log => log.mood === 'neutral').length,
    sad: filteredLogs.filter(log => log.mood === 'sad').length,
    anxious: filteredLogs.filter(log => log.mood === 'anxious').length,
  };

  const moodData = [
    { name: 'Feliz', value: moodCounts.happy, emoji: '😊' },
    { name: 'Neutro', value: moodCounts.neutral, emoji: '😐' },
    { name: 'Triste', value: moodCounts.sad, emoji: '😢' },
    { name: 'Ansioso', value: moodCounts.anxious, emoji: '😰' },
  ];

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-text mb-2">Histórico e Evolução</h1>
        <p className="text-text/70 mb-8">Acompanhe sua jornada de saúde</p>

        {/* Period Filter */}
        <div className="flex gap-4 mb-8">
          {(['week', 'month', '3months'] as const).map(p => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                period === p
                  ? 'bg-primary text-white'
                  : 'bg-white text-text border-2 border-gray-200 hover:border-primary'
              }`}
            >
              {p === 'week' && 'Última Semana'}
              {p === 'month' && 'Último Mês'}
              {p === '3months' && 'Últimos 3 Meses'}
            </button>
          ))}
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <div className="text-center">
              <div className="text-4xl mb-2">📊</div>
              <p className="text-text/70 text-sm mb-1">Dor Média</p>
              <p className="text-3xl font-bold text-primary">{stats.averagePain}</p>
              <p className="text-xs text-text/60">em 10</p>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <div className="text-4xl mb-2">📅</div>
              <p className="text-text/70 text-sm mb-1">Dias com Sintomas</p>
              <p className="text-3xl font-bold text-accent">{stats.daysWithSymptoms}</p>
              <p className="text-xs text-text/60">de {stats.totalDays}</p>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <div className="text-4xl mb-2">📈</div>
              <p className="text-text/70 text-sm mb-1">Pior Dia</p>
              <p className="text-3xl font-bold text-alert">{stats.highestPain}</p>
              <p className="text-xs text-text/60">intensidade</p>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <div className="text-4xl mb-2">✅</div>
              <p className="text-text/70 text-sm mb-1">Registros</p>
              <p className="text-3xl font-bold text-secondary">{stats.totalDays}</p>
              <p className="text-xs text-text/60">neste período</p>
            </div>
          </Card>
        </div>

        {/* Pain Evolution Chart */}
        {chartData.length > 0 ? (
          <Card className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-6">Evolução da Dor</h2>
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
          </Card>
        ) : (
          <Card className="mb-8 text-center py-8">
            <p className="text-text/70">Nenhum registro neste período</p>
          </Card>
        )}

        {/* Mood Distribution */}
        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-text mb-6">Distribuição de Humor</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {moodData.map(mood => (
              <div key={mood.name} className="text-center">
                <div className="text-4xl mb-2">{mood.emoji}</div>
                <p className="text-sm font-semibold text-text mb-1">{mood.name}</p>
                <p className="text-2xl font-bold text-primary">{mood.value}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Logs */}
        <Card>
          <h2 className="text-2xl font-bold text-text mb-6">Registros Recentes</h2>
          {filteredLogs.length > 0 ? (
            <div className="space-y-4">
              {[...filteredLogs].reverse().slice(0, 10).map(log => (
                <div key={log.id} className="border-l-4 border-primary pl-4 py-2">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-semibold text-text">
                        {new Date(log.date).toLocaleDateString('pt-BR', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                      <p className="text-sm text-text/70">
                        Dor: {log.painLevel}/10 • Localização: {log.location}
                      </p>
                    </div>
                    <span className="text-2xl">
                      {log.mood === 'happy' && '😊'}
                      {log.mood === 'neutral' && '😐'}
                      {log.mood === 'sad' && '😢'}
                      {log.mood === 'anxious' && '😰'}
                    </span>
                  </div>
                  {log.notes && (
                    <p className="text-sm text-text/70 italic">"{log.notes}"</p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-text/70 py-8">Nenhum registro neste período</p>
          )}
        </Card>
      </div>
    </div>
  );
};
