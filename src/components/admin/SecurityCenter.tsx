import React from 'react';
import { DemoDataTag } from '../common/DemoDataTag';

export const SecurityCenter: React.FC = () => {
  return (
    <div className="space-y-6 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-extrabold text-white">Security & Access Control Center</h1>
            <DemoDataTag label="NIC Cyber Compliance" />
          </div>
          <p className="text-xs text-slate-300 mt-0.5">
            Role-based access control (RBAC), API key management, and cryptographic evidence protection.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Role Access Matrix */}
        <div className="bg-[#0f2942] border border-slate-700/80 rounded-xl p-5 space-y-4 shadow-xl">
          <h3 className="font-extrabold text-white text-xs uppercase tracking-wider border-b border-slate-700/60 pb-2">
            Role-Based Access Control (RBAC) Matrix
          </h3>

          <div className="space-y-2 text-xs">
            <div className="bg-[#0a192f] border border-slate-800 rounded p-3 space-y-1">
              <div className="flex justify-between font-bold">
                <span className="text-emerald-400">Researcher Persona</span>
                <span className="text-slate-400">Full Access</span>
              </div>
              <p className="text-[11px] text-slate-300">Semantic evidence search, paper citation graph, GIS layers, dataset export.</p>
            </div>

            <div className="bg-[#0a192f] border border-slate-800 rounded p-3 space-y-1">
              <div className="flex justify-between font-bold">
                <span className="text-amber-400">Policymaker Persona</span>
                <span className="text-slate-400">Full Access</span>
              </div>
              <p className="text-[11px] text-slate-300">Policy Impact Lab simulator, scenario trade-off comparison, policy brief exporter.</p>
            </div>

            <div className="bg-[#0a192f] border border-slate-800 rounded p-3 space-y-1">
              <div className="flex justify-between font-bold">
                <span className="text-blue-400">Government Dept Official</span>
                <span className="text-slate-400">Restricted Revenue Access</span>
              </div>
              <p className="text-[11px] text-slate-300">DILRMP cadastral vector editing, Khasra ownership batch verification, audit trail.</p>
            </div>

            <div className="bg-[#0a192f] border border-slate-800 rounded p-3 space-y-1">
              <div className="flex justify-between font-bold">
                <span className="text-slate-400">Citizen View</span>
                <span className="text-slate-500">Read-Only Public Interface</span>
              </div>
              <p className="text-[11px] text-slate-300">Public land information, scheme beneficiary statistics, plain-language policy guides.</p>
            </div>
          </div>
        </div>

        {/* Cryptographic Security Panel */}
        <div className="bg-[#0f2942] border border-slate-700/80 rounded-xl p-5 space-y-4 shadow-xl">
          <h3 className="font-extrabold text-white text-xs uppercase tracking-wider border-b border-slate-700/60 pb-2">
            Cybersecurity & Integrity Parameters
          </h3>

          <div className="space-y-3 text-xs">
            <div className="bg-[#0a192f] border border-slate-800 rounded p-3 space-y-1 font-mono">
              <span className="text-slate-400 text-[10px] uppercase font-bold block">Encryption at Rest & Transit</span>
              <div className="text-emerald-400 font-bold">AES-256 / TLS 1.3 Enforced</div>
            </div>

            <div className="bg-[#0a192f] border border-slate-800 rounded p-3 space-y-1 font-mono">
              <span className="text-slate-400 text-[10px] uppercase font-bold block">Evidence Integrity Mechanism</span>
              <div className="text-amber-300 font-bold">SHA-256 Immutable Hash Chain</div>
            </div>

            <div className="bg-[#0a192f] border border-slate-800 rounded p-3 space-y-1 font-mono">
              <span className="text-slate-400 text-[10px] uppercase font-bold block">Government API Gateway</span>
              <div className="text-blue-400 font-bold">NIC Token OAuth 2.0 Mutual TLS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
