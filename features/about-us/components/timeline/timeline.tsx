import React from 'react';
import TimelineHeader from './timeline-header';
import TimelineList from './timeline-list';

const Timeline = () => {
  return (
    <section className="py-16 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TimelineHeader />
        <TimelineList />
      </div>
    </section>
  );
};

export default Timeline;
