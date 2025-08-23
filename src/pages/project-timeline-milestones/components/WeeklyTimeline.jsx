import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const WeeklyTimeline = () => {
  const [selectedWeek, setSelectedWeek] = useState(null);

  const weeklyData = [
    {
      week: 1,
      title: "Project Initiation",
      date: "Jan 8-12, 2024",
      status: "completed",
      tasks: [
        { name: "Literature Review", completed: true, assignee: "Dr. Sarah Chen" },
        { name: "Problem Definition", completed: true, assignee: "Alex Rodriguez" },
        { name: "Team Formation", completed: true, assignee: "Project Manager" }
      ],
      deliverables: ["Project Charter", "Research Plan"],
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      week: 2,
      title: "Requirements Analysis",
      date: "Jan 15-19, 2024",
      status: "completed",
      tasks: [
        { name: "Traffic Data Collection", completed: true, assignee: "Data Team" },
        { name: "Stakeholder Interviews", completed: true, assignee: "Business Analyst" },
        { name: "System Requirements", completed: true, assignee: "Tech Lead" }
      ],
      deliverables: ["Requirements Document", "Data Analysis Report"],
      avatar: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      week: 3,
      title: "Technology Stack Selection",
      date: "Jan 22-26, 2024",
      status: "completed",
      tasks: [
        { name: "Framework Evaluation", completed: true, assignee: "Senior Developer" },
        { name: "Infrastructure Planning", completed: true, assignee: "DevOps Engineer" },
        { name: "Tool Selection", completed: true, assignee: "Tech Lead" }
      ],
      deliverables: ["Technology Stack Document", "Development Environment"],
      avatar: "https://randomuser.me/api/portraits/women/28.jpg"
    },
    {
      week: 4,
      title: "System Architecture",
      date: "Jan 29 - Feb 2, 2024",
      status: "completed",
      tasks: [
        { name: "Architecture Design", completed: true, assignee: "Solution Architect" },
        { name: "Database Schema", completed: true, assignee: "Database Designer" },
        { name: "API Specifications", completed: true, assignee: "Backend Lead" }
      ],
      deliverables: ["System Architecture", "Database Design", "API Documentation"],
      avatar: "https://randomuser.me/api/portraits/men/35.jpg"
    },
    {
      week: 5,
      title: "UI/UX Design",
      date: "Feb 5-9, 2024",
      status: "completed",
      tasks: [
        { name: "User Journey Mapping", completed: true, assignee: "UX Designer" },
        { name: "Wireframe Creation", completed: true, assignee: "UI Designer" },
        { name: "Prototype Development", completed: true, assignee: "Design Team" }
      ],
      deliverables: ["Design System", "Interactive Prototypes", "User Flow Diagrams"],
      avatar: "https://randomuser.me/api/portraits/women/42.jpg"
    },
    {
      week: 6,
      title: "Development Setup",
      date: "Feb 12-16, 2024",
      status: "completed",
      tasks: [
        { name: "Development Environment", completed: true, assignee: "DevOps Team" },
        { name: "CI/CD Pipeline", completed: true, assignee: "DevOps Engineer" },
        { name: "Code Repository Setup", completed: true, assignee: "Tech Lead" }
      ],
      deliverables: ["Development Environment", "CI/CD Pipeline", "Code Standards"],
      avatar: "https://randomuser.me/api/portraits/men/29.jpg"
    },
    {
      week: 7,
      title: "Core Backend Development",
      date: "Feb 19-23, 2024",
      status: "completed",
      tasks: [
        { name: "API Development", completed: true, assignee: "Backend Developer" },
        { name: "Database Implementation", completed: true, assignee: "Database Developer" },
        { name: "Authentication System", completed: true, assignee: "Security Engineer" }
      ],
      deliverables: ["Core APIs", "Database Implementation", "Auth System"],
      avatar: "https://randomuser.me/api/portraits/women/38.jpg"
    },
    {
      week: 8,
      title: "Computer Vision Module",
      date: "Feb 26 - Mar 1, 2024",
      status: "completed",
      tasks: [
        { name: "Image Processing Pipeline", completed: true, assignee: "CV Engineer" },
        { name: "Object Detection Model", completed: true, assignee: "ML Engineer" },
        { name: "Real-time Processing", completed: true, assignee: "Performance Engineer" }
      ],
      deliverables: ["CV Module", "Detection Models", "Processing Pipeline"],
      avatar: "https://randomuser.me/api/portraits/men/41.jpg"
    },
    {
      week: 9,
      title: "RL Agent Development",
      date: "Mar 4-8, 2024",
      status: "completed",
      tasks: [
        { name: "Q-Learning Implementation", completed: true, assignee: "RL Specialist" },
        { name: "Reward Function Design", completed: true, assignee: "Algorithm Engineer" },
        { name: "Training Pipeline", completed: true, assignee: "ML Engineer" }
      ],
      deliverables: ["RL Agent", "Training System", "Reward Functions"],
      avatar: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    {
      week: 10,
      title: "Frontend Development",
      date: "Mar 11-15, 2024",
      status: "in-progress",
      tasks: [
        { name: "Dashboard Implementation", completed: true, assignee: "Frontend Developer" },
        { name: "Real-time Updates", completed: true, assignee: "Frontend Lead" },
        { name: "Mobile Responsiveness", completed: false, assignee: "UI Developer" }
      ],
      deliverables: ["Dashboard UI", "Mobile Interface", "Real-time Features"],
      avatar: "https://randomuser.me/api/portraits/men/36.jpg"
    },
    {
      week: 11,
      title: "Integration & Testing",
      date: "Mar 18-22, 2024",
      status: "in-progress",
      tasks: [
        { name: "System Integration", completed: false, assignee: "Integration Engineer" },
        { name: "Unit Testing", completed: true, assignee: "QA Engineer" },
        { name: "Performance Testing", completed: false, assignee: "Performance Tester" }
      ],
      deliverables: ["Integrated System", "Test Reports", "Performance Metrics"],
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      week: 12,
      title: "Simulation Environment",
      date: "Mar 25-29, 2024",
      status: "in-progress",
      tasks: [
        { name: "Traffic Simulation", completed: false, assignee: "Simulation Engineer" },
        { name: "Scenario Generation", completed: false, assignee: "Data Scientist" },
        { name: "Visualization Tools", completed: false, assignee: "Frontend Developer" }
      ],
      deliverables: ["Simulation Platform", "Test Scenarios", "Visualization Dashboard"],
      avatar: "https://randomuser.me/api/portraits/men/31.jpg"
    },
    {
      week: 13,
      title: "System Testing",
      date: "Apr 1-5, 2024",
      status: "pending",
      tasks: [
        { name: "End-to-End Testing", completed: false, assignee: "QA Team" },
        { name: "Load Testing", completed: false, assignee: "Performance Engineer" },
        { name: "Security Testing", completed: false, assignee: "Security Tester" }
      ],
      deliverables: ["Test Results", "Performance Report", "Security Assessment"],
      avatar: "https://randomuser.me/api/portraits/women/39.jpg"
    },
    {
      week: 14,
      title: "Bug Fixes & Optimization",
      date: "Apr 8-12, 2024",
      status: "pending",
      tasks: [
        { name: "Bug Resolution", completed: false, assignee: "Development Team" },
        { name: "Performance Optimization", completed: false, assignee: "Performance Engineer" },
        { name: "Code Review", completed: false, assignee: "Senior Developer" }
      ],
      deliverables: ["Bug Fix Report", "Optimized System", "Code Quality Report"],
      avatar: "https://randomuser.me/api/portraits/men/43.jpg"
    },
    {
      week: 15,
      title: "User Acceptance Testing",
      date: "Apr 15-19, 2024",
      status: "pending",
      tasks: [
        { name: "UAT Execution", completed: false, assignee: "Business Analyst" },
        { name: "User Feedback Collection", completed: false, assignee: "Product Manager" },
        { name: "Final Adjustments", completed: false, assignee: "Development Team" }
      ],
      deliverables: ["UAT Report", "User Feedback", "Final System"],
      avatar: "https://randomuser.me/api/portraits/women/37.jpg"
    },
    {
      week: 16,
      title: "Deployment & Launch",
      date: "Apr 22-26, 2024",
      status: "pending",
      tasks: [
        { name: "Production Deployment", completed: false, assignee: "DevOps Team" },
        { name: "System Monitoring", completed: false, assignee: "Operations Team" },
        { name: "Documentation Finalization", completed: false, assignee: "Technical Writer" }
      ],
      deliverables: ["Live System", "Monitoring Setup", "Final Documentation"],
      avatar: "https://randomuser.me/api/portraits/men/40.jpg"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-primary text-primary-foreground';
      case 'in-progress': return 'bg-secondary text-secondary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return 'CheckCircle';
      case 'in-progress': return 'Clock';
      default: return 'Circle';
    }
  };

  return (
    <div className="bg-card rounded-xl p-6 card-elevation">
      <h2 className="text-xl font-semibold text-foreground mb-6 font-heading">Weekly Timeline</h2>
      {/* Desktop Timeline */}
      <div className="hidden lg:block">
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
          <div className="space-y-8">
            {weeklyData?.map((week) => (
              <div key={week?.week} className="relative flex items-start space-x-6">
                <div className={`relative z-10 w-16 h-16 rounded-full ${getStatusColor(week?.status)} flex items-center justify-center font-bold text-sm`}>
                  W{week?.week}
                </div>
                <div className="flex-1 bg-background rounded-lg border border-border p-6 hover:shadow-md transition-all duration-200 cursor-pointer"
                     onClick={() => setSelectedWeek(selectedWeek === week?.week ? null : week?.week)}>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{week?.title}</h3>
                      <p className="text-sm text-muted-foreground">{week?.date}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Image src={week?.avatar} alt="Team member" className="w-8 h-8 rounded-full" />
                      <Icon name={getStatusIcon(week?.status)} size={20} className={
                        week?.status === 'completed' ? 'text-primary' :
                        week?.status === 'in-progress' ? 'text-secondary' : 'text-muted-foreground'
                      } />
                    </div>
                  </div>
                  
                  {selectedWeek === week?.week && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-foreground mb-3">Tasks</h4>
                          <div className="space-y-2">
                            {week?.tasks?.map((task, index) => (
                              <div key={index} className="flex items-center space-x-3">
                                <Icon 
                                  name={task?.completed ? "CheckCircle" : "Circle"} 
                                  size={16} 
                                  className={task?.completed ? "text-primary" : "text-muted-foreground"} 
                                />
                                <span className={`text-sm ${task?.completed ? "text-foreground" : "text-muted-foreground"}`}>
                                  {task?.name}
                                </span>
                                <span className="text-xs text-muted-foreground">({task?.assignee})</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground mb-3">Deliverables</h4>
                          <div className="space-y-2">
                            {week?.deliverables?.map((deliverable, index) => (
                              <div key={index} className="flex items-center space-x-3">
                                <Icon name="FileText" size={16} className="text-primary" />
                                <span className="text-sm text-foreground">{deliverable}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Mobile Timeline */}
      <div className="lg:hidden space-y-4">
        {weeklyData?.map((week) => (
          <div key={week?.week} className="bg-background rounded-lg border border-border p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full ${getStatusColor(week?.status)} flex items-center justify-center font-bold text-xs`}>
                  W{week?.week}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{week?.title}</h3>
                  <p className="text-xs text-muted-foreground">{week?.date}</p>
                </div>
              </div>
              <Icon name={getStatusIcon(week?.status)} size={16} className={
                week?.status === 'completed' ? 'text-primary' :
                week?.status === 'in-progress' ? 'text-secondary' : 'text-muted-foreground'
              } />
            </div>
            
            <div className="text-xs text-muted-foreground">
              {week?.tasks?.filter(t => t?.completed)?.length}/{week?.tasks?.length} tasks completed
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyTimeline;