import React from 'react';
import { 
  X, 
  Workflow, 
  Layers, 
  AlertCircle, 
  CheckCircle2, 
  ShieldCheck
} from 'lucide-react';
import type { ProjectItem } from '../../types/portfolio';
import { StatusBadge } from '../ui/StatusBadge';
import { GithubIcon } from '../ui/SocialIcons';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl my-8 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-800 bg-slate-950/50 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {project.category}
              </span>
              <StatusBadge status={project.status} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {project.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Status Note / Transparency Box */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3 text-xs text-slate-300">
            <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block font-semibold mb-0.5">Engineering Transparency Notice:</strong>
              {project.statusNote} This is a lab prototype / architectural blueprint built for learning and demonstration.
            </div>
          </div>

          {/* Problem Statement */}
          <div>
            <h4 className="text-sm font-mono uppercase text-cyan-400 tracking-wider mb-2 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              The Business Problem
            </h4>
            <p className="text-sm sm:text-base text-slate-300 bg-slate-950/40 p-4 rounded-xl border border-slate-800 leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Solution Architecture */}
          <div>
            <h4 className="text-sm font-mono uppercase text-indigo-400 tracking-wider mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              Solution Architecture
            </h4>
            <p className="text-sm sm:text-base text-slate-300 bg-slate-950/40 p-4 rounded-xl border border-slate-800 leading-relaxed">
              {project.solutionArchitecture}
            </p>
          </div>

          {/* Workflow Steps / Execution Flow */}
          <div>
            <h4 className="text-sm font-mono uppercase text-purple-400 tracking-wider mb-3 flex items-center gap-2">
              <Workflow className="w-4 h-4" />
              Step-by-Step Workflow Pipeline
            </h4>
            <div className="space-y-2.5">
              {project.workflowSteps.map((step) => (
                <div 
                  key={step.step}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 font-mono text-xs font-bold shrink-0 mt-0.5">
                    {step.step}
                  </span>
                  <div>
                    <div className="text-xs font-bold text-white">{step.title}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{step.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-2">Technical Highlights</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Stack */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 text-xs font-mono text-slate-200 border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-950/80 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-400 font-mono">
            Repository: <span className="text-slate-300">Adil-Porfolio</span>
          </div>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-700"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
