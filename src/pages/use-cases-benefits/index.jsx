import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import ScenarioTab from './components/ScenarioTab';
import SimulationVideo from './components/SimulationVideo';
import MetricsPanel from './components/MetricsPanel';
import BenefitsCalculator from './components/BenefitsCalculator';
import CaseStudyCard from './components/CaseStudyCard';
import ComparisonMatrix from './components/ComparisonMatrix';

const UseCasesBenefits = () => {
  const [activeScenario, setActiveScenario] = useState(0);

  const scenarios = [
    {
      id: 'urban-intersections',
      title: 'Urban Intersections',
      icon: 'Building2',
      description: `High-density urban intersections with complex traffic patterns require intelligent signal coordination. Our AI system analyzes real-time vehicle density, pedestrian crossing patterns, and historical traffic data to optimize signal timing dynamically.`,
      videoThumbnail: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=450&fit=crop',
      metrics: [
        {
          icon: 'Clock',
          label: 'Average Wait Time',
          before: '3.2',
          after: '1.8',
          unit: 'min',
          improvement: 44
        },
        {
          icon: 'Car',
          label: 'Vehicles/Hour',
          before: '1,200',
          after: '1,680',
          unit: '',
          improvement: 40
        },
        {
          icon: 'Fuel',
          label: 'Fuel Consumption',
          before: '2.8',
          after: '2.1',
          unit: 'L/km',
          improvement: 25
        },
        {
          icon: 'Users',
          label: 'Pedestrian Safety',
          before: '78',
          after: '94',
          unit: '%',
          improvement: 21
        }
      ],
      insights: [
        {
          title: 'Peak Hour Optimization',
          description: 'AI identifies rush hour patterns and pre-adjusts signal timing 15 minutes before peak traffic arrives'
        },
        {
          title: 'Pedestrian Priority',
          description: 'Computer vision detects waiting pedestrians and adjusts crossing signals to minimize wait times'
        },
        {
          title: 'Emergency Vehicle Detection',
          description: 'Automatic priority routing for ambulances and fire trucks with 3-second response time'
        }
      ],
      environmental: {
        co2Reduction: 28,
        fuelSavings: 25
      }
    },
    {
      id: 'highway-merges',
      title: 'Highway Merges',
      icon: 'Route',
      description: `Highway merge points are critical bottlenecks that cause significant traffic delays. Our system uses predictive algorithms to manage merge timing and ramp metering for optimal traffic flow.`,
      videoThumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop',
      metrics: [
        {
          icon: 'Gauge',
          label: 'Merge Efficiency',
          before: '65',
          after: '89',
          unit: '%',
          improvement: 37
        },
        {
          icon: 'Timer',
          label: 'Merge Delay',
          before: '4.5',
          after: '2.1',
          unit: 'min',
          improvement: 53
        },
        {
          icon: 'TrendingUp',
          label: 'Throughput',
          before: '2,800',
          after: '3,640',
          unit: 'vph',
          improvement: 30
        },
        {
          icon: 'AlertTriangle',
          label: 'Accident Risk',
          before: '12',
          after: '4',
          unit: 'incidents/month',
          improvement: 67
        }
      ],
      insights: [
        {
          title: 'Predictive Ramp Metering',
          description: 'AI predicts highway congestion and adjusts ramp signals 5 minutes in advance'
        },
        {
          title: 'Dynamic Gap Management',
          description: 'Real-time analysis creates optimal merge gaps by adjusting mainline traffic flow'
        },
        {
          title: 'Speed Harmonization',
          description: 'Coordinates with variable speed signs to create smooth merge conditions'
        }
      ],
      environmental: {
        co2Reduction: 32,
        fuelSavings: 29
      }
    },
    {
      id: 'school-zones',
      title: 'School Zones',
      icon: 'GraduationCap',
      description: `School zones require special attention to pedestrian safety while maintaining traffic flow. Our AI system adapts to school schedules and implements enhanced safety protocols during active hours.`,
      videoThumbnail: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=450&fit=crop',
      metrics: [
        {
          icon: 'Shield',
          label: 'Pedestrian Safety',
          before: '82',
          after: '97',
          unit: '%',
          improvement: 18
        },
        {
          icon: 'Clock',
          label: 'Crossing Time',
          before: '45',
          after: '28',
          unit: 'sec',
          improvement: 38
        },
        {
          icon: 'Car',
          label: 'Speed Compliance',
          before: '71',
          after: '94',
          unit: '%',
          improvement: 32
        },
        {
          icon: 'Users',
          label: 'Student Safety',
          before: '88',
          after: '99',
          unit: '%',
          improvement: 13
        }
      ],
      insights: [
        {
          title: 'Schedule-Based Adaptation',
          description: 'System automatically adjusts to school calendar and implements enhanced safety during active hours'
        },
        {
          title: 'Child Detection Priority',
          description: 'Advanced computer vision specifically trained to detect children and prioritize their crossing needs'
        },
        {
          title: 'Parent Drop-off Management',
          description: 'Optimizes traffic flow during peak drop-off and pickup times with dynamic signal timing'
        }
      ],
      environmental: {
        co2Reduction: 15,
        fuelSavings: 18
      }
    },
    {
      id: 'emergency-priority',
      title: 'Emergency Priority',
      icon: 'Siren',
      description: `Emergency vehicles require immediate priority routing through traffic signals. Our system provides instant signal preemption with minimal disruption to regular traffic flow.`,
      videoThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=450&fit=crop',
      metrics: [
        {
          icon: 'Timer',
          label: 'Response Time',
          before: '8.2',
          after: '4.1',
          unit: 'min',
          improvement: 50
        },
        {
          icon: 'Route',
          label: 'Clear Path Time',
          before: '25',
          after: '8',
          unit: 'sec',
          improvement: 68
        },
        {
          icon: 'Car',
          label: 'Traffic Disruption',
          before: '180',
          after: '45',
          unit: 'sec',
          improvement: 75
        },
        {
          icon: 'Heart',
          label: 'Lives Saved',
          before: '12',
          after: '23',
          unit: 'per year',
          improvement: 92
        }
      ],
      insights: [
        {
          title: 'Instant Signal Preemption',
          description: 'Emergency vehicles trigger immediate green lights with 2-second response time'
        },
        {
          title: 'Route Optimization',
          description: 'AI calculates fastest route and pre-clears intersections along the emergency path'
        },
        {
          title: 'Recovery Protocols',
          description: 'Automatic traffic flow recovery after emergency vehicle passage with minimal delay'
        }
      ],
      environmental: {
        co2Reduction: 8,
        fuelSavings: 12
      }
    }
  ];

  const caseStudies = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Traffic Engineering Director',
      location: 'Seattle Department of Transportation',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      rating: 5,
      quote: `The AI traffic control system transformed our downtown corridor. We've seen a 45% reduction in congestion and our citizens are noticing the difference. The system's ability to adapt to real-time conditions is remarkable.`,
      keyResults: [
        { value: '45%', label: 'Congestion Reduction' },
        { value: '32%', label: 'Fuel Savings' },
        { value: '28%', label: 'Faster Commutes' }
      ],
      implementationDetails: `The implementation covered 25 intersections across downtown Seattle over a 6-month period. The system integrated with existing infrastructure and required minimal hardware upgrades. Training for traffic management staff took 2 weeks, and the system showed measurable improvements within the first month of operation.`,
      challenges: [
        'Integration with legacy traffic management systems',
        'Staff training and change management',
        'Public communication about new technology',
        'Weather adaptation for Pacific Northwest conditions'
      ],
      timeline: {
        implementation: '6 months',
        results: '4 weeks'
      },
      projectSize: '25 intersections',
      duration: '6 months'
    },
    {
      name: 'Michael Rodriguez',
      title: 'Smart City Initiative Lead',
      location: 'Austin Transportation Department',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      rating: 5,
      quote: `This technology is a game-changer for urban mobility. The environmental benefits alone justify the investment, but the improved quality of life for our residents is invaluable. Emergency response times have improved dramatically.`,
      keyResults: [
        { value: '38%', label: 'Response Time' },
        { value: '52%', label: 'Emissions Cut' },
        { value: '41%', label: 'Flow Increase' }
      ],
      implementationDetails: `Austin's deployment focused on the high-traffic corridors connecting downtown to major residential areas. The phased rollout allowed for continuous optimization and learning. Integration with the city's existing smart city infrastructure provided additional data sources for enhanced decision-making.`,
      challenges: [
        'Coordination with multiple city departments',
        'Public-private partnership management',
        'Data privacy and security compliance',
        'Integration with ride-sharing and delivery services'
      ],
      timeline: {
        implementation: '8 months',
        results: '6 weeks'
      },
      projectSize: '40 intersections',
      duration: '8 months'
    },
    {
      name: 'Jennifer Park',
      title: 'Urban Planning Manager',
      location: 'Portland Bureau of Transportation',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
      rating: 4,
      quote: `The pedestrian safety improvements have been outstanding. Our bike lane integration works seamlessly with the AI system, and we've seen a significant increase in sustainable transportation usage.`,
      keyResults: [
        { value: '67%', label: 'Pedestrian Safety' },
        { value: '29%', label: 'Bike Usage' },
        { value: '35%', label: 'Transit Efficiency' }
      ],
      implementationDetails: `Portland's implementation emphasized multimodal transportation integration, including dedicated bike lanes, bus rapid transit, and pedestrian priority zones. The system's ability to balance competing transportation modes while maintaining overall efficiency was crucial to the project's success.`,
      challenges: [
        'Multimodal transportation coordination',
        'Weather-resistant sensor deployment',
        'Community engagement and feedback integration',
        'Bicycle and pedestrian detection accuracy'
      ],
      timeline: {
        implementation: '7 months',
        results: '5 weeks'
      },
      projectSize: '32 intersections',
      duration: '7 months'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Use Cases & Benefits - TrafficFlow AI</title>
        <meta name="description" content="Explore real-world applications and quantified benefits of AI-powered traffic signal control systems through interactive scenarios and case studies." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Icon name="Target" size={16} />
              <span>Real-World Applications</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-heading">
              Use Cases & Benefits
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover how AI-powered traffic control transforms urban mobility through real-world scenarios, 
              quantified benefits, and proven case studies from cities worldwide.
            </p>
          </div>

          {/* Interactive Scenarios Section */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Interactive Traffic Scenarios</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore different traffic situations and see how AI optimization delivers measurable improvements
              </p>
            </div>

            {/* Scenario Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {scenarios?.map((scenario, index) => (
                <ScenarioTab
                  key={scenario?.id}
                  scenario={scenario}
                  isActive={activeScenario === index}
                  onClick={() => setActiveScenario(index)}
                />
              ))}
            </div>

            {/* Scenario Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Simulation Video */}
              <div>
                <SimulationVideo scenario={scenarios?.[activeScenario]} />
              </div>

              {/* Metrics Panel */}
              <div>
                <MetricsPanel scenario={scenarios?.[activeScenario]} />
              </div>
            </div>
          </section>

          {/* Benefits Calculator */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Calculate Your City's Benefits</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Enter your city's traffic data to see projected improvements and cost savings
              </p>
            </div>
            <BenefitsCalculator />
          </section>

          {/* Case Studies */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Success Stories</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Real testimonials from traffic engineers and city planners who have implemented our AI system
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudies?.map((caseStudy, index) => (
                <CaseStudyCard key={index} caseStudy={caseStudy} />
              ))}
            </div>
          </section>

          {/* Comparison Matrix */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">AI vs Traditional Systems</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive comparison showing why AI-powered traffic control outperforms traditional systems
              </p>
            </div>
            <ComparisonMatrix />
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Transform Your City's Traffic?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join the growing number of cities leveraging AI to create smarter, more efficient transportation systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2">
                  <Icon name="Calendar" size={20} />
                  <span>Schedule Demo</span>
                </button>
                <button className="bg-card border border-border text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-muted transition-colors flex items-center justify-center space-x-2">
                  <Icon name="Download" size={20} />
                  <span>Download Whitepaper</span>
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default UseCasesBenefits;