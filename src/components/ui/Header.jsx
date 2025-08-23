import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    {
      label: 'Home',
      path: '/home-dashboard',
      icon: 'Home',
      description: 'Project overview and system introduction'
    },
    {
      label: 'Use Cases',
      path: '/use-cases-benefits',
      icon: 'Target',
      description: 'Real-world applications and benefits'
    },
    {
      label: 'RL Agent',
      path: '/rl-agent-dashboard',
      icon: 'Brain',
      description: 'Reinforcement learning algorithms'
    },
    {
      label: 'Analytics',
      path: '/analytics-dashboard',
      icon: 'BarChart3',
      description: 'Performance metrics and monitoring'
    },
    {
      label: 'Timeline',
      path: '/project-timeline-milestones',
      icon: 'Calendar',
      description: 'Project milestones and progress'
    },
    {
      label: 'Contact',
      path: '/contact-team-information',
      icon: 'Users',
      description: 'Team information and communication'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location?.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const Logo = () => (
    <Link to="/home-dashboard" className="flex items-center space-x-3 transition-smooth hover:opacity-80">
      <div className="relative">
        <svg width="40" height="40" viewBox="0 0 40 40" className="text-primary">
          <circle cx="20" cy="8" r="4" fill="currentColor" className="text-accent" />
          <circle cx="20" cy="20" r="4" fill="currentColor" className="text-secondary" />
          <circle cx="20" cy="32" r="4" fill="currentColor" className="text-primary" />
          <rect x="18" y="12" width="4" height="8" fill="currentColor" className="text-muted-foreground" />
          <rect x="18" y="24" width="4" height="8" fill="currentColor" className="text-muted-foreground" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-foreground font-heading">TrafficFlow AI</span>
        <span className="text-xs text-muted-foreground font-caption">Smart Traffic Control</span>
      </div>
    </Link>
  );

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-ios border-b border-border transition-all duration-300 ${scrolled ? 'shadow-card' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`group relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 hover:bg-muted ${
                    isActivePath(item?.path)
                      ? 'text-primary bg-primary/10' :'text-muted-foreground hover:text-foreground'
                  }`}
                  title={item?.description}
                >
                  <div className="flex items-center space-x-2">
                    <Icon name={item?.icon} size={16} />
                    <span>{item?.label}</span>
                  </div>
                  {isActivePath(item?.path) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                className="text-muted-foreground hover:text-foreground"
                aria-label="Toggle mobile menu"
              >
                <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
              </Button>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={toggleMobileMenu} />
          <div className="fixed top-20 left-0 right-0 bg-background border-b border-border shadow-modal animate-slide-in">
            <nav className="px-4 py-6 space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-150 ${
                    isActivePath(item?.path)
                      ? 'text-primary bg-primary/10 border-l-4 border-primary' :'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                  onClick={toggleMobileMenu}
                >
                  <Icon name={item?.icon} size={20} />
                  <div className="flex flex-col">
                    <span>{item?.label}</span>
                    <span className="text-xs text-muted-foreground font-caption">{item?.description}</span>
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
      {/* Spacer for fixed header */}
      <div className="h-20" />
    </>
  );
};

export default Header;