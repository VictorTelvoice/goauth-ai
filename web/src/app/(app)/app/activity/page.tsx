import React from 'react';
import { Activity as ActivityIcon, Clock, Filter } from 'lucide-react';

export default function ActivityPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black tracking-tighter">Historial de Actividad</h1>
          <p className="text-gray-500">Registro detallado de todos los eventos y comandos</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-bold hover:bg-white/10">
          <Filter className="w-4 h-4" />
          Filtrar
        </button>
      </div>

      <div className="dashboard-card-premium overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/5 bg-white/[0.02]">
              <th className="p-4 text-[10px] font-black uppercase tracking-widest text-gray-500">Evento</th>
              <th className="p-4 text-[10px] font-black uppercase tracking-widest text-gray-500">Agente</th>
              <th className="p-4 text-[10px] font-black uppercase tracking-widest text-gray-500">Fecha</th>
              <th className="p-4 text-[10px] font-black uppercase tracking-widest text-gray-500">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((row) => (
              <tr key={row} className="hover:bg-white/[0.01] transition-colors">
                <td className="p-4 text-sm font-bold flex items-center gap-3">
                  <ActivityIcon className="w-4 h-4 text-brand" />
                  Comando: Auth_Reset
                </td>
                <td className="p-4 text-sm text-gray-400">Agent-0X42</td>
                <td className="p-4 text-sm text-gray-400">12 de Abril, 2026</td>
                <td className="p-4">
                  <span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase rounded-md border border-emerald-500/20">
                    Completado
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
