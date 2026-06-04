import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote, Heart, Sparkles } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function SuccessStories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const length = TESTIMONIALS.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + length) % length);
  };

  useEffect(() => {
    if (isPlaying) {
      timeoutRef.current = setInterval(nextSlide, 6500);
    }
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [isPlaying, activeIndex]);

  // Handle keyboard arrow navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section
      className="bg-white py-20 lg:py-32 border-b border-brand-border select-none"
      id="success-stories"
      aria-label="Happy Couples and Success Stories"
    >
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        
        {/* Header Title */}
        <div className="text-center max-w-[700px] mx-auto mb-16 lg:mb-24">
          <span className="text-[11px] uppercase tracking-[0.25em] text-brand-gold font-bold block mb-2">
            The Living Proof
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-text leading-tight tracking-tight">
            Selected Historical Partnerships
          </h2>
          <p className="mt-4 text-sm md:text-base text-brand-muted font-light leading-relaxed">
            Read details about some of our prominent connections. These couples represent the caliber of selective alignment We facilitate.
          </p>
        </div>

        {/* Carousel Viewport Container */}
        <div
          onKeyDown={handleKeyDown}
          tabIndex={0}
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
          className="relative max-w-5xl mx-auto bg-brand-bg rounded-lg border border-brand-border shadow-xl overflow-hidden focus:outline-hidden focus:ring-1 focus:ring-brand-gold/60"
          id="testimonials-carousel"
          aria-roledescription="carousel"
          aria-label="Client testimonials slider"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-12 min-h-[500px]"
            >
              
              {/* Left Side: Editorial Details & Quote */}
              <div className="md:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-between">
                
                {/* Quote details */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <Quote className="h-8 w-8 text-brand-gold opacity-50" />
                    <span className="text-[10px] uppercase tracking-widest text-brand-gold font-sans font-bold">
                      National Cohort Match
                    </span>
                  </div>

                  <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-brand-text leading-snug font-light italic text-[#111827]">
                    &ldquo;{current.quote}&rdquo;
                  </blockquote>

                  {/* Elaborate narrative biography */}
                  <div className="space-y-3 pt-6 border-t border-brand-border/60">
                    <span className="text-xs text-brand-gold uppercase font-serif tracking-widest font-bold block">
                      The Compatibility Case Study
                    </span>
                    <p className="text-xs text-brand-muted leading-relaxed font-sans font-light">
                      {current.story}
                    </p>
                  </div>
                </div>

                {/* Author Info */}
                <div className="pt-8 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-lg text-brand-text font-bold leading-none mb-1">
                      {current.coupleName}
                    </h4>
                    <p className="text-xs text-brand-gold tracking-wide font-sans m-0">
                      {current.location}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 bg-white border border-brand-border rounded-full shadow-2xs">
                    <Heart className="h-3 w-3 text-[#B45309]" />
                    <span className="text-[9px] font-mono uppercase tracking-widest text-[#B45309] font-medium">
                      {current.durationMatched}
                    </span>
                  </div>
                </div>

              </div>

              {/* Right Side: Imagery Aspect */}
              <div className="md:col-span-5 relative h-64 md:h-auto min-h-[300px]">
                <img
                  src={current.imageUrl}
                  alt={`Vetted couple: ${current.coupleName}`}
                  className="absolute inset-0 h-full w-full object-cover filter brightness-[0.95] contrast-[1.02]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-brand-bg md:from-brand-bg/90 via-transparent to-transparent pointer-events-none" />
                
                {/* Decorative gold coordinates logo at bottom */}
                <div className="absolute bottom-6 right-6 flex items-center gap-2 px-3 py-1 bg-brand-primary/90 text-white rounded-xs border border-white/10 backdrop-blur-xs shadow-md">
                  <span className="h-1 w-1 rounded-full bg-brand-gold" />
                  <span className="text-[8px] uppercase tracking-widest font-sans text-slate-300 font-bold">
                    Profile Verified Sec.
                  </span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Sibling Manual Nav buttons (WCAG compliant larger than 48px hover targets) */}
          <div className="absolute bottom-6 left-6 md:left-12 flex items-center gap-3 z-20">
            
            <button
              onClick={prevSlide}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-border bg-white text-brand-text hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 cursor-pointer shadow-xs active:scale-95"
              id="testimonial-prev-arrow"
              aria-label="Previous Testimonial Story"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button
              onClick={nextSlide}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-border bg-white text-brand-text hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 cursor-pointer shadow-xs active:scale-95"
              id="testimonial-next-arrow"
              aria-label="Next Testimonial Story"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            {/* Pagination Bullet Indicators */}
            <div className="flex items-center gap-2 ml-4">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === i ? "w-6 bg-brand-gold" : "w-1.5 bg-brand-border hover:bg-brand-gold/60"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
