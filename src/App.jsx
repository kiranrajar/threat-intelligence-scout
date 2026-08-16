import React from 'react';
import Header from './components/Header';
import Terminal from './components/Terminal';
import Strands from './components/Strands';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#080c14] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden">
      
      {/* React Bits: Strands Ambient Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
        <Strands
          colors={["#00F2FE", "#7928CA", "#10B981", "#FF9900"]}
          count={3}
          speed={0.4}
          amplitude={0.9}
          waviness={1.2}
          thickness={0.6}
          glow={2.2}
          taper={2.8}
          spread={1.2}
          intensity={0.5}
          saturation={1.4}
          opacity={0.5}
          scale={1.3}
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Sleek Minimal Header */}
        <Header />

        {/* Main Agent Interface Area */}
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Terminal />
        </main>

        {/* Simple Clean Footer */}
        <footer className="glass-panel border-t border-cyber-border mt-12 py-5 bg-[#05080e]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-cyan-400" />
              <span className="font-semibold text-slate-200">Threat Intelligence Scout</span>
              <span>• Real-Time Threat Analysis System</span>
            </div>

            <div className="flex items-center gap-3 font-mono text-[11px]">
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Direct Advisory Verification & Link Telemetry
              </span>
            </div>
          </div>
        </footer>
      </div>

    </div>
  );
}
