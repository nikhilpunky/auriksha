import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <span className="text-primary text-xs uppercase tracking-[0.3em]">Our Philosophy</span>
          
          <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight text-foreground font-light">
            We believe in jewellery that whispers, <br />
            <span className="italic text-foreground/80">not shouts.</span>
          </h3>
          
          <p className="text-foreground/60 font-light leading-relaxed max-w-2xl mx-auto">
            AURIKSHA was born from a desire for everyday elegance. 
            Each piece is thoughtfully designed to be an extension of yourself—minimal enough 
            for the mundane, yet refined enough for the memorable. 
            Crafted with care, designed for you.
          </p>

          <div className="pt-8">
            <span className="font-serif italic text-2xl text-foreground/80 block">Auriksha</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
