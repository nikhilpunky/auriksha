import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/editorial_jewellery_hero_shot.png";

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-secondary/20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Editorial Jewellery Model"
          className="w-full h-full object-cover object-top opacity-90"
        />
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-32 items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="text-white/90 tracking-[0.3em] text-xs md:text-sm uppercase font-light drop-shadow-md">
            Minimal. Elegant. Yours.
          </p>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white tracking-wide font-light drop-shadow-lg">
            Everyday <br className="md:hidden" />
            <span className="italic">Luxury</span>
          </h2>

          <div className="pt-8">
            <button 
              className="group relative px-8 py-3 text-white border border-white/40 hover:border-white/80 transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10 tracking-widest text-xs uppercase group-hover:text-white transition-colors duration-500">
                Explore Collection
              </span>
              <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
