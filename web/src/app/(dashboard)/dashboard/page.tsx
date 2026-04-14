import React from 'react';
import { 
  Zap, 
  Users, 
  MessageSquare, 
  ShieldCheck, 
  ArrowUpRight,
  Target,
  Activity,
  Lock
} from 'lucide-react';
import StatsCard from '@/components/dashboard/StatsCard';
import ActivityChart from '@/components/dashboard/ActivityChart';
import RecentLogs from '@/components/dashboard/RecentLogs';

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Panel Operativo</h2>
          <p className="text-gray-400">Estado global de tus agentes de IA e infraestructura móvil.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-xs font-bold text-gray-300">SISTEMA ONLINE</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard 
          title="Agentes Activos" 
          value="12" 
          change="+2 hoy" 
          trend="up" 
          icon={Zap} 
          iconColor="text-brand" 
        />
        <StatsCard 
          title="Mensajes SMS Hoy" 
          value="1,284" 
          change="+15%" 
          trend="up" 
          icon={MessageSquare} 
          iconColor="text-blue-500" 
        />
        <StatsCard 
          title="SLA Operativo" 
          value="99.98%" 
          change="Estable" 
          trend="neutral" 
          icon={Target} 
          iconColor="text-green-500" 
        />
        <StatsCard 
          title="Acciones Bloqueadas" 
          value="4" 
          change="-20%" 
          trend="up" 
          icon={Lock} 
          iconColor="text-orange-500" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ActivityChart />
        </div>
        <div className="space-y-8">
          <div className="bg-brand/10 border border-brand/20 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group">
            <div className="relative z-10">
              <Activity className="w-10 h-10 text-brand mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Latencia de Respuesta</h3>
              <p className="text-3xl font-black text-brand mb-1">~2.4s</p>
              <p className="text-xs text-brand/60 uppercase font-black tracking-widest">Optimizado para Red 4G/5G</p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/20 blur-[60px] rounded-full group-hover:scale-125 transition-transform" />
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Status por Canal</h3>
            <div className="space-y-4">
              {['Amazon AWS', 'Google Cloud', 'Local SIM Card'].map((channel) => (
                <div key={channel} className="flex justify-between items-center px-4 py-3 bg-black rounded-xl border border-white/5">
                  <span className="text-sm text-gray-300">{channel}</span>
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <RecentLogs />
    </div>
  );
}
