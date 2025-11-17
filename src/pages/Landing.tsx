import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import logo from '../assets/logo.png';

export const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <img src={logo} alt="EndoVitta Logo" className="h-64 w-64 mx-auto mb-8" />
          <h1 className="sr-only">EndoVitta</h1>
          <p className="text-xl sm:text-2xl text-text/70 mb-4">
            Seu companheiro no monitoramento da endometriose
          </p>
          <p className="text-lg text-text/60 mb-8 max-w-2xl mx-auto">
            Registre seus sintomas, acompanhe sua evolução e receba orientações personalizadas para melhorar sua qualidade de vida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              onClick={() => navigate('/onboarding')}
              className="text-lg px-8 py-4"
            >
              Começar Agora
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate('/login')}
              className="text-lg px-8 py-4"
            >
              Acessar Conta
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center text-text mb-12">
          Como EndoVitta Pode Ajudar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-text mb-3">Monitore Seus Sintomas</h3>
            <p className="text-text/70">
              Registre diariamente a intensidade da dor, localização e outros sintomas para identificar padrões.
            </p>
          </Card>

          <Card>
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold text-text mb-3">Acompanhe Sua Evolução</h3>
            <p className="text-text/70">
              Visualize gráficos e estatísticas que mostram como você está evoluindo ao longo do tempo.
            </p>
          </Card>

          <Card>
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-text mb-3">Aprenda e Cresça</h3>
            <p className="text-text/70">
              Acesse conteúdos educacionais sobre endometriose, alimentação e técnicas de manejo da dor.
            </p>
          </Card>

          <Card>
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-text mb-3">Dicas Personalizadas</h3>
            <p className="text-text/70">
              Receba sugestões diárias baseadas em seus sintomas e hábitos de vida.
            </p>
          </Card>

          <Card>
            <div className="text-4xl mb-4">🏥</div>
            <h3 className="text-xl font-bold text-text mb-3">Compartilhe com Médicos</h3>
            <p className="text-text/70">
              Tenha seus dados organizados para compartilhar com profissionais de saúde.
            </p>
          </Card>

          <Card>
            <div className="text-4xl mb-4">💪</div>
            <h3 className="text-xl font-bold text-text mb-3">Empoderamento</h3>
            <p className="text-text/70">
              Tome controle da sua saúde com informações e ferramentas práticas.
            </p>
          </Card>
        </div>
      </section>

      {/* About Endometriosis */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-text mb-12">
            O que é Endometriose?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-text/70 mb-4">
                Endometriose é uma condição crônica em que o tecido que normalmente reveste o útero (endométrio) cresce fora dele, geralmente nos órgãos reprodutivos e na pelve.
              </p>
              <p className="text-lg text-text/70 mb-4">
                Afeta aproximadamente 1 em cada 10 mulheres em idade reprodutiva e pode causar:
              </p>
              <ul className="space-y-2 text-text/70">
                <li>✓ Dor pélvica crônica</li>
                <li>✓ Dor durante menstruação</li>
                <li>✓ Dor durante relações sexuais</li>
                <li>✓ Problemas de fertilidade</li>
                <li>✓ Fadiga e cansaço</li>
              </ul>
            </div>
            <div className="text-6xl text-center">🌸</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-accent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para começar sua jornada?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Junte-se a milhares de mulheres que estão tomando controle de sua saúde.
          </p>
          <Button
            variant="secondary"
            onClick={() => navigate('/onboarding')}
            className="text-lg px-8 py-4"
          >
            Começar Agora
          </Button>
        </div>
      </section>
    </div>
  );
};
