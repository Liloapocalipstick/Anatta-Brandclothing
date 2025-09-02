import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="py-16 px-4 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4 cyberpunk-glow bg-gradient-psychedelic bg-clip-text text-transparent">
            annata
          </h2>
          <p className="text-neon-green cyberpunk-glow text-lg mb-6">
            STREET WEAR
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join the cosmic revolution. Subscribe to stay connected with the universe 
            and never miss our latest drops.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <div className="flex-1 max-w-md">
            <input 
              type="email" 
              placeholder="Enter your cosmic email..."
              className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-neon-pink focus:outline-none cyberpunk-glow text-foreground"
            />
          </div>
          <Button variant="cosmic" size="lg">
            Join Universe
          </Button>
        </div>
        
        <div className="text-center text-sm text-muted-foreground">
          <p>© 2024 annata street wear. All rights reserved. | Cosmic Serenity by Clancy Pink Punk</p>
        </div>
        
        {/* Decorative Elements - NO ANIMATIONS */}
        <div className="absolute bottom-10 left-10 w-2 h-2 bg-neon-pink rounded-full" />
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-neon-green rounded-full" />
      </div>
    </footer>
  );
}