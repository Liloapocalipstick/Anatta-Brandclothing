export function Gallery() {
  // Your amazing saturated designs!
  const designs = [
    { name: "Chill Pill & Futuristic", image: "/lovable-uploads/22d6b1d6-55a0-4efd-9f04-d753ba846194.png" },
    { name: "So Fresh & Style", image: "/lovable-uploads/1c12a520-adfc-4cee-aa14-4d5bd9ef04c9.png" },
    { name: "Cosmic Serenity Collection", image: "/lovable-uploads/8660c36b-d066-4c69-bdfe-6bf5445ee25b.png" },
    { name: "Cosmic Accessories", image: "/lovable-uploads/722a2717-8070-42d3-9c49-6fa577483bee.png" },
    { name: "Catálogo - The Three Jewels", image: "/lovable-uploads/cbd3403e-94a5-4c9e-9467-1172c201e43c.png" }
  ];

  return (
    <section className="py-20 px-4" 
             style={{background: 'linear-gradient(180deg, #0f0f23 0%, #1a0033 50%, #2d1b69 100%)'}}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/5acb445e-04cc-4fd5-bab8-b0cdeaf7804c.png" 
              alt="annata street wear logo" 
              className="w-48 h-48 md:w-64 md:h-64 object-contain"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-neon-green">
            Cosmic Serenity
          </h2>
          <p className="text-neon-pink text-lg mb-2">
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
              <div key={index} className="flex-shrink-0 w-96 bg-card rounded-lg overflow-hidden holographic border-2 border-neon-pink/30">
                <div className="aspect-video bg-card p-4 flex items-center justify-center">
                  <img 
                    src={design.image} 
                    alt={design.name}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="p-4 bg-card/90">
                  <h3 className="text-lg font-bold text-neon-green">
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