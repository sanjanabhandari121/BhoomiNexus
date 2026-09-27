import React, { useState } from 'react';
import { Layers, Calendar, MapPin, Eye, EyeOff } from 'lucide-react';
import { MOCK_DISTRICTS, GIS_LAYERS_CONFIG } from '../../data/demoGisData';
import type { DistrictGisData, EvidenceItem } from '../../types';
import { DistrictIntelligencePanel } from './DistrictIntelligencePanel';
import { DemoDataTag } from '../common/DemoDataTag';

interface LandIntelligenceGISProps {
  onSelectDoc: (doc: EvidenceItem) => void;
}

export const LandIntelligenceGIS: React.FC<LandIntelligenceGISProps> = ({ onSelectDoc }) => {
  const [activeLayers, setActiveLayers] = useState<string[]>(
    GIS_LAYERS_CONFIG.filter(l => l.defaultActive).map(l => l.id)
  );
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictGisData | null>(MOCK_DISTRICTS[0]);
  const [selectedYear, setSelectedYear] = useState<number>(2026);

  const toggleLayer = (id: string) => {
    if (activeLayers.includes(id)) {
      setActiveLayers(activeLayers.filter(l => l !== id));
    } else {
      setActiveLayers([...activeLayers, id]);
    }
  };

  const years = [2018, 2020, 2022, 2024, 2026];

  return (
    <div className="h-[calc(100vh-5rem)] flex flex-col bg-[#071324] relative overflow-hidden rounded-xl border border-slate-700/80 shadow-2xl">
      {/* Top Controls Overlay */}
      <div className="bg-[#0f2942]/90 backdrop-blur-md border-b border-slate-700/80 px-4 py-2.5 flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-400" />
            <h1 className="font-extrabold text-white text-sm">Spatial GIS Command Center</h1>
          </div>
          <DemoDataTag label="ISRO & Cadastral Vector Raster" />
        </div>

        {/* Timeline Slider Control */}
        <div className="flex items-center gap-3 bg-[#0a192f] border border-slate-700/80 rounded px-3 py-1">
          <Calendar className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-xs font-semibold text-slate-300">Timeline Year:</span>
          <div className="flex items-center gap-1">
            {years.map((y) => (
              <button
                key={y}
                onClick={() => setSelectedYear(y)}
                className={`px-2 py-0.5 rounded text-[11px] font-bold transition-all ${
                  selectedYear === y
                    ? 'bg-emerald-500 text-slate-950 shadow-md font-extrabold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Map Body Area */}
      <div className="flex-1 flex relative bg-carto-grid overflow-hidden">
        {/* Left Floating Layer Control Panel */}
        <div className="absolute top-4 left-4 z-20 w-64 bg-[#0f2942]/95 border border-slate-700/80 rounded-lg p-3 space-y-2 shadow-2xl backdrop-blur-md max-h-[85%] overflow-y-auto">
          <div className="flex items-center justify-between border-b border-slate-700/60 pb-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Spatial GIS Layers ({activeLayers.length} Active)
            </span>
          </div>

          <div className="space-y-1 text-xs">
            {GIS_LAYERS_CONFIG.map((layer) => {
              const isActive = activeLayers.includes(layer.id);
              return (
                <button
                  key={layer.id}
                  onClick={() => toggleLayer(layer.id)}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded text-left transition-all ${
                    isActive
                      ? 'bg-[#0a192f] text-slate-200 border border-slate-700/80 font-semibold'
                      : 'text-slate-400 hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: layer.color }}
                    ></span>
                    <span className="truncate text-[11px]">{layer.label}</span>
                  </div>
                  {isActive ? (
                    <Eye className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  ) : (
                    <EyeOff className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Center Spatial Visual Engine */}
        <div className="flex-1 relative flex items-center justify-center p-6 select-none">
          {/* Simulated Satellite & Cadastral Vector Grid Overlay */}
          <div className="w-full max-w-4xl h-full border border-slate-800 rounded-xl relative bg-[#060e1a] overflow-hidden flex items-center justify-center shadow-inner">
            {/* Map Lat/Long Crosshairs */}
            <div className="absolute top-2 left-3 text-[10px] font-mono text-emerald-400 bg-[#0a192f]/80 px-2 py-0.5 rounded border border-slate-800 z-10">
              BOUNDING BOX: 28.35°N - 28.88°N, 76.85°E - 77.45°E (NCR Extent)
            </div>

            {/* Interactive District Region Nodes */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-8 w-full max-w-3xl">
              {MOCK_DISTRICTS.map((d) => {
                const isSelected = selectedDistrict?.id === d.id;
                const currentData = d.timelineData.find(t => t.year === selectedYear) || d.timelineData[d.timelineData.length - 1];

                return (
                  <div
                    key={d.id}
                    onClick={() => setSelectedDistrict(d)}
                    className={`border-2 rounded-xl p-4 cursor-pointer transition-all space-y-2 relative overflow-hidden ${
                      isSelected
                        ? 'bg-emerald-950/40 border-emerald-400 shadow-2xl ring-2 ring-emerald-500/50'
                        : 'bg-[#0f2942]/80 border-slate-700/80 hover:border-slate-500 hover:bg-[#0f2942]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white truncate">{d.name}</span>
                      <MapPin className={`w-4 h-4 ${isSelected ? 'text-emerald-400 animate-bounce' : 'text-slate-400'}`} />
                    </div>

                    <div className="space-y-1 text-[11px] font-mono">
                      <div className="flex justify-between text-slate-300">
                        <span>Ag Land ({selectedYear}):</span>
                        <span className="text-emerald-400 font-bold">{currentData.agPct}%</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Urban Area:</span>
                        <span className="text-amber-400 font-bold">{currentData.urbanPct}%</span>
                      </div>
                    </div>

                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden flex">
                      <div className="h-full bg-emerald-500" style={{ width: `${currentData.agPct}%` }}></div>
                      <div className="h-full bg-amber-500" style={{ width: `${currentData.urbanPct}%` }}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Intelligence Panel on District Click */}
        {selectedDistrict && (
          <DistrictIntelligencePanel
            district={selectedDistrict}
            onClose={() => setSelectedDistrict(null)}
            onSelectDoc={onSelectDoc}
            selectedYear={selectedYear}
          />
        )}
      </div>
    </div>
  );
};
