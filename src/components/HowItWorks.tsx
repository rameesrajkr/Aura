import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { TIMELINE_STEPS } from "../data";

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll inside the container to animate progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section
      ref={containerRef}
      className="bg-brand-bg py-20 lg:py-32 border-b border-brand-border overflow-hidden"
      id="how-it-works"
      aria-label="Matchmaking Procedure Timeline"
    >
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        
        {/* Section Title */}
        <div className="max-w-[700px] mb-16 lg:mb-24">
          <span className="text-[11px] uppercase tracking-[0.25em] text-brand-gold font-bold block mb-2">
            The Bespoke Operational Protocol
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-text leading-tight tracking-tight">
            How It Works: Guided Seamless Curation
          </h2>
          <p className="mt-4 text-sm md:text-base text-brand-muted font-light leading-relaxed">
            Our systematic timeline ensures that nothing is left to chance. Every introducing segment is polished, structured, and entirely confidential.
          </p>
        </div>

        {/* TIMELINE INTERFACE */}
        
        {/* DESKTOP TIMELINE (Horizontal) */}
        <div className="hidden lg:block relative py-12" id="desktop-timeline">
          {/* Background horizontal track */}
          <div className="absolute top-[168px] left-0 w-full h-[1px] bg-brand-border" />
          
          {/* Animated Progress Track */}
          <motion.div 
            style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
            className="absolute top-[168px] left-0 w-full h-[2px] bg-brand-gold"
          />

          <div className="grid grid-cols-5 gap-6 relative">
            {TIMELINE_STEPS.map((step, i) => (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                key={step.stepNumber}
                className="space-y-6 focus-within:outline-hidden group"
              >
                {/* Numeric top node */}
                <div className="space-y-3">
                  <span className="font-mono text-xs text-brand-gold uppercase tracking-[0.2em] font-semibold">
                    Phase {step.stepNumber}
                  </span>
                  <h4 className="font-serif text-lg text-brand-text font-bold tracking-tight min-h-[56px] leading-snug">
                    {step.title}
                  </h4>
                </div>

                {/* Aesthetic connector circle */}
                <div className="relative h-10 flex items-center justify-start z-10">
                  <motion.div 
                    whileHover={{ scale: 1.15 }}
                    className="h-8 w-8 rounded-full bg-white border border-brand-border flex items-center justify-center text-xs font-bold text-brand-primary group-hover:border-brand-gold group-hover:text-brand-gold transition-colors duration-300"
                  >
                    0{step.stepNumber}
                  </motion.div>
                </div>

                {/* Details */}
                <div className="space-y-3 bg-white p-6 rounded-xs border border-brand-border shadow-xs min-h-[190px]">
                  <p className="text-xs text-brand-text leading-relaxed font-light font-sans">
                    {step.description}
                  </p>
                  <p className="text-[10px] text-brand-gold font-sans font-medium uppercase tracking-widest leading-normal pt-2 border-t border-brand-bg">
                    {step.editorialDetail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* MOBILE TIMELINE (Vertical) */}
        <div className="lg:hidden relative pl-8 space-y-12" id="mobile-timeline">
          {/* Vertical Track background */}
          <div className="absolute top-0 left-[15px] bottom-0 w-[1px] bg-brand-border" />
          
          {/* Animated vertical dynamic scale */}
          <motion.div 
            style={{ scaleY: scaleY, transformOrigin: "top" }}
            className="absolute top-0 left-[15px] bottom-0 w-[2px] bg-brand-gold"
          />

          {TIMELINE_STEPS.map((step, i) => (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
              key={step.stepNumber}
              className="relative space-y-4"
            >
              {/* Abs Circle Node */}
              <div className="absolute -left-[33px] top-1.5 h-6 w-6 rounded-full bg-white border-2 border-brand-border flex items-center justify-center text-[9px] font-bold text-brand-primary">
                {step.stepNumber}
              </div>

              <div>
                <span className="font-mono text-[10px] text-brand-gold uppercase tracking-widest font-semibold block mb-0.5">
                  Phase {step.stepNumber}
                </span>
                <h4 className="font-serif text-lg text-brand-text font-bold">
                  {step.title}
                </h4>
              </div>

              <div className="bg-white p-5 rounded-md border border-brand-border shadow-xs space-y-3">
                <p className="text-xs text-brand-muted leading-relaxed font-light">
                  {step.description}
                </p>
                <p className="text-[9px] text-brand-gold font-sans font-medium uppercase tracking-widest leading-normal pt-2 border-t border-brand-border">
                  {step.editorialDetail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
