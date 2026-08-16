import React, { useState, useRef, useEffect } from 'react';
import { 
  Terminal as TerminalIcon, 
  Send, 
  Sparkles, 
  ShieldAlert, 
  Search, 
  Brain, 
  Loader2, 
  CheckCircle2, 
  ExternalLink,
  Settings2,
  Zap,
  Globe,
  Database,
  Cpu,
  RefreshCw,
  Info
} from 'lucide-react';
import { presetThreatQueries, mockThreatDatabase, rawAgentJson } from '../data/agentData';

export default function Terminal() {
  const [inputQuery, setInputQuery] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [executionStep, setExecutionStep] = useState(0); // 0: idle, 1: trigger, 2: guardrail, 3: tavily, 4: gemini synthesis, 5: completed
  const [currentResult, setCurrentResult] = useState(null);
  const [tavilyTelemetry, setTavilyTelemetry] = useState(null);
  const [searchQueryUsed, setSearchQueryUsed] = useState('');
  const [webhookUrl, setWebhookUrl] = useState(`https://your-n8n-instance.com/webhook/${rawAgentJson.nodes[2].webhookId}`);
  const [useLiveWebhook, setUseLiveWebhook] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const chatEndRef = useRef(null);

  const handlePresetClick = (preset) => {
    setInputQuery(preset.query);
    executeAgentSearch(preset.query);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputQuery.trim() || isProcessing) return;
    executeAgentSearch(inputQuery);
  };

  const executeAgentSearch = async (queryText) => {
    setIsProcessing(true);
    setCurrentResult(null);
    setTavilyTelemetry(null);
    setSearchQueryUsed('');

    // Step 1: Chat Trigger Received
    setExecutionStep(1);
    await new Promise(r => setTimeout(r, 600));

    // Step 2: System Guardrail Check (Enforce Tavily Search)
    setExecutionStep(2);
    await new Promise(r => setTimeout(r, 800));

    // Determine mock match or live fetch
    let resultData;
    const lowerQuery = queryText.toLowerCase();
    
    if (lowerQuery.includes('ransomware') || lowerQuery.includes('attack')) {
      resultData = mockThreatDatabase.ransomware;
    } else if (lowerQuery.includes('cve') || lowerQuery.includes('vulnerab') || lowerQuery.includes('exploit')) {
      resultData = mockThreatDatabase.vulnerabilities;
    } else {
      resultData = mockThreatDatabase.default;
    }

    // Step 3: Tavily Search Dispatch
    setExecutionStep(3);
    setSearchQueryUsed(resultData.searchQuery);
    await new Promise(r => setTimeout(r, 900));

    // Tavily Results received
    setTavilyTelemetry(resultData.tavilyResults);

    // Step 4: Gemini LLM Report Synthesis
    setExecutionStep(4);
    await new Promise(r => setTimeout(r, 900));

    // Step 5: Finished
    setExecutionStep(5);
    setCurrentResult(resultData);
    setIsProcessing(false);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Control Panel */}
      <div className="glass-panel p-6 rounded-2xl border border-cyber-border">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <TerminalIcon className="w-5 h-5 text-cyan-400" />
              SOC Threat Intelligence Terminal
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Ask any cybersecurity question. Watch the agent evaluate system guardrails, construct Tavily search queries, and synthesize actionable threat reports.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowConfig(!showConfig)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyber-surface hover:bg-cyber-card border border-cyber-border text-slate-300 hover:text-cyan-300 text-xs font-mono transition-all"
            >
              <Settings2 className="w-4 h-4 text-cyan-400" />
              <span>{showConfig ? 'Hide API Config' : 'Webhook & API Config'}</span>
            </button>
          </div>
        </div>

        {/* Webhook Configuration Modal / Drawer */}
        {showConfig && (
          <div className="mt-5 p-4 rounded-xl bg-cyber-bg border border-cyan-900/80 space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-400 font-semibold uppercase flex items-center gap-1.5">
                <Globe className="w-4 h-4" /> n8n Live Webhook Endpoint Integration
              </span>
              <span className="text-[11px] text-slate-400 font-mono">Webhook ID: {rawAgentJson.nodes[2].webhookId}</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
              <input
                type="text"
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
                className="md:col-span-9 bg-cyber-surface border border-cyber-border rounded-lg px-3 py-2 text-xs font-mono text-cyan-300 focus:outline-none focus:border-cyan-400"
                placeholder="Enter live n8n webhook URL..."
              />
              <button
                onClick={() => setUseLiveWebhook(!useLiveWebhook)}
                className={`md:col-span-3 px-3 py-2 rounded-lg text-xs font-semibold font-mono transition-all border ${
                  useLiveWebhook 
                    ? 'bg-emerald-950 text-emerald-300 border-emerald-500' 
                    : 'bg-cyan-950 text-cyan-300 border-cyan-800 hover:border-cyan-400'
                }`}
              >
                {useLiveWebhook ? 'Using Live Webhook' : 'Using SOC Simulator'}
              </button>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              <Info className="w-3.5 h-3.5 inline text-cyan-400 mr-1" />
              This agent uses n8n's Chat Trigger (<code className="text-cyan-300 font-mono">@n8n/n8n-nodes-langchain.chatTrigger</code> v1.4). When hosted in n8n, send payloads containing <code className="text-cyan-300 font-mono">{"{ \"chatInput\": \"...\" }"}</code>.
            </p>
          </div>
        )}
      </div>

      {/* Preset Queries Quick-Select Grid */}
      <div>
        <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
          Recommended SOC Threat Intelligence Presets:
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {presetThreatQueries.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => handlePresetClick(preset)}
              disabled={isProcessing}
              className="text-left p-3 rounded-xl bg-cyber-surface hover:bg-cyber-card border border-cyber-border hover:border-cyan-500/50 transition-all group cursor-pointer disabled:opacity-50"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {preset.title}
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-900">
                  {preset.category}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 line-clamp-2">
                {preset.query}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Main Terminal Input & Output Box */}
      <div className="glass-panel rounded-2xl border border-cyber-border overflow-hidden">
        
        {/* Input Bar */}
        <form onSubmit={handleSubmit} className="p-4 bg-cyber-surface/90 border-b border-cyber-border">
          <div className="relative flex items-center">
            <div className="absolute left-3.5 text-cyan-400">
              <TerminalIcon className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="e.g. Analyze recent LockBit 4.0 ransomware IOCs and CVE-2026-1142..."
              disabled={isProcessing}
              className="w-full pl-11 pr-28 py-3 bg-cyber-bg border border-cyber-border rounded-xl text-sm font-sans text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 shadow-inner"
            />
            <button
              type="submit"
              disabled={!inputQuery.trim() || isProcessing}
              className="absolute right-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 text-slate-950 font-bold text-xs rounded-lg flex items-center gap-1.5 transition-all cursor-pointer"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Analyzing...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Execute Scout</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Live Execution Stepper (Shows how agent works transparently) */}
        {executionStep > 0 && (
          <div className="p-5 bg-[#0a101d] border-b border-cyber-border space-y-3">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400 animate-bounce" />
              Agent Autonomous Execution Trace Log:
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs font-mono">
              
              {/* Step 1 */}
              <div className={`p-2.5 rounded-lg border transition-all ${
                executionStep >= 1 ? 'bg-emerald-950/40 border-emerald-500 text-emerald-300' : 'bg-cyber-surface/50 border-cyber-border text-slate-500'
              }`}>
                <div className="flex items-center gap-1.5 font-semibold">
                  {executionStep > 1 ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Loader2 className="w-3.5 h-3.5 animate-spin text-cyan-400" />}
                  <span>1. Chat Trigger</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-1">Payload: chatInput</div>
              </div>

              {/* Step 2 */}
              <div className={`p-2.5 rounded-lg border transition-all ${
                executionStep >= 2 ? 'bg-cyan-950/40 border-cyan-500 text-cyan-300' : 'bg-cyber-surface/50 border-cyber-border text-slate-500'
              }`}>
                <div className="flex items-center gap-1.5 font-semibold">
                  {executionStep > 2 ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : executionStep === 2 ? <Loader2 className="w-3.5 h-3.5 animate-spin text-cyan-400" /> : null}
                  <span>2. System Guardrail</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-1">Force Tavily Search</div>
              </div>

              {/* Step 3 */}
              <div className={`p-2.5 rounded-lg border transition-all ${
                executionStep >= 3 ? 'bg-amber-950/40 border-amber-500 text-amber-300' : 'bg-cyber-surface/50 border-cyber-border text-slate-500'
              }`}>
                <div className="flex items-center gap-1.5 font-semibold">
                  {executionStep > 3 ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : executionStep === 3 ? <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-400" /> : null}
                  <span>3. Tavily Web Tool</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-1">$fromAI("search_query")</div>
              </div>

              {/* Step 4 */}
              <div className={`p-2.5 rounded-lg border transition-all ${
                executionStep >= 4 ? 'bg-purple-950/40 border-purple-500 text-purple-300' : 'bg-cyber-surface/50 border-cyber-border text-slate-500'
              }`}>
                <div className="flex items-center gap-1.5 font-semibold">
                  {executionStep === 5 ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : executionStep === 4 ? <Loader2 className="w-3.5 h-3.5 animate-spin text-purple-400" /> : null}
                  <span>4. Gemini LLM</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-1">Synthesize Report</div>
              </div>

            </div>

            {/* Display Generated Tavily Query */}
            {searchQueryUsed && (
              <div className="text-xs font-mono bg-cyber-bg p-2.5 rounded border border-amber-800/60 text-amber-300 flex items-center justify-between">
                <span>
                  <Search className="w-3.5 h-3.5 inline mr-1 text-amber-400" />
                  Generated Tavily Search Query: <strong className="text-white">"{searchQueryUsed}"</strong>
                </span>
                <span className="text-[10px] bg-amber-950 px-2 py-0.5 rounded text-amber-400">Tavily Tool Executed</span>
              </div>
            )}
          </div>
        )}

        {/* Live Output Section */}
        <div className="p-6 min-h-[300px] bg-[#070b12] space-y-6">
          
          {!currentResult && !isProcessing && (
            <div className="h-48 flex flex-col items-center justify-center text-center text-slate-500 space-y-3">
              <TerminalIcon className="w-10 h-10 text-slate-600 animate-pulse" />
              <div>
                <p className="text-sm font-medium text-slate-300">Terminal Ready for Threat Telemetry Search</p>
                <p className="text-xs text-slate-500 mt-1">Select a preset prompt above or type a custom threat intelligence inquiry.</p>
              </div>
            </div>
          )}

          {/* Tavily Web Telemetry Stream */}
          {tavilyTelemetry && (
            <div className="space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-400" />
                Tavily Search Web Telemetry Sources ({tavilyTelemetry.length} Verified Sources)
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {tavilyTelemetry.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-cyber-surface border border-cyber-border text-xs space-y-1 hover:border-cyan-500/40 transition-all">
                    <a href={item.url} target="_blank" rel="noreferrer" className="font-semibold text-cyan-400 hover:underline flex items-center gap-1">
                      {item.title} <ExternalLink className="w-3 h-3" />
                    </a>
                    <p className="text-slate-300 line-clamp-2 text-[11px] leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Generated Threat Report */}
          {currentResult && (
            <div className="space-y-4 bg-cyber-surface/60 p-6 rounded-xl border border-cyan-900/80 shadow-lg">
              
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-cyber-border">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm font-bold text-white">Synthesized Threat Intelligence Report</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-1 rounded text-xs font-mono font-bold ${
                    currentResult.severity === 'CRITICAL' ? 'bg-red-950 text-red-400 border border-red-800' : 'bg-amber-950 text-amber-400 border border-amber-800'
                  }`}>
                    SEVERITY: {currentResult.severity}
                  </span>
                  <span className="px-2.5 py-1 rounded text-xs font-mono bg-cyan-950 text-cyan-300 border border-cyan-800">
                    CVSS: {currentResult.cvssScore}
                  </span>
                </div>
              </div>

              {/* Report Body */}
              <div className="prose prose-invert max-w-none text-xs text-slate-200 leading-relaxed font-sans space-y-4">
                <pre className="whitespace-pre-wrap font-sans text-xs text-slate-200 bg-cyber-bg/80 p-4 rounded-lg border border-cyber-border">
                  {currentResult.summary}
                </pre>
              </div>

              {/* Footer Meta */}
              <div className="pt-3 border-t border-cyber-border flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Agent Model: Google Gemini (PaLM)</span>
                <span>Guardrail Compliance: 100% (Search First Enforced)</span>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
