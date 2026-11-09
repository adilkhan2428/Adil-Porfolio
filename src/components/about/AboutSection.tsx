import React from 'react';
import { 
  Cpu, 
  GraduationCap, 
  Target, 
  Compass, 
  CheckCircle2
} from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-950/70 border-t border-slate-900 relative">
      {/* Background flare */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <SectionHeader
          badge="Authentic Background & Values"
          title="The Engineer Behind the Systems"
          subtitle="Honest foundations, ambitious curiosity, and a deep dedication to solving real business problems through software and intelligent agents."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 shadow-xl backdrop-blur-md space-y-5 text-slate-300 leading-relaxed text-base sm:text-lg">
              <p>
                I'm <strong className="text-white font-semibold">Adil Khan</strong> from{' '}
                <span className="text-cyan-400 font-medium">Landikotal, Khyber Pakhtunkhwa, Pakistan</span>. 
                After completing my <strong className="text-white font-semibold">FSc (Intermediate)</strong> education, 
                I decided to commit myself fully to a career in Artificial Intelligence and software engineering.
              </p>

              <p>
                I am currently developing my technical foundation through the{' '}
                <strong className="text-indigo-300 font-semibold">SMIT Agentic AI Engineer program</strong> (a rigorous 12-month curriculum), 
                while independently exploring real-world business automation and modern API systems.
              </p>

              <p>
                My primary interest is <strong className="text-cyan-300 font-semibold">e-commerce</strong>. 
                I want to understand how online businesses operate behind the scenes and how automation, APIs, Python, and intelligent AI agents can improve their operations.
              </p>

              <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 via-indigo-950/30 to-slate-900 border-l-4 border-cyan-400 text-white font-medium text-base">
                "My goal is not simply to build workflows. I want to engineer reliable systems that solve actual business problems."
              </div>

              <p className="text-sm text-slate-400 pt-2">
                I do not claim decades of senior engineering experience. I am in the active stage of building my foundation through consistent daily coding, building prototypes, and understanding retail operations from the ground up.
              </p>
            </div>

            {/* Practical Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="text-xs font-mono text-cyan-400 mb-1">PROGRAM</div>
                <div className="text-sm font-semibold text-white">SMIT Agentic AI</div>
                <div className="text-xs text-slate-400 mt-1">12-Month Curriculum</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="text-xs font-mono text-indigo-400 mb-1">FOCUS DOMAIN</div>
                <div className="text-sm font-semibold text-white">E-commerce Operations</div>
                <div className="text-xs text-slate-400 mt-1">Shopify & Shopify Plus</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="text-xs font-mono text-purple-400 mb-1">TARGET MARKET</div>
                <div className="text-sm font-semibold text-white">Global Brands</div>
                <div className="text-xs text-slate-400 mt-1">US, UK & International</div>
              </div>
            </div>
          </div>

          {/* Core Values (Right 5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Compass className="w-5 h-5 text-cyan-400" />
              <span>Core Working Principles</span>
            </h3>

            {/* Value 1 */}
            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    Engineering Mindset
                  </h4>
                  <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                    Prioritizing clean architecture, defensive error handling, typed schemas, and modular code over fragile, quick hacks.
                  </p>
                </div>
              </div>
            </div>

            {/* Value 2 */}
            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 group">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                    Continuous Learning
                  </h4>
                  <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                    Actively coding daily through the SMIT 12-month program, studying open-source AI frameworks, and mastering system design patterns.
                  </p>
                </div>
              </div>
            </div>

            {/* Value 3 */}
            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/40 transition-all duration-300 group">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:scale-110 transition-transform">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                    Business Problem Solving
                  </h4>
                  <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                    Always anchoring technical choices to measurable merchant ROI: reducing manual labor, preventing stockouts, and expediting orders.
                  </p>
                </div>
              </div>
            </div>

            {/* Commitment Box */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 text-xs font-mono text-slate-400 space-y-1.5">
              <div className="text-slate-300 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Transparent Engineering Commitment
              </div>
              <p>
                No fabricated client logos, fake metrics, or exaggerated credentials. Every project listed here is an active prototype or structured architecture blueprint.
              </p>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};
