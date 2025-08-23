import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectPhases = () => {
  const phases = [
    {
      id: 1,
      name: "Research & Planning",
      duration: "Weeks 1-3",
      status: "completed",
      icon: "Search",
      color: "text-primary bg-primary/10",
      progress: 100
    },
    {
      id: 2,
      name: "System Design",
      duration: "Weeks 4-6",
      status: "completed",
      icon: "Layers",
      color: "text-primary bg-primary/10",
      progress: 100
    },
    {
      id: 3,
      name: "Development",
      duration: "Weeks 7-12",
      status: "in-progress",
      icon: "Code",
      color: "text-secondary bg-secondary/10",
      progress: 75
    },
    {
      id: 4,
      name: "Testing & Validation",
      duration: "Weeks 13-15",
      status: "pending",
      icon: "TestTube",
      color: "text-muted-foreground bg-muted",
      progress: 25
    },
    {
      id: 5,
      name: "Deployment",
      duration: "Week 16",
      status: "pending",
      icon: "Rocket",
      color: "text-muted-foreground bg-muted",
      progress: 0
    }
  ];

  return (
    <div className="bg-card rounded-xl p-6 mb-8 card-elevation">
      <h2 className="text-xl font-semibold text-foreground mb-6 font-heading">Project Phases Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {phases?.map((phase) => (
          <div key={phase?.id} className="relative">
            <div className="bg-background rounded-lg p-4 border border-border hover:shadow-md transition-all duration-200">
              <div className={`w-12 h-12 rounded-lg ${phase?.color} flex items-center justify-center mb-3`}>
                <Icon name={phase?.icon} size={20} />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">{phase?.name}</h3>
              <p className="text-xs text-muted-foreground mb-3">{phase?.duration}</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Progress</span>
                  <span className="text-xs font-medium text-foreground">{phase?.progress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${
                      phase?.status === 'completed' ? 'bg-primary' :
                      phase?.status === 'in-progress' ? 'bg-secondary' : 'bg-muted-foreground/30'
                    }`}
                    style={{ width: `${phase?.progress}%` }}
                  />
                </div>
              </div>
            </div>
            {phase?.id < phases?.length && (
              <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-border transform -translate-y-1/2" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPhases;