import React from 'react';
import { Navbar } from '@/components/landing/Hero';
import { Footer } from '@/components/landing/Footer';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
