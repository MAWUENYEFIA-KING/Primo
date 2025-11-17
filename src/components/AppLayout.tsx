import { useState, useMemo } from 'react';
import Header from './Header';
import Hero from './Hero';
import FeaturedSection from './FeaturedSection';
import About from './About';
import ProductCard from './ProductCard';
import FilterBar from './FilterBar';
import ProductModal from './ProductModal';
import Cart, { CartItem } from './Cart';
import Checkout from './Checkout';
import Contact from './Contact';
import Testimonials from './Testimonials';
import Footer from './Footer';
import { products, Product } from '../data/products';



export default function AppLayout() {
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    const sorted = [...filtered];
    if (sortBy === 'price-low') sorted.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-high') sorted.sort((a, b) => b.price - a.price);
    else if (sortBy === 'name') sorted.sort((a, b) => a.name.localeCompare(b.name));
    else if (sortBy === 'featured') sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

    return sorted;
  }, [selectedCategory, sortBy, searchQuery]);

  const addToCart = (product: Product, size: string, quantity: number) => {
    const newItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size,
      quantity
    };
    setCartItems([...cartItems, newItem]);
  };

  const quickAddToCart = (product: Product) => {
    const defaultSize = product.sizes[0];
    addToCart(product, defaultSize, 1);
  };

  const removeFromCart = (itemKey: string) => {
    const index = cartItems.findIndex((item, i) => `${item.id}-${item.size}` === itemKey);
    if (index !== -1) {
      const newItems = [...cartItems];
      newItems.splice(index, 1);
      setCartItems(newItems);
    }
  };

  const handleCheckout = () => {
    setCartOpen(false);
    setCheckoutOpen(true);
  };

  const handleCheckoutSuccess = () => {
    setCartItems([]);
    alert('Order placed successfully!');
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black">
      <Header
        cartCount={cartItems.length}
        onCartClick={() => setCartOpen(true)}
        onSearchChange={setSearchQuery}
      />

      <Hero />

      <FeaturedSection />

      <About />

      <section id="shop" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Shop Collection</h2>
          
          <FilterBar
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={quickAddToCart}
                onClick={setSelectedProduct}
              />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <Contact />


      <Footer />


      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
      />

      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemoveItem={removeFromCart}
        onCheckout={handleCheckout}
      />

      <Checkout
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        items={cartItems}
        total={total}
        onSuccess={handleCheckoutSuccess}
      />
    </div>
  );
}
