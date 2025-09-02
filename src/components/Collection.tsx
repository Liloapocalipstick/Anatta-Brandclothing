import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const collections = [
  {
    title: "Cosmic Serenity",
    subtitle: "by Clancy Pink Punk",
    description: "Ethereal designs that blend spiritual awakening with street style",
    color: "neon-pink"
  },
  {
    title: "Cyber Meditation",
    subtitle: "Digital Zen Collection", 
    description: "Find your inner peace in the digital realm",
    color: "neon-green"
  },
  {
    title: "Neon Dreams",
    subtitle: "Electric Nights Series",
    description: "Glow through the urban jungle with electrifying style",
    color: "neon-blue"
  }
];

export function Collection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-4 cyberpunk-glow">
          <span className="bg-gradient-cosmic bg-clip-text text-transparent">
            Collections
          </span>
        </h2>
        
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Transcend reality through fashion
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Card 
              key={index}
              className="bg-card/30 border-border hover:border-neon-pink/50 transition-all duration-300 backdrop-blur-sm group hover:shadow-glow-pink"
            >
              <CardContent className="p-8 text-center">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-${collection.color}/20 border border-${collection.color} flex items-center justify-center`}>
                  <div className={`w-8 h-8 bg-${collection.color} rounded-full animate-pulse`} />
                </div>
                
                <h3 className="text-2xl font-bold mb-2 cyberpunk-glow text-foreground">
                  {collection.title}
                </h3>
                
                <p className={`text-sm text-${collection.color} mb-4 cyberpunk-glow`}>
                  {collection.subtitle}
                </p>
                
                <p className="text-muted-foreground mb-6">
                  {collection.description}
                </p>
                
                <Button variant="cyber" className="w-full">
                  Explore
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}