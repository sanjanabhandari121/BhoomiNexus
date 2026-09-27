import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { DemoDataTag } from '../common/DemoDataTag';
import { MOCK_AUDIT_LOGS } from '../../data/demoDataSources';

export const ProvenanceTrace: React.FC = () => {
  const steps = [
    {
      step: '01',
      type: 'SOURCE',
      title: 'Raw Earth Observation Data',
      source: 'ISRO Bhuvan Geo-Portal / NRSC Satellite',
      method: 'Sentinel-2 L2A 10m Multi-spectral Imagery',
      hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
      time: '2026-01-05 08:30:00',
      status: 'Verified'
    },
    {
      step: '02',
      type: 'DATASET',
      title: 'Normalized Land Cover Raster',
      source: 'DoLR / DILRMP GIS Pipeline',
      method: 'PostGIS Spatial Intersection with Cadastral Khasras',
      hash: '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08',
      time: '2026-01-05 10:14:22',
      status: 'Verified'
    },
    {
      step: '03',
      type: 'PROCESSING',
      title: 'Semantic Vector Normalization',
      source: 'BhoomiNexus Pipeline Engine',
      method: 'LangChain Vector Embeddings & Legal Graph Mapping',
      hash: '4b227777d4da16a1aea9b8713ed58d045d949cf94c340827a8934757c3d7f49a',
      time: '2026-01-05 10:15:00',
      status: 'Verified'
    },
    {
      step: '04',
      type: 'SEMANTIC_AI',
      title: 'AI Synthesis & Citation Index',
      source: 'Bhoomi Intelligence Model',
      method: 'Cross-document Citation Graph Synthesis',
      hash: '1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b',
      time: '2026-09-27 16:54:12',
      status: 'Verified'
    },
    {
      step: '05',
      type: 'SIMULATION',
      title: 'Policy Impact Simulation Output',
      source: 'Policy Impact Lab Engine',
      method: 'Spatial Math Matrix Calculation',
      hash: 'c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8',
      time: '2026-09-27 17:10:44',
      status: 'Verified'
    },
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-extrabold text-white">Evidence Provenance & Audit Trail</h1>
            <DemoDataTag label="Prototype Integrity Layer" />
          </div>
          <p className="text-xs text-slate-300 mt-0.5">
            Every insight and policy simulation is mathematically traceable back to raw satellite rasters and statutory revenue logs.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 px-3 py-1.5 rounded text-xs font-mono font-bold">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Blockchain Ledger Hash Verified</span>
        </div>
      </div>

      {/* Blockchain Integrity Concept Card */}
      <div className="bg-[#0f2942] border border-slate-700/80 rounded-xl p-5 space-y-4 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-700/60 pb-3">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">EVIDENCE IDENTIFIER</span>
            <div className="text-lg font-black text-white font-mono">BHMX-8F92-21A7</div>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <div className="text-right">
              <span className="text-slate-400 text-[10px] uppercase font-bold block">Current Revision</span>
              <span className="text-amber-300 font-bold font-mono">Version v3.2 (Prev: v3.1)</span>
            </div>
            <span className="px-3 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold uppercase tracking-wider text-[11px]">
              ✓ Verified Immutability
            </span>
          </div>
        </div>

        {/* Visual Lineage Flow Graph */}
        <div className="space-y-3 pt-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
            End-to-End Visual Lineage Trace:
          </span>

          <div className="space-y-3 relative">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className="bg-[#0a192f] border border-slate-800 hover:border-emerald-500/50 rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/40 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                    {s.step}
                  </span>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-extrabold px-2 py-0.2 rounded bg-slate-800 text-slate-300 border border-slate-700 uppercase">
                        {s.type}
                      </span>
                      <h4 className="font-bold text-white text-xs">{s.title}</h4>
                    </div>
                    <p className="text-[11px] text-slate-300">{s.source} • {s.method}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-right">
                  <div className="space-y-0.5 font-mono text-[10px]">
                    <div className="text-emerald-400 font-bold">SHA-256: {s.hash.substring(0, 16)}...</div>
                    <div className="text-slate-500">{s.time}</div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Immutable Audit Log Table */}
      <div className="bg-[#0f2942] border border-slate-700/80 rounded-xl p-5 space-y-4 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-700/60 pb-3">
          <h3 className="font-extrabold text-white text-sm uppercase tracking-wider">
            System Cryptographic Audit Log
          </h3>
          <span className="text-xs text-slate-400 font-mono">Filter: All Authenticated Sessions</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300 border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-[10px] text-slate-400 uppercase tracking-wider font-bold">
                <th className="py-2 px-3">Timestamp</th>
                <th className="py-2 px-3">User / Role</th>
                <th className="py-2 px-3">Action</th>
                <th className="py-2 px-3">Target Dataset / Scenario</th>
                <th className="py-2 px-3">Verification Hash</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 font-mono text-[11px]">
              {MOCK_AUDIT_LOGS.map((log) => (
                <tr key={log.id} className="hover:bg-[#0a192f] transition-colors">
                  <td className="py-2.5 px-3 text-slate-400">{log.timestamp}</td>
                  <td className="py-2.5 px-3">
                    <span className="font-bold text-slate-200">{log.userName}</span>
                    <span className="text-[9px] block text-emerald-400">{log.userRole}</span>
                  </td>
                  <td className="py-2.5 px-3 font-bold text-amber-300">{log.action}</td>
                  <td className="py-2.5 px-3 text-slate-300 font-sans truncate max-w-xs">{log.targetItem}</td>
                  <td className="py-2.5 px-3 text-emerald-400 font-bold">{log.verificationHash.substring(0, 12)}...</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
