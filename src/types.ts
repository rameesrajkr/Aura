/**
 * Types & Interfaces for Aura Matchmaking Concierge
 */

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  coupleName: string;
  location: string;
  quote: string;
  story: string;
  imageUrl: string;
  durationMatched: string;
}

export interface MembershipTier {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceSubscript: string;
  idealFor: string;
  features: string[];
  benefits: string[];
  isFeatured: boolean;
}

export interface TimelineStep {
  stepNumber: number;
  title: string;
  description: string;
  editorialDetail: string;
}

export interface ComparisonRow {
  characteristic: string;
  auraService: {
    available: boolean;
    text: string;
  };
  datingApps: {
    available: boolean;
    text: string;
  };
}

export interface ApplicationFormState {
  fullName: string;
  email: string;
  phone: string;
  age: string;
  gender: string;
  location: string;
  occupation: string;
  incomeRange: string;
  relationshipStatus: string;
  idealPartner: string;
  aboutSelf: string;
  howDidYouHear: string;
  hasConsultedBefore: boolean;
}
