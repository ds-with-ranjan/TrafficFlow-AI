import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const MapVisualization = () => {
  const [selectedIntersection, setSelectedIntersection] = useState(null);

  const intersections = [
    {
      id: 1,
      name: "Main St & Oak Ave",
      lat: 40.7128,
      lng: -74.0060,
      status: "optimal",
      efficiency: 92,
      avgDelay: 12,
      vehicles: 145
    },
    {
      id: 2,
      name: "Broadway & 5th St",
      lat: 40.7589,
      lng: -73.9851,
      status: "warning",
      efficiency: 78,
      avgDelay: 28,
      vehicles: 203
    },
    {
      id: 3,
      name: "Park Ave & Central",
      lat: 40.7831,
      lng: -73.9712,
      status: "critical",
      efficiency: 65,
      avgDelay: 45,
      vehicles: 287
    },
    {
      id: 4,
      name: "River Rd & Mill St",
      lat: 40.7282,
      lng: -74.0776,
      status: "optimal",
      efficiency: 88,
      avgDelay: 15,
      vehicles: 98
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'optimal': return 'status-green';
      case 'warning': return 'status-yellow';
      case 'critical': return 'status-red';
      default: return 'bg-muted';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'optimal': return 'CheckCircle';
      case 'warning': return 'AlertTriangle';
      case 'critical': return 'XCircle';
      default: return 'Circle';
    }
  };

  return (
    <div className="bg-card rounded-lg p-6 card-elevation">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Traffic Signal Network</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full status-green"></div>
            <span className="text-sm text-muted-foreground">Optimal</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full status-yellow"></div>
            <span className="text-sm text-muted-foreground">Warning</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full status-red"></div>
            <span className="text-sm text-muted-foreground">Critical</span>
          </div>
        </div>
      </div>
      <div className="relative">
        {/* Map Container */}
        <div className="w-full h-96 bg-muted rounded-lg overflow-hidden relative">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            title="Traffic Signal Network Map"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=40.7128,-74.0060&z=12&output=embed"
            className="rounded-lg"
          />
          
          {/* Intersection Markers */}
          <div className="absolute inset-0 pointer-events-none">
            {intersections?.map((intersection, index) => (
              <div
                key={intersection?.id}
                className={`absolute w-4 h-4 rounded-full ${getStatusColor(intersection?.status)} pointer-events-auto cursor-pointer transform -translate-x-1/2 -translate-y-1/2 pulse-live`}
                style={{
                  left: `${20 + (index * 20)}%`,
                  top: `${30 + (index * 15)}%`
                }}
                onClick={() => setSelectedIntersection(intersection)}
              />
            ))}
          </div>
        </div>

        {/* Intersection Details Panel */}
        {selectedIntersection && (
          <div className="absolute top-4 right-4 bg-card border border-border rounded-lg p-4 shadow-modal backdrop-blur-ios max-w-xs">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-foreground">{selectedIntersection?.name}</h4>
              <button
                onClick={() => setSelectedIntersection(null)}
                className="text-muted-foreground hover:text-foreground"
              >
                <Icon name="X" size={16} />
              </button>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Status</span>
                <div className="flex items-center space-x-2">
                  <Icon 
                    name={getStatusIcon(selectedIntersection?.status)} 
                    size={16} 
                    className={selectedIntersection?.status === 'optimal' ? 'text-success' : 
                              selectedIntersection?.status === 'warning' ? 'text-warning' : 'text-error'}
                  />
                  <span className="text-sm font-medium capitalize">{selectedIntersection?.status}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Efficiency</span>
                <span className="text-sm font-medium">{selectedIntersection?.efficiency}%</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Avg Delay</span>
                <span className="text-sm font-medium">{selectedIntersection?.avgDelay}s</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Vehicles/hr</span>
                <span className="text-sm font-medium">{selectedIntersection?.vehicles}</span>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Intersection List */}
      <div className="mt-6 space-y-2">
        <h4 className="text-sm font-medium text-muted-foreground mb-3">Active Intersections</h4>
        {intersections?.map((intersection) => (
          <div
            key={intersection?.id}
            className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-smooth cursor-pointer"
            onClick={() => setSelectedIntersection(intersection)}
          >
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${getStatusColor(intersection?.status)}`} />
              <span className="text-sm font-medium text-foreground">{intersection?.name}</span>
            </div>
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <span>{intersection?.efficiency}% efficiency</span>
              <span>{intersection?.avgDelay}s delay</span>
              <Icon name="ChevronRight" size={16} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapVisualization;