import React, { useState } from 'react';
import { 
  Bot, 
  Brain, 
  MessageSquareCode, 
  Search, 
  ArrowRight, 
  ShieldAlert, 
  Check, 
  Zap,
  Maximize2,
  Lock,
  Layers,
  Settings,
  Terminal,
  Cpu
} from 'lucide-react';
import { nodesDetailList, rawAgentJson } from '../data/agentData';

export default function NodeGraph() {
  const [selectedNodeId, setSelectedNodeId] = useState(nodesDetailList[1].id);

  const selectedNode = nodesDetailList.find(n => n.id === selectedNodeId) || nodesDetailList[1];
  const rawNodeJson = rawAgentJson.nodes.find(n => n.id === selectedNodeId);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'MessageSquareCode': return MessageSquareCode;
      case 'Bot': return Bot;
      case 'Brain': return Brain;
      case 'Search': return Search;
      default: return Cpu;
    }
  };

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="glass-panel p-6 rounded-2xl border border-cyber-border">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-400" />
              Agent Workflow & Node Connection Topology
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Visualizing the 4 interconnected LangChain & n8n nodes defining the <span className="text-cyan-300 font-medium">Threat Intelligence Scout</span> pipeline. Click any node to inspect its execution parameters.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono bg-cyber-bg px-3 py-2 rounded-lg border border-cyber-border text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>n8n Workflow Execution Schema: v1</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Interactive Canvas + Detail Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Node Graph Canvas (8 Cols) */}
        <div className="lg:col-span-7 glass-panel p-6 rounded-2xl border border-cyber-border min-h-[520px] flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-[#0e1626] to-[#080c14]">
          
          {/* Canvas Background Grid effect */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00f2fe_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

          {/* Top Canvas Toolbar */}
          <div className="flex items-center justify-between z-10 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-800">
                Interactive n8n Graph
              </span>
              <span className="text-xs text-slate-400">4 Active Nodes</span>
            </div>
            <div className="text-xs text-slate-500 font-mono">
              Instance ID: {rawAgentJson.meta.instanceId.slice(0, 12)}...
            </div>
          </div>

          {/* Node Diagram Architecture */}
          <div className="relative z-10 my-auto py-8 space-y-10">
            
            {/* Row 1: Chat Trigger Node */}
            <div className="flex justify-center">
              <div 
                onClick={() => setSelectedNodeId("2f494b8c-8e11-491c-943b-c134eca1d8ca")}
                className={`group relative cursor-pointer w-full max-w-sm p-4 rounded-xl transition-all border ${
                  selectedNodeId === "2f494b8c-8e11-491c-943b-c134eca1d8ca"
                    ? 'bg-emerald-950/40 border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                    : 'bg-cyber-surface/90 hover:bg-cyber-card border-emerald-900/60 hover:border-emerald-500'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      <MessageSquareCode className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-emerald-400">TRIGGER NODE</div>
                      <div className="text-sm font-semibold text-white">When chat message received</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                    v1.4
                  </span>
                </div>
                <div className="mt-2 pt-2 border-t border-emerald-900/40 flex items-center justify-between text-xs text-slate-400">
                  <span>Input: chatInput</span>
                  <span className="font-mono text-[11px] text-emerald-300">Public Webhook</span>
                </div>
              </div>
            </div>

            {/* Connection Line with Flow Animation down to Agent */}
            <div className="flex justify-center -my-4 relative">
              <div className="w-0.5 h-10 bg-gradient-to-b from-emerald-500 via-cyan-500 to-cyan-400 relative">
                <div className="absolute top-1/2 -left-1 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></div>
              </div>
            </div>

            {/* Row 2: Central AI Agent Node */}
            <div className="flex justify-center">
              <div 
                onClick={() => setSelectedNodeId("73c8403e-6862-453c-a5d2-a965b1b92860")}
                className={`group relative cursor-pointer w-full max-w-md p-5 rounded-xl transition-all border ${
                  selectedNodeId === "73c8403e-6862-453c-a5d2-a965b1b92860"
                    ? 'bg-cyan-950/60 border-cyan-400 shadow-[0_0_30px_rgba(0,242,254,0.4)] glow-cyan-border'
                    : 'bg-cyber-surface/90 hover:bg-cyber-card border-cyan-800/60 hover:border-cyan-400'
                }`}
              >
                <div className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-cyan-500 text-slate-950 font-bold text-[10px] tracking-wider uppercase shadow">
                  Central Orchestrator
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 animate-pulse">
                      <Bot className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-cyan-400">LANGCHAIN REACT AGENT</div>
                      <div className="text-base font-bold text-white">AI Agent</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                    v3.1
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-3 bg-cyber-bg/80 p-2.5 rounded border border-cyan-900/50">
                  <span className="text-cyan-400 font-semibold">Guardrail Rule:</span> Enforces Tavily search BEFORE answering cyber threat queries.
                </p>
              </div>
            </div>

            {/* Connection Lines Branching out to Models & Tools */}
            <div className="flex justify-center -my-4 relative">
              <div className="w-0.5 h-10 bg-gradient-to-b from-cyan-400 to-purple-500"></div>
            </div>

            {/* Row 3: Sub-nodes (LLM Model & Tavily Search Tool) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Gemini Chat Model Node */}
              <div 
                onClick={() => setSelectedNodeId("200e1dfb-af8d-4efd-a32e-ae27c3b693c1")}
                className={`group cursor-pointer p-4 rounded-xl transition-all border ${
                  selectedNodeId === "200e1dfb-af8d-4efd-a32e-ae27c3b693c1"
                    ? 'bg-purple-950/50 border-purple-400 shadow-[0_0_20px_rgba(157,78,221,0.3)]'
                    : 'bg-cyber-surface/90 hover:bg-cyber-card border-purple-900/60 hover:border-purple-400'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-purple-500/20 text-purple-400 border border-purple-500/30">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-purple-400">LLM PROVIDER</div>
                    <div className="text-xs font-semibold text-white">Google Gemini Chat Model</div>
                  </div>
                </div>
                <div className="mt-2 text-[11px] text-purple-300 font-mono">
                  Input: ai_languageModel
                </div>
              </div>

              {/* Tavily Tool Node */}
              <div 
                onClick={() => setSelectedNodeId("91539598-a844-4ae3-9a45-da992face3e3")}
                className={`group cursor-pointer p-4 rounded-xl transition-all border ${
                  selectedNodeId === "91539598-a844-4ae3-9a45-da992face3e3"
                    ? 'bg-amber-950/50 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.3)]'
                    : 'bg-cyber-surface/90 hover:bg-cyber-card border-amber-900/60 hover:border-amber-400'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    <Search className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-amber-400">EXTERNAL TOOL</div>
                    <div className="text-xs font-semibold text-white">Search in Tavily</div>
                  </div>
                </div>
                <div className="mt-2 text-[11px] text-amber-300 font-mono">
                  Input: ai_tool ($fromAI)
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Info Bar */}
          <div className="z-10 pt-4 border-t border-cyber-border flex items-center justify-between text-xs text-slate-400">
            <span>Click any node card above to inspect its configuration schema</span>
            <span className="text-cyan-400 font-mono">n8n Position Data Active</span>
          </div>

        </div>

        {/* Node Inspector Side Panel (5 Cols) */}
        <div className="lg:col-span-5 glass-panel p-6 rounded-2xl border border-cyber-border space-y-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-cyber-border">
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-cyan-400" />
                <h3 className="text-base font-bold text-white">Node Parameter Inspector</h3>
              </div>
              <span 
                className="px-2.5 py-1 rounded text-xs font-mono font-semibold"
                style={{ backgroundColor: `${selectedNode.color}20`, color: selectedNode.color, border: `1px solid ${selectedNode.color}50` }}
              >
                {selectedNode.category}
              </span>
            </div>

            {/* Selected Node Details */}
            <div className="mt-5 space-y-4">
              <div>
                <label className="text-xs text-slate-400 font-mono">NODE NAME & ID</label>
                <div className="text-lg font-bold text-white mt-0.5">{selectedNode.name}</div>
                <div className="text-xs font-mono text-slate-500 mt-1 select-all bg-cyber-bg p-1.5 rounded border border-cyber-border">
                  ID: {selectedNode.id}
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-400 font-mono">n8n NODE TYPE & VERSION</label>
                <div className="text-xs font-mono text-cyan-300 bg-cyan-950/60 p-2 rounded border border-cyan-800 mt-1">
                  {selectedNode.type} (v{rawNodeJson?.typeVersion || '1.0'})
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-400 font-mono">FUNCTION & RESPONSIBILITY</label>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed bg-cyber-surface p-3 rounded-lg border border-cyber-border">
                  {selectedNode.description}
                </p>
              </div>

              {/* Node Credentials if present */}
              {rawNodeJson?.credentials && (
                <div>
                  <label className="text-xs text-slate-400 font-mono flex items-center gap-1">
                    <Lock className="w-3 h-3 text-amber-400" />
                    CONFIGURED CREDENTIALS
                  </label>
                  <div className="mt-1 p-2.5 rounded bg-amber-950/30 border border-amber-800/60 text-xs font-mono text-amber-300">
                    {Object.keys(rawNodeJson.credentials).map(key => (
                      <div key={key}>
                        <div>Account ID: {rawNodeJson.credentials[key].id}</div>
                        <div>Name: {rawNodeJson.credentials[key].name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* System Prompt Rule if selected is AI Agent */}
              {selectedNode.name === "AI Agent" && (
                <div>
                  <label className="text-xs text-slate-400 font-mono flex items-center gap-1">
                    <ShieldAlert className="w-3.5 h-3.5 text-cyan-400" />
                    SYSTEM GUARDRAIL PROMPT
                  </label>
                  <pre className="mt-1 p-3 rounded-lg bg-cyber-bg text-cyan-300 text-[11px] font-mono leading-relaxed overflow-x-auto border border-cyan-900/80 max-h-48 scrollbar-thin">
                    {rawNodeJson?.parameters?.options?.systemMessage}
                  </pre>
                </div>
              )}

              {/* Search Binding if selected is Tavily Tool */}
              {selectedNode.name === "Search in Tavily" && (
                <div>
                  <label className="text-xs text-slate-400 font-mono">DYNAMIC SEARCH BINDING</label>
                  <div className="mt-1 p-2.5 rounded bg-amber-950/40 text-amber-300 text-xs font-mono border border-amber-800">
                    query = {rawNodeJson?.parameters?.query}
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Canvas Position Coordinates */}
          <div className="pt-4 border-t border-cyber-border flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>n8n Position Canvas Coordinates:</span>
            <span className="text-slate-200">[{rawNodeJson?.position[0]}, {rawNodeJson?.position[1]}]</span>
          </div>

        </div>

      </div>
    </div>
  );
}
