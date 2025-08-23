import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Icon from '../../../components/AppIcon';

const ResourceAllocation = () => {
  const budgetData = [
    { phase: 'Research', allocated: 15000, spent: 14500, remaining: 500 },
    { phase: 'Design', allocated: 25000, spent: 24200, remaining: 800 },
    { phase: 'Development', allocated: 80000, spent: 58000, remaining: 22000 },
    { phase: 'Testing', allocated: 20000, spent: 5000, remaining: 15000 },
    { phase: 'Deployment', allocated: 10000, spent: 0, remaining: 10000 }
  ];

  const teamAllocation = [
    { name: 'Frontend Developers', value: 25, color: '#00CC66' },
    { name: 'Backend Developers', value: 30, color: '#FFD700' },
    { name: 'ML Engineers', value: 20, color: '#FF4444' },
    { name: 'QA Engineers', value: 15, color: '#718096' },
    { name: 'DevOps', value: 10, color: '#E53E3E' }
  ];

  const resourceMetrics = [
    {
      title: "Total Budget",
      value: "$150,000",
      spent: "$101,700",
      percentage: 68,
      icon: "DollarSign",
      color: "text-primary"
    },
    {
      title: "Team Members",
      value: "12 People",
      active: "10 Active",
      percentage: 83,
      icon: "Users",
      color: "text-secondary"
    },
    {
      title: "Time Utilization",
      value: "16 Weeks",
      completed: "10 Weeks",
      percentage: 63,
      icon: "Clock",
      color: "text-accent"
    },
    {
      title: "Resource Efficiency",
      value: "92%",
      target: "90% Target",
      percentage: 92,
      icon: "TrendingUp",
      color: "text-success"
    }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
          <p className="text-sm font-medium text-foreground">{label}</p>
          {payload?.map((entry, index) => (
            <p key={index} className="text-sm text-muted-foreground">
              {entry?.name}: ${entry?.value?.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Resource Metrics */}
      <div className="bg-card rounded-xl p-6 card-elevation">
        <h2 className="text-xl font-semibold text-foreground mb-6 font-heading">Resource Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resourceMetrics?.map((metric, index) => (
            <div key={index} className="bg-background rounded-lg border border-border p-4">
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 rounded-lg bg-muted ${metric?.color}`}>
                  <Icon name={metric?.icon} size={20} />
                </div>
                <span className="text-sm font-medium text-foreground">{metric?.percentage}%</span>
              </div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">{metric?.title}</h3>
              <div className="space-y-1">
                <p className="text-lg font-bold text-foreground">{metric?.value}</p>
                <p className="text-xs text-muted-foreground">
                  {metric?.spent || metric?.active || metric?.completed || metric?.target}
                </p>
              </div>
              <div className="mt-3">
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${
                      metric?.percentage >= 90 ? 'bg-primary' :
                      metric?.percentage >= 70 ? 'bg-secondary' : 'bg-accent'
                    }`}
                    style={{ width: `${metric?.percentage}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Budget Allocation Chart */}
        <div className="bg-card rounded-xl p-6 card-elevation">
          <h3 className="text-lg font-semibold text-foreground mb-4 font-heading">Budget Allocation by Phase</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={budgetData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis 
                  dataKey="phase" 
                  stroke="var(--color-muted-foreground)"
                  fontSize={12}
                />
                <YAxis 
                  stroke="var(--color-muted-foreground)"
                  fontSize={12}
                  tickFormatter={(value) => `$${value/1000}k`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="allocated" fill="var(--color-primary)" name="Allocated" radius={[2, 2, 0, 0]} />
                <Bar dataKey="spent" fill="var(--color-secondary)" name="Spent" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Team Allocation Pie Chart */}
        <div className="bg-card rounded-xl p-6 card-elevation">
          <h3 className="text-lg font-semibold text-foreground mb-4 font-heading">Team Allocation</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={teamAllocation}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {teamAllocation?.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry?.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'Allocation']}
                  contentStyle={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {teamAllocation?.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item?.color }}
                  />
                  <span className="text-sm text-foreground">{item?.name}</span>
                </div>
                <span className="text-sm font-medium text-muted-foreground">{item?.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Resource Utilization Table */}
      <div className="bg-card rounded-xl p-6 card-elevation">
        <h3 className="text-lg font-semibold text-foreground mb-4 font-heading">Detailed Budget Breakdown</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Phase</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Allocated</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Spent</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Remaining</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Utilization</th>
              </tr>
            </thead>
            <tbody>
              {budgetData?.map((item, index) => {
                const utilization = ((item?.spent / item?.allocated) * 100)?.toFixed(1);
                return (
                  <tr key={index} className="border-b border-border hover:bg-muted/50">
                    <td className="py-3 px-4 text-sm font-medium text-foreground">{item?.phase}</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground text-right">
                      ${item?.allocated?.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-sm text-foreground text-right">
                      ${item?.spent?.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-sm text-muted-foreground text-right">
                      ${item?.remaining?.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        parseFloat(utilization) >= 90 ? 'bg-primary/10 text-primary' :
                        parseFloat(utilization) >= 70 ? 'bg-secondary/10 text-secondary': 'bg-muted text-muted-foreground'
                      }`}>
                        {utilization}%
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ResourceAllocation;