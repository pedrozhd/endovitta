import React, { useState } from 'react';
import { Card } from '../components/common/Card';
import { Modal } from '../components/common/Modal';
import { educationContent } from '../data/mockData';

export const Education: React.FC = () => {
  const [selectedContent, setSelectedContent] = useState<typeof educationContent[0] | null>(null);

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-text mb-2">Centro de Educação</h1>
        <p className="text-text/70 mb-8">
          Aprenda mais sobre endometriose e como gerenciar seus sintomas
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationContent.map(content => (
            <Card
              key={content.id}
              onClick={() => setSelectedContent(content)}
              className="cursor-pointer hover:shadow-xl"
            >
              <div className="text-5xl mb-4">{content.icon}</div>
              <h3 className="text-xl font-bold text-text mb-3">{content.title}</h3>
              <p className="text-text/70 line-clamp-3 mb-4">{content.content}</p>
              <button className="text-primary font-semibold hover:underline">
                Saiba mais →
              </button>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedContent && (
        <Modal
          isOpen={!!selectedContent}
          onClose={() => setSelectedContent(null)}
          title={selectedContent.title}
        >
          <div className="flex items-start gap-6">
            <div className="text-6xl flex-shrink-0">{selectedContent.icon}</div>
            <div>
              <p className="text-lg text-text/70 leading-relaxed mb-4">
                {selectedContent.content}
              </p>
              <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                <p className="text-sm font-semibold text-text mb-2">💡 Dica:</p>
                <p className="text-sm text-text/70">
                  Consulte um profissional de saúde para orientações personalizadas sobre seu caso específico.
                </p>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
