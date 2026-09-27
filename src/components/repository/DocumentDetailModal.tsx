import React from 'react';
import { X, CheckCircle2, GitBranch, Download, FlaskConical } from 'lucide-react';
import type { EvidenceItem } from '../../types';

interface DocumentDetailModalProps {
  document: EvidenceItem | null;
  onClose: () => void;
  onSimulateWithDoc?: (doc: EvidenceItem) => void;
}

export const DocumentDetailModal: React.FC<DocumentDetailModalProps> = ({
  document,
  onClose,
  onSimulateWithDoc,
}) => {
  if (!document) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#0f2942] border border-slate-700/80 rounded-xl w-full max-w-5xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-700 flex items-center justify-between bg-[#0a192f]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-extrabold px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 uppercase tracking-wider">
              {document.category}
            </span>
            <span className="text-xs font-mono text-slate-400">ID: {document.id}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{document.verificationStatus}</span>
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-2 flex-1 overflow-y-auto divide-y lg:divide-y-0 lg:divide-x divide-slate-700/80">
          {/* LEFT PANEL: Document Preview */}
          <div className="p-6 space-y-4 bg-[#071324] flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Simulated PDF Document Preview
                </span>
                <span className="text-[10px] font-mono text-slate-500">{document.version}</span>
              </div>

              <div className="border border-slate-800 rounded bg-[#0a192f] p-4 font-mono text-xs space-y-3 text-slate-300 min-h-[320px] shadow-inner">
                <div className="border-b border-slate-700 pb-2 flex justify-between font-extrabold text-white">
                  <span>GOVERNMENT OF INDIA EVIDENCE REGISTRY</span>
                  <span>{document.geography}</span>
                </div>

                <div className="text-sm font-bold text-emerald-300">{document.title}</div>
                <div className="text-[11px] text-slate-400">Source: {document.sourceOrg}</div>

                <div className="pt-2 border-t border-slate-800 space-y-2 text-[11px] leading-relaxed text-slate-300">
                  <p>
                    <strong>EXCERPT:</strong> "{document.extractedInsight}"
                  </p>
                  <p className="text-slate-400">
                    This document provides empirical spatial and policy metrics supporting land-use governance decisions for the {document.geography} study area. All cadastral boundaries referenced have been cross-checked with DILRMP digital registries.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button className="flex-1 py-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 border border-slate-700">
                <Download className="w-3.5 h-3.5 text-emerald-400" />
                <span>Download Official PDF (Demo)</span>
              </button>
            </div>
          </div>

          {/* RIGHT PANEL: Evidence Metadata & Provenance */}
          <div className="p-6 space-y-5 bg-[#0f2942] overflow-y-auto">
            <div>
              <h2 className="text-lg font-extrabold text-white leading-snug">{document.title}</h2>
              <p className="text-xs text-slate-300 mt-1">{document.sourceOrg} • Published {document.publicationDate}</p>
            </div>

            {/* Metadata Table */}
            <div className="bg-[#0a192f] border border-slate-800 rounded-lg p-3 space-y-2 text-xs">
              <div className="grid grid-cols-2 gap-2 border-b border-slate-800 pb-2">
                <div>
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">Publisher</span>
                  <span className="font-semibold text-slate-200">{document.sourceOrg}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">Geographic Coverage</span>
                  <span className="font-semibold text-emerald-400">{document.geography}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">Document Version</span>
                  <span className="font-semibold text-amber-300">{document.version}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">Verification Status</span>
                  <span className="font-semibold text-emerald-400">{document.verificationStatus}</span>
                </div>
              </div>
            </div>

            {/* Extracted Insights & Usage */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Extracted Insight
              </span>
              <p className="text-xs text-slate-200 bg-[#0a192f] border border-slate-800 rounded p-3 leading-relaxed font-mono">
                {document.extractedInsight}
              </p>
            </div>

            {/* Blockchain SHA-256 Provenance Concept */}
            <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-lg p-3 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300">
                  <GitBranch className="w-4 h-4 text-emerald-400" />
                  <span>Blockchain Immutable Provenance</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 font-bold">VERIFIED</span>
              </div>

              <div className="text-[11px] font-mono text-slate-300 space-y-1">
                <div className="truncate">
                  <span className="text-slate-400">SHA-256: </span>
                  <span className="text-emerald-400">{document.sha256Hash}</span>
                </div>
                {document.previousVersionHash && (
                  <div className="truncate">
                    <span className="text-slate-400">Prev Hash: </span>
                    <span>{document.previousVersionHash}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-2">
              {onSimulateWithDoc && (
                <button
                  onClick={() => {
                    onSimulateWithDoc(document);
                    onClose();
                  }}
                  className="w-full py-2.5 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wide transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <FlaskConical className="w-4 h-4" />
                  <span>Use Document In Policy Simulation</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
