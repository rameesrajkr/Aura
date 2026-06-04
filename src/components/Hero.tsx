import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Award, Globe, Users } from "lucide-react";

const heroImg = "https://drive.google.com/file/d/1ZN-0QmQ8aE04Oy-5A0CcBn4C4_hzjGWJ/view?usp=sharing";

interface HeroProps {
  onApplyClick: (tierId?: string) => void;
}

export default function Hero({ onApplyClick }: HeroProps) {
  // Animation configuration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom premium ease-out
      },
    },
  };

  const trustStats = [
    { label: "Experience", title: "20+ Years Verified", icon: Award },
    { label: "Introductions", title: "5000+ Connections", icon: Users },
    { label: "Scope", title: "National Registry", icon: Globe },
    { label: "Safety Standard", title: "Private Membership", icon: ShieldCheck },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-primary"
      aria-label="Welcome to Aura Matchmaking"
    >
      {/* Background Image with Rich Linear & Radial Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Elegant, affluent couple in penthouse balcony overlooking city lights"
          className="h-full w-full object-cover object-center scale-102 filter brightness-[0.25] contrast-[1.05] opacity-40 animate-fade-in"
          referrerPolicy="no-referrer"
        />
        {/* Dark elegant editorial mask overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/60 to-transparent lg:bg-gradient-to-r lg:from-brand-primary/95 lg:via-brand-primary/70 lg:to-transparent z-10" />
        <div className="absolute inset-0 bg-black/15 z-10" />
      </div>e

      {/* Main Hero Contents */}
      <div className="relative z-20 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 min-h-screen flex flex-col justify-between">
        
        {/* Spacer to push content down nicely */}
        <div className="grow flex items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-[850px] space-y-8"
          >
            {/* Tagline Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/15">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FCFAF7]">
                Privately Managed Matchmaking
              </span>
            </motion.div>

            {/* Sequence 1: Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-3xl md:text-5xl lg:text-[72px] text-[#FCFAF7] leading-[1.1] tracking-tight"
            >
              Find a Meaningful Relationship Without the Frustration of{" "}
              <span className="italic font-normal text-brand-gold relative">
                Dating Apps
                <span className="absolute left-0 bottom-1 w-full h-[2px] bg-brand-gold/30" />
              </span>
            </motion.h1>

            {/* Sequence 2: Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-slate-100/90 leading-relaxed max-w-[640px] font-sans font-light"
            >
              Personalized matchmaking for accomplished professionals seeking genuine, long-term relationships and high-fidelity synergy.
            </motion.p>

            {/* Sequence 3: CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                onClick={() => onApplyClick("premium")}
                className="group relative inline-flex h-14 items-center justify-center gap-2 bg-brand-gold text-[#111827] px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] border border-brand-gold hover:bg-brand-gold-hover hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shadow-lg shadow-black/15 cursor-pointer"
                id="hero-apply-btn"
              >
                Apply for Membership
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button
                onClick={() => onApplyClick("essential")}
                className="inline-flex h-14 items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-[#FCFAF7] px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] border border-white/20 hover:bg-white hover:text-brand-primary hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                id="hero-book-btn"
              >
                Book Private Consultation
              </button>
            </motion.div>

          </motion.div>
        </div>

        {/* Sequence 4: Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10 mt-16"
          id="hero-trust-indicators"
        >
          {trustStats.map((stat, i) => {
            const IconComponent = stat.icon;
            return (
              <div key={i} className="flex gap-4 items-start select-none">
                <div className="rounded-xs bg-white/10 p-2.5 border border-white/10 flex-shrink-0 text-brand-gold">
                  <IconComponent className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-sm text-[#FCFAF7] tracking-wide font-medium">
                    {stat.title}
                  </h3>
                  <p className="text-[10px] text-slate-400 font-sans font-medium uppercase tracking-widest mt-1">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
