/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: string;
  thumbnail: string;
  caseStudy: {
    problem: string;
    solution: string;
    impact: string;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
  longDescription: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface Stat {
  value: string;
  label: string;
  description: string;
}

export interface FounderInfo {
  name: string;
  role: string;
  bio: string;
  location: string;
  skills: { name: string; percentage: number }[];
  story: string;
}

export type Theme = 'dark' | 'light';
