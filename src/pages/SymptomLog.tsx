import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { useApp } from '../contexts/AppContext';
import { symptoms } from '../data/mockData';

export const SymptomLog: React.FC = () => {
  const navigate = useNavigate();
  const { addSymptomLog } = useApp();
  const [formData, setFormData] = useState({
    painLevel: 5,
    location: 'lower_abdomen',
    mood: 'neutral',
    selectedSymptoms: [] as number[],
    notes: '',
  });
  const [saved, setSaved] = useState(false);

  const handlePainChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, painLevel: parseInt(e.target.value) }));
  };

  const handleLocationChange = (location: string) => {
    setFormData(prev => ({ ...prev, location }));
  };

  const handleMoodChange = (mood: string) => {
    setFormData(prev => ({ ...prev, mood }));
  };

  const handleSymptomToggle = (symptomId: number) => {
    setFormData(prev => ({
      ...prev,
      selectedSymptoms: prev.selectedSymptoms.includes(symptomId)
        ? prev.selectedSymptoms.filter(id => id !== symptomId)
        : [...prev.selectedSymptoms, symptomId],
    }));
  };

  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, notes: e.target.value }));
  };

  const handleSubmit = () => {
    const newLog = {
      id: 0,
      date: new Date().toISOString().split('T')[0],
      painLevel: formData.painLevel,
      location: formData.location,
      mood: formData.mood,
      symptoms: formData.selectedSymptoms,
      notes: formData.notes,
    };
    addSymptomLog(newLog);
    setSaved(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  if (saved) {
    return (
      <div className="min-h-screen bg-background py-8 px-4 flex items-center justify-center">
        <Card className="text-center max-w-md">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-text mb-2">Registro Salvo!</h2>
          <p className="text-text/70 mb-4">
            Obrigada por registrar seus sintomas. Você está ajudando a entender melhor sua saúde.
          </p>
          <p className="text-sm text-text/60">Redirecionando...</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-text mb-2">Registrar Sintomas</h1>
        <p className="text-text/70 mb-8">Registre como você está se sentindo hoje</p>

        <div className="space-y-8">
          {/* Pain Level */}
          <Card>
            <h2 className="text-2xl font-bold text-text mb-6">Intensidade da Dor</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-text">
                  {formData.painLevel}/10
                </span>
                <span className="text-3xl">
                  {formData.painLevel <= 2 && '😊'}
                  {formData.painLevel > 2 && formData.painLevel <= 5 && '😐'}
                  {formData.painLevel > 5 && formData.painLevel <= 7 && '😕'}
                  {formData.painLevel > 7 && '😢'}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                value={formData.painLevel}
                onChange={handlePainChange}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-xs text-text/60">
                <span>Sem dor</span>
                <span>Dor máxima</span>
              </div>
            </div>
          </Card>

          {/* Pain Location */}
          <Card>
            <h2 className="text-2xl font-bold text-text mb-6">Localização da Dor</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { id: 'none', label: 'Sem dor', icon: '✅' },
                { id: 'lower_abdomen', label: 'Abdômen inferior', icon: '🔴' },
                { id: 'back', label: 'Costas', icon: '🔴' },
                { id: 'pelvis', label: 'Pelve', icon: '🔴' },
                { id: 'legs', label: 'Pernas', icon: '🔴' },
                { id: 'other', label: 'Outro', icon: '❓' },
              ].map(location => (
                <button
                  key={location.id}
                  onClick={() => handleLocationChange(location.id)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    formData.location === location.id
                      ? 'border-primary bg-primary/10'
                      : 'border-gray-200 hover:border-primary/50'
                  }`}
                >
                  <div className="text-2xl mb-2">{location.icon}</div>
                  <p className="text-sm font-semibold text-text">{location.label}</p>
                </button>
              ))}
            </div>
          </Card>

          {/* Mood */}
          <Card>
            <h2 className="text-2xl font-bold text-text mb-6">Como Você Está se Sentindo?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { id: 'happy', label: 'Feliz', emoji: '😊' },
                { id: 'neutral', label: 'Neutro', emoji: '😐' },
                { id: 'sad', label: 'Triste', emoji: '😢' },
                { id: 'anxious', label: 'Ansioso', emoji: '😰' },
              ].map(mood => (
                <button
                  key={mood.id}
                  onClick={() => handleMoodChange(mood.id)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    formData.mood === mood.id
                      ? 'border-secondary bg-secondary/10'
                      : 'border-gray-200 hover:border-secondary/50'
                  }`}
                >
                  <div className="text-4xl mb-2">{mood.emoji}</div>
                  <p className="text-sm font-semibold text-text">{mood.label}</p>
                </button>
              ))}
            </div>
          </Card>

          {/* Symptoms */}
          <Card>
            <h2 className="text-2xl font-bold text-text mb-6">Sintomas Comuns</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {symptoms.map(symptom => (
                <button
                  key={symptom.id}
                  onClick={() => handleSymptomToggle(symptom.id)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    formData.selectedSymptoms.includes(symptom.id)
                      ? 'border-accent bg-accent/10'
                      : 'border-gray-200 hover:border-accent/50'
                  }`}
                >
                  <div className="text-2xl mb-2">{symptom.icon}</div>
                  <p className="text-sm font-semibold text-text">{symptom.name}</p>
                </button>
              ))}
            </div>
          </Card>

          {/* Notes */}
          <Card>
            <h2 className="text-2xl font-bold text-text mb-6">Notas Adicionais</h2>
            <textarea
              value={formData.notes}
              onChange={handleNotesChange}
              placeholder="Adicione qualquer informação adicional que possa ser útil..."
              className="input-field h-32"
            />
          </Card>

          {/* Submit Button */}
          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={() => navigate('/dashboard')}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button
              variant="primary"
              onClick={handleSubmit}
              className="flex-1"
            >
              Salvar Registro
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
