import { motion } from "motion/react";
import { HelpCircle, Sparkles, Sliders, Hourglass } from "lucide-react";

const detailImg = "/src/assets/images/elegant_luxury_couple_1780605608388.png";

export default function ProblemSection() {
  const problems = [
    {
      title: "Algorithmic Noise vs Human Sentiment",
      desc: "Standard applications rely on addictive, gamified swipes. Our service is completely analog in matchmaking; we evaluate prospects based on genuine, real-world substance, values, and visual magnetism.",
      icon: Sliders
    },
    {
      title: "The Opportunity Cost of Wasted Hours",
      desc: "For preeminent physicians, lawyers, and elite founders, time is the ultimate luxury. Sorting through unaligned profiles is draining and ineffective.",
      icon: Hourglass
    }
  ];

  return (
    <section
      id="about"
      className="bg-brand-bg py-20 lg:py-32 overflow-hidden border-b border-brand-border"
      aria-label="The Challenge in Modern Relationships"
    >
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Image Frame - Editorial Layout */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 relative aspect-4/3 lg:aspect-3/4 rounded-lg overflow-hidden group shadow-xl border border-brand-border"
            id="problem-image-frame"
          >
            <img
              src={detailImg}
              alt="An elegant, sophisticated couple sharing a warm moment of authentic laughter together"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              referrerPolicy="no-referrer"
            />
            {/* Soft inner vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent pointer-events-none" />
            
            {/* Absolute badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-xs border border-brand-border shadow-md">
              <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold block mb-1">
                The Core Protocol
              </span>
              <p className="text-xs text-brand-text font-serif leading-relaxed italic">
                &ldquo;We don&apos;t match profiles. We curate matches for high-trust professionals.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Column 2: Text Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-6 space-y-8"
            id="problem-text-column"
          >
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-brand-gold font-bold block mb-2">
                A Bespoke Alternative
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-brand-text leading-tight tracking-tight">
                Modern Dating Has Become{" "}
                <span className="italic font-normal text-brand-gold">Exhausting</span>
              </h2>
            </div>

            <div className="space-y-6 text-brand-text font-sans font-light text-base md:text-lg leading-relaxed">
              <p>
                Dating apps create endless choices but very few meaningful connections. High-achieving professionals often struggle to meet compatible partners despite thriving careers.
              </p>
              <p className="text-brand-muted text-sm md:text-base">
                In an era dominated by superficial superficial profile pages, finding deep cognitive alignment, mutual life ambitions, and reciprocal life standards requires deep manual orchestration.
              </p>
            </div>

            {/* Problem Bullet Breakouts */}
            <div className="space-y-6 pt-4 border-t border-brand-border">
              {problems.map((prob, i) => {
                const IconComponent = prob.icon;
                return (
                  <div key={i} className="flex gap-4">
                    <div className="rounded-full bg-brand-gold/10 p-2 text-brand-gold h-10 w-10 flex items-center justify-center flex-shrink-0 mt-1">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-md text-brand-text font-semibold mb-1">
                        {prob.title}
                      </h4>
                      <p className="text-xs md:text-sm text-brand-muted leading-relaxed">
                        {prob.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
