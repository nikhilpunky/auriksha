import { Link } from "wouter";
import { ShoppingBag, Search, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 py-6 md:px-12",
        isScrolled ? "bg-background/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        {/* Left Links - Desktop */}
        <div className="hidden md:flex gap-8 text-sm tracking-widest font-light text-foreground/80">
          <Link href="/shop" className="hover:text-foreground transition-colors link-underline">SHOP</Link>
          <Link href="/collections" className="hover:text-foreground transition-colors link-underline">COLLECTIONS</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-foreground hover:opacity-70 transition-opacity">
            <Menu className="w-6 h-6" strokeWidth={1} />
          </button>
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link href="/">
            <h1 className={cn(
              "font-serif text-2xl md:text-3xl tracking-[0.2em] font-medium text-foreground transition-all duration-500",
              isScrolled ? "scale-90" : "scale-100"
            )}>
              AURIKSHA
            </h1>
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex gap-6 items-center">
          <button className="text-foreground hover:opacity-70 transition-opacity">
            <Search className="w-5 h-5" strokeWidth={1} />
          </button>
          <button className="text-foreground hover:opacity-70 transition-opacity">
            <ShoppingBag className="w-5 h-5" strokeWidth={1} />
          </button>
        </div>
      </div>
    </nav>
  );
}
