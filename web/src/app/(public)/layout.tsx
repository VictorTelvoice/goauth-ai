'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Navbar } from '@/components/landing/Hero';
import { Footer } from '@/components/landing/Footer';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = pathname === '/login' || pathname === '/register';

  return (
    <div className="bg-black min-h-screen">
      {!isAuthPage && <Navbar />}
      <main>
        {children}
      </main>
      {!isAuthPage && <Footer />}
    </div>
  );
}
