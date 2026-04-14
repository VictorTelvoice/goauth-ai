import React from 'react';

export const ArchitectureStack = () => {
  return (
    <section id="stack" style={{ background: 'var(--dark2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="center arch-reveal">
        <span className="section-tag">Arquitectura</span>
        <h2 className="section-title">Control real para operaciones que no pueden detenerse</h2>
        <p className="section-sub">GoAuth combina agentes, números autorizados y ejecución por SMS para aprobar, activar, pausar o escalar acciones críticas incluso fuera de internet.</p>
      </div>
      <div className="stack-wrap arch-reveal">
        <div className="stack-diagram">
          <div className="stack-layer layer-goauth arch-reveal">
            <div className="layer-label lbl-goauth">Capa de Control</div>
            <div className="layer-name">GoAuth.ai</div>
            <div className="layer-desc">Una capa de decisión que interpreta instrucciones, valida contexto y ejecuta acciones críticas sobre agentes, equipos o sistemas.</div>
            <div className="layer-pills">
              <span className="pill pill-purple">Aprobaciones</span>
              <span className="pill pill-purple">Control de agentes</span>
              <span className="pill pill-purple">Protocolos</span>
              <span className="pill pill-purple">Operación offline</span>
            </div>
          </div>
          <div className="stack-layer layer-infra arch-reveal">
            <div className="layer-label lbl-infra">Capa de Ejecución</div>
            <div className="layer-name">GoAuth.ai Runtime</div>
            <div className="layer-desc">Infraestructura SMS autorizada para enviar, recibir y procesar órdenes reales con trazabilidad y continuidad operativa.</div>
            <div className="layer-pills">
              <span className="pill pill-blue">SMS autorizado</span>
              <span className="pill pill-blue">Fallback operativo</span>
              <span className="pill pill-blue">API / Webhooks</span>
              <span className="pill pill-blue">Continuidad crítica</span>
            </div>
          </div>
        </div>

        <div className="stack-points">
          <div className="stack-point arch-reveal">
            <div className="sp-icon sp-icon-purple">📴</div>
            <div>
              <h4>Control fuera de internet</h4>
              <p>Cuando no puedes depender de apps, paneles o conexión de datos, GoAuth sigue operativo a través de SMS autorizados.</p>
            </div>
          </div>
          <div className="stack-point arch-reveal">
            <div className="sp-icon sp-icon-blue">🛡️</div>
            <div>
              <h4>Seguridad y trazabilidad</h4>
              <p>Cada instrucción tiene origen validado, momento de ejecución y acción registrada para operar con más control y menos ambigüedad.</p>
            </div>
          </div>
          <div className="stack-point arch-reveal">
            <div className="sp-icon sp-icon-purple">⚡</div>
            <div>
              <h4>Respuesta inmediata en escenarios críticos</h4>
              <p>Desde aprobaciones financieras hasta protocolos de emergencia, GoAuth permite actuar rápido cuando el tiempo y la continuidad importan.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const UseCases = () => {
  const cases = [
    {
      icon: '🎛️',
      title: 'Control inmediato de sistemas críticos',
      points: [
        'Ejecuta órdenes por SMS desde números previamente autorizados',
        'Bloquea accesos, detiene procesos o activa acciones de contención',
        'Funciona incluso sin apps, paneles o conexión de datos',
        'Pensado para momentos donde cada segundo importa'
      ],
      tags: ['Control resiliente', 'Fallback operativo']
    },
    {
      icon: '🏦',
      title: 'Aprobaciones de alto riesgo',
      points: [
        'Autoriza transferencias, pagos y liberación de fondos',
        'Agrega una capa extra de validación fuera de internet',
        'Ideal para fintech, tesorería y empresas con compliance estricto',
        'Más simple, más directo y más resiliente que depender de una app'
      ],
      tags: ['Validación sensible', 'Compliance-ready']
    },
    {
      icon: '🤖',
      title: 'Control real de agentes y automatizaciones',
      points: [
        'Pausa agentes, activa modo seguro o cambia comportamientos',
        'Envía instrucciones simples por SMS a tu operación',
        'Conecta acciones con API, webhooks y sistemas propios',
        'Si no puedes controlarlo offline, no tienes control real'
      ],
      tags: ['Control offline', 'Automatización segura']
    },
    {
      icon: '🚨',
      title: 'Respuesta operativa y continuidad empresarial',
      points: [
        'Activa protocolos de emergencia con un solo mensaje',
        'Dispara alertas, flujos internos y acciones predefinidas',
        'Mantiene trazabilidad de origen, tiempo y acción ejecutada',
        'Diseñado para incidentes, fallback y operación continua'
      ],
      tags: ['Continuidad operacional', 'Respuesta inmediata']
    }
  ];

  return (
    <section id="casos">
      <div className="center">
        <span className="section-tag">Casos de uso</span>
        <h2 className="section-title">La capa de control que sigue funcionando cuando todo lo demás falla</h2>
        <p className="section-sub">GoAuth permite ejecutar acciones críticas, aprobar operaciones sensibles y controlar agentes o automatizaciones desde números autorizados, incluso sin internet.</p>
      </div>
      <div className="usecases-grid">
        {cases.map((c, i) => (
          <div key={i} className="usecase-card usecase-reveal" style={{ '--reveal-delay': `${i * 0.08}s` } as any}>
            <div className="usecase-head">
              <div className="usecase-icon">{c.icon}</div>
              <h3>{c.title}</h3>
            </div>
            <ul className="usecase-points">
              {c.points.map((p, j) => <li key={j}>{p}</li>)}
            </ul>
            <div className="usecase-tags">
              {c.tags.map((t, k) => <span key={k} className="usecase-tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
