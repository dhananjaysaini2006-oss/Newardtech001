/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, MapPin, Phone, MessageSquare, Briefcase, DollarSign, Send, CheckCircle } from 'lucide-react';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Theme } from '../types';

interface ContactFormProps {
  theme: Theme;
}

const countryCodes = [
  { code: '+91', flag: '🇮🇳', country: 'India (+91)' },
  { code: '+1', flag: '🇺🇸', country: 'United States / Canada (+1)' },
  { code: '+44', flag: '🇬🇧', country: 'United Kingdom (+44)' },
  { code: '+61', flag: '🇦🇺', country: 'Australia (+61)' },
  { code: '+971', flag: '🇦🇪', country: 'United Arab Emirates (+971)' },
  { code: '+65', flag: '🇸🇬', country: 'Singapore (+65)' },
  { code: '+49', flag: '🇩🇪', country: 'Germany (+49)' },
  { code: '+33', flag: '🇫🇷', country: 'France (+33)' },
  { code: '+81', flag: '🇯🇵', country: 'Japan (+81)' },
  { code: '+966', flag: '🇸🇦', country: 'Saudi Arabia (+966)' },
  { code: '+39', flag: '🇮🇹', country: 'Italy (+39)' },
  { code: '+34', flag: '🇪🇸', country: 'Spain (+34)' },
  { code: '+31', flag: '🇳🇱', country: 'Netherlands (+31)' },
  { code: '+41', flag: '🇨🇭', country: 'Switzerland (+41)' },
  { code: '+46', flag: '🇸🇪', country: 'Sweden (+46)' },
  { code: '+55', flag: '🇧🇷', country: 'Brazil (+55)' },
  { code: '+52', flag: '🇲🇽', country: 'Mexico (+52)' },
  { code: '+86', flag: '🇨🇳', country: 'China (+86)' },
  { code: '+82', flag: '🇰🇷', country: 'South Korea (+82)' },
  { code: '+64', flag: '🇳🇿', country: 'New Zealand (+64)' },
  { code: '+27', flag: '🇿🇦', country: 'South Africa (+27)' },
];

const currencyOptions = [
  { code: 'USD', symbol: '$', label: 'USD ($)' },
  { code: 'INR', symbol: '₹', label: 'INR (₹)' },
  { code: 'EUR', symbol: '€', label: 'EUR (€)' },
  { code: 'GBP', symbol: '£', label: 'GBP (£)' },
  { code: 'AED', symbol: 'AED', label: 'AED (د.إ)' },
  { code: 'CAD', symbol: 'CA$', label: 'CAD (CA$)' },
  { code: 'AUD', symbol: 'AU$', label: 'AUD (AU$)' },
  { code: 'SGD', symbol: 'S$', label: 'SGD (S$)' },
];

