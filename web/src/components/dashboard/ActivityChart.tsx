'use client';

import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const data = [
  { name: 'Lun', traffic: 4000 },
  { name: 'Mar', traffic: 3000 },
  { name: 'Mie', traffic: 2000 },
  { name: 'Jue', traffic: 2780 },
  { name: 'Vie', traffic: 1890 },
  { name: 'Sab', traffic: 2390 },
  { name: 'Dom', traffic: 3490 },
];

export default function ActivityChart() {
  return (
    <div className="h-[400px] w-full bg-[var(--dark2)] border border-[var(--border)] rounded-3xl p-8">
      <h3 className="text-xl font-bold mb-8 text-white">Volumen de Comandos SMS</h3>
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6C3BFF" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#6C3BFF" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff08" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#666', fontSize: 12 }}
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#666', fontSize: 12 }} 
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#0A0A14', border: '1px solid #ffffff10', borderRadius: '12px' }}
            itemStyle={{ color: '#ffffff' }}
          />
          <Area 
            type="monotone" 
            dataKey="traffic" 
            stroke="#6C3BFF" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorTraffic)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
