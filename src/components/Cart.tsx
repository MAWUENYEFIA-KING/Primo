import { CartItem } from "@/types/product";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, size: string, color: string, quantity: number) => void;
  onRemoveItem: (id: string, size: string, color: string) => void;
  onCheckout: () => void;
}

export const Cart = ({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem, onCheckout }: CartProps) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full max-w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Shopping Cart ({items.length})</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[50vh] text-center px-4">
            <p className="text-muted-foreground mb-4">Your cart is empty</p>
            <Button onClick={onClose}>Continue Shopping</Button>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <ScrollArea className="flex-1 -mx-4 px-4 my-4 sm:-mx-6 sm:px-6 sm:my-6">
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                    className="flex flex-col sm:flex-row gap-4 pb-4 border-b border-border"
                  >
                    <div className="w-full sm:w-20 aspect-square bg-secondary rounded overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <h4 className="font-medium truncate">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">Color: {item.selectedColor}</p>
                        <p className="text-sm text-muted-foreground">Size: {item.selectedSize}</p>
                        <p className="text-gold font-bold">GH¢{item.price.toLocaleString()}</p>
                      </div>

                      <div className="flex items-center gap-2 mt-2 flex-wrap">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() =>
                            onUpdateQuantity(
                              item.id,
                              item.selectedSize,
                              item.selectedColor,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                        >
                          <Minus className="h-4 w-4" />
                        </Button>

                        <span className="text-sm w-8 text-center">{item.quantity}</span>

                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() =>
                            onUpdateQuantity(
                              item.id,
                              item.selectedSize,
                              item.selectedColor,
                              item.quantity + 1
                            )
                          }
                        >
                          <Plus className="h-4 w-4" />
                        </Button>

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() =>
                            onRemoveItem(item.id, item.selectedSize, item.selectedColor)
                          }
                          className="ml-auto sm:ml-0"
                        >
                          <Trash2 className="h-5 w-5 text-destructive" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t border-border pt-4 space-y-4 px-4 sm:px-0">
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span className="text-gold">GH¢{total.toLocaleString()}</span>
              </div>

              <Button
                size="lg"
                className="w-full bg-gold text-black hover:bg-gold-dark font-bold"
                onClick={onCheckout}
              >
                Proceed to Order
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
