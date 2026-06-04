import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MapPin, Mail, ShieldAlert, Check, Sparkles, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tier: "General Inquiry",
    notes: ""
  });
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        tier: "General Inquiry",
        notes: ""
      });
    }, 1500);
  };

  const officeLocations = [
    { city: "New York City", address: "590 Madison Avenue, 21st Floor", timezone: "EST" },
    { city: "Boston (HQ)", address: "One International Place, Suite 3410", timezone: "EST" },
    { city: "Los Angeles", address: "9560 Wilshire Boulevard, Beverly Hills", timezone: "PST" },
    { city: "San Francisco", address: "1 Sansome Street, Portfolio Suite", timezone: "PST" },
  ];

  return (
    <section
      className="bg-brand-bg py-20 lg:py-32 border-b border-brand-border"
      id="contact"
      aria-label="Direct contact details"
    >
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        
        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Info and Addresses */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-brand-gold font-bold block mb-2">
                Confidential Inquiries
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-brand-text leading-tight tracking-tight mb-4">
                Speak With a Matchmaking Director
              </h2>
              <p className="text-xs md:text-sm text-brand-muted font-sans font-light leading-relaxed">
                We maintain quiet, discreet office spaces in major United States financial and lifestyle centers. Direct consultations are available strictly by confirmed, pre-vetted appointment.
              </p>
            </div>

            {/* Quick Contacts */}
            <div className="space-y-4">
              <div className="flex gap-4 items-center">
                <div className="rounded-full bg-white p-3 border border-brand-border text-brand-gold">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-brand-muted block font-semibold leading-normal">
                    Admissions Desk (Toll Free)
                  </span>
                  <a href="tel:+18005550198" className="text-sm font-serif font-extrabold text-brand-text hover:text-brand-gold transition-colors">
                    +1 (800) 555-0198
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="rounded-full bg-white p-3 border border-brand-border text-brand-gold">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-brand-muted block font-semibold leading-normal">
                    Private Server Box
                  </span>
                  <a href="mailto:liaison@auramatchmaking.com" className="text-sm font-serif font-extrabold text-brand-text hover:text-brand-gold transition-colors">
                    liaison@auramatchmaking.com
                  </a>
                </div>
              </div>
            </div>

            {/* Office Blocks */}
            <div className="space-y-4 pt-8 border-t border-brand-border">
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold block">
                Corporate Headquarters
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {officeLocations.map((loc) => (
                  <div key={loc.city} className="space-y-1">
                    <h4 className="font-serif text-sm font-bold text-brand-text">
                      {loc.city}
                    </h4>
                    <p className="text-[11px] leading-relaxed text-brand-muted">
                      {loc.address}
                    </p>
                    <span className="inline-block text-[8px] font-semibold text-brand-gold bg-white px-2 py-0.5 border border-brand-border uppercase tracking-widest">
                      {loc.timezone} Region
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Column 2: Elegant message form */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-xs border border-brand-border shadow-xl">
            <span className="text-[9px] uppercase tracking-[0.25em] text-brand-gold font-bold block mb-1">
              Discreet Message Gateway
            </span>
            <h3 className="font-serif text-xl md:text-2xl text-brand-text mb-6">
              Send Confidential Greeting
            </h3>

            {isSent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
                id="contact-form-success"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-success/15 text-brand-success border border-brand-success/30 mx-auto">
                  <Check className="h-6 w-6" />
                </div>
                <h4 className="font-serif text-lg md:text-xl text-brand-text font-bold">
                  Confidential Message Saved
                </h4>
                <p className="text-xs text-brand-muted max-w-sm mx-auto leading-relaxed">
                  Thank you. Your message has bypassed digital buffers and logged directly to our Executive Director of Scouting. We will reply via secure email or telephone within 2 business hours.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="px-5 py-2.5 bg-brand-bg hover:bg-brand-border border border-brand-border text-brand-muted text-xs uppercase tracking-widest font-semibold transition-colors rounded-xs cursor-pointer"
                >
                  Send Another Note
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleDirectSubmit} className="space-y-4" id="contact-greeting-form">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-brand-text mb-2">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Sterling Belmont"
                      className="w-full rounded-md border border-brand-border px-4 py-3 text-xs focus:border-brand-gold focus:outline-hidden bg-brand-bg/40 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-brand-text mb-2">
                      Secure Phone Identifier
                    </label>
                    <input
                      type="tel"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 0192"
                      className="w-full rounded-md border border-brand-border px-4 py-3 text-xs focus:border-brand-gold focus:outline-hidden bg-brand-bg/40 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-wider text-brand-text mb-2">
                    Primary Email
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. s.belmont@holdinggroup.com"
                    className="w-full rounded-md border border-brand-border px-4 py-3 text-xs focus:border-brand-gold focus:outline-hidden bg-brand-bg/40 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-wider text-brand-text mb-2">
                    Portfolio Of Principal Interest
                  </label>
                  <select
                    name="tier"
                    value={formData.tier}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-brand-border px-4 py-3 text-xs focus:border-brand-gold focus:outline-hidden bg-brand-bg/40"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Essential Elite ($7,500)">Essential Elite Portfolio ($7,500)</option>
                    <option value="Premium Concierge ($15,000)">Premium Concierge Portfolio ($15,000)</option>
                    <option value="Executive President's Club ($35,000+)">Executive President&apos;s Club ($35,000+)</option>
                    <option value="Confidential Press Media">Confidential Press / Media Engagement</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-wider text-brand-text mb-2">
                    Message Details / Expectations
                  </label>
                  <textarea
                    required
                    name="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Please mention any initial scheduling windows, unique parameters, or confidentiality concerns..."
                    className="w-full rounded-md border border-brand-border px-4 py-3 text-xs focus:border-brand-gold focus:outline-hidden bg-brand-bg/40 focus:bg-white text-brand-text leading-relaxed"
                  />
                </div>

                <div className="rounded-md bg-amber-50/50 p-4 border border-amber-200/40 flex gap-3 text-[11px] text-amber-800 leading-relaxed">
                  <ShieldAlert className="h-4 w-4 text-brand-gold flex-shrink-0 mt-0.5" />
                  <p>
                    All messages submitted bypass external log relays and are cleared daily under custom privacy compliance.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full py-4 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 flex items-center justify-center gap-2 rounded-xs select-none cursor-pointer ${
                    isSending 
                    ? "bg-slate-300 text-slate-500 cursor-not-allowed" 
                    : "bg-brand-primary text-white hover:bg-brand-gold border border-brand-primary hover:border-brand-gold"
                  }`}
                  id="submit-contact-greeting"
                >
                  {isSending ? (
                    <>
                      <svg className="animate-spin h-3.5 w-3.5 text-brand-primary" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Transmitting Cipher...
                    </>
                  ) : (
                    <>
                      Transmit Note Confidential <Send className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
