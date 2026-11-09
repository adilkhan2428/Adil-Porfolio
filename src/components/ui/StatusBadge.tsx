import React from 'react';

interface StatusBadgeProps {
  status: string;
  size?: 'sm' | 'md';
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'sm', className = '' }) => {
  const getBadgeStyle = () => {
    switch (status) {
      case 'Currently Learning':
      case 'In Progress':
        return {
          bg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
          dot: 'bg-emerald-400 animate-pulse'
        };
      case 'Practicing Through Projects':
      case 'Active Prototype':
        return {
          bg: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
          dot: 'bg-sky-400 animate-pulse'
        };
      case 'Future Learning':
      case 'Planned Prototype':
      case 'Not Started':
        return {
          bg: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
          dot: 'bg-purple-400'
        };
      case 'In Development':
        return {
          bg: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
          dot: 'bg-amber-400 animate-pulse'
        };
      case 'Architecture & Design':
        return {
          bg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
          dot: 'bg-indigo-400'
        };
      case 'Completed':
        return {
          bg: 'bg-teal-500/10 text-teal-400 border-teal-500/30',
          dot: 'bg-teal-400'
        };
      default:
        return {
          bg: 'bg-slate-500/10 text-slate-400 border-slate-500/30',
          dot: 'bg-slate-400'
        };
    }
  };

  const { bg, dot } = getBadgeStyle();
  const sizeClasses = size === 'sm' ? 'text-xs px-2.5 py-0.5' : 'text-sm px-3.5 py-1';

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-full border ${bg} ${sizeClasses} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
      <span>{status}</span>
    </span>
  );
};

