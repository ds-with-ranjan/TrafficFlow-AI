import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';
import Button from '../../../components/ui/Button';

const NewsletterSignup = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    organization: '',
    role: '',
    interests: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const interestOptions = [
    { id: 'research', label: 'Research Updates', description: 'Latest AI and traffic optimization research' },
    { id: 'product', label: 'Product News', description: 'New features and system improvements' },
    { id: 'case-studies', label: 'Case Studies', description: 'Real-world implementation stories' },
    { id: 'events', label: 'Events & Webinars', description: 'Training sessions and conferences' },
    { id: 'industry', label: 'Industry Insights', description: 'Traffic engineering trends and analysis' },
    { id: 'technical', label: 'Technical Deep Dives', description: 'Detailed technical documentation' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleInterestChange = (interestId, checked) => {
    setFormData(prev => ({
      ...prev,
      interests: checked
        ? [...prev?.interests, interestId]
        : prev?.interests?.filter(id => id !== interestId)
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
        email: '',
        firstName: '',
        lastName: '',
        organization: '',
        role: '',
        interests: []
      });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 border border-primary/10">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="Mail" size={24} className="text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-foreground">Stay Updated</h3>
          <p className="text-muted-foreground">Get the latest insights on AI-powered traffic optimization</p>
        </div>
      </div>
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg flex items-center space-x-3">
          <Icon name="CheckCircle" size={20} className="text-success" />
          <div>
            <p className="text-success font-medium">Successfully subscribed!</p>
            <p className="text-success/80 text-sm">Welcome to the TrafficFlow AI community.</p>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="First Name"
            type="text"
            placeholder="Enter your first name"
            value={formData?.firstName}
            onChange={(e) => handleInputChange('firstName', e?.target?.value)}
            required
          />
          
          <Input
            label="Last Name"
            type="text"
            placeholder="Enter your last name"
            value={formData?.lastName}
            onChange={(e) => handleInputChange('lastName', e?.target?.value)}
            required
          />
        </div>

        <Input
          label="Email Address"
          type="email"
          placeholder="your.email@organization.com"
          value={formData?.email}
          onChange={(e) => handleInputChange('email', e?.target?.value)}
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Organization"
            type="text"
            placeholder="Your organization name"
            value={formData?.organization}
            onChange={(e) => handleInputChange('organization', e?.target?.value)}
          />
          
          <Input
            label="Role/Title"
            type="text"
            placeholder="Your job title"
            value={formData?.role}
            onChange={(e) => handleInputChange('role', e?.target?.value)}
          />
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">What interests you? (Select all that apply)</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {interestOptions?.map((option) => (
              <div key={option?.id} className="flex items-start space-x-3 p-3 rounded-lg border border-border hover:border-primary/30 transition-smooth">
                <Checkbox
                  checked={formData?.interests?.includes(option?.id)}
                  onChange={(e) => handleInterestChange(option?.id, e?.target?.checked)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <label className="font-medium text-foreground cursor-pointer">
                    {option?.label}
                  </label>
                  <p className="text-muted-foreground text-sm">{option?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
          <Icon name="Shield" size={20} className="text-primary mt-1" />
          <div className="text-sm text-muted-foreground">
            <p className="font-medium text-foreground mb-1">Privacy Promise</p>
            <p>
              We respect your privacy. Your information will only be used to send you relevant updates about TrafficFlow AI. 
              You can unsubscribe at any time. We never share your data with third parties.
            </p>
          </div>
        </div>

        <Button
          type="submit"
          variant="default"
          size="lg"
          loading={isSubmitting}
          iconName="Send"
          iconPosition="right"
          className="w-full md:w-auto"
          disabled={isSubmitting || !formData?.email || !formData?.firstName || !formData?.lastName}
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe to Newsletter'}
        </Button>
      </form>
      {/* Newsletter Benefits */}
      <div className="mt-8 pt-6 border-t border-border">
        <h4 className="font-semibold text-foreground mb-4">What you'll receive:</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-2">
            <Icon name="Calendar" size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground">Monthly updates</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="BookOpen" size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground">Exclusive content</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Users" size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground">Community access</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;