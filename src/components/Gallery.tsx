export function Gallery() {
  // Placeholder images - will be replaced with user's slides
  const designs = [
    { name: "Chill Pill", image: "/placeholder.svg" },
    { name: "Futuristic", image: "/placeholder.svg" },
    { name: "So Fresh", image: "/placeholder.svg" },
    { name: "Style", image: "/placeholder.svg" }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-foreground">
            Designs
          </h2>
          <p className="text-muted-foreground text-lg">
            Scroll to explore our collection
          </p>
        </div>
        
        {/* Horizontal Scroll Gallery */}
        <div className="overflow-x-auto pb-6">
          <div className="flex gap-6 min-w-max">
            {designs.map((design, index) => (
              <div key={index} className="flex-shrink-0 w-80 bg-card rounded-lg overflow-hidden">
                <div className="aspect-square bg-muted flex items-center justify-center">
                  <img 
                    src={design.image} 
                    alt={design.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-foreground">
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