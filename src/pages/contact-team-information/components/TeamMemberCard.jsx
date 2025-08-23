import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TeamMemberCard = ({ member }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-card rounded-xl p-6 card-elevation transition-smooth hover:shadow-modal">
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-4">
          <Image
            src={member?.image}
            alt={member?.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
          />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-success rounded-full border-2 border-card flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-foreground mb-1">{member?.name}</h3>
        <p className="text-primary font-medium mb-2">{member?.role}</p>
        <p className="text-muted-foreground text-sm mb-4">{member?.department}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {member?.expertise?.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3 mb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.open(`mailto:${member?.email}`, '_blank')}
            className="text-muted-foreground hover:text-primary"
          >
            <Icon name="Mail" size={18} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.open(member?.linkedin, '_blank')}
            className="text-muted-foreground hover:text-primary"
          >
            <Icon name="Linkedin" size={18} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.open(member?.github, '_blank')}
            className="text-muted-foreground hover:text-primary"
          >
            <Icon name="Github" size={18} />
          </Button>
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
          iconPosition="right"
          className="w-full"
        >
          {isExpanded ? 'Show Less' : 'View Details'}
        </Button>
        
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-border w-full">
            <div className="text-left space-y-3">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Biography</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member?.biography}
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2">Education</h4>
                <p className="text-muted-foreground text-sm">{member?.education}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2">Publications</h4>
                <div className="space-y-1">
                  {member?.publications?.map((pub, index) => (
                    <p key={index} className="text-muted-foreground text-sm">
                      • {pub}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;