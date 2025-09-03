import { Sparkles, Zap, Heart } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Spiritual Energy",
    description: "Each piece channels cosmic serenity and inner peace",
    color: "neon-purple"
  },
  {
    icon: Zap,
    title: "Electric Style", 
    description: "Cyberpunk aesthetics meet streetwear rebellion",
    color: "neon-green"
  },
  {
    icon: Heart,
    title: "Conscious Fashion",
    description: "Sustainably crafted with love for the universe",
    color: "neon-pink"
  }
];

export function Features() {
  return (
    <section className="py-20 px-4" 
             style={{background: 'linear-gradient(180deg, #0f0f23 0%, #1a0033 50%, #2d1b69 100%)'}}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 cyberpunk-glow">
            <span className="bg-gradient-psychedelic bg-clip-text text-transparent">
              Why Choose annata?
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            More than clothing - it's a transcendent experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-${feature.color}/20 border border-${feature.color}/30 group-hover:shadow-glow-pink transition-all duration-300`}>
                  <Icon className={`w-8 h-8 text-${feature.color} cyberpunk-glow`} />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground cyberpunk-glow">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}