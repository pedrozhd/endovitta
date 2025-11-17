import React, { useState } from 'react';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { Modal } from '../components/common/Modal';
import mockup2 from '../assets/mockup2.jpeg';
import mockup3 from '../assets/mockup3.jpeg';
import mockup4 from '../assets/mockup4.jpeg';
import mockup5 from '../assets/mockup5.jpeg';
import mockup6 from '../assets/mockup6.jpeg';

interface Product {
  id: number;
  name: string;
  category: 'roupas' | 'coletor' | 'compressa' | 'chas';
  price: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  benefits: string[];
  inStock: boolean;
}

const products: Product[] = [
  {
    id: 2,
    name: 'Calça Confortável Terapêutica',
    category: 'roupas',
    price: 89.90,
    rating: 4.8,
    reviews: 245,
    image: mockup2,
    description: 'Calça de cintura alta com tecido elástico que oferece suporte abdominal sem apertar. Ideal para dias de cólica.',
    benefits: [
      'Tecido respirável e macio',
      'Cintura elástica confortável',
      'Suporte abdominal leve',
      'Perfeita para usar em casa ou sair'
    ],
    inStock: true
  },
  {
    id: 3,
    name: 'Top Terapêutico com Suporte',
    category: 'roupas',
    price: 79.90,
    rating: 4.7,
    reviews: 189,
    image: mockup3,
    description: 'Top com tecnologia de compressão leve que alivia desconforto abdominal. Feito com algodão orgânico.',
    benefits: [
      'Algodão orgânico 100%',
      'Compressão leve e confortável',
      'Sem costuras irritantes',
      'Ideal para alívio de cólicas'
    ],
    inStock: true
  },
  {
    id: 4,
    name: 'Coletor Menstrual de Silicone',
    category: 'coletor',
    price: 49.90,
    rating: 4.9,
    reviews: 512,
    image: mockup4,
    description: 'Coletor menstrual reutilizável feito de silicone médico. Dura até 10 anos com cuidados adequados.',
    benefits: [
      'Silicone médico hipoalergênico',
      'Reutilizável por até 10 anos',
      'Ecológico e econômico',
      'Reduz resíduos em 99%',
      'Confortável e seguro'
    ],
    inStock: true
  },
  {
    id: 5,
    name: 'Compressa Térmica Reutilizável',
    category: 'compressa',
    price: 59.90,
    rating: 4.8,
    reviews: 378,
    image: mockup5,
    description: 'Compressa térmica que pode ser aquecida ou congelada. Perfeita para aliviar cólicas e desconfortos.',
    benefits: [
      'Aquecimento por até 2 horas',
      'Reutilizável indefinidamente',
      'Capa removível e lavável',
      'Tamanho ergonômico',
      'Alivia cólicas naturalmente'
    ],
    inStock: true
  },
  {
    id: 6,
    name: 'Kit Chás Funcionais para Endometriose',
    category: 'chas',
    price: 69.90,
    rating: 4.9,
    reviews: 423,
    image: mockup6,
    description: 'Kit com 5 tipos de chás funcionais selecionados para aliviar sintomas de endometriose.',
    benefits: [
      'Chá de gengibre anti-inflamatório',
      'Chá de camomila relaxante',
      'Chá de cúrcuma analgésico',
      'Chá de hortelã digestivo',
      'Chá de hibisco antioxidante',
      'Ingredientes 100% naturais'
    ],
    inStock: true
  }
];

