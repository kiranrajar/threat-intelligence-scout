import React from 'react';
import { Shield, Lock, Server, Cpu, Activity, Terminal } from 'lucide-react';

export default function TrustWall() {
  const partners = [
    { name: "CISA KEV CATALOG", icon: Shield, code: "FED-GOV-01" },
    { name: "NIST NVD DATABASE", icon: Server, code: "NVD-API-v2" },
    { name: "MITRE ATT&CK MATRIX", icon: Cpu, code: "ATT&CK-v14" },
    { name: "TAVILY WEB SEARCH", icon: Activity, code: "SEARCH-AI" },
    { name: "LANGCHAIN REACT", icon: Terminal, code: "AGENT-v3.1" },
    { name: "GOOGLE GEMINI PA LM", icon: Lock, code: "LLM-MODAL" }
  ];

  return (
    <section className="py-12 border-y border-cyber-border bg-[#0B0E17]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-6">
          <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest">
            + INTEGRATED THREAT TELEMETRY & ADVISORY FEEDS +
          </span>
        </div>

        {/* Grid separated by thin steel borders with + crosshairs */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-l border-cyber-border">
          {partners.map((partner, idx) => {
            const Icon = partner.icon;
            return (
              <div 
                key={idx}
                className="relative p-6 border-r border-b border-cyber-border flex flex-col items-center justify-center text-center space-y-2 hover:bg-[#12151E] transition-colors group cursor-default"
              >
                {/* Corner Plus (+) Crosshairs */}
                <span className="absolute -top-2 -left-2 font-mono text-cyan-500 text-[10px] opacity-40 group-hover:opacity-100 transition-opacity">+</span>
                <span className="absolute -top-2 -right-2 font-mono text-cyan-500 text-[10px] opacity-40 group-hover:opacity-100 transition-opacity">+</span>
                <span className="absolute -bottom-2 -left-2 font-mono text-cyan-500 text-[10px] opacity-40 group-hover:opacity-100 transition-opacity">+</span>
                <span className="absolute -bottom-2 -right-2 font-mono text-cyan-500 text-[10px] opacity-40 group-hover:opacity-100 transition-opacity">+</span>

                <Icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                <span className="text-xs font-mono font-bold text-slate-200 group-hover:text-white transition-colors">
                  {partner.name}
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  {partner.code}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
