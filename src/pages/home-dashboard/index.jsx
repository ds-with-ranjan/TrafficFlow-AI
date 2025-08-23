import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import BenefitsGrid from './components/BenefitsGrid';
import StatisticsCounter from './components/StatisticsCounter';
import ProblemStatement from './components/ProblemStatement';
import TechnologyOverview from './components/TechnologyOverview';

const HomeDashboard = () => {
  useEffect(() => {
    // Set page title
    document.title = 'TrafficFlow AI - Smart Traffic Control System';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Benefits Grid */}
        <BenefitsGrid />
        
        {/* Statistics Counter */}
        <StatisticsCounter />
        
        {/* Problem Statement */}
        <ProblemStatement />
        
        {/* Technology Overview */}
        <TechnologyOverview />
        
        {/* Footer */}
        <footer className="bg-card border-t border-border py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center items-center space-x-3 mb-4">
                <svg width="32" height="32" viewBox="0 0 40 40" className="text-primary">
                  <circle cx="20" cy="8" r="4" fill="currentColor" className="text-accent" />
                  <circle cx="20" cy="20" r="4" fill="currentColor" className="text-secondary" />
                  <circle cx="20" cy="32" r="4" fill="currentColor" className="text-primary" />
                  <rect x="18" y="12" width="4" height="8" fill="currentColor" className="text-muted-foreground" />
                  <rect x="18" y="24" width="4" height="8" fill="currentColor" className="text-muted-foreground" />
                </svg>
                <span className="text-xl font-bold text-foreground font-heading">TrafficFlow AI</span>
              </div>
              
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Revolutionizing urban traffic management through intelligent AI-powered signal control systems.
              </p>
              
              <div className="text-sm text-muted-foreground">
                © {new Date()?.getFullYear()} TrafficFlow AI. All rights reserved. | 
                Built with React & Tailwind CSS
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default HomeDashboard;