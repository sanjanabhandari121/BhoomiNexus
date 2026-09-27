import type { DemoJourneyStep } from '../types';

export const SIH_DEMO_STEPS: DemoJourneyStep[] = [
  {
    stepIndex: 1,
    targetView: 'dashboard',
    title: '1. National Intelligence Dashboard',
    description: 'Explore the high-density land intelligence overview and check the Evidence Health Index (Freshness, Completeness, Provenance).',
    actionText: 'Next: Semantic Search →'
  },
  {
    stepIndex: 2,
    targetView: 'search',
    title: '2. Semantic Evidence Search',
    description: 'Query: "How is urban expansion affecting agricultural land around Delhi NCR?" Notice AI Evidence Synthesis with "Based on 7 sources" confidence tag.',
    actionText: 'Next: Spatial GIS →'
  },
  {
    stepIndex: 3,
    targetView: 'gis',
    title: '3. Spatial GIS Command Center',
    description: 'View multi-layer satellite & cadastral data for Delhi NCR. Use the timeline slider (2018 → 2026) to see land cover change over time.',
    actionText: 'Next: Policy Impact Lab →'
  },
  {
    stepIndex: 4,
    targetView: 'policy_lab',
    title: '4. Policy Impact Lab Simulator',
    description: 'Adjust urban expansion (+10%) & agricultural protection sliders. Click "RUN SIMULATION" to calculate land loss (-8.4%) & trade-offs.',
    actionText: 'Next: What-If Split Map →'
  },
  {
    stepIndex: 5,
    targetView: 'split_map',
    title: '5. What-If Split Screen Map',
    description: 'Compare current baseline vs simulated future on a split-screen map with dynamic spatial difference highlighting.',
    actionText: 'Next: Policy Comparison →'
  },
  {
    stepIndex: 6,
    targetView: 'comparison',
    title: '6. Policy Trade-Off Comparison',
    description: 'Compare Policy A (+10% Urban) vs Policy B (+5% Urban) side-by-side to evaluate economic benefits vs agrarian risks.',
    actionText: 'Next: Provenance & Audit →'
  },
  {
    stepIndex: 7,
    targetView: 'provenance',
    title: '7. Provenance & Blockchain Audit',
    description: 'Inspect the evidence chain: Satellite Data → Normalized Dataset → AI Extraction → Policy Simulation. Check SHA-256 integrity hash.',
    actionText: 'Next: Export Policy Brief →'
  },
  {
    stepIndex: 8,
    targetView: 'workspace',
    title: '8. Export Policy Brief',
    description: 'View the collaboration workspace and open the generated PDF-ready Policy Brief with executive summary and spatial graphics.',
    actionText: 'Finish Journey 🎉'
  }
];
