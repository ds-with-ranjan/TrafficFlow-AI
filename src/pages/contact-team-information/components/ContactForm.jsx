import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: '',
    projectScope: '',
    message: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const inquiryTypes = [
    { value: 'implementation', label: 'Implementation Partnership' },
    { value: 'research', label: 'Research Collaboration' },
    { value: 'technical', label: 'Technical Consultation' },
    { value: 'demo', label: 'System Demonstration' },
    { value: 'licensing', label: 'Technology Licensing' },
    { value: 'other', label: 'Other Inquiry' }
  ];

  const projectScopes = [
    { value: 'pilot', label: 'Pilot Project (1-5 intersections)' },
    { value: 'district', label: 'District Implementation (5-20 intersections)' },
    { value: 'city', label: 'City-wide Deployment (20+ intersections)' },
    { value: 'research', label: 'Research & Development' },
    { value: 'consultation', label: 'Consultation Only' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        organization: '',
        inquiryType: '',
        projectScope: '',
        message: '',
        phone: ''
      });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  return (
    <div className="bg-card rounded-xl p-8 card-elevation">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="MessageSquare" size={24} className="text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-foreground">Get in Touch</h3>
          <p className="text-muted-foreground">Let's discuss your traffic optimization needs</p>
        </div>
      </div>
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg flex items-center space-x-3">
          <Icon name="CheckCircle" size={20} className="text-success" />
          <p className="text-success font-medium">
            Thank you! We'll respond within 24 hours.
          </p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            value={formData?.name}
            onChange={(e) => handleInputChange('name', e?.target?.value)}
            required
          />
          
          <Input
            label="Email Address"
            type="email"
            placeholder="your.email@organization.com"
            value={formData?.email}
            onChange={(e) => handleInputChange('email', e?.target?.value)}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Organization"
            type="text"
            placeholder="Your organization name"
            value={formData?.organization}
            onChange={(e) => handleInputChange('organization', e?.target?.value)}
            required
          />
          
          <Input
            label="Phone Number"
            type="tel"
            placeholder="+1 (555) 123-4567"
            value={formData?.phone}
            onChange={(e) => handleInputChange('phone', e?.target?.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Inquiry Type"
            placeholder="Select inquiry type"
            options={inquiryTypes}
            value={formData?.inquiryType}
            onChange={(value) => handleInputChange('inquiryType', value)}
            required
          />
          
          <Select
            label="Project Scope"
            placeholder="Select project scope"
            options={projectScopes}
            value={formData?.projectScope}
            onChange={(value) => handleInputChange('projectScope', value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Message <span className="text-destructive">*</span>
          </label>
          <textarea
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-smooth"
            rows="6"
            placeholder="Please describe your project requirements, timeline, and any specific questions about our TrafficFlow AI system..."
            value={formData?.message}
            onChange={(e) => handleInputChange('message', e?.target?.value)}
            required
          />
        </div>

        <Button
          type="submit"
          variant="default"
          size="lg"
          loading={isSubmitting}
          iconName="Send"
          iconPosition="right"
          className="w-full md:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending Message...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;