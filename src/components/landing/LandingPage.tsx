import React from 'react';
import {
  Search,
  FlaskConical,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import type { ViewMode } from '../../types';

interface LandingPageProps {
  onEnterPlatform: (view: ViewMode) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onEnterPlatform }) => {
  return (
    <div className="min-h-screen bg-[#0a192f] text-slate-100 flex flex-col font-sans relative overflow-x-hidden bg-carto-grid">
      {/* Top Header */}
      <header className="px-8 py-5 border-b border-slate-800 flex items-center justify-between relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded bg-gradient-to-br from-emerald-600 to-blue-900 flex items-center justify-center text-white font-black text-xl tracking-wider border border-emerald-400/40 shadow-inner">
            BN
          </div>
          <div>
            <span className="font-extrabold text-white text-xl tracking-wide">BhoomiNexus</span>
            <p className="text-xs text-emerald-400 font-medium tracking-tight">National Land Evidence-to-Policy Intelligence Platform</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs font-semibold px-3 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
            SIH Problem Statement SIH26019
          </span>
          <button
            onClick={() => onEnterPlatform('dashboard')}
            className="px-5 py-2.5 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs tracking-wider uppercase transition-all shadow-lg shadow-emerald-900/40 flex items-center gap-2"
          >
            <span>Explore Control Room</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Hero Section */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-8 py-12 relative z-10 space-y-16">
        <div className="text-center space-y-6 max-w-4xl mx-auto pt-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>National Digital Infrastructure for Land Governance</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
            From Fragmented Land Evidence <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              To Intelligent Policy Decisions.
            </span>
          </h1>

          <p className="text-slate-300 text-base md:text-lg max-w-3xl mx-auto font-normal leading-relaxed">
            BhoomiNexus connects land records, satellite GIS, government policies, academic research, and socio-economic datasets into one evidence-driven, explainable intelligence ecosystem.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onEnterPlatform('dashboard')}
              className="px-8 py-3.5 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm uppercase tracking-wider transition-all shadow-xl shadow-emerald-900/50 flex items-center gap-2"
            >
              <span>Launch Platform Prototype</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onEnterPlatform('policy_lab')}
              className="px-6 py-3.5 rounded bg-[#0f2942] hover:bg-[#1e3a8a] text-emerald-300 border border-emerald-500/40 font-bold text-sm tracking-wide transition-all flex items-center gap-2"
            >
              <FlaskConical className="w-4 h-4 text-emerald-400" />
              <span>Simulate Policy Scenarios</span>
            </button>
          </div>
        </div>

        {/* 3 Core Entry Paths */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {/* Path 1: Research */}
          <div
            onClick={() => onEnterPlatform('search')}
            className="bg-[#0f2942] border border-slate-700/80 hover:border-emerald-500/60 rounded-lg p-6 cursor-pointer group transition-all hover:-translate-y-1 shadow-xl"
          >
            <div className="w-12 h-12 rounded bg-blue-900/50 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
              <Search className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Pillar 01</span>
            <h3 className="text-xl font-bold text-white mt-1 mb-2 group-hover:text-emerald-300 transition-colors">
              RESEARCH & DISCOVERY
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Find, synthesize, and cross-examine multi-modal evidence across land records, satellite layers, policy frameworks, and academic studies.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
              <span>Search Evidence Base</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Path 2: Policy */}
          <div
            onClick={() => onEnterPlatform('policy_lab')}
            className="bg-[#0f2942] border border-emerald-500/40 hover:border-emerald-400 rounded-lg p-6 cursor-pointer group transition-all hover:-translate-y-1 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-emerald-500 text-slate-950 font-extrabold text-[10px] px-3 py-1 uppercase tracking-wider rounded-bl">
              Flagship Innovation
            </div>
            <div className="w-12 h-12 rounded bg-emerald-900/50 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
              <FlaskConical className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Pillar 02</span>
            <h3 className="text-xl font-bold text-white mt-1 mb-2 group-hover:text-emerald-300 transition-colors">
              POLICY IMPACT LAB
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Simulate and stress-test land policy scenarios before execution. Quantify urban expansion vs agricultural protection trade-offs in real time.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
              <span>Run Scenario Simulator</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Path 3: Governance */}
          <div
            onClick={() => onEnterPlatform('gis')}
            className="bg-[#0f2942] border border-slate-700/80 hover:border-emerald-500/60 rounded-lg p-6 cursor-pointer group transition-all hover:-translate-y-1 shadow-xl"
          >
            <div className="w-12 h-12 rounded bg-amber-900/50 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Pillar 03</span>
            <h3 className="text-xl font-bold text-white mt-1 mb-2 group-hover:text-emerald-300 transition-colors">
              SPATIAL GOVERNANCE & TRUST
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Monitor spatial land use changes, verify cadastral integrity via blockchain audit trails, and maintain data source freshness metrics.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
              <span>Open GIS Command Center</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* How BhoomiNexus Works Flow */}
        <div className="bg-[#071426] border border-slate-800 rounded-xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white">How BhoomiNexus Works</h2>
            <p className="text-xs text-slate-400">End-to-end evidence synthesis architecture connecting raw data to verifiable policy decisions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {[
              { step: '01', title: 'Connect', desc: 'Ingest BhuLekh, ISRO Bhuvan, OGD & research papers' },
              { step: '02', title: 'Understand', desc: 'Semantic AI extracts evidence & cross-references data' },
              { step: '03', title: 'Visualize', desc: 'Multi-layer GIS maps & multi-temporal land timelines' },
              { step: '04', title: 'Simulate', desc: 'Predict spatial, ecological & agrarian policy impacts' },
              { step: '05', title: 'Decide', desc: 'Generate verifiable, transparent policy briefs' },
            ].map((item, index) => (
              <div key={index} className="bg-[#0f2942] border border-slate-700/60 p-4 rounded-lg text-center space-y-2 relative">
                <span className="text-xs font-extrabold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                  {item.step}
                </span>
                <h4 className="font-bold text-white text-sm">{item.title}</h4>
                <p className="text-[11px] text-slate-300 leading-tight">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
