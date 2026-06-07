import { SYSTEM_DATA as copyData } from "../data";
import { CALENDLY_LINK } from "../config";
import { ScrollReveal } from "./ScrollReveal";

interface SystemOfSupportProps {
  onCtaClick: () => void;
}

export function SystemOfSupport({ onCtaClick }: SystemOfSupportProps) {
  return (
    <section 
      id="system-of-support"
      className="relative w-full bg-[#0F0F1A] py-[40px] md:py-20 px-6 md:px-[48px] flex flex-col items-center justify-start overflow-hidden"
    >
      {/* Subtle warm amber radial glow at bottom right */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#F5A623]/4 blur-[120px] pointer-events-none z-0" />

      <div className="relative w-full max-w-[800px] flex flex-col items-center z-10">
        
        {/* Section label pill */}
        <ScrollReveal>
          <div className="inline-flex items-center gap-2.5 bg-[#1A1A2E] border border-[#2A2A3E] rounded-full px-5 py-1.5 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#9090AA]">
              {copyData.label}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
          </div>
        </ScrollReveal>

        {/* Section Headline */}
        <ScrollReveal delay={0.1}>
          <h2 className="mt-5 text-[32px] md:text-[48px] font-extrabold text-white text-center max-w-[960px] mx-auto leading-[1.1] tracking-tight">
            {copyData.headline}
          </h2>
        </ScrollReveal>

        {/* 4 Cards stacked vertically */}
        <div className="mt-12 w-full flex flex-col gap-5">
          {copyData.cards.map((item, index) => {
            return (
              <div key={index} className="w-full">
                <ScrollReveal delay={index * 0.1}>
                  <div className="w-full bg-[#1A1A2E] border border-[#2A2A3E] rounded-[20px] p-[28px] flex flex-col sm:flex-row items-start gap-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-xs transition-shadow duration-200">
                    {/* Card number in PRIMARY COLOR */}
                    <span className="text-[32px] font-extrabold text-[#F5A623] leading-none select-none sm:min-w-[48px]">
                      0{index + 1}
                    </span>
                    
                    {/* Card Info */}
                    <div className="flex-1">
                      <h3 className="text-[20px] font-bold text-white">
                        {item.heading}
                      </h3>
                      <p className="mt-2 text-[17px] text-[#9090AA] leading-[1.8]">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <ScrollReveal delay={0.5}>
          <div className="mt-[44px] w-full flex justify-center">
            <a 
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onCtaClick}
              className="group block w-full md:inline-block bg-transparent md:bg-[#1A1A1A] p-0 md:p-[6px] rounded-[12px] md:rounded-[16px] shadow-none md:shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] transition-all duration-200 select-none w-full md:w-auto text-center"
              id="cta-system-button"
            >
              <span className="block bg-[#F5A623] group-hover:bg-[#F6B43E] text-[#1A1A2E] font-bold md:font-extrabold text-[15px] md:text-[17px] uppercase tracking-[0.05em] text-center rounded-[12px] md:rounded-[10px] py-[16px] md:py-[20px] px-[24px] md:px-[60px] shadow-[0_4px_16px_rgba(245,166,35,0.3)] md:shadow-[0_4px_16px_rgba(245,166,35,0.35)] transition-all duration-200 whitespace-nowrap w-full md:w-auto">
                {copyData.ctaText}
              </span>
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
