import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CaseStudyCard = ({ caseStudy }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start space-x-4">
          <Image
            src={caseStudy?.avatar}
            alt={caseStudy?.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1">
            <h4 className="font-semibold text-foreground">{caseStudy?.name}</h4>
            <p className="text-sm text-muted-foreground">{caseStudy?.title}</p>
            <p className="text-xs text-muted-foreground mt-1">{caseStudy?.location}</p>
          </div>
          <div className="flex items-center space-x-1">
            {[...Array(5)]?.map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={14}
                className={i < caseStudy?.rating ? "text-secondary fill-current" : "text-muted-foreground/30"}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Quote */}
      <div className="px-6 pb-4">
        <blockquote className="text-sm text-foreground leading-relaxed italic">
          "{caseStudy?.quote}"
        </blockquote>
      </div>
      {/* Key Results */}
      <div className="px-6 pb-4">
        <div className="grid grid-cols-3 gap-4">
          {caseStudy?.keyResults?.map((result, index) => (
            <div key={index} className="text-center">
              <div className="text-lg font-bold text-primary">{result?.value}</div>
              <div className="text-xs text-muted-foreground">{result?.label}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Expandable Details */}
      {isExpanded && (
        <div className="px-6 pb-4 border-t border-border pt-4">
          <div className="space-y-4">
            <div>
              <h5 className="font-medium text-foreground mb-2">Implementation Details</h5>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {caseStudy?.implementationDetails}
              </p>
            </div>
            
            <div>
              <h5 className="font-medium text-foreground mb-2">Challenges Overcome</h5>
              <ul className="space-y-1">
                {caseStudy?.challenges?.map((challenge, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                    <Icon name="CheckCircle" size={14} className="text-success mt-0.5 flex-shrink-0" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium text-foreground mb-2">Timeline</h5>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Calendar" size={14} />
                <span>Implementation: {caseStudy?.timeline?.implementation}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                <Icon name="TrendingUp" size={14} />
                <span>Results visible: {caseStudy?.timeline?.results}</span>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Footer */}
      <div className="px-6 py-4 bg-muted/30 border-t border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
            <span className="flex items-center space-x-1">
              <Icon name="MapPin" size={12} />
              <span>{caseStudy?.projectSize}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Icon name="Clock" size={12} />
              <span>{caseStudy?.duration}</span>
            </span>
          </div>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center space-x-1 text-xs text-primary hover:text-primary/80 transition-colors"
          >
            <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
            <Icon name={isExpanded ? 'ChevronUp' : 'ChevronDown'} size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;