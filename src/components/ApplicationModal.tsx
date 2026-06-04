import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, ArrowRight, ShieldCheck, HelpCircle, Star, Sparkles } from "lucide-react";
import { ApplicationFormState } from "../types";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTierId?: string;
}

const INITIAL_FORM: ApplicationFormState = {
  fullName: "",
  email: "",
  phone: "",
  age: "",
  gender: "Male",
  location: "",
  occupation: "",
  incomeRange: "$150,000 - $249,000",
  relationshipStatus: "Single",
  idealPartner: "",
  aboutSelf: "",
  howDidYouHear: "",
  hasConsultedBefore: false,
};

export default function ApplicationModal({ isOpen, onClose, selectedTierId }: ApplicationModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<ApplicationFormState>({
    ...INITIAL_FORM,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Dynamic tier helper
  const getTierName = () => {
    if (selectedTierId === "essential") return "Essential Elite";
    if (selectedTierId === "premium") return "Premium Concierge";
    if (selectedTierId === "executive") return "Executive President's Club";
    return "Private Master Registry";
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate real database saving / API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Store in localStorage for active context persistence
      const submissions = JSON.parse(localStorage.getItem("aura_applications") || "[]");
      submissions.push({
        ...formData,
        submittedAt: new Date().toISOString(),
        tierSelected: getTierName(),
        status: "Under Review by Partner Directors",
      });
      localStorage.setItem("aura_applications", JSON.stringify(submissions));
    }, 1800);
  };

  // Step Validation Helpers
  const isStep1Valid = () => {
    return formData.fullName.trim() !== "" && formData.email.trim() !== "" && formData.phone.trim() !== "";
  };

  const isStep2Valid = () => {
    return formData.occupation.trim() !== "" && formData.location.trim() !== "" && formData.age.trim() !== "";
  };

  const isStep3Valid = () => {
    return formData.idealPartner.trim() !== "" && formData.aboutSelf.trim() !== "";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto px-4 md:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#111827]/85 backdrop-blur-md"
            id="modal-backdrop"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative z-10 my-8 w-full max-w-4xl overflow-hidden rounded-2xl bg-[#FCFAF7] shadow-2xl border border-[#E5E7EB]"
            id="application-modal-container"
          >
            {/* Top golden accent bar */}
            <div className="h-1.5 w-full bg-brand-gold" />

            {/* Header */}
            <div className="flex items-center justify-between border-b border-brand-border bg-white px-6 py-4 md:px-8">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-brand-gold font-medium">
                  Confidential Admissions Portal
                </span>
                <h3 className="font-serif text-xl md:text-2xl text-brand-text">
                  Apply for {getTierName()}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-brand-muted hover:bg-brand-bg hover:text-brand-text transition-all duration-200"
                id="close-modal-btn"
                aria-label="Close Inquiry Form"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Main Application Interface */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
              
              {/* Left Column: Premium Pitch & Status */}
              <div className="lg:col-span-4 bg-brand-primary text-white p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="rounded-full bg-brand-gold/10 p-1.5 border border-brand-gold/30">
                      <Sparkles className="h-4 w-4 text-brand-gold" />
                    </div>
                    <span className="font-serif italic text-sm text-[#FCFAF7]">AURA Private Registry</span>
                  </div>

                  <h4 className="font-serif text-xl text-white leading-snug mb-4">
                    The standards of elite relationships.
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    By submitting this questionnaire, you initiate a private vetting protocol. We hold our circle to the highest standards of integrity, respect, and mutual achievement.
                  </p>

                  {/* Progress Indicator */}
                  {!isSuccess && (
                    <div className="space-y-4">
                      {[
                        { step: 1, label: "Identity & Security" },
                        { step: 2, label: "Professional Standing" },
                        { step: 3, label: "Interpersonal Blueprint" },
                        { step: 4, label: "Private Seal & Submit" },
                      ].map((s) => (
                        <div key={s.step} className="flex items-center gap-3">
                          <div
                            className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold border transition-all duration-300 ${
                              currentStep === s.step
                                ? "bg-brand-gold border-brand-gold text-brand-primary"
                                : currentStep > s.step
                                ? "bg-white border-white text-brand-primary"
                                : "border-slate-600 text-slate-400"
                            }`}
                          >
                            {currentStep > s.step ? <Check className="h-3.5 w-3.5" /> : s.step}
                          </div>
                          <span
                            className={`text-xs font-medium tracking-wide transition-colors duration-200 ${
                              currentStep === s.step ? "text-white" : "text-slate-400"
                            }`}
                          >
                            {s.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Badges */}
                <div className="mt-8 pt-6 border-t border-slate-700/60">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="h-3.5 w-3.5 text-brand-gold" />
                    <span className="text-[10px] uppercase tracking-wider text-slate-300">
                      100% Encrypted & Private
                    </span>
                  </div>
                  <p className="text-[9px] text-slate-400 leading-normal">
                    This inquiry is subject to extreme security protocols. We do not sell, leak, or publicize your answers.
                  </p>
                </div>
              </div>

              {/* Right Column: Form inputs */}
              <div className="lg:col-span-8 p-6 md:p-8 bg-white flex flex-col justify-between">
                
                {/* SUCCESS SCREEN */}
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center text-center h-full py-10"
                    id="success-application-panel"
                  >
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-success/15 border border-brand-success/30 text-brand-success mb-6">
                      <Check className="h-8 w-8" />
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.25em] text-brand-gold font-medium mb-1">
                      Inquiry Received
                    </span>
                    <h4 className="font-serif text-2xl md:text-3xl text-brand-text mb-4">
                      Application Submitted Discreetly
                    </h4>
                    <p className="text-sm text-brand-muted max-w-md mx-auto leading-relaxed mb-8">
                      Thank you, <strong className="text-brand-text">{formData.fullName}</strong>. Your confidential credentials are now queued for our private admissions directors panel in <strong className="text-brand-text">{formData.location}</strong>. 
                    </p>

                    <div className="w-full max-w-sm rounded-xl bg-brand-bg p-5 border border-brand-border text-left mb-8">
                      <div className="flex items-center gap-2.5 mb-3">
                        <Star className="h-4 w-4 text-brand-gold fill-brand-gold" />
                        <span className="text-xs font-serif text-brand-text font-medium">Admissions Vetting Queue</span>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between border-b border-white pb-2">
                          <span className="text-brand-muted">Program Registered:</span>
                          <span className="font-medium text-brand-text">{getTierName()}</span>
                        </div>
                        <div className="flex justify-between border-b border-white pb-2">
                          <span className="text-brand-muted">Assigned Office:</span>
                          <span className="font-medium text-[#111827]">U.S. National Concierge</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-brand-muted">Vetting Stage:</span>
                          <span className="font-semibold text-brand-gold">Pre-Interview Screening</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={onClose}
                      className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-primary text-white border border-brand-primary rounded-xs hover:bg-white hover:text-brand-primary transition-all duration-300 font-medium text-sm tracking-wide cursor-pointer"
                      id="close-success-btn"
                    >
                      Return to Showcase
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full">
                    
                    {/* STEP 1: IDENTITY */}
                    {currentStep === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-5"
                      >
                        <div>
                          <h5 className="font-serif text-lg text-brand-text mb-1">Confidential Identity Credentials</h5>
                          <p className="text-xs text-brand-muted">Please provide your legal contact identifiers to initiate credentials.</p>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-brand-text mb-2">
                              Full Legal Name
                            </label>
                            <input
                              type="text"
                              required
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              placeholder="e.g. Dr. Vivienne Sterling"
                              className="w-full rounded-md border border-brand-border px-4 py-3 text-sm focus:border-brand-gold focus:outline-hidden bg-brand-bg/40 focus:bg-white transition-colors duration-200"
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-semibold uppercase tracking-wider text-brand-text mb-2">
                                Private Email (Self-owned)
                              </label>
                              <input
                                type="email"
                                required
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="v.sterling@medicalpartners.org"
                                className="w-full rounded-md border border-brand-border px-4 py-3 text-sm focus:border-brand-gold focus:outline-hidden bg-brand-bg/40"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-semibold uppercase tracking-wider text-brand-text mb-2">
                                Private Cell Number
                              </label>
                              <input
                                type="tel"
                                required
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="+1 (555) 480-1282"
                                className="w-full rounded-md border border-brand-border px-4 py-3 text-sm focus:border-brand-gold focus:outline-hidden bg-brand-bg/40"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-semibold uppercase tracking-wider text-brand-text mb-2">
                                Gender Identity
                              </label>
                              <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                                className="w-full rounded-md border border-brand-border px-4 py-3 text-sm focus:border-brand-gold focus:outline-hidden bg-brand-bg/40"
                              >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Non-Binary">Non-Binary</option>
                                <option value="Prefer not to say">Prefer not to say</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-xs font-semibold uppercase tracking-wider text-brand-text mb-2">
                                Current Age
                              </label>
                              <input
                                type="number"
                                required
                                name="age"
                                min="21"
                                max="110"
                                value={formData.age}
                                onChange={handleInputChange}
                                placeholder="38"
                                className="w-full rounded-md border border-brand-border px-4 py-3 text-sm focus:border-brand-gold focus:outline-hidden bg-brand-bg/40"
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 2: PROFESSIONAL STANDING */}
                    {currentStep === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-5"
                      >
                        <div>
                          <h5 className="font-serif text-lg text-brand-text mb-1">Professional Standing & Caliber</h5>
                          <p className="text-xs text-brand-muted">Aura is reserved for accomplished individuals who value mutual performance and compatibility.</p>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-brand-text mb-2">
                              Occupation / Title
                            </label>
                            <input
                              type="text"
                              required
                              name="occupation"
                              value={formData.occupation}
                              onChange={handleInputChange}
                              placeholder="e.g. Managing Partner / Senior Consultant"
                              className="w-full rounded-md border border-brand-border px-4 py-3 text-sm focus:border-brand-gold focus:outline-hidden bg-brand-bg/40"
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-semibold uppercase tracking-wider text-brand-text mb-2">
                                Primary Residence (City, State)
                              </label>
                              <input
                                type="text"
                                required
                                name="location"
                                value={formData.location}
                                onChange={handleInputChange}
                                placeholder="e.g. Boston, MA"
                                className="w-full rounded-md border border-brand-border px-4 py-3 text-sm focus:border-brand-gold focus:outline-hidden bg-brand-bg/40"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-semibold uppercase tracking-wider text-brand-text mb-2">
                                Annual Income Bracket
                              </label>
                              <select
                                name="incomeRange"
                                value={formData.incomeRange}
                                onChange={handleInputChange}
                                className="w-full rounded-md border border-brand-border px-4 py-3 text-sm focus:border-brand-gold focus:outline-hidden bg-brand-bg/40"
                              >
                                <option value="$150,000 - $249,000">$150,000 - $249,000</option>
                                <option value="$250,000 - $499,000">$250,000 - $499,000</option>
                                <option value="$500,000 - $999,000">$500,000 - $999,000</option>
                                <option value="$1,000,000+">$1,000,000+ (Presidential Standard)</option>
                                <option value="Prefer not to disclose">Prefer not to disclose</option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-brand-text mb-2">
                              Current Relationship Status
                            </label>
                            <select
                              name="relationshipStatus"
                              value={formData.relationshipStatus}
                              onChange={handleInputChange}
                              className="w-full rounded-md border border-brand-border px-4 py-3 text-sm focus:border-brand-gold focus:outline-hidden bg-[#FCFAF7] bg-brand-bg/40"
                            >
                              <option value="Single">Single (Never Married)</option>
                              <option value="Divorced">Divorced</option>
                              <option value="Widowed">Widowed</option>
                            </select>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 3: RELATIONSHIP BLUEPRINT */}
                    {currentStep === 3 && (
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-5"
                      >
                        <div>
                          <h5 className="font-serif text-lg text-brand-text mb-1">Your Relationship Blueprint</h5>
                          <p className="text-xs text-brand-muted">Explain what elements are non-negotiable for compatibility inside your ideal connection.</p>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-brand-text mb-2">
                              What are the key elements of your ideal partner?
                            </label>
                            <textarea
                              required
                              name="idealPartner"
                              rows={3}
                              value={formData.idealPartner}
                              onChange={handleInputChange}
                              placeholder="Describe values, lifestyle habits, intellectual caliber, or dynamic qualities you seek..."
                              className="w-full rounded-md border border-brand-border px-4 py-3 text-sm focus:border-brand-gold focus:outline-hidden bg-brand-bg/40 text-brand-text leading-relaxed placeholder:text-brand-muted/70"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-brand-text mb-2">
                              In 2-3 sentences, introduce your character and lifestyle philosophy:
                            </label>
                            <textarea
                              required
                              name="aboutSelf"
                              rows={3}
                              value={formData.aboutSelf}
                              onChange={handleInputChange}
                              placeholder="How do you spend your private calendar? What fuels your standard of living?"
                              className="w-full rounded-md border border-brand-border px-4 py-3 text-sm focus:border-brand-gold focus:outline-hidden bg-brand-bg/40 text-brand-text leading-relaxed"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 4: COOPERATION AGREEMENT / FINAL */}
                    {currentStep === 4 && (
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-5"
                      >
                        <div>
                          <h5 className="font-serif text-lg text-brand-text mb-1">Security Seal & Pledge</h5>
                          <p className="text-xs text-brand-muted">Review our extreme confidentiality pledges. Click submit to seal your application queue.</p>
                        </div>

                        <div className="space-y-4 rounded-xl bg-brand-bg p-5 border border-brand-border">
                          <div className="flex gap-3">
                            <input
                              type="checkbox"
                              name="hasConsultedBefore"
                              id="consent-confirm"
                              checked={formData.hasConsultedBefore}
                              onChange={handleInputChange}
                              className="h-4 w-4 rounded-xs border-brand-border accent-brand-gold mt-1 cursor-pointer"
                            />
                            <label htmlFor="consent-confirm" className="text-xs text-brand-muted leading-relaxed cursor-pointer select-none">
                              <strong className="text-brand-text block mb-1">Ethical Compatibility Pledges</strong>
                              I certify that all details submitted are legally matching and fully representatives of my current single credentials. I consent to undergoing a security and background verification if chosen for admissions vetting.
                            </label>
                          </div>

                          <div className="border-t border-brand-border pt-4">
                            <label className="block text-[10px] font-semibold uppercase tracking-wider text-brand-text mb-2">
                              How did you learn of Aura Concierge?
                            </label>
                            <input
                              type="text"
                              name="howDidYouHear"
                              value={formData.howDidYouHear}
                              onChange={handleInputChange}
                              placeholder="e.g., Vogue, Financial Times, Referral from current Elite member"
                              className="w-full rounded-md border border-brand-border px-4 py-2 text-xs focus:border-brand-gold focus:outline-hidden bg-white text-brand-text"
                            />
                          </div>
                        </div>

                        <div className="rounded-md border border-yellow-200/50 bg-amber-50/50 p-4 flex gap-3 text-xs text-[#856404] leading-relaxed">
                          <ShieldCheck className="h-5 w-5 text-brand-gold flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold block mb-0.5">Absolute Non-Disclosure Guard</span>
                            Matches are exclusive and custom. Details provided on this screen are processed with offline sandbox architectures. We completely respect your professional public standing.
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* NAVIGATION ACTIONS */}
                    <div className="flex justify-between items-center border-t border-brand-border mt-8 pt-6">
                      {currentStep > 1 ? (
                        <button
                          type="button"
                          onClick={prevStep}
                          disabled={isSubmitting}
                          className="px-5 py-2.5 text-xs font-medium text-brand-muted hover:text-brand-text transition-colors cursor-pointer"
                          id="app-prev-btn"
                        >
                          Back
                        </button>
                      ) : (
                        <div />
                      )}

                      <div className="flex items-center gap-3">
                        {currentStep < 4 ? (
                          <button
                            type="button"
                            onClick={nextStep}
                            disabled={
                              (currentStep === 1 && !isStep1Valid()) ||
                              (currentStep === 2 && !isStep2Valid()) ||
                              (currentStep === 3 && !isStep3Valid())
                            }
                            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xs text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                              ((currentStep === 1 && isStep1Valid()) ||
                                (currentStep === 2 && isStep2Valid()) ||
                                (currentStep === 3 && isStep3Valid()))
                                ? "bg-brand-primary text-white hover:bg-brand-gold"
                                : "bg-brand-border text-brand-muted cursor-not-allowed"
                            }`}
                            id="app-next-btn"
                          >
                            Continue <ArrowRight className="h-3.5 w-3.5" />
                          </button>
                        ) : (
                          <button
                            type="submit"
                            disabled={isSubmitting || !formData.hasConsultedBefore}
                            className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xs text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                              isSubmitting || !formData.hasConsultedBefore
                                ? "bg-slate-300 text-slate-500 cursor-not-allowed"
                                : "bg-brand-gold text-[#111827] hover:bg-brand-gold-hover hover:-translate-y-0.5"
                            }`}
                            id="app-submit-btn"
                          >
                            {isSubmitting ? (
                              <>
                                <svg className="animate-spin h-4 w-4 text-brand-primary" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                </svg>
                                Sealing Records...
                              </>
                            ) : (
                              "Seal & Submit Admissions File"
                            )}
                          </button>
                        )}
                      </div>
                    </div>

                  </form>
                )}

              </div>

            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
