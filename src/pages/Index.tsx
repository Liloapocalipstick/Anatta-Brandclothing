import { Hero } from "@/components/Hero";
import { Collection } from "@/components/Collection";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Stickers } from "@/components/Stickers";

const Index = () => {  
  return (
    <main className="min-h-screen">
      <Stickers />
      <Hero />
      <Collection />
      <Features />
      <Footer />
    </main>
  );
};

export default Index;
