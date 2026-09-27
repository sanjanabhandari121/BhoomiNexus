export type ViewMode =
  | 'landing'
  | 'dashboard'
  | 'search'
  | 'repository'
  | 'gis'
  | 'policy_lab'
  | 'split_map'
  | 'comparison'
  | 'analytics'
  | 'workspace'
  | 'provenance'
  | 'admin_sources'
  | 'admin_quality'
  | 'admin_security';

export type UserRole = 'Researcher' | 'Policymaker' | 'DeptOfficial' | 'Citizen';

export type GeographicRegion =
  | 'Delhi NCR'
  | 'Gurugram'
  | 'Noida'
  | 'Jaipur'
  | 'Lucknow'
  | 'All India';

export type DocumentCategory =
  | 'Land Record'
  | 'Policy Document'
  | 'Government Scheme'
  | 'Research Paper'
  | 'Environmental Report'
  | 'GIS Dataset'
  | 'Court Ruling'
  | 'Expert Contribution';

export interface EvidenceItem {
  id: string;
  title: string;
  category: DocumentCategory;
  sourceOrg: string;
  publicationDate: string;
  geography: string;
  version: string;
  verificationStatus: 'Verified' | 'Pending Review' | 'Flagged';
  relevanceScore: number;
  extractedInsight: string;
  whyThisResult: string;
  sha256Hash: string;
  previousVersionHash?: string;
  relatedPolicies: string[];
  relatedDatasets: string[];
  pdfSimulatedUrl?: string;
  confidenceScore: 'High' | 'Medium' | 'Low';
}

export interface DistrictGisData {
  id: string;
  name: string;
  state: string;
  lat: number;
  lng: number;
  totalAreaKm2: number;
  agPercent: number;
  urbanPercent: number;
  forestPercent: number;
  waterPercent: number;
  population: number;
  recentChangeRate: string;
  riskLevel: 'High' | 'Moderate' | 'Low';
  timelineData: {
    year: number;
    urbanPct: number;
    agPct: number;
    forestPct: number;
  }[];
}

export interface ScenarioParams {
  name: string;
  region: GeographicRegion;
  urbanExpansionPct: number; // e.g., +5, +10, +20
  agProtectionLevel: 'Low' | 'Medium' | 'High';
  infraInvestmentLevel: 'Low' | 'Medium' | 'High';
  envRestrictionLevel: 'Low' | 'Medium' | 'High';
  timeHorizonYears: 5 | 10 | 20;
}

export interface SimulationResult {
  scenarioName: string;
  agLandLossPct: number;
  urbanAreaGainPct: number;
  greenCoverageChangePct: number;
  infraDemandGrowthPct: number;
  economicDevPotentialPct: number;
  affectedPopulation: number;
  tradeOffs: {
    benefits: string[];
    risks: string[];
  };
  evidenceSources: {
    id: string;
    title: string;
    source: string;
  }[];
}

export interface ProvenanceStep {
  stepIndex: number;
  title: string;
  type: 'SOURCE' | 'DATASET' | 'PROCESSING' | 'SEMANTIC_AI' | 'INSIGHT' | 'SIMULATION';
  detail: string;
  timestamp: string;
  agentOrSource: string;
  hash: string;
}

export interface DataSourceStatus {
  id: string;
  name: string;
  category: string;
  status: 'Online' | 'Syncing' | 'Degraded' | 'Offline';
  lastSync: string;
  recordsCount: string;
  qualityScore: number;
  verificationMethod: string;
  updateFrequency: string;
}

export interface AuditLogEntry {
  id: string;
  timestamp: string;
  userRole: UserRole;
  userName: string;
  action: string;
  targetItem: string;
  ipAddress: string;
  verificationHash: string;
}

export interface DemoJourneyStep {
  stepIndex: number;
  targetView: ViewMode;
  title: string;
  description: string;
  actionText: string;
}
