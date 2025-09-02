import { Hero } from "@/components/Hero";
import { Collection } from "@/components/Collection";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Collection />
      <Features />
      <Footer />
    </main>
  );
};

export default Index;
