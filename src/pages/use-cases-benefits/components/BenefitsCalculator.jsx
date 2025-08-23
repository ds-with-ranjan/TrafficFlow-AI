import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const BenefitsCalculator = () => {
  const [inputs, setInputs] = useState({
    intersections: '',
    dailyVehicles: '',
    averageDelay: '',
    fuelCost: '3.50'
  });
  
  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field, value) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const calculateBenefits = async () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const intersections = parseInt(inputs?.intersections) || 0;
    const dailyVehicles = parseInt(inputs?.dailyVehicles) || 0;
    const averageDelay = parseFloat(inputs?.averageDelay) || 0;
    const fuelCost = parseFloat(inputs?.fuelCost) || 3.50;

    // Mock calculation logic
    const delayReduction = 35; // 35% average reduction
    const throughputIncrease = 28; // 28% increase
    const fuelSavings = 22; // 22% fuel savings
    
    const dailySavings = (dailyVehicles * averageDelay * delayReduction / 100 * fuelCost / 60);
    const annualSavings = dailySavings * 365;
    const co2Reduction = dailyVehicles * 0.404 * fuelSavings / 100; // kg CO2 per day
    
    setResults({
      delayReduction,
      throughputIncrease,
      fuelSavings,
      dailySavings: dailySavings?.toFixed(2),
      annualSavings: annualSavings?.toFixed(0),
      co2Reduction: co2Reduction?.toFixed(1),
      vehiclesProcessed: Math.round(dailyVehicles * (1 + throughputIncrease / 100))
    });
    
    setIsCalculating(false);
  };

  const ResultCard = ({ icon, title, value, subtitle, color = "primary" }) => (
    <div className="bg-card border border-border rounded-lg p-4 text-center">
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-${color}/10 mb-3`}>
        <Icon name={icon} size={24} className={`text-${color}`} />
      </div>
      <div className={`text-2xl font-bold text-${color} mb-1`}>{value}</div>
      <div className="text-sm font-medium text-foreground mb-1">{title}</div>
      <div className="text-xs text-muted-foreground">{subtitle}</div>
    </div>
  );

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Icon name="Calculator" size={24} className="text-primary" />
        <h3 className="text-xl font-bold text-foreground">Benefits Calculator</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Input Form */}
        <div className="space-y-4">
          <h4 className="font-semibold text-foreground mb-4">Enter Your City's Data</h4>
          
          <Input
            label="Number of Intersections"
            type="number"
            placeholder="e.g., 50"
            value={inputs?.intersections}
            onChange={(e) => handleInputChange('intersections', e?.target?.value)}
            description="Total traffic intersections to optimize"
          />
          
          <Input
            label="Daily Vehicles (per intersection)"
            type="number"
            placeholder="e.g., 15000"
            value={inputs?.dailyVehicles}
            onChange={(e) => handleInputChange('dailyVehicles', e?.target?.value)}
            description="Average vehicles passing through daily"
          />
          
          <Input
            label="Average Delay (minutes)"
            type="number"
            step="0.1"
            placeholder="e.g., 2.5"
            value={inputs?.averageDelay}
            onChange={(e) => handleInputChange('averageDelay', e?.target?.value)}
            description="Current average wait time per vehicle"
          />
          
          <Input
            label="Fuel Cost ($/gallon)"
            type="number"
            step="0.01"
            placeholder="e.g., 3.50"
            value={inputs?.fuelCost}
            onChange={(e) => handleInputChange('fuelCost', e?.target?.value)}
            description="Current local fuel price"
          />
          
          <Button
            onClick={calculateBenefits}
            loading={isCalculating}
            disabled={!inputs?.intersections || !inputs?.dailyVehicles || !inputs?.averageDelay}
            iconName="Calculator"
            className="w-full"
          >
            {isCalculating ? 'Calculating...' : 'Calculate Benefits'}
          </Button>
        </div>

        {/* Results Display */}
        <div className="space-y-4">
          <h4 className="font-semibold text-foreground mb-4">Projected Improvements</h4>
          
          {results ? (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <ResultCard
                  icon="Clock"
                  title="Delay Reduction"
                  value={`${results?.delayReduction}%`}
                  subtitle="Less waiting time"
                  color="primary"
                />
                <ResultCard
                  icon="TrendingUp"
                  title="Throughput Increase"
                  value={`${results?.throughputIncrease}%`}
                  subtitle="More vehicles processed"
                  color="success"
                />
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <ResultCard
                  icon="DollarSign"
                  title="Annual Savings"
                  value={`$${results?.annualSavings}`}
                  subtitle={`$${results?.dailySavings} per day`}
                  color="secondary"
                />
                <ResultCard
                  icon="Leaf"
                  title="CO₂ Reduction"
                  value={`${results?.co2Reduction} kg`}
                  subtitle="Daily environmental impact"
                  color="success"
                />
              </div>
              
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <div className="text-lg font-semibold text-foreground mb-1">
                  {results?.vehiclesProcessed?.toLocaleString()} vehicles
                </div>
                <div className="text-sm text-muted-foreground">
                  Daily processing capacity with AI optimization
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Icon name="BarChart3" size={48} className="text-muted-foreground/50 mb-4" />
              <p className="text-muted-foreground">
                Enter your city's traffic data to see projected benefits
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BenefitsCalculator;