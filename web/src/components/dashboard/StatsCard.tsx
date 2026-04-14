import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  icon: LucideIcon;
  iconColor: string;
}

export default function StatsCard({ 
  title, 
  value, 
  change, 
  trend, 
  icon: Icon,
  iconColor 
}: StatsCardProps) {
  return (
    <div className="bg-[var(--dark2)] border border-[var(--border)] rounded-3xl p-8 hover:border-white/20 transition-all group overflow-hidden relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[50px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-brand/10 transition-colors" />
      
      <div className="flex justify-between items-start mb-6">
        <div className={cn("p-3 rounded-2xl bg-white/5", iconColor)}>
          <Icon className="w-6 h-6" />
        </div>
        <div className={cn(
          "text-xs font-bold px-2 py-1 rounded-lg",
          trend === 'up' ? "bg-green-500/10 text-green-500" : 
          trend === 'down' ? "bg-red-500/10 text-red-500" : "bg-gray-500/10 text-gray-500"
        )}>
          {change}
        </div>
      </div>

      <div>
        <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
        <p className="text-3xl font-bold text-white tracking-tight">{value}</p>
      </div>
    </div>
  );
}
