/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Service, Testimonial, Stat, FounderInfo } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Custom Website Development',
    description: 'High-performance, custom-crafted marketing websites optimized for maximum user engagement and speed.',
    iconName: 'Globe',
    deliverables: [
      'Tailored responsive layouts (mobile, tablet, desktop)',
      'Blazing fast page loads with modern frameworks',
      'Advanced serverless integrations & APIs',
      'Accessible semantic structure (WCAG compliance)',
      'Subtle motion micro-interactions'
    ],
    longDescription: 'We build digital representations of your brand that do not just exist, but perform. Every line of code is meticulously written to be lightweight, secure, and infinitely scalable. We completely avoid templates to ensure your business stands out with custom layouts and pristine typography.'
  },
  {
    id: 'ecom',
    title: 'E-commerce Solutions',
    description: 'Converting transactional checkouts into bespoke shopping journeys built on high-converting tech.',
    iconName: 'ShoppingBag',
    deliverables: [
      'High-performance cart & instant checkouts',
      'Secure payment integrations (Stripe, Razorpay)',
      'Intuitive admin inventory dashboards',
      'Scalable product catalog management',
      'Customer account portals & ordering history'
    ],
    longDescription: 'Bespoke commerce systems designed to turn casual browsers into loyal customers. By leveraging fast edge networks and optimal database structuring, we keep product discoverability instantaneous and checkout drop-off at an absolute minimum.'
  },
  {
    id: 'web-apps',
    title: 'Web Application Development',
    description: 'Engineered multi-tenant platforms, SaaS applications, and robust dashboard architectures.',
    iconName: 'Cpu',
    deliverables: [
      'Interactive reactive frontend architectures',
      'Robust relational backend databases (PostgreSQL, SQL)',
      'Real-time data streams & live syncing systems',
      'Comprehensive API & third-party integrations',
      'Enterprise-grade role-based access control'
    ],
    longDescription: 'Moving beyond simple websites, we construct complex web systems designed to automate workflows, manage corporate resources, and power dynamic SaaS products. Built with robust safety guards and strict TypeScript type integrity.'
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Visual interfaces that blend deep usability research with luxury, forward-thinking aesthetics.',
    iconName: 'Palette',
    deliverables: [
      'Bespoke Figma wireframes & high-fidelity designs',
      'Interactive clickable design prototypes',
      'Consistent design system & component guidelines',
      'Rigorous user-journey map optimization',
      'Typographic hierarchy & mood boards'
    ],
    longDescription: 'We merge aesthetic confidence with logical structure. Design is not just how something looks, but how it works. Our prototypes undergo continuous iteration, ensuring that your target demographic feels right at home with every button and panel.'
  },
  {
    id: 'seo-perf',
    title: 'SEO & Performance Optimization',
    description: 'Pushing Lighthouse scores to absolute 100s, enabling organic discovery on competitive search terms.',
    iconName: 'Zap',
    deliverables: [
      'Core Web Vitals diagnostic & remediation',
      'Automated semantic metadata & JSON-LD schemas',
      'Advanced image format generation (WebP/AVIF)',
      'Server-side rendering (SSR) strategy',
      'Static asset compression & edge CDN routing'
    ],
    longDescription: 'Visibility is a tech challenge. We audit, refactor, and fine-tune frontends to rank consistently high in search crawlers while maintaining instantaneous render times for real visitors.'
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    description: 'Continuous server maintenance, proactive security monitoring, and regular update patches.',
    iconName: 'Shield',
    deliverables: [
      'Proactive security auditing & patches',
      'Automated encrypted cloud database backups',
      'Real-time runtime server monitoring',
      'SLA-backed urgent bug response',
      'Content updates & text revisions'
    ],
    longDescription: 'Rest easy knowing a dedicated engineering team is watching over your servers. We keep your systems operating smoothly with regular framework updates, security checks, and real-time support.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'aura-and-co',
    title: 'Aura & Co. — Luxury E-commerce & Design Studio',
    category: 'E-commerce Solutions',
    description: 'A bespoke digital storefront and design studio platform created for Aura & Co. Features interactive customization previews, high-performance product displays, and seamless checkout.',
    techStack: ['Next.js', 'Tailwind CSS', 'Stripe', 'Framer Motion', 'TypeScript'],
    thumbnail: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800',
    caseStudy: {
      problem: 'Aura & Co. required a premium, custom digital web presence to reflect their bespoke artisanal products, moving away from slow off-the-shelf templates.',
      solution: 'Engineered a lightweight, lightning-fast web platform with interactive product showpieces, instant page transitions, and streamlined checkout.',
      impact: 'Achieved 100/100 Core Web Vitals performance scores and elevated online sales conversions by 3.5x.'
    }
  },
  {
    id: 'dental-clinic',
    title: 'Dental Clinic Management Platform',
    category: 'Web Application',
    description: 'An all-in-one multi-tenant practice management hub serving 15+ dental offices. Handles real-time patient scheduling, automated SMS reminders, clinical charting, and medical insurance claim processing.',
    techStack: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Twilio API'],
    thumbnail: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
    caseStudy: {
      problem: 'Clinic staff spent over 18 hours weekly manually scheduling appointments, resulting in a high rate of missed slots and double-booking errors due to fragmented desktop legacy systems.',
      solution: 'We engineered a centralized cloud platform with an instant drag-and-drop calendar interface, integrated patient portal, and automatic SMS appointment confirmation pipelines.',
      impact: 'Reduced patient no-shows by 43% and unlocked over $12,000 in monthly recovered revenue for the practice franchise.'
    }
  },
  {
    id: 'qr-ordering',
    title: 'The Copper Pot Cafe — QR Ordering System',
    category: 'E-commerce Solutions',
    description: 'An interactive mobile-first digital ordering platform. Customers scan dynamic table-specific QR codes, browse highly aesthetic menus, place order items directly to the kitchen, and pay securely.',
    techStack: ['Next.js', 'Razorpay', 'Tailwind CSS', 'WebSockets', 'Node.js'],
    thumbnail: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800',
    caseStudy: {
      problem: 'During high-traffic peak weekend hours, order delays and order-taker miscommunications caused persistent table friction and slowed table turnover rates by 22%.',
      solution: 'Developed a real-time table-tied ordering platform allowing customers to split bills, pay instantly via mobile, and see live order tracking without downloading any native app.',
      impact: 'Turnaround speed increased by 30%, kitchen mistakes plummeted to virtually zero, and average customer check sizing grew by 18% via AI cross-selling.'
    }
  },
  {
    id: 'fashion-store',
    title: 'Fashion E-commerce Store',
    category: 'E-commerce Solutions',
    description: 'A luxurious minimalist clothing store highlighting bespoke streetwear drops. Features instant checkout, global shipping estimation, elastic search filters, and high-performance imagery.',
    techStack: ['Next.js', 'Tailwind CSS', 'Stripe', 'Framer Motion', 'Redis'],
    thumbnail: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800',
    caseStudy: {
      problem: 'Slow image load speeds on image-heavy product grids on mobile networks led to high bounce rates (56%) during marketing product drop cycles.',
      solution: 'Implemented edge-optimized image delivery networks, client-side prefetching, and a highly streamlined single-page checkout flow.',
      impact: 'Average load times dropped from 4.2 seconds to 0.8 seconds, producing a direct 2.4% bump in absolute checkout conversion.'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Aarav Sharma',
    role: 'Managing Director',
    company: 'Apex Health Systems',
    content: 'Nexward Tech completely revitalized our operational software. The team delivered our clinic management tool two weeks ahead of schedule. The quality of custom code is pristine, and the UI is beautiful.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'test-2',
    name: 'Elena Rostova',
    role: 'Founder',
    company: 'Lumière Fashion',
    content: 'Absolute luxury in service and output. They did not just code an e-commerce storefront; they designed an online experience that matches the tier of our garments. Our conversion metrics have tripled.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'test-3',
    name: 'Devendra Yadav',
    role: 'General Manager',
    company: 'The Copper Pot Cafe',
    content: 'The table ordering system built by Nexward is flawless. Customers constantly comment on how smooth and responsive it is. Our servers love it, and kitchen productivity is at an all-time high.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  }
];

export const STATS: Stat[] = [
  {
    value: '100%',
    label: 'Custom Codebase',
    description: 'No bloated templates or restrictive page builders. Built cleanly from the ground up.'
  },
  {
    value: '98+',
    label: 'Lighthouse Score',
    description: 'Perfect performance, accessibility, SEO, and structural best practices.'
  },
  {
    value: '2.5x',
    label: 'Performance Boost',
    description: 'Average load-speed speedups achieved across all client migration projects.'
  },
  {
    value: '24/7',
    label: 'Server Reliability',
    description: 'Comprehensive uptime monitoring, regular updates, and support pipelines.'
  }
];

export const FOUNDER_INFO: FounderInfo = {
  name: 'Nexward Tech Leadership',
  role: 'Bespoke Engineering & Design',
  location: 'Global Engineering Studio',
  bio: 'A passionate team of results-driven engineers focusing on building high-performance, aesthetically exceptional web platforms.',
  story: 'We founded Nexward Tech with a clear philosophy: digital experiences should be beautiful, blindingly fast, and completely customized. In an era dominated by rigid templates and slow page builders, we provide handmade digital craft that matches the ambitions of hyper-growth startups and premium small businesses alike. Deploying highly optimized modern systems, we serve an elite roster of global startups and premium brands.',
  skills: [
    { name: 'Next.js & React', percentage: 98 },
    { name: 'Tailwind CSS & Styling', percentage: 95 },
    { name: 'TypeScript & Node.js', percentage: 92 },
    { name: 'PostgreSQL & Databases', percentage: 88 },
    { name: 'Prisma & ORMs', percentage: 90 },
    { name: 'Python & Automation', percentage: 80 }
  ]
};
