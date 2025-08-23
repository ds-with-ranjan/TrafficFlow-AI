import React from 'react';
import Header from '../../components/ui/Header';
import TeamMemberCard from './components/TeamMemberCard';
import ContactForm from './components/ContactForm';
import ContactChannels from './components/ContactChannels';
import OrganizationalChart from './components/OrganizationalChart';
import ResearchCollaboration from './components/ResearchCollaboration';
import FAQSection from './components/FAQSection';
import NewsletterSignup from './components/NewsletterSignup';
import TestimonialsSection from './components/TestimonialsSection';
import Icon from '../../components/AppIcon';

const ContactTeamInformation = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      role: 'Project Director & AI Research Lead',
      department: 'Leadership & AI Research',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      email: 'sarah.chen@trafficflow-ai.com',
      linkedin: 'https://linkedin.com/in/sarah-chen-ai',
      github: 'https://github.com/sarah-chen',
      expertise: ['Deep Learning', 'Traffic Optimization', 'Project Management', 'Research Leadership'],
      biography: `Dr. Sarah Chen is a renowned expert in artificial intelligence and traffic optimization with over 15 years of experience in the field. She holds a Ph.D. in Computer Science from Stanford University and has published over 50 research papers in top-tier conferences and journals. Before founding TrafficFlow AI, she led the AI research division at a major transportation technology company, where she developed groundbreaking algorithms for intelligent transportation systems.`,
      education: 'Ph.D. Computer Science, Stanford University; M.S. Electrical Engineering, MIT',
      publications: [
        'Adaptive Traffic Signal Control Using Deep Reinforcement Learning (IEEE TITS, 2023)',
        'Multi-Agent Systems for Urban Traffic Management (ICML, 2022)',
        'Computer Vision Applications in Smart Transportation (Nature Machine Intelligence, 2021)'
      ]
    },
    {
      id: 2,
      name: 'Dr. Michael Rodriguez',
      role: 'Machine Learning Engineer',
      department: 'Artificial Intelligence',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      email: 'michael.rodriguez@trafficflow-ai.com',
      linkedin: 'https://linkedin.com/in/michael-rodriguez-ml',
      github: 'https://github.com/michael-rodriguez',
      expertise: ['Reinforcement Learning', 'Neural Networks', 'Algorithm Design', 'Python'],
      biography: `Dr. Michael Rodriguez specializes in reinforcement learning and neural network architectures for real-time decision making. With a background in both theoretical machine learning and practical applications, he has been instrumental in developing the core RL algorithms that power TrafficFlow AI. His work focuses on creating adaptive systems that can learn and improve from real-world traffic data.`,
      education: 'Ph.D. Machine Learning, Carnegie Mellon University; B.S. Computer Science, UC Berkeley',
      publications: [
        'Real-time Traffic Flow Optimization: A Multi-Agent Approach (ICML, 2022)',
        'Scalable Reinforcement Learning for Urban Traffic Control (NeurIPS, 2021)',
        'Deep Q-Networks for Dynamic Traffic Signal Timing (AAAI, 2020)'
      ]
    },
    {
      id: 3,
      name: 'Dr. Emily Watson',
      role: 'Computer Vision Lead',
      department: 'Computer Vision',
      image: 'https://randomuser.me/api/portraits/women/28.jpg',
      email: 'emily.watson@trafficflow-ai.com',
      linkedin: 'https://linkedin.com/in/emily-watson-cv',
      github: 'https://github.com/emily-watson',
      expertise: ['Computer Vision', 'Image Processing', 'Object Detection', 'Deep Learning'],
      biography: `Dr. Emily Watson leads the computer vision team, developing advanced algorithms for vehicle detection, tracking, and traffic pattern analysis. Her expertise in real-time image processing and object detection has been crucial in creating the visual intelligence that powers TrafficFlow AI's decision-making capabilities. She has extensive experience in deploying computer vision systems in challenging outdoor environments.`,
      education: 'Ph.D. Computer Vision, University of Oxford; M.S. Electrical Engineering, Caltech',
      publications: [
        'Computer Vision-Based Vehicle Detection for Smart Traffic Management (Transportation Research Part C, 2023)','Robust Object Tracking in Urban Traffic Scenarios (CVPR, 2022)','Multi-Camera Traffic Monitoring Systems (IEEE TPAMI, 2021)'
      ]
    },
    {
      id: 4,
      name: 'James Thompson',role: 'Systems Engineering Lead',department: 'Systems Engineering',image: 'https://randomuser.me/api/portraits/men/45.jpg',email: 'james.thompson@trafficflow-ai.com',linkedin: 'https://linkedin.com/in/james-thompson-systems',github: 'https://github.com/james-thompson',
      expertise: ['Systems Architecture', 'Cloud Computing', 'DevOps', 'Infrastructure'],
      biography: `James Thompson brings over 12 years of experience in large-scale systems engineering and infrastructure design. He is responsible for the robust, scalable architecture that enables TrafficFlow AI to operate reliably across multiple cities and handle real-time traffic data processing. His expertise in cloud computing and distributed systems ensures the platform can scale to meet growing demand.`,
      education: 'M.S. Systems Engineering, Georgia Tech; B.S. Computer Engineering, University of Michigan',
      publications: [
        'Scalable Infrastructure for AI-Powered Traffic Control Systems (ACM TCPS, 2022)','Cloud-Native Architecture for Real-Time Traffic Management (IEEE Cloud, 2021)','Distributed Computing in Smart City Applications (ACM Computing Surveys, 2020)'
      ]
    },
    {
      id: 5,
      name: 'Alex Kumar',role: 'ML Engineer',department: 'Artificial Intelligence',image: 'https://randomuser.me/api/portraits/men/25.jpg',email: 'alex.kumar@trafficflow-ai.com',linkedin: 'https://linkedin.com/in/alex-kumar-ml',github: 'https://github.com/alex-kumar',
      expertise: ['Machine Learning', 'Data Science', 'Model Optimization', 'TensorFlow'],
      biography: `Alex Kumar is a talented machine learning engineer who focuses on model optimization and performance tuning. He works closely with the research team to implement and deploy cutting-edge ML algorithms in production environments. His expertise in model compression and edge computing has been vital in creating efficient solutions that can run on traffic control hardware.`,
      education: 'M.S. Machine Learning, University of Washington; B.S. Mathematics, IIT Delhi',
      publications: [
        'Efficient Neural Networks for Edge Computing in Traffic Systems (ICCV, 2022)','Model Compression Techniques for Real-Time Applications (ICML Workshop, 2021)'
      ]
    },
    {
      id: 6,
      name: 'Lisa Park',role: 'Reinforcement Learning Specialist',department: 'Artificial Intelligence',image: 'https://randomuser.me/api/portraits/women/31.jpg',email: 'lisa.park@trafficflow-ai.com',linkedin: 'https://linkedin.com/in/lisa-park-rl',github: 'https://github.com/lisa-park',
      expertise: ['Reinforcement Learning', 'Multi-Agent Systems', 'Game Theory', 'Optimization'],
      biography: `Lisa Park specializes in advanced reinforcement learning techniques and multi-agent systems. Her research focuses on developing algorithms that can coordinate multiple traffic signals to optimize city-wide traffic flow. She has made significant contributions to the field of cooperative multi-agent reinforcement learning and its applications in urban planning.`,
      education: 'Ph.D. Computer Science, University of Toronto; M.S. Applied Mathematics, NYU',
      publications: [
        'Cooperative Multi-Agent RL for Traffic Signal Coordination (AAMAS, 2023)','Game-Theoretic Approaches to Traffic Optimization (IJCAI, 2022)'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                <Icon name="Users" size={32} className="text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-heading">
              Meet Our <span className="text-primary">Expert Team</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Connect with the brilliant minds behind TrafficFlow AI. Our multidisciplinary team of researchers, 
              engineers, and traffic optimization experts is dedicated to revolutionizing urban transportation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth font-medium"
              >
                <Icon name="MessageSquare" size={20} />
                <span>Get in Touch</span>
              </button>
              <button
                onClick={() => document.querySelector('#team-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center space-x-2 px-8 py-4 border border-border rounded-lg hover:bg-muted transition-smooth font-medium"
              >
                <Icon name="ArrowDown" size={20} />
                <span>Meet the Team</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section id="team-section" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
              Our Research Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              World-class experts in AI, computer vision, and traffic engineering working together 
              to solve complex urban transportation challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers?.map((member) => (
              <TeamMemberCard key={member?.id} member={member} />
            ))}
          </div>
        </div>
      </section>
      {/* Organizational Chart */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <OrganizationalChart />
        </div>
      </section>
      {/* Contact Form */}
      <section id="contact-form" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
      {/* Contact Channels */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactChannels />
        </div>
      </section>
      {/* Research Collaboration */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ResearchCollaboration />
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialsSection />
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSection />
        </div>
      </section>
      {/* Newsletter Signup */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <svg width="40" height="40" viewBox="0 0 40 40" className="text-primary">
                    <circle cx="20" cy="8" r="4" fill="currentColor" className="text-accent" />
                    <circle cx="20" cy="20" r="4" fill="currentColor" className="text-secondary" />
                    <circle cx="20" cy="32" r="4" fill="currentColor" className="text-primary" />
                    <rect x="18" y="12" width="4" height="8" fill="currentColor" className="text-background" />
                    <rect x="18" y="24" width="4" height="8" fill="currentColor" className="text-background" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">TrafficFlow AI</h3>
                  <p className="text-background/70">Smart Traffic Control</p>
                </div>
              </div>
              <p className="text-background/80 mb-6 max-w-md">
                Revolutionizing urban transportation through AI-powered traffic optimization. 
                Making cities smarter, cleaner, and more efficient.
              </p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-smooth">
                  <Icon name="Linkedin" size={20} className="text-background" />
                </button>
                <button className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-smooth">
                  <Icon name="Twitter" size={20} className="text-background" />
                </button>
                <button className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-smooth">
                  <Icon name="Github" size={20} className="text-background" />
                </button>
                <button className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-smooth">
                  <Icon name="Youtube" size={20} className="text-background" />
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="/home-dashboard" className="hover:text-primary transition-smooth">Home</a></li>
                <li><a href="/use-cases-benefits" className="hover:text-primary transition-smooth">Use Cases</a></li>
                <li><a href="/rl-agent-dashboard" className="hover:text-primary transition-smooth">RL Agent</a></li>
                <li><a href="/analytics-dashboard" className="hover:text-primary transition-smooth">Analytics</a></li>
                <li><a href="/project-timeline-milestones" className="hover:text-primary transition-smooth">Timeline</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-background/80">
                <li className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>contact@trafficflow-ai.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Tech Valley, CA 94025</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
            <p>&copy; {new Date()?.getFullYear()} TrafficFlow AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactTeamInformation;