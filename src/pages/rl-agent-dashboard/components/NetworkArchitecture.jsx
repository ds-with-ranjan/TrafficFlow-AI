import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const NetworkArchitecture = () => {
  const [activeLayer, setActiveLayer] = useState(null);
  const [animationStep, setAnimationStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const networkLayers = [
    {
      id: 'input',
      name: 'Input Layer',
      type: 'input',
      nodes: 12,
      description: 'Traffic state features: vehicle counts, waiting times, signal phases',
      activation: 'linear',
      parameters: 0,
      features: [
        'North-South vehicle count',
        'East-West vehicle count', 
        'Pedestrian waiting count',
        'Current signal phase',
        'Phase duration',
        'Queue lengths',
        'Average waiting time',
        'Traffic density',
        'Time of day',
        'Weather conditions',
        'Emergency vehicles',
        'Historical patterns'
      ]
    },
    {
      id: 'hidden1',
      name: 'Hidden Layer 1',
      type: 'dense',
      nodes: 128,
      description: 'Feature extraction and pattern recognition',
      activation: 'ReLU',
      parameters: 1664, // (12 * 128) + 128
      dropout: 0.2
    },
    {
      id: 'hidden2',
      name: 'Hidden Layer 2',
      type: 'dense',
      nodes: 64,
      description: 'High-level feature combination and abstraction',
      activation: 'ReLU',
      parameters: 8256, // (128 * 64) + 64
      dropout: 0.3
    },
    {
      id: 'hidden3',
      name: 'Hidden Layer 3',
      type: 'dense',
      nodes: 32,
      description: 'Decision-relevant feature synthesis',
      activation: 'ReLU',
      parameters: 2080, // (64 * 32) + 32
      dropout: 0.2
    },
    {
      id: 'output',
      name: 'Output Layer',
      type: 'output',
      nodes: 4,
      description: 'Q-values for each possible action',
      activation: 'linear',
      parameters: 132, // (32 * 4) + 4
      actions: [
        'Extend North-South green',
        'Switch to East-West green',
        'Activate pedestrian phase',
        'Maintain current state'
      ]
    }
  ];

  const connections = [
    { from: 'input', to: 'hidden1', strength: 0.8 },
    { from: 'hidden1', to: 'hidden2', strength: 0.9 },
    { from: 'hidden2', to: 'hidden3', strength: 0.85 },
    { from: 'hidden3', to: 'output', strength: 0.95 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (isProcessing) {
        setAnimationStep((prev) => (prev + 1) % networkLayers?.length);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [isProcessing, networkLayers?.length]);

  const startForwardPass = () => {
    setIsProcessing(true);
    setAnimationStep(0);
    setTimeout(() => {
      setIsProcessing(false);
      setAnimationStep(0);
    }, networkLayers?.length * 800 + 1000);
  };

  const getLayerColor = (layer, index) => {
    if (isProcessing && index <= animationStep) {
      return 'border-primary bg-primary/20';
    }
    if (activeLayer === layer?.id) {
      return 'border-secondary bg-secondary/10';
    }
    switch (layer?.type) {
      case 'input': return 'border-success bg-success/10';
      case 'output': return 'border-accent bg-accent/10';
      default: return 'border-primary bg-primary/10';
    }
  };

  const getNodeColor = (layer, index) => {
    if (isProcessing && index <= animationStep) {
      return 'bg-primary animate-pulse';
    }
    if (activeLayer === layer?.id) {
      return 'bg-secondary';
    }
    switch (layer?.type) {
      case 'input': return 'bg-success';
      case 'output': return 'bg-accent';
      default: return 'bg-primary';
    }
  };

  const totalParameters = networkLayers?.reduce((sum, layer) => sum + (layer?.parameters || 0), 0);

  return (
    <div className="bg-card rounded-lg border border-border p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-accent/10 rounded-lg">
            <Icon name="Network" size={20} className="text-accent" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Network Architecture</h3>
            <p className="text-sm text-muted-foreground">Deep Q-Network structure</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={startForwardPass}
            disabled={isProcessing}
            iconName="Play"
            iconSize={14}
          >
            {isProcessing ? 'Processing...' : 'Forward Pass'}
          </Button>
        </div>
      </div>
      {/* Network Overview */}
      <div className="mb-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-muted/50 rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-foreground">{networkLayers?.length}</div>
            <div className="text-xs text-muted-foreground">Layers</div>
          </div>
          <div className="bg-muted/50 rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-primary">{totalParameters?.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">Parameters</div>
          </div>
          <div className="bg-muted/50 rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-success">12</div>
            <div className="text-xs text-muted-foreground">Inputs</div>
          </div>
          <div className="bg-muted/50 rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-accent">4</div>
            <div className="text-xs text-muted-foreground">Outputs</div>
          </div>
        </div>
      </div>
      {/* Network Visualization */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-foreground mb-3">Network Structure</h4>
        <div className="bg-muted/30 rounded-lg p-4 overflow-x-auto">
          <div className="flex items-center justify-between min-w-max space-x-8">
            {networkLayers?.map((layer, index) => (
              <div key={layer?.id} className="flex flex-col items-center space-y-3">
                {/* Layer Header */}
                <div className="text-center">
                  <h5 className="text-xs font-medium text-foreground">{layer?.name}</h5>
                  <p className="text-xs text-muted-foreground">{layer?.nodes} nodes</p>
                </div>
                
                {/* Layer Visualization */}
                <div 
                  className={`border-2 rounded-lg p-3 cursor-pointer transition-all duration-300 ${getLayerColor(layer, index)}`}
                  onClick={() => setActiveLayer(activeLayer === layer?.id ? null : layer?.id)}
                >
                  <div className="grid grid-cols-4 gap-1 max-w-16">
                    {Array.from({ length: Math.min(layer?.nodes, 16) })?.map((_, nodeIndex) => (
                      <div
                        key={nodeIndex}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${getNodeColor(layer, index)}`}
                      />
                    ))}
                    {layer?.nodes > 16 && (
                      <div className="col-span-4 text-center">
                        <span className="text-xs text-muted-foreground">+{layer?.nodes - 16}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Connection Arrow */}
                {index < networkLayers?.length - 1 && (
                  <div className="flex items-center">
                    <Icon 
                      name="ArrowRight" 
                      size={16} 
                      className={`transition-colors duration-300 ${
                        isProcessing && index < animationStep ? 'text-primary' : 'text-muted-foreground'
                      }`} 
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Layer Details */}
      {activeLayer && (
        <div className="mb-6">
          <h4 className="text-sm font-medium text-foreground mb-3">Layer Details</h4>
          {(() => {
            const layer = networkLayers?.find(l => l?.id === activeLayer);
            return (
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h5 className="text-base font-semibold text-foreground">{layer?.name}</h5>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setActiveLayer(null)}
                    iconName="X"
                    iconSize={14}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-xs text-muted-foreground">Nodes:</span>
                    <span className="text-sm font-medium text-foreground ml-2">{layer?.nodes}</span>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground">Activation:</span>
                    <span className="text-sm font-medium text-foreground ml-2">{layer?.activation}</span>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground">Parameters:</span>
                    <span className="text-sm font-medium text-foreground ml-2">{(layer?.parameters || 0)?.toLocaleString()}</span>
                  </div>
                  {layer?.dropout && (
                    <div>
                      <span className="text-xs text-muted-foreground">Dropout:</span>
                      <span className="text-sm font-medium text-foreground ml-2">{layer?.dropout}</span>
                    </div>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-3">{layer?.description}</p>
                {layer?.features && (
                  <div>
                    <h6 className="text-xs font-medium text-foreground mb-2">Input Features:</h6>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                      {layer?.features?.map((feature, index) => (
                        <div key={index} className="text-xs text-muted-foreground flex items-center space-x-1">
                          <Icon name="Dot" size={8} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {layer?.actions && (
                  <div>
                    <h6 className="text-xs font-medium text-foreground mb-2">Output Actions:</h6>
                    <div className="space-y-1">
                      {layer?.actions?.map((action, index) => (
                        <div key={index} className="text-xs text-muted-foreground flex items-center space-x-1">
                          <Icon name="ArrowRight" size={8} />
                          <span>{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      )}
      {/* Training Information */}
      <div>
        <h4 className="text-sm font-medium text-foreground mb-3">Training Configuration</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-xs text-muted-foreground">Optimizer:</span>
              <span className="text-xs font-medium text-foreground">Adam</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-muted-foreground">Learning Rate:</span>
              <span className="text-xs font-medium text-foreground">0.001</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-muted-foreground">Batch Size:</span>
              <span className="text-xs font-medium text-foreground">32</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-xs text-muted-foreground">Loss Function:</span>
              <span className="text-xs font-medium text-foreground">MSE</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-muted-foreground">Target Update:</span>
              <span className="text-xs font-medium text-foreground">100 steps</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-muted-foreground">Memory Size:</span>
              <span className="text-xs font-medium text-foreground">10,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkArchitecture;