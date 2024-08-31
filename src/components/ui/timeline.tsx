import React from 'react';

export interface ITimelineContent {
  date: string;
  children: React.ReactNode;
}

const TimelineContent: React.FC<ITimelineContent> = ({ date, children }) => {
  return (
    <div className="grid gap-1 text-sm relative px-4">
      <div className="aspect-square w-3 bg-imperial-red rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2.5" />
      <div className="text-lg font-bold">{date}</div>
      <div className="text-gray-500 dark:text-gray-400">{children}</div>
    </div>
  );
};

const Timeline: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="px-6">
      <div className="after:absolute after:inset-y-0 after:w-px after:bg-white/20 relative pl-6 after:left-0 grid gap-4">
        {children}
      </div>
    </div>
  );
};

export { Timeline, TimelineContent };
