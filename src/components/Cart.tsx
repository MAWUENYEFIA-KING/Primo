import { X, Trash2 } from 'lucide-react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

export default function Cart({ isOpen, onClose, items, onRemoveItem, onCheckout }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/60 z-50" onClick={onClose}></div>
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-neutral-900 z-50 shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white">Shopping Cart</h2>
          <button onClick={onClose} className="text-white/60 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center text-white/60 py-12">
              <p>Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex gap-4 bg-white/5 p-4 rounded-lg">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                  <div className="flex-1">
                    <h3 className="text-white font-semibold">{item.name}</h3>
                    <p className="text-white/60 text-sm">Size: {item.size}</p>
                    <p className="text-[#D4AF37] font-bold">${item.price} x {item.quantity}</p>
                  </div>
                  <button
                    onClick={() => onRemoveItem(`${item.id}-${item.size}`)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-white/10 p-6 space-y-4">
          <div className="flex justify-between text-lg">
            <span className="text-white/80">Subtotal</span>
            <span className="text-white font-bold">${total.toFixed(2)}</span>
          </div>
          <button
            onClick={onCheckout}
            disabled={items.length === 0}
            className="w-full bg-[#D4AF37] text-black py-4 rounded-lg font-bold hover:bg-[#C4A137] transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
}
