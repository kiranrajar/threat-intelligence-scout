import React, { useState } from 'react';
import Header from './components/Header';
import NodeGraph from './components/NodeGraph';
import Terminal from './components/Terminal';
import Technicalities from './components/Technicalities';
import JsonViewer from './components/JsonViewer';
import DeploymentGuide from './components/DeploymentGuide';
import { ShieldAlert, Github, Globe, Terminal as TerminalIcon } from 'lucide-react';
import { rawAgentJson } from './data/agentData';

export default function App() {
  const [activeTab, setActiveTab] = useState('graph');

  return (
    <div className="min-h-screen flex flex-col bg-[#080c14] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Top Fixed Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'graph' && <NodeGraph />}
        {activeTab === 'terminal' && <Terminal />}
        {activeTab === 'tech' && <Technicalities />}
        {activeTab === 'json' && <JsonViewer />}
        {activeTab === 'deploy' && <DeploymentGuide />}
      </main>

      {/* Footer */}
      <footer className="glass-panel border-t border-cyber-border mt-12 py-6 bg-[#05080e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-cyan-400" />
            <span className="font-semibold text-slate-200">{rawAgentJson.name} GUI</span>
            <span>• n8n Autonomous Cyber Agent v3.1</span>
          </div>

          <div className="flex items-center gap-4 font-mono text-[11px]">
            <button 
              onClick={() => setActiveTab('json')} 
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              JSON Spec (129 Lines)
            </button>
            <span>•</span>
            <button 
              onClick={() => setActiveTab('deploy')} 
              className="hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-1"
            >
              <Globe className="w-3 h-3" /> Vercel & GitHub Ready
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}
