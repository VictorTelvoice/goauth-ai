'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  BarChart3, 
  Users, 
  Settings as SettingsIcon, 
  ShieldAlert,
  Menu,
  X,
  Bell,
  Search,
  LogOut
} from 'lucide-react';
import { signOut } from 'next-auth/react';

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
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex overflow-hidden">
      {/* Admin Sidebar Desktop */}
      <aside 
        className={`hidden md:flex flex-col border-r border-white/5 bg-[#0A0A14] transition-all duration-300 sticky top-0 h-screen z-50 ${
          isSidebarOpen ? 'w-64' : 'w-20'
        }`}
      >
        <div className="p-6 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center shrink-0">
              <ShieldAlert className="w-5 h-5 text-black" />
            </div>
            {isSidebarOpen && <span className="font-black tracking-tighter text-xl whitespace-nowrap">Admin</span>}
          </div>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-1.5 hover:bg-white/5 rounded-lg transition-colors text-gray-500"
          >
            {isSidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {adminSidebarItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all group ${
                  isActive 
                    ? 'bg-accent/10 text-accent' 
                    : 'hover:bg-white/5 text-gray-500 hover:text-white'
                }`}
              >
                <item.icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-accent' : 'group-hover:text-white'}`} />
                {isSidebarOpen && <span className="text-sm font-bold truncate">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/5">
          <div className={`flex items-center gap-3 p-3 mb-2 ${!isSidebarOpen && 'justify-center'}`}>
            <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
              <ShieldAlert className="w-4 h-4 text-accent" />
            </div>
            {isSidebarOpen && (
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold truncate">Admin Root</span>
                <span className="text-[10px] text-accent uppercase font-bold">Super Admin</span>
              </div>
            )}
          </div>
          <button 
            onClick={() => signOut({ callbackUrl: '/' })}
            className={`flex items-center gap-3 p-3 w-full rounded-xl text-gray-500 hover:text-red-400 hover:bg-red-400/5 transition-all group ${!isSidebarOpen && 'justify-center'}`}
          >
            <LogOut className="w-5 h-5 shrink-0" />
            {isSidebarOpen && <span className="text-sm font-bold">Salir</span>}
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside 
        className={`fixed top-0 left-0 bottom-0 w-72 bg-[#0A0A14] z-[70] transition-transform duration-300 border-r border-white/5 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <ShieldAlert className="w-5 h-5 text-black" />
            </div>
            <span className="font-black tracking-tighter text-xl">Admin</span>
          </div>
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-gray-400">
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex-1 px-4 py-8 space-y-2">
          {adminSidebarItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${
                  isActive 
                    ? 'bg-accent/10 text-accent' 
                    : 'text-gray-400 hover:bg-white/5'
                }`}
              >
                <item.icon className="w-6 h-6" />
                <span className="text-base font-bold">{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="p-6 border-t border-white/5">
          <button onClick={() => signOut({ callbackUrl: '/' })} className="flex items-center gap-4 p-4 text-gray-400 hover:text-red-400 w-full font-bold">
            <LogOut className="w-6 h-6" />
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Mobile Header Toggle */}
      <div className="md:hidden fixed top-4 right-4 z-[55]">
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-3 bg-accent rounded-2xl shadow-lg shadow-accent/20 text-black"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Main Content Container */}
      <main className="flex-1 min-w-0 flex flex-col h-screen overflow-hidden">
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-[1600px] mx-auto p-6 md:p-10 pb-20">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
