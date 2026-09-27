import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { DemoDataTag } from '../common/DemoDataTag';

export const DataQualityCenter: React.FC = () => {
  const warnings = [
    { id: 1, type: 'Stale Data', text: 'Jaipur Rural district boundary vector data was updated 120 days ago. Sync recommended.', severity: 'Moderate' },
    { id: 2, type: 'Conflict Alert', text: '3 datasets contain conflicting land-use classifications between ISRO raster layers and BhuLekh revenue registries.', severity: 'High' },
    { id: 3, type: 'Unverified Lease', text: 'Najafgarh Block B Khasra #884 tagged under conditional commercial lease application pending revenue verification.', severity: 'Low' }
  ];

  return (
    <div className="space-y-6 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-extrabold text-white">Data Quality & Validation Center</h1>
            <DemoDataTag label="Infrastructure Health" />
          </div>
          <p className="text-xs text-slate-300 mt-0.5">
            Automated anomaly detection flagging stale vector layers, schema conflicts, and revenue record discrepancies.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
        <div className="bg-[#0f2942] border border-slate-700/80 rounded-lg p-3 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-bold block">Completeness</span>
          <div className="text-xl font-black text-emerald-400">88.4%</div>
          <p className="text-[10px] text-slate-400">3 missing attribute fields</p>
        </div>

        <div className="bg-[#0f2942] border border-slate-700/80 rounded-lg p-3 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-bold block">Freshness Score</span>
          <div className="text-xl font-black text-emerald-400">94.0%</div>
          <p className="text-[10px] text-slate-400">Synced 10 mins ago</p>
        </div>

        <div className="bg-[#0f2942] border border-slate-700/80 rounded-lg p-3 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-bold block">Consistency Score</span>
          <div className="text-xl font-black text-amber-400">91.2%</div>
          <p className="text-[10px] text-slate-400">1 active classification conflict</p>
        </div>

        <div className="bg-[#0f2942] border border-slate-700/80 rounded-lg p-3 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-bold block">Duplication Rate</span>
          <div className="text-xl font-black text-emerald-400">0.02%</div>
          <p className="text-[10px] text-slate-400">Deduplication engine clean</p>
        </div>
      </div>

      {/* Warnings & Anomalies Feed */}
      <div className="bg-[#0f2942] border border-slate-700/80 rounded-xl p-5 space-y-4 shadow-xl">
        <h3 className="font-extrabold text-white text-xs uppercase tracking-wider border-b border-slate-700/60 pb-2 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          <span>Active Quality Warnings & Discrepancy Alerts ({warnings.length})</span>
        </h3>

        <div className="space-y-3 text-xs">
          {warnings.map((w) => (
            <div key={w.id} className="bg-[#0a192f] border border-amber-500/30 rounded-lg p-3 space-y-1 flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div className="flex-1 space-y-0.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-amber-300">{w.type}</span>
                  <span className="text-[10px] font-bold px-2 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 uppercase">
                    Severity: {w.severity}
                  </span>
                </div>
                <p className="text-slate-300 leading-relaxed">{w.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
