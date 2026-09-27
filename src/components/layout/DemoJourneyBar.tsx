import React from 'react';
import { SIH_DEMO_STEPS } from '../../data/demoJourney';
import type { ViewMode } from '../../types';
import { ChevronRight, RotateCcw, Award } from 'lucide-react';

interface DemoJourneyBarProps {
  currentStepIndex: number;
  setCurrentStepIndex: (idx: number) => void;
  setActiveView: (view: ViewMode) => void;
}

export const DemoJourneyBar: React.FC<DemoJourneyBarProps> = ({
  currentStepIndex,
  setCurrentStepIndex,
  setActiveView,
}) => {
  const currentStep = SIH_DEMO_STEPS[currentStepIndex - 1] || SIH_DEMO_STEPS[0];

  const handleNextStep = () => {
    if (currentStepIndex < SIH_DEMO_STEPS.length) {
      const nextIdx = currentStepIndex + 1;
      setCurrentStepIndex(nextIdx);
      setActiveView(SIH_DEMO_STEPS[nextIdx - 1].targetView);
    } else {
      // Reset
      setCurrentStepIndex(1);
      setActiveView(SIH_DEMO_STEPS[0].targetView);
    }
  };

  const handleStepClick = (idx: number) => {
    setCurrentStepIndex(idx);
    setActiveView(SIH_DEMO_STEPS[idx - 1].targetView);
  };

  return (
    <div className="bg-gradient-to-r from-emerald-950 via-[#0f2942] to-[#0a192f] border-b border-emerald-500/30 px-4 py-2 flex items-center justify-between shadow-lg text-xs z-20">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40 uppercase tracking-wider text-[10px]">
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>SIH 2026 Judge Walkthrough</span>
        </div>

        {/* Step indicator dots */}
        <div className="flex items-center gap-1">
          {SIH_DEMO_STEPS.map((s) => (
            <button
              key={s.stepIndex}
              onClick={() => handleStepClick(s.stepIndex)}
              className={`w-6 h-6 rounded-full font-bold text-[11px] flex items-center justify-center transition-all ${
                s.stepIndex === currentStepIndex
                  ? 'bg-emerald-500 text-slate-950 shadow-md ring-2 ring-emerald-300 font-extrabold'
                  : s.stepIndex < currentStepIndex
                  ? 'bg-slate-700 text-emerald-400 border border-emerald-500/30'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
              title={s.title}
            >
              {s.stepIndex}
            </button>
          ))}
        </div>

        <div className="hidden lg:block text-slate-200">
          <span className="font-bold text-white mr-2">{currentStep.title}:</span>
          <span className="text-slate-300 text-[11px]">{currentStep.description}</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={handleNextStep}
          className="flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs transition-colors shadow-md"
        >
          <span>{currentStep.actionText}</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={() => {
            setCurrentStepIndex(1);
            setActiveView('dashboard');
          }}
          className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          title="Restart Demo Journey"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
