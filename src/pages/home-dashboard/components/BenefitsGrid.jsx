import React from 'react';
import Icon from '../../../components/AppIcon';

const BenefitsGrid = () => {
  const benefits = [
    {
      id: 1,
      icon: 'TrendingUp',
      title: 'Traffic Flow Optimization',
      description: 'Advanced algorithms analyze real-time traffic patterns to optimize signal timing, reducing wait times and improving overall traffic flow efficiency.',
      metric: '40% faster',
      color: 'text-primary'
    },
    {
      id: 2,
      icon: 'Clock',
      title: 'Reduced Congestion',
      description: 'Smart prediction models anticipate traffic buildup and proactively adjust signals to prevent bottlenecks before they occur.',
      metric: '60% less wait',
      color: 'text-secondary'
    },
    {
      id: 3,
      icon: 'Leaf',
      title: 'Environmental Impact',
      description: 'Minimized idle time and smoother traffic flow significantly reduce vehicle emissions and fuel consumption across the city.',
      metric: '25% cleaner',
      color: 'text-success'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-heading mb-4">
            Revolutionary Benefits
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered system delivers measurable improvements across multiple dimensions of urban traffic management.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits?.map((benefit) => (
            <div
              key={benefit?.id}
              className="group bg-card border border-border rounded-xl p-8 shadow-card hover:shadow-modal transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-6">
                {/* Icon and Metric */}
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-lg bg-muted ${benefit?.color}`}>
                    <Icon name={benefit?.icon} size={24} />
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${benefit?.color}`}>
                      {benefit?.metric}
                    </div>
                    <div className="text-xs text-muted-foreground">improvement</div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground font-heading">
                    {benefit?.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit?.description}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Efficiency</span>
                    <span className="text-foreground font-medium">
                      {benefit?.id === 1 ? '92%' : benefit?.id === 2 ? '88%' : '85%'}
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-1000 group-hover:scale-x-105 ${
                        benefit?.id === 1 ? 'bg-primary w-[92%]' : 
                        benefit?.id === 2 ? 'bg-secondary w-[88%]': 'bg-success w-[85%]'
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;