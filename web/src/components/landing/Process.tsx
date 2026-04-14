import React from 'react';

export const ProcessFlow = () => {
  const steps = [
    { num: 1, glyph: 'glyph-sim', text: 'Se asigna un número real al agente' },
    { num: 2, glyph: 'glyph-message', text: 'La plataforma envía el SMS de verificación' },
    { num: 3, glyph: 'glyph-parse', text: 'El agente extrae el código y entiende el mensaje' },
    { num: 4, glyph: 'glyph-route', text: 'Entrega la instrucción a tu flujo o a una persona' },
    { num: 5, glyph: 'glyph-run', text: 'La operación continúa sin intervención manual' }
  ];

  return (
    <section id="como-funciona" style={{ background: 'var(--dark2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="center">
        <span className="section-tag">Cómo funciona</span>
        <h2 className="section-title">El agente recibe el código.<br />Tú decides qué hacer con él.</h2>
        <p className="section-sub">Asigna un número real a tu agente, recibe el SMS, extrae el código y lo entrega a tu flujo o a una persona.</p>
      </div>

      <div className="agent-powers-wrap">
        <div className="agent-powers-col">
          <ol className="agent-flow">
            {steps.map((step, i) => (
              <li key={i} className="af-step step">
                <div className="af-visual">
                  <div className="af-index">{step.num}</div>
                  <div className={`af-glyph ${step.glyph}`}></div>
                  <div className="af-arrow"></div>
                </div>
                <div className="af-content">
                  <strong>{step.text}</strong>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export const SMSControl = () => {
  return (
    <section id="control-sms" style={{ background: 'var(--dark)', borderBottom: '1px solid var(--border)' }}>
      <div className="center offline-header arch-reveal">
        <span className="section-tag">Operación offline</span>
        <h2 className="section-title">Controla tu agente incluso sin internet</h2>
        <p className="section-sub">GoAuth permite enviar instrucciones por SMS desde números autorizados, para ejecutar acciones críticas incluso cuando no tienes apps, WiFi ni conexión de datos.</p>
      </div>
      <div className="sms-command-wrap arch-reveal">
        <div className="sms-command-strip">
          <div className="sms-cmd-left">
            <h4>Una capa de control que sigue operativa cuando otros canales fallan</h4>
            <p>Tu agente puede recibir órdenes por SMS solo desde números previamente validados. Así operas con una capa extra de seguridad, sin depender de paneles, apps o internet para ejecutar acciones sensibles.</p>
            <ul className="offline-list">
              <li>Solo responde a números autorizados</li>
              <li>No depende de apps, WiFi ni datos móviles</li>
              <li>Útil en emergencias, zonas remotas y fallas de infraestructura</li>
              <li>Mantiene control operativo cuando otros canales no están disponibles</li>
            </ul>
          </div>
        </div>
        <div className="sms-cmd-right">
          <div className="offline-demo-card">
            <div className="sms-bubble sms-out">
              <span className="sms-meta">Tú → Agente</span>
              APROBAR transferencia 12,000 USD cuenta BCP
            </div>
            <div className="sms-bubble sms-in">
              <span className="sms-meta">Agente → Tú</span>
              ✓ Orden recibida · Acción ejecutada
            </div>
            <div className="sms-bubble sms-out">
              <span className="sms-meta">Tú → Agente</span>
              ACTIVAR protocolo de contingencia datacenter norte
            </div>
            <div className="sms-bubble sms-in">
              <span className="sms-meta">Agente → Tú</span>
              ✓ Protocolo activado. Alertas enviadas y operación derivada.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
