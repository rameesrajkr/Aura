import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Sparkles, UserCheck, ShieldCheck, Zap, Heart, Check } from "lucide-react";

interface PathStage {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  bulletPoints: string[];
  executiveCheck: string;
}

export default function InteractivePathPreview() {
  const [activeStageId, setActiveStageId] = useState("stage-1");

  const stages: PathStage[] = [
    {
      id: "stage-1",
      title: "Private Consultation",
      subtitle: "Stage 01 • The Discovery Interview",
      duration: "90 Minutes — In-Person or Encrypted Zoom",
      icon: BookOpen,
      description: "A private dialogue centering on your childhood values, emotional patterns, current lifestyle, past relationship diagnostics, and precise requirements. Your liaison maps your unique relationship architecture baseline.",
      bulletPoints: [
        "In-depth investigation of lifestyle boundaries, geographical alignment, and hobbies",
        "Clear profiling of deal-breakers, life aspirations, and core family codes",
        "Absolute confidentiality: no telemetry or recording is conducted"
      ],
      executiveCheck: "Signed mutual Privacy Non-Disclosure Protocol required."
    },
    {
      id: "stage-2",
      title: "Psychological Vetting",
      subtitle: "Stage 02 • Blueprint Diagnostic",
      duration: "7-10 Days Analysis",
      icon: ShieldCheck,
      description: "We formalize your personality profile using custom lifestyle alignments. In parallel, our compliance officers run mandatory credential audits, professional standings checks, and single-status verification.",
      bulletPoints: [
        "Certified professional degree & business ownership verification",
        "Full civil background and safe-conduct screening",
        "Attachment-style and relationship intelligence profiling"
      ],
      executiveCheck: "Verified 100% compliant background clearance certificate."
    },
    {
      id: "stage-3",
      title: "Caliber Headhunting",
      subtitle: "Stage 03 • Deep Custom Sourcing",
      duration: "Ongoing National Campaign",
      icon: Sparkles,
      description: "Our team leverages three proprietary pathways: our established elite member directory, offline referral networks among prominent families, and targeted headhunting by on-the-ground executive scouts.",
      bulletPoints: [
        "Proactive recruitment targeting specific professions (e.g., Doctors, VCs, Founders)",
        "First-round personal screening interviews with all qualified candidates",
        "Rigorous visual chemistry potential validation"
      ],
      executiveCheck: "Average search encompasses over 45 candidates per curated match."
    },
    {
      id: "stage-4",
      title: "Discreet Introductions",
      subtitle: "Stage 04 • The Curated Date",
      duration: "Custom Hosted Evening",
      icon: Heart,
      description: "We handle the entire planning process seamlessly. From booking prime tables at Michelin-starred culinary venues to coordination of scheduling. Neither party is given surnames or contact coordinates beforehand.",
      bulletPoints: [
        "Bespoke table reservations at curated member-only lounges or restaurants",
        "Pre-date checklist prep and timing confirmation",
        "Complete safety envelope: no mutual numbers shared until both request it"
      ],
      executiveCheck: "100% passive scheduling — simply arrive dressed and relaxed."
    },
    {
      id: "stage-5",
      title: "Concierge Alignment Cycle",
      subtitle: "Stage 05 • Feedback and Advisory",
      duration: "24 Hours Post-Introduction",
      icon: UserCheck,
      description: "Match feedback is the secret of Aura. We debrief both partners individually within 24 hours. We share constructive insights concerning alignment, presence, and interest, refining the profile for the next introduction.",
      bulletPoints: [
        "Direct post-date phone debriefing with your matching director",
        "Candid, anonymous feedback concerning conversational alignment and energy",
        "Custom behavioral advice for second meeting pacing and communication"
      ],
      executiveCheck: "94% of members report feedback refinement significantly improves subsequent matches."
    }
  ];

  const currentStage = stages.find((s) => s.id === activeStageId) || stages[0];
  const IconComponent = currentStage.icon;

  return (
    <section className="bg-brand-bg py-20 lg:py-32 border-b border-brand-border" id="operations-pathway">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        
        {/* Headings */}
        <div className="text-center max-w-[750px] mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-brand-gold font-bold block mb-2">
            The Interactive Blueprint
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-text leading-tight tracking-tight">
            Explore Your Journey Phase-by-Phase
          </h2>
          <p className="mt-4 text-sm text-brand-muted font-light leading-relaxed">
            Click through our structured operational timeline below to view the precise mechanisms, security protocols, and advisory guidelines built into each stage.
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {stages.map((stage) => {
            const isActive = stage.id === activeStageId;
            const StagIcon = stage.icon;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xs border text-xs uppercase tracking-wider font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-brand-primary text-white border-brand-gold shadow-md"
                    : "bg-white text-brand-primary border-brand-border hover:bg-brand-bg hover:border-brand-gold/60"
                }`}
                id={`stage-tab-btn-${stage.id}`}
              >
                <StagIcon className={`h-4 w-4 ${isActive ? "text-brand-gold" : "text-brand-muted"}`} />
                <span>{stage.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detail Card Display block */}
        <div className="max-w-4xl mx-auto bg-white border border-brand-border rounded-xs shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-12">
          
          {/* Left Visual Banner on Stage card */}
          <div className="md:col-span-4 bg-brand-primary text-white p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#C89B5E_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
            
            <div className="space-y-4 relative z-10">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xs bg-white/10 border border-brand-gold text-brand-gold">
                <IconComponent className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] text-brand-gold uppercase tracking-[0.2em] font-medium block">
                  {currentStage.subtitle}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#FCFAF7] mt-1">
                  {currentStage.title}
                </h3>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-4 space-y-1 relative z-10">
              <span className="text-[9px] uppercase tracking-widest text-[#C89B5E] font-bold block">Expected Duration:</span>
              <p className="text-xs text-slate-300 font-sans font-light leading-snug">{currentStage.duration}</p>
            </div>
          </div>

          {/* Right Content details on Stage card */}
          <div className="md:col-span-8 p-6 md:p-10 space-y-6">
            
            <div className="space-y-2">
              <h4 className="font-serif text-lg font-bold text-brand-text">Phase Specifications</h4>
              <p className="text-xs md:text-sm text-brand-muted font-sans font-light leading-relaxed">
                {currentStage.description}
              </p>
            </div>

            <div className="h-px bg-brand-border" />

            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold block font-sans">
                Core Deliverables
              </span>
              <ul className="space-y-2.5">
                {currentStage.bulletPoints.map((point, i) => (
                  <li key={i} className="flex gap-2 text-xs text-brand-text font-sans font-light">
                    <Check className="h-4 w-4 text-brand-gold flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Premium Gold callout */}
            <div className="bg-brand-bg border-l-2 border-brand-gold p-4 text-[11px] text-brand-primary font-sans rounded-xs flex items-center gap-3">
              <ShieldCheck className="h-4 w-4 text-brand-gold flex-shrink-0" />
              <span>
                <strong>Sovereign Vetting Check:</strong> {currentStage.executiveCheck}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
