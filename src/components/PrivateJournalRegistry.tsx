import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, CheckCircle2, Bookmark, BookOpen, ShieldCheck } from "lucide-react";

export default function PrivateJournalRegistry() {
  const [email, setEmail] = useState("");
  const [shippingMode, setShippingMode] = useState(false);
  const [address, setAddress] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setTimeout(() => {
      setSubscribed(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="bg-brand-primary text-white py-16 lg:py-24 border-t border-brand-gold/30 relative overflow-hidden" id="insights-subscription">
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C89B5E_1px,transparent_1px)] [background-size:20px_20px]" />
      
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Editorial Promo Copy */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand-gold/40 text-brand-gold text-[10px] uppercase font-bold tracking-widest bg-white/5">
            <Bookmark className="h-3 w-3 fill-brand-gold" />
            <span>Printed Editorial Ledger</span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl text-[#FCFAF7] leading-tight tracking-tight">
            Register for the Offline <span className="italic text-brand-gold">AURA Journal</span> Volume
          </h2>

          <p className="text-xs md:text-sm text-slate-300 font-light leading-relaxed">
            Published quarterly under custom press printings, our private editorial journal details advanced psychological matching criteria, modern high-net-worth courtship codes, and exclusive profiles on physical dating lounge partners across the US. Delivered discreetly in safety-seal envelopes.
          </p>

          <div className="flex gap-8 pt-4 border-t border-white/5">
            <div>
              <span className="text-xs text-brand-gold uppercase tracking-widest font-black block">Frequency</span>
              <span className="text-xs text-slate-300 font-light mt-1 block">4 Volumes Per Year</span>
            </div>
            <div>
              <span className="text-xs text-brand-gold uppercase tracking-widest font-black block">Shield Protocol</span>
              <span className="text-xs text-slate-300 font-light mt-1 block">No Digital Tracking</span>
            </div>
            <div>
              <span className="text-xs text-brand-gold uppercase tracking-widest font-black block">Status</span>
              <span className="text-xs text-slate-300 font-light mt-1 block">Exclusive to Candidates</span>
            </div>
          </div>
        </div>

        {/* Right Interactive Subscription Form Panel */}
        <div className="lg:col-span-6">
          <div className="bg-white text-brand-text rounded-xs border border-brand-border p-6 md:p-8 shadow-2xl relative">
            
            <AnimatePresence mode="wait">
              {subscribed ? (
                <motion.div
                  key="sub-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="h-14 w-14 rounded-full bg-[#D1FAE5] text-[#059669] flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif text-xl font-bold text-brand-text">Subscription Requested</h3>
                    <p className="text-xs text-brand-muted font-light max-w-sm mx-auto leading-relaxed">
                      Your interest record has been successfully cataloged. One of our liaison coordinators will verify your demographic standing prior to dispatching your print volume.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="sub-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="font-serif text-lg font-bold text-brand-text leading-tight">Apply for Home Delivery</h3>
                    <p className="text-xs text-brand-muted font-light mt-1">Please provide credential markers to join our mailing registry.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email Input */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold text-brand-gold tracking-widest block font-sans">
                        Confidential Email Marker
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-muted" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. m.vance@vancestrategy.com"
                          className="w-full bg-brand-bg border border-brand-border rounded-xs p-3.5 pl-11 text-xs focus:border-brand-gold focus:outline-hidden text-brand-text font-medium"
                        />
                      </div>
                    </div>

                    {/* Toggle print shipping address */}
                    <div className="p-3 bg-brand-bg border border-brand-border/60 rounded-xs flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-brand-text block">Include Printed Print Volumes?</span>
                        <span className="text-[9px] text-[#B45309] block leading-tight mt-0.5 font-sans">Receive hard-copy booklets by post mail</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setShippingMode(!shippingMode)}
                        className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
                          shippingMode ? "bg-[#34D399]" : "bg-brand-muted/30"
                        }`}
                      >
                        <span className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${
                          shippingMode ? "translate-x-6" : "translate-x-0"
                        }`} />
                      </button>
                    </div>

                    <AnimatePresence>
                      {shippingMode && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-1.5 overflow-hidden"
                        >
                          <label className="text-[10px] uppercase font-bold text-brand-gold tracking-widest block font-sans">
                            Discreet Shipping Address (Full Suite/Street Office)
                          </label>
                          <textarea
                            rows={2}
                            required
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="e.g. 100 Park Avenue, Suite 2400, Manhattan, New York, 10017"
                            className="w-full bg-brand-bg border border-brand-border rounded-xs p-3 text-xs focus:border-brand-gold focus:outline-hidden text-brand-text font-medium"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 bg-brand-primary text-white font-bold text-xs uppercase tracking-widest hover:bg-brand-gold rounded-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                        id="submit-journal-subscription"
                      >
                        {loading ? (
                          <>
                            <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            <span>Subscribing...</span>
                          </>
                        ) : (
                          <>
                            <span>Register Admissions Mail</span>
                            <BookOpen className="h-4 w-4 text-brand-gold" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>

                  <div className="p-3 border border-brand-border/40 rounded-xs bg-[#FFFBEB] text-[9.5px] text-[#92400E] leading-relaxed flex gap-2">
                    <ShieldCheck className="h-4 w-4 text-brand-gold flex-shrink-0" />
                    <span>
                      Shipping addresses are audited prior to delivery to block automated bots. We prioritize professional high-trust business/residential office suites.
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
