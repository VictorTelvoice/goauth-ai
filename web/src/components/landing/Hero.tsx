import React from 'react';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="public-nav">
      <Link href="/" className="logo">
        Go<span className="logo-auth">Auth</span><span className="logo-dotai">.ai</span>
      </Link>
      <ul>
        <li><a href="#como-funciona">Cómo funciona</a></li>
        <li><a href="#casos">Casos de uso</a></li>
        <li><a href="#precios">Precios</a></li>
        <li><a href="#contacto">Contacto</a></li>
        <li><a href="mailto:support@goauth.ai" className="nav-cta">Agendar Demo</a></li>
      </ul>
      <a href="mailto:support@goauth.ai" className="nav-cta mobile-nav-cta">Agendar Demo</a>
    </nav>
  );
};

export const Hero = () => {
  return (
    <section className="hero">
      <div className="badge">Control operativo fuera de internet</div>
      <h1>Controla <span className="highlight">operaciones críticas</span><br />incluso fuera de internet</h1>
      <p className="hero-sub">
        Opera agentes, automatizaciones y acciones críticas por SMS autorizado, incluso sin apps, paneles o conexión de datos.
      </p>
      <div className="hero-btns">
        <a href="#precios" className="btn-primary">Ver planes con 70% OFF →</a>
        <a href="#como-funciona" className="btn-secondary">¿Cómo funciona?</a>
      </div>
      <div className="applications-row">
        <div className="application-pill"><span className="application-pill-icon">🔐</span><span>Verificación de identidad</span></div>
        <div className="application-pill"><span className="application-pill-icon">💸</span><span>Aprobaciones financieras</span></div>
        <div className="application-pill"><span className="application-pill-icon">🤖</span><span>Control de agentes</span></div>
        <div className="application-pill"><span className="application-pill-icon">🚨</span><span>Protocolos de emergencia</span></div>
        <div className="application-pill"><span className="application-pill-icon">📡</span><span>Operación offline</span></div>
        <div className="application-pill"><span className="application-pill-icon">🛡️</span><span>Fallback operativo</span></div>
      </div>
    </section>
  );
};
