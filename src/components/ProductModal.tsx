import { X, Plus, Minus } from 'lucide-react';
import { Product } from '../data/products';
import { useState } from 'react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, quantity: number) => void;
}

export default function ProductModal({ product, onClose, onAddToCart }: ProductModalProps) {
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    onAddToCart(product, selectedSize, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-neutral-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-neutral-900 border-b border-white/10 p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Product Details</h2>
          <button onClick={onClose} className="text-white/60 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 p-6">
          <div className="rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-[#D4AF37] text-sm mb-2">{product.category}</p>
              <h3 className="text-3xl font-bold text-white mb-4">{product.name}</h3>
              <p className="text-2xl font-bold text-[#D4AF37]">${product.price}</p>
            </div>

            <p className="text-white/70">{product.description}</p>

            <div>
              <label className="text-white font-semibold mb-3 block">Select Size</label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg border transition ${
                      selectedSize === size
                        ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                        : 'bg-white/5 text-white border-white/20 hover:border-white/40'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-white font-semibold mb-3 block">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="bg-white/5 p-2 rounded-lg hover:bg-white/10"
                >
                  <Minus size={20} className="text-white" />
                </button>
                <span className="text-white font-bold text-xl w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="bg-white/5 p-2 rounded-lg hover:bg-white/10"
                >
                  <Plus size={20} className="text-white" />
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-[#D4AF37] text-black py-4 rounded-lg font-bold hover:bg-[#C4A137] transition"
            >
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
