import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Users, 
  TrendingUp,
  Plus
} from 'lucide-react';

const stats = [
  { label: 'Agentes Activos', value: '12', icon: Zap, color: 'text-brand' },
  { label: 'Comandos Ejecutados', value: '1,284', icon: ShieldCheck, color: 'text-accent' },
  { label: 'Usuarios Autorizados', value: '45', icon: Users, color: 'text-blue-500' },
  { label: 'Tasa de Éxito', value: '99.9%', icon: TrendingUp, color: 'text-emerald-500' },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black tracking-tighter">Panel de Control</h1>
          <p className="text-gray-500">Bienvenido de nuevo a GoAuth.ai</p>
        </div>
        <button className="btn-primary px-6 py-3 rounded-xl flex items-center gap-2 font-bold transition-all hover:scale-105">
          <Plus className="w-5 h-5" />
          Nuevo Agente
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="dashboard-card-premium p-6 flex items-center gap-4">
            <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">{stat.label}</p>
              <h3 className="text-2xl font-black">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 dashboard-card-premium p-8 h-[400px] flex items-center justify-center border-dashed border-white/10">
          <div className="text-center">
            <Activity className="w-12 h-12 text-gray-700 mx-auto mb-4" />
            <p className="text-gray-500 font-bold">Gráfico de Actividad (Próximamente)</p>
          </div>
        </div>
        <div className="dashboard-card-premium p-8 h-[400px]">
          <h4 className="font-black mb-6">Actividad Reciente</h4>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-4 py-3 border-b border-white/5 last:border-0">
                <div className="w-2 h-2 rounded-full bg-brand"></div>
                <div>
                  <p className="text-sm font-bold">Comando Ejecutado</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">Hace {i * 5} min</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { Activity } from 'lucide-react';
