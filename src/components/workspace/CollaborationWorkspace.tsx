import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import type { GeographicRegion, ViewMode } from '../../types';
import { PolicyBriefModal } from './PolicyBriefModal';
import { DemoDataTag } from '../common/DemoDataTag';

interface CollaborationWorkspaceProps {
  setActiveView: (view: ViewMode) => void;
  selectedRegion: GeographicRegion;
}

export const CollaborationWorkspace: React.FC<CollaborationWorkspaceProps> = ({
  selectedRegion,
}) => {
  const [activeTab, setActiveTab] = useState<'Overview' | 'Evidence' | 'Simulations' | 'Discussion'>('Overview');
  const [isReportModalOpen, setIsReportModalOpen] = useState<boolean>(false);
  const [comments, setComments] = useState([
    { id: 1, author: 'Dr. A. K. Sharma (NITI Aayog)', text: 'The Najafgarh agricultural loss projections in Scenario A require mandatory NGT floodplain buffer alignment.', time: '2 hours ago' },
    { id: 2, author: 'Prof. R. Vasudevan (ICAR)', text: 'Added latest 2025 Sentinel-2 multi-spectral raster layers to the evidence workspace repository.', time: '5 hours ago' }
  ]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        { id: Date.now(), author: 'Current User (Researcher)', text: newComment, time: 'Just now' }
      ]);
      setNewComment('');
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-extrabold text-white">Policy Collaboration Workspace</h1>
            <DemoDataTag label="Multi-Stakeholder Project" />
          </div>
          <p className="text-xs text-slate-300 mt-0.5">
            Inter-departmental sandbox connecting researchers, planners, and statutory officials.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsReportModalOpen(true)}
            className="px-4 py-2 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wide transition-colors flex items-center gap-2 shadow-lg shadow-emerald-900/40"
          >
            <FileText className="w-4 h-4" />
            <span>Generate Policy Brief</span>
          </button>
        </div>
      </div>

      {/* Project Card Header */}
      <div className="bg-[#0f2942] border border-slate-700/80 rounded-xl p-5 space-y-4 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-700/60 pb-3">
          <div>
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">ACTIVE STUDY WORKSPACE</span>
            <h2 className="text-lg font-black text-white">{selectedRegion} Urban Expansion & Agrarian Protection Study</h2>
            <p className="text-xs text-slate-300">Created by NITI Aayog Land Governance Division • 4 Active Collaborators</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-7 h-7 rounded-full bg-emerald-700 border border-slate-700 text-[10px] font-bold text-white flex items-center justify-center">AS</div>
              <div className="w-7 h-7 rounded-full bg-blue-700 border border-slate-700 text-[10px] font-bold text-white flex items-center justify-center">RV</div>
              <div className="w-7 h-7 rounded-full bg-amber-700 border border-slate-700 text-[10px] font-bold text-white flex items-center justify-center">SK</div>
            </div>
            <button className="px-2.5 py-1 rounded bg-[#0a192f] hover:bg-slate-800 text-xs font-semibold text-slate-200 border border-slate-700 transition-colors">
              + Invite Member
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2 text-xs">
          {(['Overview', 'Evidence', 'Simulations', 'Discussion'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded font-bold transition-all ${
                activeTab === tab
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'Overview' && (
          <div className="space-y-4 text-xs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-[#0a192f] border border-slate-800 rounded p-3 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Attached Evidence</span>
                <div className="text-xl font-black text-white">6 Documents</div>
                <p className="text-[10px] text-emerald-400">ISRO, ICAR, DDA MPD-2041</p>
              </div>

              <div className="bg-[#0a192f] border border-slate-800 rounded p-3 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Saved Simulations</span>
                <div className="text-xl font-black text-white">3 Scenarios</div>
                <p className="text-[10px] text-amber-400">+10% & +5% Corridor Runs</p>
              </div>

              <div className="bg-[#0a192f] border border-slate-800 rounded p-3 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Export Readiness</span>
                <div className="text-xl font-black text-emerald-400">Ready (100%)</div>
                <p className="text-[10px] text-slate-300">SHA-256 Verified</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Discussion' && (
          <div className="space-y-4 text-xs">
            <div className="space-y-2">
              {comments.map((c) => (
                <div key={c.id} className="bg-[#0a192f] border border-slate-800 rounded p-3 space-y-1">
                  <div className="flex justify-between text-[11px] font-bold text-emerald-400">
                    <span>{c.author}</span>
                    <span className="text-slate-500 font-mono">{c.time}</span>
                  </div>
                  <p className="text-slate-200">{c.text}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add inter-departmental comment..."
                className="flex-1 bg-[#0a192f] border border-slate-700 rounded px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-emerald-400"
              />
              <button
                onClick={handleAddComment}
                className="px-4 py-2 rounded bg-emerald-500 text-slate-950 font-bold text-xs uppercase"
              >
                Post
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Policy Brief Printable Modal */}
      <PolicyBriefModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        selectedRegion={selectedRegion}
      />
    </div>
  );
};
