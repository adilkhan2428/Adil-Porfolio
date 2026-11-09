import React from 'react';
import { 
  Compass, 
  GitFork, 
  ShieldCheck, 
  Scale, 
  Lock, 
  UserCheck, 
  Activity,
  Lightbulb
} from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { engineeringPrinciples } from '../../data/portfolioData';

export const PhilosophySection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-cyan-400" />;
      case 'GitFork':
        return <GitFork className="w-5 h-5 text-emerald-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-indigo-400" />;
      case 'Scale':
        return <Scale className="w-5 h-5 text-amber-400" />;
      case 'Lock':
        return <Lock className="w-5 h-5 text-purple-400" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-teal-400" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-rose-400" />;
      default:
        return <Lightbulb className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section className="py-20 bg-slate-900/40 relative border-t border-slate-900">
      <Container>
        <SectionHeader
          badge="Guiding Principles"
          title="How I Approach Engineering"
          subtitle="Technology is only valuable when anchored in operational clarity, rock-solid reliability, and measurable merchant outcomes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringPrinciples.map((principle) => (
            <div
              key={principle.number}
              className="group p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-105 transition-transform">
                    {getIcon(principle.icon)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                    0{principle.number}
                  </span>
                </div>

                <h3 className="font-bold text-white text-base leading-snug group-hover:text-cyan-300 transition-colors mb-3">
                  {principle.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {principle.coreInsight}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 bg-slate-950/40 -mx-6 -mb-6 p-3 px-6 rounded-b-2xl">
                <strong className="text-cyan-400 font-mono font-medium">E-commerce Lens: </strong>
                <span>{principle.ecommerceContext}</span>
              </div>
            </div>
          ))}

          {/* 8th Summary Card: The North Star */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-indigo-950/30 to-purple-950/40 border border-cyan-500/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 mb-4">
                <Lightbulb className="w-6 h-6 animate-pulse" />
                <span className="text-xs font-mono font-semibold tracking-wider uppercase">Summary Ethos</span>
              </div>
              <h3 className="font-bold text-white text-lg mb-2">
                Simplicity Over Hype
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                "An intelligent system should never be more complicated than the business reality it serves. Reliability, speed, and safety always trump buzzwords."
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-cyan-500/20 text-xs font-mono text-cyan-300">
              Adil Khan • Engineering Philosophy
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
};

