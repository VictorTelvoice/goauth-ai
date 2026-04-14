import React from 'react';

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black tracking-tighter">Panel Administrativo</h1>
        <p className="text-gray-500">Métricas globales y estado del sistema</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="dashboard-card-premium p-6 border-l-4 border-accent">
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Total Usuarios</p>
          <h3 className="text-4xl font-black">15.4k</h3>
        </div>
        <div className="dashboard-card-premium p-6 border-l-4 border-brand">
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Suscripciones Activas</p>
          <h3 className="text-4xl font-black">$42.8k</h3>
        </div>
        <div className="dashboard-card-premium p-6 border-l-4 border-red-500">
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Alertas Sistema</p>
          <h3 className="text-4xl font-black">2</h3>
        </div>
      </div>

      <div className="dashboard-card-premium p-8 h-[500px] flex items-center justify-center border-dashed border-white/10">
        <p className="text-gray-500 font-bold italic">Panel de Métricas Globales (En construcción)</p>
      </div>
    </div>
  );
}
