export function Gallery() {
  // Your amazing slides will go here!
  const designs = [
    { name: "Sweet Collection", image: "/placeholder.svg" },
    { name: "Cosmic Serenity", image: "/placeholder.svg" },
    { name: "Selfie Style", image: "/placeholder.svg" },
    { name: "Sticker Vibes", image: "/placeholder.svg" },
    { name: "Chill Pill & Futuristic", image: "/placeholder.svg" }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 cyberpunk-glow">
            <span className="bg-gradient-psychedelic bg-clip-text text-transparent">
              Cosmic Serenity
            </span>
          </h2>
          <p className="text-neon-green cyberpunk-glow text-lg mb-2">
            by Clancy Pink Punk
          </p>
          <p className="text-muted-foreground">
            Scroll to explore the saturated universe
          </p>
        </div>
        
        {/* Horizontal Scroll Gallery - SATURATED VIBES */}
        <div className="overflow-x-auto pb-6">
          <div className="flex gap-6 min-w-max">
            {designs.map((design, index) => (
              <div key={index} className="flex-shrink-0 w-96 bg-card rounded-lg overflow-hidden glitter-effect holographic border-2 border-neon-pink/30">
                <div className="aspect-video bg-gradient-psychedelic p-4 flex items-center justify-center">
                  <img 
                    src={design.image} 
                    alt={design.name}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="p-4 bg-card/90">
                  <h3 className="text-lg font-bold text-neon-green cyberpunk-glow">
                    {design.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}