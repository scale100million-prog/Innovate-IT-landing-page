import { useState } from "react";
import { FAQ_DATA as copyData } from "../data";
import { ScrollReveal } from "./ScrollReveal";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
  // Track open state for each FAQ card independently
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq"
      className="relative w-full bg-[#0F0F1A] py-[40px] md:py-20 px-6 md:px-[48px] flex flex-col items-center justify-start overflow-hidden"
    >
      <div className="w-full max-w-[860px] flex flex-col items-center">
        
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
          <h2 className="mt-5 text-[32px] md:text-[48px] font-extrabold text-white text-center max-w-[960px] mx-auto leading-[1.1] tracking-tight mb-12">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>

        {/* FAQ cards max width: 860px */}
        <div className="w-full flex flex-col gap-3">
          {copyData.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="w-full">
                <ScrollReveal delay={index * 0.05}>
                  <div 
                    className={`w-full bg-[#1A1A2E] border border-[#2A2A3E] rounded-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-colors duration-200 overflow-hidden ${
                      isOpen ? "border-[#F5A623]/40" : "hover:border-[#F5A623]/20"
                    }`}
                  >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left py-6 px-[28px] flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="text-[17px] font-bold text-white leading-snug">
                      {item.question}
                    </span>
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#2A2A3E] text-white">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-[#F5A623]" />
                      ) : (
                        <Plus className="w-4 h-4 text-gray-400" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-[28px] pb-6">
                          <div className="border-t border-[#2A2A3E] pt-4 text-[16px] text-[#9090AA] leading-[1.8]">
                            {item.answer}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            </div>
          );
        })}
        </div>

      </div>
    </section>
  );
}
