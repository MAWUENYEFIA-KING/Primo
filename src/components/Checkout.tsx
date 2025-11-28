import { CartItem } from "@/types/product"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { toast } from "sonner"

interface CheckoutProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  onPaymentSuccess: () => void
}

export const Checkout = ({ isOpen, onClose, items, onPaymentSuccess }: CheckoutProps) => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: ""
  })

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleContactSeller = () => {
    if (!formData.email || !formData.firstName || !formData.lastName || !formData.phone) {
      toast.error("Fill all fields")
      return
    }

    const owner = "233264970581"

    const itemsText = items
      .map(i => `${i.name} Size:${i.selectedSize} Color:${i.selectedColor} Qty:${i.quantity}`)
      .join(", ")

    const msg =
      `New order\n` +
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Items: ${itemsText}\n` +
      `Total: GHC${total.toLocaleString()}\n`

    const url = `https://wa.me/${owner}?text=${encodeURIComponent(msg)}`

    window.location.href = url
  }

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
                placeholder="Smith"
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
                placeholder="Yeboah"
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
            {items.map(item => (
              <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex justify-between text-sm">
                <span>
                  {item.name} ({item.selectedSize}, {item.selectedColor}) x{item.quantity}
                </span>
                <span className="text-gold">GH¢{(item.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}
            <div className="flex justify-between font-bold text-lg pt-2 border-t border-border">
              <span>Total:</span>
              <span className="text-gold">GH¢{total.toLocaleString()}</span>
            </div>
          </div>

          <Button
            size="lg"
            className="w-full bg-gold text-black font-bold"
            onClick={handleContactSeller}
          >
            Contact Seller on WhatsApp
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Seller will contact you to complete payment.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
