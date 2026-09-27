import type { DataSourceStatus, AuditLogEntry } from '../types';

export const MOCK_DATA_SOURCES: DataSourceStatus[] = [
  {
    id: 'DS-ISRO-BHUVAN',
    name: 'ISRO Bhuvan Geo-Portal API',
    category: 'Spatial / Earth Observation',
    status: 'Online',
    lastSync: '10 mins ago',
    recordsCount: '1,420 GeoTIFF Rasters',
    qualityScore: 98,
    verificationMethod: 'Automated Satellite Hash Check',
    updateFrequency: 'Bi-weekly Sentinel Pass'
  },
  {
    id: 'DS-BHULEKH-UP',
    name: 'UP BhuLekh Digital Cadastral Registry',
    category: 'State Land Revenue Records',
    status: 'Online',
    lastSync: '22 mins ago',
    recordsCount: '4.8M Digitized Khasras',
    qualityScore: 95,
    verificationMethod: 'State Revenue Department Cryptographic Sign',
    updateFrequency: 'Real-time Transaction Feed'
  },
  {
    id: 'DS-DILRMP-NATIONAL',
    name: 'DILRMP National Land Records Portal',
    category: 'Union Land Records',
    status: 'Online',
    lastSync: '1 hour ago',
    recordsCount: '650,000 Cadastral Maps',
    qualityScore: 94,
    verificationMethod: 'DoLR Verified Metadata',
    updateFrequency: 'Daily Nightly Batch'
  },
  {
    id: 'DS-OGD-INDIA',
    name: 'Data.gov.in (OGD Platform India)',
    category: 'Open Government Data',
    status: 'Syncing',
    lastSync: 'Sync in progress',
    recordsCount: '12,400 Datasets',
    qualityScore: 91,
    verificationMethod: 'Government API Gateway Token',
    updateFrequency: 'Weekly'
  },
  {
    id: 'DS-FAO-LAND',
    name: 'FAOSTAT Land Use & Governance Database',
    category: 'International Research',
    status: 'Online',
    lastSync: '3 days ago',
    recordsCount: '1,850 Global Indicator Series',
    qualityScore: 99,
    verificationMethod: 'UN Inter-Agency Benchmark',
    updateFrequency: 'Monthly'
  },
  {
    id: 'DS-NITI-AAYOG',
    name: 'NITI Aayog Policy Innovation Archive',
    category: 'Policy & Regulatory Reports',
    status: 'Online',
    lastSync: '4 hours ago',
    recordsCount: '3,100 Policy Drafts & Papers',
    qualityScore: 96,
    verificationMethod: 'Internal Expert Attribution',
    updateFrequency: 'Ad-hoc / On Publication'
  }
];

export const MOCK_AUDIT_LOGS: AuditLogEntry[] = [
  {
    id: 'AUD-99120',
    timestamp: '2026-09-27 17:10:44',
    userRole: 'Policymaker',
    userName: 'Dr. A. K. Sharma (NITI Aayog Lead)',
    action: 'Ran Scenario Simulation',
    targetItem: 'Delhi NCR Urban Expansion +10% Policy Lab Model',
    ipAddress: '10.240.18.91 (NIC Secure Gateway)',
    verificationHash: '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08'
  },
  {
    id: 'AUD-99119',
    timestamp: '2026-09-27 16:54:12',
    userRole: 'Researcher',
    userName: 'Prof. R. Vasudevan (ICAR Spatial Lab)',
    action: 'Exported Policy Evidence Audit',
    targetItem: 'Najafgarh Agricultural Land Conversion Report PDF',
    ipAddress: '14.139.60.10',
    verificationHash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
  },
  {
    id: 'AUD-99118',
    timestamp: '2026-09-27 15:30:00',
    userRole: 'DeptOfficial',
    userName: 'S. K. Verma (Delhi Revenue Collector)',
    action: 'Verified Cadastral Khasra Batch',
    targetItem: 'Block 14 Najafgarh Vector Boundaries v4.1',
    ipAddress: '164.100.48.2',
    verificationHash: '4b227777d4da16a1aea9b8713ed58d045d949cf94c340827a8934757c3d7f49a'
  },
  {
    id: 'AUD-99117',
    timestamp: '2026-09-27 14:12:05',
    userRole: 'Citizen',
    userName: 'Anonymous Public Portal User',
    action: 'Queried Public Scheme Information',
    targetItem: 'PM-KISAN Geotagged Beneficiary Summary',
    ipAddress: '49.207.19.102',
    verificationHash: 'd4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5'
  }
];
