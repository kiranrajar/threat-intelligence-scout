import React from 'react';
import { Activity, ShieldCheck, Zap, Server } from 'lucide-react';

export default function StatsPanel() {
  const stats = [
    { value: "99.98%", label: "Detection Accuracy", sub: "Verified Advisory Telemetry", icon: ShieldCheck, color: "text-emerald-400" },
    { value: "> 1.2M", label: "Threat Telemetry Feeds", sub: "NVD, CISA & Mitre Signals", icon: Server, color: "text-cyan-400" },
    { value: "< 120ms", label: "ReAct Agent Latency", sub: "Autonomous Execution Speed", icon: Zap, color: "text-purple-400" },
    { value: "0.00%", label: "Static Hallucination", sub: "System Guardrail Enforced", icon: Activity, color: "text-amber-400" }
  ];

  return (
    <section className="py-16 border-b border-cyber-border bg-[#090A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="steel-panel p-6 border border-cyber-border chamfer space-y-2 hover:border-cyan-500/50 transition-all">
                <div className="flex items-center justify-between">
                  <Icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-[10px] font-mono text-slate-500 uppercase">METRIC 0{idx + 1}</span>
                </div>
                <div className={`text-3xl font-bold font-mono ${item.color}`}>
                  {item.value}
                </div>
                <div className="text-sm font-bold text-white">{item.label}</div>
                <p className="text-xs font-mono text-slate-400">{item.sub}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
