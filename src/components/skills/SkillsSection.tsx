import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Code2, 
  Workflow, 
  Bot, 
  Server, 
  Info
} from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { StatusBadge } from '../ui/StatusBadge';
import { technicalSkills } from '../../data/portfolioData';
import type { SkillCategory } from '../../types/portfolio';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Current Foundations',
    'Automation Technologies',
    'Agentic AI — Learning Roadmap',
    'Backend & Infrastructure — Future Development'
  ];

  const statuses = [
    'All',
    'Currently Learning',
    'Practicing Through Projects',
    'Future Learning'
  ];

  const filteredSkills = useMemo(() => {
    return technicalSkills.filter((skill) => {
      const matchesCategory =
        selectedCategory === 'All' || skill.category === selectedCategory;
      const matchesStatus =
        selectedStatus === 'All' || skill.status === selectedStatus;
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (skill.description && skill.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (skill.relevanceToEcommerce && skill.relevanceToEcommerce.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesStatus && matchesSearch;
    });
  }, [selectedCategory, selectedStatus, searchQuery]);

  const getCategoryIcon = (category: SkillCategory) => {
    switch (category) {
      case 'Current Foundations':
        return <Code2 className="w-4 h-4 text-cyan-400" />;
      case 'Automation Technologies':
        return <Workflow className="w-4 h-4 text-emerald-400" />;
      case 'Agentic AI — Learning Roadmap':
        return <Bot className="w-4 h-4 text-indigo-400" />;
      case 'Backend & Infrastructure — Future Development':
        return <Server className="w-4 h-4 text-purple-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-900/40 relative">
      <Container>
        <SectionHeader
          badge="Honest Technical Progression"
          title="Technical Skills & Architecture Dashboard"
          subtitle="A clear, transparent breakdown of my technical capabilities. Future learning goals are explicitly differentiated from technologies currently in active practice."
        />

        {/* Status Legend / Explanation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex items-start gap-3">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse mt-1 shrink-0" />
            <div>
              <div className="text-sm font-semibold text-emerald-400">Currently Learning</div>
              <p className="text-xs text-slate-300 mt-1">
                Active SMIT coursework, daily syntax drills, foundational concepts, and theoretical study.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-sky-950/20 border border-sky-500/30 flex items-start gap-3">
            <span className="w-3 h-3 rounded-full bg-sky-400 animate-pulse mt-1 shrink-0" />
            <div>
              <div className="text-sm font-semibold text-sky-400">Practicing Through Projects</div>
              <p className="text-xs text-slate-300 mt-1">
                Applied in real codebases, sandbox workflows, data scripts, and hands-on lab experiments.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30 flex items-start gap-3">
            <span className="w-3 h-3 rounded-full bg-purple-400 mt-1 shrink-0" />
            <div>
              <div className="text-sm font-semibold text-purple-400">Future Learning (Roadmap)</div>
              <p className="text-xs text-slate-300 mt-1">
                Scheduled in upcoming modules. Explicitly labeled so as not to overstate my current mastery.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search skills, tools, or e-commerce applications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            {/* Status Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-mono text-slate-400 mr-1 flex items-center gap-1">
                <Filter className="w-3 h-3" /> Status:
              </span>
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    selectedStatus === status
                      ? 'bg-slate-800 text-white border border-cyan-500/50 shadow-sm'
                      : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md shadow-indigo-950'
                    : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="group p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-black/30 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-slate-800 border border-slate-700/60">
                      {getCategoryIcon(skill.category)}
                    </div>
                    <h4 className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h4>
                  </div>
                  <StatusBadge status={skill.status} />
                </div>

                <div className="text-[11px] font-mono text-slate-400 mb-2">
                  {skill.category}
                </div>

                {skill.description && (
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {skill.description}
                  </p>
                )}
              </div>

              {skill.relevanceToEcommerce && (
                <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 bg-slate-950/40 -mx-5 -mb-5 p-3 px-5 rounded-b-2xl">
                  <strong className="text-cyan-400 font-mono font-medium">E-commerce Use: </strong>
                  <span>{skill.relevanceToEcommerce}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 bg-slate-900/30 rounded-2xl border border-slate-800">
            <Info className="w-8 h-8 text-slate-500 mx-auto mb-2" />
            <p className="text-slate-400 text-sm">No skills match your current search and filter criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedStatus('All');
                setSearchQuery('');
              }}
              className="mt-3 px-4 py-1.5 rounded-lg text-xs text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </Container>
    </section>
  );
};
