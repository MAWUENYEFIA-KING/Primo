import { Product } from '../data/products';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onClick: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart, onClick }: ProductCardProps) {
  return (
    <div className="group cursor-pointer" onClick={() => onClick(product)}>
      <div className="relative overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300">
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(product);
              }}
              className="w-full bg-[#D4AF37] text-black py-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#C4A137] transition"
            >
              <ShoppingCart size={18} />
              Quick Add
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-1">
        <p className="text-white/60 text-sm">{product.category}</p>
        <h3 className="text-white font-semibold">{product.name}</h3>
        <p className="text-[#D4AF37] font-bold">${product.price}</p>
      </div>
    </div>
  );
}
