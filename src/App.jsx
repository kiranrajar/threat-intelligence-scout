import React from 'react';
import AsciiBackground from './components/AsciiBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrustWall from './components/TrustWall';
import Terminal from './components/Terminal';
import CoverageMatrix from './components/CoverageMatrix';
import FeatureMatrix from './components/FeatureMatrix';
import StatsPanel from './components/StatsPanel';
import PricingTable from './components/PricingTable';
import FaqAccordion from './components/FaqAccordion';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#090A0F] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden">
      
      {/* Precision WebGL / Canvas ASCII Wave Field Background */}
      <AsciiBackground />

      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Sticky Minimal Navigation */}
        <Navigation />

        {/* Hero Section */}
        <Hero />

        {/* Trust Wall Grid with Corner Crosshairs */}
        <TrustWall />

        {/* Core Product Frame: Threat Intelligence Scout Console */}
        <section id="agent" className="py-12 border-b border-cyber-border bg-[#07090F]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 space-y-1">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">+ LIVE AGENT CONSOLE +</span>
              <h2 className="text-2xl font-serif text-white">Execute real-time threat intelligence reconnaissance.</h2>
            </div>

            <Terminal />
          </div>
        </section>

        {/* Global Threat Matrix */}
        <CoverageMatrix />

        {/* Feature Matrix (No Floating Cards) */}
        <FeatureMatrix />

        {/* Count-Up Metrics Panel */}
        <StatsPanel />

        {/* Pricing Tiers */}
        <PricingTable />

        {/* FAQ Accordion */}
        <FaqAccordion />

        {/* Final CTA & Sitemap Footer */}
        <Footer />

      </div>

    </div>
  );
}
