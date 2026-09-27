import React from 'react';
import { Sliders } from 'lucide-react';
import type { ViewMode } from '../../types';
import { DemoDataTag } from '../common/DemoDataTag';

interface PolicyComparisonProps {
  setActiveView: (view: ViewMode) => void;
}

export const PolicyComparison: React.FC<PolicyComparisonProps> = ({ setActiveView }) => {
  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-extrabold text-white">Side-by-Side Policy Scenario Comparison</h1>
            <DemoDataTag label="Decision Support System" />
          </div>
          <p className="text-xs text-slate-300 mt-0.5">
            Objective trade-off matrix comparing competing land development frameworks without artificial bias.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveView('policy_lab')}
            className="px-3 py-1.5 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wide transition-colors flex items-center gap-1"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Back to Scenario Simulator</span>
          </button>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* POLICY A: AGGRESSIVE EXPANSION (+10%) */}
        <div className="bg-[#0f2942] border border-amber-500/40 rounded-xl p-5 space-y-4 shadow-xl">
          <div className="border-b border-slate-700/60 pb-3 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">SCENARIO OPTION A</span>
              <h3 className="font-extrabold text-white text-base">Urban Expansion +10% Corridor</h3>
            </div>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
              High Growth Target
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="bg-[#0a192f] border border-slate-800 rounded p-3 space-y-2">
              <div className="flex justify-between font-mono">
                <span className="text-slate-300">Agricultural Farmland Net Loss:</span>
                <span className="text-red-400 font-bold">-8.4% (-8,400 Ha)</span>
              </div>
              <div className="flex justify-between font-mono">
                <span className="text-slate-300">Urban Area Gain:</span>
                <span className="text-amber-400 font-bold">+11.2%</span>
              </div>
              <div className="flex justify-between font-mono">
                <span className="text-slate-300">Ecological Canopy Change:</span>
                <span className="text-amber-400 font-bold">-3.1%</span>
              </div>
              <div className="flex justify-between font-mono">
                <span className="text-slate-300">Infra Power & Water Stress:</span>
                <span className="text-blue-400 font-bold">+18.2%</span>
              </div>
            </div>

            <div className="space-y-2 bg-[#071324] border border-slate-800 rounded p-3">
              <span className="font-bold text-emerald-400 block uppercase text-[10px]">Key Benefits</span>
              <ul className="space-y-1 text-slate-300 text-[11px] list-disc list-inside">
                <li>Accommodates 185,000 new residential housing units.</li>
                <li>Generates ₹420 Cr annual municipal tax revenue.</li>
              </ul>

              <span className="font-bold text-red-400 block uppercase text-[10px] pt-1">Key Risks</span>
              <ul className="space-y-1 text-slate-300 text-[11px] list-disc list-inside">
                <li>Displaces 12,400 active agrarian families.</li>
                <li>Depletes local shallow water tables by 1.4m.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* POLICY B: CONSERVATION EXPANSION (+5%) */}
        <div className="bg-[#0f2942] border border-emerald-500/40 rounded-xl p-5 space-y-4 shadow-xl">
          <div className="border-b border-slate-700/60 pb-3 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">SCENARIO OPTION B</span>
              <h3 className="font-extrabold text-white text-base">Balanced Growth +5% Corridor</h3>
            </div>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              Agrarian Protection
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="bg-[#0a192f] border border-slate-800 rounded p-3 space-y-2">
              <div className="flex justify-between font-mono">
                <span className="text-slate-300">Agricultural Farmland Net Loss:</span>
                <span className="text-emerald-400 font-bold">-3.8% (-3,800 Ha)</span>
              </div>
              <div className="flex justify-between font-mono">
                <span className="text-slate-300">Urban Area Gain:</span>
                <span className="text-emerald-400 font-bold">+5.4%</span>
              </div>
              <div className="flex justify-between font-mono">
                <span className="text-slate-300">Ecological Canopy Change:</span>
                <span className="text-teal-400 font-bold">-1.2%</span>
              </div>
              <div className="flex justify-between font-mono">
                <span className="text-slate-300">Infra Power & Water Stress:</span>
                <span className="text-blue-400 font-bold">+7.4%</span>
              </div>
            </div>

            <div className="space-y-2 bg-[#071324] border border-slate-800 rounded p-3">
              <span className="font-bold text-emerald-400 block uppercase text-[10px]">Key Benefits</span>
              <ul className="space-y-1 text-slate-300 text-[11px] list-disc list-inside">
                <li>Preserves multi-cropped food security zones.</li>
                <li>Minimizes agrarian displacement to under 3,100 families.</li>
              </ul>

              <span className="font-bold text-amber-400 block uppercase text-[10px] pt-1">Key Trade-offs</span>
              <ul className="space-y-1 text-slate-300 text-[11px] list-disc list-inside">
                <li>Reduces housing unit delivery by ~90,000 units.</li>
                <li>Requires higher density redevelopment in core urban areas.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
