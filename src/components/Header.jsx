import React from 'react';
import { ShieldAlert, Activity, Settings2, Key, Globe, Sparkles } from 'lucide-react';

export default function Header({ onOpenSettings, useLiveKeys }) {
  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-cyber-border bg-[#080c14]/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        
        {/* Logo & Agent Branding */}
        <div className="flex items-center space-x-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/40 text-cyan-400 shadow-[0_0_15px_rgba(0,242,254,0.25)]">
            <ShieldAlert className="w-5 h-5 animate-pulse" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-base font-bold font-sans tracking-wide text-white flex items-center gap-2">
                THREAT INTELLIGENCE SCOUT
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                  REAL-TIME AGENT
                </span>
              </h1>
            </div>
            <p className="text-[11px] text-slate-400 flex items-center gap-1.5 mt-0.5">
              <Activity className="w-3 h-3 text-emerald-400" />
              <span>Autonomous SOC Agent</span>
              <span className="text-slate-600">•</span>
              <span className="text-cyan-400 font-mono">Google Gemini + Tavily Search</span>
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-800/80 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>AGENT READY</span>
          </div>

          <button
            onClick={onOpenSettings}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyber-surface hover:bg-cyber-card border border-cyber-border text-slate-300 hover:text-cyan-300 text-xs font-mono transition-all cursor-pointer"
            title="Configure API Keys or Webhook Endpoint"
          >
            <Settings2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>API / Webhook Settings</span>
          </button>
        </div>

      </div>
    </header>
  );
}
