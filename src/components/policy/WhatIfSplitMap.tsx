import React, { useState } from 'react';
import type { GeographicRegion, ViewMode } from '../../types';
import { DemoDataTag } from '../common/DemoDataTag';

interface WhatIfSplitMapProps {
  setActiveView: (view: ViewMode) => void;
  selectedRegion: GeographicRegion;
}

export const WhatIfSplitMap: React.FC<WhatIfSplitMapProps> = ({
  selectedRegion,
}) => {
  const [showDifferenceOnly, setShowDifferenceOnly] = useState<boolean>(false);

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-extrabold text-white">What-If Split Screen Spatial Simulator</h1>
            <DemoDataTag label="Visual Difference Engine" />
          </div>
          <p className="text-xs text-slate-300 mt-0.5">
            Compare current baseline land use against simulated policy scenarios with dynamic spatial difference highlighting for {selectedRegion}.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowDifferenceOnly(!showDifferenceOnly)}
            className={`px-3 py-1.5 rounded text-xs font-bold transition-all border ${
              showDifferenceOnly
                ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md'
                : 'bg-[#0f2942] text-slate-300 border-slate-700 hover:text-white'
            }`}
          >
            <span>{showDifferenceOnly ? 'Showing Difference Highlight' : 'Show Difference View'}</span>
          </button>
        </div>
      </div>

      {/* Split Screen Map Viewer Container */}
      <div className="bg-[#0f2942] border border-slate-700/80 rounded-xl p-4 space-y-4 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[480px] relative bg-[#060e1a] rounded-lg overflow-hidden border border-slate-800 bg-carto-grid p-4">
          {/* LEFT: CURRENT BASELINE SCENARIO */}
          <div className="border border-slate-700/80 rounded-lg p-4 flex flex-col justify-between bg-[#0a192f]/90 relative overflow-hidden">
            <div className="flex items-center justify-between z-10 border-b border-slate-800 pb-2">
              <span className="text-xs font-extrabold text-slate-200 uppercase tracking-wider">
                CURRENT BASELINE SCENARIO (2026)
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                Verified Ground Baseline
              </span>
            </div>

            {/* Spatial Visual Grid Representation */}
            <div className="my-auto space-y-3 z-10">
              <div className="w-full h-40 border border-slate-700 rounded bg-[#071324] grid grid-cols-3 grid-rows-2 gap-1.5 p-2 font-mono text-[10px]">
                <div className="bg-emerald-900/40 border border-emerald-500/40 rounded p-1 text-emerald-300">
                  Ag Land (Najafgarh Block A) - 62%
                </div>
                <div className="bg-emerald-900/40 border border-emerald-500/40 rounded p-1 text-emerald-300">
                  Ag Land (Najafgarh Block B) - 58%
                </div>
                <div className="bg-amber-900/40 border border-amber-500/40 rounded p-1 text-amber-300">
                  Urban Corridor - 42%
                </div>
                <div className="bg-emerald-900/40 border border-emerald-500/40 rounded p-1 text-emerald-300">
                  Ag Land Buffer - 54%
                </div>
                <div className="bg-blue-900/40 border border-blue-500/40 rounded p-1 text-blue-300">
                  Hydrological Zone - 100%
                </div>
                <div className="bg-emerald-900/40 border border-emerald-500/40 rounded p-1 text-emerald-300">
                  Farmland - 70%
                </div>
              </div>

              <div className="flex justify-between text-xs text-slate-300 font-mono">
                <span>Ag Land: <strong className="text-emerald-400">42.5%</strong></span>
                <span>Urban: <strong className="text-amber-400">46.5%</strong></span>
                <span>Forest: <strong className="text-teal-400">11.0%</strong></span>
              </div>
            </div>

            <div className="text-[10px] text-slate-400 font-mono z-10 border-t border-slate-800 pt-2">
              Source: ISRO Bhuvan Multi-Temporal Baseline Raster 2026
            </div>
          </div>

          {/* RIGHT: SIMULATED POLICY SCENARIO */}
          <div className="border border-amber-500/40 rounded-lg p-4 flex flex-col justify-between bg-[#0a192f]/90 relative overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between z-10 border-b border-slate-800 pb-2">
              <span className="text-xs font-extrabold text-amber-400 uppercase tracking-wider">
                SIMULATED FUTURE (+10% URBAN)
              </span>
              <span className="text-[10px] font-mono text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
                Policy Lab Model
              </span>
            </div>

            {/* Spatial Visual Grid Representation with Difference Highlights */}
            <div className="my-auto space-y-3 z-10">
              <div className="w-full h-40 border border-amber-500/40 rounded bg-[#071324] grid grid-cols-3 grid-rows-2 gap-1.5 p-2 font-mono text-[10px]">
                <div className={`rounded p-1 transition-all ${
                  showDifferenceOnly ? 'bg-red-900/80 border-2 border-red-500 text-white font-bold animate-pulse' : 'bg-red-900/40 border border-red-500/40 text-red-300'
                }`}>
                  {showDifferenceOnly ? '⚠ LOST AG LAND (-8.4%)' : 'Converted to Housing'}
                </div>
                <div className="bg-amber-900/60 border border-amber-500/60 rounded p-1 text-amber-200">
                  Urban Corridor (+11.2%)
                </div>
                <div className="bg-amber-900/60 border border-amber-500/60 rounded p-1 text-amber-200">
                  Expanded Commercial
                </div>
                <div className="bg-emerald-900/40 border border-emerald-500/40 rounded p-1 text-emerald-300">
                  Retained Farmland
                </div>
                <div className="bg-blue-900/40 border border-blue-500/40 rounded p-1 text-blue-300">
                  Hydrological Buffer
                </div>
                <div className="bg-emerald-900/40 border border-emerald-500/40 rounded p-1 text-emerald-300">
                  Retained Farmland
                </div>
              </div>

              <div className="flex justify-between text-xs text-slate-300 font-mono">
                <span>Ag Land: <strong className="text-red-400">34.1% (-8.4%)</strong></span>
                <span>Urban: <strong className="text-amber-400">57.7% (+11.2%)</strong></span>
                <span>Green: <strong className="text-amber-400">8.2% (-2.8%)</strong></span>
              </div>
            </div>

            <div className="text-[10px] text-slate-400 font-mono z-10 border-t border-slate-800 pt-2 flex items-center justify-between">
              <span>Model Confidence: High (94%)</span>
              <span className="text-amber-400 font-bold">12,400 Farmers Impacted</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
