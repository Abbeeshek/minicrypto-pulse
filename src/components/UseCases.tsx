import { TrendingUp, BarChart3, Code2, Building2, Users } from "lucide-react";

const useCases = [
  {
    icon: TrendingUp,
    title: "Investors",
    description: "Access comprehensive trend reports, stability metrics, and portfolio performance analytics.",
    features: ["Historical trend analysis", "Risk assessment tools", "Market sentiment tracking"]
  },
  {
    icon: BarChart3,
    title: "Traders",
    description: "Real-time indicators, volatility maps, and AI-powered prediction models for optimal trading.",
    features: ["Live price feeds", "Technical indicators", "AI trade signals"]
  },
  {
    icon: Code2,
    title: "Developers",
    description: "Deep dive into user behavior analytics and application performance metrics.",
    features: ["API analytics", "User flow tracking", "Performance monitoring"]
  },
  {
    icon: Building2,
    title: "Enterprises",
    description: "Monitor network health, adoption rates, and institutional-grade reporting.",
    features: ["Custom dashboards", "White-label reports", "Compliance tracking"]
  },
  {
    icon: Users,
    title: "Community",
    description: "Transparent insights into DAO governance, ecosystem growth, and community engagement.",
    features: ["Governance metrics", "Community activity", "Treasury analytics"]
  }
];

export const UseCases = () => {
  return (
    <section className="py-24 relative bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Use Cases</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored analytics for every role in the ecosystem
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:border-cyan/50 transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-cyan/10 to-teal/10 rounded-xl group-hover:from-cyan/20 group-hover:to-teal/20 transition-colors">
                <useCase.icon className="w-8 h-8 text-cyan" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
              <p className="text-muted-foreground mb-4">{useCase.description}</p>
              
              <ul className="space-y-2">
                {useCase.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
