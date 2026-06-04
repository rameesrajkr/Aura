import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Award, Landmark, Sparkles, Quote, CheckCircle } from "lucide-react";

const founderImg = "/src/assets/images/founder_portrait_1780602939170.png";

// Reusable Counter that counts up to target when in view
function AnimatedCounter({ value, duration = 1500, suffix = "" }: { value: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const incrementTime = Math.floor(duration / end);
    
    // Safety check for ultra large increments like 5000
    const stepSize = Math.max(1, Math.floor(end / 60)); // target ~60 frames
    const stepTime = 16.7; // ~60fps

    const timer = setInterval(() => {
      start += stepSize;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function Founder() {
  const stats = [
    { title: "Client Satisfaction", value: 90, suffix: "%", subtitle: "Verifiable Relationship Longevity" },
    { title: "Metropolitan Cities", value: 50, suffix: "+", subtitle: "Active Executive Footprint" },
    { title: "Hand-Curated Introductions", value: 5000, suffix: "+", subtitle: "Bespoke Matches Orchestrated" },
    { title: "Discretion Experience", value: 20, suffix: "+", subtitle: "Years Vetting High-Caliber Circles" },
  ];

  const pressAppearances = [
    { outlet: "Financial Times", quote: "Redefining private executive head-hunting for partnerships." },
    { outlet: "Vogue", quote: "The ultimate concierge for relationship safety." },
    { outlet: "Wall Street Journal", quote: "An offline matchmaking registry designed for the 1%." },
  ];

  return (
    <section
      className="bg-brand-bg py-20 lg:py-32 border-b border-brand-border overflow-hidden"
      id="founder-bio"
      aria-label="About the Founder"
    >
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        
        {/* Editorial Container Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Biography Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8Order pr-0 lg:pr-8"
            id="founder-story-column"
          >
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-brand-gold font-bold block mb-2">
                Executive Leadership
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-brand-text leading-tight tracking-tight">
                About Our Founder:{" "}
                <span className="italic font-normal text-brand-gold font-serif">
                  Vivienne Sterling
                </span>
              </h2>
            </div>

            {/* Story */}
            <div className="space-y-6 text-brand-muted text-sm md:text-base leading-relaxed font-sans font-light">
              <p className="text-brand-text font-serif italic text-lg leading-relaxed">
                &ldquo;Dating in the premium professional class isn&apos;t a game of volumes; it is a meticulous mapping of intellectual architecture and behavioral physics and chemistry.&rdquo;
              </p>
              <p>
                As a former relationship cognitive behavioral therapist with a master&apos;s degree in interpersonal dynamics, Vivienne founded Aura Matchmaking in New York. Disgusted by the transactional, addictive game design of mobile swiping, she engineered an offline headhunting strategy that mirror executive recruitments.
              </p>
              <p>
                Today, Vivienne leads an elite national team of directors who custom-source, screen, and coordinate premium dating experiences globally on behalf of discerning individuals.
              </p>
            </div>

            {/* Media Press Quote Roll */}
            <div className="space-y-4 pt-6 border-t border-brand-border">
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold block">
                Historical Editorial Coverage
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pressAppearances.map((press) => (
                  <div key={press.outlet} className="space-y-1.5 p-4 bg-white rounded-xs border border-brand-border">
                    <span className="text-xs font-serif font-extrabold tracking-tight text-brand-text">
                      {press.outlet}
                    </span>
                    <p className="text-[10px] leading-relaxed text-brand-muted italic">
                      &ldquo;{press.quote}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right: Portrait Image with Overlay Statistics */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 relative"
            id="founder-portrait-column"
          >
            {/* The generated high quality image */}
            <div className="aspect-3/4 rounded-lg overflow-hidden shadow-2xl border border-brand-border group relative">
              <img
                src={founderImg}
                alt="Vivienne Sterling, Founder of Aura Matchmaking, in an elegant luxury office"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              {/* Inner gradient mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 to-transparent pointer-events-none" />
            </div>

            {/* Float Credentials Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xs border border-brand-border shadow-xl max-w-[240px]">
              <div className="flex gap-3">
                <div className="rounded-full bg-brand-primary p-2 text-brand-gold h-9 w-9 flex items-center justify-center flex-shrink-0">
                  <Award className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-brand-gold font-bold block mb-0.5">
                    Admissions Council
                  </span>
                  <p className="text-xs text-brand-text leading-snug font-serif italic">
                    Board-certified clinical advisor & consultant.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
          
        </div>

        {/* STATS COUNTDOWN PANEL */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 mt-20 border-t border-brand-border" id="animated-statistics-panel">
          {stats.map((stat, i) => (
            <div key={i} className="text-center md:text-left space-y-2 select-none">
              <div className="font-serif text-3xl md:text-5xl lg:text-6xl text-brand-text font-black tracking-tight text-brand-primary flex items-center justify-center md:justify-start">
                <span className="text-brand-gold">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
              </div>
              <div>
                <h4 className="font-serif text-sm font-semibold tracking-wide text-brand-text leading-tight">
                  {stat.title}
                </h4>
                <p className="text-[10px] text-brand-muted font-sans font-medium uppercase tracking-widest mt-1">
                  {stat.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
