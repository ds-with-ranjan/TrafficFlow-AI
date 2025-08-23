import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ResearchCollaboration = () => {
  const [activeTab, setActiveTab] = useState('partnerships');

  const partnerships = [
    {
      name: 'MIT Computer Science and Artificial Intelligence Laboratory',
      type: 'Research Partnership',
      duration: '2022 - Present',
      focus: 'Advanced Reinforcement Learning Algorithms',
      status: 'Active',
      logo: 'https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop&crop=center'
    },
    {
      name: 'Stanford Traffic Engineering Department',
      type: 'Academic Collaboration',
      duration: '2021 - Present',
      focus: 'Real-world Traffic Pattern Analysis',
      status: 'Active',
      logo: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=100&h=100&fit=crop&crop=center'
    },
    {
      name: 'UC Berkeley Transportation Research',
      type: 'Joint Research',
      duration: '2023 - Present',
      focus: 'Computer Vision for Traffic Monitoring',
      status: 'Active',
      logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=100&h=100&fit=crop&crop=center'
    }
  ];

  const publications = [
    {
      title: 'Adaptive Traffic Signal Control Using Deep Reinforcement Learning',
      authors: 'Chen, S., Rodriguez, M., Watson, E.',
      journal: 'IEEE Transactions on Intelligent Transportation Systems',
      year: '2023',
      citations: 127,
      type: 'Journal Article',
      downloadUrl: '#'
    },
    {
      title: 'Computer Vision-Based Vehicle Detection for Smart Traffic Management',
      authors: 'Watson, E., Kumar, A., Wilson, D.',
      journal: 'Transportation Research Part C',
      year: '2023',
      citations: 89,
      type: 'Journal Article',
      downloadUrl: '#'
    },
    {
      title: 'Real-time Traffic Flow Optimization: A Multi-Agent Approach',
      authors: 'Rodriguez, M., Park, L., Thompson, J.',
      journal: 'International Conference on Machine Learning',
      year: '2022',
      citations: 156,
      type: 'Conference Paper',
      downloadUrl: '#'
    },
    {
      title: 'Scalable Infrastructure for AI-Powered Traffic Control Systems',
      authors: 'Thompson, J., Lee, R., Brown, J.',
      journal: 'ACM Transactions on Cyber-Physical Systems',
      year: '2022',
      citations: 73,
      type: 'Journal Article',
      downloadUrl: '#'
    }
  ];

  const conferences = [
    {
      name: 'International Conference on Intelligent Transportation Systems',
      location: 'Singapore',
      date: 'September 2023',
      presentation: 'TrafficFlow AI: Real-world Implementation Results',
      presenter: 'Dr. Sarah Chen',
      type: 'Keynote'
    },
    {
      name: 'IEEE Conference on Computer Vision and Pattern Recognition',
      location: 'Vancouver, Canada',
      date: 'June 2023',
      presentation: 'Advanced Vehicle Detection in Complex Traffic Scenarios',
      presenter: 'Dr. Emily Watson',
      type: 'Paper Presentation'
    },
    {
      name: 'Neural Information Processing Systems',
      location: 'New Orleans, USA',
      date: 'December 2022',
      presentation: 'Multi-Agent Reinforcement Learning for Traffic Optimization',
      presenter: 'Dr. Michael Rodriguez',
      type: 'Poster Session'
    }
  ];

  const tabs = [
    { id: 'partnerships', label: 'Partnerships', icon: 'Users' },
    { id: 'publications', label: 'Publications', icon: 'FileText' },
    { id: 'conferences', label: 'Conferences', icon: 'Calendar' }
  ];

  return (
    <div className="bg-card rounded-xl p-8 card-elevation">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="GraduationCap" size={24} className="text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-foreground">Research & Collaboration</h3>
          <p className="text-muted-foreground">Academic partnerships and scientific contributions</p>
        </div>
      </div>
      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-8 bg-muted p-1 rounded-lg">
        {tabs?.map((tab) => (
          <button
            key={tab?.id}
            onClick={() => setActiveTab(tab?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              activeTab === tab?.id
                ? 'bg-card text-primary shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Icon name={tab?.icon} size={16} />
            <span>{tab?.label}</span>
          </button>
        ))}
      </div>
      {/* Partnerships Tab */}
      {activeTab === 'partnerships' && (
        <div className="space-y-6">
          {partnerships?.map((partnership, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 border border-border rounded-lg hover:border-primary/30 transition-smooth">
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Building2" size={24} className="text-muted-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-foreground">{partnership?.name}</h4>
                  <span className="px-3 py-1 bg-success/10 text-success text-xs rounded-full">
                    {partnership?.status}
                  </span>
                </div>
                <p className="text-primary font-medium mb-1">{partnership?.type}</p>
                <p className="text-muted-foreground text-sm mb-2">{partnership?.focus}</p>
                <p className="text-muted-foreground text-xs">{partnership?.duration}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Publications Tab */}
      {activeTab === 'publications' && (
        <div className="space-y-6">
          {publications?.map((pub, index) => (
            <div key={index} className="p-6 border border-border rounded-lg hover:border-primary/30 transition-smooth">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-2">{pub?.title}</h4>
                  <p className="text-muted-foreground text-sm mb-1">{pub?.authors}</p>
                  <p className="text-primary text-sm font-medium">{pub?.journal} ({pub?.year})</p>
                </div>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Icon name="Quote" size={14} />
                    <span>{pub?.citations} citations</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Download"
                    iconPosition="left"
                    onClick={() => alert('Download would start here')}
                  >
                    PDF
                  </Button>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                  {pub?.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Conferences Tab */}
      {activeTab === 'conferences' && (
        <div className="space-y-6">
          {conferences?.map((conf, index) => (
            <div key={index} className="p-6 border border-border rounded-lg hover:border-primary/30 transition-smooth">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-2">{conf?.name}</h4>
                  <p className="text-primary font-medium mb-1">{conf?.presentation}</p>
                  <p className="text-muted-foreground text-sm">Presented by {conf?.presenter}</p>
                </div>
                <div className="text-right">
                  <p className="text-muted-foreground text-sm">{conf?.location}</p>
                  <p className="text-muted-foreground text-sm">{conf?.date}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 text-xs rounded ${
                  conf?.type === 'Keynote' ?'bg-primary/10 text-primary' :'bg-muted text-muted-foreground'
                }`}>
                  {conf?.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResearchCollaboration;