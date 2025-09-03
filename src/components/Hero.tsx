import { Button } from "@/components/ui/button";
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" 
             style={{background: 'linear-gradient(135deg, #1b003a 0%, #230443 25%, #2b064d 50%, #340856 75%, #3d0b60 100%)'}}>
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex justify-center mb-12">
          <img 
            src="/lovable-uploads/5acb445e-04cc-4fd5-bab8-b0cdeaf7804c.png" 
            alt="annata street wear logo" 
            className="w-[600px] h-[600px] md:w-[900px] md:h-[900px] object-contain"
          />
        </div>
        
        <p className="text-4xl md:text-7xl mb-12 text-neon-green font-bold">
          STREET WEAR
        </p>
        
        <p className="text-3xl md:text-4xl mb-12 text-foreground/80 max-w-4xl mx-auto font-medium">
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
      
    </section>
  );
}