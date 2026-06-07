import { PROBLEM_DATA as copyData } from "../data";
import { CALENDLY_LINK } from "../config";
import { ScrollReveal } from "./ScrollReveal";
import { ShieldAlert } from "lucide-react";
import { ReactNode } from "react";

interface ProblemProps {
  onCtaClick: () => void;
}

export function Problem({ onCtaClick }: ProblemProps) {
  // Let's create helper to highlight some emotional key phrases in primary color (#F5A623)
  const renderParagraphWithHighlights = (text: string) => {
    // We will do a robust replacement of key emotional phrases with colored spans
    const highlights = [
      "removed automatically. No rejection email. Just silence.",
      "clock is running. One person cannot do 100 targeted applications",
      "simply will not hire someone on F1 OPT. Even a perfect application goes nowhere.",
      "where offers are lost."
    ];

    let result: ReactNode = text;
    for (const phrase of highlights) {
      if (text.includes(phrase)) {
        const parts = text.split(phrase);
        result = (
          <>
            {parts[0]}
            <span className="text-[#F5A623] font-semibold">{phrase}</span>
            {parts[1]}
          </>
        );
        break; // Assume max 1 highlight phrase matches per paragraph
      }
    }
    return result;
  };

  return (
    <section 
      id="problem"
      className="relative w-full bg-[#0F0F1A] py-[40px] md:py-20 px-6 md:px-[48px] flex flex-col items-center justify-start overflow-hidden text-center"
    >
      <div className="w-full max-w-[960px] flex flex-col items-center">
        
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

        {/* Headline */}
        <ScrollReveal delay={0.1}>
          <h2 className="mt-5 text-[32px] md:text-[48px] font-extrabold text-white text-center max-w-[960px] mx-auto leading-[1.1] tracking-tight">
            {copyData.headline}
          </h2>
        </ScrollReveal>

        {/* Problem cards stacked vertically (strictly single column) */}
        <div className="mt-[48px] w-full max-w-[680px] flex flex-col gap-[28px] md:gap-10">
          {copyData.cards.map((item, index) => {
            return (
              <div key={index} className="w-full">
                <ScrollReveal delay={index * 0.1}>
                  <div className="flex flex-col items-start md:items-center">
                    <div className="flex items-baseline gap-2 justify-start md:justify-center mb-3 w-full">
                      {/* Circle badge for desktop only */}
                      <span className="hidden md:flex items-center justify-center w-6 h-6 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/30 text-[#F5A623] text-xs font-bold flex-shrink-0">
                        0{index + 1}
                      </span>
                      <h3 className="text-[16px] md:text-[20px] font-bold text-white tracking-wide text-left md:text-center leading-[1.2]">
                        {/* Inline plain amber number on mobile only */}
                        <span className="inline-block text-[#F5A623] font-bold mr-2 md:hidden flex-shrink-0">
                          0{index + 1}
                        </span>
                        {item.subHeading}
                      </h3>
                    </div>
                    <p className="text-[13px] md:text-[17px] text-[#9090AA] leading-[1.6] md:leading-[1.8] max-w-[685px] mx-auto mt-2 text-left md:text-center">
                      <span className="md:hidden">{item.paragraph}</span>
                      <span className="hidden md:inline">{renderParagraphWithHighlights(item.paragraph)}</span>
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            );
          })}
        </div>

        {/* Closing statement */}
        <ScrollReveal delay={0.5}>
          <p className="mt-12 text-[19px] md:text-[21px] font-extrabold text-[#F5A623] tracking-wide max-w-[700px] mx-auto italic">
            "{copyData.closing}"
          </p>
        </ScrollReveal>

        {/* CTA Button */}
        <ScrollReveal delay={0.6}>
          <div className="mt-[44px] w-full flex justify-center">
            <a 
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onCtaClick}
              className="group block w-full md:inline-block bg-transparent md:bg-[#1A1A1A] p-0 md:p-[6px] rounded-[12px] md:rounded-[16px] shadow-none md:shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] transition-all duration-200 select-none w-full md:w-auto text-center"
              id="cta-problem-button"
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
