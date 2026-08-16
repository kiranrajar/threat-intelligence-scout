import React from 'react';
import { ShieldAlert, Globe, Server, AlertOctagon, Terminal } from 'lucide-react';

export default function CoverageMatrix() {
  const threatCategories = [
    { title: "Ransomware Campaigns", code: "CAT-01", count: "1,420 Active", severity: "CRITICAL", vector: "Edge VPN & RCE" },
    { title: "Zero-Day CVE Exploits", code: "CAT-02", count: "3,890 Verified", severity: "CRITICAL", vector: "Heap Overflow & Auth" },
    { title: "APT State Espionage", code: "CAT-03", count: "240 Groups", severity: "HIGH", vector: "Spearphishing & C2" },
    { title: "Malware & Supply Chain", code: "CAT-04", count: "8,950 Hashes", severity: "HIGH", vector: "NPM / PyPI Poisoning" }
  ];

  return (
    <section id="coverage" className="py-16 border-b border-cyber-border relative bg-[#090A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-1.5 mb-2">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span>GLOBAL THREAT MATRIX & COVERAGE MAP</span>
            </div>
            <h2 className="text-3xl font-serif text-white">
              Continuous threat coverage across all major exploit vectors.
            </h2>
          </div>
          <span className="text-xs font-mono px-3 py-1.5 bg-cyber-surface border border-cyber-border text-slate-300">
            FILTER: DUOTONE TELEMETRY
          </span>
        </div>

        {/* Duotone Coverage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {threatCategories.map((cat, idx) => (
            <div 
              key={idx}
              className="steel-panel p-6 border border-cyber-border chamfer hover:border-cyan-500/50 transition-all space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 font-bold">{cat.code}</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-none ${
                  cat.severity === 'CRITICAL' ? 'bg-red-950 text-red-400 border border-red-800' : 'bg-amber-950 text-amber-400 border border-amber-800'
                }`}>
                  {cat.severity}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1">Vector: {cat.vector}</p>
              </div>

              <div className="pt-3 border-t border-cyber-border flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500">Coverage Telemetry</span>
                <span className="text-emerald-400 font-bold">{cat.count}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Map Simulation Bar */}
        <div className="steel-panel p-6 border border-cyber-border chamfer flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
            <span className="text-white font-bold">24/7 AUTOMATED SOC INTELLIGENCE RECONNAISSANCE</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>NVD API v2: ACTIVE</span>
            <span>•</span>
            <span>CISA KEV: SYNCED</span>
            <span>•</span>
            <span>RE-ACT ENGINE: ONLINE</span>
          </div>
        </div>

      </div>
    </section>
  );
}
