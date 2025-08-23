import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AlgorithmComparison = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('dqn');
  const [comparisonMetric, setComparisonMetric] = useState('performance');

  const algorithms = [
    {
      id: 'dqn',
      name: 'Deep Q-Network',
      shortName: 'DQN',
      description: 'Value-based method using deep neural networks to approximate Q-values',
      status: 'active',
      performance: 85,
      stability: 78,
      convergence: 82,
      efficiency: 75,
      complexity: 'Medium',
      trainingTime: '2.5 hours',
      memoryUsage: '1.2 GB'
    },
    {
      id: 'a3c',
      name: 'Asynchronous Actor-Critic',
      shortName: 'A3C',
      description: 'Policy gradient method with parallel training across multiple environments',
      status: 'testing',
      performance: 88,
      stability: 85,
      convergence: 79,
      efficiency: 82,
      complexity: 'High',
      trainingTime: '3.2 hours',
      memoryUsage: '2.1 GB'
    },
    {
      id: 'ppo',
      name: 'Proximal Policy Optimization',
      shortName: 'PPO',
      description: 'Policy gradient method with clipped surrogate objective for stable updates',
      status: 'ready',
      performance: 92,
      stability: 89,
      convergence: 86,
      efficiency: 88,
      complexity: 'Medium',
      trainingTime: '2.8 hours',
      memoryUsage: '1.8 GB'
    },
    {
      id: 'ddpg',
      name: 'Deep Deterministic Policy Gradient',
      shortName: 'DDPG',
      description: 'Actor-critic method for continuous action spaces with deterministic policies',
      status: 'experimental',
      performance: 79,
      stability: 72,
      convergence: 75,
      efficiency: 71,
      complexity: 'High',
      trainingTime: '4.1 hours',
      memoryUsage: '2.5 GB'
    }
  ];

  const performanceData = algorithms?.map(alg => ({
    name: alg?.shortName,
    performance: alg?.performance,
    stability: alg?.stability,
    convergence: alg?.convergence,
    efficiency: alg?.efficiency
  }));

  const radarData = [
    { subject: 'Performance', A: 85, B: 88, C: 92, fullMark: 100 },
    { subject: 'Stability', A: 78, B: 85, C: 89, fullMark: 100 },
    { subject: 'Convergence', A: 82, B: 79, C: 86, fullMark: 100 },
    { subject: 'Efficiency', A: 75, B: 82, C: 88, fullMark: 100 },
    { subject: 'Scalability', A: 80, B: 85, C: 90, fullMark: 100 },
    { subject: 'Robustness', A: 77, B: 83, C: 87, fullMark: 100 }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-primary text-primary-foreground';
      case 'ready': return 'bg-success text-success-foreground';
      case 'testing': return 'bg-secondary text-secondary-foreground';
      case 'experimental': return 'bg-warning text-warning-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return 'Play';
      case 'ready': return 'CheckCircle';
      case 'testing': return 'TestTube';
      case 'experimental': return 'Flask';
      default: return 'Circle';
    }
  };

  const selectedAlg = algorithms?.find(alg => alg?.id === selectedAlgorithm);

  return (
    <div className="bg-card rounded-lg border border-border p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-warning/10 rounded-lg">
            <Icon name="GitCompare" size={20} className="text-warning" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Algorithm Comparison</h3>
            <p className="text-sm text-muted-foreground">Performance analysis across RL methods</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            iconName="Download"
            iconSize={14}
          >
            Export
          </Button>
        </div>
      </div>
      {/* Algorithm Selection */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-foreground mb-3">Available Algorithms</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {algorithms?.map((algorithm) => (
            <div
              key={algorithm?.id}
              className={`border rounded-lg p-3 cursor-pointer transition-all duration-200 ${
                selectedAlgorithm === algorithm?.id
                  ? 'border-primary bg-primary/10' :'border-border hover:border-primary/50'
              }`}
              onClick={() => setSelectedAlgorithm(algorithm?.id)}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-foreground">{algorithm?.shortName}</span>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(algorithm?.status)}`}>
                    <div className="flex items-center space-x-1">
                      <Icon name={getStatusIcon(algorithm?.status)} size={10} />
                      <span>{algorithm?.status}</span>
                    </div>
                  </div>
                </div>
                {selectedAlgorithm === algorithm?.id && (
                  <Icon name="Check" size={16} className="text-primary" />
                )}
              </div>
              <p className="text-xs text-muted-foreground">{algorithm?.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Selected Algorithm Details */}
      {selectedAlg && (
        <div className="mb-6">
          <h4 className="text-sm font-medium text-foreground mb-3">Algorithm Details</h4>
          <div className="bg-muted/50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h5 className="text-base font-semibold text-foreground">{selectedAlg?.name}</h5>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedAlg?.status)}`}>
                <div className="flex items-center space-x-1">
                  <Icon name={getStatusIcon(selectedAlg?.status)} size={12} />
                  <span className="capitalize">{selectedAlg?.status}</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{selectedAlg?.description}</p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-lg font-bold text-primary">{selectedAlg?.performance}%</div>
                <div className="text-xs text-muted-foreground">Performance</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-success">{selectedAlg?.stability}%</div>
                <div className="text-xs text-muted-foreground">Stability</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-secondary">{selectedAlg?.convergence}%</div>
                <div className="text-xs text-muted-foreground">Convergence</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-warning">{selectedAlg?.efficiency}%</div>
                <div className="text-xs text-muted-foreground">Efficiency</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Performance Comparison Chart */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-foreground mb-3">Performance Metrics</h4>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis 
                dataKey="name" 
                stroke="var(--color-muted-foreground)"
                fontSize={12}
              />
              <YAxis 
                stroke="var(--color-muted-foreground)"
                fontSize={12}
                domain={[0, 100]}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'var(--color-card)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="performance" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="stability" fill="var(--color-success)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="convergence" fill="var(--color-secondary)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="efficiency" fill="var(--color-warning)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Radar Chart Comparison */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-foreground mb-3">Multi-dimensional Analysis</h4>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={radarData}>
              <PolarGrid stroke="var(--color-border)" />
              <PolarAngleAxis 
                dataKey="subject" 
                tick={{ fontSize: 12, fill: 'var(--color-muted-foreground)' }}
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 100]}
                tick={{ fontSize: 10, fill: 'var(--color-muted-foreground)' }}
              />
              <Radar 
                name="DQN" 
                dataKey="A" 
                stroke="var(--color-primary)" 
                fill="var(--color-primary)" 
                fillOpacity={0.1}
                strokeWidth={2}
              />
              <Radar 
                name="A3C" 
                dataKey="B" 
                stroke="var(--color-success)" 
                fill="var(--color-success)" 
                fillOpacity={0.1}
                strokeWidth={2}
              />
              <Radar 
                name="PPO" 
                dataKey="C" 
                stroke="var(--color-secondary)" 
                fill="var(--color-secondary)" 
                fillOpacity={0.1}
                strokeWidth={2}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Resource Usage Comparison */}
      <div>
        <h4 className="text-sm font-medium text-foreground mb-3">Resource Requirements</h4>
        <div className="space-y-3">
          {algorithms?.map((alg) => (
            <div key={alg?.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  alg?.id === selectedAlgorithm ? 'bg-primary' : 'bg-muted'
                }`}></div>
                <span className="text-sm font-medium text-foreground">{alg?.shortName}</span>
              </div>
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Icon name="Clock" size={12} />
                  <span>{alg?.trainingTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="HardDrive" size={12} />
                  <span>{alg?.memoryUsage}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Cpu" size={12} />
                  <span>{alg?.complexity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlgorithmComparison;