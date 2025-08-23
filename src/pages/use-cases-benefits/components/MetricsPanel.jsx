import React from 'react';
import Icon from '../../../components/AppIcon';

const MetricsPanel = ({ scenario }) => {
  const MetricCard = ({ icon, label, before, after, unit, improvement }) => (
    <div className="bg-card border border-border rounded-lg p-4">
      <div className="flex items-center space-x-2 mb-3">
        <Icon name={icon} size={18} className="text-primary" />
        <span className="text-sm font-medium text-foreground">{label}</span>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-xs text-muted-foreground">Before</span>
          <span className="text-sm font-mono text-accent">{before} {unit}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-muted-foreground">After</span>
          <span className="text-sm font-mono text-primary">{after} {unit}</span>
        </div>
        <div className="pt-2 border-t border-border">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Improvement</span>
            <div className="flex items-center space-x-1">
              <Icon name="TrendingUp" size={14} className="text-success" />
              <span className="text-sm font-semibold text-success">{improvement}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Scenario Description */}
      <div className="bg-muted/50 rounded-lg p-4">
        <h3 className="font-semibold text-foreground mb-2">{scenario?.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{scenario?.description}</p>
      </div>
      {/* Performance Metrics */}
      <div>
        <h4 className="font-semibold text-foreground mb-4 flex items-center space-x-2">
          <Icon name="BarChart3" size={18} />
          <span>Performance Metrics</span>
        </h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {scenario?.metrics?.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
      </div>
      {/* AI Decision Insights */}
      <div>
        <h4 className="font-semibold text-foreground mb-4 flex items-center space-x-2">
          <Icon name="Brain" size={18} />
          <span>AI Decision Insights</span>
        </h4>
        
        <div className="space-y-3">
          {scenario?.insights?.map((insight, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-card border border-border rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h5 className="text-sm font-medium text-foreground mb-1">{insight?.title}</h5>
                <p className="text-xs text-muted-foreground">{insight?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Environmental Impact */}
      <div className="bg-success/10 border border-success/20 rounded-lg p-4">
        <h4 className="font-semibold text-success mb-2 flex items-center space-x-2">
          <Icon name="Leaf" size={18} />
          <span>Environmental Impact</span>
        </h4>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-success">{scenario?.environmental?.co2Reduction}%</div>
            <div className="text-xs text-success/80">CO₂ Reduction</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-success">{scenario?.environmental?.fuelSavings}%</div>
            <div className="text-xs text-success/80">Fuel Savings</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsPanel;