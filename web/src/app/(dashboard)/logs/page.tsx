import React from 'react';
import { MessageSquare, Search, Filter, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

const mockLogs = [
  { id: '1', content: 'ESTADO BATERIA UPS_01', type: 'IN', status: 'ENTREGADO', timestamp: '2026-04-13 18:20:12', agent: 'Infra' },
  { id: '2', content: 'UPS_01: Carga 85%, Autonomía 4h 12min', type: 'OUT', status: 'ENVIADO', timestamp: '2026-04-13 18:20:15', agent: 'Infra' },
  { id: '3', content: 'TRANSFERENCIA APROBADA ID:99201', type: 'IN', status: 'ENTREGADO', timestamp: '2026-04-13 17:45:00', agent: 'Tesorería' },
  { id: '4', content: 'ERROR: Fondos insuficientes para ID:99201', type: 'OUT', status: 'ERROR', timestamp: '2026-04-13 17:45:05', agent: 'Tesorería' },
];

export default function LogsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center text-left">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2 tracking-tighter">Historial de Operaciones SMS</h2>
          <p className="text-gray-400">Auditoría completa de interacciones entre tus números autorizados y los agentes IA.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold text-gray-300 hover:text-white hover:bg-white/10 transition-all">
          <Download className="w-4 h-4" /> Exportar Logs
        </button>
      </div>

      <div className="bg-[var(--dark2)] border border-[var(--border)] rounded-[32px] overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-white/5 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Buscar por contenido, número o agente..." 
              className="w-full bg-black border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-brand/50 transition-colors"
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 rounded-2xl text-sm text-gray-400 hover:text-white transition-all">
              <Filter className="w-4 h-4" /> Filtrar
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/5 text-gray-400 text-[10px] uppercase tracking-[0.2em] font-black">
                <th className="px-8 py-5">Contenido / Comando</th>
                <th className="px-6 py-5">Tipo</th>
                <th className="px-6 py-5">Agente</th>
                <th className="px-6 py-5">Estado</th>
                <th className="px-8 py-5 text-right">Fecha / Hora</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {mockLogs.map((log) => (
                <tr key={log.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-8 py-5">
                    <span className="font-mono text-xs text-gray-300 group-hover:text-white transition-colors">
                      {log.content}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className={cn(
                      "text-[10px] font-black px-2 py-1 rounded-md",
                      log.type === 'IN' ? "text-blue-400 bg-blue-500/10" : "text-brand bg-brand/10"
                    )}>
                      {log.type}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-sm text-gray-400 italic">
                    {log.agent}
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <div className={cn(
                        "w-1.5 h-1.5 rounded-full shadow-[0_0_8px]",
                        log.status === 'ERROR' ? "bg-red-500 shadow-red-500/50" : "bg-green-500 shadow-green-500/50"
                      )}></div>
                      <span className="text-xs text-gray-500">{log.status}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-right text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                    {log.timestamp}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
