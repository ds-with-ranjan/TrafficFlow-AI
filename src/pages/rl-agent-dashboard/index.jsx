import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import TrainingMetrics from './components/TrainingMetrics';
import DecisionVisualization from './components/DecisionVisualization';
import HyperparameterControls from './components/HyperparameterControls';
import AlgorithmComparison from './components/AlgorithmComparison';
import NetworkArchitecture from './components/NetworkArchitecture';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const RLAgentDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [refreshInterval, setRefreshInterval] = useState(5000);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const tabs = [
    {
      id: 'overview',
      name: 'Overview',
      icon: 'LayoutDashboard',
      description: 'Main dashboard with key metrics and decision process'
    },
    {
      id: 'training',
      name: 'Training',
      icon: 'TrendingUp',
      description: 'Training metrics and learning progress'
    },
    {
      id: 'architecture',
      name: 'Architecture',
      icon: 'Network',
      description: 'Neural network structure and configuration'
    },
    {
      id: 'comparison',
      name: 'Comparison',
      icon: 'GitCompare',
      description: 'Algorithm performance comparison'
    },
    {
      id: 'parameters',
      name: 'Parameters',
      icon: 'Settings',
      description: 'Hyperparameter tuning and controls'
    }
  ];

  const systemStatus = {
    agent: 'active',
    training: 'running',
    environment: 'connected',
    performance: 'optimal'
  };

  const quickStats = [
    {
      label: 'Current Episode',
      value: '1,247',
      change: '+12',
      trend: 'up',
      icon: 'Play'
    },
    {
      label: 'Average Reward',
      value: '+85.3',
      change: '+5.2%',
      trend: 'up',
      icon: 'Award'
    },
    {
      label: 'Convergence Rate',
      value: '89.4%',
      change: '+2.1%',
      trend: 'up',
      icon: 'Target'
    },
    {
      label: 'Learning Rate',
      value: '0.001',
      change: 'stable',
      trend: 'stable',
      icon: 'Brain'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, refreshInterval);

    return () => clearInterval(interval);
  }, [refreshInterval]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': case'running': case'connected': case'optimal':
        return 'text-primary bg-primary/10';
      case 'warning':
        return 'text-warning bg-warning/10';
      case 'error':
        return 'text-accent bg-accent/10';
      default:
        return 'text-muted-foreground bg-muted/10';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return 'TrendingUp';
      case 'down': return 'TrendingDown';
      default: return 'Minus';
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'up': return 'text-success';
      case 'down': return 'text-accent';
      default: return 'text-muted-foreground';
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
            <div className="lg:col-span-2">
              <DecisionVisualization />
            </div>
            <div>
              <TrainingMetrics />
            </div>
          </div>
        );
      case 'training':
        return (
          <div className="h-full">
            <TrainingMetrics />
          </div>
        );
      case 'architecture':
        return (
          <div className="h-full">
            <NetworkArchitecture />
          </div>
        );
      case 'comparison':
        return (
          <div className="h-full">
            <AlgorithmComparison />
          </div>
        );
      case 'parameters':
        return (
          <div className="h-full">
            <HyperparameterControls />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>RL Agent Dashboard - TrafficFlow AI</title>
        <meta name="description" content="Comprehensive reinforcement learning agent dashboard with real-time training metrics, decision visualization, and algorithm comparison for traffic signal optimization." />
        <meta name="keywords" content="reinforcement learning, AI agent, traffic control, deep learning, neural networks, algorithm comparison" />
      </Helmet>
      <div className={`min-h-screen bg-background ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}>
        {!isFullscreen && <Header />}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <div className="mb-4 sm:mb-0">
              <h1 className="text-3xl font-bold text-foreground font-heading">RL Agent Dashboard</h1>
              <p className="text-muted-foreground mt-2">
                Comprehensive insights into reinforcement learning algorithms driving traffic signal decisions
              </p>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Clock" size={16} />
                <span>Updated {lastUpdated?.toLocaleTimeString()}</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleFullscreen}
                iconName={isFullscreen ? "Minimize2" : "Maximize2"}
                iconSize={16}
              >
                {isFullscreen ? 'Exit' : 'Fullscreen'}
              </Button>
            </div>
          </div>

          {/* System Status */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {Object.entries(systemStatus)?.map(([key, status]) => (
              <div key={key} className="bg-card rounded-lg border border-border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground capitalize">{key}</p>
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-1 ${getStatusColor(status)}`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-current mr-1"></div>
                      <span className="capitalize">{status}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {quickStats?.map((stat, index) => (
              <div key={index} className="bg-card rounded-lg border border-border p-4">
                <div className="flex items-center justify-between mb-2">
                  <Icon name={stat?.icon} size={20} className="text-primary" />
                  <Icon 
                    name={getTrendIcon(stat?.trend)} 
                    size={16} 
                    className={getTrendColor(stat?.trend)} 
                  />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stat?.value}</p>
                  <p className="text-xs text-muted-foreground">{stat?.label}</p>
                  <p className={`text-xs font-medium mt-1 ${getTrendColor(stat?.trend)}`}>
                    {stat?.change}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Tabs */}
          <div className="mb-6">
            <div className="border-b border-border">
              <nav className="-mb-px flex space-x-8 overflow-x-auto">
                {tabs?.map((tab) => (
                  <button
                    key={tab?.id}
                    onClick={() => setActiveTab(tab?.id)}
                    className={`group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                      activeTab === tab?.id
                        ? 'border-primary text-primary' :'border-transparent text-muted-foreground hover:text-foreground hover:border-muted'
                    }`}
                    title={tab?.description}
                  >
                    <Icon 
                      name={tab?.icon} 
                      size={16} 
                      className={`mr-2 ${
                        activeTab === tab?.id ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
                      }`} 
                    />
                    {tab?.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Tab Content */}
          <div className={`${isFullscreen ? 'h-[calc(100vh-200px)]' : 'min-h-[600px]'}`}>
            {renderTabContent()}
          </div>
        </div>
      </div>
    </>
  );
};

export default RLAgentDashboard;