import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const HyperparameterControls = () => {
  const [parameters, setParameters] = useState({
    learningRate: 0.001,
    discountFactor: 0.95,
    explorationRate: 0.1,
    explorationDecay: 0.995,
    batchSize: 32,
    memorySize: 10000,
    targetUpdateFreq: 100,
    rewardScale: 1.0
  });

  const [presets, setPresets] = useState([
    {
      id: 'conservative',
      name: 'Conservative Learning',
      description: 'Stable but slower convergence',
      params: {
        learningRate: 0.0005,
        discountFactor: 0.99,
        explorationRate: 0.05,
        explorationDecay: 0.999
      }
    },
    {
      id: 'aggressive',
      name: 'Aggressive Learning',
      description: 'Fast learning with higher risk',
      params: {
        learningRate: 0.01,
        discountFactor: 0.9,
        explorationRate: 0.3,
        explorationDecay: 0.99
      }
    },
    {
      id: 'balanced',
      name: 'Balanced Approach',
      description: 'Optimal balance of speed and stability',
      params: {
        learningRate: 0.001,
        discountFactor: 0.95,
        explorationRate: 0.1,
        explorationDecay: 0.995
      }
    }
  ]);

  const [activePreset, setActivePreset] = useState('balanced');
  const [isTraining, setIsTraining] = useState(false);

  const handleParameterChange = (param, value) => {
    setParameters(prev => ({
      ...prev,
      [param]: parseFloat(value)
    }));
    setActivePreset('custom');
  };

  const applyPreset = (preset) => {
    setParameters(prev => ({
      ...prev,
      ...preset?.params
    }));
    setActivePreset(preset?.id);
  };

  const resetToDefaults = () => {
    const defaultPreset = presets?.find(p => p?.id === 'balanced');
    applyPreset(defaultPreset);
  };

  const startTraining = () => {
    setIsTraining(true);
    // Simulate training process
    setTimeout(() => {
      setIsTraining(false);
    }, 3000);
  };

  const parameterConfigs = [
    {
      key: 'learningRate',
      label: 'Learning Rate (α)',
      description: 'Controls how much to change the model in response to the estimated error',
      min: 0.0001,
      max: 0.1,
      step: 0.0001,
      format: (val) => val?.toFixed(4)
    },
    {
      key: 'discountFactor',
      label: 'Discount Factor (γ)',
      description: 'Determines the importance of future rewards',
      min: 0.1,
      max: 1.0,
      step: 0.01,
      format: (val) => val?.toFixed(2)
    },
    {
      key: 'explorationRate',
      label: 'Exploration Rate (ε)',
      description: 'Probability of taking random actions for exploration',
      min: 0.01,
      max: 1.0,
      step: 0.01,
      format: (val) => val?.toFixed(2)
    },
    {
      key: 'explorationDecay',
      label: 'Exploration Decay',
      description: 'Rate at which exploration decreases over time',
      min: 0.9,
      max: 1.0,
      step: 0.001,
      format: (val) => val?.toFixed(3)
    },
    {
      key: 'batchSize',
      label: 'Batch Size',
      description: 'Number of experiences sampled from memory for training',
      min: 8,
      max: 128,
      step: 8,
      format: (val) => val?.toString()
    },
    {
      key: 'memorySize',
      label: 'Memory Size',
      description: 'Maximum number of experiences stored in replay buffer',
      min: 1000,
      max: 50000,
      step: 1000,
      format: (val) => val?.toLocaleString()
    }
  ];

  return (
    <div className="bg-card rounded-lg border border-border p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-secondary/10 rounded-lg">
            <Icon name="Settings" size={20} className="text-secondary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Hyperparameters</h3>
            <p className="text-sm text-muted-foreground">Fine-tune learning behavior</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={resetToDefaults}
            iconName="RotateCcw"
            iconSize={14}
          >
            Reset
          </Button>
        </div>
      </div>
      {/* Preset Configurations */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-foreground mb-3">Quick Presets</h4>
        <div className="grid grid-cols-1 gap-3">
          {presets?.map((preset) => (
            <div
              key={preset?.id}
              className={`border rounded-lg p-3 cursor-pointer transition-all duration-200 ${
                activePreset === preset?.id
                  ? 'border-primary bg-primary/10' :'border-border hover:border-primary/50'
              }`}
              onClick={() => applyPreset(preset)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="text-sm font-medium text-foreground">{preset?.name}</h5>
                  <p className="text-xs text-muted-foreground">{preset?.description}</p>
                </div>
                {activePreset === preset?.id && (
                  <Icon name="Check" size={16} className="text-primary" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Parameter Controls */}
      <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
        {parameterConfigs?.map((config) => (
          <div key={config?.key} className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-foreground">
                {config?.label}
              </label>
              <span className="text-sm font-mono text-primary">
                {config?.format(parameters?.[config?.key])}
              </span>
            </div>
            <input
              type="range"
              min={config?.min}
              max={config?.max}
              step={config?.step}
              value={parameters?.[config?.key]}
              onChange={(e) => handleParameterChange(config?.key, e?.target?.value)}
              className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer slider"
            />
            <p className="text-xs text-muted-foreground">{config?.description}</p>
          </div>
        ))}
      </div>
      {/* Advanced Settings */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-foreground mb-3">Advanced Settings</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Input
              label="Target Update Freq"
              type="number"
              value={parameters?.targetUpdateFreq}
              onChange={(e) => handleParameterChange('targetUpdateFreq', e?.target?.value)}
              className="text-sm"
            />
          </div>
          <div className="space-y-2">
            <Input
              label="Reward Scale"
              type="number"
              step="0.1"
              value={parameters?.rewardScale}
              onChange={(e) => handleParameterChange('rewardScale', e?.target?.value)}
              className="text-sm"
            />
          </div>
        </div>
      </div>
      {/* Training Control */}
      <div className="border-t border-border pt-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="text-sm font-medium text-foreground">Training Control</h4>
            <p className="text-xs text-muted-foreground">Apply changes and start training</p>
          </div>
          <div className="flex items-center space-x-2">
            {isTraining && (
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-xs text-muted-foreground">Training...</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex space-x-3">
          <Button
            variant="default"
            onClick={startTraining}
            disabled={isTraining}
            loading={isTraining}
            iconName="Play"
            iconSize={16}
            className="flex-1"
          >
            {isTraining ? 'Training...' : 'Start Training'}
          </Button>
          
          <Button
            variant="outline"
            iconName="Download"
            iconSize={16}
          >
            Export
          </Button>
        </div>
      </div>
      {/* Performance Impact Indicator */}
      <div className="mt-4 p-3 bg-muted/50 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Zap" size={14} className="text-warning" />
          <span className="text-xs font-medium text-foreground">Performance Impact</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex-1 bg-muted rounded-full h-1">
            <div 
              className="bg-warning h-1 rounded-full transition-all duration-300"
              style={{ 
                width: `${Math.min(100, (parameters?.learningRate * 10000 + parameters?.batchSize) / 2)}%` 
              }}
            ></div>
          </div>
          <span className="text-xs text-muted-foreground">
            {parameters?.learningRate > 0.005 || parameters?.batchSize > 64 ? 'High' : 'Moderate'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HyperparameterControls;