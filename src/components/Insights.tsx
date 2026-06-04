import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, BookOpen, Clock, Heart, X, Sparkles, BookOpenCheck, ShieldAlert } from "lucide-react";

export default function Insights() {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const articles = [
    {
      id: "art-1",
      title: "The Sophisticated Calculus of Slow Chemistry",
      desc: "Why choosing a lifecycle companion requires aligning cognitive architectures, value frameworks, and long-term life standards rather than immediate digital highlights.",
      author: "Vivienne Sterling",
      category: "Interpersonal Dynamics",
      date: "May 2026",
      readTime: "6 Min Read",
      imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=600",
      content: [
        "In the design of modern structures, we prioritize rigorous load-bearing calibrations over immediate surface facades. Curiously, when professionals approach relationships, society prompts them to discard this fundamental logic. The current era of online directories pushes humans into gamified swipe arenas where selection is governed by visual dopamine hits and transient micro-preferences.",
        "Slow Chemistry, however, asserts that long-term compatibility depends on structural constants. It is the sophisticated math of matching core cognitive structures. Do both partners possess similar emotional vocabulary? Are their frameworks for managing adversity, high-stakes decisions, and legacy creation aligned? When these elements are disquieted, no degree of immediate visual chemistry can prevent eventual fracturing.",
        "At AURA, we implement Slow Chemistry by conducting detailed diagnostic profiles of candidates. We examine how they allocate time, resolve internal professional stressors, and perceive their multi-generational legacies. The result is an offline selection pathway where 90% of pairings achieve deep, foundational bonds prior to their first physical meeting."
      ]
    },
    {
      id: "art-2",
      title: "Discernment in an Era of Digital Noise",
      desc: "An analytical critique of how gamified swipe directories keep high-achieving leaders trapped in cycles of option-fatigue, eroding genuine emotional intelligence.",
      author: "Dr. Marcus Vance",
      category: "Behavioral Science & Wealth",
      date: "April 2026",
      readTime: "8 Min Read",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=600",
      content: [
        "Modern consumer directories are optimized for high-volume transactions. By design, standard dating platforms are built to prevent successful off-ramping. Their financial incentives depend strictly on keeping users swiping, clicking, and staying single. For executives and founders, this gamified loop has a devastating secondary cost: the severe depletion of emotional discernment.",
        "High-performing partners make thousands of strategic choices every day. Recruiting compatibility requires active, thoughtful filtering. When faced with endless choices on a small browser window, the human brain reverts to simplified shortcuts, choosing based on superficial descriptors rather than genuine values. This 'Option Overload' breeds chronic relational fatigue.",
        "We counter this fatigue by functioning as your personal relationship filter. Our members spend zero minutes swiping or sorting. They delegate scouting, professional credential screening, and background check audits completely to us. When you show up to an AURA date, you can rely on the certainty that your companion has been rigorously prepared, verified, and pre-aligned with your exact standard of life."
      ]
    },
    {
      id: "art-3",
      title: "Privacy: The Ultimate Safe Luxury Shield",
      desc: "For preeminent executives, founders, and celebrities, public exposure introduces critical liabilities. How to scout compatible equals without compromising your personal details.",
      author: "Catherine Alcott",
      category: "Elite Asset Protections",
      date: "March 2026",
      readTime: "5 Min Read",
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600",
      content: [
        "In modern luxury hospitality, privacy is no longer an optional add-on; it is the ultimate architectural standard. For high-profile founders, surgeons, managing directors, and public faces, exposure behaves as a liability. Placing images and career histories onto public search frameworks invites unsolicited outreach, data brokerage extraction, and professional security risks.",
        "This is why affluent leaders regularly abort standard courtship apps within days. True discretion dictates that search boundaries must remain offline, encrypted, and isolated under direct human stewardship. Your profile should not reside in a cloud server reachable by any web crawler.",
        "Our sovereign shield guarantees that your name, contact index, and detailed professional connections are never shared prior to mutual confirmation. Preview documents are presented in designated security briefs, and only with your explicit initial authorization. We treat your personal credentials with the exact compliance rigor and discretion that elite organizations devote to private equity acquisitions."
      ]
    }
  ];

  const activeArticle = articles.find((a) => a.id === selectedArticleId);

  return (
    <section
      className="bg-white py-20 lg:py-32 border-b border-brand-border"
      id="insights"
      aria-label="Editorial publications and essays"
    >
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        
        {/* Section title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 lg:mb-24">
          <div className="max-w-[650px]">
            <span className="text-[11px] uppercase tracking-[0.25em] text-brand-gold font-bold block mb-2">
              The AURA Journal
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-brand-text leading-tight tracking-tight">
              Aesthetic & Psychological Insights
            </h2>
            <p className="mt-4 text-xs md:text-sm text-brand-muted font-light leading-relaxed">
              Explore essays, case studies, and modern clinical reflections concerning elite matchmaking, lifestyle compatibility, and safe high-discretion relationship design.
            </p>
          </div>

          <div className="flex-shrink-0 select-none">
            <span className="text-xs uppercase tracking-widest font-bold text-brand-gold border-b border-brand-gold/40 pb-1.5 hover:text-brand-gold-hover transition-colors select-none">
              In-House Editorial Board
            </span>
          </div>
        </div>

        {/* 3 Columns Article Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="insights-grid">
          {articles.map((art, idx) => (
            <motion.article
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              key={art.id}
              onClick={() => setSelectedArticleId(art.id)}
              className="flex flex-col justify-between bg-brand-bg rounded-xs border border-brand-border h-full hover:shadow-lg transition-all duration-300 group overflow-hidden cursor-pointer"
              id={`insight-essay-${idx}`}
            >
              
              <div>
                {/* Essay Header Graphic Frame */}
                <div className="aspect-[16/10] overflow-hidden relative border-b border-brand-border bg-slate-200">
                  <img
                    src={art.imageUrl}
                    alt={art.title}
                    className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-104 filter grayscale hover:grayscale-0 duration-300"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category overlay label */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 border border-brand-border text-[9px] uppercase tracking-widest font-bold text-brand-gold">
                    {art.category}
                  </div>
                </div>

                {/* Text Body */}
                <div className="p-6 md:p-8 space-y-4">
                  {/* Metadata strip */}
                  <div className="flex items-center gap-4 text-[10px] text-brand-muted font-sans font-medium uppercase tracking-widest">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {art.readTime}
                    </span>
                    <span>•</span>
                    <span>{art.date}</span>
                  </div>

                  <h3 className="font-serif text-lg md:text-xl text-[#111827] font-semibold leading-snug group-hover:text-brand-gold transition-colors duration-200 min-h-[56px]">
                    {art.title}
                  </h3>

                  <p className="text-xs md:text-sm text-brand-muted leading-relaxed font-light font-sans line-clamp-3">
                    {art.desc}
                  </p>
                </div>
              </div>

              {/* Footer strip */}
              <div className="px-6 pb-6 md:px-8 md:pb-8 pt-4 border-t border-brand-border/40 flex items-center justify-between">
                <span className="text-xs text-brand-text font-serif italic">
                  By {art.author}
                </span>

                <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-gold group-hover:translate-x-1.5 transition-transform duration-300">
                  Read Journal
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>

            </motion.article>
          ))}
        </div>

        {/* Modal Overlay Article Reader */}
        <AnimatePresence>
          {selectedArticleId && activeArticle && (
            <>
              {/* Dark backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedArticleId(null)}
                className="fixed inset-0 z-100 bg-brand-primary/85 backdrop-blur-xs flex items-center justify-center p-4"
              />

              {/* Reader panel card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25 }}
                className="fixed inset-x-4 md:inset-x-auto md:w-full md:max-w-3xl top-10 bottom-10 z-110 bg-[#FCFAF7] border border-brand-border rounded-xs shadow-2xl overflow-y-auto flex flex-col justify-between"
                id="article-reader-modal"
              >
                <div>
                  {/* Top Header Controls bar */}
                  <div className="flex items-center justify-between p-4 border-b border-brand-border bg-white sticky top-0 z-10">
                    <div className="flex items-center gap-2">
                      <BookOpenCheck className="h-5 w-5 text-brand-gold" />
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[#B45309] font-bold">
                        Aura Journal Reader
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedArticleId(null)}
                      className="p-1.5 rounded-full bg-brand-bg border border-brand-border hover:bg-brand-gold/10 text-brand-text transition-colors cursor-pointer"
                      id="close-reader-modal"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Art Image cover & metadata title block */}
                  <div className="aspect-video relative overflow-hidden bg-slate-200">
                    <img
                      src={activeArticle.imageUrl}
                      alt={activeArticle.title}
                      className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.02]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white space-y-2">
                      <span className="bg-brand-gold text-brand-primary text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 inline-block">
                        {activeArticle.category}
                      </span>
                      <h2 className="font-serif text-2xl md:text-3xl text-[#FCFAF7] leading-tight font-extrabold max-w-2xl">
                        {activeArticle.title}
                      </h2>
                    </div>
                  </div>

                  {/* Narrative paragraphs and columns list */}
                  <div className="p-6 md:p-10 space-y-6">
                    <div className="flex items-center gap-4 text-[10px] text-brand-muted uppercase font-sans tracking-widest border-b border-brand-border pb-4">
                      <span>Article by {activeArticle.author}</span>
                      <span>•</span>
                      <span>{activeArticle.date}</span>
                      <span>•</span>
                      <span>{activeArticle.readTime}</span>
                    </div>

                    <div className="space-y-6 font-serif text-sm md:text-base text-brand-text leading-relaxed font-light">
                      {activeArticle.content.map((para, i) => (
                        <p key={i} className="text-brand-text/90">
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer security tag */}
                <div className="p-6 border-t border-brand-border bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-[10px] text-brand-muted font-sans font-medium">
                    <Sparkles className="h-4 w-4 text-[#C89B5E]" />
                    <span>Exclusive editorial authorized for active applicants</span>
                  </div>
                  <button
                    onClick={() => setSelectedArticleId(null)}
                    className="px-6 py-2.5 bg-brand-primary text-[#FCFAF7] text-[10px] font-bold uppercase tracking-widest hover:bg-brand-gold transition-colors rounded-xs cursor-pointer"
                  >
                    Done Reading
                  </button>
                </div>

              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
