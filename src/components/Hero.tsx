import { Button } from "@/components/ui/button";
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" 
             style={{background: 'linear-gradient(135deg, #1b003a 0%, #230443 25%, #2b064d 50%, #340856 75%, #3d0b60 100%)'}}>
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/5acb445e-04cc-4fd5-bab8-b0cdeaf7804c.png" 
            alt="annata street wear logo" 
            className="w-96 h-96 md:w-[500px] md:h-[500px] object-contain"
          />
        </div>
        
        <p className="text-xl md:text-2xl mb-4 text-neon-green">
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