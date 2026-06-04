import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Mail, Sparkles, Linkedin, Instagram, ShieldCheck, Check } from "lucide-react";

const heroImg = "/src/assets/images/luxury_couple_hero_1780602919287.png";

interface FooterProps {
  onApplyClick: (tierId?: string) => void;
}

export default function Footer({ onApplyClick }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setNewsletterEmail("");
    }, 1200);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary text-white select-none" id="footer-section">
      
      {/* FINAL LANDING CTA BLOCK - IMMERSIVE GRADIENT WITH PARALLAX EFFECT */}
      <section className="relative overflow-hidden border-b border-white/10" id="final-cta">
        {/* Background Parallax Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Private luxury dining environment background"
            className="w-full h-full object-cover opacity-25 scale-103 blur-xs filter brightness-50"
            referrerPolicy="no-referrer"
          />
          {/* Cover gradient masks */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/95 to-brand-primary" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] px-4 md:px-6 py-24 lg:py-32 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">
              The Sovereign Partnership Vow
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-serif text-3xl md:text-5xl lg:text-[56px] text-[#FCFAF7] leading-tight max-w-4xl mx-auto tracking-tight"
          >
            Your Next Introduction Could{" "}
            <span className="italic font-normal text-brand-gold">Change Everything</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xs md:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed font-sans font-light"
          >
            We manage inquiries with absolute confidence and elite discretion. Join our private sandbox admissions directory today.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <button
              onClick={() => onApplyClick("premium")}
              className="px-8 py-4 bg-brand-gold text-brand-primary font-bold text-xs uppercase tracking-widest hover:bg-brand-gold-hover hover:-translate-y-0.5 active:translate-y-0 transition-all rounded-xs shadow-lg shadow-black/20 cursor-pointer"
              id="final-apply-btn"
            >
              Apply for Membership
            </button>
            <button
              onClick={() => onApplyClick("essential")}
              className="px-8 py-4 bg-white/5 backdrop-blur-md text-white border border-white/25 font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-brand-primary hover:-translate-y-0.5 active:translate-y-0 transition-all rounded-xs cursor-pointer"
              id="final-consult-btn"
            >
              Book Private Consultation
            </button>
          </motion.div>
        </div>
      </section>

      {/* CORE FOOTER NAVIGATION & DIRECTORIES */}
      <section className="mx-auto max-w-[1200px] px-4 md:px-6 py-16 lg:py-24" id="footer-directory">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Logo Brand / Pitch block */}
          <div className="md:col-span-4 space-y-6">
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className="rounded-xs border border-brand-gold p-1.5 bg-white/5">
                <Sparkles className="h-5 w-5 text-brand-gold" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-[0.18rem] uppercase font-bold leading-none text-[#FCFAF7]">
                  AURA
                </span>
                <span className="text-[8px] tracking-[0.2em] uppercase font-medium text-brand-gold mt-1">
                  Matchmaking Concierge
                </span>
              </div>
            </a>

            <p className="text-xs text-slate-400 font-sans font-light leading-relaxed">
              Bespoke offline matchmaking registry for doctors, executives, venture capitalists, and leaders across the United States. Delivering high-trust lifetime connections since 2006.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/5 hover:bg-white/10 p-2 text-slate-300 hover:text-brand-gold border border-white/10 transition-colors"
                aria-label="Follow Aura Matchmaking on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/5 hover:bg-white/10 p-2 text-slate-300 hover:text-brand-gold border border-white/10 transition-colors"
                aria-label="Follow Aura Matchmaking on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick link columns */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6">
            
            {/* Sitemap Column */}
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-[#C89B5E] font-bold block">
                Sitemap Index
              </span>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li>
                  <a href="#home" className="hover:text-white transition-colors">Home Base</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">Our Story</a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
                </li>
                <li>
                  <a href="#membership" className="hover:text-white transition-colors">Membership</a>
                </li>
                <li>
                  <a href="#success-stories" className="hover:text-white transition-colors">Case Studies</a>
                </li>
                <li>
                  <a href="#insights" className="hover:text-white transition-colors">The Journal</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">Liaison Contact</a>
                </li>
              </ul>
            </div>

            {/* Premium details */}
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-[#C89B5E] font-bold block">
                Vetting Offices
              </span>
              <ul className="space-y-2 text-[11px] text-slate-400">
                <li>Boston Central HQ</li>
                <li>Midtown Manhattan</li>
                <li>Beverly Hills Suite</li>
                <li>Financial District SF</li>
                <li>Miami Brickell</li>
              </ul>
            </div>

          </div>

          {/* Private Circle Newsletter Pitch */}
          <div className="md:col-span-4 space-y-6">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#C89B5E] font-bold block mb-1">
                The Journal Circle
              </span>
              <p className="text-xs text-slate-400 leading-normal">
                Register for our high-end offline publication dealing with psychological compatibility and relationship architecture.
              </p>
            </div>

            {isSubscribed ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-4 rounded-xs border border-brand-success/20 bg-brand-success/5 text-xs text-slate-300 flex items-center gap-2"
                id="newsletter-success"
              >
                <Check className="h-4 w-4 text-brand-gold" />
                <span>Subscription confirmed privately.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2.5" id="newsletter-form">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="liaison@yourfirmlink.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xs px-4 py-3 text-xs focus:border-brand-gold focus:outline-hidden text-white"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="absolute right-2 top-1.5 h-9 w-9 bg-brand-gold text-brand-primary flex items-center justify-center hover:bg-brand-gold-hover rounded-xs cursor-pointer active:scale-95 transition-all text-xs"
                    aria-label="Subscribe to Private Newsletter"
                  >
                    {isSubmitting ? (
                      <svg className="animate-spin h-4 w-4 text-brand-primary" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                    ) : (
                      <ArrowRight className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <span className="text-[9px] text-slate-500 font-medium tracking-wide block leading-relaxed">
                  No advertising brokers or tracking cookies • Safe cryptographic delivery
                </span>
              </form>
            )}

          </div>

        </div>

        {/* BOTTOM METRICS & LEGAL LOGISTICS */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-[10px] text-slate-500 font-sans">
          
          <div className="flex gap-4 items-center">
            <ShieldCheck className="h-4 w-4 text-brand-gold" />
            <span>
              &copy; {currentYear} Aura Matchmaking Inc. All Security Certificates Verified.
            </span>
          </div>

          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Charter</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Commission</a>
            <a href="#about" className="hover:text-white transition-colors">Accessibility Protocol</a>
          </div>

        </div>

      </section>

    </footer>
  );
}
