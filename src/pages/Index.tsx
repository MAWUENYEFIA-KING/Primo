import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Shop } from "@/components/Shop";
import { Footer } from "@/components/Footer";
import { Cart } from "@/components/Cart";
import { ProductModal } from "@/components/ProductModal";
import { Checkout } from "@/components/Checkout";
import { products } from "@/data/products";
import { Product, CartItem } from "@/types/product";
import { toast } from "sonner";

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleQuickAddToCart = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product: Product, size: string, quantity: number, color: string) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id && item.selectedSize === size && item.selectedColor === color
    );

    if (existingItemIndex > -1) {
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += quantity;
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...product, selectedSize: size, selectedColor: color, quantity }]);
    }

    toast.success("Added to cart!");
  };

  const handleUpdateQuantity = (id: string, size: string, color: string, quantity: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.selectedSize === size && item.selectedColor === color ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (id: string, size: string, color: string) => {
    setCartItems(cartItems.filter((item) => !(item.id === id && item.selectedSize === size && item.selectedColor === color)));
    toast.success("Item removed from cart");
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handlePaymentSuccess = () => {
    setCartItems([]);
    toast.success("Order placed successfully! Thank you for shopping with LegendPrimo.");
  };

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header
        cartItemsCount={cartItemsCount}
        onCartClick={() => setIsCartOpen(true)}
        onSearch={setSearchQuery}
        searchQuery={searchQuery}
      />
      <Hero />
      <Shop
        products={products}
        onAddToCart={handleQuickAddToCart}
        onViewDetails={setSelectedProduct}
        searchQuery={searchQuery}
      />
      <Footer />

      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      <Checkout
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onPaymentSuccess={handlePaymentSuccess}
      />
    </div>
  );
};

export default Index;
