import React from 'react';
import Icon from '../../../components/AppIcon';

const ComparisonMatrix = () => {
  const comparisonData = [
    {
      feature: 'Response Time',
      traditional: 'Fixed timing cycles',
      aiSystem: 'Real-time adaptation',
      improvement: '+65%',
      icon: 'Clock'
    },
    {
      feature: 'Traffic Flow',
      traditional: 'Static optimization',
      aiSystem: 'Dynamic flow control',
      improvement: '+42%',
      icon: 'TrendingUp'
    },
    {
      feature: 'Emergency Response',
      traditional: 'Manual override required',
      aiSystem: 'Automatic priority routing',
      improvement: '+78%',
      icon: 'Siren'
    },
    {
      feature: 'Energy Efficiency',
      traditional: 'Constant power usage',
      aiSystem: 'Adaptive power management',
      improvement: '+35%',
      icon: 'Zap'
    },
    {
      feature: 'Maintenance',
      traditional: 'Scheduled inspections',
      aiSystem: 'Predictive maintenance',
      improvement: '+50%',
      icon: 'Settings'
    },
    {
      feature: 'Data Analytics',
      traditional: 'Limited reporting',
      aiSystem: 'Comprehensive insights',
      improvement: '+90%',
      icon: 'BarChart3'
    }
  ];

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="p-6 border-b border-border">
        <h3 className="text-xl font-bold text-foreground flex items-center space-x-3">
          <Icon name="GitCompare" size={24} className="text-primary" />
          <span>AI vs Traditional Systems</span>
        </h3>
        <p className="text-sm text-muted-foreground mt-2">
          Comprehensive comparison of key performance indicators
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-4 font-semibold text-foreground">Feature</th>
              <th className="text-left p-4 font-semibold text-foreground">Traditional System</th>
              <th className="text-left p-4 font-semibold text-foreground">AI-Powered System</th>
              <th className="text-center p-4 font-semibold text-foreground">Improvement</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData?.map((row, index) => (
              <tr key={index} className="border-t border-border hover:bg-muted/30 transition-colors">
                <td className="p-4">
                  <div className="flex items-center space-x-3">
                    <Icon name={row?.icon} size={18} className="text-primary" />
                    <span className="font-medium text-foreground">{row?.feature}</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="X" size={16} className="text-accent" />
                    <span className="text-sm text-muted-foreground">{row?.traditional}</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-success" />
                    <span className="text-sm text-foreground">{row?.aiSystem}</span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <div className="inline-flex items-center space-x-1 bg-success/10 text-success px-3 py-1 rounded-full">
                    <Icon name="TrendingUp" size={14} />
                    <span className="font-semibold text-sm">{row?.improvement}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Summary Stats */}
      <div className="p-6 bg-muted/30 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">58%</div>
            <div className="text-sm text-muted-foreground">Average Improvement</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-success mb-1">6/6</div>
            <div className="text-sm text-muted-foreground">Categories Enhanced</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary mb-1">24/7</div>
            <div className="text-sm text-muted-foreground">Continuous Operation</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonMatrix;