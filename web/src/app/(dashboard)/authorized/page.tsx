import React from 'react';
import { ShieldCheck, Plus, Trash2, Phone, User as UserIcon } from 'lucide-react';

const mockAuthorized = [
  { id: '1', phoneNumber: '+56 9 8765 4321', label: 'Celular Personal CEO' },
  { id: '2', phoneNumber: '+56 9 1234 5678', label: 'Admin Corporativo TI' },
];

export default function AuthorizedNumbersPage() {
  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center text-left">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-green-500" />
            Lista Blanca de Seguridad
          </h2>
          <p className="text-gray-400">Sólo los números registrados en esta lista pueden enviar comandos a tus agentes asignados.</p>
        </div>
        <button className="btn-primary px-6 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-brand/20 hover:scale-105 transition-all">
          <Plus className="w-5 h-5" /> Autorizar Nuevo Número
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockAuthorized.map((item) => (
          <div key={item.id} className="bg-[var(--dark2)] border border-[var(--border)] rounded-[32px] p-8 group hover:border-green-500/30 transition-all shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <button className="text-gray-500 hover:text-red-400 transition-colors p-2">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center justify-center">
                <ShieldCheck className="w-7 h-7 text-green-500" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">{item.label}</h3>
                <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Acceso Total</span>
              </div>
            </div>

            <div className="p-5 bg-black border border-white/5 rounded-2xl mb-6">
              <div className="text-[10px] text-gray-500 font-bold uppercase mb-1 flex items-center gap-1">
                <Phone className="w-3 h-3 text-green-500" /> Número Autorizado
              </div>
              <div className="text-xl font-mono text-white tracking-[0.2em]">{item.phoneNumber}</div>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-500 italic">
              <UserIcon className="w-3 h-3" /> Vinculado a tu cuenta corporativa
            </div>
          </div>
        ))}

        <div className="border-2 border-dashed border-white/10 rounded-[32px] flex flex-col items-center justify-center p-12 text-center group hover:border-green-500/30 transition-all cursor-pointer bg-white/[0.01]">
          <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform">
            <Plus className="w-8 h-8 text-gray-500 group-hover:text-green-500" />
          </div>
          <h3 className="font-bold text-gray-400 mb-2">Añadir Número de Confianza</h3>
          <p className="text-xs text-gray-600 max-w-[200px]">Cualquier comando enviado desde este número será procesado por la IA con privilegios administrativos.</p>
        </div>
      </div>
    </div>
  );
}
