import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AlertsPanel = () => {
  const [filter, setFilter] = useState('all');

  const alerts = [
    {
      id: 1,
      type: 'critical',
      title: 'Signal Malfunction Detected',
      description: 'Traffic light at Broadway & 5th St showing irregular timing patterns',
      timestamp: new Date(Date.now() - 300000),
      location: 'Broadway & 5th St',
      resolved: false
    },
    {
      id: 2,
      type: 'warning',
      title: 'High Traffic Volume',
      description: 'Unusual traffic congestion detected during off-peak hours',
      timestamp: new Date(Date.now() - 900000),
      location: 'Main St & Oak Ave',
      resolved: false
    },
    {
      id: 3,
      type: 'info',
      title: 'Maintenance Scheduled',
      description: 'Routine maintenance planned for signal controllers',
      timestamp: new Date(Date.now() - 1800000),
      location: 'Park Ave & Central',
      resolved: false
    },
    {
      id: 4,
      type: 'success',
      title: 'Optimization Complete',
      description: 'AI algorithm successfully optimized timing for morning rush',
      timestamp: new Date(Date.now() - 3600000),
      location: 'River Rd & Mill St',
      resolved: true
    },
    {
      id: 5,
      type: 'warning',
      title: 'Weather Impact Alert',
      description: 'Heavy rain affecting visibility sensors at multiple intersections',
      timestamp: new Date(Date.now() - 7200000),
      location: 'Multiple Locations',
      resolved: false
    }
  ];

  const getAlertIcon = (type) => {
    switch (type) {
      case 'critical': return 'AlertCircle';
      case 'warning': return 'AlertTriangle';
      case 'info': return 'Info';
      case 'success': return 'CheckCircle';
      default: return 'Bell';
    }
  };

  const getAlertColor = (type) => {
    switch (type) {
      case 'critical': return 'text-error';
      case 'warning': return 'text-warning';
      case 'info': return 'text-primary';
      case 'success': return 'text-success';
      default: return 'text-muted-foreground';
    }
  };

  const getAlertBg = (type) => {
    switch (type) {
      case 'critical': return 'bg-error/10 border-error/20';
      case 'warning': return 'bg-warning/10 border-warning/20';
      case 'info': return 'bg-primary/10 border-primary/20';
      case 'success': return 'bg-success/10 border-success/20';
      default: return 'bg-muted/50 border-border';
    }
  };

  const formatTimestamp = (timestamp) => {
    const now = new Date();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    
    if (minutes < 60) {
      return `${minutes}m ago`;
    } else if (hours < 24) {
      return `${hours}h ago`;
    } else {
      return timestamp?.toLocaleDateString();
    }
  };

  const filteredAlerts = alerts?.filter(alert => {
    if (filter === 'all') return true;
    if (filter === 'unresolved') return !alert?.resolved;
    return alert?.type === filter;
  });

  const filterOptions = [
    { value: 'all', label: 'All Alerts', count: alerts?.length },
    { value: 'unresolved', label: 'Unresolved', count: alerts?.filter(a => !a?.resolved)?.length },
    { value: 'critical', label: 'Critical', count: alerts?.filter(a => a?.type === 'critical')?.length },
    { value: 'warning', label: 'Warning', count: alerts?.filter(a => a?.type === 'warning')?.length }
  ];

  return (
    <div className="bg-card rounded-lg p-6 card-elevation">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">System Alerts</h3>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" iconName="Settings">
            Configure
          </Button>
          <Button variant="ghost" size="sm" iconName="RefreshCw">
            Refresh
          </Button>
        </div>
      </div>
      {/* Filter Tabs */}
      <div className="flex items-center space-x-1 mb-4 bg-muted/50 p-1 rounded-lg">
        {filterOptions?.map((option) => (
          <button
            key={option?.value}
            onClick={() => setFilter(option?.value)}
            className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-smooth ${
              filter === option?.value
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
            }`}
          >
            <span>{option?.label}</span>
            <span className={`px-1.5 py-0.5 rounded-full text-xs ${
              filter === option?.value ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'
            }`}>
              {option?.count}
            </span>
          </button>
        ))}
      </div>
      {/* Alerts List */}
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {filteredAlerts?.length === 0 ? (
          <div className="text-center py-8">
            <Icon name="CheckCircle" size={48} className="text-success mx-auto mb-3" />
            <p className="text-muted-foreground">No alerts matching current filter</p>
          </div>
        ) : (
          filteredAlerts?.map((alert) => (
            <div
              key={alert?.id}
              className={`p-4 rounded-lg border transition-smooth hover:shadow-sm ${getAlertBg(alert?.type)} ${
                alert?.resolved ? 'opacity-60' : ''
              }`}
            >
              <div className="flex items-start space-x-3">
                <Icon 
                  name={getAlertIcon(alert?.type)} 
                  size={20} 
                  className={`mt-0.5 ${getAlertColor(alert?.type)}`} 
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-medium text-foreground truncate">
                      {alert?.title}
                    </h4>
                    <div className="flex items-center space-x-2 ml-2">
                      <span className="text-xs text-muted-foreground">
                        {formatTimestamp(alert?.timestamp)}
                      </span>
                      {alert?.resolved && (
                        <span className="px-2 py-1 bg-success/10 text-success text-xs rounded-full">
                          Resolved
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {alert?.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Icon name="MapPin" size={12} />
                      <span>{alert?.location}</span>
                    </div>
                    {!alert?.resolved && (
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="xs">
                          Dismiss
                        </Button>
                        <Button variant="outline" size="xs">
                          View Details
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {/* Quick Actions */}
      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            {filteredAlerts?.filter(a => !a?.resolved)?.length} unresolved alerts
          </span>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" iconName="Archive">
              Archive All
            </Button>
            <Button variant="outline" size="sm" iconName="ExternalLink">
              View All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertsPanel;