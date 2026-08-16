import React from 'react';
import { Terminal, Shield, Cpu, Lock, Search, FileCode } from 'lucide-react';

export default function FeatureMatrix() {
  const features = [
    {
      ascii: "[ #01 ]",
      title: "Mandatory Search Guardrails",
      desc: "System message rules strictly enforce real-time web telemetry searches via Tavily before generating answers, preventing LLM hallucinations.",
      icon: Shield
    },
    {
      ascii: "[ #02 ]",
      title: "Direct Advisory Links",
      desc: "Every vulnerability report outputs verified clickable links to official NIST NVD advisories, CISA Known Exploited Vulnerabilities catalog, and CVE Details.",
      icon: Search
    },
    {
      ascii: "[ #03 ]",
      title: "LangChain ReAct Architecture",
      desc: "Autonomous Reasoning + Acting cycle evaluates input queries, formulates search parameters ($fromAI), and synthesizes structured threat briefings.",
      icon: Cpu
    },
    {
      ascii: "[ #04 ]",
      title: "CVSS 3.1 & IOC Extraction",
      desc: "Automatically parses CVSS 3.1 metrics, vector strings, SHA256/MD5 malware hashes, C2 IP addresses, and malicious domains.",
      icon: Terminal
    },
    {
      ascii: "[ #05 ]",
      title: "Google Gemini LLM Provider",
      desc: "Powered by high-capacity multimodal reasoning models configured with credential account parameters in n8n.",
      icon: Lock
    },
    {
      ascii: "[ #06 ]",
      title: "YARA & Mitigation Directives",
      desc: "Provides actionable tactical remediation plans, EDR detection rules, and immediate firewall block directives.",
      icon: FileCode
    }
  ];

  return (
    <section id="matrix" className="py-16 border-b border-cyber-border bg-[#0B0E17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">+ SYSTEM ARCHITECTURE & FEATURE MATRIX +</span>
          <h2 className="text-3xl font-serif text-white">Precision-built for security teams & analysts.</h2>
        </div>

        {/* Structural Grid separated by thin borders with crosshair motifs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-cyber-border">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="relative p-8 border-r border-b border-cyber-border space-y-4 hover:bg-[#12151E] transition-colors group"
              >
                {/* Corner Plus (+) Crosshairs */}
                <span className="absolute -top-2 -left-2 font-mono text-cyan-500 text-[10px] opacity-40 group-hover:opacity-100 transition-opacity">+</span>
                <span className="absolute -top-2 -right-2 font-mono text-cyan-500 text-[10px] opacity-40 group-hover:opacity-100 transition-opacity">+</span>
                <span className="absolute -bottom-2 -left-2 font-mono text-cyan-500 text-[10px] opacity-40 group-hover:opacity-100 transition-opacity">+</span>
                <span className="absolute -bottom-2 -right-2 font-mono text-cyan-500 text-[10px] opacity-40 group-hover:opacity-100 transition-opacity">+</span>

                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 font-bold">{item.ascii}</span>
                  <Icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {item.description || item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
