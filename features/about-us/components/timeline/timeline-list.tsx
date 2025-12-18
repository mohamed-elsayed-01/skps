import React from 'react';
import { milestones } from '@/features/about-us/constants';
import TimelineCard from './timeline-card';

const TimelineList = () => {

const RENDER_MILESTONES = milestones.map((milestone, index) => (
  <div key={index} className={`relative flex items-center justify-between md:justify-normal ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
    
    {/* Dot */}
    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-white shadow"></div>

    {/* Content - Right side for odd, Left side for even (reversed by flex-row-reverse) */}
    <div className={`w-full md:w-5/12 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 text-left md:text-right'}`}>
      <TimelineCard milestone={milestone} />
    </div>
    
    {/* Spacer for the other side */}
    <div className="hidden md:block md:w-5/12"></div>
  </div>
))

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

      <div className="space-y-12">
{RENDER_MILESTONES}
      </div>
    </div>
  );
};

export default TimelineList;
