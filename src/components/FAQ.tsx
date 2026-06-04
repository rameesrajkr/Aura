import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle, Lock } from "lucide-react";
import { FAQ_DATA } from "../data";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      className="bg-brand-bg py-20 lg:py-32 border-b border-brand-border"
      id="faq"
      aria-label="Frequently Asked Questions"
    >
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        
        {/* Headings */}
        <div className="text-center max-w-[700px] mx-auto mb-16 lg:mb-24">
          <span className="text-[11px] uppercase tracking-[0.25em] text-brand-gold font-bold block mb-2">
            Discreet Inquiries
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-text leading-tight tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm md:text-base text-brand-muted font-light leading-relaxed">
            Unravel details on our offline vetting registry, luxury security parameters, matched coordinates, and program scopes.
          </p>
        </div>

        {/* ACCORDION GROUP CONTAINER */}
        <div className="max-w-4xl mx-auto space-y-4" id="faq-accordions-group">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="bg-white rounded-xs border border-brand-border shadow-xs overflow-hidden"
                id={`faq-item-card-${item.id}`}
              >
                {/* Accordion Trigger (larger than 48px target) */}
                <button
                  type="button"
                  onClick={() => toggleFaq(item.id)}
                  className="w-full text-left px-6 py-5 md:px-8 flex items-center justify-between gap-6 hover:bg-brand-bg/40 focus:outline-hidden transition-all duration-200 cursor-pointer"
                  aria-expanded={isOpen}
                  id={`faq-trigger-${item.id}`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-serif italic font-bold text-brand-gold text-lg">
                      0{idx + 1}
                    </span>
                    <span className="font-serif text-sm md:text-md font-semibold text-brand-text">
                      {item.question}
                    </span>
                  </div>

                  {/* Icon Indicator wrapper */}
                  <div className="rounded-full bg-brand-bg p-2 text-brand-gold flex-shrink-0">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={isOpen ? "minus" : "plus"}
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </button>

                {/* Smooth Height Reveal Overlay */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 md:px-8 md:pb-8 ml-0 md:ml-10 max-w-[690px] border-t border-brand-bg/40">
                        <p className="text-xs md:text-sm text-brand-muted leading-relaxed font-sans font-light">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

        {/* Dynamic extra question note */}
        <div className="mt-16 text-center">
          <p className="text-xs text-brand-muted font-sans font-light">
            Have a unique situation requiring executive NDAs or proprietary family offices?{" "}
            <a
              href="#contact"
              className="text-brand-gold font-semibold underline hover:text-brand-gold-hover transition-colors inline-flex items-center gap-1.5"
            >
              Consult with our Partner Liaison
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
