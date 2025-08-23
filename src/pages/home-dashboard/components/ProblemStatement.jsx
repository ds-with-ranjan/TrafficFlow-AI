import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProblemStatement = () => {
  const problems = [
    {
      id: 1,
      title: 'Traffic Congestion Crisis',
      description: `Urban traffic congestion costs the global economy over $87 billion annually in lost productivity.\n\nTraditional fixed-timing signals cannot adapt to real-time traffic patterns, leading to unnecessary delays and frustrated commuters.`,
      image: 'https://images.pexels.com/photos/2885320/pexels-photo-2885320.jpeg?w=600&h=400&fit=crop',
      stats: [
        { label: 'Time Lost', value: '54 hours/year', icon: 'Clock' },
        { label: 'Fuel Wasted', value: '$1,400/driver', icon: 'Fuel' },
        { label: 'CO2 Emissions', value: '+23%', icon: 'TrendingUp' }
      ]
    },
    {
      id: 2,
      title: 'Inefficient Signal Control',
      description: `Current traffic management systems rely on pre-programmed timing patterns that ignore real-time conditions.\n\nThis leads to green lights with no traffic and red lights blocking heavy flows, creating artificial bottlenecks throughout the city.`,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
      stats: [
        { label: 'Signal Efficiency', value: '32%', icon: 'AlertTriangle' },
        { label: 'Adaptive Systems', value: '8%', icon: 'Target' },
        { label: 'Response Time', value: '15+ min', icon: 'Timer' }
      ]
    },
    {
      id: 3,
      title: 'Environmental Impact',
      description: `Stop-and-go traffic patterns significantly increase vehicle emissions and fuel consumption.\n\nIdling vehicles at red lights contribute disproportionately to urban air pollution, affecting public health and environmental sustainability.`,
      image: 'https://images.pixabay.com/photo/2016/11/29/05/45/automobile-1867177_1280.jpg?w=600&h=400&fit=crop',
      stats: [
        { label: 'Idle Emissions', value: '40%', icon: 'Leaf' },
        { label: 'Air Quality', value: 'Poor', icon: 'Wind' },
        { label: 'Health Impact', value: 'High', icon: 'Heart' }
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            <Icon name="AlertCircle" size={16} className="mr-2" />
            Critical Urban Challenge
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-heading mb-4">
            The Traffic Control Problem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding the complex challenges that our AI-powered solution addresses in modern urban traffic management.
          </p>
        </div>

        <div className="space-y-20">
          {problems?.map((problem, index) => (
            <div
              key={problem?.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {problem?.id}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground font-heading">
                      {problem?.title}
                    </h3>
                  </div>
                  
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {problem?.description}
                  </div>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-3 gap-4">
                  {problem?.stats?.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className="bg-card border border-border rounded-lg p-4 text-center"
                    >
                      <div className="flex justify-center mb-2">
                        <Icon name={stat?.icon} size={20} className="text-accent" />
                      </div>
                      <div className="text-lg font-bold text-foreground">
                        {stat?.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat?.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="relative rounded-xl overflow-hidden shadow-modal group">
                  <Image
                    src={problem?.image}
                    alt={`${problem?.title} visualization`}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                      <div className="text-white text-sm font-medium">
                        Problem #{problem?.id}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground font-heading mb-4">
              Ready to See the Solution?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover how our AI-powered reinforcement learning system addresses these critical challenges with intelligent, adaptive traffic control.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/rl-agent-dashboard">
                <Button variant="default" size="lg" iconName="Play" iconPosition="left">
                  View Live Demo
                </Button>
              </Link>
              
              <Link to="/analytics-dashboard">
                <Button variant="outline" size="lg" iconName="BarChart3" iconPosition="left">
                  See Analytics
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;