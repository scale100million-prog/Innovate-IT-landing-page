import { useEffect, useState } from "react";
import { CALENDLY_LINK } from "../config";
import { Clock } from "lucide-react";

interface StickyFooterProps {
  onCtaClick: () => void;
}

export function StickyFooter({ onCtaClick }: StickyFooterProps) {
  // 10 minutes = 600 seconds
  const [secondsLeft, setSecondsLeft] = useState(600);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 600)); // looping reset on complete
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <footer 
      className="fixed bottom-0 left-0 right-0 h-[72px] bg-[rgba(15,15,26,0.97)] backdrop-blur-[16px] border-t border-[#2A2A3E] shadow-[0_-4px_24px_rgba(0,0,0,0.5)] px-4 md:px-[48px] flex items-center justify-center md:justify-between z-50"
    >
      {/* LEFT — Timer block on desktop */}
      <div className="hidden md:flex w-[180px] flex-col justify-center flex-shrink-0">
        <div className="flex items-center gap-[6px] text-[#F5A623] font-semibold">
          <Clock className="w-[18px] h-[18px] animate-pulse flex-shrink-0" />
          <span className="text-[18px] font-bold font-mono tracking-tight leading-none">
            {formatTime(secondsLeft)}
          </span>
        </div>
        <span className="text-[9px] uppercase font-bold tracking-[0.15em] text-[#9090AA] mt-[4px] select-none leading-none">
          LIMITED-TIME OFFER
        </span>
      </div>

      {/* CENTER / RIGHT — CTA Button */}
      <div className="flex justify-center w-full md:w-auto">
        <a
          href={CALENDLY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onCtaClick}
          className="group block w-[90%] md:inline-block md:w-auto bg-[#1A1A2E] md:bg-[#1A1A1A] p-[5px] md:p-[6px] rounded-[12px] md:rounded-[16px] shadow-none md:shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:scale-100 md:hover:scale-[1.02] transition-all duration-200 select-none text-center"
        >
          <span className="block bg-[#F5A623] group-hover:bg-[#F6B43E] text-[#1A1A2E] text-[15px] md:text-[17px] font-bold md:font-extrabold uppercase tracking-[0.05em] text-center rounded-[8px] md:rounded-[10px] py-[16px] md:py-[14px] px-[24px] md:px-[48px] shadow-[0_4px_16px_rgba(245,166,35,0.3)] md:shadow-[0_4px_16px_rgba(245,166,35,0.35)] transition-all duration-200 whitespace-nowrap">
            Book Your Strategy Call
          </span>
        </a>
      </div>

      {/* RIGHT — Spacing element to center the button on desktop */}
      <div className="w-[180px] flex-shrink-0 hidden md:block pointer-events-none" />
    </footer>
  );
}
export default StickyFooter;
