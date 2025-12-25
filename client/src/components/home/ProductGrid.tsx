import { motion, AnimatePresence } from "framer-motion";
import product1 from "@assets/generated_images/gold_necklace_product_shot.png";
import product2 from "@assets/generated_images/gold_hoop_earrings_product_shot.png";
import product3 from "@assets/generated_images/pearl_ring_product_shot.png";
import product4 from "@assets/generated_images/gold_bracelet_product_shot.png";
import { useState } from "react";
import { ShoppingBag, X, Plus, Minus } from "lucide-react";

const products = [
  {
    id: 1,
    name: "The Solitaire Pendant",
    price: 120,
    image: product1,
    category: "Necklaces"
  },
  {
    id: 2,
    name: "Classic Gold Hoops",
    price: 85,
    image: product2,
    category: "Earrings"
  },
  {
    id: 3,
    name: "Pearl Essence Ring",
    price: 145,
    image: product3,
    category: "Rings"
  },
  {
    id: 4,
    name: "Dainty Chain Bracelet",
    price: 95,
    image: product4,
    category: "Bracelets"
  }
];

export default function ProductGrid() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="text-center mb-16 space-y-4">
        <h3 className="font-serif text-3xl md:text-4xl text-foreground font-light">New Arrivals</h3>
        <div className="w-12 h-[1px] bg-primary mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-square overflow-hidden bg-secondary/30 rounded-sm mb-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
              
              <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <button 
                  onClick={() => addToCart(product)}
                  className="bg-white/90 text-foreground text-xs uppercase tracking-widest px-6 py-2 hover:bg-white transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
            
            <div className="text-center space-y-2">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{product.category}</p>
              <h4 className="font-serif text-lg text-foreground group-hover:text-primary-foreground/70 transition-colors">
                {product.name}
              </h4>
              <p className="text-sm font-light text-foreground/80">${product.price}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Slide-out Cart Mockup */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-background shadow-2xl z-[70] p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <h4 className="font-serif text-2xl tracking-wide">Your Bag ({cart.length})</h4>
                <button onClick={() => setIsCartOpen(false)} className="hover:opacity-50 transition-opacity">
                  <X className="w-6 h-6" strokeWidth={1} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-8 pr-2">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                    <ShoppingBag className="w-12 h-12 text-muted-foreground/30" strokeWidth={1} />
                    <p className="text-muted-foreground font-light italic">Your bag is empty.</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex gap-6 items-center">
                      <div className="w-20 aspect-square bg-secondary/30 rounded-sm overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <h5 className="font-serif text-lg leading-none">{item.name}</h5>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.category}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center border border-border rounded-sm">
                            <button onClick={() => updateQuantity(item.id, -1)} className="px-2 py-1 hover:bg-secondary/20"><Minus className="w-3 h-3" /></button>
                            <span className="text-xs w-6 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="px-2 py-1 hover:bg-secondary/20"><Plus className="w-3 h-3" /></button>
                          </div>
                          <button onClick={() => removeFromCart(item.id)} className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4">Remove</button>
                        </div>
                      </div>
                      <div className="text-sm font-light">${item.price * item.quantity}</div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="border-t border-border pt-8 mt-auto space-y-6">
                  <div className="flex justify-between items-center text-lg">
                    <span className="font-serif">Subtotal</span>
                    <span className="font-light">${cartTotal}</span>
                  </div>
                  <button className="w-full bg-foreground text-background py-4 text-xs uppercase tracking-[0.3em] hover:bg-foreground/90 transition-colors">
                    Checkout
                  </button>
                  <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest">
                    Complimentary shipping on all orders.
                  </p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
