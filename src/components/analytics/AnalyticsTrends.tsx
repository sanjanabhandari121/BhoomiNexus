import React, { useState } from 'react';
import { Filter, BookOpen } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar, Legend } from 'recharts';
import { MOCK_DISTRICTS } from '../../data/demoGisData';
import type { EvidenceItem, ViewMode } from '../../types';
import { DemoDataTag } from '../common/DemoDataTag';

interface AnalyticsTrendsProps {
  onSelectDoc: (doc: EvidenceItem) => void;
  setActiveView: (view: ViewMode) => void;
}

export const AnalyticsTrends: React.FC<AnalyticsTrendsProps> = ({ setActiveView }) => {
  const [selectedDistrictId, setSelectedDistrictId] = useState('DIST-DEL-NCR');
  const district = MOCK_DISTRICTS.find(d => d.id === selectedDistrictId) || MOCK_DISTRICTS[0];

  // Recharts timeline series data
  const chartData = district.timelineData;

  const districtComparisonData = MOCK_DISTRICTS.map(d => ({
    name: d.name.split(' ')[0],
    urbanPct: d.urbanPercent,
    agPct: d.agPercent,
    forestPct: d.forestPercent,
  }));

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-extrabold text-white">Land Analytics & Multi-Temporal Trends</h1>
            <DemoDataTag label="8-Year Spatial Series" />
          </div>
          <p className="text-xs text-slate-300 mt-0.5">
            Empirical multi-temporal land use change rates derived from ISRO satellite rasters and DILRMP cadastral logs.
          </p>
        </div>

        {/* District Selector Filter */}
        <div className="flex items-center gap-2 bg-[#0f2942] border border-slate-700/80 rounded px-3 py-1.5 text-xs">
          <Filter className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-slate-400 font-medium">District:</span>
          <select
            value={selectedDistrictId}
            onChange={(e) => setSelectedDistrictId(e.target.value)}
            className="bg-transparent text-white font-bold focus:outline-none cursor-pointer"
          >
            {MOCK_DISTRICTS.map((d) => (
              <option key={d.id} value={d.id} className="bg-[#0f2942] text-slate-200">
                {d.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* CHART 1: Multi-Temporal Land-Use Transition Area Chart */}
        <div className="bg-[#0f2942] border border-slate-700/80 rounded-xl p-5 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-700/60 pb-2">
            <h3 className="font-extrabold text-white text-xs uppercase tracking-wider">
              Land Cover Transition Over Time (2018 - 2026) - {district.name.split(' ')[0]}
            </h3>
            <span className="text-[10px] font-mono text-emerald-400">Multi-Spectral Raster</span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorAg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorUrban" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="year" stroke="#94a3b8" fontSize={11} />
                <YAxis stroke="#94a3b8" fontSize={11} unit="%" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0a192f', borderColor: '#334155', borderRadius: '8px', fontSize: '11px' }}
                />
                <Area type="monotone" dataKey="agPct" name="Agricultural %" stroke="#10B981" fillOpacity={1} fill="url(#colorAg)" />
                <Area type="monotone" dataKey="urbanPct" name="Urban Built-Up %" stroke="#F59E0B" fillOpacity={1} fill="url(#colorUrban)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* CHART 2: Cross-District Land Use Distribution Comparison */}
        <div className="bg-[#0f2942] border border-slate-700/80 rounded-xl p-5 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-700/60 pb-2">
            <h3 className="font-extrabold text-white text-xs uppercase tracking-wider">
              Cross-District Spatial Comparison (2026 Baseline)
            </h3>
            <span className="text-[10px] font-mono text-amber-300">NCR & Regional Hubs</span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={districtComparisonData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={11} />
                <YAxis stroke="#94a3b8" fontSize={11} unit="%" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0a192f', borderColor: '#334155', borderRadius: '8px', fontSize: '11px' }}
                />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
                <Bar dataKey="agPct" name="Agricultural %" fill="#10B981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="urbanPct" name="Urban %" fill="#F59E0B" radius={[4, 4, 0, 0]} />
                <Bar dataKey="forestPct" name="Forest %" fill="#06B6D4" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Key Observations Feed with Evidence Citations */}
      <div className="bg-[#0f2942] border border-slate-700/80 rounded-xl p-5 space-y-4 shadow-xl">
        <h3 className="font-extrabold text-white text-sm uppercase tracking-wider border-b border-slate-700/60 pb-2">
          Empirical Key Observations & Evidence Citations
        </h3>

        <div className="space-y-3 text-xs">
          <div className="bg-[#0a192f] border border-slate-800 rounded-lg p-3 space-y-2">
            <div className="flex items-start justify-between">
              <p className="font-semibold text-slate-200">
                1. "Urban built-up area in Delhi NCR increased by 9.7% between 2018 and 2026, primarily encroaching on Najafgarh multi-cropped agricultural buffer zones."
              </p>
              <button
                onClick={() => setActiveView('search')}
                className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/40 text-[11px] font-bold shrink-0 transition-colors flex items-center gap-1"
              >
                <BookOpen className="w-3 h-3 text-emerald-400" />
                <span>View Supporting Datasets</span>
              </button>
            </div>
            <div className="text-[10px] text-slate-400 font-mono">
              Citation: ISRO Bhuvan Multi-Temporal LULC Series & ICAR Remote Sensing Paper (2025)
            </div>
          </div>

          <div className="bg-[#0a192f] border border-slate-800 rounded-lg p-3 space-y-2">
            <div className="flex items-start justify-between">
              <p className="font-semibold text-slate-200">
                2. "Gurugram registered the fastest peri-urban commercial conversion velocity (+2.4%/yr), accompanied by a 6.8% reduction in surface hydrological retention basins."
              </p>
              <button
                onClick={() => setActiveView('search')}
                className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/40 text-[11px] font-bold shrink-0 transition-colors flex items-center gap-1"
              >
                <BookOpen className="w-3 h-3 text-emerald-400" />
                <span>View Supporting Datasets</span>
              </button>
            </div>
            <div className="text-[10px] text-slate-400 font-mono">
              Citation: DILRMP Gurugram Land Registry Vector Logs & Supreme Court NGT Order
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
