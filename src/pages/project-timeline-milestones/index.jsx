import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import TimelineHeader from './components/TimelineHeader';
import ProjectPhases from './components/ProjectPhases';
import WeeklyTimeline from './components/WeeklyTimeline';
import MilestoneCards from './components/MilestoneCards';
import ResourceAllocation from './components/ResourceAllocation';
import RiskAssessment from './components/RiskAssessment';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';

const ProjectTimelineMilestones = () => {
  const [activeTab, setActiveTab] = useState('timeline');

  const tabs = [
    { id: 'timeline', label: 'Timeline', icon: 'Calendar' },
    { id: 'milestones', label: 'Milestones', icon: 'Flag' },
    { id: 'resources', label: 'Resources', icon: 'BarChart3' },
    { id: 'risks', label: 'Risk Assessment', icon: 'AlertTriangle' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'timeline':
        return (
          <div className="space-y-8">
            <ProjectPhases />
            <WeeklyTimeline />
          </div>
        );
      case 'milestones':
        return <MilestoneCards />;
      case 'resources':
        return <ResourceAllocation />;
      case 'risks':
        return <RiskAssessment />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <TimelineHeader />

        {/* Navigation Tabs */}
        <div className="bg-card rounded-xl p-2 mb-8 card-elevation">
          <div className="flex flex-wrap gap-2">
            {tabs?.map((tab) => (
              <Button
                key={tab?.id}
                variant={activeTab === tab?.id ? "default" : "ghost"}
                onClick={() => setActiveTab(tab?.id)}
                iconName={tab?.icon}
                iconPosition="left"
                className="flex-1 sm:flex-none"
              >
                {tab?.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="transition-all duration-300">
          {renderTabContent()}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-xl p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2 font-heading">Project Management Actions</h2>
            <p className="text-muted-foreground">Quick access to essential project management tools and reports</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button
              variant="outline"
              className="h-20 flex-col space-y-2"
              iconName="Download"
            >
              <span className="font-medium">Export Timeline</span>
              <span className="text-xs text-muted-foreground">Download project timeline as PDF</span>
            </Button>
            
            <Button
              variant="outline"
              className="h-20 flex-col space-y-2"
              iconName="FileText"
            >
              <span className="font-medium">Generate Report</span>
              <span className="text-xs text-muted-foreground">Create comprehensive status report</span>
            </Button>
            
            <Button
              variant="outline"
              className="h-20 flex-col space-y-2"
              iconName="Users"
            >
              <span className="font-medium">Team Dashboard</span>
              <span className="text-xs text-muted-foreground">View team performance metrics</span>
            </Button>
            
            <Button
              variant="outline"
              className="h-20 flex-col space-y-2"
              iconName="Settings"
            >
              <span className="font-medium">Project Settings</span>
              <span className="text-xs text-muted-foreground">Configure timeline preferences</span>
            </Button>
          </div>
        </div>

        {/* Project Status Footer */}
        <div className="mt-8 bg-card rounded-xl p-6 card-elevation">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Icon name="TrendingUp" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Project Status: On Track</h3>
                <p className="text-sm text-muted-foreground">
                  87% complete • 2 weeks remaining • 3 active risks
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <div className="text-sm text-muted-foreground">Last Updated</div>
                <div className="text-sm font-medium text-foreground">
                  {new Date()?.toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </div>
              </div>
              <Button variant="outline" size="sm" iconName="RefreshCw">
                Refresh
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectTimelineMilestones;