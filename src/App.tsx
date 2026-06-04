import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import ProblemSection from "./components/ProblemSection";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import SuccessStories from "./components/SuccessStories";
import Comparison from "./components/Comparison";
import Founder from "./components/Founder";
import Membership from "./components/Membership";
import FAQ from "./components/FAQ";
import Insights from "./components/Insights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ApplicationModal from "./components/ApplicationModal";
import Login from "./components/Login";
import Register from "./components/Register";
import { motion, AnimatePresence } from "motion/react";
import { FileClock, UserCheck, ShieldCheck, Bookmark, Sparkles, Heart } from "lucide-react";

// Import new premium interactive sub-page modules
import InteractivePathPreview from "./components/InteractivePathPreview";
import CompatibilityEstimator from "./components/CompatibilityEstimator";
import AnonymousDossiers from "./components/AnonymousDossiers";
import PrivateJournalRegistry from "./components/PrivateJournalRegistry";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTierId, setSelectedTierId] = useState<string | undefined>(undefined);
  const [isDiscretionPopupOpen, setIsDiscretionPopupOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home");
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  // Trigger discretion popup when the page loads with a slight delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDiscretionPopupOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Set up window location hash based relative page router
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (!hash) {
        setActivePage("Home");
        return;
      }

      const pageMap: Record<string, string> = {
        "#home": "Home",
        "#about": "About",
        "#how-it-works": "How It Works",
        "#membership": "Membership",
        "#success-stories": "Success Stories",
        "#insights": "Insights",
        "#contact": "Contact",
        "#login": "Login",
        "#register": "Register"
      };

      const matchedPage = pageMap[hash.toLowerCase()];
      if (matchedPage) {
        setActivePage(matchedPage);
        // Scroll window dynamically to simulate a clean fresh page transition
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    // Initialize once on mount
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleOpenModal = (tierId?: string) => {
    setSelectedTierId(tierId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-gold/30 selection:text-brand-text relative">
      
      {/* Absolute Admissions/Discretion Welcome Pop-up Overlay */}
      <AnimatePresence>
        {isDiscretionPopupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-[#080B0F]/90 backdrop-blur-xl"
            id="onboarding-discretion-overlay"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 30 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 220, damping: 24 }}
              className="w-full max-w-lg bg-[#0F1319] border border-brand-gold/35 rounded-xs p-6 md:p-8 space-y-6 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95)] relative overflow-hidden"
              id="onboarding-discretion-modal"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
              
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="rounded-full border border-brand-gold/45 p-3.5 bg-brand-primary text-brand-gold shadow-inner">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                
                <div className="space-y-1">
                  <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-brand-gold block">
                    Discretion & Vetting Covenant
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl text-[#FCFAF7] tracking-tight">
                    Secured Client Access Registry
                  </h3>
                </div>

                <div className="h-px w-20 bg-brand-gold/25" />

                <p className="text-xs text-slate-300 leading-relaxed font-sans font-light max-w-sm">
                  Welcome to <span className="font-semibold text-[#FCFAF7] uppercase tracking-[0.05rem]">AURA Matchmaking Concierge</span>. We maintain an offline, non-published proprietary system to safeguard our high-society partnerships.
                </p>

                <div className="bg-[#0b0e12] border border-white/5 rounded-xs p-4 text-left space-y-3.5 w-full">
                  <div className="flex items-start gap-2.5 text-[11px] text-slate-400">
                    <span className="text-brand-gold font-bold mt-0.5">•</span>
                    <span><strong>Pre-Credentials Vetting:</strong> All prospective members undergo identity audits, professional credential verification, and safe-conduct screening before placement matching.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-[11px] text-slate-400">
                    <span className="text-brand-gold font-bold mt-0.5">•</span>
                    <span><strong>Zero Tracking Footprint:</strong> Dossiers are exclusively processed offline. No algorithmic indexation, public records matching, or advertising telemetry is permitted.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-[11px] text-slate-400">
                    <span className="text-brand-gold font-bold mt-0.5">•</span>
                    <span><strong>Discretion Accord:</strong> You agree to represent all background criteria honestly and preserve partner confidentiality within this bespoke matchmaking sandbox directory.</span>
                  </div>
                </div>

                <div className="w-full pt-2">
                  <button
                    onClick={() => setIsDiscretionPopupOpen(false)}
                    className="w-full py-4 bg-brand-gold text-brand-primary font-bold text-xs uppercase tracking-[0.15em] hover:bg-brand-gold-hover active:scale-[0.99] transition-all rounded-xs cursor-pointer shadow-lg shadow-black/30"
                    id="accept-discretion-action"
                  >
                    Agree & Unlock Private Registry
                  </button>
                  
                  <p className="text-[9px] text-slate-500 font-medium tracking-wide mt-3 text-center leading-normal">
                    Secure Database Verification System active • 128-bit cryptographic key verified
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Header / Sticky navigation bar with activePage highlights support */}
      <Navbar
        onApplyClick={handleOpenModal}
        activePage={activePage}
        loggedInUser={loggedInUser}
        onLogout={() => setLoggedInUser(null)}
      />

      {/* Conditional Multi-Page Rendering container with motion transitions */}
      <main className="">
        <AnimatePresence mode="wait">
          {activePage === "Home" && (
            <motion.div
              key="home-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              {/* Hero header */}
              <Hero onApplyClick={handleOpenModal} />

              {/* Seamless Press auto-carousel brands */}
              <SocialProof />

              {/* Challenge layout versus bespoke solution */}
              <ProblemSection />

              {/* Premium curated cards highlighting why AURA is preferred */}
              <WhyChooseUs />

              {/* Subtle Home Teaser Promo Cards */}
              <section className="bg-brand-primary text-white py-16 border-t border-b border-white/5 relative overflow-hidden" id="homepage-teaser-highlights">
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#C89B5E_1px,transparent_1px)] [background-size:20px_20px]" />
                <div className="mx-auto max-w-[1200px] px-4 md:px-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-3 p-6 border border-white/10 rounded-xs bg-white/5 hover:border-brand-gold/50 transition-colors">
                      <span className="text-brand-gold text-[10px] uppercase tracking-widest font-bold">01 • Philosophy</span>
                      <h4 className="font-serif text-lg font-bold">Bespoke Offline Curation</h4>
                      <p className="text-xs text-slate-300 font-light leading-relaxed">
                        Rather than using automated mobile algorithms, our premium matchmaking directory is run exclusively by credentialed advisory offline experts.
                      </p>
                      <a href="#about" className="inline-block pt-2 text-xs font-bold text-brand-gold uppercase tracking-wider hover:opacity-80">
                        Read Discretion Charter &rarr;
                      </a>
                    </div>
                    <div className="space-y-3 p-6 border border-white/10 rounded-xs bg-white/5 hover:border-brand-gold/50 transition-colors">
                      <span className="text-brand-gold text-[10px] uppercase tracking-widest font-bold">02 • The Method</span>
                      <h4 className="font-serif text-lg font-bold">Strict Identity Verification</h4>
                      <p className="text-xs text-slate-300 font-light leading-relaxed">
                        Our 5 geographical consultation suites execute detailed compliance checks to preserve a pristine circle of peer equals.
                      </p>
                      <a href="#how-it-works" className="inline-block pt-2 text-xs font-bold text-brand-gold uppercase tracking-wider hover:opacity-80">
                        How We Plan Matched Pairs &rarr;
                      </a>
                    </div>
                    <div className="space-y-3 p-6 border border-white/10 rounded-xs bg-white/5 hover:border-brand-gold/50 transition-colors">
                      <span className="text-brand-gold text-[10px] uppercase tracking-widest font-bold">03 • Commisions</span>
                      <h4 className="font-serif text-lg font-bold">Sovereign Directives</h4>
                      <p className="text-xs text-slate-300 font-light leading-relaxed">
                        Our specialized memberships scale from local regional placement to wide national recruitment and global headhunting VIP plans.
                      </p>
                      <a href="#membership" className="inline-block pt-2 text-xs font-bold text-brand-gold uppercase tracking-wider hover:opacity-80">
                        Explore Commission Portfolios &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {activePage === "About" && (
            <motion.div
              key="about-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-0"
            >
              {/* Premium Title Section */}
              <section className="bg-brand-primary text-white pt-32 pb-24 border-b border-brand-gold/25 relative overflow-hidden" id="about-page-header">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C89B5E_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="mx-auto max-w-[1200px] px-4 md:px-6 text-center space-y-4 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] uppercase tracking-[0.2em] text-slate-300 font-bold">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                    Bespoke Security & Curation
                  </div>
                  <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#FCFAF7] tracking-tight max-w-4xl mx-auto leading-tight" id="about-main-heading">
                    Preserving the Sacred Art of <span className="italic text-brand-gold">Discreet Introductions</span>
                  </h1>
                  <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
                    AURA's offline matchmaking registry protects high-net-worth professionals, executives, and leaders across the United States. Providing high-trust lifetime connections since 2006.
                  </p>
                </div>
              </section>

              {/* Founder Profile component */}
              <Founder />

              {/* Discretion Charter Detail block */}
              <section className="bg-white py-20 lg:py-28 border-b border-brand-border" id="discretion-charter-detail">
                <div className="mx-auto max-w-[1200px] px-4 md:px-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <span className="text-[11px] uppercase tracking-[0.25em] text-brand-gold font-bold block mb-2">
                        Registry Safeguards
                      </span>
                      <h2 className="font-serif text-3xl md:text-4xl text-brand-text leading-tight tracking-tight">
                        Our Absolute Non-Disclosure Covenant
                      </h2>
                      <p className="text-xs md:text-sm text-brand-muted leading-relaxed font-light">
                        Unlike modern dating applications that optimize for public search indexing, metadata monetization, and scrapable visual profiles, AURA operates under strict isolation protocols. Your professional credentials, net-worth, and visual portfolios remain offline.
                      </p>
                      
                      <div className="space-y-5 pt-4">
                        {[
                          { title: "No Public Search Footprint", desc: "Your identity remains hidden. There is no web interface or member directory open to crawler spiders." },
                          { title: "Double-Consent Reveal Mode", desc: "Photographic files are only presented in password-protected previews, and only with your explicit initial authorization." },
                          { title: "Rigorous Peer Alignment Verification", desc: "Every portfolio candidate is vetted via dynamic interview checks, single-status audits, and safe-conduct screen clearances." }
                        ].map((item, idx) => (
                          <div key={idx} className="flex gap-4 items-start" id={`charter-clause-${idx}`}>
                            <div className="bg-brand-gold/10 text-brand-gold rounded-full p-1.5 mt-0.5 font-bold text-xs select-none">
                              0{idx + 1}
                            </div>
                            <div>
                              <h4 className="text-sm font-bold text-brand-text font-serif leading-snug">{item.title}</h4>
                              <p className="text-xs text-brand-muted font-light leading-normal mt-1">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Vow Block */}
                    <div className="bg-brand-primary text-white border border-brand-gold/25 rounded-xs p-8 md:p-12 space-y-8 shadow-xl relative overflow-hidden" id="about-vow-quote">
                      <div className="absolute top-0 right-0 h-40 w-40 bg-brand-gold/5 rounded-full blur-3xl" />
                      
                      <h3 className="font-serif text-2xl text-brand-gold border-b border-white/5 pb-4">
                        The Matchmaking Oath
                      </h3>
                      
                      <blockquote className="font-serif text-base md:text-md italic text-slate-300 leading-relaxed font-light">
                        "We protect relationship design with the exact diligence, legal discretion, and assessment care that preeminent corporate directors allocate to major mergers & acquisitions."
                      </blockquote>
                      
                      <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                        <div className="h-10 w-10 bg-brand-gold/15 border border-brand-gold/40 text-brand-gold rounded-full flex items-center justify-center font-serif text-lg font-bold">
                          A
                        </div>
                        <div>
                          <span className="text-xs uppercase tracking-widest font-black block text-slate-200">The Board of Directors</span>
                          <span className="text-[10px] text-slate-400 font-light italic">Aura Relationship Concierge, Established 2006</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Matchmaking Comparison Section (Standard apps vs Aura) */}
              <Comparison />
            </motion.div>
          )}

          {activePage === "How It Works" && (
            <motion.div
              key="how-it-works-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-0"
            >
              {/* Title Header */}
              <section className="bg-brand-primary text-white pt-32 pb-24 border-b border-brand-gold/25 relative overflow-hidden" id="howitworks-page-header">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C89B5E_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="mx-auto max-w-[1200px] px-4 md:px-6 text-center space-y-4 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] uppercase tracking-[0.2em] text-slate-300 font-bold">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                    How It Works
                  </div>
                  <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#FCFAF7] tracking-tight max-w-4xl mx-auto leading-tight">
                    The 5 Stages of <span className="italic text-brand-gold">Relationship Architecture</span>
                  </h1>
                  <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
                    A thorough offline matching blueprint built on peer vetting, lifestyle analysis, intellectual alignment, and personalized concierge hosting.
                  </p>
                </div>
              </section>

              {/* Standard Linear steps components */}
              <HowItWorks />

              {/* Dynamic challenge analysis sections */}
              <ProblemSection />

              {/* Our newly introduced interactive walk-through path preview component */}
              <InteractivePathPreview />
            </motion.div>
          )}

          {activePage === "Membership" && (
            <motion.div
              key="membership-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-0"
            >
              {/* Title Header */}
              <section className="bg-brand-primary text-white pt-32 pb-24 border-b border-brand-gold/25 relative overflow-hidden" id="membership-page-header">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C89B5E_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="mx-auto max-w-[1200px] px-4 md:px-6 text-center space-y-4 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] uppercase tracking-[0.2em] text-slate-300 font-bold">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                    Admissions & Commissions
                  </div>
                  <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#FCFAF7] tracking-tight max-w-4xl mx-auto leading-tight">
                    Executive <span className="italic text-brand-gold">Matchmaking Programs</span>
                  </h1>
                  <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
                    Designed for leaders, partners, and high-discretion professionals seeking elite regional matches, statewide scouting campaigns, or global headhunting.
                  </p>
                </div>
              </section>

              {/* Main membership cards layout component */}
              <Membership onApplyClick={handleOpenModal} />

              {/* Newly added interactive compatibility and matching-tier index calculator */}
              <CompatibilityEstimator onApplyClick={handleOpenModal} />
            </motion.div>
          )}

          {activePage === "Success Stories" && (
            <motion.div
              key="success-stories-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-0"
            >
              {/* Title Header */}
              <section className="bg-brand-primary text-white pt-32 pb-24 border-b border-brand-gold/25 relative overflow-hidden" id="successstories-page-header">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C89B5E_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="mx-auto max-w-[1200px] px-4 md:px-6 text-center space-y-4 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] uppercase tracking-[0.2em] text-slate-300 font-bold">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                    Case Studies of Vetted Pairs
                  </div>
                  <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#FCFAF7] tracking-tight max-w-4xl mx-auto leading-tight">
                    The Living <span className="italic text-brand-gold">Proof Of Chemistry</span>
                  </h1>
                  <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
                    Explore real anonymous relationship blueprints orchestrated by AURA since 2006. From bicoastal tech leaders to medical directors.
                  </p>
                </div>
              </section>

              {/* Success stories testimonial slider */}
              <SuccessStories />

              {/* Newly added anonymous dossier portfolio grid */}
              <AnonymousDossiers onApplyClick={() => handleOpenModal()} />
            </motion.div>
          )}

          {activePage === "Insights" && (
            <motion.div
              key="insights-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-0"
            >
              {/* Title Header */}
              <section className="bg-brand-primary text-white pt-32 pb-24 border-b border-brand-gold/25 relative overflow-hidden" id="insights-page-header">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C89B5E_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="mx-auto max-w-[1200px] px-4 md:px-6 text-center space-y-4 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] uppercase tracking-[0.2em] text-slate-300 font-bold">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                    The AURA Journal
                  </div>
                  <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#FCFAF7] tracking-tight max-w-4xl mx-auto leading-tight">
                    Essays on <span className="italic text-brand-gold">Relationship Design</span>
                  </h1>
                  <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
                    Reflective examinations of behavioral science, digital detachment, elite asset protections, and the psychology of slow, hand-crafted companionship.
                  </p>
                </div>
              </section>

              {/* Interactive publications posts and full reader modal views */}
              <Insights />

              {/* Newly added printed subscription postal registry form */}
              <PrivateJournalRegistry />
            </motion.div>
          )}

          {activePage === "Contact" && (
            <motion.div
              key="contact-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-0"
            >
              {/* Title Header */}
              <section className="bg-brand-primary text-white pt-32 pb-24 border-b border-brand-gold/25 relative overflow-hidden" id="contact-page-header">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C89B5E_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="mx-auto max-w-[1200px] px-4 md:px-6 text-center space-y-4 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] uppercase tracking-[0.2em] text-slate-300 font-bold">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                    Client Liaison Offices
                  </div>
                  <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#FCFAF7] tracking-tight max-w-4xl mx-auto leading-tight">
                    Initiate Your <span className="italic text-brand-gold">Private Partnership</span>
                  </h1>
                  <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
                    Contact our central headquarters or register securely to book a initial discovery interview with a direct representative.
                  </p>
                </div>
              </section>

              {/* Headquarters directory, support, and direct liaison form */}
              <Contact />

              {/* Accordion FAQ answering core policies */}
              <FAQ />
            </motion.div>
          )}

          {activePage === "Login" && (
            <motion.div
              key="login-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <Login
                onRegisterClick={() => {
                  window.location.hash = "#register";
                }}
                onLoginSuccess={(username) => {
                  setLoggedInUser(username);
                  window.location.hash = "#home";
                }}
              />
            </motion.div>
          )}

          {activePage === "Register" && (
            <motion.div
              key="register-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <Register
                onLoginClick={() => {
                  window.location.hash = "#login";
                }}
                onRegisterSuccess={(username) => {
                  setLoggedInUser(username);
                  window.location.hash = "#home";
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Simulated Parallax CTA and site footer */}
      <Footer onApplyClick={handleOpenModal} />

      {/* Fully-managed admissions inquiry portal modal */}
      <ApplicationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedTierId={selectedTierId}
      />

    </div>
  );
}
