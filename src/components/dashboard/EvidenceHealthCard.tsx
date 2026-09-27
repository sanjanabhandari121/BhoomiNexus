import React from 'react';
import { Activity } from 'lucide-react';
import { DemoDataTag } from '../common/DemoDataTag';

export const EvidenceHealthCard: React.FC = () => {
  const metrics = [
    { label: 'Source Freshness', value: '94%', sub: 'Last sync 10 mins ago', status: 'Optimal', color: 'emerald' },
    { label: 'Data Completeness', value: '88%', sub: '3 conflicting attributes flagged', status: 'Good', color: 'blue' },
    { label: 'Verification Status', value: '98%', sub: 'Digitally signed via DoLR & ISRO', status: 'Verified', color: 'emerald' },
    { label: 'Provenance Coverage', value: '100%', sub: 'Full SHA-256 chain available', status: 'Audit Ready', color: 'amber' }
  ];

  return (
    <div className="bg-[#0f2942] border border-slate-700/80 rounded-lg p-4 space-y-3 shadow-lg">
      <div className="flex items-center justify-between border-b border-slate-700/60 pb-2.5">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
          <h3 className="font-bold text-white text-xs uppercase tracking-wider">
            Evidence Health & Integrity Index
          </h3>
        </div>
        <DemoDataTag label="Prototype Health Metrics" />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
        {metrics.map((m, idx) => (
          <div key={idx} className="bg-[#0a192f] border border-slate-800 rounded p-3 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-slate-400 font-medium">{m.label}</span>
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded uppercase ${
                m.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-300' :
                m.color === 'amber' ? 'bg-amber-500/20 text-amber-300' :
                'bg-blue-500/20 text-blue-300'
              }`}>
                {m.status}
              </span>
            </div>
            <div className="text-xl font-black text-white">{m.value}</div>
            <p className="text-[10px] text-slate-400 truncate">{m.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
