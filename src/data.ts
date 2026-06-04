import { FaqItem, TestimonialItem, MembershipTier, TimelineStep, ComparisonRow } from "./types";

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "How does Aura Matchmaking differ from standard dating applications?",
    answer: "Aura is an offline, completely private matchmaking registry and relationship consultancy. There are no swipe systems, public profiles, or digital listings. Every introduction is hand-selected and thoroughly vetted by our dedicated matchmaking specialists, based on rigorous psychological compatibility, lifestyle alignment, and visual chemistry."
  },
  {
    id: "faq-2",
    question: "Who is the typical Aura member?",
    answer: "Our clientele consists of highly accomplished professionals in the United States — typically founders, executives, surgeons, attorneys, and venture capitalists aged 28 to 55. They value their time, cherish extreme privacy, and are seeking a long-term relationship or marriage with an equally driven and compatible partner."
  },
  {
    id: "faq-3",
    question: "How is my privacy protected during the matchmaking process?",
    answer: "Confidentiality is our absolute cornerstone. Your identity, full name, detailed occupation, and contact information are never shared online or disclosed to prospects prior to mutual confirmation. Photos are only presented to potential matches in secure, password-protected previews, and only with your explicit initial authorization."
  },
  {
    id: "faq-4",
    question: "Do you perform background checks on prospective matches?",
    answer: "Yes. For our Premium and Executive plans, we run comprehensive professional background clearances, verification of single status, and credential checks on all candidates before coordinating a physical introduction, facilitating complete peace of mind."
  },
  {
    id: "faq-5",
    question: "How many introductions can I expect during my membership?",
    answer: "Unlike dating apps that prioritize quantity, we prioritize precision and shared intent. Depending on the tier selected, members receive between 6 to 12 highly curated, double-vetted, hand-matched introductions over a 12-month period, each backed by comprehensive pre-date preparation and post-date feedback analysis."
  },
  {
    id: "faq-6",
    question: "Is there a location restriction for my matches?",
    answer: "We offer local curation within key metropolitan regions (such as New York, San Francisco, Los Angeles, Chicago, Miami, Dallas, and Seattle) as well as national and international searches for our Executive members who lead modern, bicoastal lifestyles."
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "story-1",
    coupleName: "Charlotte & Marcus",
    location: "New York City & San Francisco",
    quote: "With our demanding schedules, we had completely written off finding an equal. Aura handled every detail with absolute discretion, leading us to our ideal match.",
    story: "Charlotte, a prominent pediatric cardiologist in Manhattan, and Marcus, a bicoastal technology founder, were paired through our National Executive VIP Search. Their mutual passion for sailing, philanthropy, and executive-level leadership formed an unbreakable foundation.",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600",
    durationMatched: "Married 2 years • Welcomed first child in 2025"
  },
  {
    id: "story-2",
    coupleName: "Julian & Adrian",
    location: "Los Angeles, CA",
    quote: "The vetting process was night and day compared to dating apps. Adrian was my very first introduction, and the connection was instant.",
    story: "Julian, a venture capital general partner, sought a partner who shared his love for curation and dynamic architecture. Adrian, an creative director for luxury heritage brands, matched Julian's standard of visual artistry, intellectual curiosity, and deep values.",
    imageUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=600",
    durationMatched: "Together 3 years • Engaged in Paris"
  },
  {
    id: "story-3",
    coupleName: "Dr. Evelyn & Thomas",
    location: "Chicago, IL",
    quote: "They didn't just find me a partner; they understood my lifestyle constraints. Aura is the ultimate relationship concierge.",
    story: "Evelyn, a busy orthopaedic surgeon, and Thomas, a private equity managing director, both worked 80-hour weeks. Aura curated their dates around their precise openings, including private museum viewings and custom wine tastings, sparking a magnificent, quiet connection.",
    imageUrl: "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?auto=format&fit=crop&q=80&w=600",
    durationMatched: "Married 1 year • Currently residing in Gold Coast"
  }
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    stepNumber: 1,
    title: "The Inquiry & Private Consultation",
    description: "Submit your confidential inquiry. Selected candidates are invited to a highly secure, 1-on-1 discovery interview to explore your lifestyle, core values, and expectations.",
    editorialDetail: "An intimate, offline conversation with a dedicated director."
  },
  {
    stepNumber: 2,
    title: "Vetting & Alignment Diagnosis",
    description: "Our team drafts your holistic psychological and aesthetic blueprint. We cross-reference your relationship background, emotional style, and strict parameters to set up search criteria.",
    editorialDetail: "A deep cognitive dive beyond surface-level interests."
  },
  {
    stepNumber: 3,
    title: "Curated Scouting & Sourcing",
    description: "Your matchmaker searches our high-end private client circle and conducts custom offline headhunting to locate individuals who match your exact caliber.",
    editorialDetail: "Precision scouting utilizing high-profile elite channels."
  },
  {
    stepNumber: 4,
    title: "Discreet Curated Introduction",
    description: "We orchestrate the entire introduction on your behalf — from table reservations at exclusive venues to scheduling. You show up simply to enjoy a genuine connection.",
    editorialDetail: "Seamless, luxury coordinate-driven physical engagement."
  },
  {
    stepNumber: 5,
    title: "Post-Date Feedback & Guidance",
    description: "After the meeting, we conduct detailed, constructive feedback sessions with both individuals to refine future match profiles or provide advice on the path forward.",
    editorialDetail: "Direct consultation and communication training for long-term success."
  }
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    characteristic: "Confidentiality & Privacy",
    auraService: { available: true, text: "100% Offline. No public photos, profiles or web directories. Vetting is completely private." },
    datingApps: { available: false, text: "Public searchable databases. Data-scraping risks. Digital footprint exposed globally." }
  },
  {
    characteristic: "Vetting Standards",
    auraService: { available: true, text: "Mandatory video dynamic screening, professional financial check, and criminal background checks." },
    datingApps: { available: false, text: "Zero verification. Anyone can register with a phone number, fake job title, and old photos." }
  },
  {
    characteristic: "Curation Mechanism",
    auraService: { available: true, text: "Human relationship director with a background in psychology conducting intuitive, customized recruitment." },
    datingApps: { available: false, text: "Incentivized gamification algorithms designed to keep you addicted, swiping, and staying single." }
  },
  {
    characteristic: "Time Investment",
    auraService: { available: true, text: "Passive search. Your matchmaker acts as your personal filter. Only meet highly compatible candidates." },
    datingApps: { available: false, text: "Hours of active swiping, messaging, and dead-end dates with misaligned expectations." }
  },
  {
    characteristic: "Efficacy & Safety",
    auraService: { available: true, text: "90% standard success rate. 100% of matches are pre-aligned on executive goals, marriage, and values." },
    datingApps: { available: false, text: "Less than 2% of swipes lead to first dates. High rate of ghosting, mismatch, and frustration." }
  }
];

