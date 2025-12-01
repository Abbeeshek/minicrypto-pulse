import heroImage from "@/assets/hero-analytics.jpg";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-gradient">Insights</span> That Power{" "}
              <span className="text-foreground">Smarter Decisions</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Real-time analytics, intelligent dashboards, and deep blockchain insights for the MiniBitcoin ecosystem.
            </p>

            <div className="flex gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-teal to-cyan hover:opacity-90 transition-opacity glow-teal font-display text-base px-8"
              >
                Explore Analytics
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-teal text-teal hover:bg-teal/10 font-display"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 bg-gradient-to-r from-teal/20 to-cyan/20 rounded-2xl blur-2xl" />
            <img 
              src={heroImage} 
              alt="MiniBitcoin Analytics Dashboard - Holographic data visualization with real-time blockchain insights"
              className="relative rounded-2xl shadow-2xl border border-teal/20 w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Decorative data flow lines */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal to-transparent opacity-50" />
    </section>
  );
};
