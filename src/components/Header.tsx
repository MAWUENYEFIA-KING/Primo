import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onSearchChange: (query: string) => void;
}

export default function Header({ cartCount, onCartClick, onSearchChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-2xl font-bold tracking-wider">
              <span className="text-white">LEGEND</span>
              <span className="text-[#D4AF37]">PRIMO</span>
            </a>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="text-white/80 hover:text-white transition">Home</a>
              <a href="#shop" className="text-white/80 hover:text-white transition">Shop</a>
              <a href="#about" className="text-white/80 hover:text-white transition">About</a>
              <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <button onClick={() => setSearchOpen(!searchOpen)} className="text-white/80 hover:text-white">
              <Search size={20} />
            </button>
            <button className="text-white/80 hover:text-white">
              <User size={20} />
            </button>
            <button onClick={onCartClick} className="relative text-white/80 hover:text-white">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="pb-4">
            <input
              type="text"
              placeholder="Search products..."
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-white/10 text-white placeholder-white/50 px-4 py-2 rounded-lg border border-white/20 focus:outline-none focus:border-[#D4AF37]"
            />
          </div>
        )}
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            <a href="#home" className="text-white/80 hover:text-white">Home</a>
            <a href="#shop" className="text-white/80 hover:text-white">Shop</a>
            <a href="#about" className="text-white/80 hover:text-white">About</a>
            <a href="#contact" className="text-white/80 hover:text-white">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}
