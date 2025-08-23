import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const FAQSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

  const faqData = [
    {
      category: 'Implementation',
      question: 'How long does it take to implement TrafficFlow AI in a city?',
      answer: `Implementation timeline varies based on project scope:\n\n• Pilot Project (1-5 intersections): 2-3 months\n• District Implementation (5-20 intersections): 6-9 months\n• City-wide Deployment (20+ intersections): 12-18 months\n\nThis includes system installation, calibration, testing, and staff training phases.`
    },
    {
      category: 'Technical',
      question: 'What hardware requirements are needed for the system?',
      answer: `Our system requires:\n\n• High-resolution cameras (minimum 1080p) at each intersection\n• Edge computing units with GPU support for real-time processing\n• Reliable internet connectivity (minimum 10 Mbps upload)\n• Integration with existing traffic signal controllers\n• Weather-resistant housing for outdoor equipment\n\nWe provide detailed hardware specifications and can recommend certified vendors.`
    },
    {
      category: 'Performance',
      question: 'What kind of traffic flow improvements can we expect?',
      answer: `Based on our pilot implementations, typical improvements include:\n\n• 25-40% reduction in average wait times\n• 15-30% improvement in traffic throughput\n• 20-35% reduction in fuel consumption and emissions\n• 30-50% decrease in traffic congestion during peak hours\n\nActual results depend on existing traffic patterns, intersection complexity, and local conditions.`
    },
    {
      category: 'Integration',
      question: 'Can TrafficFlow AI integrate with existing traffic management systems?',
      answer: `Yes, our system is designed for seamless integration:\n\n• Compatible with major traffic controller brands (Econolite, McCain, Siemens)\n• RESTful APIs for integration with city management platforms\n• Support for NTCIP protocols and industry standards\n• Gradual deployment options to minimize disruption\n• Comprehensive migration support and training\n\nOur team works closely with your IT department to ensure smooth integration.`
    },
    {
      category: 'Cost',
      question: 'What are the typical costs and ROI for TrafficFlow AI?',
      answer: `Investment varies by scale, but typical ranges are:\n\n• Per intersection: $15,000 - $25,000 (hardware + software)\n• Implementation services: $5,000 - $10,000 per intersection\n• Annual maintenance: 10-15% of initial investment\n\nROI typically achieved within 18-24 months through:\n• Reduced fuel costs for citizens\n• Lower maintenance needs\n• Improved emergency response times\n• Enhanced economic activity from better traffic flow`
    },
    {
      category: 'Support',
      question: 'What kind of ongoing support and maintenance is provided?',
      answer: `We provide comprehensive support:\n\n• 24/7 system monitoring and alerts\n• Remote diagnostics and troubleshooting\n• Regular software updates and improvements\n• On-site maintenance visits (quarterly)\n• Staff training and certification programs\n• Dedicated customer success manager\n\nOur support team includes traffic engineers, AI specialists, and field technicians.`
    },
    {
      category: 'Security',
      question: 'How secure is the TrafficFlow AI system?',
      answer: `Security is our top priority:\n\n• End-to-end encryption for all data transmission\n• Regular security audits and penetration testing\n• Compliance with cybersecurity frameworks (NIST, ISO 27001)\n• Air-gapped deployment options for sensitive installations\n• Multi-factor authentication and role-based access control\n• Regular security updates and patches\n\nWe work with cybersecurity experts to ensure the highest protection standards.`
    },
    {
      category: 'Training',
      question: 'What training is provided for city staff and traffic engineers?',
      answer: `Comprehensive training program includes:\n\n• Initial 3-day on-site training for operations staff\n• Advanced 5-day certification program for traffic engineers\n• Online learning portal with video tutorials and documentation\n• Quarterly webinars on new features and best practices\n• Annual user conference with hands-on workshops\n• 24/7 access to technical support team\n\nWe ensure your team is fully prepared to operate and maintain the system effectively.`
    }
  ];

  const filteredFAQs = faqData?.filter(
    item =>
      item?.question?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      item?.answer?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      item?.category?.toLowerCase()?.includes(searchTerm?.toLowerCase())
  );

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems?.has(index)) {
      newOpenItems?.delete(index);
    } else {
      newOpenItems?.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const categories = [...new Set(faqData.map(item => item.category))];

  return (
    <div className="bg-card rounded-xl p-8 card-elevation">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="HelpCircle" size={24} className="text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-foreground">Frequently Asked Questions</h3>
          <p className="text-muted-foreground">Find answers to common questions about TrafficFlow AI</p>
        </div>
      </div>
      {/* Search */}
      <div className="mb-8">
        <Input
          type="search"
          placeholder="Search FAQs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e?.target?.value)}
          className="max-w-md"
        />
      </div>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setSearchTerm('')}
          className={`px-3 py-1 rounded-full text-sm transition-smooth ${
            searchTerm === '' ?'bg-primary text-primary-foreground' :'bg-muted text-muted-foreground hover:bg-muted/80'
          }`}
        >
          All
        </button>
        {categories?.map((category) => (
          <button
            key={category}
            onClick={() => setSearchTerm(category)}
            className={`px-3 py-1 rounded-full text-sm transition-smooth ${
              searchTerm?.toLowerCase() === category?.toLowerCase()
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      {/* FAQ Items */}
      <div className="space-y-4">
        {filteredFAQs?.length === 0 ? (
          <div className="text-center py-12">
            <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No FAQs found matching your search.</p>
          </div>
        ) : (
          filteredFAQs?.map((item, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden transition-smooth hover:border-primary/30"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-smooth"
              >
                <div className="flex items-start space-x-3 flex-1">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-medium">
                    {item?.category}
                  </span>
                  <h4 className="font-semibold text-foreground">{item?.question}</h4>
                </div>
                <Icon
                  name={openItems?.has(index) ? 'ChevronUp' : 'ChevronDown'}
                  size={20}
                  className="text-muted-foreground flex-shrink-0 ml-4"
                />
              </button>
              
              {openItems?.has(index) && (
                <div className="px-6 pb-6 pt-2">
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {item?.answer}
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
      {/* Contact for More Questions */}
      <div className="mt-8 pt-6 border-t border-border text-center">
        <p className="text-muted-foreground mb-4">
          Can't find what you're looking for?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.open('mailto:support@trafficflow-ai.com', '_blank')}
            className="flex items-center justify-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth"
          >
            <Icon name="Mail" size={16} />
            <span>Email Support</span>
          </button>
          <button
            onClick={() => alert('Live chat would open here')}
            className="flex items-center justify-center space-x-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-smooth"
          >
            <Icon name="MessageCircle" size={16} />
            <span>Live Chat</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;