export const symptoms = [
  { id: 1, name: 'Cansaço', icon: '😴' },
  { id: 2, name: 'Náusea', icon: '🤢' },
  { id: 3, name: 'Inchaço', icon: '🫧' },
  { id: 4, name: 'Dor nas costas', icon: '🔴' },
  { id: 5, name: 'Dor abdominal', icon: '🔴' },
  { id: 6, name: 'Alteração intestinal', icon: '🚽' },
];

export const educationContent = [
  {
    id: 1,
    title: 'O que é Endometriose?',
    icon: '📚',
    content: 'Endometriose é uma condição em que o tecido que normalmente reveste o útero cresce fora dele. Isso pode causar dor, infertilidade e outros problemas de saúde. Afeta milhões de mulheres em todo o mundo.',
  },
  {
    id: 2,
    title: 'Alimentação Anti-inflamatória',
    icon: '🥗',
    content: 'Uma dieta anti-inflamatória pode ajudar a reduzir os sintomas. Inclua alimentos ricos em ômega-3, antioxidantes e fibras. Evite alimentos processados, açúcar refinado e gorduras trans.',
  },
  {
    id: 3,
    title: 'Exercícios Recomendados',
    icon: '🧘',
    content: 'Exercícios leves como yoga, pilates e caminhadas podem ajudar. Evite exercícios de alto impacto durante períodos de dor intensa. Consulte um profissional antes de iniciar qualquer programa.',
  },
  {
    id: 4,
    title: 'Gerenciamento da Dor',
    icon: '💊',
    content: 'Existem várias estratégias para gerenciar a dor: medicamentos, terapia térmica, técnicas de relaxamento e apoio psicológico. Trabalhe com seu médico para encontrar o melhor plano.',
  },
  {
    id: 5,
    title: 'Saúde Mental',
    icon: '🧠',
    content: 'A endometriose pode afetar sua saúde mental. É importante buscar apoio emocional, conversar com amigos, família ou um terapeuta. Você não está sozinha nessa jornada.',
  },
  {
    id: 6,
    title: 'Quando Procurar Ajuda',
    icon: '🏥',
    content: 'Procure um médico se tiver dor pélvica crônica, dor durante relações sexuais, problemas de fertilidade ou outros sintomas preocupantes. Um diagnóstico adequado é essencial.',
  },
];

export const dailyTips = [
  'Beba bastante água para manter-se hidratada',
  'Pratique técnicas de respiração profunda para relaxar',
  'Mantenha um registro consistente de seus sintomas',
  'Durma o suficiente para ajudar na recuperação',
  'Considere aplicar calor na área afetada',
  'Evite alimentos que pioram seus sintomas',
  'Pratique atividades que o fazem feliz',
  'Conecte-se com outras pessoas com endometriose',
];

export const mockSymptomLogs = [
  {
    id: 1,
    date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    painLevel: 7,
    location: 'lower_abdomen',
    mood: 'sad',
    symptoms: [1, 2],
    notes: 'Dia difícil, muita dor',
  },
  {
    id: 2,
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    painLevel: 5,
    location: 'lower_abdomen',
    mood: 'neutral',
    symptoms: [1],
    notes: 'Melhorando com repouso',
  },
  {
    id: 3,
    date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    painLevel: 4,
    location: 'back',
    mood: 'neutral',
    symptoms: [4],
    notes: 'Dor nas costas',
  },
  {
    id: 4,
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    painLevel: 3,
    location: 'none',
    mood: 'happy',
    symptoms: [],
    notes: 'Dia melhor!',
  },
  {
    id: 5,
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    painLevel: 6,
    location: 'lower_abdomen',
    mood: 'sad',
    symptoms: [1, 2, 5],
    notes: 'Volta dos sintomas',
  },
  {
    id: 6,
    date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    painLevel: 5,
    location: 'lower_abdomen',
    mood: 'neutral',
    symptoms: [1],
    notes: 'Estável',
  },
  {
    id: 7,
    date: new Date().toISOString().split('T')[0],
    painLevel: 4,
    location: 'lower_abdomen',
    mood: 'happy',
    symptoms: [],
    notes: 'Melhorando',
  },
];
