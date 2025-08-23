import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';

const StatisticsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    signals: 0,
    timeSaved: 0,
    emissions: 0,
    cities: 0
  });
  
  const sectionRef = useRef(null);

  const finalValues = {
    signals: 1247,
    timeSaved: 89,
    emissions: 34,
    cities: 12
  };

  const statistics = [
    {
      key: 'signals',
      icon: 'Traffic',
      label: 'Traffic Signals Optimized',
      value: counters?.signals,
      suffix: '+',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      key: 'timeSaved',
      icon: 'Clock',
      label: 'Average Time Saved',
      value: counters?.timeSaved,
      suffix: '%',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      key: 'emissions',
      icon: 'Leaf',
      label: 'Emissions Reduced',
      value: counters?.emissions,
      suffix: '%',
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      key: 'cities',
      icon: 'MapPin',
      label: 'Cities Deployed',
      value: counters?.cities,
      suffix: '+',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef?.current) {
      observer?.observe(sectionRef?.current);
    }

    return () => observer?.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalValues)?.map(key => {
      const finalValue = finalValues?.[key];
      const increment = finalValue / steps;
      let currentStep = 0;

      return setInterval(() => {
        currentStep++;
        const currentValue = Math.min(Math.floor(increment * currentStep), finalValue);
        
        setCounters(prev => ({
          ...prev,
          [key]: currentValue
        }));

        if (currentStep >= steps) {
          clearInterval(intervals?.find(interval => interval === this));
        }
      }, stepDuration);
    });

    return () => {
      intervals?.forEach(interval => clearInterval(interval));
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-heading mb-4">
            Real-Time Impact Metrics
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Live data showcasing the measurable impact of our AI-powered traffic control system across deployed locations.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics?.map((stat) => (
            <div
              key={stat?.key}
              className="group bg-card border border-border rounded-xl p-6 text-center shadow-card hover:shadow-modal transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-lg ${stat?.bgColor} ${stat?.color} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={stat?.icon} size={24} />
                </div>

                {/* Counter */}
                <div className="space-y-1">
                  <div className={`text-3xl lg:text-4xl font-bold ${stat?.color} font-heading`}>
                    {stat?.value?.toLocaleString()}{stat?.suffix}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat?.label}
                  </div>
                </div>

                {/* Pulse Indicator */}
                <div className="flex justify-center">
                  <div className={`w-2 h-2 rounded-full ${stat?.color?.replace('text-', 'bg-')} pulse-live`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Context */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-muted rounded-full">
            <Icon name="Activity" size={16} className="text-primary mr-2" />
            <span className="text-sm text-muted-foreground">
              Data updated in real-time • Last sync: {new Date()?.toLocaleTimeString()}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsCounter;