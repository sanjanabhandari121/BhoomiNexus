import React, { useState } from 'react';
import {
  Search,
  GitBranch,
  ArrowRight
} from 'lucide-react';
import { MOCK_EVIDENCE_ITEMS } from '../../data/demoEvidence';
import type { EvidenceItem, ViewMode } from '../../types';
import { DocumentDetailModal } from './DocumentDetailModal';
import { DemoDataTag } from '../common/DemoDataTag';

interface EvidenceRepositoryProps {
  setActiveView: (view: ViewMode) => void;
  selectedDocument: EvidenceItem | null;
  setSelectedDocument: (doc: EvidenceItem | null) => void;
}

export const EvidenceRepository: React.FC<EvidenceRepositoryProps> = ({
  setActiveView,
  selectedDocument,
  setSelectedDocument,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'All',
    'Land Record',
    'Policy Document',
    'Government Scheme',
    'Research Paper',
    'Environmental Report',
    'GIS Dataset',
    'Court Ruling'
  ];

  const filteredDocs = MOCK_EVIDENCE_ITEMS.filter((doc) => {
    if (activeCategory !== 'All' && doc.category !== activeCategory) return false;
    if (searchTerm && !doc.title.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-extrabold text-white">National Evidence Repository</h1>
            <DemoDataTag label="Indexed Catalog" />
          </div>
          <p className="text-xs text-slate-300 mt-0.5">
            Structured archive of land records, policy drafts, remote sensing datasets, and legal rulings for decision support.
          </p>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-[#0f2942] border border-slate-700/80 rounded-xl p-4 space-y-3 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search repository titles, agencies, or Khasra IDs..."
              className="w-full bg-[#0a192f] border border-slate-700/80 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:border-emerald-400"
            />
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <span className="text-slate-400 font-semibold text-[11px] shrink-0">Category:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md'
                  : 'bg-[#0a192f] text-slate-300 hover:bg-slate-800 border border-slate-700/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Document Grid Catalog */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDocs.map((doc) => (
          <div
            key={doc.id}
            className="bg-[#0f2942] border border-slate-700/80 hover:border-emerald-500/60 rounded-xl p-4 flex flex-col justify-between space-y-3 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 uppercase tracking-wider">
                  {doc.category}
                </span>
                <span className="text-[10px] font-mono text-slate-400">{doc.version}</span>
              </div>

              <h3 className="font-bold text-white text-sm hover:text-emerald-300 cursor-pointer transition-colors leading-snug">
                {doc.title}
              </h3>

              <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed font-mono">
                "{doc.extractedInsight}"
              </p>
            </div>

            <div className="space-y-2 border-t border-slate-700/60 pt-3">
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span className="truncate">{doc.sourceOrg}</span>
                <span className="text-emerald-400 font-semibold">{doc.geography}</span>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                  <GitBranch className="w-3 h-3 text-emerald-400" />
                  <span>{doc.sha256Hash.substring(0, 10)}...</span>
                </span>

                <button
                  onClick={() => setSelectedDocument(doc)}
                  className="px-2.5 py-1 rounded bg-[#0a192f] hover:bg-slate-800 text-emerald-400 text-xs font-semibold border border-slate-700 transition-colors flex items-center gap-1"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Document Detail Modal */}
      <DocumentDetailModal
        document={selectedDocument}
        onClose={() => setSelectedDocument(null)}
        onSimulateWithDoc={() => setActiveView('policy_lab')}
      />
    </div>
  );
};
