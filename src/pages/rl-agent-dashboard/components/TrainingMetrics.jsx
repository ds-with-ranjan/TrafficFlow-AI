import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import Icon from '../../../components/AppIcon';

const TrainingMetrics = () => {
  const rewardData = [
    { episode: 0, reward: -150, avgReward: -150 },
    { episode: 100, reward: -120, avgReward: -135 },
    { episode: 200, reward: -80, avgReward: -110 },
    { episode: 300, reward: -45, avgReward: -85 },
    { episode: 400, reward: -20, avgReward: -65 },
    { episode: 500, reward: 15, avgReward: -40 },
    { episode: 600, reward: 45, avgReward: -15 },
    { episode: 700, reward: 75, avgReward: 10 },
    { episode: 800, reward: 95, avgReward: 35 },
    { episode: 900, reward: 120, avgReward: 55 },
    { episode: 1000, reward: 145, avgReward: 75 }
  ];

  const lossData = [
    { episode: 0, loss: 2.5 },
    { episode: 100, loss: 2.1 },
    { episode: 200, loss: 1.8 },
    { episode: 300, loss: 1.4 },
    { episode: 400, loss: 1.1 },
    { episode: 500, loss: 0.9 },
    { episode: 600, loss: 0.7 },
    { episode: 700, loss: 0.5 },
    { episode: 800, loss: 0.4 },
    { episode: 900, loss: 0.3 },
    { episode: 1000, loss: 0.25 }
  ];

  const explorationData = [
    { episode: 0, epsilon: 1.0 },
    { episode: 100, epsilon: 0.9 },
    { episode: 200, epsilon: 0.8 },
    { episode: 300, epsilon: 0.7 },
    { episode: 400, epsilon: 0.6 },
    { episode: 500, epsilon: 0.5 },
    { episode: 600, epsilon: 0.4 },
    { episode: 700, epsilon: 0.3 },
    { episode: 800, epsilon: 0.2 },
    { episode: 900, epsilon: 0.15 },
    { episode: 1000, epsilon: 0.1 }
  ];

  const currentMetrics = {
    totalEpisodes: 1000,
    currentReward: 145,
    avgReward: 75,
    convergenceRate: 0.89,
    explorationRate: 0.1,
    learningRate: 0.001
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon name="TrendingUp" size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Training Metrics</h3>
            <p className="text-sm text-muted-foreground">Real-time learning performance</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span className="text-xs text-muted-foreground">Live</span>
        </div>
      </div>
      {/* Key Metrics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-muted/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground">Episodes</p>
              <p className="text-lg font-bold text-foreground">{currentMetrics?.totalEpisodes?.toLocaleString()}</p>
            </div>
            <Icon name="Play" size={16} className="text-primary" />
          </div>
        </div>
        
        <div className="bg-muted/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground">Current Reward</p>
              <p className="text-lg font-bold text-primary">+{currentMetrics?.currentReward}</p>
            </div>
            <Icon name="Award" size={16} className="text-primary" />
          </div>
        </div>
        
        <div className="bg-muted/50 rounded-lg p-4 col-span-2 lg:col-span-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground">Convergence</p>
              <p className="text-lg font-bold text-success">{(currentMetrics?.convergenceRate * 100)?.toFixed(1)}%</p>
            </div>
            <Icon name="Target" size={16} className="text-success" />
          </div>
        </div>
      </div>
      {/* Reward Function Chart */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-foreground mb-3">Reward Function Progress</h4>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={rewardData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis 
                dataKey="episode" 
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
              />
              <Line 
                type="monotone" 
                dataKey="reward" 
                stroke="var(--color-primary)" 
                strokeWidth={2}
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="avgReward" 
                stroke="var(--color-secondary)" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Loss Function Chart */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-foreground mb-3">Loss Function</h4>
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={lossData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis 
                dataKey="episode" 
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
              />
              <Area 
                type="monotone" 
                dataKey="loss" 
                stroke="var(--color-accent)" 
                fill="var(--color-accent)"
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Exploration Rate */}
      <div>
        <h4 className="text-sm font-medium text-foreground mb-3">Exploration Rate (ε-greedy)</h4>
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={explorationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis 
                dataKey="episode" 
                stroke="var(--color-muted-foreground)"
                fontSize={12}
              />
              <YAxis 
                stroke="var(--color-muted-foreground)"
                fontSize={12}
                domain={[0, 1]}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'var(--color-card)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="epsilon" 
                stroke="var(--color-warning)" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default TrainingMetrics;