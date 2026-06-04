import { motion } from "motion/react";
import { Check, X, ShieldAlert, Sparkles, AlertCircle } from "lucide-react";
import { COMPARISON_ROWS } from "../data";

export default function Comparison() {
  return (
    <section
      className="bg-white py-20 lg:py-32 border-b border-brand-border"
      id="comparison-section"
      aria-label="Service Comparison Table"
    >
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        
        {/* Headings */}
        <div className="text-center max-w-[700px] mx-auto mb-16 lg:mb-24">
          <span className="text-[11px] uppercase tracking-[0.25em] text-brand-gold font-bold block mb-2">
            The Analytical Review
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-text leading-tight tracking-tight">
            How We Differ From Dating Apps
          </h2>
          <p className="mt-4 text-sm md:text-base text-brand-muted font-light leading-relaxed">
            Dating databases focus on gamification and subscription longevity. At Aura, we measure our success purely by your permanent offline pairing.
          </p>
        </div>

        {/* COMPARISON GRID TABLE */}
        <div className="overflow-x-auto rounded-lg border border-brand-border shadow-md" id="comparison-table-wrapper">
          <table className="w-full text-left border-collapse bg-white select-none">
            
            {/* Header Column Titles */}
            <thead>
              <tr className="bg-brand-primary text-white border-b border-brand-border">
                <th className="p-6 text-xs font-bold uppercase tracking-widest text-[#FCFAF7] font-sans">
                  Dynamic Metric
                </th>
                <th className="p-6 text-xs font-bold uppercase tracking-widest text-brand-gold font-sans border-l border-white/10">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4" />
                    Aura Private Concierge
                  </div>
                </th>
                <th className="p-6 text-xs font-bold uppercase tracking-widest text-slate-300 font-sans border-l border-white/10">
                  <div className="flex items-center gap-1.5">
                    Common Swipe & Web Directories
                  </div>
                </th>
              </tr>
            </thead>

            {/* Content Rows */}
            <tbody className="divide-y divide-brand-border">
              {COMPARISON_ROWS.map((row, idx) => (
                <motion.tr
                  initial={{ opacity: 0, y: 5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  key={row.characteristic}
                  className="hover:bg-brand-bg/50 transition-colors duration-200"
                >
                  {/* Characteristic Name */}
                  <td className="p-6 align-top">
                    <span className="font-serif text-sm md:text-base font-semibold text-brand-text block">
                      {row.characteristic}
                    </span>
                  </td>

                  {/* Aura Matchmaking column */}
                  <td className="p-6 align-top bg-brand-gold/5 border-l border-brand-golden/10 max-w-[400px]">
                    <div className="space-y-2">
                      <div className="inline-flex gap-2 items-center text-brand-success">
                        <div className="rounded-full bg-brand-success/15 p-1 flex-shrink-0">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-xs uppercase tracking-wider font-semibold font-sans">
                          Exclusive Support
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-brand-text font-sans font-light leading-relaxed">
                        {row.auraService.text}
                      </p>
                    </div>
                  </td>

                  {/* Standard apps column */}
                  <td className="p-6 align-top border-l border-brand-border max-w-[450px]">
                    <div className="space-y-2">
                      <div className="inline-flex gap-2 items-center text-red-600">
                        <div className="rounded-full bg-red-100 p-1 flex-shrink-0">
                          <X className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-xs uppercase tracking-wider font-semibold font-sans">
                          Unregulated System
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-brand-muted font-sans font-light leading-relaxed">
                        {row.datingApps.text}
                      </p>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* Highlight footer block */}
        <div className="mt-12 p-6 rounded-xs border border-[#C89B5E]/30 bg-radial from-[#FCFAF7] to-amber-50/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-4 items-start max-w-2xl">
            <AlertCircle className="h-5 w-5 text-brand-gold flex-shrink-0 mt-0.5" />
            <div className="text-xs md:text-sm text-brand-muted leading-relaxed font-sans font-light">
              <strong className="text-brand-text block mb-0.5 font-bold">A Confidential Offline Circle</strong>
              Our active match directory requires full professional verification before any connection coordinates. We operate under rigorous non-disclosure policies ensuring that your career status, profile details, and calendar coordinates remain 100% private.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
