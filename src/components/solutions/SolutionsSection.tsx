import React, { useState } from 'react';
import { 
  ShoppingBag, 
  MessageSquareText, 
  TrendingUp, 
  PackageCheck, 
  BarChart3, 
  Bot, 
  Server, 
  CheckCircle2, 
  Layers, 
  ArrowRight,
  Store,
  PlusCircle
} from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { ecommerceSolutions } from '../../data/portfolioData';

export const SolutionsSection: React.FC = () => {
  const [selectedSolutionId, setSelectedSolutionId] = useState<string>(ecommerceSolutions[0].id);

  const activeSolution = ecommerceSolutions.find(s => s.id === selectedSolutionId) || ecommerceSolutions[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-emerald-400" />;
      case 'MessageSquareText':
        return <MessageSquareText className="w-5 h-5 text-cyan-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-amber-400" />;
      case 'PackageCheck':
        return <PackageCheck className="w-5 h-5 text-blue-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-teal-400" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-indigo-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-purple-400" />;
      default:
        return <Store className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="solutions" className="py-20 bg-slate-900/50 relative border-t border-slate-900">
      <Container>
        <SectionHeader
          badge="Specialization & Future Solution Capabilities"
          title="Engineering the Next Generation of E-commerce Operations"
          subtitle="I aim to help online stores reduce manual work, improve operational efficiency, and build intelligent business processes. These 7 core areas define my technical focus and long-term engineering trajectory."
        />

        {/* Master-Detail Architecture View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Solution Selector Navigation (5 cols) */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 px-1">
              Select Solution Capability
            </div>
            {ecommerceSolutions.map((solution, idx) => {
              const isSelected = solution.id === selectedSolutionId;
              return (
                <button
                  key={solution.id}
                  onClick={() => setSelectedSolutionId(solution.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-slate-800/90 border-cyan-500/70 shadow-lg shadow-cyan-950/30'
                      : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-950/80 border border-slate-800 shrink-0">
                      {getIcon(solution.icon)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-cyan-400">0{idx + 1}</span>
                        <h4 className="font-semibold text-white text-sm">
                          {solution.title}
                        </h4>
                      </div>
                      <p className="text-[11px] text-slate-400 truncate max-w-[200px] sm:max-w-xs mt-0.5">
                        {solution.tagline}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Technical Breakdown & Future Project Slot (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl space-y-6">
            
            {/* Active Header */}
            <div>
              <div className="flex items-center gap-2.5 text-xs font-mono text-cyan-400 mb-1">
                <span>Domain Capability</span>
                <span>•</span>
                <span className="text-slate-400">Future E-commerce Architecture</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {activeSolution.title}
              </h3>
              <p className="text-cyan-300 font-medium text-sm mt-1">
                {activeSolution.tagline}
              </p>
              <p className="text-slate-300 text-sm leading-relaxed mt-3 pt-3 border-t border-slate-800">
                {activeSolution.overview}
              </p>
            </div>

            {/* Comprehensive Capabilities Checklist */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Target Engineering Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeSolution.capabilities.map((cap, i) => (
                  <div 
                    key={i} 
                    className="flex items-start gap-2 p-2 rounded-lg bg-slate-950/40 border border-slate-800/60 text-xs text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Real World Scenario */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs space-y-1.5">
              <div className="font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                Real-World Operational Scenario
              </div>
              <p className="text-slate-300 leading-relaxed">
                {activeSolution.realWorldScenario}
              </p>
            </div>

            {/* Architectural Components */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-400" />
                Architectural Components
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeSolution.architecturalComponents.map((comp, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-slate-800 text-xs font-mono text-indigo-300 border border-slate-700/80"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>

            {/* Real Project Slot (Future Editable Placeholder) */}
            <div className="pt-4 border-t border-slate-800">
              <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/30 to-indigo-950/30 border border-cyan-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <PlusCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">
                      Linked Project Implementation Slot
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono">
                      {activeSolution.futureProjectPlaceholder}
                    </div>
                  </div>
                </div>
                <a
                  href="#projects"
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors whitespace-nowrap"
                >
                  View Current Prototypes &rarr;
                </a>
              </div>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};
