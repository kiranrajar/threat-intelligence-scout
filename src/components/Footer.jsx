import React from 'react';
import { ShieldAlert, Terminal, ArrowDownRight, Radio, Globe, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#05080E] border-t border-cyber-border pt-16 pb-8 text-xs font-mono text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Final CTA Banner */}
        <div className="steel-panel p-8 sm:p-12 border border-cyber-border chamfer bg-gradient-to-r from-[#0e1626] to-[#090A0F] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">+ READY TO SCOUT REAL-TIME THREATS? +</span>
            <h3 className="text-2xl sm:text-3xl font-serif text-white">Deploy precision cybersecurity threat intelligence today.</h3>
            <p className="text-xs text-slate-400 font-sans">Zero static knowledge cutoffs. Mandatory NVD and CISA telemetry verification.</p>
          </div>

          <a 
            href="#agent"
            className="px-6 py-3.5 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-slate-950 font-mono font-bold text-xs chamfer flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(6,182,212,0.35)] shrink-0 cursor-pointer"
          >
            <Terminal className="w-4 h-4" />
            <span>LAUNCH SCOUT CONSOLE</span>
            <ArrowDownRight className="w-4 h-4" />
          </a>
        </div>

        {/* Multi-Column Sitemap */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-6 border-t border-cyber-border/80">
          
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-white font-bold">
              <ShieldAlert className="w-4 h-4 text-cyan-400" />
              <span>THREAT SCOUT</span>
            </div>
            <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
              Precision-engineered developer security tool built on autonomous ReAct decision architecture and Google Gemini LLMs.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-cyan-400 font-bold block mb-1">MODULES</span>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="#agent" className="hover:text-white transition-colors">Threat Scanner</a></li>
              <li><a href="#matrix" className="hover:text-white transition-colors">ReAct Execution Engine</a></li>
              <li><a href="#coverage" className="hover:text-white transition-colors">Global Threat Matrix</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Deployment Tiers</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <span className="text-cyan-400 font-bold block mb-1">OFFICIAL ADVISORIES</span>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="https://nvd.nist.gov" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">NIST NVD <ExternalLink className="w-3 h-3 text-slate-500" /></a></li>
              <li><a href="https://www.cisa.gov/known-exploited-vulnerabilities-catalog" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">CISA KEV Catalog <ExternalLink className="w-3 h-3 text-slate-500" /></a></li>
              <li><a href="https://attack.mitre.org" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">MITRE ATT&CK Matrix <ExternalLink className="w-3 h-3 text-slate-500" /></a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <span className="text-cyan-400 font-bold block mb-1">GRID STATUS</span>
            <div className="p-3 bg-[#12151E] border border-cyber-border space-y-1">
              <div className="flex items-center gap-2 text-emerald-400 text-[11px]">
                <Radio className="w-3 h-3 animate-pulse" />
                <span>SYSTEM STATUS: OPERATIONAL</span>
              </div>
              <p className="text-[10px] text-slate-500">Threat Telemetry Feed: Active</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-cyber-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 Threat Intelligence Scout. Precision Dark Security SaaS.
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/kiranrajar/threat-intelligence-scout" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              <Globe className="w-3.5 h-3.5" /> GitHub Repository
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
