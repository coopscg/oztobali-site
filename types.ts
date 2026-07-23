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
}

export interface EnquiryForm {
  name: string;
  email: string;
  interest: string;
  timeframe: string;
  message: string;
}
