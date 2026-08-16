import React from 'react';
import { 
  ShieldAlert, 
  Workflow, 
  Terminal, 
  BookOpen, 
  Code, 
  UploadCloud, 
  Download,
  Activity,
  CheckCircle2
} from 'lucide-react';
import { agentMetadata, rawAgentJson } from '../data/agentData';

export default function Header({ activeTab, setActiveTab }) {
  const downloadJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(rawAgentJson, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "Threat intelligence Scout.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const navItems = [
    { id: 'graph', label: 'Node Architecture', icon: Workflow },
    { id: 'terminal', label: 'SOC Intelligence Terminal', icon: Terminal },
    { id: 'tech', label: 'Technicalities & Specs', icon: BookOpen },
    { id: 'json', label: 'Raw JSON Spec', icon: Code },
    { id: 'deploy', label: 'GitHub & Vercel Deploy', icon: UploadCloud }
  ];

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-cyber-border bg-[#080c14]/90 backdrop-blur-md">
      {/* Top Banner Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Logo & Title */}
        <div className="flex items-center space-x-3">
          <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/40 text-cyber-accent shadow-[0_0_15px_rgba(0,242,254,0.3)]">
            <ShieldAlert className="w-6 h-6 animate-pulse" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-lg font-bold font-sans tracking-wide text-white flex items-center gap-2">
                THREAT INTELLIGENCE SCOUT
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                  AGENT v3.1
                </span>
              </h1>
            </div>
            <p className="text-xs text-slate-400 flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              <span>n8n Autonomous LangChain ReAct Engine</span>
              <span className="text-slate-600">•</span>
              <span className="text-cyan-400 font-mono">Tavily + Google Gemini</span>
            </p>
          </div>
        </div>

        {/* Status Indicators & Quick Actions */}
        <div className="flex items-center gap-3">
          {/* Active Status Badge */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-800/80 text-emerald-400 text-xs font-mono">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>WORKFLOW ACTIVE</span>
          </div>

          {/* Download JSON Button */}
          <button 
            onClick={downloadJson}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyber-surface hover:bg-cyber-card border border-cyber-border text-slate-300 hover:text-cyan-400 text-xs font-medium transition-all shadow-sm"
            title="Download original Threat intelligence Scout.json workflow file"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export JSON</span>
          </button>

          {/* Quick Deploy Button */}
          <button
            onClick={() => setActiveTab('deploy')}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-xs transition-all shadow-[0_0_15px_rgba(0,242,254,0.3)] cursor-pointer"
          >
            <UploadCloud className="w-4 h-4" />
            <span>Deploy Guide</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-cyber-border/60">
        <nav className="flex space-x-1 sm:space-x-4 overflow-x-auto py-2 scrollbar-none">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                  isActive 
                    ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/50 shadow-[0_0_12px_rgba(0,242,254,0.2)]' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-cyber-surface/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
