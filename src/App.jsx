import React from 'react';
import Hero from './components/Hero';
import AgentShowcase from './components/AgentShowcase';
import Workflow from './components/Workflow';
import ComplianceCallout from './components/ComplianceCallout';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <Hero />
      <main>
        <AgentShowcase />
        <Workflow />
        <ComplianceCallout />
      </main>
      <FooterCTA />
    </div>
  );
}

export default App;
