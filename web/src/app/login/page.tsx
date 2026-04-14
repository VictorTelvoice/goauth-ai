'use client';

import React, { useState } from 'react';
import { Shield, Mail, Lock, ChevronRight, Github } from 'lucide-react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 blur-[100px] rounded-full" />
      </div>

      <div className="w-full max-w-[450px] relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex w-16 h-16 bg-brand rounded-2xl items-center justify-center pulse-brand mb-6 mx-auto">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-black tracking-tighter mb-2 text-gradient">
            {isLogin ? 'Bienvenido de Nuevo' : 'Crea tu Cuenta'}
          </h1>
          <p className="text-gray-500">Accede al control seguro de tus agentes IA.</p>
        </div>

        <div className="dashboard-card-premium p-8 shadow-2xl">
          <div className="space-y-6">
            <button 
              onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
              className="w-full py-4 px-6 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center gap-3 font-bold hover:bg-white/10 transition-all text-sm"
            >
              <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
              Continuar con Google
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/5"></div>
              </div>
              <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-black">
                <span className="bg-[#0A0A14] px-4 text-gray-600">O usa tu email</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2 mb-2 block">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input 
                    type="email" 
                    placeholder="name@company.com"
                    className="w-full bg-black border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-brand/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2 mb-2 block">Contraseña</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full bg-black border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-brand/50 transition-colors"
                  />
                </div>
              </div>
            </div>

            <button className="btn-primary w-full py-4 rounded-2xl flex items-center justify-center gap-2 group">
              {isLogin ? 'Iniciar Sesión' : 'Registrar Cuenta'}
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <p className="text-center mt-8 text-gray-500 text-sm">
          {isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-brand font-bold hover:underline"
          >
            {isLogin ? 'Regístrate' : 'Inicia Sesión'}
          </button>
        </p>
      </div>
    </div>
  );
}
