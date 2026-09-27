import React from 'react';
import type { DistrictGisData, EvidenceItem } from '../../types';
import { X } from 'lucide-react';
import { MOCK_EVIDENCE_ITEMS } from '../../data/demoEvidence';

interface DistrictIntelligencePanelProps {
  district: DistrictGisData;
  onClose: () => void;
  onSelectDoc: (doc: EvidenceItem) => void;
  selectedYear: number;
}

export const DistrictIntelligencePanel: React.FC<DistrictIntelligencePanelProps> = ({
  district,
  onClose,
  onSelectDoc,
  selectedYear,
}) => {
  const currentTimelineData = district.timelineData.find(t => t.year === selectedYear) || district.timelineData[district.timelineData.length - 1];

  return (
    <div className="bg-[#0f2942] border-l border-slate-700/80 w-80 lg:w-96 h-full flex flex-col justify-between shadow-2xl p-5 space-y-4 overflow-y-auto animate-slideLeft z-20">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-700/60 pb-3">
          <div className="space-y-0.5">
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
              District Intelligence ({selectedYear})
            </span>
            <h2 className="text-lg font-extrabold text-white">{district.name}</h2>
            <p className="text-xs text-slate-300">{district.state} • {district.totalAreaKm2.toLocaleString()} km²</p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dynamic Metric Breakdown for Selected Timeline Year */}
        <div className="space-y-3 bg-[#0a192f] border border-slate-800 rounded-lg p-3">
          <div className="text-xs font-bold text-slate-300 border-b border-slate-800 pb-1.5 flex justify-between">
            <span>Spatial Distribution ({selectedYear})</span>
            <span className="text-amber-400 font-mono">{district.recentChangeRate}</span>
          </div>

          <div className="space-y-2 text-xs">
            <div>
              <div className="flex justify-between text-[11px] text-slate-300 font-semibold mb-1">
                <span>Agricultural Area</span>
                <span className="text-emerald-400 font-mono">{currentTimelineData.agPct}%</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 transition-all duration-500" style={{ width: `${currentTimelineData.agPct}%` }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[11px] text-slate-300 font-semibold mb-1">
                <span>Urban / Built-up Area</span>
                <span className="text-amber-400 font-mono">{currentTimelineData.urbanPct}%</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 transition-all duration-500" style={{ width: `${currentTimelineData.urbanPct}%` }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[11px] text-slate-300 font-semibold mb-1">
                <span>Forest & Green Cover</span>
                <span className="text-teal-400 font-mono">{currentTimelineData.forestPct}%</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-teal-500 transition-all duration-500" style={{ width: `${currentTimelineData.forestPct}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Evidence Behind This Insight */}
        <div className="space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
            Evidence Behind This Spatial Insight
          </span>

          <div className="space-y-2">
            {MOCK_EVIDENCE_ITEMS.slice(0, 3).map((doc) => (
              <div
                key={doc.id}
                onClick={() => onSelectDoc(doc)}
                className="bg-[#0a192f] border border-slate-800 hover:border-emerald-500/50 rounded p-2.5 space-y-1 cursor-pointer transition-all"
              >
                <div className="flex items-center justify-between text-[10px]">
                  <span className="font-bold text-emerald-400">{doc.category}</span>
                  <span className="text-slate-500">{doc.publicationDate}</span>
                </div>
                <div className="text-xs font-semibold text-slate-200 line-clamp-1 hover:text-emerald-300">
                  {doc.title}
                </div>
                <p className="text-[10px] text-slate-400 line-clamp-1">{doc.sourceOrg}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-slate-700/60">
        <div className="text-[10px] text-slate-400 font-mono text-center">
          DILRMP Cadastral Overlay • SHA-256 Validated
        </div>
      </div>
    </div>
  );
};
