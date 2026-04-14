'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Settings, 
  Activity, 
  User, 
  LogOut, 
  Menu, 
  X,
  Shield,
  Bell
} from 'lucide-react';
import { signOut } from 'next-auth/react';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/app/dashboard' },
  { icon: Activity, label: 'Actividad', href: '/app/activity' },
  { icon: Settings, label: 'Configuración', href: '/app/settings' },
];

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <aside 
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } border-r border-white/5 bg-[#0A0A14] transition-all duration-300 flex flex-col sticky top-0 h-screen z-50`}
      >
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center shrink-0">
            <Shield className="w-5 h-5 text-white" />
          </div>
          {isSidebarOpen && <span className="font-black tracking-tighter text-xl">GoAuth</span>}
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all group ${
                  isActive 
                    ? 'bg-brand/10 text-brand' 
                    : 'hover:bg-white/5 text-gray-500 hover:text-white'
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? 'text-brand' : 'group-hover:text-white'}`} />
                {isSidebarOpen && <span className="text-sm font-bold">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/5">
          <button 
            onClick={() => signOut({ callbackUrl: '/' })}
            className="flex items-center gap-3 p-3 w-full rounded-xl text-gray-500 hover:text-red-400 hover:bg-red-400/5 transition-all group"
          >
            <LogOut className="w-5 h-5" />
            {isSidebarOpen && <span className="text-sm font-bold">Cerrar Sesión</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Container */}
      <main className="flex-1 min-w-0 flex flex-col min-h-screen">
        {/* Topbar */}
        <header className="h-16 border-b border-white/5 bg-black/50 backdrop-blur-xl flex items-center justify-between px-8 sticky top-0 z-40 shrink-0">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-white/5 rounded-lg transition-colors text-gray-400"
          >
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-white/5 rounded-lg transition-colors text-gray-400 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-brand rounded-full"></span>
            </button>
            <div className="w-8 h-8 bg-white/10 rounded-full border border-white/10 flex items-center justify-center">
              <User className="w-4 h-4 text-gray-400" />
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
