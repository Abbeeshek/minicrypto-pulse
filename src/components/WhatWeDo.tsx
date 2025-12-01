import { Activity, TrendingUp, Brain, LayoutDashboard } from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Real-Time Blockchain Monitoring",
    description: "Track every transaction and network event as it happens across the MiniBitcoin ecosystem."
  },
  {
    icon: TrendingUp,
    title: "Smart Performance Metrics",
    description: "Get comprehensive insights into network health, transaction volume, and adoption trends."
  },
  {
    icon: Brain,
    title: "Predictive AI Insights",
    description: "Leverage machine learning to forecast market movements and identify emerging patterns."
  },
  {
    icon: LayoutDashboard,
    title: "Custom Dashboards",
    description: "Tailored analytics interfaces for traders, developers, and enterprises with role-specific data."
  }
];

export const WhatWeDo = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What <span className="text-gradient">We Do</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive analytics solutions designed for the modern blockchain ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-teal/50 transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 inline-flex p-3 bg-teal/10 rounded-lg group-hover:bg-teal/20 transition-colors">
                <feature.icon className="w-6 h-6 text-teal" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
