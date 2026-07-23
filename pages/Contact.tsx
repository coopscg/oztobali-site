import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Mail } from 'lucide-react';
import PageHero from '../components/PageHero';
import { useSEO } from '../hooks/useSEO';
import { contactSEO } from '../seo/pages';
import { EnquiryForm } from '../types';

const initialForm: EnquiryForm = {
  name: '',
  email: '',
  interest: 'Just researching',
  timeframe: 'No timeframe yet',
  message: '',
};

const Contact: React.FC = () => {
  useSEO(contactSEO());
  const [form, setForm] = useState<EnquiryForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Tell Us Where You're At"
        subtitle="Whether you're two years out or leaving next month, we'll point you toward what actually matters right now."
      />

      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-white/[0.03] border border-white/5 rounded-[32px] p-8 md:p-10">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center text-center py-16 gap-4"
              >
                <CheckCircle2 className="w-14 h-14 text-[#E3A857]" />
                <h3 className="text-2xl font-bold text-[#F6EFE4]">Got it, thanks!</h3>
                <p className="text-[#B9CFC9] max-w-sm">
                  We'll be in touch soon with the right next steps for your situation.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-[#E3A857] font-bold text-sm hover:text-white transition-colors"
                >
                  Send another enquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-[#F6EFE4] placeholder:text-[#5E7871] focus:outline-none focus:border-[#E3A857]/60 transition-colors"
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-[#F6EFE4] placeholder:text-[#5E7871] focus:outline-none focus:border-[#E3A857]/60 transition-colors"
                  />
                </div>
                <select
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-[#F6EFE4] focus:outline-none focus:border-[#E3A857]/60 transition-colors"
                >
                  <option>Just researching</option>
                  <option>Visas & residency</option>
                  <option>Renting in Bali</option>
                  <option>Buying property in Bali</option>
                  <option>Tax & exiting Australia</option>
                  <option>Planning a holiday</option>
                  <option>Other</option>
                </select>
                <select
                  name="timeframe"
                  value={form.timeframe}
                  onChange={handleChange}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-[#F6EFE4] focus:outline-none focus:border-[#E3A857]/60 transition-colors"
                >
                  <option>No timeframe yet</option>
                  <option>Within 3 months</option>
                  <option>3–12 months</option>
                  <option>1–2 years</option>
                  <option>Already in Bali</option>
                </select>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us a bit about your situation..."
                  rows={4}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-[#F6EFE4] placeholder:text-[#5E7871] focus:outline-none focus:border-[#E3A857]/60 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-4 bg-[#E3A857] text-[#062420] font-black text-lg rounded-xl hover:bg-[#F6EFE4] transition-all transform active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  Send Enquiry <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>

          <div className="flex items-center justify-center gap-2 mt-8 text-sm text-[#8FA69E]">
            <Mail className="w-4 h-4" />
            Prefer email? <a href="mailto:hello@oztobali.com" className="text-[#E3A857] hover:text-[#F6EFE4] transition-colors">hello@oztobali.com</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
