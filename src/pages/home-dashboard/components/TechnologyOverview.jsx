import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TechnologyOverview = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'Artificial Intelligence',
      description: 'Advanced machine learning algorithms that continuously learn from traffic patterns to make intelligent decisions in real-time.',
      features: [
        'Deep Q-Network (DQN) reinforcement learning',
        'Real-time pattern recognition',
        'Predictive traffic modeling',
        'Adaptive decision making'
      ],
      icon: 'Brain',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    cv: {
      title: 'Computer Vision',
      description: 'State-of-the-art image processing technology that analyzes traffic conditions through camera feeds and sensors.',
      features: [
        'Vehicle detection and counting',
        'Queue length estimation',
        'Pedestrian recognition',
        'Weather condition analysis'
      ],
      icon: 'Eye',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    iot: {
      title: 'IoT Integration',
      description: 'Seamless connectivity with existing traffic infrastructure and smart city systems for comprehensive monitoring.',
      features: [
        'Sensor network integration',
        'Real-time data collection',
        'Cloud-based processing',
        'Edge computing optimization'
      ],
      icon: 'Wifi',
      color: 'text-success',
      bgColor: 'bg-success/10'
    }
  };

  const tabs = [
    { key: 'ai', label: 'AI & ML', icon: 'Brain' },
    { key: 'cv', label: 'Computer Vision', icon: 'Eye' },
    { key: 'iot', label: 'IoT Systems', icon: 'Wifi' }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Icon name="Cpu" size={16} className="mr-2" />
            Advanced Technology Stack
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-heading mb-4">
            Cutting-Edge Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our solution combines multiple advanced technologies to create an intelligent, adaptive traffic control system.
          </p>
        </div>

        {/* Technology Tabs */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tab Navigation */}
          <div className="lg:w-1/3">
            <div className="space-y-2">
              {tabs?.map((tab) => (
                <button
                  key={tab?.key}
                  onClick={() => setActiveTab(tab?.key)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                    activeTab === tab?.key
                      ? 'bg-card border-primary shadow-card'
                      : 'bg-background border-border hover:bg-card hover:border-muted-foreground/20'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${
                      activeTab === tab?.key 
                        ? technologies?.[tab?.key]?.bgColor 
                        : 'bg-muted'
                    }`}>
                      <Icon 
                        name={tab?.icon} 
                        size={20} 
                        className={activeTab === tab?.key ? technologies?.[tab?.key]?.color : 'text-muted-foreground'} 
                      />
                    </div>
                    <div>
                      <div className={`font-medium ${
                        activeTab === tab?.key ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {tab?.label}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="lg:w-2/3">
            <div className="bg-card border border-border rounded-xl p-8 shadow-card">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${technologies?.[activeTab]?.bgColor}`}>
                    <Icon 
                      name={technologies?.[activeTab]?.icon} 
                      size={24} 
                      className={technologies?.[activeTab]?.color} 
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground font-heading">
                      {technologies?.[activeTab]?.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {technologies?.[activeTab]?.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {technologies?.[activeTab]?.features?.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${technologies?.[activeTab]?.color?.replace('text-', 'bg-')}`} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Implementation Progress</span>
                    <span className="text-foreground font-medium">
                      {activeTab === 'ai' ? '95%' : activeTab === 'cv' ? '88%' : '92%'}
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-1000 ${
                        technologies?.[activeTab]?.color?.replace('text-', 'bg-')
                      }`}
                      style={{ 
                        width: activeTab === 'ai' ? '95%' : activeTab === 'cv' ? '88%' : '92%' 
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-bold text-foreground font-heading mb-4">
              Explore Our Technical Implementation
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Dive deeper into the technical details and see how these technologies work together in our live demonstration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/rl-agent-dashboard">
                <Button variant="default" iconName="Code" iconPosition="left">
                  View RL Agent
                </Button>
              </Link>
              
              <Link to="/analytics-dashboard">
                <Button variant="outline" iconName="Activity" iconPosition="left">
                  See Performance
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyOverview;