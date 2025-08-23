import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import MetricsCard from './components/MetricsCard';
import TrafficChart from './components/TrafficChart';
import MapVisualization from './components/MapVisualization';
import AlertsPanel from './components/AlertsPanel';
import FilterControls from './components/FilterControls';
import PerformanceComparison from './components/PerformanceComparison';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const AnalyticsDashboard = () => {
  const [filters, setFilters] = useState({});
  const [refreshTime, setRefreshTime] = useState(new Date());
  const [isAutoRefresh, setIsAutoRefresh] = useState(true);

  // Mock data for metrics cards
  const metricsData = [
    {
      title: 'Total Intersections',
      value: '247',
      unit: '',
      change: '+12',
      changeType: 'positive',
      icon: 'MapPin',
      color: 'bg-primary'
    },
    {
      title: 'Avg Delay Reduction',
      value: '34.2',
      unit: '%',
      change: '+5.8%',
      changeType: 'positive',
      icon: 'Clock',
      color: 'bg-success'
    },
    {
      title: 'Fuel Savings',
      value: '18.7',
      unit: '%',
      change: '+2.3%',
      changeType: 'positive',
      icon: 'Fuel',
      color: 'bg-secondary'
    },
    {
      title: 'System Uptime',
      value: '99.8',
      unit: '%',
      change: '-0.1%',
      changeType: 'negative',
      icon: 'Activity',
      color: 'bg-accent'
    }
  ];

  // Mock data for traffic patterns
  const trafficPatternData = [
    { name: '6 AM', value: 45 },
    { name: '7 AM', value: 125 },
    { name: '8 AM', value: 280 },
    { name: '9 AM', value: 195 },
    { name: '10 AM', value: 150 },
    { name: '11 AM', value: 165 },
    { name: '12 PM', value: 220 },
    { name: '1 PM', value: 185 },
    { name: '2 PM', value: 160 },
    { name: '3 PM', value: 175 },
    { name: '4 PM', value: 240 },
    { name: '5 PM', value: 320 },
    { name: '6 PM', value: 285 },
    { name: '7 PM', value: 180 }
  ];

  // Mock data for weekly volume
  const weeklyVolumeData = [
    { name: 'Mon', value: 2450 },
    { name: 'Tue', value: 2680 },
    { name: 'Wed', value: 2580 },
    { name: 'Thu', value: 2720 },
    { name: 'Fri', value: 2890 },
    { name: 'Sat', value: 2100 },
    { name: 'Sun', value: 1850 }
  ];

  // Mock data for efficiency trends
  const efficiencyData = [
    { name: 'Week 1', value: 78 },
    { name: 'Week 2', value: 82 },
    { name: 'Week 3', value: 85 },
    { name: 'Week 4', value: 88 },
    { name: 'Week 5', value: 91 },
    { name: 'Week 6', value: 89 },
    { name: 'Week 7', value: 94 },
    { name: 'Week 8', value: 92 }
  ];

  useEffect(() => {
    let interval;
    if (isAutoRefresh) {
      interval = setInterval(() => {
        setRefreshTime(new Date());
      }, 30000); // Refresh every 30 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoRefresh]);

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
    // In a real app, this would trigger data refetch
    console.log('Filters updated:', newFilters);
  };

  const handleManualRefresh = () => {
    setRefreshTime(new Date());
  };

  const formatLastUpdated = () => {
    return refreshTime?.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground font-heading">
              Analytics Dashboard
            </h1>
            <p className="text-muted-foreground mt-2">
              Comprehensive traffic data and system performance metrics
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="Clock" size={16} />
              <span>Last updated: {formatLastUpdated()}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant={isAutoRefresh ? 'default' : 'outline'}
                size="sm"
                onClick={() => setIsAutoRefresh(!isAutoRefresh)}
                iconName={isAutoRefresh ? 'Pause' : 'Play'}
              >
                {isAutoRefresh ? 'Auto' : 'Manual'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleManualRefresh}
                iconName="RefreshCw"
              >
                Refresh
              </Button>
            </div>
          </div>
        </div>

        {/* Filter Controls */}
        <FilterControls onFiltersChange={handleFiltersChange} />

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metricsData?.map((metric, index) => (
            <MetricsCard key={index} {...metric} />
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <TrafficChart
            title="Daily Traffic Patterns"
            data={trafficPatternData}
            type="line"
            height={300}
          />
          <TrafficChart
            title="Weekly Volume Distribution"
            data={weeklyVolumeData}
            type="bar"
            height={300}
          />
        </div>

        {/* Map and Alerts */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
          <div className="xl:col-span-2">
            <MapVisualization />
          </div>
          <div>
            <AlertsPanel />
          </div>
        </div>

        {/* Performance Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <TrafficChart
            title="System Efficiency Trends"
            data={efficiencyData}
            type="line"
            height={300}
          />
          <div className="bg-card rounded-lg p-6 card-elevation">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Real-time Status
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full status-green pulse-live"></div>
                  <span className="font-medium text-foreground">AI System</span>
                </div>
                <span className="text-sm text-success">Operational</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-primary pulse-live"></div>
                  <span className="font-medium text-foreground">Data Processing</span>
                </div>
                <span className="text-sm text-primary">Active</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-warning/10 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full status-yellow"></div>
                  <span className="font-medium text-foreground">Maintenance Mode</span>
                </div>
                <span className="text-sm text-warning">2 Intersections</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-muted-foreground"></div>
                  <span className="font-medium text-foreground">Offline Signals</span>
                </div>
                <span className="text-sm text-muted-foreground">0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Comparison */}
        <PerformanceComparison />

        {/* Export and Reporting */}
        <div className="bg-card rounded-lg p-6 card-elevation mt-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Reports & Export
              </h3>
              <p className="text-sm text-muted-foreground">
                Generate comprehensive reports and export data
              </p>
            </div>
            <Icon name="FileText" size={24} className="text-muted-foreground" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-border rounded-lg hover:bg-muted/30 transition-smooth">
              <div className="flex items-center space-x-3 mb-2">
                <Icon name="BarChart3" size={20} className="text-primary" />
                <span className="font-medium text-foreground">Executive Summary</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                High-level performance overview for stakeholders
              </p>
              <Button variant="outline" size="sm" fullWidth>
                Generate Report
              </Button>
            </div>
            
            <div className="p-4 border border-border rounded-lg hover:bg-muted/30 transition-smooth">
              <div className="flex items-center space-x-3 mb-2">
                <Icon name="Settings" size={20} className="text-secondary" />
                <span className="font-medium text-foreground">Technical Analysis</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Detailed system performance and optimization data
              </p>
              <Button variant="outline" size="sm" fullWidth>
                Generate Report
              </Button>
            </div>
            
            <div className="p-4 border border-border rounded-lg hover:bg-muted/30 transition-smooth">
              <div className="flex items-center space-x-3 mb-2">
                <Icon name="Download" size={20} className="text-accent" />
                <span className="font-medium text-foreground">Raw Data Export</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Export filtered data in CSV, JSON, or Excel format
              </p>
              <Button variant="outline" size="sm" fullWidth>
                Export Data
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AnalyticsDashboard;