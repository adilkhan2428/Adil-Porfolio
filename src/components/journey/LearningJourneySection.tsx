import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Target, 
  BookOpen
} from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { StatusBadge } from '../ui/StatusBadge';
import { learningModules } from '../../data/portfolioData';

export const LearningJourneySection: React.FC = () => {
  const [activeModuleId, setActiveModuleId] = useState<string>(learningModules[0].id);

  const activeModule = learningModules.find(m => m.id === activeModuleId) || learningModules[0];

  return (
    <section id="journey" className="py-20 bg-slate-950 relative">
      <Container>
        <SectionHeader
          badge="12-Month SMIT Intensive Curriculum"
          title="From Foundations to Agentic AI Engineering"
          subtitle="My structured roadmap through the Saylani Mass IT Training (SMIT) Agentic AI Engineer program. Showing authentic module progress, hands-on milestones, and planned future depth."
        />

        {/* Timeline Stepper Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {learningModules.map((module) => {
            const isSelected = module.id === activeModuleId;
            return (
              <button
                key={module.id}
                onClick={() => setActiveModuleId(module.id)}
                className={`text-left p-5 rounded-2xl border transition-all cursor-pointer relative ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-500/80 shadow-xl shadow-cyan-950/30'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70'
                }`}
              >
                {/* Active indicator top bar */}
                {isSelected && (
                  <span className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-b-full" />
                )}

                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                    MODULE 0{module.moduleNumber}
                  </span>
                  <StatusBadge status={module.status} />
                </div>

                <h4 className="font-bold text-white text-base mb-1.5 leading-snug">
                  {module.title}
                </h4>

                <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                  {module.focusDescription}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{module.topics.length} Core Topics</span>
                  <span className={isSelected ? 'text-cyan-400 font-semibold' : 'text-slate-400'}>
                    Inspect Details &rarr;
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Module Detail Panel */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left side: Module Overview & Outcomes */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {activeModule.badge}
                  </span>
                  <StatusBadge status={activeModule.status} />
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {activeModule.title}
                </h3>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <strong className="text-white block font-semibold mb-1">Status Clarification:</strong>
                {activeModule.statusDetails}
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                  Curriculum Focus & Depth
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeModule.focusDescription}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 to-indigo-950/30 border border-cyan-500/20 space-y-1">
                <div className="text-xs font-mono text-cyan-400 font-semibold flex items-center gap-1.5">
                  <Target className="w-4 h-4" /> Expected Engineering Milestone
                </div>
                <p className="text-xs sm:text-sm text-slate-200">
                  {activeModule.outcomeMilestone}
                </p>
              </div>
            </div>

            {/* Right side: Detailed Topic Breakdown */}
            <div className="lg:col-span-7 bg-slate-950/50 p-6 rounded-2xl border border-slate-800">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <div className="text-xs font-mono uppercase text-slate-400 tracking-wider flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  Syllabus Topics & Competency Tracker
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  SMIT 12-Month Official Track
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeModule.topics.map((topic, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 hover:border-slate-700 transition-colors"
                  >
                    {topic.completed ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    ) : (
                      <Circle className="w-4 h-4 text-slate-600 shrink-0" />
                    )}
                    <span className={topic.completed ? 'text-white font-medium' : 'text-slate-400'}>
                      {topic.title}
                    </span>
                    {topic.completed && (
                      <span className="ml-auto text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                        Done
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <p className="text-[11px] font-mono text-slate-500 mt-4 pt-3 border-t border-slate-800/80">
                * Topics are checked off as coursework labs and code submissions are reviewed.
              </p>
            </div>

          </div>
        </div>

      </Container>
    </section>
  );
};
