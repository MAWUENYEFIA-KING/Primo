import { Store, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              LEGEND<span className="text-gold">PRIMO</span>
            </h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Elevate your style with LegendPrimo - where fashion meets excellence.
            </p>

            <div className="flex gap-3">

              <Button variant="ghost" size="icon" className="hover:text-gold" asChild>
                <a
                  href="https://legendsprimo.myshopify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Store className="h-5 w-5" />
                </a>
              </Button>

              <Button variant="ghost" size="icon" className="hover:text-gold" asChild>
                <a
                  href="https://www.instagram.com/legends_primo?igsh=MWQxbTlsdDU2NWw5Zg=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>

            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#shop" className="hover:text-gold transition-colors">Shop</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Kasoa, Ghana</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+233264970581</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>legendsprimo1@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Subscribe to get special offers and updates
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-primary-foreground text-primary"
              />
              <Button className="bg-gold text-black hover:bg-gold-dark">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} LegendPrimo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
