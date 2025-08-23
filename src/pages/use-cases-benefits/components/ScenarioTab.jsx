import React from 'react';
import Icon from '../../../components/AppIcon';

const ScenarioTab = ({ scenario, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-3 px-6 py-4 rounded-lg font-medium transition-all duration-200 ${
        isActive
          ? 'bg-primary text-primary-foreground shadow-md'
          : 'bg-card text-muted-foreground hover:bg-muted hover:text-foreground'
      }`}
    >
      <Icon name={scenario?.icon} size={20} />
      <span className="whitespace-nowrap">{scenario?.title}</span>
    </button>
  );
};

export default ScenarioTab;