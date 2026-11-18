import React from 'react';

export interface NavChild {
  label: string;
  to: string;
  description?: string;
}

export interface NavItem {
  label: string;
  to?: string;
  children?: NavChild[];
}

export interface Developer {
  name: string;
  areas: string[];
  founded: string;
  trackRecord: string;
  notableProjects: string[];
  website?: string;
  affiliateUrl?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface HolidayPlace {
  name: string;
  area: string;
  description: string;
  goodFor: string[];
  priceIndicator: '$' | '$$' | '$$$';
}

export interface BlogBlock {
  type: 'p' | 'h2' | 'ul' | 'callout';
  text?: string;
  items?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: BlogBlock[];
  image: string;
  imageAlt: string;
  // Primary sources shown under the post
  sources?: { label: string; url: string }[];
  // Affiliate categories to recommend at the end of the post
  affiliates?: ('accommodation' | 'activities' | 'money' | 'connectivity' | 'insurance' | 'property' | 'legal')[];
  // Date the facts were last checked, e.g. '2026-11-18'
  lastVerified?: string;
}

export interface EnquiryForm {
  name: string;
  email: string;
  interest: string;
  timeframe: string;
  message: string;
}
