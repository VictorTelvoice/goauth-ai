'use client';

import React, { useState } from 'react';
import { 
  X, 
  Plus, 
  Bot, 
  Shield, 
  Zap, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { toast } from 'sonner';
import { createAgent } from '@/app/(app)/app/agents/actions';

interface NewAgentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NewAgentModal({ isOpen, onClose }: NewAgentModalProps) {
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error('El nombre es obligatorio');
      return;
    }

    setIsSubmitting(true);
    try {
      await createAgent({ name });
      toast.success('Agente creado correctamente');
      onClose();
      setName('');
    } catch (error) {
      toast.error('Error al crear el agente');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-xl bg-[#0A0A14] border border-white/10 rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 blur-[100px] pointer-events-none" />

        <div className="relative p-8 md:p-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand rounded-2xl flex items-center justify-center shadow-lg shadow-brand/20">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-black tracking-tighter">Crear Nuevo Agente</h2>
                <p className="text-gray-500 text-sm">Configura tu nueva instancia de IA</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/5 rounded-xl transition-colors text-gray-500"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">
                Nombre del Agente
              </label>
              <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej. Soporte al Cliente v2"
                className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-brand/40 focus:border-brand transition-all outline-none font-bold"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5 group hover:border-brand/30 transition-all cursor-pointer">
                <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5 text-brand" />
                </div>
                <h4 className="font-bold text-sm mb-1">Conversacional</h4>
                <p className="text-[10px] text-gray-500 leading-relaxed">Optimizado para diálogos fluidos y atención al cliente.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5 group hover:border-accent/30 transition-all cursor-pointer opacity-50">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mb-3">
                  <Zap className="w-5 h-5 text-accent" />
                </div>
                <h4 className="font-bold text-sm mb-1">Validador (Próximamente)</h4>
                <p className="text-[10px] text-gray-500 leading-relaxed">Especializado en capturar datos y validar códigos.</p>
              </div>
            </div>

            <div className="pt-4">
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Plus className="w-6 h-6 transition-transform group-hover:rotate-90" />
                    Crear Instancia de Agente
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
