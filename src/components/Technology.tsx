import { Code, Cpu, Lock, Network } from "lucide-react";

const techFeatures = [
  {
    icon: Brain,
    title: "AI-Driven Data Processing",
    description: "Advanced algorithms process millions of data points in real-time for actionable insights."
  },
  {
    icon: TrendingUp,
    title: "Deep Learning Trend Forecasting",
    description: "Neural networks trained on historical data predict market movements with high accuracy."
  },
  {
    icon: Lock,
    title: "Secure & Accurate Data Pipelines",
    description: "Enterprise-grade security ensures your data remains protected while maintaining precision."
  },
  {
    icon: Network,
    title: "Cross-Chain Analytics Engine",
    description: "Monitor and analyze data across multiple blockchain networks from a single interface."
  }
];

// Import Brain and TrendingUp from lucide-react for use
import { Brain, TrendingUp } from "lucide-react";

export const Technology = () => {
  return (
    <section className="py-24 relative bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Technology</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powered by cutting-edge AI and blockchain infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {techFeatures.map((feature, index) => (
            <div 
              key={index}
              className="relative group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal/5 to-cyan/5 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-card border border-border rounded-xl p-8 hover:border-cyan/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan/10 rounded-lg group-hover:bg-cyan/20 transition-colors flex-shrink-0">
                    <feature.icon className="w-8 h-8 text-cyan" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative tech elements */}
        <div className="mt-16 flex justify-center gap-8 opacity-30">
          <Code className="w-6 h-6 text-silver animate-float" />
          <Cpu className="w-6 h-6 text-silver animate-float" style={{ animationDelay: "0.5s" }} />
          <Network className="w-6 h-6 text-silver animate-float" style={{ animationDelay: "1s" }} />
        </div>
      </div>
    </section>
  );
};