export const MEMBERSHIPS: MembershipTier[] = [
  {
    id: "essential",
    name: "Essential Elite",
    tagline: "Unparalleled local search for busy metropolitan executives.",
    price: "$7,500",
    priceSubscript: "/ 6-Month Program",
    idealFor: "Perfect for directors, doctors, and specialists focused on a premium regional matches.",
    features: [
      "Access to the curated, double-vetted local Registry",
      "6 Hand-selected introductions curated by a senior matchmaker",
      "Comprehensive criminal background & identity checks",
      "Standard date coordination (reservations, venue setup)",
      "Premium text and email concierge communication"
    ],
    benefits: [
      "Targeted focus on local, values-backed compatibility",
      "Full date-by-date coordination to save you precious hours",
      "Actionable match feedback loops to refine your journey"
    ],
    isFeatured: false
  },
  {
    id: "premium",
    name: "Premium Concierge",
    tagline: "Active national recruitment & personalized coaching.",
    price: "$15,000",
    priceSubscript: "/ 12-Month Program",
    idealFor: "Ideal for Founders, Partners, and Nomadic Executives requiring a larger geographic reach.",
    features: [
      "Active, hand-crafted recruitment beyond our standard circle",
      "10 Introductions with geographic flexibility (Statewide/Regional)",
      "Vetted credentials, marital status, & professional verification",
      "Ongoing elite date coaching & relationship strategy consults",
      "Monthly aesthetic feedback and style alignment consultation",
      "Priority coordination at Michelin-starred partnerships"
    ],
    benefits: [
      "A proactive outreach team scouting tailored prospects",
      "Professional image-vibe and relationship preparedness checks",
      "Significantly wider geographical eligibility for high caliber matches"
    ],
    isFeatured: true
  },
  {
    id: "executive",
    name: "Executive President's Club",
    tagline: "Bespoke, private headhunting and VIP advisory globally.",
    price: "$35,000+",
    priceSubscript: "/ Bespoke Plan",
    idealFor: "Reserved for high-net-worth founders, celebrities, and families demanding the pinnacle of service.",
    features: [
      "Direct guidance by the Founder and dedicated Executive Scouting Director",
      "Unlimited hand-recruited introductions with unlimited geographical scopes",
      "Worldwide executive search including bespoke off-market candidate acquisition",
      "Comprehensive wealth asset, lifestyle, and dynamic background checking",
      "24/7 dedicated private liaison and direct booking managers",
      "Custom culinary and private airline scheduling syncs"
    ],
    benefits: [
      "No boundaries: we headhunt globally for your exact specifications",
      "Sovereign tier privacy protocols and extreme disclosure protections",
      "Absolute priority placement and white-glove lifestyle management integrations"
    ],
    isFeatured: false
  }
];
