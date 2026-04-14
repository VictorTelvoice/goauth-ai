'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  MessageSquare, 
  ShieldCheck, 
  Settings, 
  LogOut,
  Zap,
  Phone
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { signOut } from 'next-auth/react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Users, label: 'Mis Agentes', href: '/agents' },
  { icon: MessageSquare, label: 'Logs de SMS', href: '/logs' },
  { icon: ShieldCheck, label: 'Números Autorizados', href: '/authorized' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen bg-[var(--dark2)] border-r border-[var(--border)] flex flex-col fixed left-0 top-0 z-50">
      <div className="p-8 flex items-center gap-3">
        <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center pulse-brand">
          <Zap className="w-6 h-6 text-white" />
        </div>
        <span className="text-xl font-bold tracking-tighter text-white">GoAuth.ai</span>
      </div>

      <nav className="flex-grow px-4 mt-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all group",
                  pathname === item.href 
                    ? "bg-brand/10 text-brand border border-brand/20 shadow-[0_0_20px_rgba(108,59,255,0.1)]" 
                    : "text-gray-500 hover:text-white hover:bg-white/5"
                )}
              >
                <item.icon className={cn(
                  "w-5 h-5",
                  pathname === item.href ? "text-brand" : "text-gray-500 group-hover:text-white"
                )} />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-[var(--border)]">
        <Link
          href="/settings"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-500 hover:text-white hover:bg-white/5 transition-all mb-2"
        >
          <Settings className="w-5 h-5" />
          Configuración
        </Link>
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-500/5 transition-all"
        >
          <LogOut className="w-5 h-5" />
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}
