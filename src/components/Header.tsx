import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Footer } from "@/components/Footer"; // import your Footer
import { cn } from "@/lib/utils";

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onSearch: (query: string) => void;
  searchQuery: string;
}

export const Header = ({ cartItemsCount, onCartClick, onSearch, searchQuery }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showFooter, setShowFooter] = useState(false); // state to show footer

  const handleContactClick = () => {
    setShowFooter(true);
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }); // scroll to footer
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-8">
            <a href="/" className="text-2xl font-bold tracking-tight">
              LEGEND<span className="text-gold">PRIMO</span>
            </a>

            <nav className="hidden md:flex gap-6">
              <a href="#home" className="text-sm font-medium hover-gold transition-colors">
                Home
              </a>
              <a href="#shop" className="text-sm font-medium hover-gold transition-colors">
                Shop
              </a>
              <button
                className="text-sm font-medium hover-gold transition-colors"
                onClick={handleContactClick}
              >
                Contact
              </button>
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-4 flex-1 max-w-sm ml-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={onCartClick}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gold text-black text-xs flex items-center justify-center font-bold">
                  {cartItemsCount}
                </span>
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background p-4">
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => onSearch(e.target.value)}
                />
              </div>
            </div>
            <nav className="flex flex-col gap-4">
              <a href="#home" className="text-sm font-medium hover-gold transition-colors">
                Home
              </a>
              <a href="#shop" className="text-sm font-medium hover-gold transition-colors">
                Shop
              </a>
              <button
                className="text-sm font-medium hover-gold transition-colors text-left"
                onClick={handleContactClick}
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </header>

      {showFooter && <Footer />}
    </>
  );
};
