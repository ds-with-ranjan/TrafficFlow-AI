import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Dr. Jennifer Martinez',
      role: 'Traffic Engineering Director',
      organization: 'City of San Francisco',
      image: 'https://randomuser.me/api/portraits/women/47.jpg',
      content: `TrafficFlow AI has revolutionized our traffic management approach. We've seen a 35% reduction in congestion during peak hours and significantly improved emergency response times. The system's ability to adapt in real-time to changing traffic patterns is remarkable.`,
      rating: 5,
      implementation: 'City-wide deployment across 45 intersections',
      verified: true,
      date: '2023-08-15'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Smart City Initiative Lead',
      organization: 'Austin Transportation Department',
      image: 'https://randomuser.me/api/portraits/men/33.jpg',
      content: `The implementation was seamless, and the results exceeded our expectations. Citizens have noticed the difference immediately - smoother traffic flow and reduced wait times. The ROI was achieved within 18 months, primarily through fuel savings and improved productivity.`,
      rating: 5,
      implementation: 'District pilot with 12 intersections',
      verified: true,
      date: '2023-07-22'
    },
    {
      id: 3,
      name: 'Prof. Sarah Williams',
      role: 'Transportation Research Professor',
      organization: 'MIT Transportation Lab',
      image: 'https://randomuser.me/api/portraits/women/52.jpg',
      content: `From a research perspective, TrafficFlow AI represents a significant advancement in adaptive traffic control. The reinforcement learning algorithms are sophisticated yet practical. We've incorporated their methodology into our graduate curriculum.`,
      rating: 5,
      implementation: 'Research collaboration and testing',
      verified: true,
      date: '2023-06-10'
    },
    {
      id: 4,
      name: 'Robert Thompson',role: 'Chief Technology Officer',organization: 'Metro Transit Authority',image: 'https://randomuser.me/api/portraits/men/41.jpg',
      content: `The technical support and integration capabilities are outstanding. The system integrated perfectly with our existing infrastructure, and the 24/7 monitoring gives us complete confidence. The AI continuously learns and improves performance.`,
      rating: 5,
      implementation: 'Regional deployment across 28 intersections',
      verified: true,
      date: '2023-05-18'
    },
    {
      id: 5,
      name: 'Lisa Rodriguez',role: 'Urban Planning Director',organization: 'Seattle Department of Transportation',image: 'https://randomuser.me/api/portraits/women/38.jpg',content: `What impressed us most was the environmental impact. We've documented a 28% reduction in vehicle emissions at controlled intersections. The system aligns perfectly with our sustainability goals while improving citizen experience.`,
      rating: 5,
      implementation: 'Pilot program with 8 intersections',
      verified: true,
      date: '2023-04-25'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const current = testimonials?.[currentTestimonial];

  return (
    <div className="bg-card rounded-xl p-8 card-elevation">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="Quote" size={24} className="text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-foreground">What Our Partners Say</h3>
          <p className="text-muted-foreground">Testimonials from traffic engineering professionals</p>
        </div>
      </div>
      {/* Main Testimonial */}
      <div className="relative">
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 border border-primary/10">
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0">
              <div className="relative">
                <Image
                  src={current?.image}
                  alt={current?.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-primary/20"
                />
                {current?.verified && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Check" size={14} className="text-white" />
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-3">
                {[...Array(current?.rating)]?.map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="text-secondary fill-current" />
                ))}
              </div>
              
              <blockquote className="text-foreground text-lg leading-relaxed mb-6">
                "{current?.content}"
              </blockquote>
              
              <div className="space-y-2">
                <div>
                  <h4 className="font-semibold text-foreground">{current?.name}</h4>
                  <p className="text-primary font-medium">{current?.role}</p>
                  <p className="text-muted-foreground">{current?.organization}</p>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Icon name="MapPin" size={14} />
                    <span>{current?.implementation}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Calendar" size={14} />
                    <span>{new Date(current.date)?.toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex space-x-2">
            {testimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentTestimonial
                    ? 'bg-primary' :'bg-muted hover:bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
          
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="w-10 h-10"
            >
              <Icon name="ChevronLeft" size={16} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="w-10 h-10"
            >
              <Icon name="ChevronRight" size={16} />
            </Button>
          </div>
        </div>
      </div>
      {/* Statistics */}
      <div className="mt-8 pt-6 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">50+</div>
            <div className="text-muted-foreground text-sm">Cities Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">500+</div>
            <div className="text-muted-foreground text-sm">Intersections</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">98%</div>
            <div className="text-muted-foreground text-sm">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">30%</div>
            <div className="text-muted-foreground text-sm">Avg. Improvement</div>
          </div>
        </div>
      </div>
      {/* Call to Action */}
      <div className="mt-8 pt-6 border-t border-border text-center">
        <p className="text-muted-foreground mb-4">
          Ready to transform your city's traffic management?
        </p>
        <Button
          variant="default"
          iconName="ArrowRight"
          iconPosition="right"
          onClick={() => document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Start Your Implementation
        </Button>
      </div>
    </div>
  );
};

export default TestimonialsSection;