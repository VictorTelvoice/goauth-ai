'use client';

import React from 'react';
import { 
  Bot, 
  MoreVertical, 
  Phone, 
  Trash2, 
  Edit3, 
  Copy, 
  Activity,
  Zap
} from 'lucide-react';
import { toast } from 'sonner';
import { deleteAgent } from '@/app/(app)/app/agents/actions';

interface AgentCardProps {
  agent: {
    id: string;
    name: string;
    phoneNumber: string;
    status: string;
  };
}

export function AgentCard({ agent }: AgentCardProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(agent.phoneNumber);
    toast.success('Número copiado al portapapeles');
  };

  const handleDelete = async () => {
    if (confirm('¿Estás seguro de que deseas eliminar este agente?')) {
      try {
        await deleteAgent(agent.id);
        toast.success('Agente eliminado correctamente');
      } catch (error) {
        toast.error('Error al eliminar el agente');
      }
    }
  };

  return (
    <div className="dashboard-card-premium group hover:border-brand/40 transition-all duration-500 overflow-hidden relative">
      {/* Glow Effect on Hover */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand/5 blur-[80px] group-hover:bg-brand/10 transition-all duration-500 pointer-events-none" />
      
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-brand/30 transition-colors">
              <Bot className="w-6 h-6 text-brand" />
            </div>
            <div>
              <h3 className="font-black text-lg truncate max-w-[150px]">{agent.name}</h3>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">En Línea</span>
              </div>
            </div>
          </div>
          <button className="p-2 hover:bg-white/5 rounded-xl transition-colors text-gray-500">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>

        {/* Main Info */}
        <div className="space-y-4 mb-6">
          <div className="p-4 bg-black/40 rounded-2xl border border-white/5">
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Número Asignado</p>
            <div className="flex items-center justify-between gap-2">
              <span className="text-xl font-mono font-black tracking-tight">{agent.phoneNumber}</span>
              <button 
                onClick={copyToClipboard}
                className="p-2 hover:bg-brand/10 rounded-lg transition-colors text-brand"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="p-3 bg-white/5 rounded-xl border border-white/5">
            <div className="flex items-center gap-2 text-gray-500 mb-1">
              <Zap className="w-3 h-3" />
              <span className="text-[9px] font-black uppercase tracking-tight">Cargas Hoy</span>
            </div>
            <p className="text-sm font-black">24</p>
          </div>
          <div className="p-3 bg-white/5 rounded-xl border border-white/5">
            <div className="flex items-center gap-2 text-gray-500 mb-1">
              <Activity className="w-3 h-3" />
              <span className="text-[9px] font-black uppercase tracking-tight">Éxito</span>
            </div>
            <p className="text-sm font-black text-emerald-500">98%</p>
          </div>
        </div>

        {/* Actions Footer */}
        <div className="flex items-center gap-2 pt-4 border-t border-white/5">
          <button className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-all text-xs font-bold border border-white/5">
            <Edit3 className="w-3.5 h-3.5" />
            Editar
          </button>
          <button 
            onClick={handleDelete}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-red-500/5 hover:bg-red-500/10 transition-all text-red-500 border border-red-500/10"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
