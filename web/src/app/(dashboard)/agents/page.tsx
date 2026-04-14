import React from 'react';
import { 
  Users, 
  Plus, 
  Phone, 
  Settings, 
  Trash2,
  Zap,
  MoreVertical
} from 'lucide-react';

const mockAgents = [
  { id: '1', name: 'Agente Tesorería', phoneNumber: '+56 9 8765 4321', status: 'active', commands: 450 },
  { id: '2', name: 'Control de Acceso Infra', phoneNumber: '+56 9 1234 5678', status: 'idle', commands: 120 },
];

export default function AgentsPage() {
  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center text-left">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2 tracking-tighter">Mis Agentes de IA</h2>
          <p className="text-gray-400">Gestiona tus números asignados y sus capacidades operativas vía SMS.</p>
        </div>
        <button className="btn-primary px-6 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-brand/20 hover:scale-105 transition-all">
          <Plus className="w-5 h-5" /> Adquirir Nuevo Agente
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockAgents.map((agent) => (
          <div key={agent.id} className="bg-[var(--dark2)] border border-[var(--border)] rounded-[32px] p-8 relative overflow-hidden group hover:border-brand/40 transition-all">
            <div className="absolute top-0 right-0 p-4">
              <button className="text-gray-500 hover:text-white transition-colors p-2">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-brand/10 border border-brand/20 rounded-2xl flex items-center justify-center">
                <Zap className="w-7 h-7 text-brand" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">{agent.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className={`w-2 h-2 rounded-full ${agent.status === 'active' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]' : 'bg-orange-500'}`}></div>
                  <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest">{agent.status}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="p-4 bg-black border border-white/5 rounded-2xl">
                <div className="text-[10px] text-gray-500 font-bold uppercase mb-1 flex items-center gap-1">
                  <Phone className="w-3 h-3 text-brand" /> Número Asignado
                </div>
                <div className="text-xl font-mono text-white tracking-widest">{agent.phoneNumber}</div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1 p-3 bg-black border border-white/5 rounded-2xl text-center">
                  <div className="text-[10px] text-gray-500 uppercase font-bold mb-1">Capacidad</div>
                  <div className="text-sm font-bold text-white">{agent.commands} / 1000</div>
                </div>
                <div className="flex-1 p-3 bg-black border border-white/5 rounded-2xl text-center">
                  <div className="text-[10px] text-gray-500 uppercase font-bold mb-1">Red</div>
                  <div className="text-sm font-bold text-green-500">GSM/LTE</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
              <button className="flex items-center justify-center gap-2 text-sm text-gray-400 hover:text-white transition-colors py-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10">
                <Settings className="w-4 h-4" /> Configurar
              </button>
              <button className="flex items-center justify-center gap-2 text-sm text-red-500/70 hover:text-red-500 transition-colors py-3 rounded-xl hover:bg-red-500/5">
                <Trash2 className="w-4 h-4" /> Retirar
              </button>
            </div>
          </div>
        ))}

        <div className="border-2 border-dashed border-white/10 rounded-[32px] flex flex-col items-center justify-center p-12 text-center group hover:border-brand/40 transition-all cursor-pointer bg-white/[0.01]">
          <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform">
            <Plus className="w-8 h-8 text-gray-500 group-hover:text-brand" />
          </div>
          <h3 className="font-bold text-gray-400 mb-2">Desplegar Nueva Instancia</h3>
          <p className="text-xs text-gray-600 max-w-[200px]">Adquiere una nueva línea SIM dedicada con IA integrada.</p>
        </div>
      </div>
    </div>
  );
}
