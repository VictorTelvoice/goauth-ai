import React from 'react';

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black tracking-tighter">Configuración</h1>
        <p className="text-gray-500">Gestiona las preferencias de tu cuenta y seguridad</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="dashboard-card-premium p-8">
          <h3 className="font-black text-xl mb-6">Perfil de Usuario</h3>
          <div className="space-y-4">
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-2">Nombre</label>
              <input type="text" className="w-full bg-black border border-white/10 rounded-xl p-3 text-sm" placeholder="John Doe" />
            </div>
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-2">Email</label>
              <input type="email" className="w-full bg-black border border-white/10 rounded-xl p-3 text-sm" placeholder="john@example.com" />
            </div>
            <button className="btn-primary px-6 py-2 rounded-xl text-sm font-bold">Guardar Cambios</button>
          </div>
        </div>

        <div className="dashboard-card-premium p-8">
          <h3 className="font-black text-xl mb-6">Seguridad</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
              <div>
                <p className="font-bold">2FA Autenticación</p>
                <p className="text-xs text-gray-500">Añade una capa extra de seguridad</p>
              </div>
              <div className="w-12 h-6 bg-gray-800 rounded-full relative">
                <div className="absolute left-1 top-1 w-4 h-4 bg-gray-500 rounded-full"></div>
              </div>
            </div>
            <button className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-bold hover:bg-white/10 transition-colors">
              Cambiar Contraseña
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
