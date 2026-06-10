import { SOCIAL_PROOF_DATA as copyData } from "../data";
import { CALENDLY_LINK } from "../config";
import { ScrollReveal } from "./ScrollReveal";
import React from "react";

interface SocialProofProps {
  onCtaClick: () => void;
}

// Solid gradient placeholder with subtle abstract person silhouette outline
const SilhouettePlaceholder = () => (
  <div className="w-full h-full bg-gradient-to-br from-[#1A1A2E] to-[#2D2D4D] flex items-center justify-center relative overflow-hidden">
    {/* Subtle artistic light blur in background */}
    <div className="absolute w-36 h-36 rounded-full bg-[#F5A623]/10 -top-6 -right-6 blur-xl" />
    <div className="absolute w-28 h-28 rounded-full bg-[#F5A623]/5 -bottom-8 -left-8 blur-lg" />
    
    {/* Simple, high-end person silhouette SVG */}
    <svg 
      className="w-[42%] h-[42%] text-white/10" 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  </div>
);

// Helper function to get real student photos from repo
const getStudentPhoto = (name: string) => {
  const normName = name.trim().toLowerCase();
  if (normName === "jessica") {
    return "https://raw.githubusercontent.com/scale100million-prog/my-images/main/jessica.jpeg";
  }
  if (normName === "helsi" || normName === "hellsi") {
    return "https://raw.githubusercontent.com/scale100million-prog/my-images/main/hiren.jfif";
  }
  if (normName === "happy") {
    return "https://raw.githubusercontent.com/scale100million-prog/my-images/main/happy.jpeg";
  }
  if (normName === "prit") {
    return "https://raw.githubusercontent.com/scale100million-prog/my-images/main/prit.jpeg";
  }
  if (normName === "sushmita") {
    return "https://raw.githubusercontent.com/scale100million-prog/my-images/main/Sushmita.jpeg";
  }
  if (normName === "sreeni") {
    return "https://raw.githubusercontent.com/scale100million-prog/my-images/main/Sreeni.jpeg";
  }
  if (normName === "vaishnavi") {
    return "https://raw.githubusercontent.com/scale100million-prog/my-images/main/Vaishnavi.jpeg";
  }
  return "";
};

