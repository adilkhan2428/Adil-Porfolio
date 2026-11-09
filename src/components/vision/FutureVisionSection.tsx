import React, { useState } from 'react';
import { 
  Store, 
  Workflow, 
  Cpu, 
  Bot, 
  Database, 
  ShieldCheck, 
  TrendingUp, 
  ArrowDown
} from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { futureVisionArchitecture } from '../../data/portfolioData';

export const FutureVisionSection: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<number>(4); // default to multi-agents

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <Container>
        <SectionHeader
          badge="Long-Term Vision & Architecture"
          title={futureVisionArchitecture.heading}
          subtitle={futureVisionArchitecture.subheading}
          centered
        />

        {/* Narrative Box */}
        <div className="max-w-3xl mx-auto mb-12 text-center text-slate-300 text-sm sm:text-base leading-relaxed p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
          <p>
            Traditional e-commerce automation relies on brittle, point-to-point scripts that break when edge cases arise. My long-term engineering vision is to build <strong className="text-white">autonomous agentic ecosystems</strong>—where specialized AI agents collaborate across order triage, inventory forecasting, catalog intelligence, and customer inquiries, bounded by <span className="text-cyan-400">cryptographic security, shared memory, and human-in-the-loop oversight</span>.
          </p>
        </div>

        {/* Vertical Interactive Flow Architecture Diagram */}
        <div className="max-w-4xl mx-auto space-y-3 relative">
          
          {/* Level 1: Shopify Store */}
          <div 
            onClick={() => setSelectedTier(1)}
            className={`p-5 rounded-2xl border transition-all cursor-pointer ${
              selectedTier === 1 
                ? 'bg-slate-900 border-emerald-500/80 shadow-lg shadow-emerald-950/40' 
                : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Store className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-emerald-400">TIER 01</span>
                    <h4 className="text-base font-bold text-white">Shopify Store & Sales Channels</h4>
                  </div>
                  <p className="text-xs text-slate-400">Event Producer: Orders, checkouts, refunds, catalog changes</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Shopify Admin', 'Checkout API', 'Webhooks'].map(item => (
                  <span key={item} className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Flow Connector Arrow */}
          <div className="flex justify-center text-slate-600 py-0.5">
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>

          {/* Level 2: Ingress & Security */}
          <div 
            onClick={() => setSelectedTier(2)}
            className={`p-5 rounded-2xl border transition-all cursor-pointer ${
              selectedTier === 2 
                ? 'bg-slate-900 border-cyan-500/80 shadow-lg shadow-cyan-950/40' 
                : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Workflow className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-cyan-400">TIER 02</span>
                    <h4 className="text-base font-bold text-white">APIs & Webhooks Ingress</h4>
                  </div>
                  <p className="text-xs text-slate-400">HMAC verification, rate-limiting buffer, idempotency guards</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['FastAPI Gateway', 'HMAC SHA256', 'Redis Buffer'].map(item => (
                  <span key={item} className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Flow Connector Arrow */}
          <div className="flex justify-center text-slate-600 py-0.5">
            <ArrowDown className="w-4 h-4" />
          </div>

          {/* Level 3: Central Orchestrator */}
          <div 
            onClick={() => setSelectedTier(3)}
            className={`p-5 rounded-2xl border transition-all cursor-pointer ${
              selectedTier === 3 
                ? 'bg-slate-900 border-indigo-500/80 shadow-lg shadow-indigo-950/40' 
                : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-indigo-400">TIER 03</span>
                    <h4 className="text-base font-bold text-white">Central Orchestration Layer</h4>
                  </div>
                  <p className="text-xs text-slate-400">Event router, task scheduler, state coordination, and token budgets</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['LangGraph', 'Task Router', 'State Machine'].map(item => (
                  <span key={item} className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Flow Connector Arrow */}
          <div className="flex justify-center text-slate-600 py-0.5">
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>

          {/* Level 4: Specialized AI Agents Multi-Box (FEATURED TIER) */}
          <div 
            onClick={() => setSelectedTier(4)}
            className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${
              selectedTier === 4 
                ? 'bg-slate-900/90 border-cyan-400 shadow-2xl shadow-cyan-950/50' 
                : 'bg-slate-900/60 border-indigo-500/40'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-cyan-400">TIER 04 • CORE REASONING</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                      Multi-Agent Coordination
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white">Specialized AI Agents Network</h4>
                </div>
              </div>
              <span className="hidden sm:inline-block text-xs font-mono text-slate-400">
                5 Domain Agents
              </span>
            </div>

            {/* 5 Specialized Agent Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-left">
                <div className="text-xs font-bold text-cyan-400 mb-1">Customer Support Agent</div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Resolves order status, FAQs, returns triage, and customer inquiries.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-left">
                <div className="text-xs font-bold text-emerald-400 mb-1">Order Management Agent</div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Validates line items, flags fraud indicators, and coordinates fulfillment.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-left">
                <div className="text-xs font-bold text-indigo-400 mb-1">Inventory Agent</div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Tracks velocity, calculates restock alerts, and prevents store stockouts.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-left">
                <div className="text-xs font-bold text-amber-400 mb-1">Marketing Agent</div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  RFM segmentation, abandoned carts recovery, and personalized product recommendations.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-left">
                <div className="text-xs font-bold text-purple-400 mb-1">Analytics Agent</div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Daily revenue briefing, returns root causes, and executive KPI summaries.
                </p>
              </div>
            </div>
          </div>

          {/* Flow Connector Arrow */}
          <div className="flex justify-center text-slate-600 py-0.5">
            <ArrowDown className="w-4 h-4" />
          </div>

          {/* Level 5: Shared DB & Memory */}
          <div 
            onClick={() => setSelectedTier(5)}
            className={`p-5 rounded-2xl border transition-all cursor-pointer ${
              selectedTier === 5 
                ? 'bg-slate-900 border-purple-500/80 shadow-lg shadow-purple-950/40' 
                : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-purple-400">TIER 05</span>
                    <h4 className="text-base font-bold text-white">Shared Database & Memory Layer</h4>
                  </div>
                  <p className="text-xs text-slate-400">Structured transactional database + vector embeddings store</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['PostgreSQL', 'pgvector / Chroma', 'Redis Cache'].map(item => (
                  <span key={item} className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Flow Connector Arrow */}
          <div className="flex justify-center text-slate-600 py-0.5">
            <ArrowDown className="w-4 h-4" />
          </div>

          {/* Level 6: Human Approval & Governance */}
          <div 
            onClick={() => setSelectedTier(6)}
            className={`p-5 rounded-2xl border transition-all cursor-pointer ${
              selectedTier === 6 
                ? 'bg-slate-900 border-amber-500/80 shadow-lg shadow-amber-950/40' 
                : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-amber-400">TIER 06</span>
                    <h4 className="text-base font-bold text-white">Monitoring, Evaluation & Human Approval</h4>
                  </div>
                  <p className="text-xs text-slate-400">Merchant one-click approval on high-value refunds, fraud reviews, audit logs</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Human Checkpoint', 'OpenTelemetry', 'Guardrails'].map(item => (
                  <span key={item} className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Flow Connector Arrow */}
          <div className="flex justify-center text-slate-600 py-0.5">
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>

          {/* Level 7: Business Outcomes */}
          <div 
            onClick={() => setSelectedTier(7)}
            className={`p-5 rounded-2xl border transition-all cursor-pointer ${
              selectedTier === 7 
                ? 'bg-gradient-to-r from-emerald-950/40 to-cyan-950/40 border-emerald-400 shadow-xl shadow-emerald-950/30' 
                : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-emerald-400">TIER 07 • OBJECTIVE</span>
                    <h4 className="text-base font-bold text-white">Measurable Business Outcomes</h4>
                  </div>
                  <p className="text-xs text-slate-400">Faster resolution times, zero dropped orders, lower operational overhead</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['High GMV Scale', '99.9% Uptime', 'Satisfied Merchants'].map(item => (
                  <span key={item} className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
};