const budgetRangesByCurrency: Record<string, { value: string; label: string }[]> = {
  USD: [
    { value: 'under-1k', label: 'Under $1,000 USD (Starter)' },
    { value: '1k-5k', label: '$1,000 - $5,000 USD (Growth)' },
    { value: '5k-15k', label: '$5,000 - $15,000 USD (Scale)' },
    { value: '15k-50k', label: '$15,000 - $50,000 USD (Pro App)' },
    { value: '50k-plus', label: '$50,000+ USD (Enterprise)' },
  ],
  INR: [
    { value: 'under-50k', label: 'Under ₹50,000 (Starter)' },
    { value: '50k-2L', label: '₹50,000 - ₹2,00,000 (Growth)' },
    { value: '2L-5L', label: '₹2,00,000 - ₹5,00,000 (Scale)' },
    { value: '5L-15L', label: '₹5,00,000 - ₹15,00,000 (Pro App)' },
    { value: '15L-plus', label: '₹15,00,000+ (Enterprise)' },
  ],
  EUR: [
    { value: 'under-1k', label: 'Under €1,000 (Starter)' },
    { value: '1k-5k', label: '€1,000 - €5,000 (Growth)' },
    { value: '5k-15k', label: '€5,000 - €15,000 (Scale)' },
    { value: '15k-50k', label: '€15,000 - €50,000 (Pro App)' },
    { value: '50k-plus', label: '€50,000+ (Enterprise)' },
  ],
  GBP: [
    { value: 'under-1k', label: 'Under £1,000 (Starter)' },
    { value: '1k-5k', label: '£1,000 - £5,000 (Growth)' },
    { value: '5k-15k', label: '£5,000 - £15,000 (Scale)' },
    { value: '15k-50k', label: '£15,000 - £50,000 (Pro App)' },
    { value: '50k-plus', label: '£50,000+ (Enterprise)' },
  ],
  AED: [
    { value: 'under-4k', label: 'Under 4,000 AED (Starter)' },
    { value: '4k-20k', label: '4,000 - 20,000 AED (Growth)' },
    { value: '20k-60k', label: '20,000 - 60,000 AED (Scale)' },
    { value: '60k-plus', label: '60,000+ AED (Enterprise)' },
  ],
  CAD: [
    { value: 'under-1.5k', label: 'Under CA$1,500' },
    { value: '1.5k-7k', label: 'CA$1,500 - CA$7,000' },
    { value: '7k-20k', label: 'CA$7,000 - CA$20,000' },
    { value: '20k-plus', label: 'CA$20,000+' },
  ],
  AUD: [
    { value: 'under-1.5k', label: 'Under AU$1,500' },
    { value: '1.5k-7.5k', label: 'AU$1,500 - AU$7,500' },
    { value: '7.5k-22k', label: 'AU$7,500 - AU$22,000' },
    { value: '22k-plus', label: 'AU$22,000+' },
  ],
  SGD: [
    { value: 'under-1.5k', label: 'Under S$1,500' },
    { value: '1.5k-7k', label: 'S$1,500 - S$7,000' },
    { value: '7k-20k', label: 'S$7,000 - S$20,000' },
    { value: '20k-plus', label: 'S$20,000+' },
  ],
};

