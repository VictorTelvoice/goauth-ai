import React from 'react';
import Link from 'next/link';
import { 
  BarChart3, 
  Users, 
  Settings as SettingsIcon, 
  ShieldAlert,
  Menu,
  Bell,
  Search
} from 'lucide-react';

const adminSidebarItems = [
  { icon: BarChart3, label: 'Panel Global', href: '/admin/dashboard' },
  { icon: Users, label: 'Gestión Usuarios', href: '/admin/users' },
  { icon: ShieldAlert, label: 'Métricas Sistema', href: '/admin/metrics' },
  { icon: SettingsIcon, label: 'Configuración Global', href: '/admin/settings' },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Admin Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-[#0A0A14] flex flex-col sticky top-0 h-screen z-50">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center shrink-0">
            <ShieldAlert className="w-5 h-5 text-black" />
          </div>
          <span className="font-black tracking-tighter text-xl">Admin</span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {adminSidebarItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 text-gray-500 hover:text-white transition-all group"
            >
              <item.icon className="w-5 h-5 group-hover:text-accent" />
              <span className="text-sm font-bold">{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content Container */}
      <main className="flex-1 min-w-0 flex flex-col min-h-screen">
        {/* Admin Topbar */}
        <header className="h-16 border-b border-white/5 bg-black/50 backdrop-blur-xl flex items-center justify-between px-8 sticky top-0 z-40 shrink-0">
          <div className="flex-1 max-w-xl relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Buscar usuarios, logs, reportes..." 
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-xs focus:outline-none focus:border-accent/50"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-white/5 rounded-lg transition-colors text-gray-400">
              <Bell className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 ml-4">
              <div className="text-right">
                <p className="text-xs font-black">Admin Root</p>
                <p className="text-[10px] text-accent uppercase font-bold">Super Admin</p>
              </div>
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <ShieldAlert className="w-4 h-4 text-black" />
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-[1600px] mx-auto p-6 md:p-10">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
