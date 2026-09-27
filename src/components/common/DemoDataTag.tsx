import React from 'react';
import { Database } from 'lucide-react';

interface DemoDataTagProps {
  label?: string;
  className?: string;
}

export const DemoDataTag: React.FC<DemoDataTagProps> = ({
  label = 'Prototype / Demo Dataset',
  className = ''
}) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30 tracking-wide uppercase ${className}`}
      title="This metric is calculated using simulated demo data for prototype evaluation."
    >
      <Database className="w-3 h-3 text-amber-400" />
      {label}
    </span>
  );
};
