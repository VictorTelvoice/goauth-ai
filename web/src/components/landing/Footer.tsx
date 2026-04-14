'use client';

import React, { useState } from 'react';

export const PricingSection = () => {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Básico',
      monthly: { price: '$90', original: '$299 / mes', badge: '🔥 70% OFF — primeros 3 meses', note: '' },
      annual: { price: '$2,508', original: '', badge: '30% OFF con pago anual', note: 'Equivale a $209 / mes' },
      features: ['1 agente operativo activo', 'Hasta 500 acciones críticas / mes', 'Número SIM real', 'Soporte por ticket'],
      btnText: 'Empezar con Básico',
      featured: false
    },
    {
      name: 'Pro',
      monthly: { price: '$180', original: '$599 / mes', badge: '🔥 70% OFF — primeros 3 meses', note: '' },
      annual: { price: '$5,028', original: '', badge: '30% OFF con pago anual', note: 'Equivale a $419 / mes' },
      features: ['2 agentes operativos activos', 'Hasta 2,500 acciones críticas / mes', '2 números SIM reales', 'Soporte prioritario'],
      isPopular: true,
      btnText: 'Empezar con Pro',
      featured: true
    },
    {
      name: 'Power',
      monthly: { price: '$990', original: '', badge: '', note: 'Entrenamos tu agente y te guiamos en todo el proceso.' },
      annual: { price: '$11,880', original: '', badge: '', note: 'Equivale a $990 / mes' },
      features: ['Entrenamiento personalizado del agente', 'Acompañamiento experto en la implementación', 'Hasta 3 números SIM', 'Soporte 24/7'],
      isCustom: true,
      btnText: 'Hablar con un especialista',
      featured: false
    }
  ];

  return (
    <section id="precios" style={{ background: 'var(--dark2)', borderTop: '1px solid var(--border)' }}>
      <div className="center">
        <span className="section-tag">Precios</span>
        <h2 className="section-title">Planes para cada escala</h2>
        <p className="section-sub"><strong>70% de descuento</strong> en tus primeros 3 meses.</p>
        <div className="billing-toggle price-reveal">
          <button 
            type="button" 
            className={billing === 'monthly' ? 'active' : ''} 
            onClick={() => setBilling('monthly')}
          >
            Mensual
          </button>
          <button 
            type="button" 
            className={billing === 'annual' ? 'active' : ''} 
            onClick={() => setBilling('annual')}
          >
            Anual
          </button>
          <span className="billing-save">Ahorra 30%</span>
        </div>
      </div>

      <div className="pricing-grid">
        {plans.map((p, i) => (
          <div key={i} className={`price-card price-reveal ${p.featured ? 'featured' : ''}`}>
            {p.isPopular && <div className="featured-badge">MÁS POPULAR</div>}
            {p.isCustom && <div className="custom-badge">PERSONALIZADA</div>}
            <div className="plan-name">{p.name}</div>
            <div className="price-original" style={{ display: p[billing].original ? '' : 'none' }}>{p[billing].original}</div>
            <div className="price-main">
              <span className="price-amount">{p[billing].price}</span>
              <span className="price-mo">{billing === 'monthly' ? '/ mes' : '/ año'}</span>
            </div>
            {p[billing].note && <div className="billing-caption">{p[billing].note}</div>}
            {p[billing].badge && <div className="promo-badge">{p[billing].badge}</div>}
            <hr className="price-divider" />
            <ul className="feature-list">
              {p.features.map((f, j) => <li key={j}>{f}</li>)}
            </ul>
            <a href="#" className={`price-btn ${p.featured ? 'price-btn-filled' : 'price-btn-outline'}`}>
              {p.btnText}
            </a>
          </div>
        ))}
      </div>
      <p className="pricing-note">💳 Sin contrato · Precio en USD · Incluye configuración inicial y acompañamiento operativo</p>
    </section>
  );
};


