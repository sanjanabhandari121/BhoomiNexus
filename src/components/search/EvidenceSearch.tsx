import React, { useState } from 'react';
import {
  Search,
  Filter,
  BookOpen,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Info,
  GitBranch
} from 'lucide-react';
import { MOCK_EVIDENCE_ITEMS } from '../../data/demoEvidence';
import type { EvidenceItem, ViewMode } from '../../types';
import { DemoDataTag } from '../common/DemoDataTag';

interface EvidenceSearchProps {
  initialQuery?: string;
  setActiveView: (view: ViewMode) => void;
  onSelectDocument: (doc: EvidenceItem) => void;
}

export const EvidenceSearch: React.FC<EvidenceSearchProps> = ({
  initialQuery = 'How would expanding urban boundaries affect agricultural land around Delhi NCR?',
  setActiveView,
  onSelectDocument,
}) => {
  const [query, setQuery] = useState(initialQuery);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('All');
  const [expandedWhyId, setExpandedWhyId] = useState<string | null>(null);

  const samplePresets = [
    'How would expanding urban boundaries affect agricultural land around Delhi NCR?',
    'What are the legal buffer restrictions on Yamuna floodplain land conversion?',
    'Show ISRO satellite land cover change trends in Gurugram (2018-2026)',
    'Digitized Khasra ownership records for Najafgarh Sub-division'
  ];

  const categories = ['All', 'Policy Document', 'Research Paper', 'Land Record', 'GIS Dataset', 'Court Ruling', 'Government Scheme'];

  const filteredItems = MOCK_EVIDENCE_ITEMS.filter((item) => {
    if (activeCategoryFilter !== 'All' && item.category !== activeCategoryFilter) return false;
    return true;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Header Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-extrabold text-white">Semantic Evidence Search</h1>
            <DemoDataTag label="Indexed Evidence Base" />
          </div>
          <p className="text-xs text-slate-300 mt-0.5">
            Cross-examine multi-modal evidence across land records, satellite layers, policy frameworks, and academic research.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveView('repository')}
            className="px-3 py-1.5 rounded bg-[#0f2942] hover:bg-[#1e3a8a] text-slate-200 border border-slate-700 text-xs font-semibold transition-colors flex items-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span>Browse Full Repository</span>
          </button>
        </div>
      </div>

      {/* Main Search Input & Presets */}
      <div className="bg-[#0f2942] border border-slate-700/80 rounded-xl p-4 space-y-3 shadow-xl">
        <div className="relative flex items-center">
          <Search className="w-5 h-5 text-emerald-400 absolute left-3.5 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type your land governance question..."
            className="w-full bg-[#0a192f] border border-slate-700/80 rounded-lg pl-11 pr-28 py-3 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-emerald-400 transition-colors font-medium shadow-inner"
          />
          <button
            onClick={() => {}}
            className="absolute right-2 px-4 py-1.5 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wide transition-colors"
          >
            Search
          </button>
        </div>

        {/* Preset Chips */}
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            Suggested SIH Demonstration Queries:
          </span>
          <div className="flex flex-wrap gap-2">
            {samplePresets.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => setQuery(preset)}
                className={`text-left text-xs px-2.5 py-1 rounded border transition-all ${
                  query === preset
                    ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/60 font-semibold'
                    : 'bg-[#0a192f] text-slate-300 hover:bg-slate-800 border-slate-700/60'
                }`}
              >
                {preset}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* AI Evidence Synthesis Card */}
      <div className="bg-gradient-to-r from-emerald-950/60 via-[#0f2942] to-[#0a192f] border border-emerald-500/40 rounded-xl p-5 space-y-4 shadow-xl">
        <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-400" />
            <h3 className="font-extrabold text-white text-sm tracking-wide">
              AI Evidence Synthesis
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              Based on 7 Verified Sources
            </span>
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
              Evidence Confidence: High (94%)
            </span>
          </div>
        </div>

        {/* Synthesis Points */}
        <div className="space-y-2 text-xs text-slate-200 leading-relaxed">
          <p className="font-semibold text-emerald-300">
            Synthesis Rationale for Urban Boundary Expansion around Delhi NCR:
          </p>
          <ul className="space-y-1.5 list-disc list-inside text-slate-300">
            <li>
              <strong className="text-white">Farmland Loss Rate:</strong> Official ICAR remote sensing papers and ISRO raster layers confirm a net conversion of 8,400 ha of prime agricultural land in Najafgarh & Alipur blocks between 2018 and 2025.
            </li>
            <li>
              <strong className="text-white">Master Plan Provisions:</strong> DDA Master Plan 2041 allocates 14,200 ha for eco-housing corridors, creating direct overlap with high-yielding agricultural buffer zones.
            </li>
            <li>
              <strong className="text-white">Legal & Hydrological Limits:</strong> Supreme Court & NGT orders mandate a 500m non-construction riverine buffer along Yamuna, creating explicit legal policy boundaries.
            </li>
          </ul>
        </div>

        {/* Explicit Human Oversight Rationale */}
        <div className="bg-[#0a192f]/80 border border-slate-800 rounded p-3 text-[11px] text-slate-400 flex items-start gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-slate-300 block">Transparent Decision Support Notice</span>
            This AI synthesis is generated algorithmically by referencing indexed government and academic documents. It does not replace human statutory discretion. Review supporting documents below.
          </div>
        </div>
      </div>

      {/* Category Filter Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        <span className="text-slate-400 font-semibold text-[11px] flex items-center gap-1 mr-1">
          <Filter className="w-3.5 h-3.5" />
          Filter:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategoryFilter(cat)}
            className={`px-3 py-1 rounded text-xs font-semibold whitespace-nowrap transition-all ${
              activeCategoryFilter === cat
                ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                : 'bg-[#0f2942] text-slate-300 hover:bg-slate-800 border border-slate-700/80'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Evidence Search Results Feed */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-400 px-1">
          <span>Showing {filteredItems.length} verified evidence results</span>
          <span className="font-mono text-emerald-400">SHA-256 Validated</span>
        </div>

        {filteredItems.map((doc) => {
          const isWhyExpanded = expandedWhyId === doc.id;
          return (
            <div
              key={doc.id}
              className="bg-[#0f2942] border border-slate-700/80 hover:border-emerald-500/50 rounded-xl p-5 space-y-3 transition-all shadow-lg"
            >
              {/* Header row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-700/60 pb-2.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 uppercase tracking-wider">
                    {doc.category}
                  </span>
                  <span className="text-[11px] text-slate-400 font-semibold">
                    {doc.sourceOrg}
                  </span>
                  <span className="text-[11px] text-slate-500">• {doc.publicationDate}</span>
                  <span className="text-[11px] text-slate-500">• {doc.geography}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                    Relevance {doc.relevanceScore}%
                  </span>
                  <span className="text-[11px] font-bold text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
                    {doc.version}
                  </span>
                </div>
              </div>

              {/* Title & Extracted Insight */}
              <div className="space-y-1.5">
                <h3
                  onClick={() => onSelectDocument(doc)}
                  className="text-base font-bold text-white hover:text-emerald-300 cursor-pointer transition-colors"
                >
                  {doc.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed bg-[#0a192f] border border-slate-800 rounded p-3 font-mono">
                  <strong className="text-emerald-400">Extracted Insight:</strong> "{doc.extractedInsight}"
                </p>
              </div>

              {/* Related Policies & SHA-256 Hash */}
              <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-400 gap-2 pt-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-semibold text-slate-300">Related Policies:</span>
                  {doc.relatedPolicies.map((pol, idx) => (
                    <span key={idx} className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
                      {pol}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400">
                  <GitBranch className="w-3 h-3 text-emerald-400" />
                  <span>Hash: {doc.sha256Hash.substring(0, 16)}...</span>
                </div>
              </div>

              {/* Footer Rationale & Actions */}
              <div className="pt-2 border-t border-slate-700/60 flex items-center justify-between text-xs">
                <button
                  onClick={() => setExpandedWhyId(isWhyExpanded ? null : doc.id)}
                  className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
                >
                  <span>Why this result?</span>
                  {isWhyExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onSelectDocument(doc)}
                    className="px-3 py-1 rounded bg-[#0a192f] hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold transition-colors flex items-center gap-1"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                    <span>View Evidence Metadata</span>
                  </button>
                </div>
              </div>

              {/* Expanded "Why this result?" rationale box */}
              {isWhyExpanded && (
                <div className="bg-[#071324] border border-emerald-500/30 rounded p-3 text-xs space-y-1 text-slate-300 animate-fadeIn">
                  <span className="font-bold text-emerald-300 block">Match Explanation & Algorithmic Provenance:</span>
                  <p className="text-[11px] leading-relaxed">{doc.whyThisResult}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
