import { Product } from "@/types/product";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, quantity: number, color: string) => void;
}

export const ProductModal = ({ product, isOpen, onClose, onAddToCart }: ProductModalProps) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  if (!product) return null;

  const currentColor = product.colorVariants[currentColorIndex];
  const displayedImage = currentColor?.image || product.image;
  const selectedColor = currentColor?.name || "";

  const handleNextColor = () => {
    if (currentColorIndex < product.colorVariants.length - 1) {
      setCurrentColorIndex(currentColorIndex + 1);
    }
  };

  const handlePreviousColor = () => {
    if (currentColorIndex > 0) {
      setCurrentColorIndex(currentColorIndex - 1);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    onAddToCart(product, selectedSize, quantity, selectedColor);
    setSelectedSize("");
    setCurrentColorIndex(0);
    setQuantity(1);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{product.name}</DialogTitle>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative aspect-square bg-secondary rounded-lg overflow-hidden">
            <img
              src={displayedImage}
              alt={`${product.name} - ${selectedColor}`}
              className="h-full w-full object-cover transition-all duration-300"
            />
            {product.colorVariants.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
                  onClick={handlePreviousColor}
                  disabled={currentColorIndex === 0}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
                  onClick={handleNextColor}
                  disabled={currentColorIndex === product.colorVariants.length - 1}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 px-3 py-1 rounded-full">
                  <p className="text-sm font-medium">{selectedColor}</p>
                </div>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
              <p className="text-3xl font-bold text-gold">₦{product.price.toLocaleString()}</p>
            </div>
            
            <div>
              <p className="text-foreground">{product.description}</p>
            </div>

            {product.colorVariants.length > 1 && (
              <div className="bg-muted/50 p-3 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  Use the arrows on the image to browse {product.colorVariants.length} available colors
                </p>
              </div>
            )}

            <div>
              <label className="text-sm font-medium mb-2 block">Select Size</label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSize(size)}
                    className={selectedSize === size ? "bg-gold text-black hover:bg-gold-dark" : ""}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Quantity</label>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-xl font-bold w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full bg-gold text-black hover:bg-gold-dark font-bold"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};