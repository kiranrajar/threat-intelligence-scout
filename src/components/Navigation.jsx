import React, { useState } from 'react';
import { ShieldAlert, ChevronDown, Radio, Terminal, Cpu, Lock } from 'lucide-react';

export default function Navigation() {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 steel-panel border-b border-cyber-border bg-[#090A0F]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <a href="#hero" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 rounded-none bg-[#12151E] border border-cyan-500/50 flex items-center justify-center text-cyan-400 chamfer group-hover:border-cyan-400 transition-colors shadow-[0_0_12px_rgba(6,182,212,0.2)]">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-bold tracking-wider font-mono text-white flex items-center gap-1.5">
                THREAT SCOUT <span className="text-[10px] text-cyan-400 border border-cyan-900 bg-cyan-950/80 px-1.5 py-0.2 font-mono">[v3.1]</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400 block -mt-0.5">DEVSEC threat telemetry</span>
            </div>
          </a>

          {/* Links */}
          <nav className="hidden md:flex items-center space-x-6 text-xs font-mono text-slate-300">
            <div className="relative">
              <button 
                onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                className="flex items-center gap-1 hover:text-cyan-400 transition-colors py-2 cursor-pointer"
              >
                <span>MODULES</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${megaMenuOpen ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>

              {megaMenuOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 p-4 steel-panel rounded-none border border-cyber-border space-y-3 chamfer shadow-2xl z-50 animate-fadeIn">
                  <a href="#agent" onClick={() => setMegaMenuOpen(false)} className="flex items-start gap-3 p-2 hover:bg-cyber-surface border border-transparent hover:border-cyber-border transition-colors">
                    <Terminal className="w-4 h-4 text-cyan-400 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white">Threat Scout Console</div>
                      <div className="text-[11px] text-slate-400 font-sans">Real-time CVE & vulnerability scanner</div>
                    </div>
                  </a>
                  <a href="#matrix" onClick={() => setMegaMenuOpen(false)} className="flex items-start gap-3 p-2 hover:bg-cyber-surface border border-transparent hover:border-cyber-border transition-colors">
                    <Cpu className="w-4 h-4 text-purple-400 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white">LangChain ReAct Engine</div>
                      <div className="text-[11px] text-slate-400 font-sans">Autonomous decision pipeline</div>
                    </div>
                  </a>
                  <a href="#coverage" onClick={() => setMegaMenuOpen(false)} className="flex items-start gap-3 p-2 hover:bg-cyber-surface border border-transparent hover:border-cyber-border transition-colors">
                    <Lock className="w-4 h-4 text-emerald-400 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white">NVD & CISA Feeds</div>
                      <div className="text-[11px] text-slate-400 font-sans">Direct link advisory verification</div>
                    </div>
                  </a>
                </div>
              )}
            </div>

            <a href="#matrix" className="hover:text-cyan-400 transition-colors">FEATURES</a>
            <a href="#coverage" className="hover:text-cyan-400 transition-colors">THREAT MATRIX</a>
            <a href="#pricing" className="hover:text-cyan-400 transition-colors">PRICING</a>
            <a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a>
          </nav>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-none bg-emerald-950/60 border border-emerald-800 text-emerald-400 text-[11px] font-mono">
            <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
            <span>SOC GRID ONLINE</span>
          </div>

          <a 
            href="#agent"
            className="px-4 py-2 text-xs font-mono font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 chamfer shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all cursor-pointer"
          >
            [ RUN AGENT ]
          </a>
        </div>

      </div>
    </header>
  );
}
