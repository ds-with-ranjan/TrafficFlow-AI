import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const DecisionVisualization = () => {
  const [currentState, setCurrentState] = useState('analyzing');
  const [selectedAction, setSelectedAction] = useState(null);
  const [decisionStep, setDecisionStep] = useState(0);

  const trafficStates = {
    northSouth: { cars: 8, waiting: 12 },
    eastWest: { cars: 15, waiting: 8 },
    pedestrians: { north: 3, south: 2, east: 1, west: 4 }
  };

  const availableActions = [
    {
      id: 'extend_ns',
      name: 'Extend North-South',
      description: 'Continue current green phase for N-S traffic',
      qValue: 0.85,
      probability: 0.45,
      reward: '+12'
    },
    {
      id: 'switch_ew',
      name: 'Switch to East-West',
      description: 'Change signal to prioritize E-W traffic',
      qValue: 0.92,
      probability: 0.55,
      reward: '+18'
    },
    {
      id: 'pedestrian_phase',
      name: 'Pedestrian Phase',
      description: 'Activate pedestrian crossing signals',
      qValue: 0.73,
      probability: 0.25,
      reward: '+8'
    },
    {
      id: 'adaptive_timing',
      name: 'Adaptive Timing',
      description: 'Adjust timing based on traffic density',
      qValue: 0.88,
      probability: 0.35,
      reward: '+15'
    }
  ];

  const decisionSteps = [
    'State Observation',
    'Feature Extraction',
    'Q-Value Calculation',
    'Action Selection',
    'Execution'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDecisionStep((prev) => (prev + 1) % decisionSteps?.length);
      if (decisionStep === 3) {
        setSelectedAction(availableActions?.[1]); // Select best action
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [decisionStep]);

  const getActionColor = (action) => {
    if (action?.qValue > 0.9) return 'border-primary bg-primary/10';
    if (action?.qValue > 0.8) return 'border-secondary bg-secondary/10';
    return 'border-muted bg-muted/50';
  };

  const getSignalColor = (direction) => {
    if (selectedAction?.id === 'switch_ew' && (direction === 'east' || direction === 'west')) {
      return 'bg-primary';
    }
    if (selectedAction?.id === 'extend_ns' && (direction === 'north' || direction === 'south')) {
      return 'bg-primary';
    }
    return 'bg-accent';
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon name="Brain" size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Decision Process</h3>
            <p className="text-sm text-muted-foreground">Real-time AI reasoning</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-primary rounded-full pulse-live"></div>
          <span className="text-xs text-muted-foreground">Processing</span>
        </div>
      </div>
      {/* Decision Steps Progress */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-foreground mb-3">Decision Pipeline</h4>
        <div className="flex items-center space-x-2 overflow-x-auto pb-2">
          {decisionSteps?.map((step, index) => (
            <div key={step} className="flex items-center space-x-2 flex-shrink-0">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300 ${
                index <= decisionStep 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                {index + 1}
              </div>
              <span className={`text-xs whitespace-nowrap transition-colors duration-300 ${
                index <= decisionStep ? 'text-foreground' : 'text-muted-foreground'
              }`}>
                {step}
              </span>
              {index < decisionSteps?.length - 1 && (
                <Icon name="ChevronRight" size={12} className="text-muted-foreground mx-1" />
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Current Traffic State */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-foreground mb-3">Current Traffic State</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-muted/50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-muted-foreground">North-South</span>
              <div className={`w-3 h-3 rounded-full ${getSignalColor('north')}`}></div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>Active</span>
                <span className="font-medium">{trafficStates?.northSouth?.cars} cars</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Waiting</span>
                <span className="font-medium">{trafficStates?.northSouth?.waiting} cars</span>
              </div>
            </div>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-muted-foreground">East-West</span>
              <div className={`w-3 h-3 rounded-full ${getSignalColor('east')}`}></div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>Active</span>
                <span className="font-medium">{trafficStates?.eastWest?.cars} cars</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Waiting</span>
                <span className="font-medium">{trafficStates?.eastWest?.waiting} cars</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Available Actions */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-foreground mb-3">Available Actions</h4>
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {availableActions?.map((action) => (
            <div 
              key={action?.id}
              className={`border rounded-lg p-3 transition-all duration-300 ${
                selectedAction?.id === action?.id 
                  ? 'border-primary bg-primary/10 shadow-sm' 
                  : getActionColor(action)
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">{action?.name}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-primary font-medium">{action?.reward}</span>
                  {selectedAction?.id === action?.id && (
                    <Icon name="Check" size={14} className="text-primary" />
                  )}
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-2">{action?.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    <span className="text-xs text-muted-foreground">Q-Value:</span>
                    <span className="text-xs font-medium text-foreground">{action?.qValue}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-xs text-muted-foreground">Prob:</span>
                    <span className="text-xs font-medium text-foreground">{(action?.probability * 100)?.toFixed(0)}%</span>
                  </div>
                </div>
                <div className="w-16 bg-muted rounded-full h-1">
                  <div 
                    className="bg-primary h-1 rounded-full transition-all duration-300"
                    style={{ width: `${action?.qValue * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Neural Network Visualization */}
      <div>
        <h4 className="text-sm font-medium text-foreground mb-3">Neural Network Activity</h4>
        <div className="bg-muted/30 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-xs text-muted-foreground">Input Layer</span>
              <div className="space-y-1">
                {[1, 2, 3, 4]?.map((node) => (
                  <div key={node} className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <span className="text-xs text-muted-foreground">Hidden Layers</span>
              <div className="flex space-x-2">
                <div className="space-y-1">
                  {[1, 2, 3]?.map((node) => (
                    <div key={node} className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  ))}
                </div>
                <div className="space-y-1">
                  {[1, 2, 3]?.map((node) => (
                    <div key={node} className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <span className="text-xs text-muted-foreground">Output Layer</span>
              <div className="space-y-1">
                {availableActions?.slice(0, 4)?.map((action, index) => (
                  <div 
                    key={action?.id} 
                    className={`w-3 h-3 rounded-full ${
                      selectedAction?.id === action?.id ? 'bg-primary animate-pulse' : 'bg-muted'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecisionVisualization;