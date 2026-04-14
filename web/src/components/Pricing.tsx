'use client'

import React, { useState } from 'react';
import { CheckCircle2, Zap, Shield, Crown } from 'lucide-react';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: "Starter",
    priceWeekly: "49",
    priceAnnual: "1,990",
    description: "Para validaciones críticas individuales.",
    icon: Shield,
    features: [
      "1 Agente IA dedicado",
      "Validación SMS segura",
      "Logs de tiempo real",
      "SLA 99.9%",
      "Whitelist (1 número)"
    ]
  },
  {
    name: "Pro",
    priceWeekly: "149",
    priceAnnual: "5,990",
    description: "Control operativo para medianas empresas.",
    icon: Zap,
    features: [
      "5 Agentes IA dedicados",
      "Comandos personalizados",
      "API de integración",
      "Soporte prioritario",
      "Whitelist (10 números)"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    priceWeekly: "499",
    priceAnnual: "19,900",
    description: "Infraestructura crítica a gran escala.",
    icon: Crown,
    features: [
      "Agentes ilimitados",
      "Infraestructura dedicada",
      "SLA 99.99%",
      "Account Manager",
      "Whitelist ilimitada"
    ]
  }
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'weekly' | 'annual'>('weekly');

  return (
    <section id="pricing" className="py-24 px-6 relative">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gradient">Planes de Control</h2>
          <p className="text-gray-400 mb-10">Escala tu seguridad y capacidad operativa con IA.</p>
          
          <div className="inline-flex items-center p-1 bg-white/5 rounded-2xl border border-white/10">
            <button 
              onClick={() => setBillingCycle('weekly')}
              className={cn(
                "px-6 py-2 rounded-xl text-sm font-bold transition-all",
                billingCycle === 'weekly' ? "bg-brand text-white shadow-lg" : "text-gray-500 hover:text-white"
              )}
            >
              Semanal
            </button>
            <button 
              onClick={() => setBillingCycle('annual')}
              className={cn(
                "px-6 py-2 rounded-xl text-sm font-bold transition-all",
                billingCycle === 'annual' ? "bg-brand text-white shadow-lg" : "text-gray-500 hover:text-white"
              )}
            >
              Anual <span className="text-[10px] opacity-60 ml-1 text-green-400">(-20%)</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={cn(
                "dashboard-card-premium p-8 relative flex flex-col",
                plan.popular && "border-brand/40 shadow-[0_0_50px_rgba(108,59,255,0.15)] ring-1 ring-brand/50"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">
                  Más Popular
                </div>
              )}

              <div className="mb-8">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6">
                  <plan.icon className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm">{plan.description}</p>
              </div>

              <div className="mb-10">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black">${billingCycle === 'weekly' ? plan.priceWeekly : plan.priceAnnual}</span>
                  <span className="text-gray-500 text-sm">/ {billingCycle === 'weekly' ? 'semana' : 'año'}</span>
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-brand" />
                    {feature}
                  </div>
                ))}
              </div>

              <button 
                className={cn(
                  "w-full py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2",
                  plan.popular ? "btn-primary" : "bg-white/5 hover:bg-white/10 border border-white/5 text-white"
                )}
              >
                Comenzar con {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
