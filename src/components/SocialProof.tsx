import { motion } from "motion/react";

export default function SocialProof() {
  const logos = [
    { name: "Forbes", desc: "Elite Service Highlights", font: "font-serif tracking-tighter italic font-black" },
    { name: "VOGUE", desc: "Modern Love Editorial", font: "font-serif tracking-[0.3em] font-extrabold uppercase" },
    { name: "Wall Street Journal", desc: "The Sovereign Standard", font: "font-serif tracking-tight font-bold" },
    { name: "Entrepreneur", desc: "Top Matchmakers Review", font: "font-sans tracking-tight font-bold italic" },
    { name: "BUSINESS INSIDER", desc: "VHNW Vetting Analysis", font: "font-sans tracking-widest uppercase font-extrabold" },
    { name: "GQ", desc: "Discreet Luxury Vetting", font: "font-serif tracking-[0.25em] font-semibold uppercase italic" },
    { name: "NETFLIX", desc: "Hospitality Standards Feature", font: "font-sans tracking-tighter font-extrabold text-[#E50914] hover:text-[#C89B5E] transition-colors duration-300" },
  ];

  // Duplicate the list for a seamless infinite auto-scroll loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section 
      className="bg-white border-b border-brand-border py-12 overflow-hidden" 
      id="featured-press"
    >
      <div className="mx-auto max-w-[1250px] px-4 md:px-6">
        
        {/* Subtle Section Subheader */}
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-muted mb-8">
          Featured in Distinguished Editorial Coverage
        </p>

        {/* Carousel Wrapper with Left & Right Gradient Shadows for seamless visual blends */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Scrolling track element */}
          <motion.div
            className="flex gap-16 md:gap-24 items-center w-max pr-16 md:pr-24"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 22,
              repeat: Infinity,
            }}
          >
            {duplicatedLogos.map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex flex-col items-center justify-center text-center flex-shrink-0 w-[180px] md:w-[220px] select-none"
              >
                <div className="h-10 flex items-center justify-center mb-1">
                  <span className={`text-[#111827] text-md md:text-lg ${logo.font}`}>
                    {logo.name}
                  </span>
                </div>
                <span className="text-[9px] tracking-wider text-brand-gold font-sans font-medium uppercase opacity-85">
                  {logo.desc}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

