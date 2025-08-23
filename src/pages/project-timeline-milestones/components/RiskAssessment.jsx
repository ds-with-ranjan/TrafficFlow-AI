import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RiskAssessment = () => {
  const [selectedRisk, setSelectedRisk] = useState(null);

  const risks = [
    {
      id: 1,
      title: "Algorithm Performance Degradation",
      category: "Technical",
      probability: "Medium",
      impact: "High",
      severity: "High",
      status: "Active",
      description: "The reinforcement learning algorithm may not perform optimally in real-world traffic scenarios due to complexity and variability.",
      causes: [
        "Insufficient training data diversity",
        "Complex traffic patterns not covered in simulation",
        "Hardware limitations affecting processing speed"
      ],
      consequences: [
        "Reduced traffic flow optimization",
        "Increased wait times at intersections",
        "Potential system reliability issues"
      ],
      mitigation: [
        "Implement comprehensive testing with diverse traffic scenarios",
        "Develop fallback algorithms for edge cases",
        "Continuous monitoring and algorithm refinement"
      ],
      owner: "ML Engineering Team",
      dueDate: "March 30, 2024",
      progress: 65
    },
    {
      id: 2,
      title: "Integration Complexity",
      category: "Technical",
      probability: "High",
      impact: "Medium",
      severity: "Medium",
      status: "Active",
      description: "Integrating multiple system components (CV, RL, Dashboard) may present unexpected compatibility issues.",
      causes: [
        "Different technology stacks and frameworks",
        "API versioning conflicts",
        "Data format inconsistencies"
      ],
      consequences: [
        "Development delays",
        "Increased debugging time",
        "Potential system instability"
      ],
      mitigation: [
        "Establish clear API contracts early",
        "Implement comprehensive integration testing",
        "Use containerization for consistent environments"
      ],
      owner: "Integration Team",
      dueDate: "March 25, 2024",
      progress: 80
    },
    {
      id: 3,
      title: "Scalability Limitations",
      category: "Infrastructure",
      probability: "Medium",
      impact: "High",
      severity: "High",
      status: "Monitoring",
      description: "System may not handle increased traffic load or multiple intersection deployments effectively.",
      causes: [
        "Database performance bottlenecks",
        "Insufficient server resources",
        "Network bandwidth limitations"
      ],
      consequences: [
        "System slowdown during peak hours",
        "Failed deployments to new locations",
        "Poor user experience"
      ],
      mitigation: [
        "Implement horizontal scaling architecture",
        "Conduct load testing with realistic scenarios",
        "Optimize database queries and caching"
      ],
      owner: "DevOps Team",
      dueDate: "April 10, 2024",
      progress: 40
    },
    {
      id: 4,
      title: "Data Privacy Compliance",
      category: "Legal",
      probability: "Low",
      impact: "Critical",
      severity: "Medium",
      status: "Resolved",
      description: "Potential non-compliance with data protection regulations when processing traffic camera data.",
      causes: [
        "Unclear data retention policies",
        "Insufficient anonymization techniques",
        "Lack of user consent mechanisms"
      ],
      consequences: [
        "Legal penalties and fines",
        "Project suspension",
        "Reputation damage"
      ],
      mitigation: [
        "Implement data anonymization protocols",
        "Establish clear data retention policies",
        "Regular compliance audits"
      ],
      owner: "Legal & Compliance Team",
      dueDate: "February 15, 2024",
      progress: 100
    },
    {
      id: 5,
      title: "Team Resource Constraints",
      category: "Resource",
      probability: "Medium",
      impact: "Medium",
      severity: "Medium",
      status: "Active",
      description: "Limited availability of specialized ML engineers and potential team member turnover.",
      causes: [
        "High demand for ML talent in market",
        "Project timeline pressures",
        "Budget constraints for additional hiring"
      ],
      consequences: [
        "Development delays",
        "Knowledge transfer issues",
        "Reduced code quality"
      ],
      mitigation: [
        "Cross-training team members",
        "Comprehensive documentation practices",
        "Flexible resource allocation"
      ],
      owner: "Project Manager",
      dueDate: "Ongoing",
      progress: 55
    },
    {
      id: 6,
      title: "Hardware Compatibility Issues",
      category: "Technical",
      probability: "Low",
      impact: "Medium",
      severity: "Low",
      status: "Monitoring",
      description: "Potential compatibility issues with existing traffic infrastructure and camera systems.",
      causes: [
        "Legacy hardware limitations",
        "Different camera specifications",
        "Network connectivity issues"
      ],
      consequences: [
        "Deployment delays",
        "Additional hardware costs",
        "Reduced system coverage"
      ],
      mitigation: [
        "Conduct hardware compatibility assessment",
        "Develop adapter interfaces for legacy systems",
        "Plan phased deployment approach"
      ],
      owner: "Hardware Team",
      dueDate: "April 5, 2024",
      progress: 30
    }
  ];

  const getSeverityColor = (severity) => {
    switch (severity?.toLowerCase()) {
      case 'critical': return 'bg-accent text-accent-foreground';
      case 'high': return 'bg-warning text-warning-foreground';
      case 'medium': return 'bg-secondary text-secondary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'resolved': return 'bg-primary text-primary-foreground';
      case 'active': return 'bg-accent text-accent-foreground';
      case 'monitoring': return 'bg-secondary text-secondary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category?.toLowerCase()) {
      case 'technical': return 'Code';
      case 'infrastructure': return 'Server';
      case 'legal': return 'Scale';
      case 'resource': return 'Users';
      default: return 'AlertTriangle';
    }
  };

  const riskSummary = {
    total: risks?.length,
    active: risks?.filter(r => r?.status === 'Active')?.length,
    resolved: risks?.filter(r => r?.status === 'Resolved')?.length,
    monitoring: risks?.filter(r => r?.status === 'Monitoring')?.length,
    high: risks?.filter(r => r?.severity === 'High')?.length,
    medium: risks?.filter(r => r?.severity === 'Medium')?.length,
    low: risks?.filter(r => r?.severity === 'Low')?.length
  };

  return (
    <div className="space-y-6">
      {/* Risk Summary */}
      <div className="bg-card rounded-xl p-6 card-elevation">
        <h2 className="text-xl font-semibold text-foreground mb-6 font-heading">Risk Assessment Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          <div className="bg-background rounded-lg border border-border p-4 text-center">
            <div className="text-2xl font-bold text-foreground">{riskSummary?.total}</div>
            <div className="text-sm text-muted-foreground">Total Risks</div>
          </div>
          <div className="bg-background rounded-lg border border-border p-4 text-center">
            <div className="text-2xl font-bold text-accent">{riskSummary?.active}</div>
            <div className="text-sm text-muted-foreground">Active</div>
          </div>
          <div className="bg-background rounded-lg border border-border p-4 text-center">
            <div className="text-2xl font-bold text-primary">{riskSummary?.resolved}</div>
            <div className="text-sm text-muted-foreground">Resolved</div>
          </div>
          <div className="bg-background rounded-lg border border-border p-4 text-center">
            <div className="text-2xl font-bold text-secondary">{riskSummary?.monitoring}</div>
            <div className="text-sm text-muted-foreground">Monitoring</div>
          </div>
          <div className="bg-background rounded-lg border border-border p-4 text-center">
            <div className="text-2xl font-bold text-accent">{riskSummary?.high}</div>
            <div className="text-sm text-muted-foreground">High Risk</div>
          </div>
          <div className="bg-background rounded-lg border border-border p-4 text-center">
            <div className="text-2xl font-bold text-warning">{riskSummary?.medium}</div>
            <div className="text-sm text-muted-foreground">Medium Risk</div>
          </div>
          <div className="bg-background rounded-lg border border-border p-4 text-center">
            <div className="text-2xl font-bold text-muted-foreground">{riskSummary?.low}</div>
            <div className="text-sm text-muted-foreground">Low Risk</div>
          </div>
        </div>
      </div>
      {/* Risk List */}
      <div className="bg-card rounded-xl p-6 card-elevation">
        <h3 className="text-lg font-semibold text-foreground mb-4 font-heading">Risk Register</h3>
        <div className="space-y-4">
          {risks?.map((risk) => (
            <div key={risk?.id} className="bg-background rounded-lg border border-border p-4 hover:shadow-md transition-all duration-200">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start space-x-3 flex-1">
                  <div className="p-2 bg-muted rounded-lg">
                    <Icon name={getCategoryIcon(risk?.category)} size={20} className="text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="text-lg font-semibold text-foreground">{risk?.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(risk?.severity)}`}>
                        {risk?.severity}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(risk?.status)}`}>
                        {risk?.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{risk?.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <span>Category: {risk?.category}</span>
                      <span>Probability: {risk?.probability}</span>
                      <span>Impact: {risk?.impact}</span>
                      <span>Owner: {risk?.owner}</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedRisk(selectedRisk === risk?.id ? null : risk?.id)}
                  iconName={selectedRisk === risk?.id ? "ChevronUp" : "ChevronDown"}
                >
                  Details
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-muted-foreground">Mitigation Progress</span>
                    <span className="text-xs font-medium text-foreground">{risk?.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${
                        risk?.progress >= 80 ? 'bg-primary' :
                        risk?.progress >= 50 ? 'bg-secondary' : 'bg-accent'
                      }`}
                      style={{ width: `${risk?.progress}%` }}
                    />
                  </div>
                </div>
                <div className="ml-4 text-right">
                  <div className="text-xs text-muted-foreground">Due Date</div>
                  <div className="text-xs font-medium text-foreground">{risk?.dueDate}</div>
                </div>
              </div>

              {selectedRisk === risk?.id && (
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h5 className="font-medium text-foreground mb-2">Root Causes</h5>
                      <ul className="space-y-1">
                        {risk?.causes?.map((cause, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <Icon name="Minus" size={12} className="text-accent mt-1" />
                            <span className="text-sm text-muted-foreground">{cause}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground mb-2">Consequences</h5>
                      <ul className="space-y-1">
                        {risk?.consequences?.map((consequence, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <Icon name="AlertTriangle" size={12} className="text-warning mt-1" />
                            <span className="text-sm text-muted-foreground">{consequence}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground mb-2">Mitigation Actions</h5>
                      <ul className="space-y-1">
                        {risk?.mitigation?.map((action, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <Icon name="CheckCircle" size={12} className="text-primary mt-1" />
                            <span className="text-sm text-muted-foreground">{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RiskAssessment;