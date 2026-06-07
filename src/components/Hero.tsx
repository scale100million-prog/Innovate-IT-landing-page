import { CALENDLY_LINK } from "../config";
import { HERO_DATA as copyData } from "../data";
import { ScrollReveal } from "./ScrollReveal";

interface HeroProps {
  onCtaClick: () => void;
}

export function Hero({ onCtaClick }: HeroProps) {
  // Helper to render "F1" with subtle letter spacing for readability
  const renderF1 = (text: string) => {
    if (!text.includes("F1")) return text;
    const parts = text.split("F1");
    return (
      <>
        {parts.map((part, index) => (
          <span key={index}>
            {part}
            {index < parts.length - 1 && (
              <span style={{ letterSpacing: "0.04em" }}>F1</span>
            )}
          </span>
        ))}
      </>
    );
  };

  // Helper to render headlineStart with F1 spacing and keeping "45 Days" together
  const renderHeadlineStart = (text: string) => {
    if (!text.includes("45 Days")) {
      return renderF1(text);
    }
    const parts = text.split("45 Days");
    return (
      <>
        {renderF1(parts[0])}
        <span className="whitespace-nowrap">45 Days</span>
        {renderF1(parts[1] || "")}
      </>
    );
  };

  return (
    <section
      id="hero"
      className="relative w-full bg-[#0a0a0f] pt-0 pb-[20px] md:pb-[40px] flex flex-col items-center justify-start overflow-hidden text-center"
    >
      {/* Radial amber glow bottom right */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_right,rgba(180,80,20,0.35)_0%,rgba(180,80,20,0)_70%)] pointer-events-none" />

      {/* QUALIFIER BAR — always visible, explicitly shown */}
      <div
        style={{
          display: 'block',
          visibility: 'visible',
          opacity: 1,
          width: '100%',
          position: 'relative',
          zIndex: 100,
        }}
        className="w-full flex justify-center px-[12px] md:px-0 mt-[12px] mb-[20px]"
      >
        <div
          style={{
            backgroundColor: '#000000',
            borderRadius: '8px',
            padding: '8px 14px',
            border: '1px solid rgba(255,255,255,0.05)',
            display: 'block',
            visibility: 'visible',
            opacity: 1,
          }}
          className="w-full md:w-auto md:max-w-[860px] md:rounded-[12px] md:py-[10px] md:px-[20px]"
        >
          <p
            style={{
              color: '#FFFFFF',
              fontSize: '11px',
              textAlign: 'center',
              margin: 0,
              padding: 0,
              display: 'block',
              visibility: 'visible',
              opacity: 1,
            }}
            className="md:text-[13px] leading-normal font-normal"
          >
            {copyData.qualifier}
          </p>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1100px] mt-0 px-4 md:px-[48px] flex flex-col items-center">

        {/* Headline with color split */}
        <ScrollReveal delay={0.1}>
          <h1 className="mt-[14px] text-[18px] sm:text-[22px] md:text-[34px] lg:text-[38px] font-extrabold leading-[1.3] md:leading-[1.1] max-w-none md:max-w-[1000px] mx-auto tracking-tight select-none text-center">
            <span className="text-[#E8E8E8]">
              {renderHeadlineStart(copyData.headlineStart)}
            </span>
            <br className="md:hidden" />
            <span className="text-[#F5A623]">
              {renderF1(copyData.headlineHook)}
            </span>
          </h1>
        </ScrollReveal>

        {/* Subheadline */}
        <ScrollReveal delay={0.2}>
          <p className="mt-[12px] text-[13px] md:text-[16px] text-[#9090AA] leading-[1.5] md:leading-[1.65] max-w-[700px] mx-auto text-center">
            {copyData.subheadline.includes("61 placements in the last 90 days.") ? (
              <>
                {copyData.subheadline.split("61 placements in the last 90 days.")[0]}
                <span className="text-[#F5A623] font-bold">
                  61 placements in the last 90 days.
                </span>
                {copyData.subheadline.split("61 placements in the last 90 days.")[1]}
              </>
            ) : (
              copyData.subheadline
            )}
          </p>
        </ScrollReveal>

        {/* VSL Video */}
        <div className="mt-[20px] md:mt-[32px] w-full max-w-[960px] flex flex-col items-center">
          <ScrollReveal delay={0.3} className="w-full">
            <div className="w-full aspect-video rounded-[20px] border-[3px] border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)] bg-[#030305] overflow-hidden relative">
              <div
                className="w-full h-full"
                dangerouslySetInnerHTML={{
                  __html: `<wistia-player media-id="0juowtrtun" aspect="1.7777777777777777"></wistia-player>`,
                }}
              />
            </div>
          </ScrollReveal>
        </div>

        {/* CTA Button */}
        <ScrollReveal delay={0.5}>
          <div className="mt-[32px] w-full flex justify-center">
            
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onCtaClick}
              className="group block w-full md:inline-block bg-transparent md:bg-[#1A1A1A] p-0 md:p-[6px] rounded-[12px] md:rounded-[16px] shadow-none md:shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] transition-all duration-200 select-none md:w-auto text-center"
              id="cta-hero-button"
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
