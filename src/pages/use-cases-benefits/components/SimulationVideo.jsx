import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SimulationVideo = ({ scenario }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showHotspot, setShowHotspot] = useState(null);

  const hotspots = [
    {
      id: 1,
      x: '25%',
      y: '30%',
      title: 'AI Decision Point',
      description: 'Real-time traffic density analysis triggers signal optimization'
    },
    {
      id: 2,
      x: '65%',
      y: '45%',
      title: 'Flow Optimization',
      description: 'Machine learning adjusts timing based on vehicle queue length'
    },
    {
      id: 3,
      x: '45%',
      y: '70%',
      title: 'Predictive Control',
      description: 'System anticipates traffic patterns using historical data'
    }
  ];

  return (
    <div className="relative bg-gray-900 rounded-xl overflow-hidden aspect-video">
      {/* Video Thumbnail */}
      <Image
        src={scenario?.videoThumbnail}
        alt={`${scenario?.title} simulation`}
        className="w-full h-full object-cover"
      />
      {/* Play Button Overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <button
            onClick={() => setIsPlaying(true)}
            className="flex items-center justify-center w-20 h-20 bg-primary/90 hover:bg-primary rounded-full transition-all duration-200 hover:scale-110"
          >
            <Icon name="Play" size={32} className="text-white ml-1" />
          </button>
        </div>
      )}
      {/* Interactive Hotspots */}
      {isPlaying && hotspots?.map((hotspot) => (
        <div
          key={hotspot?.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          style={{ left: hotspot?.x, top: hotspot?.y }}
          onMouseEnter={() => setShowHotspot(hotspot?.id)}
          onMouseLeave={() => setShowHotspot(null)}
        >
          <div className="w-4 h-4 bg-secondary rounded-full animate-pulse border-2 border-white shadow-lg">
            <div className="w-full h-full bg-secondary rounded-full animate-ping"></div>
          </div>
          
          {/* Hotspot Tooltip */}
          {showHotspot === hotspot?.id && (
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded-lg p-3 shadow-modal min-w-48 z-10">
              <h4 className="font-semibold text-sm text-foreground mb-1">{hotspot?.title}</h4>
              <p className="text-xs text-muted-foreground">{hotspot?.description}</p>
            </div>
          )}
        </div>
      ))}
      {/* Video Controls */}
      {isPlaying && (
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/50 rounded-lg px-4 py-2">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsPlaying(false)}
              className="text-white hover:text-secondary transition-colors"
            >
              <Icon name="Pause" size={20} />
            </button>
            <span className="text-white text-sm">2:34 / 4:12</span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="text-white hover:text-secondary transition-colors">
              <Icon name="Volume2" size={18} />
            </button>
            <button className="text-white hover:text-secondary transition-colors">
              <Icon name="Maximize" size={18} />
            </button>
          </div>
        </div>
      )}
      {/* Scenario Label */}
      <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg px-3 py-1">
        <span className="text-sm font-medium text-foreground">{scenario?.title}</span>
      </div>
    </div>
  );
};

export default SimulationVideo;