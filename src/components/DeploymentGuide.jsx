import React, { useState } from 'react';
import { 
  CloudUpload, 
  Github, 
  Terminal, 
  CheckCircle2, 
  Copy, 
  Check, 
  ExternalLink, 
  Zap, 
  ArrowRight,
  ShieldCheck,
  Globe,
  Layers,
  Code
} from 'lucide-react';

export default function DeploymentGuide() {
  const [copiedCmd, setCopiedCmd] = useState('');

  const handleCopyCommand = (cmdText, key) => {
    navigator.clipboard.writeText(cmdText);
    setCopiedCmd(key);
    setTimeout(() => setCopiedCmd(''), 2000);
  };

  const gitCommands = `git init
git add .
git commit -m "Add Threat Intelligence Scout GUI and n8n Agent Workflow"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/threat-intelligence-scout.git
git push -u origin main`;

  const vercelCliCommands = `npm install -g vercel
vercel login
vercel --prod`;

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="glass-panel p-6 rounded-2xl border border-cyber-border">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <CloudUpload className="w-5 h-5 text-cyan-400" />
              GitHub & Vercel Deployment Command Center
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Step-by-step instructions and one-click terminal commands to publish your repository to <span className="text-cyan-300 font-semibold">GitHub</span> and launch it live on <span className="text-white font-semibold">Vercel</span>.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono bg-emerald-950 px-3 py-2 rounded-lg border border-emerald-800 text-emerald-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Vercel Build Config (vercel.json) Ready</span>
          </div>
        </div>
      </div>

      {/* Grid: 2 Major Steps */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Step 1: Push to GitHub */}
        <div className="glass-panel p-6 rounded-2xl border border-cyber-border space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-cyber-border">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-800 text-white border border-slate-700">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase">STEP 1</span>
                <h3 className="text-base font-bold text-white">Push Codebase to GitHub</h3>
              </div>
            </div>
            <a 
              href="https://github.com/new" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1 text-xs text-cyan-400 hover:underline font-mono"
            >
              Create Repo on GitHub <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Run these terminal commands in your project folder (<code className="text-cyan-300 font-mono">c:\Users\Laptop\Downloads\Threat intelligence project</code>) to initialize Git and push all agent GUI files to your remote repository:
          </p>

          {/* Terminal Command Block */}
          <div className="relative rounded-xl bg-cyber-bg p-4 border border-cyber-border">
            <button
              onClick={() => handleCopyCommand(gitCommands, 'git')}
              className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded bg-cyber-surface hover:bg-cyber-card text-xs font-mono text-cyan-300 border border-cyber-border transition-all"
            >
              {copiedCmd === 'git' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCmd === 'git' ? 'Copied' : 'Copy Commands'}</span>
            </button>
            <pre className="text-xs font-mono text-cyan-300 leading-relaxed overflow-x-auto whitespace-pre">
              {gitCommands}
            </pre>
          </div>

          <div className="p-3 rounded-lg bg-cyber-surface border border-cyber-border text-xs text-slate-300 space-y-1">
            <span className="font-bold text-white flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Included Git Assets:
            </span>
            <p className="text-[11px] text-slate-400">
              Includes <code className="text-cyan-300 font-mono">Threat intelligence Scout.json</code>, Vite source files, components, <code className="text-cyan-300 font-mono">vercel.json</code>, and <code className="text-cyan-300 font-mono">.gitignore</code>.
            </p>
          </div>
        </div>

        {/* Step 2: Deploy to Vercel */}
        <div className="glass-panel p-6 rounded-2xl border border-cyber-border space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-cyber-border">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-white/20 to-slate-800 text-white border border-white/30">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase">STEP 2</span>
                <h3 className="text-base font-bold text-white">Deploy Live on Vercel</h3>
              </div>
            </div>
            <a 
              href="https://vercel.com/new" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1 text-xs text-cyan-400 hover:underline font-mono"
            >
              Vercel Dashboard <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Sub Option A: GitHub Integration */}
          <div className="p-4 rounded-xl bg-cyber-surface border border-cyan-900/60 space-y-2">
            <div className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              Method A: Single-Click Vercel Dashboard Deploy (Recommended)
            </div>
            <ol className="text-xs text-slate-300 space-y-1.5 list-decimal list-inside pl-1">
              <li>Log into <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-cyan-400 underline">Vercel.com</a> and click <strong>"Add New Project"</strong>.</li>
              <li>Select your newly pushed <strong>threat-intelligence-scout</strong> GitHub repository.</li>
              <li>Vercel automatically detects <code className="text-cyan-300 font-mono">vite</code> & <code className="text-cyan-300 font-mono">vercel.json</code> settings.</li>
              <li>Click <strong>"Deploy"</strong>. Your agent GUI will be live on a production SSL URL (<code className="text-emerald-300 font-mono">https://threat-intelligence-scout.vercel.app</code>).</li>
            </ol>
          </div>

          {/* Sub Option B: CLI Deploy */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-white flex items-center justify-between">
              <span>Method B: Vercel CLI Direct Deploy</span>
              <button
                onClick={() => handleCopyCommand(vercelCliCommands, 'vercel')}
                className="flex items-center gap-1 px-2 py-0.5 rounded bg-cyber-surface hover:bg-cyber-card text-[11px] font-mono text-cyan-300 border border-cyber-border transition-all"
              >
                {copiedCmd === 'vercel' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedCmd === 'vercel' ? 'Copied' : 'Copy CLI Commands'}</span>
              </button>
            </div>
            <div className="rounded-xl bg-cyber-bg p-3.5 border border-cyber-border">
              <pre className="text-xs font-mono text-cyan-300 leading-relaxed overflow-x-auto whitespace-pre">
                {vercelCliCommands}
              </pre>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
