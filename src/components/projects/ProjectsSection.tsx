import React, { useState } from 'react';
import { 
  Workflow, 
  AlertCircle,
  Eye
} from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { StatusBadge } from '../ui/StatusBadge';
import { featuredProjects } from '../../data/portfolioData';
import type { ProjectCategory, ProjectItem } from '../../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from '../ui/SocialIcons';

const categories: ('All' | ProjectCategory)[] = [
  'All',
  'Python Projects',
  'Business Automation',
  'Shopify Automation',
  'AI Agent Projects',
  'RAG & Knowledge Systems',
  'Multi-Agent Systems',
  'Production AI Systems'
];

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | ProjectCategory>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? featuredProjects
    : featuredProjects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-slate-950 relative">
      <Container>
        <SectionHeader
          badge="Demonstration & Architecture Lab"
          title="Featured Projects & System Blueprints"
          subtitle="Real lab implementations, hands-on Python tools, and structured architectural blueprints designed for e-commerce automation and agentic systems."
        />

        {/* Category Navigation Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:shadow-cyan-950/20"
            >
              {/* Card Header & Badges */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-cyan-400 font-medium">
                    {project.category}
                  </span>
                  <StatusBadge status={project.status} />
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2.5">
                  {project.name}
                </h3>

                {/* Problem snippet */}
                <div className="mb-4">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wide mb-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 text-amber-400" /> Problem Solved
                  </div>
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Architecture snippet */}
                <div className="mb-4 p-3 rounded-xl bg-slate-950/50 border border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wide mb-1 flex items-center gap-1">
                    <Workflow className="w-3 h-3 text-cyan-400" /> Architecture
                  </div>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {project.solutionArchitecture}
                  </p>
                </div>

                {/* Technologies pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono bg-slate-800/50 text-slate-500">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer with Actions */}
              <div className="p-4 bg-slate-950/70 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Workflow</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                      title="View GitHub Repository"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project detail modal */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </Container>
    </section>
  );
};
