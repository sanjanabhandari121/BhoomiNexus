import { useState } from 'react';
import type { ViewMode, UserRole, GeographicRegion, EvidenceItem } from './types';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { DemoJourneyBar } from './components/layout/DemoJourneyBar';
import { LandingPage } from './components/landing/LandingPage';
import { IntelligenceDashboard } from './components/dashboard/IntelligenceDashboard';
import { EvidenceSearch } from './components/search/EvidenceSearch';
import { EvidenceRepository } from './components/repository/EvidenceRepository';
import { LandIntelligenceGIS } from './components/gis/LandIntelligenceGIS';
import { PolicyImpactLab } from './components/policy/PolicyImpactLab';
import { WhatIfSplitMap } from './components/policy/WhatIfSplitMap';
import { PolicyComparison } from './components/policy/PolicyComparison';
import { AnalyticsTrends } from './components/analytics/AnalyticsTrends';
import { ProvenanceTrace } from './components/trust/ProvenanceTrace';
import { CollaborationWorkspace } from './components/workspace/CollaborationWorkspace';
import { DataSourcesAdmin } from './components/admin/DataSourcesAdmin';
import { DataQualityCenter } from './components/admin/DataQualityCenter';
import { SecurityCenter } from './components/admin/SecurityCenter';
import { BhoomiAssistant } from './components/ai/BhoomiAssistant';

export function App() {
  const [activeView, setActiveView] = useState<ViewMode>('landing');
  const [currentRole, setRole] = useState<UserRole>('Researcher');
  const [selectedRegion, setRegion] = useState<GeographicRegion>('Delhi NCR');
  const [searchQuery, setSearchQuery] = useState<string>('How would expanding urban boundaries affect agricultural land around Delhi NCR?');
  const [selectedDocument, setSelectedDocument] = useState<EvidenceItem | null>(null);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(1);
  const [isAiOpen, setIsAiOpen] = useState<boolean>(false);

  const handleSelectDocument = (doc: EvidenceItem) => {
    setSelectedDocument(doc);
    setActiveView('repository');
  };

  const renderMainView = () => {
    switch (activeView) {
      case 'dashboard':
        return (
          <IntelligenceDashboard
            setActiveView={setActiveView}
            selectedRegion={selectedRegion}
            setRegion={setRegion}
            onSearchSubmit={(q) => setSearchQuery(q)}
          />
        );
      case 'search':
        return (
          <EvidenceSearch
            initialQuery={searchQuery}
            setActiveView={setActiveView}
            onSelectDocument={handleSelectDocument}
          />
        );
      case 'repository':
        return (
          <EvidenceRepository
            setActiveView={setActiveView}
            selectedDocument={selectedDocument}
            setSelectedDocument={setSelectedDocument}
          />
        );
      case 'gis':
        return (
          <LandIntelligenceGIS
            onSelectDoc={handleSelectDocument}
          />
        );
      case 'policy_lab':
        return (
          <PolicyImpactLab
            setActiveView={setActiveView}
            selectedRegion={selectedRegion}
          />
        );
      case 'split_map':
        return (
          <WhatIfSplitMap
            setActiveView={setActiveView}
            selectedRegion={selectedRegion}
          />
        );
      case 'comparison':
        return (
          <PolicyComparison
            setActiveView={setActiveView}
          />
        );
      case 'analytics':
        return (
          <AnalyticsTrends
            onSelectDoc={handleSelectDocument}
            setActiveView={setActiveView}
          />
        );
      case 'provenance':
        return <ProvenanceTrace />;
      case 'workspace':
        return (
          <CollaborationWorkspace
            setActiveView={setActiveView}
            selectedRegion={selectedRegion}
          />
        );
      case 'admin_sources':
        return <DataSourcesAdmin />;
      case 'admin_quality':
        return <DataQualityCenter />;
      case 'admin_security':
        return <SecurityCenter />;
      default:
        return (
          <IntelligenceDashboard
            setActiveView={setActiveView}
            selectedRegion={selectedRegion}
            setRegion={setRegion}
            onSearchSubmit={(q) => setSearchQuery(q)}
          />
        );
    }
  };

  if (activeView === 'landing') {
    return <LandingPage onEnterPlatform={(view) => setActiveView(view)} />;
  }

  return (
    <div className="min-h-screen bg-[#0a192f] text-slate-100 flex flex-col font-sans select-none overflow-x-hidden">
      {/* SIH Presentation Demo Walkthrough Controller Bar */}
      <DemoJourneyBar
        currentStepIndex={currentStepIndex}
        setCurrentStepIndex={setCurrentStepIndex}
        setActiveView={setActiveView}
      />

      {/* Main Layout Container */}
      <div className="flex-1 flex h-[calc(100vh-2.5rem)] overflow-hidden">
        {/* Left Navigation Sidebar */}
        <Sidebar
          activeView={activeView}
          setActiveView={setActiveView}
          currentRole={currentRole}
        />

        {/* Right Application Body */}
        <div className="flex-1 flex flex-col min-w-0 bg-[#071324] overflow-hidden">
          {/* Top Header */}
          <Header
            currentRole={currentRole}
            setRole={setRole}
            selectedRegion={selectedRegion}
            setRegion={setRegion}
            onSearchSubmit={(q) => setSearchQuery(q)}
            activeView={activeView}
            setActiveView={setActiveView}
            isAiOpen={isAiOpen}
            setIsAiOpen={setIsAiOpen}
          />

          {/* Main Scrollable Screen Content */}
          <main className="flex-1 overflow-y-auto p-6 relative bg-carto-grid">
            <div className="max-w-7xl mx-auto w-full">
              {renderMainView()}
            </div>
          </main>
        </div>
      </div>

      {/* Floating Bhoomi Intelligence AI Assistant Panel */}
      <BhoomiAssistant
        isOpen={isAiOpen}
        onClose={() => setIsAiOpen(false)}
        setActiveView={setActiveView}
        onSearchQuery={(q) => {
          setSearchQuery(q);
          setActiveView('search');
        }}
      />
    </div>
  );
}

export default App;
