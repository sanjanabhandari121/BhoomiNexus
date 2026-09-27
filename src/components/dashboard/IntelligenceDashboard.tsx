import React, { useState } from 'react';
import {
  FileText,
  BookOpen,
  Layers,
  FlaskConical,
  Database,
  Search,
  ArrowRight,
  CheckCircle2,
  Compass
} from 'lucide-react';
import { EvidenceHealthCard } from './EvidenceHealthCard';
import { DemoDataTag } from '../common/DemoDataTag';
import type { ViewMode, GeographicRegion } from '../../types';
import { MOCK_DISTRICTS } from '../../data/demoGisData';

interface IntelligenceDashboardProps {
  setActiveView: (view: ViewMode) => void;
  selectedRegion: GeographicRegion;
  setRegion: (region: GeographicRegion) => void;
  onSearchSubmit: (query: string) => void;
}

export const IntelligenceDashboard: React.FC<IntelligenceDashboardProps> = ({
  setActiveView,
  selectedRegion,
  onSearchSubmit,
}) => {
  const [activeDistrictId, setActiveDistrictId] = useState('DIST-DEL-NCR');
  const selectedDistrict = MOCK_DISTRICTS.find(d => d.id === activeDistrictId) || MOCK_DISTRICTS[0];

  const metrics = [
    { label: 'Land Records Indexed', value: '4.8M', sub: 'Khasra & DILRMP Vector', icon: FileText },
    { label: 'Policy Documents', value: '1,240', sub: 'Master Plans & Drafts', icon: BookOpen },
    { label: 'Research Papers', value: '850', sub: 'ICAR, FAO, Academic Studies', icon: Search },
    { label: 'GIS Datasets', value: '410', sub: 'ISRO Bhuvan GeoTIFFs', icon: Layers },
    { label: 'Active Policy Simulations', value: '18', sub: 'Urban Growth & Ag Scenarios', icon: FlaskConical },
    { label: 'Data Sources Connected', value: '10 Portals', sub: 'BhuLekh, ISRO, OGD, UN', icon: Database },
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-[#0f2942] via-[#0a192f] to-[#071324] border border-slate-700/80 rounded-xl p-6 relative overflow-hidden shadow-xl">
        <div className="relative z-10 space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[11px] font-bold uppercase tracking-wider">
            <span>National Control Room</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          </div>

          <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
            From Fragmented Land Evidence <br />
            <span className="text-emerald-400">To Intelligent Policy Decisions.</span>
          </h1>

          <p className="text-xs text-slate-300 leading-relaxed font-normal">
            Connect land records, spatial GIS layers, policy frameworks, academic research, and socio-economic datasets into one transparent evidence ecosystem.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={() => {
                onSearchSubmit('How is urban expansion affecting agricultural land around Delhi NCR?');
                setActiveView('search');
              }}
              className="px-4 py-2 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wide flex items-center gap-2 transition-all shadow-md"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Query Delhi Urban Search</span>
            </button>

            <button
              onClick={() => setActiveView('policy_lab')}
              className="px-4 py-2 rounded bg-[#0f2942] hover:bg-[#1e3a8a] text-emerald-300 border border-emerald-500/40 font-bold text-xs flex items-center gap-2 transition-all"
            >
              <FlaskConical className="w-3.5 h-3.5 text-emerald-400" />
              <span>Run Scenario Simulator</span>
            </button>
          </div>
        </div>
      </div>

      {/* Evidence Health Index Indicator */}
      <EvidenceHealthCard />

      {/* Core Platform Metric Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {metrics.map((m, idx) => {
          const Icon = m.icon;
          return (
            <div key={idx} className="bg-[#0f2942] border border-slate-700/80 rounded-lg p-3 space-y-1 shadow-md hover:border-slate-600 transition-all">
              <div className="flex items-center justify-between">
                <Icon className="w-4 h-4 text-emerald-400" />
                <DemoDataTag label="Demo Data" className="text-[9px] px-1 py-0" />
              </div>
              <div className="text-xl font-black text-white">{m.value}</div>
              <div className="text-[11px] font-bold text-slate-300 truncate">{m.label}</div>
              <p className="text-[10px] text-slate-400 truncate">{m.sub}</p>
            </div>
          );
        })}
      </div>

      {/* Main Interactive Map & Region Command Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: GIS Interactive Map Preview */}
        <div className="lg:col-span-2 bg-[#0f2942] border border-slate-700/80 rounded-xl p-4 space-y-3 flex flex-col h-[450px]">
          <div className="flex items-center justify-between border-b border-slate-700/60 pb-2.5">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-emerald-400" />
              <h3 className="font-bold text-white text-xs uppercase tracking-wider">
                Spatial GIS Control Room - {selectedRegion}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveView('gis')}
                className="text-[11px] font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
              >
                <span>Open Fullscreen GIS Engine</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Interactive Vector Map Screen */}
          <div className="flex-1 bg-[#071324] border border-slate-800 rounded-lg relative overflow-hidden bg-carto-grid p-4 flex flex-col justify-between">
            {/* Map Header Status Overlay */}
            <div className="flex items-center justify-between z-10">
              <div className="bg-[#0a192f]/90 border border-slate-700 rounded px-2.5 py-1 text-[11px] text-slate-300 font-mono">
                LAT: <span className="text-emerald-400">{selectedDistrict.lat.toFixed(4)}°N</span> | LNG: <span className="text-emerald-400">{selectedDistrict.lng.toFixed(4)}°E</span>
              </div>
              <div className="bg-[#0a192f]/90 border border-slate-700 rounded px-2.5 py-1 text-[11px] text-amber-300 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                <span>Active Layer: Urban Expansion vs Ag Protection</span>
              </div>
            </div>

            {/* Visual Vector Geometry Representation */}
            <div className="my-auto flex flex-col items-center justify-center relative space-y-4">
              <div className="w-64 h-48 border-2 border-dashed border-emerald-500/40 rounded-lg relative flex items-center justify-center bg-emerald-950/20 shadow-2xl">
                {/* Cadastral Boundary Vectors */}
                <div className="absolute inset-2 border border-slate-600/40 rounded grid grid-cols-3 grid-rows-2 gap-1 p-1">
                  <div className="bg-emerald-900/40 border border-emerald-500/30 rounded p-1 text-[9px] text-emerald-300 font-mono">
                    KH-881 (Agrarian)
                  </div>
                  <div className="bg-amber-900/40 border border-amber-500/30 rounded p-1 text-[9px] text-amber-300 font-mono">
                    KH-882 (Proposed Urban)
                  </div>
                  <div className="bg-emerald-900/40 border border-emerald-500/30 rounded p-1 text-[9px] text-emerald-300 font-mono">
                    KH-883 (ICAR Protected)
                  </div>
                  <div className="bg-red-900/40 border border-red-500/30 rounded p-1 text-[9px] text-red-300 font-mono">
                    KH-884 (Urban Sprawl)
                  </div>
                  <div className="bg-blue-900/40 border border-blue-500/30 rounded p-1 text-[9px] text-blue-300 font-mono">
                    KH-885 (Water Retention)
                  </div>
                  <div className="bg-emerald-900/40 border border-emerald-500/30 rounded p-1 text-[9px] text-emerald-300 font-mono">
                    KH-886 (Agrarian)
                  </div>
                </div>

                <div className="z-10 bg-[#0a192f] border border-emerald-400/60 rounded px-3 py-1.5 text-center shadow-lg">
                  <span className="text-xs font-bold text-white block">{selectedDistrict.name}</span>
                  <span className="text-[10px] text-emerald-400 font-semibold">{selectedDistrict.recentChangeRate}</span>
                </div>
              </div>
            </div>

            {/* Region Switcher Bar */}
            <div className="flex items-center justify-center gap-2 z-10">
              {MOCK_DISTRICTS.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setActiveDistrictId(d.id)}
                  className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
                    d.id === activeDistrictId
                      ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                      : 'bg-[#0a192f] text-slate-300 hover:bg-slate-800 border border-slate-700'
                  }`}
                >
                  {d.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: Selected District Intelligence Breakdown */}
        <div className="bg-[#0f2942] border border-slate-700/80 rounded-xl p-4 space-y-4 shadow-xl flex flex-col">
          <div className="border-b border-slate-700/60 pb-2">
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">District Intelligence</span>
            <h3 className="font-extrabold text-white text-base">{selectedDistrict.name}</h3>
            <p className="text-[11px] text-slate-400">{selectedDistrict.state} • {selectedDistrict.totalAreaKm2.toLocaleString()} km² Area</p>
          </div>

          <div className="space-y-3 flex-1">
            {/* Land breakdown stats */}
            <div className="space-y-2 text-xs">
              <div>
                <div className="flex justify-between text-[11px] text-slate-300 font-semibold mb-1">
                  <span>Agricultural Land</span>
                  <span className="text-emerald-400">{selectedDistrict.agPercent}%</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500" style={{ width: `${selectedDistrict.agPercent}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-300 font-semibold mb-1">
                  <span>Urban / Built-Up Area</span>
                  <span className="text-amber-400">{selectedDistrict.urbanPercent}%</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500" style={{ width: `${selectedDistrict.urbanPercent}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-300 font-semibold mb-1">
                  <span>Forest & Green Cover</span>
                  <span className="text-teal-400">{selectedDistrict.forestPercent}%</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-500" style={{ width: `${selectedDistrict.forestPercent}%` }}></div>
                </div>
              </div>
            </div>

            {/* Evidence behind this insight */}
            <div className="bg-[#0a192f] border border-slate-800 rounded p-3 space-y-2 mt-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Evidence Behind This Insight
              </span>
              <div className="space-y-1.5 text-[11px]">
                <div className="flex items-start gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>DDA Master Plan 2041 Rezoning Framework</span>
                </div>
                <div className="flex items-start gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>ICAR Multi-spectral Satellite Assessment 2025</span>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => setActiveView('policy_lab')}
            className="w-full py-2.5 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wide transition-colors flex items-center justify-center gap-2 shadow-md"
          >
            <span>Simulate Scenario For {selectedDistrict.name.split(' ')[0]}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
