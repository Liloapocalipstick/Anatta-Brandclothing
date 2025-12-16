import { Button } from "@/components/ui/button";
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" 
             style={{background: 'linear-gradient(135deg, #1b003a 0%, #230443 25%, #2b064d 50%, #340856 75%, #3d0b60 100%)'}}>
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex justify-center mb-12">
          <img 
            src="/lovable-uploads/anatta-logo.png" 
            alt="Anatta by Clancy Pink Punk Yoga Clothing logo" 
            className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] object-contain"
          />
        </div>
        
        <div className="flex flex-col gap-2 mb-12">
          <p className="text-4xl md:text-7xl text-neon-green font-bold">
            STREET WEAR
          </p>
          <p className="text-3xl md:text-5xl text-neon-pink font-bold">
            YOGA CLOTHING
          </p>
          <p className="text-2xl md:text-4xl text-neon-cyan font-bold">
            TOYS DESIGN
          </p>
        </div>
        
        <p className="text-3xl md:text-4xl mb-12 text-foreground/80 max-w-4xl mx-auto font-medium">
          Cosmic Serenity meets urban rebellion. Experience the fusion of spiritual energy 
          and cyberpunk aesthetics in every piece.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
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