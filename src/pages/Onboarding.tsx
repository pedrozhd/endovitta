import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { ProgressBar } from '../components/common/ProgressBar';
import { useApp } from '../contexts/AppContext';

export const Onboarding: React.FC = () => {
  const navigate = useNavigate();
  const { setUser } = useApp();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    gynecologicalHistory: [] as string[],
    mainSymptoms: '',
    sleepHours: '',
    diet: '',
    exercises: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      gynecologicalHistory: prev.gynecologicalHistory.includes(value)
        ? prev.gynecologicalHistory.filter(item => item !== value)
        : [...prev.gynecologicalHistory, value],
    }));
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    const newUser = {
      id: Date.now().toString(),
      name: formData.name,
      age: parseInt(formData.age),
      email: formData.email,
      gynecologicalHistory: formData.gynecologicalHistory,
      mainSymptoms: formData.mainSymptoms,
      sleepHours: parseInt(formData.sleepHours),
      diet: formData.diet,
      exercises: formData.exercises,
    };
    setUser(newUser);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-text mb-2">Bem-vinda ao EndoVitta!</h1>
          <p className="text-text/70">Vamos conhecer você melhor</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <ProgressBar current={step} total={4} />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Step 1: Basic Info */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-text">Dados Básicos</h2>
              
              <div>
                <label className="block text-sm font-semibold text-text mb-2">
                  Nome completo *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Seu nome"
                  className="input-field"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-text mb-2">
                    Idade *
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="Ex: 28"
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-text mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    className="input-field"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Gynecological History */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-text">Histórico Ginecológico</h2>
              <p className="text-text/70">Selecione os itens que se aplicam a você:</p>

              <div className="space-y-3">
                {[
                  { id: 'irregular_periods', label: 'Menstruação irregular' },
                  { id: 'heavy_bleeding', label: 'Sangramento intenso' },
                  { id: 'painful_periods', label: 'Menstruação dolorosa' },
                  { id: 'infertility', label: 'Dificuldade em engravidar' },
                  { id: 'painful_intercourse', label: 'Dor durante relações sexuais' },
                  { id: 'family_history', label: 'Histórico familiar de endometriose' },
                ].map(item => (
                  <label key={item.id} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.gynecologicalHistory.includes(item.id)}
                      onChange={() => handleCheckboxChange(item.id)}
                      className="w-5 h-5 rounded border-gray-300 text-primary"
                    />
                    <span className="text-text">{item.label}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Main Symptoms */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-text">Sintomas Principais</h2>
              
              <div>
                <label className="block text-sm font-semibold text-text mb-2">
                  Descreva seus principais sintomas *
                </label>
                <textarea
                  name="mainSymptoms"
                  value={formData.mainSymptoms}
                  onChange={handleInputChange}
                  placeholder="Ex: Dor pélvica crônica, especialmente durante a menstruação..."
                  className="input-field h-32"
                  required
                />
              </div>
            </div>
          )}

          {/* Step 4: Lifestyle */}
          {step === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-text">Hábitos de Vida</h2>

              <div>
                <label className="block text-sm font-semibold text-text mb-2">
                  Horas de sono por noite *
                </label>
                <input
                  type="number"
                  name="sleepHours"
                  value={formData.sleepHours}
                  onChange={handleInputChange}
                  placeholder="Ex: 7"
                  min="0"
                  max="24"
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-text mb-2">
                  Tipo de alimentação *
                </label>
                <select
                  name="diet"
                  value={formData.diet}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                >
                  <option value="">Selecione...</option>
                  <option value="balanced">Balanceada</option>
                  <option value="vegetarian">Vegetariana</option>
                  <option value="vegan">Vegana</option>
                  <option value="low_carb">Low-carb</option>
                  <option value="other">Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-text mb-2">
                  Nível de atividade física *
                </label>
                <select
                  name="exercises"
                  value={formData.exercises}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                >
                  <option value="">Selecione...</option>
                  <option value="sedentary">Sedentária</option>
                  <option value="light">Leve (1-2x/semana)</option>
                  <option value="moderate">Moderada (3-4x/semana)</option>
                  <option value="intense">Intensa (5+x/semana)</option>
                </select>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-8 border-t">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={step === 1}
            >
              Anterior
            </Button>

            {step < 4 ? (
              <Button
                variant="primary"
                onClick={handleNext}
                disabled={
                  (step === 1 && (!formData.name || !formData.age || !formData.email)) ||
                  (step === 3 && !formData.mainSymptoms) ||
                  (step === 4 && (!formData.sleepHours || !formData.diet || !formData.exercises))
                }
              >
                Próximo
              </Button>
            ) : (
              <Button
                variant="primary"
                onClick={handleSubmit}
                disabled={!formData.sleepHours || !formData.diet || !formData.exercises}
              >
                Concluir
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
