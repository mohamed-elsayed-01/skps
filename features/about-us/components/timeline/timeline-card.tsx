import React from 'react';
import { Milestone } from '@/features/about-us/interfaces';

interface TimelineCardProps {
  milestone: Milestone;
}

const TimelineCard = ({ milestone }: TimelineCardProps) => {
  return (
    <div className="p-6 bg-white rounded-lg">
      <span className="inline-block mb-2 text-[20px] tracking-wider text-accent">
        {milestone.year}
      </span>
      <h3 className="text-[20px] mb-3">{milestone.title}</h3>
      <p className="text-[#4B5563]">{milestone.description}</p>
    </div>
  );
};

export default TimelineCard;
