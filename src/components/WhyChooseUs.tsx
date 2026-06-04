import { motion } from "motion/react";
import { UserCheck, Lock, Gem, HeartHandshake } from "lucide-react";

export default function WhyChooseUs() {
  const cards = [
    {
      title: "Personally Curated Matches",
      desc: "Every introduction is hand-selected. We do not use algorithms. Our matchmakers analyze psychology, lifestyle, life goals, and values to foster organic alignment.",
      icon: UserCheck,
    },
    {
      title: "Private and Confidential",
      desc: "Your elite professional standing demands peak discretion. Your identity and credentials are hyper-protected. No public footprint, ever.",
      icon: Lock,
    },
    {
      title: "Highly Selective Membership",
      desc: "We accept limited active members. This guarantees that our dedicated attention is focused exclusively on serious, high-caliber relationships.",
      icon: Gem,
    },
    {
      title: "Dedicated Matchmaking Experts",
      desc: "Our directors have backgrounds in behavioral psychology, image consultation, and hospitality, acting as your trusted relational counsel.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section
      className="bg-white py-20 lg:py-32 border-b border-brand-border"
      id="why-choose-us"
      aria-label="Features and Benefits"
    >
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        
        {/* Headings */}
        <div className="text-center max-w-[700px] mx-auto mb-16 lg:mb-24">
          <span className="text-[11px] uppercase tracking-[0.25em] text-brand-gold font-bold block mb-2">
            The Standard of Selectivity
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-text leading-tight tracking-tight">
            Why Discerning Professionals Choose{" "}
            <span className="italic font-normal text-brand-gold">AURA</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-brand-muted font-light leading-relaxed">
            We operate at the intersection of psychology, high-end hospitality, and executive recruitment to deliver secure, pristine relationships.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="why-aura-cards-grid">
          {cards.map((card, i) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="relative flex flex-col justify-between p-8 bg-brand-bg rounded-xs border border-brand-border hover:shadow-xl transition-all duration-300 group overflow-hidden cursor-default min-h-[320px]"
                id={`why-card-${i}`}
              >
                {/* Micro gold active-line expanding from center */}
                <span className="absolute top-0 left-0 w-full h-[3px] bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />

                <div>
                  {/* Icon Shield Container */}
                  <div className="rounded-xs bg-white p-3.5 border border-brand-border text-brand-gold h-12 w-12 flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                    <IconComponent className="h-5 w-5" />
                  </div>

                  <h3 className="font-serif text-lg text-brand-text font-semibold mb-3 group-hover:text-brand-gold transition-colors duration-200">
                    {card.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-brand-muted leading-relaxed font-sans font-light">
                    {card.desc}
                  </p>
                </div>

                {/* Decorative index badge */}
                <div className="text-right mt-6">
                  <span className="font-serif italic text-xs text-brand-gold/40 group-hover:text-brand-gold transition-colors duration-300">
                    0{i + 1}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
