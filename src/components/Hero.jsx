import React from 'react';
import { ShieldAlert, ArrowDownRight, Terminal as TerminalIcon, Zap, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-12 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top ASCII Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#12151E] border border-cyber-border text-cyan-400 text-xs font-mono mb-6 chamfer">
          <span className="text-emerald-400 font-bold">+</span>
          <span>AUTONOMOUS THREAT TELEMETRY SYSTEM</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">ZERO HALLUCINATION GUARDRAILS</span>
        </div>

        {/* Hero Title & Editorial Serif Headline */}
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-tight tracking-tight">
            Precision-engineered <span className="italic font-normal text-cyan-400">threat intelligence scouting</span> for modern security operations.
          </h1>
          
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl font-sans leading-relaxed">
            Eliminate static knowledge cutoffs and outdated vulnerability advisories. Threat Intelligence Scout autonomously verifies zero-days, parses NVD/CISA advisories, and generates real-time IOC mitigation briefings.
          </p>

          {/* Chamfer CTA Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a 
              href="#agent"
              className="px-6 py-3.5 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-slate-950 font-mono font-bold text-sm chamfer-lg flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(6,182,212,0.35)] cursor-pointer"
            >
              <TerminalIcon className="w-4 h-4" />
              <span>LAUNCH SCOUT CONSOLE</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>

            <a 
              href="#coverage"
              className="px-6 py-3.5 bg-cyber-surface hover:bg-cyber-card text-slate-200 border border-cyber-border hover:border-cyan-500/50 font-mono text-sm chamfer-lg flex items-center gap-2 transition-all cursor-pointer"
            >
              <Globe className="w-4 h-4 text-cyan-400" />
              <span>EXPLORE GLOBAL MATRIX</span>
            </a>
          </div>
        </div>

        {/* Technical Status Strip */}
        <div className="mt-12 pt-6 border-t border-cyber-border/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-cyan-400 font-bold">[+]</span>
            <span>MODEL: GOOGLE GEMINI PA LM</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">[+]</span>
            <span>SEARCH: REAL-TIME WEB API</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-purple-400 font-bold">[+]</span>
            <span>FEEDS: NIST NVD & CISA KEV</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-bold">[+]</span>
            <span>LATENCY: &lt; 120MS REACT</span>
          </div>
        </div>

      </div>
    </section>
  );
}
