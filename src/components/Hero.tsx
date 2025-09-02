import { Button } from "@/components/ui/button";
import heroImage from "@/assets/finatiq-hero.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Cyberpunk Grid Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 via-transparent to-neon-blue/20" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-black mb-6 cyberpunk-glow bg-gradient-psychedelic bg-clip-text text-transparent">
          annata
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 text-neon-green cyberpunk-glow">
          STREET WEAR
        </p>
        
        <p className="text-lg mb-8 text-foreground/80 max-w-2xl mx-auto">
          Cosmic Serenity meets urban rebellion. Experience the fusion of spiritual energy 
          and cyberpunk aesthetics in every piece.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="neon" size="xl">
            Shop Collection
          </Button>
          <Button variant="cyber" size="xl">
            Explore Universe
          </Button>
        </div>
      </div>
      
      {/* Floating Elements - NO ANIMATIONS */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-neon-pink rounded-full" />
      <div className="absolute top-40 right-32 w-6 h-6 bg-neon-green rounded-full" />
      <div className="absolute bottom-32 left-16 w-3 h-3 bg-neon-blue rounded-full" />
    </section>
  );
}