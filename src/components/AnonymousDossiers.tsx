import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Eye, ShieldCheck, Heart, Landmark, ChevronDown, ChevronUp } from "lucide-react";

interface Dossier {
  id: string;
  codename: string;
  pairingTitle: string;
  ageScope: string;
  backgrounds: string[];
  valuesBlueprint: { key: string; score: number }[];
  longevity: string;
  caseBrief: string;
}

export default function AnonymousDossiers({ onApplyClick }: { onApplyClick: () => void }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const dossiers: Dossier[] = [
    {
      id: "dos-1",
      codename: "Dossier 412: The Bicoastal Alliance",
      pairingTitle: "Technology General Partner & Heritage Maison Director",
      ageScope: "35 & 33 Years of Age",
      backgrounds: [
        "Primary: MIT Computer Science Graduate • Forbes 30-Under-30 Venture Officer",
        "Secondary: Sotheby's Institute Alumna • Executive Visual Consultant New York"
      ],
      valuesBlueprint: [
        { key: "Intellectual Compatibility", score: 98 },
        { key: "Visual Chemistry Estimation", score: 94 },
        { key: "Geographical Agility", score: 96 }
      ],
      longevity: "Matched 2021 • Married in Tuscany, Italy 2023",
      caseBrief: "Pairing was designed around a mutual split-life baseline, moving quarterly between San Francisco and Chelsea, NYC. Their aesthetic priorities concerning modern architecture, non-profit patron boards, and high-intensity career commitments matched flawlessly."
    },
    {
      id: "dos-2",
      codename: "Dossier 710: The Medical Legacy",
      pairingTitle: "Chief Orthopaedic Surgeon & Private Equity Principal",
      ageScope: "42 & 44 Years of Age",
      backgrounds: [
        "Primary: Harvard Medical School Alumna • Board Director Chicago Clinic Organization",
        "Secondary: Wharton MBA graduate • Managing Partner Chicago Acquisition Capital"
      ],
      valuesBlueprint: [
        { key: "Discretion Tolerance", score: 100 },
        { key: "Lifestyle Pacing Alignment", score: 95 },
        { key: "Social Philanthropy Focus", score: 92 }
      ],
      longevity: "Matched 2022 • Residing in Chicago Gold Coast",
      caseBrief: "Both individuals were managing 80-hour professional loads. Standard dating channels were out of the question due to local visual exposure and time restraints. AURA drafted their calendar match blueprint, coordinating dates passively at private secure suites."
    },
    {
      id: "dos-3",
      codename: "Dossier 103: The Cultural Custodians",
      pairingTitle: "Biotech Scientist & Symphony Principal Violist",
      ageScope: "29 & 31 Years of Age",
      backgrounds: [
        "Primary: Stanford PhD Biomedicine Scholar • Chief Biotech Therapeutics Founder",
        "Secondary: Juilliard Master of Music Graduate • Philanthropy Orchestra Member"
      ],
      valuesBlueprint: [
        { key: "Emotional Intelligence Metric", score: 97 },
        { key: "Aesthetic Alignment Rating", score: 99 },
        { key: "Shared Family Codes", score: 94 }
      ],
      longevity: "Matched 2023 • Engaged 2025 in Kyoto",
      caseBrief: "A high-affinity matchmaking headhunt. Both shared deep values centered around high analytical thinking balanced by creative expression and spiritual mindfulness. Sourced offline through targeted classical patronage networks."
    }
  ];

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-brand-bg py-20 lg:py-32 border-b border-brand-border" id="private-case-portfolio">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        
        {/* Title headings */}
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-brand-gold font-bold block mb-2">
            The Historical Vault
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-text leading-tight tracking-tight animate-fade-in">
            Discreet Anonymous Portfolios
          </h2>
          <p className="mt-4 text-xs md:text-sm text-brand-muted font-light leading-relaxed">
            Due to strict client privacy covenants, we present our successful connections under secure, non-identifying code indexes. Click any profile below to study case structures and matching metrics.
          </p>
        </div>

        {/* Dossiers Grid column */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto" id="anonymous-dossiers-container">
          {dossiers.map((dos) => {
            const isExpanded = expandedId === dos.id;

            return (
              <div
                key={dos.id}
                className="bg-white border border-brand-border rounded-xs p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                id={`dossier-card-${dos.id}`}
              >
                <div>
                  {/* Codename header */}
                  <div className="flex items-center justify-between pb-3 border-b border-brand-border mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#B45309] font-bold">
                      {dos.codename}
                    </span>
                    <ShieldCheck className="h-4 w-4 text-brand-gold" />
                  </div>

                  <h3 className="font-serif text-md lg:text-lg text-brand-text font-bold leading-snug mb-2">
                    {dos.pairingTitle}
                  </h3>

                  <p className="text-[11px] text-brand-gold font-sans font-medium uppercase tracking-wider mb-4">
                    {dos.ageScope}
                  </p>

                  <AnimatePresence>
                    {isExpanded ? (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4 overflow-hidden"
                      >
                        {/* Background lines */}
                        <div className="space-y-1.5 pt-2">
                          <span className="text-[9px] uppercase tracking-widest text-brand-gold font-bold block">
                            Academic & Career standing
                          </span>
                          {dos.backgrounds.map((bg, idx) => (
                            <p key={idx} className="text-[11px] text-brand-muted leading-relaxed font-sans font-light">
                              {bg}
                            </p>
                          ))}
                        </div>

                        {/* Alignment stats */}
                        <div className="space-y-2 pt-2 border-t border-brand-border/60">
                          <span className="text-[9px] uppercase tracking-widest text-brand-gold font-bold block">
                            Blueprint Diagnostic Ratios
                          </span>
                          <div className="space-y-2">
                            {dos.valuesBlueprint.map((metric) => (
                              <div key={metric.key} className="space-y-1">
                                <div className="flex justify-between text-[10px] text-brand-text font-medium">
                                  <span>{metric.key}</span>
                                  <span>{metric.score}%</span>
                                </div>
                                <div className="w-full h-[3px] bg-brand-border rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-brand-gold"
                                    style={{ width: `${metric.score}%` }}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Brief summary */}
                        <div className="pt-2 border-t border-brand-border/60 space-y-1.5">
                          <span className="text-[9px] uppercase tracking-widest text-[#B45309] font-bold block">
                            The Sourcing Narrative
                          </span>
                          <p className="text-[11px] text-brand-muted leading-relaxed font-sans font-light">
                            {dos.caseBrief}
                          </p>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-border/45 flex items-center justify-between">
                  <span className="text-[10px] text-brand-muted italic font-serif">
                    {dos.longevity}
                  </span>

                  <button
                    onClick={() => toggleExpand(dos.id)}
                    className="text-[10px] uppercase tracking-wider font-bold text-brand-gold hover:text-brand-gold-hover flex items-center gap-1 cursor-pointer"
                  >
                    <span>{isExpanded ? "Collapse Specs" : "Examine Case"}</span>
                    {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Global actions trigger */}
        <div className="mt-16 text-center">
          <button
            onClick={onApplyClick}
            className="px-8 py-4 bg-brand-primary text-white hover:bg-brand-gold font-bold text-xs uppercase tracking-widest rounded-xs cursor-pointer shadow-lg shadow-black/10 transition-colors"
          >
            Schedule Discovery Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
