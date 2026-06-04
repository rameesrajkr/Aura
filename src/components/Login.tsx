import React, { useState } from "react";
import { motion } from "motion/react";
import { KeyRound, Mail, ShieldCheck, ArrowRight, Eye, EyeOff, Sparkles, AlertCircle } from "lucide-react";

interface LoginProps {
  onRegisterClick: () => void;
  onLoginSuccess: (username: string) => void;
}

export default function Login({ onRegisterClick, onLoginSuccess }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please input your full authorized member credentials.");
      return;
    }

    setLoading(true);

    // Dynamic high-end diagnostic authentication feedback simulation
    setTimeout(() => {
      setLoading(false);
      if (email.toLowerCase().includes("error")) {
        setError("Cryptographic token rejection. Your credentials do not align with any active secure database profiles.");
      } else {
        setSuccess(true);
        setTimeout(() => {
          // Extract name from email to simulate genuine personalized login
          const namePart = email.split("@")[0];
          const capitalized = namePart.charAt(0).toUpperCase() + namePart.slice(1);
          onLoginSuccess(capitalized);
        }, 1000);
      }
    }, 1500);
  };

  return (
    <section className="min-h-screen bg-brand-primary text-white flex items-center justify-center p-4 relative overflow-hidden pt-28 pb-16">
      {/* Absolute artistic high-end geometric masks */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C89B5E_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
      <div className="absolute -top-40 -left-40 h-96 w-96 bg-brand-gold/[0.04] rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 bg-brand-gold/[0.04] rounded-full blur-3xl" />

      <div className="w-full max-w-lg relative z-10">
        
        {/* Back Link or Navigation Assistance */}
        <div className="text-center mb-8">
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-xs text-brand-gold hover:opacity-85 uppercase tracking-[0.2em] font-bold"
          >
            <span>&larr; Return to Central Concierge</span>
          </a>
        </div>

        {/* Main Luxury Frame Cards */}
        <div className="bg-[#0F1319] border border-brand-gold/35 rounded-xs p-6 md:p-10 space-y-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
          
          <div className="text-center space-y-2">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-brand-gold/30 text-brand-gold mb-3">
              <ShieldCheck className="h-6 w-6 stroke-[1.25]" />
            </div>
            <span className="text-[9px] uppercase tracking-[0.25em] text-brand-gold font-bold block">
              Sovereign Registry Access
            </span>
            <h1 className="font-serif text-2xl md:text-3xl text-[#FCFAF7] leading-tight font-semibold">
              Member Portal Sign In
            </h1>
            <p className="text-xs text-slate-400 font-sans font-light max-w-sm mx-auto leading-relaxed">
              Authenticate using your registered compliance email and secure passcode to access pending match portfolios, schedules, and active advisory reviews.
            </p>
          </div>

          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10 space-y-4"
            >
              <div className="h-14 w-14 rounded-full bg-brand-gold/20 text-brand-gold border border-brand-gold/45 flex items-center justify-center mx-auto shadow-lg animate-pulse">
                <Sparkles className="h-7 w-7" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-serif text-lg font-bold text-[#FCFAF7]">Identity Vetted Successful</h3>
                <p className="text-xs text-slate-300 font-sans font-light max-w-sm mx-auto leading-relaxed">
                  Decrypting private matching directories... Welcome back to the AURA Inner Sanctum Circle.
                </p>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Error Callout */}
              {error && (
                <div className="p-4 bg-red-950/40 border border-red-800/65 rounded-xs flex gap-3 text-xs text-red-200 leading-relaxed font-sans">
                  <AlertCircle className="h-5 w-5 text-brand-gold flex-shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              {/* Email marker */}
              <div className="space-y-1.5">
                <label htmlFor="member-email" className="text-[10px] uppercase font-bold text-brand-gold tracking-widest block font-sans">
                  Registered Partner Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="email"
                    id="member-email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. j.duggan@pep-capital.com"
                    className="w-full bg-[#07090C] border border-white/10 rounded-xs p-3.5 pl-11 text-xs text-slate-200 focus:border-brand-gold focus:outline-hidden font-medium tracking-wide transition-colors"
                  />
                </div>
              </div>

              {/* Private Security Passcode key */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label htmlFor="member-passcode" className="text-[10px] uppercase font-bold text-brand-gold tracking-widest block font-sans">
                    Secure Vault Passcode
                  </label>
                  <span className="text-[9px] text-slate-400 tracking-wider">Must meet custom NDA criteria</span>
                </div>
                <div className="relative">
                  <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="member-passcode"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••••"
                    className="w-full bg-[#07090C] border border-white/10 rounded-xs p-3.5 pl-11 pr-11 text-xs text-slate-200 focus:border-brand-gold focus:outline-hidden font-medium tracking-widest transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand-gold transition-colors focus:outline-hidden cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Remember checkbox, with premium wording */}
              <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 font-sans">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    className="accent-brand-gold h-3 w-3 rounded-xs bg-[#07090C]"
                  />
                  <span>Authorize secure device caching</span>
                </label>
                <a href="#contact" className="hover:text-brand-gold transition-colors block">
                  Forgot Security Credentials?
                </a>
              </div>

              {/* Login Action Trigger */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-brand-gold text-brand-primary font-bold text-xs uppercase tracking-[0.16em] hover:bg-brand-gold-hover active:scale-[0.99] transition-all rounded-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-black/20 text-center"
                  id="submit-portal-login"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-brand-primary" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      <span>Analyzing Security Hashes...</span>
                    </>
                  ) : (
                    <>
                      <span>Unlock Client Vault</span>
                      <ArrowRight className="h-3.5 w-3.5 text-brand-primary" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

          {/* Prompt options to go register instead */}
          <div className="pt-6 border-t border-white/5 text-center space-y-1">
            <p className="text-xs text-slate-400 font-sans font-light">
              Don't have registry credentials configured yet?
            </p>
            <button
              onClick={onRegisterClick}
              className="text-xs font-serif font-bold text-brand-gold hover:text-brand-gold-hover underline underline-offset-4 cursor-pointer"
              id="switch-to-portal-register"
            >
              Apply to join the Registry and create an account &rarr;
            </button>
          </div>

          {/* Secure watermark */}
          <div className="pt-4 text-center text-[9px] text-slate-500 font-sans tracking-wide">
            Verified TLS cryptographic line • Physical offline storage node: NY-S1-SGC
          </div>

        </div>

      </div>
    </section>
  );
}
