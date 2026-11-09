import React, { useState } from 'react';
import { 
  FileCode, 
  X, 
  Copy, 
  CheckCircle2, 
  Settings
} from 'lucide-react';

export const ConfigHelperModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'project' | 'skill' | 'module'>('overview');
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 2500);
  };

  const projectTemplate = `{
  id: 'proj-new-unique-id',
  name: 'Your New Project Name',
  category: 'Shopify Automation', // One of: 'Python Projects' | 'Business Automation' | 'Shopify Automation' | 'AI Agent Projects' | 'RAG & Knowledge Systems' | 'Multi-Agent Systems' | 'Production AI Systems'
  status: 'In Development', // 'Active Prototype' | 'In Development' | 'Architecture & Design' | 'Planned Prototype'
  statusNote: 'Live prototype under active testing.',
  problem: 'Describe the exact merchant bottleneck or problem being addressed...',
  solutionArchitecture: 'Explain the technical solution, APIs, and frameworks...',
  technologies: ['Python', 'Shopify REST API', 'FastAPI'],
  workflowDiagramDescription: 'Step A -> Step B -> Step C',
  workflowSteps: [
    { step: 1, title: 'Trigger Event', detail: 'Webhook fired on order creation' },
    { step: 2, title: 'Transformation', detail: 'Parses payload and computes risk' }
  ],
  githubUrl: 'https://github.com/adilkhan2428/Adil-Porfolio',
  liveDemoUrl: '',
  isDemonstrationOnly: false,
  keyFeatures: ['Feature one', 'Feature two']
}`;

  const skillTemplate = `{
  id: 'skill-new-id',
  name: 'Technology Name',
  category: 'Current Foundations', // 'Current Foundations' | 'Automation Technologies' | 'Agentic AI — Learning Roadmap' | 'Backend & Infrastructure — Future Development'
  status: 'Currently Learning', // 'Currently Learning' | 'Practicing Through Projects' | 'Future Learning'
  description: 'What this skill does and what level you are at...',
  relevanceToEcommerce: 'How this technology helps Shopify merchants or retail operations...'
}`;

  const moduleStatusExample = `// To mark a module as completed in src/data/portfolioData.ts:
// Change status to 'Completed' or 'In Progress'
{
  id: 'mod-1',
  moduleNumber: 1,
  title: 'AI Foundations & Automation',
  status: 'Completed', // Change here!
  // ...
}`;

  return (
    <>
      {/* Discreet floating trigger at bottom right */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-40 p-3 rounded-full bg-slate-900/90 text-cyan-400 border border-slate-700 hover:border-cyan-500 shadow-xl backdrop-blur-md hover:scale-105 transition-all flex items-center gap-2 text-xs font-mono cursor-pointer"
        title="Portfolio Configuration & Customizer Guide"
      >
        <FileCode className="w-4 h-4" />
        <span className="hidden sm:inline">Edit Portfolio Data</span>
      </button>

      {/* Modal Guide */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-6">
            
            {/* Header */}
            <div className="p-5 border-b border-slate-800 bg-slate-950/60 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Settings className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    Future Editability & Content Management Guide
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    File location: src/data/portfolioData.ts
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Sub-nav Tabs */}
            <div className="flex items-center gap-2 px-5 pt-3 border-b border-slate-800 text-xs font-mono">
              <button
                onClick={() => setActiveTab('overview')}
                className={`pb-2.5 px-2 border-b-2 transition-colors ${
                  activeTab === 'overview'
                    ? 'border-cyan-400 text-cyan-400 font-bold'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                How It Works
              </button>
              <button
                onClick={() => setActiveTab('project')}
                className={`pb-2.5 px-2 border-b-2 transition-colors ${
                  activeTab === 'project'
                    ? 'border-cyan-400 text-cyan-400 font-bold'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                + Add Project
              </button>
              <button
                onClick={() => setActiveTab('skill')}
                className={`pb-2.5 px-2 border-b-2 transition-colors ${
                  activeTab === 'skill'
                    ? 'border-cyan-400 text-cyan-400 font-bold'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                + Add Skill
              </button>
              <button
                onClick={() => setActiveTab('module')}
                className={`pb-2.5 px-2 border-b-2 transition-colors ${
                  activeTab === 'module'
                    ? 'border-cyan-400 text-cyan-400 font-bold'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                Update Roadmap
              </button>
            </div>

            {/* Content Area */}
            <div className="p-5 max-h-[60vh] overflow-y-auto space-y-4 text-xs sm:text-sm">
              {activeTab === 'overview' && (
                <div className="space-y-3 text-slate-300 leading-relaxed">
                  <p>
                    All content for this portfolio is centralized in a clean, typed configuration file:
                  </p>
                  <div className="p-3 rounded-xl bg-slate-950 font-mono text-cyan-400 text-xs border border-slate-800">
                    src/data/portfolioData.ts
                  </div>
                  <p>
                    You can effortlessly:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-300">
                    <li><strong className="text-white">Add new projects:</strong> Just paste a new project object into the <code className="text-cyan-300">featuredProjects</code> array.</li>
                    <li><strong className="text-white">Update skills:</strong> Add or edit entries in <code className="text-cyan-300">technicalSkills</code> and switch status between <em>'Currently Learning'</em>, <em>'Practicing Through Projects'</em>, or <em>'Future Learning'</em>.</li>
                    <li><strong className="text-white">Update learning progress:</strong> As you finish SMIT modules, toggle <code className="text-cyan-300">status: 'Completed'</code> in <code className="text-cyan-300">learningModules</code>.</li>
                    <li><strong className="text-white">Update contact details:</strong> Change phone number, email, or GitHub links in <code className="text-cyan-300">personalInfo</code>.</li>
                  </ul>
                  <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-cyan-300">
                    💡 No database or complex admin server is required—keeping your site 100% fast, free to host on Vercel/Netlify/GitHub Pages, and secure from vulnerabilities.
                  </div>
                </div>
              )}

              {activeTab === 'project' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">Copy this snippet to add a project:</span>
                    <button
                      onClick={() => handleCopy(projectTemplate, 'proj')}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-cyan-600/20 text-cyan-300 hover:bg-cyan-600/30 text-xs font-mono"
                    >
                      {copied === 'proj' ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied === 'proj' ? 'Copied!' : 'Copy Code'}</span>
                    </button>
                  </div>
                  <pre className="p-3.5 rounded-xl bg-slate-950 text-slate-300 font-mono text-xs overflow-x-auto border border-slate-800 max-h-72">
                    {projectTemplate}
                  </pre>
                </div>
              )}

              {activeTab === 'skill' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">Copy this snippet to add a skill:</span>
                    <button
                      onClick={() => handleCopy(skillTemplate, 'skill')}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-cyan-600/20 text-cyan-300 hover:bg-cyan-600/30 text-xs font-mono"
                    >
                      {copied === 'skill' ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied === 'skill' ? 'Copied!' : 'Copy Code'}</span>
                    </button>
                  </div>
                  <pre className="p-3.5 rounded-xl bg-slate-950 text-slate-300 font-mono text-xs overflow-x-auto border border-slate-800 max-h-72">
                    {skillTemplate}
                  </pre>
                </div>
              )}

              {activeTab === 'module' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">Module status update pattern:</span>
                    <button
                      onClick={() => handleCopy(moduleStatusExample, 'mod')}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-cyan-600/20 text-cyan-300 hover:bg-cyan-600/30 text-xs font-mono"
                    >
                      {copied === 'mod' ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied === 'mod' ? 'Copied!' : 'Copy Code'}</span>
                    </button>
                  </div>
                  <pre className="p-3.5 rounded-xl bg-slate-950 text-slate-300 font-mono text-xs overflow-x-auto border border-slate-800 max-h-72">
                    {moduleStatusExample}
                  </pre>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">
                Created for Adil Khan • Continuous Career Progression
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
