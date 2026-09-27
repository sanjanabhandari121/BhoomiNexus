import React, { useState } from 'react';
import {
  Search,
  MapPin,
  UserCheck,
  Bell,
  Activity,
  Bot
} from 'lucide-react';
import type { UserRole, GeographicRegion, ViewMode } from '../../types';

interface HeaderProps {
  currentRole: UserRole;
  setRole: (role: UserRole) => void;
  selectedRegion: GeographicRegion;
  setRegion: (region: GeographicRegion) => void;
  onSearchSubmit: (query: string) => void;
  activeView: ViewMode;
  setActiveView: (view: ViewMode) => void;
  isAiOpen: boolean;
  setIsAiOpen: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRole,
  setRole,
  selectedRegion,
  setRegion,
  onSearchSubmit,
  setActiveView,
  isAiOpen,
  setIsAiOpen,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      onSearchSubmit(searchQuery);
      setActiveView('search');
      setShowSearchDropdown(false);
    }
  };

  const sampleQueries = [
    'How would expanding urban boundaries affect agricultural land around Delhi NCR?',
    'Show ISRO cadastral land cover change between 2018 and 2026',
    'Compare policy impact of 10% vs 5% urban corridor expansion in Gurugram',
    'What evidence supports Yamuna floodplain eco-buffer restrictions?'
  ];

  return (
    <header className="h-16 bg-[#0f2942] border-b border-slate-700/60 px-4 flex items-center justify-between sticky top-0 z-30 shadow-md">
      {/* Search Input */}
      <div className="relative flex-1 max-w-xl mr-4">
        <div className="relative flex items-center">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSearchDropdown(true);
            }}
            onFocus={() => setShowSearchDropdown(true)}
            onKeyDown={handleKeyDown}
            placeholder="Search land records, policy papers, GIS datasets, or ask natural language questions..."
            className="w-full bg-[#0a192f] border border-slate-700/80 rounded-md pl-9 pr-4 py-1.5 text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors"
          />
        </div>

        {/* Live Search Suggestions Dropdown */}
        {showSearchDropdown && searchQuery.length > 2 && (
          <div className="absolute left-0 right-0 mt-1 bg-[#0f2942] border border-slate-700 rounded-md shadow-2xl z-50 p-2 text-xs">
            <div className="text-[10px] uppercase tracking-wider text-slate-400 px-2 py-1 font-semibold flex items-center justify-between">
              <span>Suggested Evidence Searches</span>
              <span className="text-emerald-400">Press Enter to Search</span>
            </div>
            {sampleQueries.map((q, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSearchQuery(q);
                  onSearchSubmit(q);
                  setActiveView('search');
                  setShowSearchDropdown(false);
                }}
                className="w-full text-left px-2 py-1.5 hover:bg-[#1e3a8a]/40 text-slate-300 hover:text-white rounded flex items-center gap-2 transition-colors"
              >
                <Search className="w-3 h-3 text-slate-400 shrink-0" />
                <span className="truncate">{q}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Control Tools Bar */}
      <div className="flex items-center gap-3">
        {/* Region Selector */}
        <div className="flex items-center gap-1.5 bg-[#0a192f] border border-slate-700/80 rounded px-2.5 py-1 text-xs">
          <MapPin className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-slate-400 text-[11px] font-medium hidden sm:inline">Scope:</span>
          <select
            value={selectedRegion}
            onChange={(e) => setRegion(e.target.value as GeographicRegion)}
            className="bg-transparent text-slate-200 font-semibold focus:outline-none cursor-pointer"
          >
            <option value="Delhi NCR" className="bg-[#0f2942] text-slate-200">Delhi NCR</option>
            <option value="Gurugram" className="bg-[#0f2942] text-slate-200">Gurugram</option>
            <option value="Noida" className="bg-[#0f2942] text-slate-200">Noida</option>
            <option value="Jaipur" className="bg-[#0f2942] text-slate-200">Jaipur</option>
            <option value="Lucknow" className="bg-[#0f2942] text-slate-200">Lucknow</option>
            <option value="All India" className="bg-[#0f2942] text-slate-200">All India</option>
          </select>
        </div>

        {/* Role Switcher */}
        <div className="flex items-center gap-1.5 bg-[#0a192f] border border-slate-700/80 rounded px-2.5 py-1 text-xs">
          <UserCheck className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-slate-400 text-[11px] font-medium hidden sm:inline">Role:</span>
          <select
            value={currentRole}
            onChange={(e) => setRole(e.target.value as UserRole)}
            className="bg-transparent text-amber-300 font-semibold focus:outline-none cursor-pointer"
          >
            <option value="Researcher" className="bg-[#0f2942] text-slate-200">Researcher</option>
            <option value="Policymaker" className="bg-[#0f2942] text-slate-200">Policymaker</option>
            <option value="DeptOfficial" className="bg-[#0f2942] text-slate-200">Government Dept</option>
            <option value="Citizen" className="bg-[#0f2942] text-slate-200">Citizen View</option>
          </select>
        </div>

        {/* System Status Indicator */}
        <div className="hidden lg:flex items-center gap-2 bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 rounded px-2.5 py-1 text-[11px] font-medium">
          <Activity className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
          <span>ISRO & BhuLekh Online</span>
        </div>

        {/* Bhoomi Intelligence AI Assistant Toggle */}
        <button
          onClick={() => setIsAiOpen(!isAiOpen)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold border transition-all ${
            isAiOpen
              ? 'bg-emerald-600 text-white border-emerald-400 shadow-md shadow-emerald-900/40'
              : 'bg-[#0a192f] text-emerald-400 border-emerald-500/40 hover:bg-emerald-900/30'
          }`}
        >
          <Bot className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Bhoomi AI</span>
        </button>

        {/* Notifications */}
        <button className="relative p-1.5 text-slate-300 hover:text-white rounded hover:bg-slate-800 transition-colors">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-amber-500 rounded-full"></span>
        </button>

        {/* User Badge */}
        <div className="flex items-center gap-2 pl-2 border-l border-slate-700/80">
          <div className="w-7 h-7 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center text-xs font-bold text-slate-200">
            IN
          </div>
        </div>
      </div>
    </header>
  );
};