export function SocialProof({ onCtaClick }: SocialProofProps) {
  // Helper to render headline with specific numbers highlighted in blue
  const renderHeadlineText = () => {
    return (
      <>
        In the Last 90 Days, <span className="text-[#F5A623]">61+</span> Indian <span style={{ letterSpacing: "0.04em" }}>F1</span> Students Went From No Callbacks to Offer Letter. <span className="text-[#F5A623] whitespace-nowrap">45 Days</span> Average. <span className="text-[#F5A623]">$68,000</span> Average Starting Salary.
      </>
    );
  };

  // Helper to render company logos as styled white pills with small primary-colored dots
  const renderCompanyLogos = (text: string) => {
    const parts = text.split(" · ");
    const companies = parts.slice(0, 3); // ["Deloitte", "Capgemini", "Infosys"]
    const rest = parts.slice(3).join(" · "); // "and more across the US"
    
    return (
      <div className="flex flex-col items-center gap-[8px]">
        <span className="text-[11px] uppercase font-bold tracking-widest text-[#6B6B8A]">
          PLACED AT
        </span>
        <div className="flex flex-wrap items-center justify-center gap-[8px] md:gap-[12px]">
          {companies.map((company, idx) => (
            <span 
              key={idx}
              className="bg-[#1A1A2E] border border-[#2A2A3E] rounded-full px-[14px] md:px-[20px] py-[6px] md:py-[8px] text-[12px] md:text-[13px] font-semibold text-white shadow-[0_2px_8px_rgba(0,0,0,0.02)] whitespace-nowrap flex items-center gap-[8px]"
            >
              <span className="w-2 h-2 rounded-full bg-[#F5A623]" />
              {company}
            </span>
          ))}
          {rest && (
            <span className="text-[12px] md:text-[14px] font-medium text-[#9090AA] whitespace-nowrap">
              {rest}
            </span>
          )}
        </div>
      </div>
    );
  };

  // Floating badge text helper based on name
  const getBadgeText = (name: string) => {
    const normName = name.trim().toLowerCase();
    switch (normName) {
      case "jessica": return "Caterpillar Inc.";
      case "hellsi": return "$90,000 Offer";
      case "happy": return "$110,000 Offer";
      case "prit": return "UI/UX Designer";
      case "sushmita": return "$105,000 Offer";
      case "sreeni": return "Placed in 3 Months";
      case "vaishnavi": return "$95,000 Offer";
      default: return "";
    }
  };

  // Outcome result line description helper
  const renderResultText = (name: string) => {
    const normName = name.trim().toLowerCase();
    if (normName === "jessica") {
      return (
        <div className="flex flex-col gap-[12px] text-left">
          <div>
            <span className="inline-block text-[10px] uppercase font-bold tracking-wider text-[#FF6B6B] bg-[#FFF0F0] border border-[#FFE0E0] rounded-md px-[8px] py-[2px]">
              Before
            </span>
            <p className="mt-[4px] text-[13px] leading-snug text-[#5A5B75]">
              Enrolled January 6. No offer in sight. Went through 40+ interviews over two months with the team preparing her for every single one.
            </p>
          </div>
          <div>
            <span className="inline-block text-[10px] uppercase font-bold tracking-wider text-[#2E7D32] bg-[#F0FFF4] border border-[#E0FFE5] rounded-md px-[8px] py-[2px]">
              After
            </span>
            <p className="mt-[4px] text-[13px] font-semibold leading-snug text-[#1A1A2E]">
              March 21 — offer letter from <span className="text-[#F5A623]">Caterpillar Inc.</span> as Project Manager.
            </p>
          </div>
        </div>
      );
    }
    if (normName === "helsi" || normName === "hellsi") {
      return (
        <div className="flex flex-col gap-[12px] text-left">
          <div>
            <span className="inline-block text-[10px] uppercase font-bold tracking-wider text-[#FF6B6B] bg-[#FFF0F0] border border-[#FFE0E0] rounded-md px-[8px] py-[2px]">
              Before
            </span>
            <p className="mt-[4px] text-[13px] leading-snug text-[#5A5B75]">
              Joined in August. Within a few months had 15 interview opportunities, reached 3 final rounds.
            </p>
          </div>
          <div>
            <span className="inline-block text-[10px] uppercase font-bold tracking-wider text-[#2E7D32] bg-[#F0FFF4] border border-[#E0FFE5] rounded-md px-[8px] py-[2px]">
              After
            </span>
            <p className="mt-[4px] text-[13px] font-semibold leading-snug text-[#1A1A2E]">
              Landed a Software Engineer role at <span className="text-[#F5A623]">Humana Inc.</span> at <span className="text-[#F5A623]">$90,000</span>.
            </p>
          </div>
        </div>
      );
    }
    if (normName === "happy") {
      return (
        <div className="flex flex-col gap-[12px] text-left">
          <div>
            <span className="inline-block text-[10px] uppercase font-bold tracking-wider text-[#FF6B6B] bg-[#FFF0F0] border border-[#FFE0E0] rounded-md px-[8px] py-[2px]">
              Before
            </span>
            <p className="mt-[4px] text-[13px] leading-snug text-[#5A5B75]">
              Joined in December. 27 interview opportunities. Continuous prep and support throughout.
            </p>
          </div>
          <div>
            <span className="inline-block text-[10px] uppercase font-bold tracking-wider text-[#2E7D32] bg-[#F0FFF4] border border-[#E0FFE5] rounded-md px-[8px] py-[2px]">
              After
            </span>
            <p className="mt-[4px] text-[13px] font-semibold leading-snug text-[#1A1A2E]">
              Secured a Software Engineer offer at <span className="text-[#F5A623] font-bold">$110,000</span>.
            </p>
          </div>
        </div>
      );
    }
    if (normName === "prit") {
      return (
        <div className="flex flex-col gap-[12px] text-left">
          <div>
            <span className="inline-block text-[10px] uppercase font-bold tracking-wider text-[#FF6B6B] bg-[#FFF0F0] border border-[#FFE0E0] rounded-md px-[8px] py-[2px]">
              Before
            </span>
            <p className="mt-[4px] text-[13px] leading-snug text-[#5A5B75]">
              Joined in November. 9 interview opportunities in under three months.
            </p>
          </div>
          <div>
            <span className="inline-block text-[10px] uppercase font-bold tracking-wider text-[#2E7D32] bg-[#F0FFF4] border border-[#E0FFE5] rounded-md px-[8px] py-[2px]">
              After
            </span>
            <p className="mt-[4px] text-[13px] font-semibold leading-snug text-[#1A1A2E]">
              Secured a UI/UX Designer position by end of January with full technical and interview support throughout.
            </p>
          </div>
        </div>
      );
    }
    if (normName === "sushmita") {
      return (
        <div className="flex flex-col gap-[12px] text-left">
          <div>
            <span className="inline-block text-[10px] uppercase font-bold tracking-wider text-[#FF6B6B] bg-[#FFF0F0] border border-[#FFE0E0] rounded-md px-[8px] py-[2px]">
              Before
            </span>
            <p className="mt-[4px] text-[13px] leading-snug text-[#5A5B75]">
              Joined in February for the AI Engineer profile. Received resume optimization, marketing support, and mock interview preparation throughout the process.
            </p>
          </div>
          <div>
            <span className="inline-block text-[10px] uppercase font-bold tracking-wider text-[#2E7D32] bg-[#F0FFF4] border border-[#E0FFE5] rounded-md px-[8px] py-[2px]">
              After
            </span>
            <p className="mt-[4px] text-[13px] font-semibold leading-snug text-[#1A1A2E]">
              18 interview calls in 3 months. Secured an AI Engineer position at <span className="text-[#F5A623] font-semibold">$105,000</span>.
            </p>
          </div>
        </div>
      );
    }
    if (normName === "sreeni") {
      return (
        <div className="flex flex-col gap-[12px] text-left">
          <div>
            <span className="inline-block text-[10px] uppercase font-bold tracking-wider text-[#FF6B6B] bg-[#FFF0F0] border border-[#FFE0E0] rounded-md px-[8px] py-[2px]">
              Before
            </span>
            <p className="mt-[4px] text-[13px] leading-snug text-[#5A5B75]">
              Joined the program in September. Attended around 12 interviews with team support for client rounds and technical discussions throughout.
            </p>
          </div>
          <div>
            <span className="inline-block text-[10px] uppercase font-bold tracking-wider text-[#2E7D32] bg-[#F0FFF4] border border-[#E0FFE5] rounded-md px-[8px] py-[2px]">
              After
            </span>
            <p className="mt-[4px] text-[13px] font-semibold leading-snug text-[#1A1A2E]">
              Placed as a <span className="text-[#F5A623] font-semibold">Business Analyst</span> by December.
            </p>
          </div>
        </div>
      );
    }
    if (normName === "vaishnavi") {
      return (
        <div className="flex flex-col gap-[12px] text-left">
          <div>
            <span className="inline-block text-[10px] uppercase font-bold tracking-wider text-[#FF6B6B] bg-[#FFF0F0] border border-[#FFE0E0] rounded-md px-[8px] py-[2px]">
              Before
            </span>
            <p className="mt-[4px] text-[13px] leading-snug text-[#5A5B75]">
              Joined in January. Started getting interview calls within a few weeks. Attended more than 20 interviews and reached 4 final rounds.
            </p>
          </div>
          <div>
            <span className="inline-block text-[10px] uppercase font-bold tracking-wider text-[#2E7D32] bg-[#F0FFF4] border border-[#E0FFE5] rounded-md px-[8px] py-[2px]">
              After
            </span>
            <p className="mt-[4px] text-[13px] font-semibold leading-snug text-[#1A1A2E]">
              Secured a Data Analyst opportunity at <span className="text-[#F5A623] font-semibold">$95,000</span>.
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <section 
      id="social-proof"
      className="relative w-full bg-[#0F0F1A] py-[40px] md:py-[80px] px-6 md:px-[48px] flex flex-col items-center justify-start overflow-hidden animate-fade-in"
    >
      {/* Subtle warm amber radial glow at bottom left */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#F5A623]/4 blur-[120px] pointer-events-none z-0" />

      <div className="relative w-full max-w-[1100px] flex flex-col items-center z-10">
        
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
          <h2 className="mt-[12px] md:mt-5 text-[18px] md:text-[40px] font-extrabold text-white text-center max-w-[850px] mx-auto leading-[1.2] tracking-tight">
            {renderHeadlineText()}
          </h2>
        </ScrollReveal>

        {/* Company logos strip */}
        <ScrollReveal delay={0.2} className="mt-[16px] md:mt-6">
          {renderCompanyLogos(copyData.companyLogos)}
        </ScrollReveal>

        {/* Testimonial card grid */}
        {(() => {
          const renderCard = (item: any, index: number) => {
            const isHappy = item.name === "Happy";
            const isPrit = item.name === "Prit";
            const containerClasses = isHappy || isPrit
              ? "border-[3px] border-[#F5A623] shadow-[0_8px_32px_rgba(0,0,0,0.15)] bg-white"
              : "border border-[#E8E8F0] shadow-[0_8px_32px_rgba(0,0,0,0.08)] bg-white";

            return (
              <div key={index} className="h-full flex w-full">
                <ScrollReveal delay={index * 0.1} className="w-full flex">
                  <div className={`w-full h-[560px] flex flex-col justify-between rounded-[20px] overflow-hidden transition-all duration-300 hover:shadow-lg ${containerClasses}`}>
                    
                    {/* Top Portion - Photo area */}
                    <div className="w-full h-[270px] relative bg-[#1A1A2E] overflow-hidden">
                      {getStudentPhoto(item.name) ? (
                        <img 
                          src={getStudentPhoto(item.name)} 
                          alt={`${item.name} Placement Photo`} 
                          className="w-full h-full object-cover object-top"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <SilhouettePlaceholder />
                      )}
                      
                      {/* Floating Pill Badge */}
                      <div className="absolute bottom-[16px] left-[16px]">
                        <span className="inline-block border-none text-[11px] font-bold rounded-full px-[16px] py-[6px] shadow-sm tracking-wide bg-[#F5A623] text-[#1A1A2E]">
                          {getBadgeText(item.name)}
                        </span>
                      </div>
                    </div>

                    {/* Bottom Portion - Result info area */}
                    <div className="bg-white p-[20px] flex-grow flex flex-col justify-start md:justify-between">
                      <div>
                        <h4 className="text-[20px] font-bold text-[#1A1A2E] leading-none">
                          {item.name}
                        </h4>
                        <p className="text-[11px] uppercase tracking-[0.1em] font-extrabold text-[#F5A623] mt-[6px]">
                          {item.role}
                        </p>
                      </div>
                      
                      <div className="mt-[12px] md:mt-[8px]">
                        {renderResultText(item.name)}
                      </div>
                    </div>

                  </div>
                </ScrollReveal>
              </div>
            );
          };

          return (
            <div className="mt-[40px] w-full max-w-[1100px]">
              {/* On desktop (lg and up), we render two rows: 4 columns, then 3 columns centered */}
              <div className="hidden lg:flex flex-col gap-[20px] w-full">
                <div className="grid grid-cols-4 gap-[20px] items-stretch">
                  {copyData.testimonials.slice(0, 4).map((item, index) => renderCard(item, index))}
                </div>
                <div className="grid grid-cols-3 gap-[20px] max-w-[820px] mx-auto w-full items-stretch">
                  {copyData.testimonials.slice(4).map((item, index) => renderCard(item, index + 4))}
                </div>
              </div>

              {/* On tablet and mobile, we render a single grid for perfect responsive flowing layout */}
              <div className="lg:hidden w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] items-stretch">
                  {copyData.testimonials.map((item, index) => renderCard(item, index))}
                </div>
              </div>
            </div>
          );
        })()}

        {/* CTA Button with 44px top spacing container */}
        <ScrollReveal delay={0.4}>
          <div className="mt-[44px] w-full flex justify-center">
            <a 
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onCtaClick}
              className="group block w-full md:inline-block bg-transparent md:bg-[#1A1A1A] p-0 md:p-[6px] rounded-[12px] md:rounded-[16px] shadow-none md:shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] transition-all duration-200 select-none w-full md:w-auto text-center"
              id="cta-proof-button"
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
