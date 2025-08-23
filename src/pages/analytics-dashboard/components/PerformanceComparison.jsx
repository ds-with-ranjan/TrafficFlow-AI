import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PerformanceComparison = () => {
  const [viewType, setViewType] = useState('efficiency');
  const [comparisonPeriod, setComparisonPeriod] = useState('monthly');

  const comparisonData = {
    efficiency: [
      { name: 'Jan', current: 85, previous: 78, industry: 72 },
      { name: 'Feb', current: 88, previous: 80, industry: 73 },
      { name: 'Mar', current: 92, previous: 82, industry: 74 },
      { name: 'Apr', current: 89, previous: 84, industry: 75 },
      { name: 'May', current: 94, previous: 86, industry: 76 },
      { name: 'Jun', current: 91, previous: 87, industry: 77 }
    ],
    delay: [
      { name: 'Jan', current: 28, previous: 35, industry: 42 },
      { name: 'Feb', current: 25, previous: 33, industry: 41 },
      { name: 'Mar', current: 22, previous: 31, industry: 40 },
      { name: 'Apr', current: 24, previous: 29, industry: 39 },
      { name: 'May', current: 20, previous: 27, industry: 38 },
      { name: 'Jun', current: 23, previous: 26, industry: 37 }
    ],
    fuel: [
      { name: 'Jan', current: 15.2, previous: 12.8, industry: 8.5 },
      { name: 'Feb', current: 16.8, previous: 13.5, industry: 9.2 },
      { name: 'Mar', current: 18.5, previous: 14.2, industry: 9.8 },
      { name: 'Apr', current: 17.3, previous: 15.1, industry: 10.1 },
      { name: 'May', current: 19.7, previous: 15.8, industry: 10.5 },
      { name: 'Jun', current: 18.9, previous: 16.2, industry: 10.8 }
    ]
  };

  const metrics = [
    {
      key: 'efficiency',
      label: 'Traffic Efficiency',
      unit: '%',
      icon: 'TrendingUp',
      description: 'Overall traffic flow optimization'
    },
    {
      key: 'delay',
      label: 'Average Delay',
      unit: 'seconds',
      icon: 'Clock',
      description: 'Average vehicle waiting time'
    },
    {
      key: 'fuel',
      label: 'Fuel Savings',
      unit: '%',
      icon: 'Fuel',
      description: 'Estimated fuel consumption reduction'
    }
  ];

  const getCurrentMetric = () => metrics?.find(m => m?.key === viewType);
  const getCurrentData = () => comparisonData?.[viewType];

  const calculateImprovement = (current, previous) => {
    const improvement = ((current - previous) / previous) * 100;
    return improvement?.toFixed(1);
  };

  const getAverageImprovement = () => {
    const data = getCurrentData();
    const improvements = data?.map(item => 
      parseFloat(calculateImprovement(item?.current, item?.previous))
    );
    const average = improvements?.reduce((sum, val) => sum + val, 0) / improvements?.length;
    return average?.toFixed(1);
  };

  return (
    <div className="bg-card rounded-lg p-6 card-elevation">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Performance Comparison</h3>
          <p className="text-sm text-muted-foreground">
            Current system vs previous period & industry benchmarks
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" iconName="Calendar">
            {comparisonPeriod === 'monthly' ? 'Monthly' : 'Weekly'}
          </Button>
          <Button variant="ghost" size="sm" iconName="Download">
            Export
          </Button>
        </div>
      </div>
      {/* Metric Selector */}
      <div className="flex items-center space-x-1 mb-6 bg-muted/50 p-1 rounded-lg">
        {metrics?.map((metric) => (
          <button
            key={metric?.key}
            onClick={() => setViewType(metric?.key)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-smooth ${
              viewType === metric?.key
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
            }`}
          >
            <Icon name={metric?.icon} size={16} />
            <span>{metric?.label}</span>
          </button>
        ))}
      </div>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Target" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Current Performance</span>
          </div>
          <div className="text-2xl font-bold text-foreground">
            {getCurrentData()?.[getCurrentData()?.length - 1]?.current}
            <span className="text-sm text-muted-foreground ml-1">
              {getCurrentMetric()?.unit}
            </span>
          </div>
        </div>

        <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="TrendingUp" size={16} className="text-secondary" />
            <span className="text-sm font-medium text-secondary">Improvement</span>
          </div>
          <div className="text-2xl font-bold text-foreground">
            +{getAverageImprovement()}%
            <span className="text-sm text-muted-foreground ml-1">avg</span>
          </div>
        </div>

        <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Award" size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">vs Industry</span>
          </div>
          <div className="text-2xl font-bold text-foreground">
            {viewType === 'delay' ? '-' : '+'}
            {Math.abs(
              getCurrentData()?.[getCurrentData()?.length - 1]?.current - 
              getCurrentData()?.[getCurrentData()?.length - 1]?.industry
            )?.toFixed(1)}
            <span className="text-sm text-muted-foreground ml-1">
              {getCurrentMetric()?.unit}
            </span>
          </div>
        </div>
      </div>
      {/* Comparison Chart */}
      <div className="h-80 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={getCurrentData()} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis 
              dataKey="name" 
              stroke="var(--color-muted-foreground)"
              fontSize={12}
            />
            <YAxis 
              stroke="var(--color-muted-foreground)"
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                borderRadius: '8px'
              }}
              formatter={(value, name) => [
                `${value}${getCurrentMetric()?.unit}`,
                name === 'current' ? 'Current System' : 
                name === 'previous' ? 'Previous Period' : 'Industry Average'
              ]}
            />
            <Bar 
              dataKey="current" 
              fill="var(--color-primary)" 
              name="current"
              radius={[2, 2, 0, 0]}
            />
            <Bar 
              dataKey="previous" 
              fill="var(--color-secondary)" 
              name="previous"
              radius={[2, 2, 0, 0]}
            />
            <Bar 
              dataKey="industry" 
              fill="var(--color-muted-foreground)" 
              name="industry"
              radius={[2, 2, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      {/* Legend */}
      <div className="flex items-center justify-center space-x-6 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-sm bg-primary"></div>
          <span className="text-muted-foreground">Current System</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-sm bg-secondary"></div>
          <span className="text-muted-foreground">Previous Period</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-sm bg-muted-foreground"></div>
          <span className="text-muted-foreground">Industry Average</span>
        </div>
      </div>
      {/* Insights */}
      <div className="mt-6 p-4 bg-muted/30 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Lightbulb" size={20} className="text-primary mt-0.5" />
          <div>
            <h4 className="font-medium text-foreground mb-1">Performance Insights</h4>
            <p className="text-sm text-muted-foreground">
              {viewType === 'efficiency' && 
                `Traffic efficiency has improved by ${getAverageImprovement()}% compared to the previous period, significantly outperforming industry standards.`
              }
              {viewType === 'delay' && 
                `Average vehicle delay has been reduced by ${getAverageImprovement()}%, resulting in smoother traffic flow and improved user experience.`
              }
              {viewType === 'fuel' && 
                `Fuel savings have increased by ${getAverageImprovement()}%, contributing to both cost reduction and environmental benefits.`
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceComparison;