import React, { useState } from 'react';
import Header from './components/Header';
import Terminal from './components/Terminal';
import { ShieldAlert, Key, Globe, X, CheckCircle2 } from 'lucide-react';
import { rawAgentJson } from './data/agentData';

export default function App() {
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [apiConfig, setApiConfig] = useState({
    geminiApiKey: '',
    tavilyApiKey: '',
    webhookUrl: `https://your-n8n-instance.com/webhook/${rawAgentJson.nodes[2].webhookId}`
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#080c14] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Sleek Minimal Header */}
      <Header 
        onOpenSettings={() => setShowSettingsModal(true)} 
        useLiveKeys={Boolean(apiConfig.geminiApiKey || apiConfig.tavilyApiKey)}
      />

      {/* Main Agent Interface Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Terminal 
          apiConfig={apiConfig}
          setApiConfig={setApiConfig}
          showSettingsModal={showSettingsModal}
          setShowSettingsModal={setShowSettingsModal}
        />
      </main>

      {/* Settings Modal (Configurable API Keys / Webhook) */}
      {showSettingsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="glass-panel w-full max-w-lg p-6 rounded-2xl border border-cyan-900/80 shadow-2xl space-y-5 relative">
            <button
              onClick={() => setShowSettingsModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-cyber-surface"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 pb-3 border-b border-cyber-border">
              <Key className="w-5 h-5 text-cyan-400" />
              <h3 className="text-base font-bold text-white">Agent API & Webhook Configuration</h3>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Scout works out-of-the-box using built-in real-time threat intelligence feeds. Optionally enter your own Gemini or Tavily keys or live n8n webhook URL below:
            </p>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-mono text-cyan-400 block mb-1">Google Gemini API Key (Optional)</label>
                <input
                  type="password"
                  value={apiConfig.geminiApiKey}
                  onChange={(e) => setApiConfig({ ...apiConfig, geminiApiKey: e.target.value })}
                  placeholder="AIzaSy..."
                  className="w-full bg-cyber-bg border border-cyber-border rounded-lg px-3 py-2 text-xs font-mono text-cyan-300 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-amber-400 block mb-1">Tavily Search API Key (Optional)</label>
                <input
                  type="password"
                  value={apiConfig.tavilyApiKey}
                  onChange={(e) => setApiConfig({ ...apiConfig, tavilyApiKey: e.target.value })}
                  placeholder="tvly-..."
                  className="w-full bg-cyber-bg border border-cyber-border rounded-lg px-3 py-2 text-xs font-mono text-amber-300 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-emerald-400 block mb-1">n8n Webhook URL Endpoint</label>
                <input
                  type="text"
                  value={apiConfig.webhookUrl}
                  onChange={(e) => setApiConfig({ ...apiConfig, webhookUrl: e.target.value })}
                  placeholder="https://n8n.yourdomain.com/webhook/..."
                  className="w-full bg-cyber-bg border border-cyber-border rounded-lg px-3 py-2 text-xs font-mono text-emerald-300 focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-cyber-border flex items-center justify-between">
              <span className="text-[11px] text-slate-400 font-mono">Changes save automatically</span>
              <button
                onClick={() => setShowSettingsModal(false)}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs cursor-pointer hover:from-cyan-400 hover:to-blue-500"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Simple Footer */}
      <footer className="glass-panel border-t border-cyber-border mt-12 py-5 bg-[#05080e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-cyan-400" />
            <span className="font-semibold text-slate-200">Threat Intelligence Scout</span>
            <span>• Autonomous Cybersecurity Agent</span>
          </div>

          <div className="flex items-center gap-3 font-mono text-[11px]">
            <span className="text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Real-time System Guardrails Active
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
}
