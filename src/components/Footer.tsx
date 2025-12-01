import { Store, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container px-4 py-6 md:py-12">

        <div className="grid grid-cols-1 gap-6 mb-8">

          {/* BRAND SECTION */}
          <div>
            <h3 className="text-xl font-bold mb-3">
              LEGEND<span className="text-gold">PRIMO</span>
            </h3>

            <p className="text-xs text-primary-foreground/80 mb-3">
              Premium menswear for the modern gentleman. Elevate your style with our exclusive collection.
            </p>

            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 hover:text-gold"
                asChild
              >
                <a href="https://legendsprimo.myshopify.com/" target="_blank" rel="noopener noreferrer">
                  <Store className="h-4 w-4" />
                </a>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 hover:text-gold"
                asChild
              >
                <a href="https://www.instagram.com/legends_primo?igsh=MWQxbTlsdDU2NWw5Zg==" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* QUICK LINKS + CONTACT INFO SIDE BY SIDE ON MOBILE */}
          <div className="grid grid-cols-2 gap-6">

            {/* QUICK LINKS */}
            <div>
              <h4 className="font-bold text-sm mb-3">Quick Links</h4>
              <ul className="space-y-1 text-xs">
                <li><a href="#home" className="hover:text-gold">Home</a></li>
                <li><a href="#shop" className="hover:text-gold">Shop</a></li>
                <li><a href="#contact" className="hover:text-gold">Contact</a></li>
              </ul>
            </div>

            {/* CONTACT INFO */}
            <div>
              <h4 className="font-bold text-sm mb-3">Contact Info</h4>
              <ul className="space-y-2 text-xs">
                <li className="flex items-start gap-2">
                  <MapPin className="h-3 w-3 mt-0.5" />
                  <span>Kasoa, Ghana</span>
                </li>

                <li className="flex items-center gap-2">
                  <Phone className="h-3 w-3" />
                  <span>+233264970581</span>
                </li>

                <li className="flex items-center gap-2">
                  <Mail className="h-3 w-3" />
                  <span>legendsprimo1@gmail.com</span>
                </li>
              </ul>
            </div>

          </div>

          {/* NEWSLETTER FULL WIDTH UNDER */}
          <div className="max-w-xs">
            <h4 className="font-bold text-sm mb-3">Newsletter</h4>

            <p className="text-xs text-primary-foreground/80 mb-3">
              Subscribe to get special offers and updates
            </p>

            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-primary-foreground text-primary text-xs"
              />
              <Button className="bg-gold text-black hover:bg-gold-dark text-xs">
                Subscribe
              </Button>
            </div>
          </div>

        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center text-xs text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} LegendPrimo. All rights reserved.</p>
        </div>

      </div>
    </footer>
  )
}
