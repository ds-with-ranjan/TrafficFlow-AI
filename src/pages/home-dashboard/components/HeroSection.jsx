import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentSignal, setCurrentSignal] = useState(0);
  const signals = ['red', 'yellow', 'green'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSignal((prev) => (prev + 1) % signals?.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const getSignalColor = (index) => {
    if (index === currentSignal) {
      switch (signals?.[index]) {
        case 'red': return 'bg-accent';
        case 'yellow': return 'bg-secondary';
        case 'green': return 'bg-primary';
        default: return 'bg-muted';
      }
    }
    return 'bg-muted';
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <Icon name="Zap" size={16} className="mr-2" />
                AI-Powered Traffic Control
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground font-heading leading-tight">
                Smart Traffic Flow with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  AI Intelligence
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                Revolutionary reinforcement learning system that adapts traffic signals in real-time, reducing congestion by up to 40% and cutting emissions through intelligent optimization.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/rl-agent-dashboard">
                <Button variant="default" size="lg" iconName="Play" iconPosition="left" className="w-full sm:w-auto">
                  View Live Demo
                </Button>
              </Link>
              
              <Link to="/use-cases-benefits">
                <Button variant="outline" size="lg" iconName="BookOpen" iconPosition="left" className="w-full sm:w-auto">
                  Explore Use Cases
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Signals Optimized</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">40%</div>
                <div className="text-sm text-muted-foreground">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">25%</div>
                <div className="text-sm text-muted-foreground">Emissions Cut</div>
              </div>
            </div>
          </div>

          {/* Right Content - Animated Traffic Signal */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl scale-150"></div>
              
              {/* Traffic Signal Container */}
              <div className="relative bg-card border border-border rounded-2xl p-8 shadow-modal">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Live Traffic Control</h3>
                    <p className="text-sm text-muted-foreground">AI adapting in real-time</p>
                  </div>
                  
                  {/* Animated Traffic Light */}
                  <div className="flex flex-col items-center space-y-4">
                    <div className="bg-gray-800 rounded-lg p-4 space-y-3">
                      {signals?.map((signal, index) => (
                        <div
                          key={signal}
                          className={`w-16 h-16 rounded-full transition-all duration-300 ${getSignalColor(index)} ${
                            index === currentSignal ? 'shadow-lg scale-110' : 'opacity-30'
                          }`}
                        />
                      ))}
                    </div>
                    
                    <div className="text-center">
                      <div className="text-sm font-medium text-foreground capitalize">
                        Current: {signals?.[currentSignal]}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Next change in 2s
                      </div>
                    </div>
                  </div>

                  {/* Demo Video Thumbnail */}
                  <div className="relative rounded-lg overflow-hidden bg-muted">
                    <Image
                      src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=250&fit=crop"
                      alt="Traffic intersection aerial view"
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Button variant="ghost" size="icon" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                        <Icon name="Play" size={24} className="text-white" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;