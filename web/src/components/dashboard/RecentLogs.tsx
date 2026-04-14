import React from 'react';
import { MessageSquare, ArrowDownLeft, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const mockLogs = [
  { id: 1, content: 'AUTORIZAR PAGO PROVEEDOR 442', type: 'IN', status: 'COMPLETADO', time: 'hace 2 min', agent: 'Tesorería' },
  { id: 2, content: 'Acción ejecutada: Pago procesado exitosamente', type: 'OUT', status: 'ENVIADO', time: 'hace 2 min', agent: 'Tesorería' },
  { id: 3, content: 'REINICIAR SERVIDOR NODE_01', type: 'IN', status: 'ERROR', time: 'hace 15 min', agent: 'Infra' },
  { id: 4, content: 'ALERTA: Intento de acceso no autorizado (+569000...)', type: 'OUT', status: 'BLOQUEADO', time: 'hace 1 h', agent: 'Seguridad' },
];

export default function RecentLogs() {
  return (
    <div className="bg-[var(--dark2)] border border-[var(--border)] rounded-3xl p-8 shadow-xl">
      <h3 className="text-xl font-bold mb-8 flex items-center gap-2 text-white">
        <MessageSquare className="w-5 h-5 text-blue-500" />
        Logs de Comandos Recientes
      </h3>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-[var(--border)] text-gray-500 text-[10px] uppercase tracking-widest font-bold">
              <th className="pb-4">Evento / Comando</th>
              <th className="pb-4 text-center">Tipo</th>
              <th className="pb-4">Estado</th>
              <th className="pb-4">Agente</th>
              <th className="pb-4 text-right">Tiempo</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)]">
            {mockLogs.map((log) => (
              <tr key={log.id} className="group hover:bg-white/[0.02] transition-colors">
                <td className="py-4 font-mono text-xs text-gray-300 group-hover:text-white">
                  {log.content}
                </td>
                <td className="py-4 text-center">
                  {log.type === 'IN' ? (
                    <ArrowDownLeft className="w-4 h-4 text-blue-400 inline" />
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-purple-400 inline" />
                  )}
                </td>
                <td className="py-4">
                  <span className={cn(
                    "px-2 py-1 rounded text-[10px] font-bold uppercase",
                    log.status === 'COMPLETADO' && "bg-green-500/10 text-green-500",
                    log.status === 'ENVIADO' && "bg-blue-500/10 text-blue-500",
                    log.status === 'ERROR' && "bg-red-500/10 text-red-500",
                    log.status === 'BLOQUEADO' && "bg-orange-500/10 text-orange-500",
                  )}>
                    {log.status}
                  </span>
                </td>
                <td className="py-4 text-sm text-gray-400 italic">{log.agent}</td>
                <td className="py-4 text-right text-xs text-gray-500">{log.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
