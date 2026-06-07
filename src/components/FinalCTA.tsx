import { FINAL_CTA_DATA as copyData } from "../data";
import { CALENDLY_LINK } from "../config";
import { ScrollReveal } from "./ScrollReveal";

interface FinalCTAProps {
  onCtaClick: () => void;
}

export function FinalCTA({ onCtaClick }: FinalCTAProps) {
  return (
    <section 
      id="final-cta"
      className="relative w-full bg-[#0A0A0F] pt-[60px] md:pt-[100px] pb-[100px] md:pb-[120px] px-6 md:px-[48px] flex flex-col items-center justify-start overflow-hidden text-center"
    >
      {/* Radial glow background effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] md:w-[700px] h-[300px] md:h-[400px] rounded-full bg-[#F5A623]/15 blur-[100px] pointer-events-none z-0" />

      <div className="relative w-full max-w-[960px] flex flex-col items-center z-10">
        
        {/* Stat Pills */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center items-center gap-[8px] md:gap-[16px] mb-[24px]">
            <div className="flex items-center bg-[#1A1A2E] border border-[#2A2A3E] rounded-full px-[12px] py-[6px] md:px-[24px] md:py-[10px]">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#F5A623] inline-block mr-1.5 md:mr-2 flex-shrink-0" />
              <span className="text-white text-[11px] md:text-[13px] font-bold whitespace-nowrap">61+ Students Placed</span>
            </div>
            <div className="flex items-center bg-[#1A1A2E] border border-[#2A2A3E] rounded-full px-[12px] py-[6px] md:px-[24px] md:py-[10px]">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#F5A623] inline-block mr-1.5 md:mr-2 flex-shrink-0" />
              <span className="text-white text-[11px] md:text-[13px] font-bold whitespace-nowrap">45 Days Average</span>
            </div>
            <div className="flex items-center bg-[#1A1A2E] border border-[#2A2A3E] rounded-full px-[12px] py-[6px] md:px-[24px] md:py-[10px]">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#F5A623] inline-block mr-1.5 md:mr-2 flex-shrink-0" />
              <span className="text-white text-[11px] md:text-[13px] font-bold whitespace-nowrap">$68,000 Avg Salary</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Thin decorative divider */}
        <ScrollReveal delay={0.1}>
          <div className="w-[60px] h-[3px] bg-[#F5A623] rounded-full mx-auto mb-[32px]" />
        </ScrollReveal>

        {/* Headline Line 1 & Line 2 */}
        <ScrollReveal delay={0.15}>
          <div className="space-y-4">
            <h2 className="text-[22px] md:text-[48px] font-extrabold text-white leading-[1.2] md:leading-[1.1] tracking-tight max-w-[860px] mx-auto text-center">
              {copyData.line1}
            </h2>
            <h3 className="text-[18px] md:text-[40px] font-bold md:font-extrabold text-[#F5A623] leading-[1.3] md:leading-[1.2] tracking-tight max-w-[860px] mx-auto mt-[16px] text-center">
              {copyData.line2}
            </h3>
          </div>
        </ScrollReveal>

        {/* Body Paragraph */}
        <ScrollReveal delay={0.25}>
          <p className="mt-[24px] text-[13px] md:text-[17px] text-[#9090AA] leading-[1.6] md:leading-[1.8] max-w-[580px] mx-auto text-center">
            {copyData.body}
          </p>
        </ScrollReveal>

        {/* CTA Button */}
        <ScrollReveal delay={0.35}>
          <div className="mt-[40px] w-full flex flex-col items-center">
            <a 
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onCtaClick}
              className="group block w-full md:inline-block bg-transparent md:bg-[#1A1A1A] p-0 md:p-[6px] rounded-[12px] md:rounded-[16px] shadow-none md:shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] transition-all duration-200 select-none w-full md:w-auto text-center"
              id="cta-final-button"
            >
              <span className="block bg-[#F5A623] group-hover:bg-[#F6B43E] text-[#1A1A2E] font-bold md:font-extrabold text-[15px] md:text-[17px] uppercase tracking-[0.05em] text-center rounded-[12px] md:rounded-[10px] py-[16px] md:py-[20px] px-[24px] md:px-[60px] shadow-[0_4px_16px_rgba(245,166,35,0.3)] md:shadow-[0_4px_16px_rgba(245,166,35,0.35)] transition-all duration-200 whitespace-nowrap w-full md:w-auto">
                {copyData.ctaText}
              </span>
            </a>
            
            {/* Small warning text below */}
            <p className="mt-[16px] text-[13px] italic text-[#6B6B8A] max-w-[600px] mx-auto">
              {copyData.warningText}
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
