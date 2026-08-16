import React, { useState } from 'react';
import { Check, Shield, Zap, Terminal } from 'lucide-react';

export default function PricingTable() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <section id="pricing" className="py-16 border-b border-cyber-border bg-[#0B0E17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Title & Toggle */}
        <div className="text-center space-y-4">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">+ DEPLOYMENT TIERS & SUBSCRIPTION +</span>
          <h2 className="text-3xl font-serif text-white">Transparent pricing for security teams.</h2>

          {/* Toggle */}
          <div className="inline-flex items-center p-1 bg-[#12151E] border border-cyber-border chamfer">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 text-xs font-mono font-bold transition-all cursor-pointer ${
                billingCycle === 'monthly' ? 'bg-cyan-500 text-slate-950 chamfer-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              MONTHLY BILLING
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-1.5 text-xs font-mono font-bold transition-all cursor-pointer ${
                billingCycle === 'yearly' ? 'bg-cyan-500 text-slate-950 chamfer-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              ANNUAL BILLING (-20%)
            </button>
          </div>
        </div>

        {/* Pricing Grid - Border Delimited (No Floating Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-cyber-border">
          
          {/* Tier 1: Community / Developer */}
          <div className="relative p-8 border-r border-b border-cyber-border space-y-6 hover:bg-[#12151E] transition-colors group">
            <span className="absolute -top-2 -left-2 font-mono text-cyan-500 text-[10px] opacity-40">+</span>
            <span className="absolute -top-2 -right-2 font-mono text-cyan-500 text-[10px] opacity-40">+</span>

            <div className="space-y-1">
              <span className="text-xs font-mono text-cyan-400 font-bold">[ FREE TIER ]</span>
              <h3 className="text-xl font-bold text-white">Developer Scout</h3>
              <p className="text-xs text-slate-400 font-sans">For individual security researchers and open-source contributors.</p>
            </div>

            <div className="font-mono">
              <span className="text-3xl font-bold text-white">$0</span>
              <span className="text-xs text-slate-500"> / forever</span>
            </div>

            <ul className="space-y-2 text-xs font-mono text-slate-300">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Unlimited CVE & NVD Search Scans</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Direct Clickable Advisory Links</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>System Message Guardrails Active</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Community Support</span>
              </li>
            </ul>

            <a 
              href="#agent"
              className="block text-center py-3 bg-cyber-surface hover:bg-cyber-card text-white font-mono text-xs font-bold border border-cyber-border chamfer transition-all cursor-pointer"
            >
              GET STARTED FREE
            </a>
          </div>

          {/* Tier 2: SOC Team (Featured) */}
          <div className="relative p-8 border-r border-b border-cyber-border space-y-6 bg-[#12151E] hover:bg-[#161B28] transition-colors group">
            <span className="absolute -top-2 -left-2 font-mono text-cyan-500 text-[10px] opacity-40">+</span>
            <span className="absolute -top-2 -right-2 font-mono text-cyan-500 text-[10px] opacity-40">+</span>

            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400 font-bold">[ MOST POPULAR ]</span>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-800">RECOMMENDED</span>
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white">SOC Team Pro</h3>
              <p className="text-xs text-slate-400 font-sans">For enterprise SOC teams, incident response, and threat hunters.</p>
            </div>

            <div className="font-mono">
              <span className="text-3xl font-bold text-cyan-400">
                {billingCycle === 'monthly' ? '$49' : '$39'}
              </span>
              <span className="text-xs text-slate-500"> / seat / month</span>
            </div>

            <ul className="space-y-2 text-xs font-mono text-slate-200">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>All Free Tier Features Included</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Automated YARA & Sigma Rule Generation</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Real-Time C2 Hash & IP Telemetry</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>n8n Webhook & API Key Integration</span>
              </li>
            </ul>

            <a 
              href="#agent"
              className="block text-center py-3 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-slate-950 font-mono text-xs font-bold chamfer shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all cursor-pointer"
            >
              DEPLOY TEAM PRO
            </a>
          </div>

          {/* Tier 3: Enterprise */}
          <div className="relative p-8 border-r border-b border-cyber-border space-y-6 hover:bg-[#12151E] transition-colors group">
            <span className="absolute -top-2 -left-2 font-mono text-cyan-500 text-[10px] opacity-40">+</span>
            <span className="absolute -top-2 -right-2 font-mono text-cyan-500 text-[10px] opacity-40">+</span>

            <div className="space-y-1">
              <span className="text-xs font-mono text-purple-400 font-bold">[ CUSTOM SCALE ]</span>
              <h3 className="text-xl font-bold text-white">Enterprise Grid</h3>
              <p className="text-xs text-slate-400 font-sans">Custom SIEM/SOAR pipeline integration and dedicated threat feeds.</p>
            </div>

            <div className="font-mono">
              <span className="text-3xl font-bold text-white">Custom</span>
              <span className="text-xs text-slate-500"> / SLA contract</span>
            </div>

            <ul className="space-y-2 text-xs font-mono text-slate-300">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Dedicated LangChain ReAct Nodes</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Custom Private Threat Data Ingestion</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>24/7 Priority Support & Dedicated SLA</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>On-Premise / VPC Deployment</span>
              </li>
            </ul>

            <a 
              href="#agent"
              className="block text-center py-3 bg-cyber-surface hover:bg-cyber-card text-white font-mono text-xs font-bold border border-cyber-border chamfer transition-all cursor-pointer"
            >
              CONTACT ENTERPRISE
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
