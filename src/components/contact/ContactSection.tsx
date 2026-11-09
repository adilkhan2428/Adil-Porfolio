import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Copy, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { personalInfo } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';

interface FormState {
  name: string;
  email: string;
  storeType: string;
  subject: string;
  message: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    storeType: 'Shopify Store Owner',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const validate = (): boolean => {
    const errs: Partial<FormState> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your full name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please share a brief description of your business problem (at least 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Build real mailto URL so user genuinely contacts Adil directly
    const subjectLine = encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject || formData.storeType} - From ${formData.name}`
    );
    const bodyContent = encodeURIComponent(
      `Hello Adil,\n\nMy name is ${formData.name} (${formData.email}).\nRole/Business Type: ${formData.storeType}\n\nMessage:\n${formData.message}\n\n---\nSent via your portfolio website.`
    );

    const mailtoUrl = `mailto:${personalInfo.contact.email}?subject=${subjectLine}&body=${bodyContent}`;
    
    // Open user's email client
    window.open(mailtoUrl, '_blank');
    setIsSubmitted(true);
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(label);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/60 relative border-t border-slate-900">
      {/* Background flare */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <Container>
        <SectionHeader
          badge="Direct Communication"
          title="Have a Business Problem Worth Solving?"
          subtitle="I'm continuously learning, building, and exploring how AI can solve real-world business challenges. Let's connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Contact Adil Khan
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Open for technical discussions, AI automation collaborations, and project apprenticeships.
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400 uppercase">Email Address</div>
                      <a 
                        href={`mailto:${personalInfo.contact.email}`}
                        className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
                      >
                        {personalInfo.contact.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.contact.email, 'email')}
                    className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedType === 'email' ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400 uppercase">Phone & WhatsApp</div>
                      <a 
                        href={`tel:${personalInfo.contact.phone}`}
                        className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors font-mono"
                      >
                        {personalInfo.contact.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <a
                      href={`https://wa.me/923279158970?text=Hi%20Adil,%20I%20saw%20your%20portfolio`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 rounded text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20"
                    >
                      WhatsApp
                    </a>
                    <button
                      onClick={() => handleCopy(personalInfo.contact.phone, 'phone')}
                      className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                      title="Copy Phone"
                    >
                      {copiedType === 'phone' ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Location</div>
                    <div className="text-sm font-semibold text-white">
                      {personalInfo.contact.locationDisplay}
                    </div>
                  </div>
                </div>
              </div>

              {/* Profiles */}
              <div className="pt-2 border-t border-slate-800">
                <div className="text-xs font-mono uppercase text-slate-400 mb-3">
                  Verified Developer Profiles
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.contact.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 hover:text-white text-slate-300 text-xs font-semibold transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>GitHub Repo</span>
                    <ExternalLink className="w-3 h-3 ml-auto text-slate-500" />
                  </a>

                  <a
                    href={personalInfo.contact.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 hover:text-white text-slate-300 text-xs font-semibold transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 ml-auto text-slate-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-cyan-400" />
              <span>Send a Message</span>
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill out this form to launch your email client with a pre-formatted message directly to Adil.
            </p>

            {isSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">
                  Email Draft Created!
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Your email client has been opened with your inquiry prefilled. You can also send directly to <strong className="text-white">{personalInfo.contact.email}</strong> or reach out on WhatsApp.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white border border-slate-700 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                  <a
                    href={`mailto:${personalInfo.contact.email}`}
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white shadow-md shadow-cyan-950"
                  >
                    Open Mail Client Again
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border text-sm text-white placeholder-slate-600 focus:outline-none transition-colors ${
                        errors.name ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-500'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-rose-400 mt-1 block">{errors.name}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. sarah@mystore.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border text-sm text-white placeholder-slate-600 focus:outline-none transition-colors ${
                        errors.email ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-500'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-rose-400 mt-1 block">{errors.email}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Category / Store Type */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Background / Store Type
                    </label>
                    <select
                      value={formData.storeType}
                      onChange={(e) => setFormData({ ...formData, storeType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500"
                    >
                      <option value="Shopify Store Owner">Shopify Store Owner</option>
                      <option value="Shopify Plus Merchant">Shopify Plus Merchant</option>
                      <option value="E-commerce Agency / Tech Lead">E-commerce Agency / Tech Lead</option>
                      <option value="AI / Software Engineer Collaborator">AI / Software Engineer Collaborator</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Automated Order Triage Question"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Describe the Problem or Question *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your current e-commerce bottleneck or automation question..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border text-sm text-white placeholder-slate-600 focus:outline-none transition-colors ${
                      errors.message ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-500'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-rose-400 mt-1 block">{errors.message}</span>
                  )}
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-600 via-indigo-600 to-violet-600 hover:from-cyan-500 hover:via-indigo-500 hover:to-violet-500 transition-all duration-200 shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email Client</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center font-mono">
                  Guaranteed genuine delivery: opens your default email client with zero spam intermediaries.
                </p>
              </form>
            )}
          </div>

        </div>
      </Container>
    </section>
  );
};
