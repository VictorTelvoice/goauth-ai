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
  Bell,
  Bot
} from 'lucide-react';
import { signOut } from 'next-auth/react';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/app/dashboard' },
  { icon: Bot, label: 'Agentes', href: '/app/agents' },
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex overflow-hidden">
      {/* Sidebar Desktop */}
      <aside 
        className={`hidden md:flex flex-col border-r border-white/5 bg-[#0A0A14] transition-all duration-300 sticky top-0 h-screen z-50 ${
          isSidebarOpen ? 'w-64' : 'w-20'
        }`}
      >
        <div className="p-6 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5 text-white" />
            </div>
            {isSidebarOpen && <span className="font-black tracking-tighter text-xl whitespace-nowrap">GoAuth</span>}
          </div>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-1.5 hover:bg-white/5 rounded-lg transition-colors text-gray-500"
          >
            {isSidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
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
                <item.icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-brand' : 'group-hover:text-white'}`} />
                {isSidebarOpen && <span className="text-sm font-bold truncate">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/5">
          <div className={`flex items-center gap-3 p-3 mb-2 ${!isSidebarOpen && 'justify-center'}`}>
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-gray-400" />
            </div>
            {isSidebarOpen && (
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold truncate">Usuario Premium</span>
                <span className="text-[10px] text-gray-500 truncate">SaaS Plan</span>
              </div>
            )}
          </div>
          <button 
            onClick={() => signOut({ callbackUrl: '/' })}
            className={`flex items-center gap-3 p-3 w-full rounded-xl text-gray-500 hover:text-red-400 hover:bg-red-400/5 transition-all group ${!isSidebarOpen && 'justify-center'}`}
          >
            <LogOut className="w-5 h-5 shrink-0" />
            {isSidebarOpen && <span className="text-sm font-bold">Cerrar Sesión</span>}
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
            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="font-black tracking-tighter text-xl">GoAuth</span>
          </div>
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-gray-400">
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex-1 px-4 py-8 space-y-2">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${
                  isActive 
                    ? 'bg-brand/10 text-brand' 
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
          <button onClick={() => signOut({ callbackUrl: '/' })} className="flex items-center gap-4 p-4 text-gray-400 hover:text-red-400 w-full">
            <LogOut className="w-6 h-6" />
            <span className="text-base font-bold">Cerrar Sesión</span>
          </button>
        </div>
      </aside>

      {/* Mobile Header (Sticky & Floating Toggle) */}
      <div className="md:hidden fixed top-4 right-4 z-[55]">
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-3 bg-brand rounded-2xl shadow-lg shadow-brand/20 text-white"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Main Content Container */}
      <main className="flex-1 min-w-0 flex flex-col h-screen overflow-hidden">
        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-[1600px] mx-auto p-6 md:p-10 pb-20">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
