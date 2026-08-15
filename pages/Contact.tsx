import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Mail } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import PageHero from '../components/PageHero';
import { useSEO } from '../hooks/useSEO';
import { contactSEO } from '../seo/pages';

const FORMSPREE_ID = 'mbdnawpo';

const inputClass =
  'w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-[#F6EFE4] placeholder:text-[#5E7871] focus:outline-none focus:border-[#E3A857]/60 transition-colors';

const Contact: React.FC = () => {
  useSEO(contactSEO());
  const [state, handleSubmit, resetForm] = useForm(FORMSPREE_ID);

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
            {state.succeeded ? (
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
                  onClick={() => resetForm()}
                  className="mt-4 text-[#E3A857] font-bold text-sm hover:text-white transition-colors"
                >
                  Send another enquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input required name="name" placeholder="Full Name" className={inputClass} />
                  <input required type="email" name="email" placeholder="Email Address" className={inputClass} />
                </div>
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-sm text-[#D9714E]" />

                <select name="interest" defaultValue="Just researching" className={inputClass}>
                  <option>Just researching</option>
                  <option>Visas & residency</option>
                  <option>Renting in Bali</option>
                  <option>Buying property in Bali</option>
                  <option>Tax & exiting Australia</option>
                  <option>Planning a holiday</option>
                  <option>Other</option>
                </select>
                <select name="timeframe" defaultValue="No timeframe yet" className={inputClass}>
                  <option>No timeframe yet</option>
                  <option>Within 3 months</option>
                  <option>3–12 months</option>
                  <option>1–2 years</option>
                  <option>Already in Bali</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Tell us a bit about your situation..."
                  rows={4}
                  className={`${inputClass} resize-none`}
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-sm text-[#D9714E]" />

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-4 bg-[#E3A857] text-[#062420] font-black text-lg rounded-xl hover:bg-[#F6EFE4] transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {state.submitting ? 'Sending...' : 'Send Enquiry'} <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>

          <div className="flex items-center justify-center gap-2 mt-8 text-sm text-[#8FA69E]">
            <Mail className="w-4 h-4" />
            Prefer email? <a href="mailto:hello@oztobali.com" className="text-[#E3A857] hover:text-[#F6EFE4] transition-colors">hello@oztobali.com</a>
          </div>
          <p className="text-center text-xs text-[#5E7871] mt-4">
            By submitting this form you agree to our{' '}
            <Link to="/privacy" className="underline hover:text-[#8FA69E] transition-colors">privacy policy</Link>.
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
