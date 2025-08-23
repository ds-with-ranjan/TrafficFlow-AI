import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const OrganizationalChart = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const organizationData = {
    director: {
      id: 'director',
      name: 'Dr. Sarah Chen',
      role: 'Project Director',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      department: 'Leadership',
      reports: ['ai-lead', 'cv-lead', 'eng-lead']
    },
    'ai-lead': {
      id: 'ai-lead',
      name: 'Dr. Michael Rodriguez',
      role: 'AI Research Lead',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      department: 'Artificial Intelligence',
      reports: ['ml-dev1', 'ml-dev2']
    },
    'cv-lead': {
      id: 'cv-lead',
      name: 'Dr. Emily Watson',
      role: 'Computer Vision Lead',
      image: 'https://randomuser.me/api/portraits/women/28.jpg',
      department: 'Computer Vision',
      reports: ['cv-dev1', 'cv-dev2']
    },
    'eng-lead': {
      id: 'eng-lead',
      name: 'James Thompson',
      role: 'Engineering Lead',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
      department: 'Systems Engineering',
      reports: ['sys-dev1', 'sys-dev2']
    },
    'ml-dev1': {
      id: 'ml-dev1',
      name: 'Alex Kumar',
      role: 'ML Engineer',
      image: 'https://randomuser.me/api/portraits/men/25.jpg',
      department: 'Artificial Intelligence',
      reports: []
    },
    'ml-dev2': {
      id: 'ml-dev2',
      name: 'Lisa Park',
      role: 'RL Specialist',
      image: 'https://randomuser.me/api/portraits/women/31.jpg',
      department: 'Artificial Intelligence',
      reports: []
    },
    'cv-dev1': {
      id: 'cv-dev1',
      name: 'David Wilson',
      role: 'CV Engineer',
      image: 'https://randomuser.me/api/portraits/men/38.jpg',
      department: 'Computer Vision',
      reports: []
    },
    'cv-dev2': {
      id: 'cv-dev2',
      name: 'Maria Garcia',
      role: 'Image Processing Specialist',
      image: 'https://randomuser.me/api/portraits/women/35.jpg',
      department: 'Computer Vision',
      reports: []
    },
    'sys-dev1': {
      id: 'sys-dev1',
      name: 'Robert Lee',
      role: 'Systems Architect',
      image: 'https://randomuser.me/api/portraits/men/42.jpg',
      department: 'Systems Engineering',
      reports: []
    },
    'sys-dev2': {
      id: 'sys-dev2',
      name: 'Jennifer Brown',
      role: 'DevOps Engineer',
      image: 'https://randomuser.me/api/portraits/women/29.jpg',
      department: 'Systems Engineering',
      reports: []
    }
  };

  const departmentColors = {
    'Leadership': 'bg-primary/10 border-primary/30',
    'Artificial Intelligence': 'bg-blue-50 border-blue-200',
    'Computer Vision': 'bg-purple-50 border-purple-200',
    'Systems Engineering': 'bg-orange-50 border-orange-200'
  };

  const MemberNode = ({ memberId, level = 0 }) => {
    const member = organizationData?.[memberId];
    if (!member) return null;

    return (
      <div className="flex flex-col items-center">
        <div
          className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
            departmentColors?.[member?.department] || 'bg-muted border-border'
          } ${selectedMember === memberId ? 'ring-2 ring-primary' : ''}`}
          onClick={() => setSelectedMember(selectedMember === memberId ? null : memberId)}
        >
          <div className="flex flex-col items-center space-y-2">
            <Image
              src={member?.image}
              alt={member?.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
            />
            <div className="text-center">
              <h4 className="font-semibold text-foreground text-sm">{member?.name}</h4>
              <p className="text-xs text-muted-foreground">{member?.role}</p>
            </div>
          </div>
          
          {selectedMember === memberId && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-card border border-border rounded-lg p-3 shadow-lg z-10 w-64">
              <div className="text-center space-y-2">
                <h5 className="font-semibold text-foreground">{member?.name}</h5>
                <p className="text-sm text-primary">{member?.role}</p>
                <p className="text-xs text-muted-foreground">{member?.department}</p>
                <div className="flex justify-center space-x-2 pt-2">
                  <button className="p-1 hover:bg-muted rounded">
                    <Icon name="Mail" size={16} className="text-muted-foreground" />
                  </button>
                  <button className="p-1 hover:bg-muted rounded">
                    <Icon name="Phone" size={16} className="text-muted-foreground" />
                  </button>
                  <button className="p-1 hover:bg-muted rounded">
                    <Icon name="MessageSquare" size={16} className="text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        {member?.reports && member?.reports?.length > 0 && (
          <div className="mt-8">
            <div className="flex justify-center mb-4">
              <div className="w-px h-8 bg-border"></div>
            </div>
            <div className="flex justify-center space-x-8">
              {member?.reports?.map((reportId) => (
                <div key={reportId} className="relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-px h-4 bg-border"></div>
                  <MemberNode memberId={reportId} level={level + 1} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-card rounded-xl p-8 card-elevation">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold text-foreground">Team Structure</h3>
          <p className="text-muted-foreground">Interactive organizational chart</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="Info" size={16} />
            <span>Click members for details</span>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="min-w-full flex justify-center py-8">
          <MemberNode memberId="director" />
        </div>
      </div>
      {/* Department Legend */}
      <div className="mt-8 pt-6 border-t border-border">
        <h4 className="font-semibold text-foreground mb-4">Departments</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(departmentColors)?.map(([dept, colorClass]) => (
            <div key={dept} className="flex items-center space-x-2">
              <div className={`w-4 h-4 rounded border-2 ${colorClass}`}></div>
              <span className="text-sm text-muted-foreground">{dept}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrganizationalChart;