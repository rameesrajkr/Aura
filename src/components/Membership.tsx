import { motion } from "motion/react";
import { Check, Star, Sparkles, Gem, ShieldAlert, ArrowRight } from "lucide-react";
import { MEMBERSHIPS } from "../data";
import { MembershipTier } from "../types";

interface MembershipProps {
  onApplyClick: (tierId?: string) => void;
}

export default function Membership({ onApplyClick }: MembershipProps) {
  return (
    <section
      className="bg-white py-20 lg:py-32 border-b border-brand-border"
      id="membership"
      aria-label="Membership Tiers and Plans"
    >
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        
        {/* Headings */}
        <div className="text-center max-w-[700px] mx-auto mb-16 lg:mb-24">
          <span className="text-[11px] uppercase tracking-[0.25em] text-brand-gold font-bold block mb-2">
            Private Commissions
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-text leading-tight tracking-tight">
            Our Elite Matchmaking Portfolios
          </h2>
          <p className="mt-4 text-sm md:text-base text-brand-muted font-light leading-relaxed">
            Choose a bespoke programmatic structure tailored to your geographic needs, vetting requirements, and standard of living.
          </p>
        </div>

        {/* 3 Price Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch" id="memberships-tier-grid">
          {MEMBERSHIPS.map((tier: MembershipTier, i: number) => {
            const isDark = tier.isFeatured;

            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                whileHover={{ y: -8 }}
                key={tier.id}
                className={`relative flex flex-col justify-between rounded-xs border p-8 transition-all duration-300 shadow-sm hover:shadow-xl cursor-default ${
                  isDark
                    ? "bg-brand-primary text-white border-brand-gold shadow-md lg:scale-103 z-10"
                    : "bg-brand-bg text-brand-text border-brand-border"
                }`}
                id={`membership-tier-card-${tier.id}`}
              >
                
                {/* Featured Badge */}
                {isDark && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-primary px-4 py-1.5 rounded-full text-[9px] uppercase tracking-widest font-black flex items-center gap-1.5 shadow-md">
                    <Star className="h-3 w-3 fill-brand-primary" />
                    Recommended Premium Portfolio
                  </div>
                )}

                {/* Card Top Title & Price */}
                <div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-serif text-2xl font-black tracking-tight">
                      {tier.name}
                    </span>
                    {tier.id === "executive" && (
                      <Gem className="h-5 w-5 text-brand-gold" />
                    )}
                  </div>

                  <p className={`text-xs leading-relaxed font-sans mb-6 ${
                    isDark ? "text-slate-200/90" : "text-brand-muted"
                  }`}>
                    {tier.tagline}
                  </p>

                  <div className="flex items-baseline gap-2 pb-6 border-b border-brand-border mb-6">
                    <span className={`font-serif text-3xl font-black ${
                      isDark ? "text-brand-gold" : "text-brand-primary"
                    }`}>
                      {tier.price}
                    </span>
                    <span className={`text-xs uppercase tracking-wider font-semibold font-sans ${
                      isDark ? "text-slate-400" : "text-brand-muted font-light"
                    }`}>
                      {tier.priceSubscript}
                    </span>
                  </div>

                  {/* Ideal for statement */}
                  <div className={`p-4 rounded-xs text-xs mb-6 border ${
                    isDark 
                    ? "bg-white/5 border-white/10 text-slate-100" 
                    : "bg-white border-brand-border/60 text-brand-text"
                  }`}>
                    <strong className="text-brand-gold uppercase tracking-wider font-bold block mb-1">
                      Ideal Target Profile
                    </strong>
                    {tier.idealFor}
                  </div>

                  {/* Core Program Features */}
                  <div className="space-y-4 mb-8">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-brand-gold block m-0">
                      Portfolio Core Inclusions
                    </span>
                    <ul className="space-y-3" aria-label="Program inclusions details">
                      {tier.features.map((feat) => (
                        <li key={feat} className="flex gap-3 text-xs leading-normal font-sans font-light">
                          <Check className="h-4 w-4 text-brand-gold flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Extra Lifestyle Benefits */}
                  <div className="space-y-3 mb-8 pt-6 border-t border-brand-border/40">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-brand-gold block m-0">
                      Admissions Executive Benefits
                    </span>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit) => (
                        <li key={benefit} className="flex gap-2 text-xs leading-relaxed font-sans font-light italic">
                          <span className="text-brand-gold">•</span>
                          <span className={isDark ? "text-slate-300" : "text-brand-muted"}>
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Call to action button */}
                <button
                  onClick={() => onApplyClick(tier.id)}
                  className={`w-full py-4 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${
                    isDark
                      ? "bg-brand-gold text-[#111827] hover:bg-brand-gold-hover border border-brand-gold"
                      : "bg-brand-primary text-white hover:bg-brand-gold border border-brand-primary hover:border-brand-gold"
                  }`}
                  id={`cta-apply-${tier.id}`}
                >
                  Initiate {tier.name} Vetting
                </button>

              </motion.div>
            );
          })}
        </div>

        {/* Security / Vetting Policy Badge */}
        <div className="mt-16 text-center select-none bg-brand-bg rounded-xs border border-brand-border p-6 max-w-3xl mx-auto flex items-center justify-center gap-4 text-left">
          <div className="bg-brand-gold/10 p-2 rounded-full text-brand-gold flex-shrink-0">
            <LockIcon />
          </div>
          <p className="text-xs text-brand-muted font-sans font-light leading-relaxed">
            <strong className="text-brand-text block mb-0.5">Strict Equal-Admission & Age Protocols</strong> 
            Aura reserves admissions for single, vetted entities over the legal age of 21. Background screenings are performed strictly in our confidential offline servers following your face-to-face consultation.
          </p>
        </div>

      </div>
    </section>
  );
}

function LockIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" strokeWidth="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeWidth="2" />
    </svg>
  );
}
