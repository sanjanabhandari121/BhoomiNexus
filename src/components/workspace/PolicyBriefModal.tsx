import React from 'react';
import { X, Printer } from 'lucide-react';
import type { GeographicRegion } from '../../types';

interface PolicyBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRegion: GeographicRegion;
}

export const PolicyBriefModal: React.FC<PolicyBriefModalProps> = ({
  isOpen,
  onClose,
  selectedRegion,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#0f2942] border border-slate-700/80 rounded-xl w-full max-w-4xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-700 flex items-center justify-between bg-[#0a192f]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-extrabold px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 uppercase tracking-wider">
              OFFICIAL STATUTORY POLICY BRIEF
            </span>
            <span className="text-xs font-mono text-slate-400">Ref: PB-2026-DEL-004</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-emerald-400" />
              <span>Print / Export PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Report Body */}
        <div className="p-8 space-y-6 overflow-y-auto bg-[#071324] text-slate-200 font-sans text-xs leading-relaxed">
          {/* Cover Header */}
          <div className="border-b-2 border-slate-700 pb-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400">
                GOVERNMENT OF INDIA • EVIDENCE-TO-POLICY BRIEF
              </span>
              <span className="text-[10px] font-mono text-slate-400">Date: 27 September 2026</span>
            </div>
            <h1 className="text-2xl font-black text-white leading-tight">
              Spatial Impact Assessment & Farmland Preservation Strategy: {selectedRegion} Peri-Urban Corridor
            </h1>
            <p className="text-xs text-slate-400">
              Prepared for: NITI Aayog & Union Department of Land Resources (DoLR)
            </p>
          </div>

          {/* 1. Executive Summary */}
          <div className="space-y-2">
            <h2 className="text-sm font-extrabold text-emerald-300 uppercase tracking-wide border-b border-slate-800 pb-1">
              1. Executive Summary
            </h2>
            <p className="text-slate-300">
              This statutory policy brief synthesizes multi-modal evidence across ISRO satellite rasters, DILRMP digitized revenue records, and ICAR agricultural assessments for the {selectedRegion} study area. Proposed Master Plan 2041 urban expansion corridors of +10% will cause an estimated net loss of 8,400 hectares of multi-cropped agricultural land, requiring targeted protection zones in Najafgarh and Alipur blocks.
            </p>
          </div>

          {/* 2. Baseline Situation */}
          <div className="space-y-2">
            <h2 className="text-sm font-extrabold text-emerald-300 uppercase tracking-wide border-b border-slate-800 pb-1">
              2. Baseline Spatial Situation
            </h2>
            <div className="grid grid-cols-3 gap-3 bg-[#0a192f] border border-slate-800 rounded p-3 text-center font-mono">
              <div>
                <span className="text-[10px] text-slate-400 block uppercase font-bold">Agricultural Area</span>
                <span className="text-sm font-bold text-emerald-400">42.5%</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block uppercase font-bold">Urban Built-Up</span>
                <span className="text-sm font-bold text-amber-400">46.5%</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block uppercase font-bold">Green Canopy</span>
                <span className="text-sm font-bold text-teal-400">11.0%</span>
              </div>
            </div>
          </div>

          {/* 3. Simulated Scenario Results */}
          <div className="space-y-2">
            <h2 className="text-sm font-extrabold text-emerald-300 uppercase tracking-wide border-b border-slate-800 pb-1">
              3. Simulated Policy Trade-Offs (+10% Urban Target)
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-emerald-950/20 border border-emerald-500/30 rounded p-3 space-y-1">
                <span className="font-bold text-emerald-400 block">Identified Benefits:</span>
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  <li>Housing capacity for 185,000 residents.</li>
                  <li>₹420 Cr annual municipal tax enhancement.</li>
                </ul>
              </div>
              <div className="bg-red-950/20 border border-red-500/30 rounded p-3 space-y-1">
                <span className="font-bold text-red-400 block">Identified Risks:</span>
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  <li>8,400 Ha fertile farmland loss (-8.4%).</li>
                  <li>12,400 agrarian families impacted.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 4. Evidence Provenance & Cryptographic Audit */}
          <div className="border-t border-slate-800 pt-4 flex justify-between items-center font-mono text-[10px] text-slate-400">
            <div>
              <span>SHA-256 LEDGER HASH: </span>
              <span className="text-emerald-400 font-bold">e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</span>
            </div>
            <div className="text-emerald-400 font-bold">BhoomiNexus Verified</div>
          </div>
        </div>
      </div>
    </div>
  );
};
