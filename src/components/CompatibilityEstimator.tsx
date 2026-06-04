import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, ArrowRight, UserCheck, BarChart4, Landmark, Sparkles, Building2, EyeOff } from "lucide-react";

interface EstimatorProps {
  onApplyClick: (tierId?: string) => void;
}

export default function CompatibilityEstimator({ onApplyClick }: EstimatorProps) {
  const [profession, setProfession] = useState("doctor");
  const [region, setRegion] = useState("northeast");
  const [ageGroup, setAgeGroup] = useState("31-40");
  const [intention, setIntention] = useState("marriage");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<{
    score: number;
    matchCount: number;
    recommendedTier: { id: string; name: string; cost: string };
    advice: string;
  } | null>(null);

  const professionsMap: Record<string, string> = {
    doctor: "Medical Director / Chief Surgeon",
    founder: "Venture-Backed Executive / Founder",
    finance: "Private Equity Partner / Asset Manager",
    attorney: "Senior Partner Law Practitioner",
    creative: "Luxury Creative Director / Arts Patron",
    academic: "Research Scholar / Legacy Academic"
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResults(null);

    setTimeout(() => {
      // Create high-end deterministic results based on parameters
      let baseScore = 87;
      let matches = 14;
      let tier = { id: "essential", name: "Essential Elite Program", cost: "$7,500" };

      if (profession === "founder" || profession === "finance") {
        baseScore += 5;
        matches += 8;
      }
      if (region === "national" || region === "bicoastal") {
        baseScore += 4;
        matches += 12;
        tier = { id: "premium", name: "Premium National Concierge", cost: "$15,000" };
      }
      if (profession === "finance" && region === "national") {
        tier = { id: "executive", name: "Executive President's Club", cost: "$35,000+" };
      }

      baseScore = Math.min(baseScore, 98);

      const adviceLines = {
        doctor: "Given your demanding hospital call schedule, your suggested focus is a localized scout search centered strictly within your direct metropolitan region, scheduling dates passively around your custom roster.",
        founder: "Nomadic tech executives pair exceptionally well with values-verified partners who understand bicoastal living styles. Proactive headhunting across state jurisdictions is recommended.",
        finance: "Your wealth profile and extreme preference for non-published identity records points directly to executive offline vetting. Client isolation shields are strictly suggested.",
        attorney: "Rigid corporate calendars demand precision scheduling at verified partner lounges. Mutual screening is highly recommended prior to face-to-face engagements.",
        creative: "We prioritize matching your deep sensory focus, travel lifestyle, and artistic patronage with partners sharing an equivalent intellectual appreciation.",
        academic: "Intellectual compatibility acts as your key prerequisite. Hand-screened assessment of cognitive values frameworks is heavily recommended."
      };

      setResults({
        score: baseScore,
        matchCount: matches,
        recommendedTier: tier,
        advice: adviceLines[profession as keyof typeof adviceLines] || "Your profile requires specialized individual matching."
      });
      setLoading(false);
    }, 1200);
  };

  return (
    <section className="bg-white py-20 lg:py-32 border-b border-brand-border" id="estimator-tool">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        
        {/* Header Title */}
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-brand-gold font-bold block mb-2">
            The Alignment Matrix
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-text leading-tight tracking-tight">
            Vetting Feasibility Assessment
          </h2>
          <p className="mt-4 text-sm text-brand-muted font-light leading-relaxed">
            Submit your background specifications to calculate our active offline partner densities, evaluate geographical compatibility indices, and identify your optimal matching stream.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left Form Panel */}
          <div className="lg:col-span-5 bg-brand-bg border border-brand-border rounded-xs p-6 md:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-2 pb-4 border-b border-brand-border">
                <BarChart4 className="h-5 w-5 text-brand-gold" />
                <h3 className="font-serif text-lg font-bold text-brand-text leading-none">Diagnostic Criteria</h3>
              </div>

              <form onSubmit={handleCalculate} className="space-y-4">
                {/* Profession Selector */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold text-brand-gold tracking-widest block">
                    1. Professional Archetype
                  </label>
                  <select
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                    className="w-full bg-white border border-brand-border rounded-xs p-3 text-xs focus:border-brand-gold focus:outline-hidden text-brand-text font-medium cursor-pointer"
                  >
                    <option value="doctor">Medical Chief / Senior Surgeon</option>
                    <option value="founder">Venture-Backed Founder / Officer</option>
                    <option value="finance">Asset Manager / Private Equity Partner</option>
                    <option value="attorney">Senior Legal Attorney / Counsel</option>
                    <option value="creative">Creative Director / Arts Patron</option>
                    <option value="academic">Legacy Scholar / Academic Fellow</option>
                  </select>
                </div>

                {/* Region Selector */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold text-brand-gold tracking-widest block">
                    2. Recruitment Scope
                  </label>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full bg-white border border-brand-border rounded-xs p-3 text-xs focus:border-brand-gold focus:outline-hidden text-brand-text font-medium cursor-pointer"
                  >
                    <option value="northeast">Regional Central (Boston / Manhattan)</option>
                    <option value="california">West Coast HQ (Silicon Valley / LA)</option>
                    <option value="southeast">Southern Hub (Miami / Atlanta)</option>
                    <option value="bicoastal">Bicoastal Commuter Corridor</option>
                    <option value="national">United States National Registry</option>
                  </select>
                </div>

                {/* Age selector */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold text-brand-gold tracking-widest block">
                    3. Your Demographics
                  </label>
                  <select
                    value={ageGroup}
                    onChange={(e) => setAgeGroup(e.target.value)}
                    className="w-full bg-white border border-brand-border rounded-xs p-3 text-xs focus:border-brand-gold focus:outline-hidden text-brand-text font-medium cursor-pointer"
                  >
                    <option value="21-30">21 - 30 Years of Age</option>
                    <option value="31-40">31 - 40 Years of Age</option>
                    <option value="41-50">41 - 50 Years of Age</option>
                    <option value="51-60">51 - 60 Years of Age</option>
                    <option value="60+">60+ Years of Age</option>
                  </select>
                </div>

                {/* Relationship Goal */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold text-brand-gold tracking-widest block">
                    4. Partnership Intention
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-center">
                    {[
                      { key: "marriage", label: "Family & Legacy" },
                      { key: "partnership", label: "Long-Term Co-founder" }
                    ].map((opt) => (
                      <button
                        key={opt.key}
                        type="button"
                        onClick={() => setIntention(opt.key)}
                        className={`py-2 px-3 border border-brand-border cursor-pointer text-xs font-semibold rounded-xs transition-all ${
                          intention === opt.key
                            ? "bg-brand-primary text-white border-brand-gold"
                            : "bg-white text-brand-primary hover:border-brand-gold"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-brand-primary text-white font-bold text-xs uppercase tracking-widest hover:bg-brand-gold rounded-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    id="submit-estimator-action"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        <span>Analyzing Registry...</span>
                      </>
                    ) : (
                      <>
                        <span>Diagnostic Feasibility</span>
                        <ArrowRight className="h-3.5 w-3.5 text-brand-gold" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            <div className="pt-6 border-t border-brand-border/60 text-center text-[10px] text-brand-muted font-sans flex items-center justify-center gap-2">
              <EyeOff className="h-3.5 w-3.5 text-brand-gold" />
              <span>Evaluated through offline compliance indexing</span>
            </div>
          </div>

          {/* Right Display Panel */}
          <div className="lg:col-span-7 border border-brand-border bg-white rounded-xs p-6 md:p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 h-40 w-40 bg-brand-gold/[0.03] rounded-full blur-3xl" />
            
            <AnimatePresence mode="wait">
              {results ? (
                <motion.div
                  key="results-view"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6 h-full flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#C89B5E] font-bold block mb-1">
                        Aura Feasibility Forecast
                      </span>
                      <h3 className="font-serif text-2xl text-brand-text font-extrabold leading-none">
                        Registry Blueprint Analysis
                      </h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {/* Metric 1 */}
                      <div className="bg-brand-bg border border-brand-border/60 p-4 rounded-xs text-center">
                        <span className="text-2xl font-serif font-black text-brand-gold">{results.score}%</span>
                        <span className="block text-[8px] uppercase tracking-widest text-brand-muted font-bold mt-1">
                          Registry Density Index
                        </span>
                      </div>
                      
                      {/* Metric 2 */}
                      <div className="bg-brand-bg border border-brand-border/60 p-4 rounded-xs text-center">
                        <span className="text-2xl font-serif font-black text-brand-primary">{results.matchCount}+</span>
                        <span className="block text-[8px] uppercase tracking-widest text-brand-muted font-bold mt-1">
                          Vetted Pre-Matches Found
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[10px] uppercase font-bold text-brand-gold tracking-widest block font-sans">
                        Advisor's Diagnostic Review
                      </span>
                      <p className="text-xs text-brand-muted font-sans font-light leading-relaxed">
                        {results.advice}
                      </p>
                    </div>

                    <div className="p-4 bg-brand-primary text-white border border-brand-gold/30 rounded-xs flex items-center justify-between">
                      <div>
                        <span className="text-[8px] uppercase tracking-widest text-brand-gold font-bold block">Recommended Stream</span>
                        <span className="text-xs font-bold font-serif text-slate-100">{results.recommendedTier.name}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-serif font-bold text-brand-gold block">{results.recommendedTier.cost}</span>
                        <span className="text-[7px] text-slate-400 block tracking-widest uppercase">Program Cost</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-brand-border/45 flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <span className="text-[10px] text-brand-muted font-sans text-center sm:text-left leading-normal max-w-[280px]">
                      Your diagnostic parameters are cleared. Register today to confirm physical introductions.
                    </span>
                    <button
                      onClick={() => onApplyClick(results.recommendedTier.id)}
                      className="px-6 py-3 bg-brand-gold text-brand-primary font-bold text-xs uppercase tracking-widest hover:bg-brand-gold-hover transition-colors rounded-xs cursor-pointer"
                    >
                      Apply Securely
                    </button>
                  </div>
                </motion.div>
              ) : (
                <div className="flex flex-col items-center justify-center text-center py-16 md:py-24 space-y-4 h-full" id="estimator-prompt-placeholder">
                  <div className="h-14 w-14 rounded-xs border border-dashed border-brand-gold/40 flex items-center justify-center text-brand-gold bg-brand-bg">
                    <Building2 className="h-6 w-6 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-brand-text">Run Registry Diagnosis</h4>
                    <p className="text-xs text-brand-muted font-light max-w-sm leading-normal mt-1.5">
                      Select your professional baseline and scouting expectations in the parameters board, then click "Diagnostic Feasibility" to query match alignments.
                    </p>
                  </div>
                </div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