export default function ContactForm({ theme }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneCode: '+91',
    phone: '',
    currency: 'USD',
    projectDetails: '',
    budgetRange: '1k-5k',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate submission to formspree endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phoneCode: '+91',
        phone: '',
        currency: 'USD',
        projectDetails: '',
        budgetRange: '1k-5k',
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Left Column: Premium Contact Form */}
      <div className="lg:col-span-7">
        <div className={`p-8 sm:p-10 rounded-3xl border ${
          theme === 'light' ? 'glass-panel-light' : 'glass-panel-dark'
        }`}>
          {submitted ? (
            <div className="text-center py-12 flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center animate-bounce">
                <CheckCircle size={36} />
              </div>
              <h3 className={`text-2xl font-serif font-medium ${
                theme === 'light' ? 'text-black' : 'text-white'
              }`}>
                Your Journey Begins
              </h3>
              <p className={`text-sm max-w-sm leading-relaxed ${
                theme === 'light' ? 'text-[#6f6f6f]' : 'text-white/60'
              }`}>
                We have received your request. Our principal architects will review your project details and get back to you within 24 business hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className={`mt-6 rounded-full px-6 py-2.5 text-xs font-medium cursor-pointer transition-all ${
                  theme === 'light'
                    ? 'bg-black text-white hover:opacity-90'
                    : 'bg-white text-black hover:bg-neutral-100'
                }`}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className={`text-xs font-mono uppercase tracking-wider ${
                    theme === 'light' ? 'text-neutral-600 font-semibold' : 'opacity-60'
                  }`}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                      theme === 'light'
                        ? 'bg-white border-neutral-300 focus:border-neutral-950 focus:ring-2 focus:ring-neutral-950/10 text-neutral-900 shadow-sm placeholder:text-neutral-400'
                        : 'bg-white/5 border-white/5 focus:border-violet-500/50 text-white'
                    }`}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className={`text-xs font-mono uppercase tracking-wider ${
                    theme === 'light' ? 'text-neutral-600 font-semibold' : 'opacity-60'
                  }`}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                      theme === 'light'
                        ? 'bg-white border-neutral-300 focus:border-neutral-950 focus:ring-2 focus:ring-neutral-950/10 text-neutral-900 shadow-sm placeholder:text-neutral-400'
                        : 'bg-white/5 border-white/5 focus:border-violet-500/50 text-white'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="phone" className={`text-xs font-mono uppercase tracking-wider ${
                    theme === 'light' ? 'text-neutral-600 font-semibold' : 'opacity-60'
                  }`}>
                    Phone Number
                  </label>
                  <div className="flex space-x-2">
                    <select
                      id="phoneCode"
                      name="phoneCode"
                      value={formData.phoneCode}
                      onChange={handleInputChange}
                      className={`px-3 py-3 rounded-xl border text-sm outline-none transition-all cursor-pointer font-mono shrink-0 max-w-[110px] ${
                        theme === 'light'
                          ? 'bg-white border-neutral-300 focus:border-neutral-950 text-neutral-900 shadow-sm'
                          : 'bg-black border-white/5 focus:border-violet-500/50 text-white'
                      }`}
                      aria-label="Global Phone Country Code"
                    >
                      {countryCodes.map((c) => (
                        <option key={c.country} value={c.code}>
                          {c.flag} {c.code}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter phone number"
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                        theme === 'light'
                          ? 'bg-white border-neutral-300 focus:border-neutral-950 focus:ring-2 focus:ring-neutral-950/10 text-neutral-900 shadow-sm placeholder:text-neutral-400'
                          : 'bg-white/5 border-white/5 focus:border-violet-500/50 text-white'
                      }`}
                    />
                  </div>
                </div>

                {/* Budget Range & Currency */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="budgetRange" className={`text-xs font-mono uppercase tracking-wider ${
                    theme === 'light' ? 'text-neutral-600 font-semibold' : 'opacity-60'
                  }`}>
                    Project Budget Range
                  </label>
                  <div className="flex space-x-2">
                    <select
                      id="currency"
                      name="currency"
                      value={formData.currency}
                      onChange={(e) => {
                        const newCurrency = e.target.value;
                        const defaultBudget = budgetRangesByCurrency[newCurrency]?.[0]?.value || '1k-5k';
                        setFormData((prev) => ({
                          ...prev,
                          currency: newCurrency,
                          budgetRange: defaultBudget,
                        }));
                      }}
                      className={`px-3 py-3 rounded-xl border text-sm outline-none transition-all cursor-pointer font-mono shrink-0 max-w-[110px] ${
                        theme === 'light'
                          ? 'bg-white border-neutral-300 focus:border-neutral-950 text-neutral-900 shadow-sm'
                          : 'bg-black border-white/5 focus:border-violet-500/50 text-white'
                      }`}
                      aria-label="Global Currency"
                    >
                      {currencyOptions.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.code} ({c.symbol})
                        </option>
                      ))}
                    </select>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all cursor-pointer ${
                        theme === 'light'
                          ? 'bg-white border-neutral-300 focus:border-neutral-950 text-neutral-900 shadow-sm'
                          : 'bg-black border-white/5 focus:border-violet-500/50 text-white'
                      }`}
                    >
                      {(budgetRangesByCurrency[formData.currency] || budgetRangesByCurrency.USD).map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="projectDetails" className={`text-xs font-mono uppercase tracking-wider ${
                  theme === 'light' ? 'text-neutral-600 font-semibold' : 'opacity-60'
                }`}>
                  Project Details & Goals *
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  required
                  rows={4}
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  placeholder="Tell us about your brand, requirements, deadlines, and features you need..."
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all resize-none ${
                    theme === 'light'
                      ? 'bg-white border-neutral-300 focus:border-neutral-950 focus:ring-2 focus:ring-neutral-950/10 text-neutral-900 shadow-sm placeholder:text-neutral-400'
                      : 'bg-white/5 border-white/5 focus:border-violet-500/50 text-white'
                  }`}
                />
              </div>

              {/* Submit button with Formspree placeholder comment */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full rounded-full py-4 text-sm font-medium flex items-center justify-center space-x-2 transition-all duration-300 cursor-pointer ${
                  theme === 'light'
                    ? 'bg-black text-white hover:opacity-90 hover:shadow-lg hover:shadow-black/10'
                    : 'bg-white text-black hover:bg-neutral-100 hover:shadow-lg hover:shadow-violet-500/20'
                }`}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Launching Transmission...</span>
                ) : (
                  <>
                    <span>Submit Project Proposals</span>
                    <Send size={15} />
                  </>
                )}
              </button>
              
              {/* Developer notice on formspree endpoint replacing */}
              <p className="text-[10px] font-mono opacity-40 text-center leading-normal">
                {`Form target is customizable. Will point to Formspree: https://formspree.io/f/YOUR_FORM_ID`}
              </p>
            </form>
          )}
        </div>
      </div>

      {/* Right Column: Contact Info & Indian Location */}
      <div className="lg:col-span-5 flex flex-col space-y-8">
        
        {/* Contact Info Card */}
        <div className={`p-8 rounded-3xl border ${
          theme === 'light' ? 'bg-white border-neutral-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)]' : 'bg-[#0a0a0f] border-white/5'
        }`}>
          <h3 className="font-serif text-2xl tracking-tight mb-6">Studio Directory</h3>
          
          <div className="space-y-6">
            {/* Direct Lines */}
            <div className="flex items-start space-x-4">
              <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-500 mt-1">
                <Mail size={18} />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider opacity-50">General Inquiries</span>
                <p className="text-sm font-semibold font-mono mt-0.5">nexward01@gmail.com</p>
                <p className={`text-xs ${theme === 'light' ? 'text-neutral-500' : 'text-white/40'}`}>Typically responds within 2 hours</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-500 mt-1">
                <Phone size={18} />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider opacity-50">Urgent Consultations</span>
                <p className="text-sm font-semibold font-mono mt-0.5 flex items-center space-x-1.5">
                  <span>🇮🇳</span>
                  <span>+91 79882 42622</span>
                </p>
                <p className={`text-xs ${theme === 'light' ? 'text-neutral-500' : 'text-white/40'}`}>Active 10:00 AM — 7:00 PM IST</p>
              </div>
            </div>

            {/* Indian Location */}
            <div className="flex items-start space-x-4">
              <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-500 mt-1">
                <MapPin size={18} />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider opacity-50">Global Headquarters</span>
                <p className="text-sm font-semibold mt-0.5">Karnal, Haryana, India</p>
                <p className={`text-xs ${theme === 'light' ? 'text-neutral-500' : 'text-white/40'}`}>Sector-13, Urban Estate, Code 132001</p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Reach Message */}
        <div className={`p-8 rounded-3xl border relative overflow-hidden ${
          theme === 'light' ? 'bg-white border-neutral-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)]' : 'bg-[#0a0a0f] border-white/5'
        }`}>
          {/* Subtle graphic design */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 blur-xl rounded-full" />
          
          <h3 className="font-serif text-lg tracking-tight mb-2">Our Operating Hours</h3>
          <p className={`text-xs leading-relaxed ${theme === 'light' ? 'text-neutral-600' : 'text-white/60'}`}>
            We maintain frictionless delivery pipelines with digital creators, startup founders, and enterprise teams globally across standard US (EST/PST) and European timezones, delivering high-touch collaboration regardless of physical location.
          </p>
        </div>

      </div>
    </div>
  );
}
