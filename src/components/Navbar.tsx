import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onApplyClick: (tierId?: string) => void;
  activePage: string;
  loggedInUser?: string | null;
  onLogout?: () => void;
}

export default function Navbar({ onApplyClick, activePage, loggedInUser, onLogout }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Membership", href: "#membership" },
    { label: "Success Stories", href: "#success-stories" },
    { label: "Insights", href: "#insights" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-brand-border py-4 shadow-2xs"
            : isHovered
              ? "bg-brand-primary/95 backdrop-blur-md border-b border-brand-gold/20 py-4 shadow-xs"
              : "bg-transparent py-6"
        }`}
        id="main-navigation-header"
      >
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 flex items-center justify-between">
          
          {/* Logo Brand */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group transition-opacity"
            id="logo-anchor"
            aria-label="Aura Matchmaking Homepage"
          >
            <div className={`rounded-xs border border-brand-gold/70 p-1.5 transition-all duration-300 ${
              isScrolled ? "bg-brand-primary" : "bg-white/10 backdrop-blur-xs"
            }`}>
              <Sparkles className="h-5 w-5 text-brand-gold" />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-lg tracking-[0.18rem] uppercase font-bold leading-none ${
                isScrolled ? "text-brand-text" : "text-[#FCFAF7]"
              }`}>
                AURA
              </span>
              <span className="text-[8px] tracking-[0.2em] uppercase font-medium text-brand-gold mt-1">
                Matchmaking Concierge
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Desktop menu">
            {menuItems.map((item) => {
              const isActive = activePage.toLowerCase() === item.label.toLowerCase() || 
                (activePage === "" && item.label === "Home");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-xs font-semibold uppercase tracking-widest transition-all duration-300 relative py-1.5 group ${
                    isActive
                      ? "text-[#C89B5E]"
                      : isScrolled
                        ? "text-brand-text hover:text-brand-gold"
                        : "text-slate-100 hover:text-brand-gold"
                  }`}
                >
                  {item.label}
                  {/* Custom editorial Underline */}
                  <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-brand-gold transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left"
                  }`} />
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-5">
            {loggedInUser ? (
              <div className="flex items-center gap-4">
                <div className="flex flex-col text-right">
                  <span className={`text-[10px] uppercase font-bold tracking-widest ${
                    isScrolled ? "text-brand-gold" : "text-brand-gold"
                  }`}>
                    Connected Partner
                  </span>
                  <span className={`text-xs font-serif font-medium leading-none mt-0.5 ${
                    isScrolled ? "text-brand-text" : "text-white"
                  }`}>
                    {loggedInUser}
                  </span>
                </div>
                <button
                  onClick={onLogout}
                  className="px-3.5 py-1.5 border border-brand-gold/30 rounded-xs text-[10px] uppercase tracking-wider font-semibold cursor-pointer text-brand-gold hover:bg-brand-gold/10 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-5">
                <a
                  href="#login"
                  className={`inline-flex items-center justify-center px-6 py-2.5 rounded-xs text-[11px] font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                    isScrolled
                      ? "bg-brand-primary text-white hover:bg-brand-gold hover:text-brand-primary border border-brand-primary hover:border-brand-gold shadow-xs"
                      : "bg-white/10 hover:bg-white text-white hover:text-brand-primary border border-white/30 hover:border-white shadow-xs"
                  }`}
                  id="desktop-login-link"
                >
                  Login
                </a>
              </div>
            )}
          </div>

          {/* Mobile Menu Trigger Button (at least 48px tap target) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex h-12 w-12 items-center justify-center rounded-md border text-brand-text transition-all duration-300"
            style={{
              borderColor: isScrolled ? "#E5E7EB" : "rgba(255, 255, 255, 0.25)",
              color: isScrolled ? "#111827" : "#FFFFFF",
            }}
            id="mobile-menu-trigger"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle Mobile Navigation Drawer"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

        </div>
      </header>

      {/* Mobile Drawer (48px targets minimum) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-brand-primary/60 backdrop-blur-xs lg:hidden"
            />

            {/* Slider Sheet */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
              className="fixed top-0 right-0 z-50 h-full w-full max-w-sm bg-[#FCFAF7] shadow-2xl p-8 flex flex-col justify-between border-l border-brand-border lg:hidden"
              id="mobile-navigation-drawer"
            >
              <div>
                <div className="flex items-center justify-between pb-8 border-b border-brand-border">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-brand-gold" />
                    <span className="font-serif uppercase tracking-widest text-brand-text font-bold text-sm">
                      AURA
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-border/40 text-brand-text cursor-pointer"
                    id="mobile-drawer-close"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-6 py-10" aria-label="Mobile Navigation">
                  {menuItems.map((item, idx) => {
                    const isActive = activePage.toLowerCase() === item.label.toLowerCase() || 
                      (activePage === "" && item.label === "Home");
                    return (
                      <motion.a
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-sm font-serif tracking-wide py-2 flex items-center justify-between group border-b border-dashed border-brand-border/40 transition-colors ${
                          isActive ? "text-brand-gold font-bold" : "text-brand-text hover:text-brand-gold"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ArrowRight className={`h-4 w-4 text-brand-gold transition-opacity ${
                          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`} />
                      </motion.a>
                    );
                  })}
                </nav>
              </div>

              <div className="space-y-4">
                {loggedInUser ? (
                  <div className="bg-brand-border/35 rounded-xs p-4 flex flex-col items-center gap-3 border border-brand-border text-center">
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase font-bold tracking-widest text-[#B45309]">
                        Connected Partner
                      </span>
                      <span className="text-sm font-serif font-semibold text-brand-text mt-0.5">
                        {loggedInUser}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        if (onLogout) onLogout();
                      }}
                      className="w-full py-2.5 border border-brand-gold/40 rounded-xs text-[10px] uppercase tracking-wider font-bold text-brand-gold hover:bg-brand-gold/15 transition-all cursor-pointer"
                    >
                      Sign Out Account
                    </button>
                  </div>
                ) : (
                  <>
                    <a
                      href="#login"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-full h-12 flex items-center justify-center border border-brand-border text-brand-text font-bold text-xs tracking-wider uppercase rounded-xs transition-all hover:bg-brand-border/40 cursor-pointer bg-white"
                      id="mobile-login-btn"
                    >
                      Member Sign In
                    </a>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        onApplyClick();
                      }}
                      className="w-full h-12 flex items-center justify-center gap-2 bg-brand-primary text-white font-semibold text-xs tracking-wider uppercase rounded-xs transition-colors hover:bg-brand-gold cursor-pointer"
                      id="mobile-apply-now-btn"
                    >
                      Apply For Membership
                    </button>
                  </>
                )}
                <p className="text-[10px] text-center text-brand-muted font-sans leading-normal">
                  Sovereign privacy metrics • By appointment only
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