export const Testimonials = () => {
  const testimonies = Array(12).fill({
    stars: '★★★★★',
    copy: 'Espacio reservado para un testimonio real verificado de cliente.',
    name: 'Testimonio pendiente',
    lang: 'ES'
  });

  const allTestimonies = [...testimonies, ...testimonies];

  return (
    <section className="testimonials-section">
      <div className="center">
        <span className="section-tag">Testimonios</span>
        <h2 className="section-title">Lo que dicen nuestros clientes</h2>
      </div>
      <div className="testimonials-slider">
        <div className="testimonials-track">
          {allTestimonies.map((t, i) => (
            <article key={i} className="testimonial-card">
              <div className="testimonial-stars">{t.stars}</div>
              <p className="testimonial-copy">{t.copy}</p>
              <div className="testimonial-meta"><span className="testimonial-name">{t.name}</span><span>{t.lang}</span></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export const InfraBanner = () => {
  return (
    <section id="contacto" style={{ background: 'var(--dark)' }}>
      <div className="infra-banner usecase-reveal">
        <div className="infra-banner-text arch-reveal">
          <span className="section-tag">Infraestructura</span>
          <h3>Control operativo sobre infraestructura real</h3>
          <p>GoAuth.ai combina SMS autorizado, runtime operativo y automatización para ejecutar acciones críticas incluso cuando otros canales fallan.</p>
          <div className="infra-features">
            <div className="infra-feat">SMS autorizado con trazabilidad</div>
            <div className="infra-feat">Fallback operativo fuera de internet</div>
            <div className="infra-feat">Integración con API, Make, n8n, WhatsApp y Telegram</div>
            <div className="infra-feat">Configuración guiada según tu operación</div>
          </div>
        </div>
        <form className="infra-form arch-reveal" action="mailto:support@goauth.ai" method="post" aria-label="Contacto">
          <h4>Contáctanos</h4>
          <p>Si tienes un requerimiento especial o un proceso exclusivo de tu empresa, podemos ayudarte.</p>
          <div className="infra-form-grid">
            <input className="infra-input" type="text" placeholder="Nombre" required />
            <input className="infra-input" type="email" placeholder="Correo corporativo" required />
            <textarea className="infra-textarea" placeholder="Cuéntanos brevemente tu necesidad"></textarea>
            <button className="infra-submit" type="submit">Contactar</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export const CTASection = () => {
  return (
    <section className="cta-section">
      <span className="section-tag">¿Listo para empezar?</span>
      <h2>Activa una capa de control que no depende de internet</h2>
      <p>Opera aprobaciones, agentes y acciones sensibles con GoAuth.ai incluso cuando apps o paneles no están disponibles.</p>
      <a href="#contacto" className="btn-primary">Hablar con nuestro equipo →</a>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#" className="logo" style={{ fontSize: '1.3rem' }}>Go<span className="logo-auth">Auth</span><span className="logo-dotai">.ai</span></a>
          <p>Control operativo fuera de internet para acciones críticas, agentes y continuidad empresarial.</p>
        </div>
        <div className="footer-link-group">
          <h5>Producto</h5>
          <a href="#casos">Casos de uso</a>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#precios">Precios</a>
          <a href="#contacto">Contacto</a>
        </div>
        <div className="footer-link-group">
          <h5>Explorar</h5>
          <a href="#casos">Casos de uso</a>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#precios">Precios</a>
          <a href="#contacto">Contacto</a>
        </div>
        <div className="footer-link-group">
          <h5>Contacto</h5>
          <a href="#contacto">Formulario de contacto</a>
          <a href="mailto:support@goauth.ai">support@goauth.ai</a>
          <a href="mailto:support@goauth.ai">Solicitar demo</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 GoAuth.ai by Telvoice — Todos los derechos reservados</p>
        <p>GoAuth.ai · Control operativo por SMS autorizado</p>
      </div>
    </footer>
  );
};

