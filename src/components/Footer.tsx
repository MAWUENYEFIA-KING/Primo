import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">LEGEND</span>
              <span className="text-[#D4AF37]">PRIMO</span>
            </h3>
            <p className="text-white/60 mb-4">
              Premium menswear for the modern gentleman. Crafted with excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-[#D4AF37] transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-[#D4AF37] transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-[#D4AF37] transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition">T-Shirts</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition">Hoodies</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition">Trousers</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition">Jackets</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition">Shipping Info</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition">Returns</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition">Size Guide</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-white/60 mb-4">Subscribe for exclusive offers</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/5 text-white px-4 py-2 rounded-l-lg border border-white/10 focus:outline-none"
              />
              <button className="bg-[#D4AF37] text-black px-4 py-2 rounded-r-lg hover:bg-[#C4A137] transition">
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          <p>&copy; 2025 LegendPrimo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
