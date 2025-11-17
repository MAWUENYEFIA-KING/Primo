import { CartItem } from "@/types/product";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onPaymentSuccess: () => void;
}

declare global {
  interface Window {
    PaystackPop: any;
  }
}

export const Checkout = ({ isOpen, onClose, items, onPaymentSuccess }: CheckoutProps) => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
  });

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePayment = () => {
    if (!formData.email || !formData.firstName || !formData.lastName || !formData.phone) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!window.PaystackPop) {
      toast.error("Payment system is loading. Please try again in a moment.");
      return;
    }

    const handler = window.PaystackPop.setup({
      key: 'pk_test_xxxxxxxxxxxxxx', // Replace with your Paystack public key
      email: formData.email,
      amount: total * 100, // Convert to kobo
      currency: 'NGN',
      ref: 'LP' + Math.floor((Math.random() * 1000000000) + 1),
      metadata: {
        custom_fields: [
          {
            display_name: "Customer Name",
            variable_name: "customer_name",
            value: `${formData.firstName} ${formData.lastName}`
          },
          {
            display_name: "Phone Number",
            variable_name: "phone_number",
            value: formData.phone
          }
        ]
      },
      callback: function(response: any) {
        toast.success("Payment successful! Order reference: " + response.reference);
        onPaymentSuccess();
        onClose();
      },
      onClose: function() {
        toast.error("Payment cancelled");
      }
    });

    handler.openIframe();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Checkout</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+234 xxx xxx xxxx"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="border-t border-border pt-4 space-y-2">
            <h3 className="font-bold">Order Summary</h3>
            {items.map((item) => (
              <div key={`${item.id}-${item.selectedSize}`} className="flex justify-between text-sm">
                <span>{item.name} ({item.selectedSize}) x{item.quantity}</span>
                <span className="text-gold">₦{(item.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}
            <div className="flex justify-between font-bold text-lg pt-2 border-t border-border">
              <span>Total:</span>
              <span className="text-gold">₦{total.toLocaleString()}</span>
            </div>
          </div>

          <Button
            size="lg"
            className="w-full bg-gold text-black hover:bg-gold-dark font-bold"
            onClick={handlePayment}
          >
            Pay with Paystack
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Secure payment powered by Paystack. Supports card, bank transfer, and mobile money.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
