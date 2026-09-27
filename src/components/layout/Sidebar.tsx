import React from 'react';
import {
  LayoutDashboard,
  Search,
  BookOpen,
  Map,
  FlaskConical,
  Split,
  BarChart3,
  Users,
  GitBranch,
  Database,
  CheckCircle2,
  Lock
} from 'lucide-react';
import type { ViewMode, UserRole } from '../../types';

interface SidebarProps {
  activeView: ViewMode;
  setActiveView: (view: ViewMode) => void;
  currentRole: UserRole;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeView,
  setActiveView,
}) => {
  const navSections = [
    {
      label: 'OVERVIEW',
      items: [
        { id: 'dashboard' as ViewMode, label: 'Intelligence Dashboard', icon: LayoutDashboard },
      ]
    },
    {
      label: 'DISCOVER',
      items: [
        { id: 'search' as ViewMode, label: 'Evidence Search', icon: Search },
        { id: 'repository' as ViewMode, label: 'Evidence Repository', icon: BookOpen },
      ]
    },
    {
      label: 'SPATIAL INTELLIGENCE',
      items: [
        { id: 'gis' as ViewMode, label: 'Land Intelligence GIS', icon: Map },
      ]
    },
    {
      label: 'POLICY INTELLIGENCE',
      items: [
        { id: 'policy_lab' as ViewMode, label: 'Policy Impact Lab', icon: FlaskConical, badge: 'Flagship' },
        { id: 'split_map' as ViewMode, label: 'What-If Split Simulator', icon: Split },
        { id: 'analytics' as ViewMode, label: 'Trends & Analytics', icon: BarChart3 },
      ]
    },
    {
      label: 'COLLABORATE',
      items: [
        { id: 'workspace' as ViewMode, label: 'Policy Workspace', icon: Users },
      ]
    },
    {
      label: 'TRUST & VERIFICATION',
      items: [
        { id: 'provenance' as ViewMode, label: 'Provenance & Audit', icon: GitBranch, badge: 'Blockchain' },
      ]
    },
    {
      label: 'SYSTEM & GOVERNANCE',
      items: [
        { id: 'admin_sources' as ViewMode, label: 'Data Sources (10)', icon: Database },
        { id: 'admin_quality' as ViewMode, label: 'Data Quality Center', icon: CheckCircle2 },
        { id: 'admin_security' as ViewMode, label: 'Security & Access', icon: Lock },
      ]
    }
  ];

  return (
    <aside className="w-64 bg-[#0a192f] border-r border-slate-700/60 flex flex-col h-screen shrink-0 select-none">
      {/* Brand Header */}
      <div
        onClick={() => setActiveView('landing')}
        className="p-4 border-b border-slate-700/60 cursor-pointer hover:bg-[#0f2942]/60 transition-colors flex items-center gap-3"
      >
        <div className="w-9 h-9 rounded bg-gradient-to-br from-emerald-600 to-blue-900 flex items-center justify-center text-white font-black text-lg tracking-wider border border-emerald-400/40 shadow-inner">
          BN
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-white text-base tracking-wide">BhoomiNexus</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          </div>
          <p className="text-[10px] text-slate-400 tracking-tight font-medium">Evidence-to-Policy Intelligence</p>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 overflow-y-auto p-3 space-y-4 text-xs">
        {navSections.map((sec, secIdx) => (
          <div key={secIdx}>
            <div className="text-[10px] font-bold text-slate-500 tracking-wider uppercase px-2 mb-1">
              {sec.label}
            </div>
            <div className="space-y-0.5">
              {sec.items.map((item) => {
                const Icon = item.icon;
                const isActive = activeView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveView(item.id)}
                    className={`w-full flex items-center justify-between px-2.5 py-2 rounded text-left transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-emerald-950/80 to-[#0f2942] text-emerald-300 font-semibold border-l-2 border-emerald-400 shadow-sm'
                        : 'text-slate-300 hover:bg-[#0f2942]/60 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
                      <span className="truncate">{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className={`text-[9px] px-1.5 py-0.2 rounded font-semibold uppercase tracking-wider ${
                        item.badge === 'Flagship'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                          : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Footer System Info */}
      <div className="p-3 border-t border-slate-700/60 bg-[#071324] text-[11px] text-slate-400 space-y-1">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-slate-300">SIH 2026 Prototype</span>
          <span className="text-emerald-400 font-mono text-[10px]">v2.4.0</span>
        </div>
        <p className="text-[10px] text-slate-500">Problem Statement SIH26019</p>
      </div>
    </aside>
  );
};
