import React, { useState } from 'react';
import { Code, Copy, Check, Download, Search, FileJson } from 'lucide-react';
import { rawAgentJson } from '../data/agentData';

export default function JsonViewer() {
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const jsonString = JSON.stringify(rawAgentJson, null, 2);
  const lines = jsonString.split('\n');

  const filteredLines = lines.map((line, idx) => {
    const lineNumber = idx + 1;
    const isMatch = searchQuery.trim() && line.toLowerCase().includes(searchQuery.toLowerCase());
    return { lineNumber, line, isMatch };
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(jsonString);
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "Threat intelligence Scout.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="space-y-6">
      {/* Top Bar */}
      <div className="glass-panel p-6 rounded-2xl border border-cyber-border">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <FileJson className="w-5 h-5 text-cyan-400" />
              Raw n8n Workflow JSON Inspector
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Source file: <span className="text-cyan-300 font-mono">Threat intelligence Scout.json</span> (129 lines, 3,304 bytes). Fully compliant with n8n v1.0+ workflow schema.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-cyber-surface hover:bg-cyber-card border border-cyber-border text-slate-200 text-xs font-mono transition-all cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
              <span>{copied ? 'Copied to Clipboard' : 'Copy Raw JSON'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-cyan-950 hover:bg-cyan-900 border border-cyan-800 text-cyan-300 text-xs font-mono transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download File</span>
            </button>
          </div>
        </div>

        {/* Search Input */}
        <div className="mt-4 relative max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search JSON keys or parameters (e.g. systemMessage, tavily)..."
            className="w-full pl-9 pr-4 py-1.5 bg-cyber-bg border border-cyber-border rounded-lg text-xs font-mono text-cyan-300 placeholder-slate-500 focus:outline-none focus:border-cyan-400"
          />
        </div>
      </div>

      {/* Code Editor Frame */}
      <div className="glass-panel rounded-2xl border border-cyber-border overflow-hidden">
        <div className="px-4 py-2 bg-cyber-surface/90 border-b border-cyber-border flex items-center justify-between text-xs font-mono text-slate-400">
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            <span className="ml-2 text-slate-300">Threat intelligence Scout.json</span>
          </span>
          <span>JSON Schema: n8n Workflow</span>
        </div>

        <div className="p-4 bg-[#05080e] overflow-x-auto max-h-[600px] scrollbar-thin">
          <pre className="font-mono text-xs leading-relaxed text-slate-300">
            {filteredLines.map(({ lineNumber, line, isMatch }) => (
              <div 
                key={lineNumber} 
                className={`flex gap-4 hover:bg-cyber-surface/60 px-2 py-0.5 rounded transition-colors ${
                  isMatch ? 'bg-cyan-950/80 border-l-2 border-cyan-400 text-cyan-200' : ''
                }`}
              >
                <span className="text-slate-600 select-none w-10 text-right font-mono text-[11px]">
                  {lineNumber}
                </span>
                <span className="flex-1 whitespace-pre">
                  {line}
                </span>
              </div>
            ))}
          </pre>
        </div>
      </div>
    </div>
  );
}
