import { useState } from 'react';
import { X } from 'lucide-react';
import { CartItem } from './Cart';

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  total: number;
  onSuccess: () => void;
}

export default function Checkout({ isOpen, onClose, items, total, onSuccess }: CheckoutProps) {
  const [formData, setFormData] = useState({ email: '', name: '', phone: '' });
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const amountInNGN = Math.round(total * 1650);

    try {
      // @ts-ignore
      const handler = window.PaystackPop.setup({
        key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || 'pk_test_default',
        email: formData.email,
        amount: amountInNGN * 100,
        currency: 'NGN',
        ref: 'LP-' + Date.now() + '-' + Math.floor(Math.random() * 1000000),
        callback: function(response: any) {
          alert('Payment successful! Reference: ' + response.reference);
          onSuccess();
          onClose();
          setLoading(false);
        },
        onClose: function() {
          setLoading(false);
        }
      });
      handler.openIframe();
    } catch (error) {
      alert('Payment initialization failed');
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-neutral-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-neutral-900 border-b border-white/10 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Checkout</h2>
          <button onClick={onClose} className="text-white/60 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="text-white font-semibold mb-2 block">Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/5 text-white px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
            <div>
              <label className="text-white font-semibold mb-2 block">Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 text-white px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
            <div>
              <label className="text-white font-semibold mb-2 block">Phone *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-white/5 text-white px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
          </div>

          <div className="border-t border-white/10 pt-6">
            <div className="space-y-2 mb-6">
              <div className="flex justify-between">
                <span className="text-white/60">Subtotal (USD)</span>
                <span className="text-white">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl">
                <span className="text-white font-semibold">Total (NGN)</span>
                <span className="text-[#D4AF37] font-bold">₦{(total * 1650).toLocaleString()}</span>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#D4AF37] text-black py-4 rounded-lg font-bold hover:bg-[#C4A137] transition disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Pay with Paystack'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
