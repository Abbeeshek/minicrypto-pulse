import { Hero } from "@/components/Hero";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Technology } from "@/components/Technology";
import { WhyItMatters } from "@/components/WhyItMatters";
import { UseCases } from "@/components/UseCases";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhatWeDo />
      <Technology />
      <WhyItMatters />
      <UseCases />
      <CTA />
    </main>
  );
};

export default Index;
