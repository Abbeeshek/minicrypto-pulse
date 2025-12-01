import { Target, Shield, Zap, TrendingUp, Eye } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Data-Backed Decisions",
    description: "Make informed choices based on comprehensive real-time analytics and historical trends."
  },
  {
    icon: Shield,
    title: "Early Opportunity + Risk Detection",
    description: "Identify emerging opportunities and potential risks before they impact your portfolio."
  },
  {
    icon: Zap,
    title: "Trading Optimization",
    description: "Maximize returns with AI-powered trading signals and market timing insights."
  },
  {
    icon: TrendingUp,
    title: "Behavioral & Financial Insights",
    description: "Understand market psychology and user behavior patterns for strategic advantage."
  },
  {
    icon: Eye,
    title: "Transparent Ecosystem Growth",
    description: "Track MiniBitcoin adoption, development progress, and community engagement metrics."
  }
];

export const WhyItMatters = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why MiniBitcoin Analytics <span className="text-gradient">Matters</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform raw data into strategic advantages
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-teal/50 transition-all duration-300 hover:transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 inline-flex p-3 bg-gradient-to-br from-teal/10 to-cyan/10 rounded-lg">
                <benefit.icon className="w-6 h-6 text-teal" />
              </div>
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