export const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);
  const [filter, setFilter] = useState<'todos' | 'roupas' | 'coletor' | 'compressa' | 'chas'>('todos');

  const toggleFavorite = (productId: number) => {
    setFavorites(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const addToCart = (productId: number) => {
    setCart(prev => [...prev, productId]);
    // Feedback visual
    setTimeout(() => {
      setCart(prev => prev.filter((_, idx) => idx !== prev.indexOf(productId)));
    }, 2000);
  };

  const filteredProducts = filter === 'todos'
    ? products
    : products.filter(p => p.category === filter);

  const categoryLabels = {
    todos: 'Todos os Produtos',
    roupas: 'Roupas Confortáveis',
    coletor: 'Coletor Menstrual',
    compressa: 'Compressa Térmica',
    chas: 'Chás Funcionais'
  };

  return (
    <div className="min-h-screen bg-background pb-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/20 to-secondary/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-text mb-4">🛍️ Loja EndoVitta</h1>
          <p className="text-lg text-text/70">
            Produtos selecionados para melhorar sua qualidade de vida com endometriose
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-text mb-6">Categorias</h2>
          <div className="flex flex-wrap gap-3">
            {(['todos', 'roupas', 'coletor', 'compressa', 'chas'] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  filter === cat
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-text border-2 border-primary/20 hover:border-primary'
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProducts.map(product => (
            <Card
              key={product.id}
              className="flex flex-col hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              {/* Product Image */}
              <div className="relative h-64 bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Fora de Estoque</span>
                  </div>
                )}
                {/* Favorite Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(product.id);
                  }}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:scale-110 transition-transform"
                >
                  <Heart
                    size={20}
                    className={favorites.includes(product.id) ? 'fill-alert text-alert' : 'text-text/50'}
                  />
                </button>
              </div>

              {/* Product Info */}
              <div className="flex-1 flex flex-col p-6">
                <h3 className="text-lg font-bold text-text mb-2">{product.name}</h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-text/70">
                    {product.rating} ({product.reviews} avaliações)
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-text/70 mb-4 flex-1">{product.description}</p>

                {/* Price and Button */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-2xl font-bold text-primary">
                    R$ {product.price.toFixed(2)}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product.id);
                    }}
                    disabled={!product.inStock}
                    className={`p-2 rounded-lg transition-all ${
                      product.inStock
                        ? 'bg-secondary text-white hover:shadow-lg hover:scale-110'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-text/70">Nenhum produto encontrado nesta categoria.</p>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedProduct(null)}
          title={selectedProduct.name}
        >
          <div className="flex flex-col md:flex-row gap-8">
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Details */}
            <div className="md:w-1/2">
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < Math.floor(selectedProduct.rating) ? 'fill-accent text-accent' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-sm text-text/70">
                  {selectedProduct.rating} ({selectedProduct.reviews} avaliações)
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <p className="text-sm text-text/70 mb-2">Preço</p>
                <p className="text-4xl font-bold text-primary">
                  R$ {selectedProduct.price.toFixed(2)}
                </p>
              </div>

              {/* Description */}
              <div className="mb-6">
                <p className="text-sm text-text/70 mb-2">Descrição</p>
                <p className="text-text">{selectedProduct.description}</p>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <p className="text-sm text-text/70 mb-3">Benefícios</p>
                <ul className="space-y-2">
                  {selectedProduct.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-text">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                <p className={`text-sm font-semibold ${selectedProduct.inStock ? 'text-green-600' : 'text-alert'}`}>
                  {selectedProduct.inStock ? '✓ Em Estoque' : '✗ Fora de Estoque'}
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <Button
                  variant="primary"
                  onClick={() => {
                    addToCart(selectedProduct.id);
                    setSelectedProduct(null);
                  }}
                  disabled={!selectedProduct.inStock}
                  className="flex-1"
                >
                  <ShoppingCart size={20} className="mr-2" />
                  Adicionar ao Carrinho
                </Button>
                <button
                  onClick={() => toggleFavorite(selectedProduct.id)}
                  className="p-3 rounded-lg border-2 border-primary hover:bg-primary/10 transition-all"
                >
                  <Heart
                    size={20}
                    className={favorites.includes(selectedProduct.id) ? 'fill-alert text-alert' : 'text-primary'}
                  />
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* Cart Notification */}
      {cart.length > 0 && (
        <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg animate-pulse">
          ✓ Produto adicionado ao carrinho!
        </div>
      )}
    </div>
  );
};
