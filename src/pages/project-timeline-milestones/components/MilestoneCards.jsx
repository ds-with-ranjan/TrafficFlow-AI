import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MilestoneCards = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const milestones = [
    {
      id: 1,
      title: "Research Phase Complete",
      date: "January 26, 2024",
      status: "completed",
      priority: "high",
      description: "Comprehensive literature review and problem analysis completed with stakeholder requirements gathered.",
      deliverables: [
        "Literature Review Document",
        "Problem Statement",
        "Requirements Specification",
        "Stakeholder Analysis Report"
      ],
      team: ["Dr. Sarah Chen", "Alex Rodriguez", "Business Analyst"],
      documents: [
        { name: "Research_Report_v2.pdf", size: "2.4 MB", type: "pdf" },
        { name: "Requirements_Doc.docx", size: "1.8 MB", type: "doc" }
      ],
      risks: [],
      nextSteps: ["Begin system architecture design", "Finalize technology stack"]
    },
    {
      id: 2,
      title: "System Architecture Approved",
      date: "February 16, 2024",
      status: "completed",
      priority: "high",
      description: "Complete system architecture design with database schema and API specifications finalized.",
      deliverables: [
        "System Architecture Document",
        "Database Schema Design",
        "API Specification",
        "Technology Stack Document"
      ],
      team: ["Solution Architect", "Database Designer", "Backend Lead"],
      documents: [
        { name: "System_Architecture_v3.pdf", size: "3.2 MB", type: "pdf" },
        { name: "Database_Schema.sql", size: "0.5 MB", type: "sql" },
        { name: "API_Specs.json", size: "0.8 MB", type: "json" }
      ],
      risks: [],
      nextSteps: ["Start development environment setup", "Begin core backend development"]
    },
    {
      id: 3,
      title: "MVP Development Complete",
      date: "March 15, 2024",
      status: "in-progress",
      priority: "critical",
      description: "Core system functionality including computer vision module and basic RL agent implementation.",
      deliverables: [
        "Computer Vision Module",
        "Basic RL Agent",
        "Core Backend APIs",
        "Dashboard Prototype"
      ],
      team: ["CV Engineer", "ML Engineer", "Backend Developer", "Frontend Lead"],
      documents: [
        { name: "MVP_Demo_Video.mp4", size: "45.2 MB", type: "video" },
        { name: "Technical_Specs.pdf", size: "2.1 MB", type: "pdf" }
      ],
      risks: [
        { risk: "Performance optimization challenges", impact: "medium", mitigation: "Implement caching and optimization techniques" },
        { risk: "Integration complexity", impact: "high", mitigation: "Dedicated integration testing phase" }
      ],
      nextSteps: ["Complete frontend integration", "Optimize performance", "Conduct integration testing"]
    },
    {
      id: 4,
      title: "Beta Testing Launch",
      date: "April 5, 2024",
      status: "pending",
      priority: "high",
      description: "System ready for beta testing with complete feature set and initial performance optimization.",
      deliverables: [
        "Beta Release Package",
        "User Testing Guide",
        "Performance Benchmarks",
        "Bug Tracking System"
      ],
      team: ["QA Team", "Performance Engineer", "Product Manager"],
      documents: [
        { name: "Beta_Testing_Plan.pdf", size: "1.9 MB", type: "pdf" },
        { name: "User_Guide_v1.pdf", size: "3.5 MB", type: "pdf" }
      ],
      risks: [
        { risk: "User adoption challenges", impact: "medium", mitigation: "Comprehensive user training and support" },
        { risk: "Scalability issues", impact: "high", mitigation: "Load testing and infrastructure scaling" }
      ],
      nextSteps: ["Recruit beta testers", "Set up monitoring systems", "Prepare support documentation"]
    },
    {
      id: 5,
      title: "Production Deployment",
      date: "April 26, 2024",
      status: "pending",
      priority: "critical",
      description: "Final system deployment with full monitoring, documentation, and support infrastructure.",
      deliverables: [
        "Production System",
        "Monitoring Dashboard",
        "Complete Documentation",
        "Support Infrastructure"
      ],
      team: ["DevOps Team", "Operations Team", "Technical Writer"],
      documents: [
        { name: "Deployment_Guide.pdf", size: "2.8 MB", type: "pdf" },
        { name: "Operations_Manual.pdf", size: "4.1 MB", type: "pdf" }
      ],
      risks: [
        { risk: "Deployment failures", impact: "critical", mitigation: "Comprehensive rollback procedures" },
        { risk: "Performance degradation", impact: "high", mitigation: "Real-time monitoring and alerting" }
      ],
      nextSteps: ["Final system testing", "Deployment preparation", "Team training"]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-primary bg-primary/10 border-primary/20';
      case 'in-progress': return 'text-secondary bg-secondary/10 border-secondary/20';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical': return 'text-accent bg-accent/10';
      case 'high': return 'text-warning bg-warning/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const getFileIcon = (type) => {
    switch (type) {
      case 'pdf': return 'FileText';
      case 'doc': return 'FileText';
      case 'video': return 'Video';
      case 'sql': return 'Database';
      case 'json': return 'Code';
      default: return 'File';
    }
  };

  return (
    <div className="bg-card rounded-xl p-6 card-elevation">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground font-heading">Key Milestones</h2>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-xs text-muted-foreground">Completed</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded-full bg-secondary" />
            <span className="text-xs text-muted-foreground">In Progress</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded-full bg-muted" />
            <span className="text-xs text-muted-foreground">Pending</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {milestones?.map((milestone) => (
          <div key={milestone?.id} className="bg-background rounded-lg border border-border p-6 hover:shadow-md transition-all duration-200">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(milestone?.priority)}`}>
                    {milestone?.priority?.toUpperCase()}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(milestone?.status)}`}>
                    {milestone?.status?.replace('-', ' ')?.toUpperCase()}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{milestone?.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{milestone?.date}</p>
              </div>
              <Icon 
                name={milestone?.status === 'completed' ? 'CheckCircle' : milestone?.status === 'in-progress' ? 'Clock' : 'Circle'} 
                size={24} 
                className={
                  milestone?.status === 'completed' ? 'text-primary' :
                  milestone?.status === 'in-progress' ? 'text-secondary' : 'text-muted-foreground'
                }
              />
            </div>

            <p className="text-sm text-muted-foreground mb-4">{milestone?.description}</p>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-foreground mb-2">Deliverables</h4>
                <div className="space-y-1">
                  {milestone?.deliverables?.slice(0, 3)?.map((deliverable, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="CheckSquare" size={14} className="text-primary" />
                      <span className="text-xs text-muted-foreground">{deliverable}</span>
                    </div>
                  ))}
                  {milestone?.deliverables?.length > 3 && (
                    <span className="text-xs text-muted-foreground">+{milestone?.deliverables?.length - 3} more</span>
                  )}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-foreground mb-2">Team</h4>
                <div className="flex flex-wrap gap-1">
                  {milestone?.team?.slice(0, 2)?.map((member, index) => (
                    <span key={index} className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground">
                      {member}
                    </span>
                  ))}
                  {milestone?.team?.length > 2 && (
                    <span className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground">
                      +{milestone?.team?.length - 2}
                    </span>
                  )}
                </div>
              </div>

              {milestone?.risks?.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Risks</h4>
                  <div className="space-y-1">
                    {milestone?.risks?.slice(0, 2)?.map((risk, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <Icon name="AlertTriangle" size={12} className="text-warning mt-0.5" />
                        <span className="text-xs text-muted-foreground">{risk?.risk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedMilestone(selectedMilestone === milestone?.id ? null : milestone?.id)}
                className="w-full"
                iconName={selectedMilestone === milestone?.id ? "ChevronUp" : "ChevronDown"}
                iconPosition="right"
              >
                {selectedMilestone === milestone?.id ? "Show Less" : "View Details"}
              </Button>

              {selectedMilestone === milestone?.id && (
                <div className="mt-4 pt-4 border-t border-border space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Documents</h4>
                    <div className="space-y-2">
                      {milestone?.documents?.map((doc, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-muted rounded">
                          <div className="flex items-center space-x-2">
                            <Icon name={getFileIcon(doc?.type)} size={16} className="text-muted-foreground" />
                            <div>
                              <span className="text-xs font-medium text-foreground">{doc?.name}</span>
                              <span className="text-xs text-muted-foreground ml-2">({doc?.size})</span>
                            </div>
                          </div>
                          <Button variant="ghost" size="xs" iconName="Download">
                            Download
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {milestone?.nextSteps?.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Next Steps</h4>
                      <div className="space-y-1">
                        {milestone?.nextSteps?.map((step, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Icon name="ArrowRight" size={12} className="text-primary" />
                            <span className="text-xs text-muted-foreground">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MilestoneCards;