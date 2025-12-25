import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import ProductGrid from "@/components/home/ProductGrid";
import AboutSection from "@/components/home/AboutSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}
