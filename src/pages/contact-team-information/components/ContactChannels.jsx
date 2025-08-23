import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactChannels = () => {
  const contactMethods = [
    {
      icon: 'Phone',
      title: 'Phone Support',
      primary: '+1 (555) 123-4567',
      secondary: 'Mon-Fri, 9 AM - 6 PM EST',
      action: () => window.open('tel:+15551234567'),
      available: true
    },
    {
      icon: 'Mail',
      title: 'Email Support',
      primary: 'contact@trafficflow-ai.com',
      secondary: 'Response within 24 hours',
      action: () => window.open('mailto:contact@trafficflow-ai.com'),
      available: true
    },
    {
      icon: 'MessageCircle',
      title: 'Live Chat',
      primary: 'Available Now',
      secondary: 'Instant technical support',
      action: () => alert('Live chat would open here'),
      available: true
    },
    {
      icon: 'Calendar',
      title: 'Schedule Meeting',
      primary: 'Book Consultation',
      secondary: '30-60 minute sessions',
      action: () => alert('Calendar booking would open here'),
      available: true
    }
  ];

  const socialLinks = [
    {
      icon: 'Linkedin',
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/trafficflow-ai',
      color: 'text-blue-600'
    },
    {
      icon: 'Twitter',
      name: 'Twitter',
      url: 'https://twitter.com/trafficflow_ai',
      color: 'text-blue-400'
    },
    {
      icon: 'Github',
      name: 'GitHub',
      url: 'https://github.com/trafficflow-ai',
      color: 'text-gray-800'
    },
    {
      icon: 'Youtube',
      name: 'YouTube',
      url: 'https://youtube.com/@trafficflow-ai',
      color: 'text-red-600'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div className="bg-card rounded-xl p-8 card-elevation">
        <h3 className="text-2xl font-bold text-foreground mb-6">Contact Channels</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactMethods?.map((method, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-4 rounded-lg border border-border hover:border-primary/30 transition-smooth cursor-pointer"
              onClick={method?.action}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={method?.icon} size={24} className="text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-semibold text-foreground">{method?.title}</h4>
                  {method?.available && (
                    <div className="w-2 h-2 bg-success rounded-full pulse-live"></div>
                  )}
                </div>
                <p className="text-foreground font-medium">{method?.primary}</p>
                <p className="text-muted-foreground text-sm">{method?.secondary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Office Location */}
      <div className="bg-card rounded-xl p-8 card-elevation">
        <h3 className="text-2xl font-bold text-foreground mb-6">Office Location</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Icon name="MapPin" size={20} className="text-primary mt-1" />
              <div>
                <h4 className="font-semibold text-foreground">Headquarters</h4>
                <p className="text-muted-foreground">
                  123 Innovation Drive<br />
                  Tech Valley, CA 94025<br />
                  United States
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Icon name="Clock" size={20} className="text-primary mt-1" />
              <div>
                <h4 className="font-semibold text-foreground">Business Hours</h4>
                <p className="text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                  Saturday: 10:00 AM - 2:00 PM PST<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            <Button
              variant="outline"
              iconName="Navigation"
              iconPosition="left"
              onClick={() => window.open('https://maps.google.com/?q=37.4419,-122.1430', '_blank')}
            >
              Get Directions
            </Button>
          </div>
          
          <div className="h-64 rounded-lg overflow-hidden border border-border">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              title="TrafficFlow AI Office Location"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=37.4419,-122.1430&z=14&output=embed"
            />
          </div>
        </div>
      </div>
      {/* Social Media */}
      <div className="bg-card rounded-xl p-8 card-elevation">
        <h3 className="text-2xl font-bold text-foreground mb-6">Follow Us</h3>
        <div className="flex flex-wrap gap-4">
          {socialLinks?.map((social, index) => (
            <Button
              key={index}
              variant="outline"
              iconName={social?.icon}
              iconPosition="left"
              onClick={() => window.open(social?.url, '_blank')}
              className="flex-1 sm:flex-none"
            >
              {social?.name}
            </Button>
          ))}
        </div>
        <p className="text-muted-foreground text-sm mt-4">
          Stay updated with our latest research, developments, and industry insights.
        </p>
      </div>
    </div>
  );
};

export default ContactChannels;