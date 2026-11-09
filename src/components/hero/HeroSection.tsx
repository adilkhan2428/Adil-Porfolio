import React from 'react';
import { 
  ArrowRight, 
  Bot, 
  Workflow, 
  Store, 
  MapPin,
  Sparkles,
  Mail
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { TechnicalVisual } from './TechnicalVisual';
import { Container } from '../layout/Container';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Positioning */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Stage & Location Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono bg-slate-900/90 border border-slate-700/80 text-slate-300 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span className="text-emerald-400 font-semibold">SMIT Agentic AI Engineer Student</span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1 text-slate-400">
                <MapPin className="w-3 h-3 text-cyan-400" />
                Landikotal, KPK, Pakistan
              </span>
            </div>

            {/* Greeting & Main Headline */}
            <div className="space-y-3">
              <p className="text-lg sm:text-xl font-medium text-cyan-400 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Hi, I'm {personalInfo.name}.</span>
              </p>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Building Intelligent Automation for the{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  Future of E-commerce.
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              I explore the intersection of AI, automation, and software engineering to build intelligent systems that help businesses operate smarter. My focus is on transforming repetitive e-commerce operations into intelligent, efficient, and scalable business systems.
            </p>

            {/* 3 Focus Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center gap-2 mb-1 text-cyan-400">
                  <Workflow className="w-4 h-4" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider">01</span>
                </div>
                <h4 className="text-sm font-semibold text-white">AI Automation</h4>
                <p className="text-[12px] text-slate-400 mt-0.5">n8n workflows, APIs, webhooks</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 transition-colors">
                <div className="flex items-center gap-2 mb-1 text-indigo-400">
                  <Bot className="w-4 h-4" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider">02</span>
                </div>
                <h4 className="text-sm font-semibold text-white">Agentic AI Systems</h4>
                <p className="text-[12px] text-slate-400 mt-0.5">Autonomous loops & tool use</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-purple-500/40 transition-colors">
                <div className="flex items-center gap-2 mb-1 text-purple-400">
                  <Store className="w-4 h-4" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider">03</span>
                </div>
                <h4 className="text-sm font-semibold text-white">E-commerce Engineering</h4>
                <p className="text-[12px] text-slate-400 mt-0.5">Shopify & store operations</p>
              </div>
            </div>

            {/* CTAs and Social Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-600 via-indigo-600 to-violet-600 hover:from-cyan-500 hover:via-indigo-500 hover:to-violet-500 transition-all duration-200 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-slate-200 bg-slate-900/80 border border-slate-700 hover:border-slate-500 hover:text-white hover:bg-slate-800 transition-all duration-200 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Let's Connect</span>
              </a>

              <div className="flex items-center gap-2 sm:ml-2">
                <a
                  href={personalInfo.contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-all"
                  aria-label="GitHub Profile"
                  title="View GitHub Repository"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800 transition-all"
                  aria-label="LinkedIn Profile"
                  title="View LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Identity tags */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
              <span className="text-slate-400">Specialization:</span>
              {personalInfo.professionalIdentity.map((item, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column: Abstract Technical Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <TechnicalVisual />
          </div>

        </div>
      </Container>
    </section>
  );
};
