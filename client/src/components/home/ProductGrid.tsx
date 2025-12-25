import { motion } from "framer-motion";
import product1 from "@assets/generated_images/gold_necklace_product_shot.png";
import product2 from "@assets/generated_images/gold_hoop_earrings_product_shot.png";
import product3 from "@assets/generated_images/pearl_ring_product_shot.png";
import product4 from "@assets/generated_images/gold_bracelet_product_shot.png";

const products = [
  {
    id: 1,
    name: "The Solitaire Pendant",
    price: "$120",
    image: product1,
    category: "Necklaces"
  },
  {
    id: 2,
    name: "Classic Gold Hoops",
    price: "$85",
    image: product2,
    category: "Earrings"
  },
  {
    id: 3,
    name: "Pearl Essence Ring",
    price: "$145",
    image: product3,
    category: "Rings"
  },
  {
    id: 4,
    name: "Dainty Chain Bracelet",
    price: "$95",
    image: product4,
    category: "Bracelets"
  }
];

export default function ProductGrid() {
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
                <button className="bg-white/90 text-foreground text-xs uppercase tracking-widest px-6 py-2 hover:bg-white transition-colors">
                  Quick View
                </button>
              </div>
            </div>
            
            <div className="text-center space-y-2">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{product.category}</p>
              <h4 className="font-serif text-lg text-foreground group-hover:text-primary-foreground/70 transition-colors">
                {product.name}
              </h4>
              <p className="text-sm font-light text-foreground/80">{product.price}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-16">
        <button className="text-xs uppercase tracking-[0.2em] border-b border-foreground/30 pb-1 hover:border-foreground transition-colors">
          View All Products
        </button>
      </div>
    </section>
  );
}
