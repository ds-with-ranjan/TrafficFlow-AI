import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';

const FilterControls = ({ onFiltersChange }) => {
  const [filters, setFilters] = useState({
    dateRange: '7d',
    intersectionType: 'all',
    trafficVolume: 'all',
    weatherCondition: 'all',
    timeOfDay: 'all'
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const dateRangeOptions = [
    { value: '1d', label: 'Last 24 Hours' },
    { value: '7d', label: 'Last 7 Days' },
    { value: '30d', label: 'Last 30 Days' },
    { value: '90d', label: 'Last 3 Months' },
    { value: 'custom', label: 'Custom Range' }
  ];

  const intersectionTypeOptions = [
    { value: 'all', label: 'All Types' },
    { value: 'major', label: 'Major Intersections' },
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'highway', label: 'Highway Ramps' }
  ];

  const trafficVolumeOptions = [
    { value: 'all', label: 'All Volumes' },
    { value: 'low', label: 'Low (0-100 vehicles/hr)' },
    { value: 'medium', label: 'Medium (100-300 vehicles/hr)' },
    { value: 'high', label: 'High (300+ vehicles/hr)' }
  ];

  const weatherOptions = [
    { value: 'all', label: 'All Conditions' },
    { value: 'clear', label: 'Clear' },
    { value: 'rain', label: 'Rain' },
    { value: 'snow', label: 'Snow' },
    { value: 'fog', label: 'Fog' }
  ];

  const timeOfDayOptions = [
    { value: 'all', label: 'All Hours' },
    { value: 'morning', label: 'Morning Rush (7-9 AM)' },
    { value: 'midday', label: 'Midday (9 AM-4 PM)' },
    { value: 'evening', label: 'Evening Rush (4-7 PM)' },
    { value: 'night', label: 'Night (7 PM-7 AM)' }
  ];

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange?.(newFilters);
  };

  const resetFilters = () => {
    const defaultFilters = {
      dateRange: '7d',
      intersectionType: 'all',
      trafficVolume: 'all',
      weatherCondition: 'all',
      timeOfDay: 'all'
    };
    setFilters(defaultFilters);
    onFiltersChange?.(defaultFilters);
  };

  const getActiveFiltersCount = () => {
    return Object.values(filters)?.filter(value => value !== 'all' && value !== '7d')?.length;
  };

  return (
    <div className="bg-card rounded-lg p-4 card-elevation mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <h3 className="text-lg font-semibold text-foreground">Data Filters</h3>
          {getActiveFiltersCount() > 0 && (
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
              {getActiveFiltersCount()} active
            </span>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={resetFilters}
            iconName="RotateCcw"
            disabled={getActiveFiltersCount() === 0}
          >
            Reset
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            iconName={isExpanded ? 'ChevronUp' : 'ChevronDown'}
          >
            {isExpanded ? 'Collapse' : 'Expand'}
          </Button>
        </div>
      </div>
      {/* Quick Filters - Always Visible */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <Select
          label="Date Range"
          options={dateRangeOptions}
          value={filters?.dateRange}
          onChange={(value) => handleFilterChange('dateRange', value)}
        />
        <Select
          label="Intersection Type"
          options={intersectionTypeOptions}
          value={filters?.intersectionType}
          onChange={(value) => handleFilterChange('intersectionType', value)}
        />
        <Select
          label="Traffic Volume"
          options={trafficVolumeOptions}
          value={filters?.trafficVolume}
          onChange={(value) => handleFilterChange('trafficVolume', value)}
        />
      </div>
      {/* Advanced Filters - Expandable */}
      {isExpanded && (
        <div className="space-y-4 pt-4 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              label="Weather Condition"
              options={weatherOptions}
              value={filters?.weatherCondition}
              onChange={(value) => handleFilterChange('weatherCondition', value)}
            />
            <Select
              label="Time of Day"
              options={timeOfDayOptions}
              value={filters?.timeOfDay}
              onChange={(value) => handleFilterChange('timeOfDay', value)}
            />
          </div>

          {/* Custom Date Range */}
          {filters?.dateRange === 'custom' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
              <Input
                label="Start Date"
                type="date"
                placeholder="Select start date"
              />
              <Input
                label="End Date"
                type="date"
                placeholder="Select end date"
              />
            </div>
          )}

          {/* Quick Presets */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-muted-foreground">Quick Presets</h4>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  handleFilterChange('dateRange', '1d');
                  handleFilterChange('timeOfDay', 'morning');
                }}
              >
                Morning Rush Today
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  handleFilterChange('dateRange', '7d');
                  handleFilterChange('trafficVolume', 'high');
                }}
              >
                High Traffic Week
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  handleFilterChange('weatherCondition', 'rain');
                  handleFilterChange('dateRange', '30d');
                }}
              >
                Rainy Days Analysis
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  handleFilterChange('intersectionType', 'major');
                  handleFilterChange('trafficVolume', 'high');
                }}
              >
                Major Intersections
              </Button>
            </div>
          </div>
        </div>
      )}
      {/* Export Options */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Icon name="Database" size={16} />
          <span>Showing filtered data from {filters?.dateRange === '1d' ? '24 hours' : filters?.dateRange === '7d' ? '7 days' : filters?.dateRange === '30d' ? '30 days' : '3 months'}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" iconName="Download">
            Export CSV
          </Button>
          <Button variant="ghost" size="sm" iconName="FileText">
            Generate Report
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterControls;