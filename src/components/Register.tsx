import React, { useState } from "react";
import { motion } from "motion/react";
import { ShieldAlert, Mail, User, KeyRound, Building2, Eye, EyeOff, CheckSquare, Sparkles, Check } from "lucide-react";

interface RegisterProps {
  onLoginClick: () => void;
  onRegisterSuccess: (username: string) => void;
}

export default function Register({ onLoginClick, onRegisterSuccess }: RegisterProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [programChoice, setProgramChoice] = useState("bicoastal");
  const [showPassword, setShowPassword] = useState(false);
  const [agreeNda, setAgreeNda] = useState(false);
  const [agreeChecks, setAgreeChecks] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!fullName || !email || !password) {
      setError("Please complete all registry input credentials.");
      return;
    }
    if (!agreeNda) {
      setError("Mutual Non-Disclosure and Confidentiality agreements must be checked to register.");
      return;
    }
    if (!agreeChecks) {
      setError("Compliance checking consensus must be given to begin identity matching audits.");
      return;
    }

    setLoading(true);

    // High fidelity secure credentials generation simulation
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        onRegisterSuccess(fullName);
      }, 1200);
    }, 1800);
  };

  return (
    <section className="min-h-screen bg-brand-primary text-white flex items-center justify-center p-4 relative overflow-hidden pt-28 pb-16">
      {/* Absolute artistic visual masks */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C89B5E_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
      <div className="absolute -top-40 -right-40 h-96 w-96 bg-brand-gold/[0.04] rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 bg-brand-gold/[0.04] rounded-full blur-3xl" />

      <div className="w-full max-w-xl relative z-10">
        
        {/* Back Link to Home */}
        <div className="text-center mb-8">
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-xs text-brand-gold hover:opacity-85 uppercase tracking-[0.2em] font-bold"
          >
            <span>&larr; Return to Central Concierge</span>
          </a>
        </div>

        {/* Framing Register Card and Fields */}
        <div className="bg-[#0F1319] border border-brand-gold/35 rounded-xs p-6 md:p-10 space-y-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
          
          <div className="text-center space-y-2">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-brand-gold/30 text-brand-gold mb-3">
              <Building2 className="h-6 w-6 stroke-[1.25]" />
            </div>
            <span className="text-[9px] uppercase tracking-[0.25em] text-brand-gold font-bold block">
              Admissions Vetting Registration
            </span>
            <h1 className="font-serif text-2xl md:text-3xl text-[#FCFAF7] leading-tight font-semibold">
              Create Candidate Account
            </h1>
            <p className="text-xs text-slate-400 font-sans font-light max-w-md mx-auto leading-relaxed">
              Register your credentials to claim your client code, customize your search parameters, and authorize identity screening schedules.
            </p>
          </div>

          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10 space-y-4"
            >
              <div className="h-14 w-14 rounded-full bg-brand-gold/20 text-brand-gold border border-brand-gold/45 flex items-center justify-center mx-auto shadow-lg animate-pulse">
                <Check className="h-7 w-7" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-serif text-lg font-bold text-[#FCFAF7]">Account Successfully Reserved</h3>
                <p className="text-xs text-slate-300 font-sans font-light max-w-md mx-auto leading-relaxed">
                  Initializing compliance workflow files... Setting up your secure member index matching portal block.
                </p>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Error Box */}
              {error && (
                <div className="p-4 bg-red-950/40 border border-red-800/65 rounded-xs flex gap-3 text-xs text-red-200 leading-relaxed font-sans">
                  <ShieldAlert className="h-5 w-5 text-brand-gold flex-shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Full name input */}
                <div className="space-y-1.55">
                  <label htmlFor="member-fullname" className="text-[10px] uppercase font-bold text-brand-gold tracking-widest block font-sans">
                    Legal Name / Archetype Identifier
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      id="member-fullname"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Richard Hawthorne"
                      className="w-full bg-[#07090C] border border-white/10 rounded-xs p-3 pl-11 text-xs text-slate-200 focus:border-brand-gold focus:outline-hidden font-medium transition-colors"
                    />
                  </div>
                </div>

                {/* Email address input */}
                <div className="space-y-1.5">
                  <label htmlFor="member-email" className="text-[10px] uppercase font-bold text-brand-gold tracking-widest block font-sans">
                    Secure Liaison Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      type="email"
                      id="member-email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="r.hawthorne@mercenary-group.com"
                      className="w-full bg-[#07090C] border border-white/10 rounded-xs p-3 pl-11 text-xs text-slate-200 focus:border-brand-gold focus:outline-hidden font-medium transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Password input */}
                <div className="space-y-1.5">
                  <label htmlFor="member-password" className="text-[10px] uppercase font-bold text-brand-gold tracking-widest block font-sans">
                    Create Secure Passcode
                  </label>
                  <div className="relative">
                    <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      id="member-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full bg-[#07090C] border border-white/10 rounded-xs p-3 pl-11 pr-11 text-xs text-slate-200 focus:border-brand-gold focus:outline-hidden font-medium tracking-widest transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand-gold transition-colors focus:none cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {/* Preference Scout Program Selector */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold text-brand-gold tracking-widest block font-sans">
                    Designated Matching Stream
                  </label>
                  <select
                    value={programChoice}
                    onChange={(e) => setProgramChoice(e.target.value)}
                    className="w-full bg-[#07090C] border border-white/10 rounded-xs p-3 text-xs text-slate-200 focus:border-brand-gold focus:outline-hidden font-medium cursor-pointer"
                  >
                    <option value="essential">Essential Metro ($7,500)</option>
                    <option value="bicoastal">Bicoastal Commuter ($15,000)</option>
                    <option value="executive">President's Club ($35,000+)</option>
                  </select>
                </div>
              </div>

              {/* Vetting agreements flags */}
              <div className="bg-[#07090C] p-4 border border-white/5 rounded-xs space-y-3.5">
                
                {/* Checkbox 1: NDA */}
                <label className="flex gap-3 items-start cursor-pointer select-none">
                  <input
                    type="checkbox"
                    required
                    checked={agreeNda}
                    onChange={(e) => setAgreeNda(e.target.checked)}
                    className="accent-brand-gold mt-1 h-3.5 w-3.5 rounded-sm flex-shrink-0"
                  />
                  <span className="text-[11px] text-slate-300 font-sans leading-relaxed">
                    <strong>Mutual NDA Agreement:</strong> I contractually agree to protect all partner photographs, names, and profiles shared during AURA introductions and never disclose client files.
                  </span>
                </label>

                {/* Checkbox 2: Consent checks */}
                <label className="flex gap-3 items-start cursor-pointer select-none">
                  <input
                    type="checkbox"
                    required
                    checked={agreeChecks}
                    onChange={(e) => setAgreeChecks(e.target.checked)}
                    className="accent-brand-gold mt-1 h-3.5 w-3.5 rounded-sm flex-shrink-0"
                  />
                  <span className="text-[11px] text-slate-300 font-sans leading-relaxed">
                    <strong>Vetting Authorization:</strong> I grant consent for AURA compliance to audit my credentials, professional license standings, and coordinate background clearances.
                  </span>
                </label>

              </div>

              {/* Register Action Trigger */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-brand-gold text-brand-primary font-bold text-xs uppercase tracking-[0.16em] hover:bg-brand-gold-hover active:scale-[0.99] transition-all rounded-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-black/20 text-center"
                  id="submit-portal-register"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-brand-primary" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      <span>Generating Secure Cryptographic Account Key...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Vetting & Register</span>
                      <Sparkles className="h-4 w-4 text-brand-primary" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

          {/* Prompt options to go login instead */}
          <div className="pt-6 border-t border-white/5 text-center space-y-1">
            <p className="text-xs text-slate-400 font-sans font-light">
              Already have verified credentials or custom passcode keys?
            </p>
            <button
              onClick={onLoginClick}
              className="text-xs font-serif font-bold text-brand-gold hover:text-brand-gold-hover underline underline-offset-4 cursor-pointer"
              id="switch-to-portal-login"
            >
              Sign In to your secure Candidate Vault &rarr;
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
