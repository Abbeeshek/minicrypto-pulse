import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-teal/20 to-cyan/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Unlock the Power of Data with{" "}
            <span className="text-gradient">MiniBitcoin Analytics</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of users making data-driven decisions with real-time blockchain intelligence
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-teal to-cyan hover:opacity-90 transition-all glow-teal font-display text-lg px-10 py-6 h-auto group"
            >
              Explore Analytics
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-teal/50 text-foreground hover:bg-teal/10 hover:border-teal font-display text-lg px-10 py-6 h-auto"
            >
              Schedule Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            <div className="border-t border-teal/30 pt-6">
              <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Real-time Monitoring</div>
            </div>
            <div className="border-t border-cyan/30 pt-6">
              <div className="text-4xl font-bold text-gradient mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Data Accuracy</div>
            </div>
            <div className="border-t border-teal/30 pt-6">
              <div className="text-4xl font-bold text-gradient mb-2">1M+</div>
              <div className="text-sm text-muted-foreground">Data Points Daily</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
