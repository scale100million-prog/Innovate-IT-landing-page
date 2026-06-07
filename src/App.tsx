/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from "./components/Hero";
import { SocialProof } from "./components/SocialProof";
import { Problem } from "./components/Problem";
import { SystemOfSupport } from "./components/SystemOfSupport";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { StickyFooter } from "./components/StickyFooter";

export default function App() {
  // Centralized click tracker for Meta Pixel custom conversion routing
  const handleCtaClick = () => {
    if (typeof (window as any).fbq === "function") {
      (window as any).fbq("track", "Lead");
    } else {
      console.log("Meta Pixel event triggered: Lead (test sandbox)");
    }
  };

  return (
    <div className="relative min-h-screen bg-white font-sans text-[#1A1A2E] leading-normal antialiased selection:bg-[#F5A623]/20 selection:text-[#1A1A2E] overflow-x-hidden">
      
      {/* 
        Single column full-width layout, top-to-bottom stacking:
        1. Hero (qualifier bar + headline + subheadline + VST Video + CTA)
        2. Social proof section 
        3. Problem section 
        4. What Actually Happens section 
        5. FAQ section 
        6. Final CTA section 
        7. Sticky footer constant coverage element
      */}

      {/* SECTION 1 — HERO */}
      <Hero onCtaClick={handleCtaClick} />

      {/* SECTION 2 — SOCIAL PROOF */}
      <SocialProof onCtaClick={handleCtaClick} />

      {/* SECTION 3 — PROBLEM */}
      <Problem onCtaClick={handleCtaClick} />

      {/* SECTION 4 — WHAT ACTUALLY HAPPENS */}
      <SystemOfSupport onCtaClick={handleCtaClick} />

      {/* SECTION 5 — FAQ */}
      <FAQ />

      {/* SECTION 6 — FINAL CTA */}
      <FinalCTA onCtaClick={handleCtaClick} />

      {/* STICKY FOOTER CONTAINER LAYER */}
      <StickyFooter onCtaClick={handleCtaClick} />

    </div>
  );
}
