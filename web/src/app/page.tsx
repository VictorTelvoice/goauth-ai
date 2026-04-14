'use client';

import React, { useEffect } from 'react';
import { Navbar, Hero } from '@/components/landing/Hero';
import { ArchitectureStack, UseCases } from '@/components/landing/Features';
import { ProcessFlow, SMSControl } from '@/components/landing/Process';
import { PricingSection, Testimonials, InfraBanner, CTASection, Footer } from '@/components/landing/Footer';

export default function LandingPage() {
  useEffect(() => {
    // 1. Reset al inicio en carga
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // 2. Observer para animaciones de revelado
    const isMobile = window.innerWidth <= 768;
    
    const revealOptions = {
      threshold: isMobile ? 0.16 : 0.14,
      rootMargin: isMobile ? '0px 0px -8% 0px' : '0px 0px -10% 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, revealOptions);

    // Seleccionamos todos los elementos con clases de reveal
    const targets = document.querySelectorAll('.arch-reveal, .usecase-reveal, .price-reveal, .step');
    targets.forEach(t => {
      if (t.classList.contains('price-reveal') && !isMobile) {
        t.classList.add('is-visible'); // En desktop los precios aparecen de golpe en el original
      } else {
        revealObserver.observe(t);
      }
    });

    // 3. Lógica especial para burbujas de SMS
    const smsContainer = document.querySelector('.sms-command-wrap');
    if (smsContainer) {
      const smsObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bubbles = entry.target.querySelectorAll('.sms-bubble');
            const delays = [60, 380, 760, 1100];
            bubbles.forEach((bubble, idx) => {
              setTimeout(() => {
                bubble.classList.add('is-visible');
              }, delays[idx] || idx * 320);
            });
            smsObserver.unobserve(entry.target);
          }
        });
      }, { 
        threshold: isMobile ? 0.12 : 0.22,
        rootMargin: isMobile ? '0px 0px -12% 0px' : '0px 0px -10% 0px'
      });
      smsObserver.observe(smsContainer);
    }

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return (
    <main style={{ backgroundColor: 'var(--dark)' }}>
      <Navbar />
      <Hero />
      <ArchitectureStack />
      <UseCases />
      <ProcessFlow />
      <SMSControl />
      <PricingSection />
      <Testimonials />
      <InfraBanner />
      <CTASection />
      <Footer />
    </main>
  );
}
