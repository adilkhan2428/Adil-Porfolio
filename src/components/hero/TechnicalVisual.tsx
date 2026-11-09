import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Bot, 
  Workflow, 
  Database, 
  Cpu, 
  ArrowRight,
  Layers
} from 'lucide-react';

interface NodeInfo {
  id: string;
  label: string;
  category: string;
  status: string;
  metric: string;
  description: string;
}

export const TechnicalVisual: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('orchestrator');

  const nodes: Record<string, NodeInfo> = {
    orchestrator: {
      id: 'orchestrator',
      label: 'Central Agentic Hub',
      category: 'Orchestration Engine',
      status: 'Active Event Loop',
      metric: 'Latency: 38ms',
      description: 'Coordinates tasks between Shopify webhooks, cognitive agent workflows, and persistence layers.'
    },
    shopify: {
      id: 'shopify',
      label: 'Shopify Store & Webhooks',
      category: 'Storefront Source',
      status: 'HMAC Verified',
      metric: 'Real-time Ingress',
      description: 'Captures order/created, inventory updates, and customer actions with cryptographically signed payloads.'
    },
    supportAgent: {
      id: 'supportAgent',
      label: 'AI Customer Support Agent',
      category: 'Cognitive Agent',
      status: 'Context Engineered',
      metric: 'JSON Schema Mode',
      description: 'Extracts customer intent, verifies order tracking statuses, and drafts policy-compliant resolutions.'
    },
    inventorySync: {
      id: 'inventorySync',
      label: 'Catalog & Inventory Logic',
      category: 'Automation Pipeline',
      status: 'Pandas / Python',
      metric: 'Velocity Analysis',
      description: 'Evaluates run-rate velocity, flags low-stock variants, and enriches supplier product feeds.'
    },
    memory: {
      id: 'memory',
      label: 'Vector DB & Shared Memory',
      category: 'Persistence Layer',
      status: 'Episodic & Semantic',
      metric: 'Zero Hallucination',
      description: 'Maintains return policy embeddings, customer preferences, and state audit history.'
    }
  };

  const active = nodes[selectedNode] || nodes.orchestrator;

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Ambient background glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl -z-10 opacity-70" />

      {/* Main Container Glass Panel */}
      <div className="relative rounded-2xl bg-slate-900/90 border border-slate-700/80 p-5 sm:p-6 shadow-2xl backdrop-blur-xl overflow-hidden">
        {/* Top Header Bar with simulated status lights */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800 text-xs">
          <div className="flex items-center gap-2 font-mono text-slate-400">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white font-semibold">ECOMMERCE_AGENTIC_NETWORK</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded font-mono text-[11px] bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              v1.0 • Ingress Active
            </span>
          </div>
        </div>

        {/* Visual Architecture Diagram Area */}
        <div className="relative py-2 sm:py-4">
          {/* Node Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-4">
            {/* Node 1: Shopify */}
            <button
              onClick={() => setSelectedNode('shopify')}
              className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                selectedNode === 'shopify'
                  ? 'bg-emerald-950/40 border-emerald-500/80 shadow-md shadow-emerald-950'
                  : 'bg-slate-800/40 border-slate-700/60 hover:border-slate-600'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-medium text-emerald-400 uppercase tracking-wide">
                    Source
                  </span>
                </div>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                  Shopify
                </span>
              </div>
              <div className="font-semibold text-white text-sm">Store & Webhooks</div>
              <div className="text-[11px] text-slate-400 mt-1">Real-time event stream</div>
            </button>

            {/* Node 2: Support Agent */}
            <button
              onClick={() => setSelectedNode('supportAgent')}
              className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                selectedNode === 'supportAgent'
                  ? 'bg-cyan-950/40 border-cyan-500/80 shadow-md shadow-cyan-950'
                  : 'bg-slate-800/40 border-slate-700/60 hover:border-slate-600'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Bot className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-medium text-cyan-400 uppercase tracking-wide">
                    Agent
                  </span>
                </div>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                  Cognitive
                </span>
              </div>
              <div className="font-semibold text-white text-sm">Customer Support Agent</div>
              <div className="text-[11px] text-slate-400 mt-1">Intent & automated triage</div>
            </button>

            {/* Node 3: Catalog & Inventory */}
            <button
              onClick={() => setSelectedNode('inventorySync')}
              className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                selectedNode === 'inventorySync'
                  ? 'bg-indigo-950/40 border-indigo-500/80 shadow-md shadow-indigo-950'
                  : 'bg-slate-800/40 border-slate-700/60 hover:border-slate-600'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <Workflow className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-medium text-indigo-400 uppercase tracking-wide">
                    Pipeline
                  </span>
                </div>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                  Automation
                </span>
              </div>
              <div className="font-semibold text-white text-sm">Inventory & Catalog</div>
              <div className="text-[11px] text-slate-400 mt-1">Velocity & stock alerts</div>
            </button>

            {/* Node 4: Vector & State */}
            <button
              onClick={() => setSelectedNode('memory')}
              className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                selectedNode === 'memory'
                  ? 'bg-purple-950/40 border-purple-500/80 shadow-md shadow-purple-950'
                  : 'bg-slate-800/40 border-slate-700/60 hover:border-slate-600'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400">
                    <Database className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-medium text-purple-400 uppercase tracking-wide">
                    Storage
                  </span>
                </div>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                  RAG & ACID
                </span>
              </div>
              <div className="font-semibold text-white text-sm">Shared Memory & DB</div>
              <div className="text-[11px] text-slate-400 mt-1">Knowledge embeddings & state</div>
            </button>
          </div>

          {/* Central Orchestrator Bar */}
          <button
            onClick={() => setSelectedNode('orchestrator')}
            className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
              selectedNode === 'orchestrator'
                ? 'bg-gradient-to-r from-cyan-950/60 via-indigo-950/60 to-purple-950/60 border-cyan-400/90 shadow-lg shadow-indigo-950'
                : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 text-white">
                  <Cpu className="w-5 h-5 animate-spin-slow" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">Central Orchestration Layer</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-cyan-500/20 text-cyan-300">
                      Primary Hub
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Python • Event Dispatcher • Rate Limiting • Human Guardrails
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-1 text-cyan-400 text-xs font-mono">
                <span>Inspect</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </button>
        </div>

        {/* Selected Node Inspector Detail Card */}
        <div className="mt-4 pt-4 border-t border-slate-800 bg-slate-950/60 rounded-xl p-3.5 border border-slate-800/80">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-semibold text-white">{active.label}</span>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              {active.status}
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            {active.description}
          </p>
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800/50 text-[11px] font-mono text-slate-400">
            <span>Category: <strong className="text-slate-300">{active.category}</strong></span>
            <span className="text-cyan-400">{active.metric}</span>
          </div>
        </div>

        {/* Simulated Telemetry Log strip */}
        <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-400 px-2">
          <div className="flex items-center gap-2 truncate">
            <span className="text-cyan-400 font-bold">&gt;</span>
            <span className="text-slate-300">payload_in:</span>
            <span className="text-emerald-400">order_created</span>
            <span className="text-slate-400">#1084 • $184.50</span>
          </div>
          <span className="text-indigo-400 shrink-0">routed_in 38ms</span>
        </div>
      </div>
    </div>
  );
};

