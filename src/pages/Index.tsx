import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Stickers } from "@/components/Stickers";

const Index = () => {  
  return (
    <main className="min-h-screen">
      <Stickers />
      <Hero />
      <Gallery />
      <Features />
      <Footer />
    </main>
  );
};

export default Index;
