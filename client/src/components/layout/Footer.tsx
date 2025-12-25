import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary/40 py-20 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        
        {/* Brand */}
        <div className="md:col-span-1 space-y-6 text-center md:text-left">
          <h4 className="font-serif text-2xl tracking-[0.1em] text-foreground">AURIKSHA</h4>
          <p className="text-xs text-foreground/60 leading-relaxed font-light">
            Timeless jewellery for the modern minimalist. 
            Refined, elegant, and ethically crafted.
          </p>
        </div>

        {/* Links */}
        <div className="md:col-span-2 flex flex-col md:flex-row justify-center gap-8 md:gap-24 text-center md:text-left">
          <div className="space-y-4">
            <h5 className="text-xs uppercase tracking-widest text-foreground font-medium">Shop</h5>
            <ul className="space-y-2 text-sm text-foreground/70 font-light">
              <li><a href="#" className="hover:text-foreground transition-colors">All Jewellery</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Best Sellers</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h5 className="text-xs uppercase tracking-widest text-foreground font-medium">Company</h5>
            <ul className="space-y-2 text-sm text-foreground/70 font-light">
              <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Shipping & Returns</a></li>
            </ul>
          </div>
        </div>

        {/* Social / Newsletter */}
        <div className="md:col-span-1 space-y-6 text-center md:text-right">
          <div className="flex justify-center md:justify-end gap-4 text-foreground/60">
            <a href="#" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" strokeWidth={1} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Facebook className="w-5 h-5" strokeWidth={1} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" strokeWidth={1} /></a>
          </div>
          <p className="text-[10px] text-foreground/40 uppercase tracking-wider">
            © 2025 AURIKSHA Jewellery.
          </p>
        </div>

      </div>
    </footer>
  );
}
