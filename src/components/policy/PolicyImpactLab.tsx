import React, { useState } from 'react';
import {
  FlaskConical,
  AlertTriangle,
  CheckCircle2,
  Sliders,
  Split,
  Sparkles
} from 'lucide-react';
import type { GeographicRegion, ViewMode } from '../../types';
import { MOCK_EVIDENCE_ITEMS } from '../../data/demoEvidence';
import { DemoDataTag } from '../common/DemoDataTag';
import confetti from 'canvas-confetti';

interface PolicyImpactLabProps {
  setActiveView: (view: ViewMode) => void;
  selectedRegion: GeographicRegion;
}

export const PolicyImpactLab: React.FC<PolicyImpactLabProps> = ({
  setActiveView,
  selectedRegion,
}) => {
  const [urbanExpansionPct, setUrbanExpansionPct] = useState<number>(10);
  const [agProtectLevel, setAgProtectLevel] = useState<'Low' | 'Medium' | 'High'>('High');
  const [infraInvestLevel, setInfraInvestLevel] = useState<'Low' | 'Medium' | 'High'>('Medium');
  const [timeHorizon, setTimeHorizon] = useState<5 | 10 | 20>(10);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [hasSimulated, setHasSimulated] = useState<boolean>(true);

  // Dynamic simulation equations based on controls
  const agLoss = -(urbanExpansionPct * (agProtectLevel === 'High' ? 0.84 : agProtectLevel === 'Medium' ? 1.1 : 1.4)).toFixed(1);
  const urbanGain = +(urbanExpansionPct * 1.12).toFixed(1);
  const greenChange = -(urbanExpansionPct * 0.31).toFixed(1);
  const infraDemand = +(urbanExpansionPct * 1.82).toFixed(1);
  const economicDev = +(urbanExpansionPct * 1.48).toFixed(1);

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      setHasSimulated(true);
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 }
      });
    }, 600);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-black text-white uppercase tracking-wide">
              POLICY IMPACT LAB
            </h1>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              Flagship Simulator
            </span>
          </div>
          <p className="text-xs text-slate-300 mt-0.5">
            Test and stress-test land policy scenarios before statutory implementation.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveView('split_map')}
            className="px-3.5 py-2 rounded bg-[#0f2942] hover:bg-[#1e3a8a] text-emerald-300 border border-emerald-500/40 font-bold text-xs transition-colors flex items-center gap-1.5 shadow-md"
          >
            <Split className="w-4 h-4 text-emerald-400" />
            <span>Open What-If Split Map</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Scenario Builder (Left) & Simulation Output (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT COL: Scenario Builder Controls */}
        <div className="bg-[#0f2942] border border-slate-700/80 rounded-xl p-5 space-y-5 shadow-xl flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-700/60 pb-2">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-emerald-400" />
                <h3 className="font-extrabold text-white text-xs uppercase tracking-wider">
                  Scenario Parameters - {selectedRegion}
                </h3>
              </div>
            </div>

            {/* Slider 1: Urban Expansion Corridor Growth */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold text-slate-200">
                <span>Urban Expansion Target:</span>
                <span className="text-amber-400 font-extrabold">+{urbanExpansionPct}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="25"
                step="5"
                value={urbanExpansionPct}
                onChange={(e) => setUrbanExpansionPct(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>+5% (Restrained)</span>
                <span>+10% (Planned)</span>
                <span>+20% (Aggressive)</span>
              </div>
            </div>

            {/* Control 2: Agricultural Protection Level */}
            <div className="space-y-1.5">
              <span className="text-xs font-semibold text-slate-200 block">
                Agricultural Farmland Protection Enforcement:
              </span>
              <div className="grid grid-cols-3 gap-2">
                {(['Low', 'Medium', 'High'] as const).map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setAgProtectLevel(lvl)}
                    className={`py-1.5 rounded text-xs font-bold transition-all ${
                      agProtectLevel === lvl
                        ? 'bg-emerald-500 text-slate-950 shadow-md'
                        : 'bg-[#0a192f] text-slate-300 hover:bg-slate-800 border border-slate-700/80'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Control 3: Infrastructure Investment */}
            <div className="space-y-1.5">
              <span className="text-xs font-semibold text-slate-200 block">
                Expressway & Freight Infra Corridor:
              </span>
              <div className="grid grid-cols-3 gap-2">
                {(['Low', 'Medium', 'High'] as const).map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setInfraInvestLevel(lvl)}
                    className={`py-1.5 rounded text-xs font-bold transition-all ${
                      infraInvestLevel === lvl
                        ? 'bg-blue-500 text-slate-950 shadow-md'
                        : 'bg-[#0a192f] text-slate-300 hover:bg-slate-800 border border-slate-700/80'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Control 4: Time Horizon */}
            <div className="space-y-1.5">
              <span className="text-xs font-semibold text-slate-200 block">
                Projection Time Horizon:
              </span>
              <div className="grid grid-cols-3 gap-2">
                {([5, 10, 20] as const).map((yr) => (
                  <button
                    key={yr}
                    onClick={() => setTimeHorizon(yr)}
                    className={`py-1.5 rounded text-xs font-bold transition-all ${
                      timeHorizon === yr
                        ? 'bg-amber-500 text-slate-950 shadow-md'
                        : 'bg-[#0a192f] text-slate-300 hover:bg-slate-800 border border-slate-700/80'
                    }`}
                  >
                    {yr} Years
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={handleRunSimulation}
            disabled={isSimulating}
            className="w-full py-3 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/40"
          >
            <FlaskConical className={`w-4 h-4 ${isSimulating ? 'animate-spin' : ''}`} />
            <span>{isSimulating ? 'Calculating Spatial Math...' : 'RUN SIMULATION'}</span>
          </button>
        </div>

        {/* RIGHT 2 COLS: Polished Simulation Results */}
        <div className="lg:col-span-2 space-y-5">
          {hasSimulated && (
            <div className="bg-[#0f2942] border border-slate-700/80 rounded-xl p-5 space-y-5 shadow-xl animate-fadeIn">
              {/* Output Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-700/60 pb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <h3 className="font-extrabold text-white text-base">
                      Simulated Impact Results ({selectedRegion} • {timeHorizon}-Yr Horizon)
                    </h3>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Projections recalculated based on DDA Master Plan & ICAR remote sensing equations.
                  </p>
                </div>
                <DemoDataTag label="Demo Simulation Model" />
              </div>

              {/* 4 Core Impact Indicators */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                {/* Land Use Impact */}
                <div className="bg-[#0a192f] border border-slate-800 rounded-lg p-3 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Land Use Impact
                  </span>
                  <div className="text-xl font-black text-red-400">{agLoss}%</div>
                  <p className="text-[11px] text-slate-300">Agricultural Land Net Loss</p>
                  <div className="text-[10px] text-emerald-400 font-semibold">Urban Area: +{urbanGain}%</div>
                </div>

                {/* Environmental Impact */}
                <div className="bg-[#0a192f] border border-slate-800 rounded-lg p-3 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Ecological Coverage
                  </span>
                  <div className="text-xl font-black text-amber-400">{greenChange}%</div>
                  <p className="text-[11px] text-slate-300">Green Canopy Reduction</p>
                  <div className="text-[10px] text-slate-400">Hydrological Retention: -4.2%</div>
                </div>

                {/* Economic Indicators */}
                <div className="bg-[#0a192f] border border-slate-800 rounded-lg p-3 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Economic Development
                  </span>
                  <div className="text-xl font-black text-emerald-400">+{economicDev}%</div>
                  <p className="text-[11px] text-slate-300">Housing & Commercial Potential</p>
                  <div className="text-[10px] text-emerald-400 font-semibold">Job Creation Index: High</div>
                </div>

                {/* Resource Requirement */}
                <div className="bg-[#0a192f] border border-slate-800 rounded-lg p-3 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Infra Demand Surge
                  </span>
                  <div className="text-xl font-black text-blue-400">+{infraDemand}%</div>
                  <p className="text-[11px] text-slate-300">Water & Power Grid Stress</p>
                  <div className="text-[10px] text-blue-400 font-semibold">Road Network Cap: High</div>
                </div>
              </div>

              {/* Policy Trade-Offs Matrix */}
              <div className="bg-[#071324] border border-slate-800 rounded-lg p-4 space-y-3">
                <h4 className="font-extrabold text-white text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
                  POLICY TRADE-OFFS ANALYSIS
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  {/* Benefits */}
                  <div className="bg-emerald-950/20 border border-emerald-500/30 rounded p-3 space-y-2">
                    <span className="font-bold text-emerald-400 flex items-center gap-1.5 uppercase text-[11px]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Projected Benefits:
                    </span>
                    <ul className="space-y-1 text-slate-300 text-[11px] list-disc list-inside">
                      <li>Expands high-density housing capacity for ~185,000 residents.</li>
                      <li>Improves peri-urban logistics transport connectivity by 24%.</li>
                      <li>Increases municipal tax revenue base by ₹420 Crore annually.</li>
                    </ul>
                  </div>

                  {/* Risks */}
                  <div className="bg-red-950/20 border border-red-500/30 rounded p-3 space-y-2">
                    <span className="font-bold text-red-400 flex items-center gap-1.5 uppercase text-[11px]">
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                      Identified Policy Risks:
                    </span>
                    <ul className="space-y-1 text-slate-300 text-[11px] list-disc list-inside">
                      <li>Permanent loss of multi-cropped fertile food grain soil ({agLoss}%).</li>
                      <li>Increases groundwater extraction stress in peri-urban blocks.</li>
                      <li>Potential agrarian displacement impacting ~12,400 farmers.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Evidence Base Behind Simulation */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Evidence Base Driving This Simulation Model
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {MOCK_EVIDENCE_ITEMS.slice(0, 2).map((doc) => (
                    <div key={doc.id} className="bg-[#0a192f] border border-slate-800 rounded p-2.5 text-xs space-y-1">
                      <div className="font-bold text-slate-200 line-clamp-1">{doc.title}</div>
                      <div className="text-[10px] text-emerald-400">{doc.sourceOrg} • {doc.category}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
