import React from 'react';
import { 
  BookOpen, 
  ShieldCheck, 
  Cpu, 
  Search, 
  Brain, 
  Workflow, 
  FileCode, 
  Lock, 
  Zap, 
  CheckCircle,
  GitBranch,
  Layers,
  Terminal,
  Settings
} from 'lucide-react';
import { agentMetadata, rawAgentJson } from '../data/agentData';

export default function Technicalities() {
  const agentNode = rawAgentJson.nodes.find(n => n.name === "AI Agent");
  const systemMessage = agentNode?.parameters?.options?.systemMessage;

  return (
    <div className="space-y-6">
      {/* Intro Box */}
      <div className="glass-panel p-6 rounded-2xl border border-cyber-border">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              Technical Specifications & Agent Architecture
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Deep dive into the underlying n8n LangChain ReAct architecture, system message guardrails, tool schemas, and LLM configuration defined in <span className="text-cyan-300 font-mono">Threat intelligence Scout.json</span>.
            </p>
          </div>
          <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-cyan-950 text-cyan-300 border border-cyan-800 self-start md:self-auto">
            LangChain ReAct v3.1
          </span>
        </div>
      </div>

      {/* Grid Specs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="glass-panel p-4 rounded-xl border border-cyber-border">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              <Workflow className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-slate-400">ORCHESTRATION</div>
              <div className="text-sm font-bold text-white">n8n LangChain Agent</div>
            </div>
          </div>
          <div className="mt-3 text-xs text-slate-300 font-mono">Node v3.1 (LangChain Agent)</div>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-cyber-border">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400 border border-purple-500/30">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-slate-400">LLM MODEL</div>
              <div className="text-sm font-bold text-white">Google Gemini Chat</div>
            </div>
          </div>
          <div className="mt-3 text-xs text-slate-300 font-mono">Type v1.1 (PaLM/Gemini API)</div>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-cyber-border">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-slate-400">SEARCH INTEGRATION</div>
              <div className="text-sm font-bold text-white">Tavily AI Search Tool</div>
            </div>
          </div>
          <div className="mt-3 text-xs text-slate-300 font-mono">Dynamic $fromAI Binding</div>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-cyber-border">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-slate-400">GUARDRAIL STATUS</div>
              <div className="text-sm font-bold text-white">Mandatory Web Search</div>
            </div>
          </div>
          <div className="mt-3 text-xs text-emerald-400 font-mono">Zero Hallucination Policy</div>
        </div>

      </div>

      {/* Deep Dive Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Card 1: System Message Guardrails (7 Cols) */}
        <div className="lg:col-span-7 glass-panel p-6 rounded-2xl border border-cyber-border space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-cyber-border">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <h3 className="text-base font-bold text-white">System Guardrail & Anti-Hallucination Directive</h3>
            </div>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
              systemMessage
            </span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            The agent is programmed with a strict system message rule inside the AI Agent node parameters. This prevents the LLM from relying on static memory for real-time cybersecurity information:
          </p>

          <pre className="p-4 rounded-xl bg-cyber-bg text-cyan-300 text-xs font-mono leading-relaxed border border-cyan-900/80 overflow-x-auto whitespace-pre-wrap">
            {systemMessage}
          </pre>

          <div className="p-4 rounded-xl bg-cyber-surface border border-cyber-border space-y-2">
            <div className="text-xs font-bold text-white flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-cyan-400" />
              Why This Technical Design Matters:
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
              <li><strong>Prevents Outdated Vulnerability Data</strong>: LLM static knowledge cutoffs miss zero-day exploits occurring today.</li>
              <li><strong>Enforces Tool Execution Protocol</strong>: The agent will NOT output a final response until the Tavily tool yields live web search telemetry.</li>
              <li><strong>Standardized Report Format</strong>: Enforces structured threat intelligence summaries containing CVSS, CVEs, and actionable steps.</li>
            </ul>
          </div>
        </div>

        {/* Card 2: Technical Parameters & Credentials (5 Cols) */}
        <div className="lg:col-span-5 glass-panel p-6 rounded-2xl border border-cyber-border space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-cyber-border">
            <Settings className="w-5 h-5 text-purple-400" />
            <h3 className="text-base font-bold text-white">n8n Execution Schema & Credentials</h3>
          </div>

          <div className="space-y-3 text-xs">
            
            <div className="p-3 rounded-lg bg-cyber-surface border border-cyber-border">
              <span className="text-slate-400 font-mono block text-[10px]">WORKFLOW VERSION & ID</span>
              <div className="font-mono text-cyan-300 mt-0.5">ID: {rawAgentJson.id}</div>
              <div className="font-mono text-slate-400 text-[11px]">Version ID: {rawAgentJson.versionId}</div>
            </div>

            <div className="p-3 rounded-lg bg-cyber-surface border border-cyber-border">
              <span className="text-slate-400 font-mono block text-[10px]">EXECUTION SETTINGS</span>
              <div className="font-mono text-slate-200 mt-1 space-y-1">
                <div>executionOrder: <span className="text-cyan-400">"{rawAgentJson.settings.executionOrder}"</span></div>
                <div>binaryMode: <span className="text-cyan-400">"{rawAgentJson.settings.binaryMode}"</span></div>
                <div>callerPolicy: <span className="text-cyan-400">"{rawAgentJson.settings.callerPolicy}"</span></div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-cyber-surface border border-cyber-border">
              <span className="text-slate-400 font-mono block text-[10px]">CREDENTIAL ACCOUNT MAPPINGS</span>
              <div className="font-mono text-amber-300 mt-1 space-y-1.5">
                <div className="p-2 rounded bg-cyber-bg border border-cyber-border">
                  <div className="text-white font-semibold">Google Gemini Account</div>
                  <div className="text-[11px] text-slate-400">ID: L7UqRj5gCeQsq1Uf</div>
                </div>
                <div className="p-2 rounded bg-cyber-bg border border-cyber-border">
                  <div className="text-white font-semibold">Tavily Search Account</div>
                  <div className="text-[11px] text-slate-400">ID: tqU54JkhfGbEI8X0</div>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-cyber-surface border border-cyber-border">
              <span className="text-slate-400 font-mono block text-[10px]">CHAT TRIGGER WEBHOOK</span>
              <div className="font-mono text-emerald-400 mt-0.5 break-all">
                {rawAgentJson.nodes[2].webhookId}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
