import React from 'react';
import { RefreshCw } from 'lucide-react';
import { MOCK_DATA_SOURCES } from '../../data/demoDataSources';
import { DemoDataTag } from '../common/DemoDataTag';

export const DataSourcesAdmin: React.FC = () => {
  return (
    <div className="space-y-6 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-extrabold text-white">Data Sources & API Integration Monitor</h1>
            <DemoDataTag label="10 Portals Connected" />
          </div>
          <p className="text-xs text-slate-300 mt-0.5">
            Interoperable REST & OGC GIS gateway connections across national revenue and satellite portals.
          </p>
        </div>

        <button className="px-3 py-1.5 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wide transition-colors flex items-center gap-1.5 shadow-md">
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Ping All Endpoints</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {MOCK_DATA_SOURCES.map((ds) => (
          <div
            key={ds.id}
            className="bg-[#0f2942] border border-slate-700/80 rounded-xl p-4 space-y-3 shadow-lg hover:border-slate-600 transition-all"
          >
            <div className="flex items-center justify-between border-b border-slate-700/60 pb-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{ds.category}</span>
              <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded uppercase ${
                ds.status === 'Online' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
              }`}>
                {ds.status}
              </span>
            </div>

            <div>
              <h3 className="font-extrabold text-white text-sm">{ds.name}</h3>
              <p className="text-[11px] text-slate-300 font-mono mt-0.5">{ds.recordsCount}</p>
            </div>

            <div className="bg-[#0a192f] border border-slate-800 rounded p-2.5 text-[11px] space-y-1 font-mono">
              <div className="flex justify-between text-slate-300">
                <span>Quality Score:</span>
                <span className="text-emerald-400 font-bold">{ds.qualityScore}%</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Last Sync:</span>
                <span className="text-slate-400">{ds.lastSync}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
