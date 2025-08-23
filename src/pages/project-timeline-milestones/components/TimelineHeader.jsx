import React from 'react';
import Icon from '../../../components/AppIcon';

const TimelineHeader = () => {
  return (
    <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-xl p-8 mb-8">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-primary/20 rounded-lg">
            <Icon name="Calendar" size={32} className="text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground font-heading">Project Timeline & Milestones</h1>
            <p className="text-muted-foreground mt-2">Track development progress and implementation milestones</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="text-sm text-muted-foreground">Project Duration</div>
            <div className="text-lg font-semibold text-foreground">16 Weeks</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">Completion</div>
            <div className="text-lg font-semibold text-primary">87%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineHeader;