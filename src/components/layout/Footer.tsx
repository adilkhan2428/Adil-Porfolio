import React from 'react';
import { 
  Terminal, 
  Mail, 
  Phone, 
  ArrowUp,
  MapPin
} from 'lucide-react';
import { Container } from './Container';
import { personalInfo } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-16 text-slate-400 text-sm">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand & Stage (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1.5px]">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-cyan-400">
                  <Terminal className="w-4 h-4" />
                </div>
              </div>
              <div>
                <span className="font-bold text-white text-base">
                  {personalInfo.name}
                </span>
                <span className="text-[11px] font-mono text-cyan-400 block">
                  AI Automation & Agentic Systems
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Aspiring AI Engineer specializing in E-commerce Automation, intelligent Shopify workflows, and autonomous multi-agent business systems.
            </p>

            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-cyan-400 transition-colors">About Me</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Technical Skills</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Featured Projects</a>
              <a href="#solutions" className="hover:text-cyan-400 transition-colors">E-commerce Solutions</a>
              <a href="#journey" className="hover:text-cyan-400 transition-colors">Learning Journey</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Get in Touch</a>
            </div>
          </div>

          {/* Social & Contact (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Connect
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={personalInfo.contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                <span>GitHub Repository</span>
              </a>

              <a
                href={personalInfo.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>{personalInfo.contact.email}</span>
              </a>

              <a
                href={`tel:${personalInfo.contact.phone}`}
                className="flex items-center gap-2 hover:text-white transition-colors font-mono"
              >
                <Phone className="w-4 h-4 text-indigo-400" />
                <span>{personalInfo.contact.phone}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Adil Khan. Designed for scalable international engineering growth.
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-slate-400">
              React • TypeScript • Tailwind CSS
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </Container>
    </footer>
  );
};
