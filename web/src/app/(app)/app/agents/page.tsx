'use client';

import React, { useState, useEffect } from 'react';
import { 
  Bot, 
  Plus, 
  Search, 
  Filter, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { AgentCard } from '@/components/agents/AgentCard';
import { NewAgentModal } from '@/components/agents/NewAgentModal';
import { getAgents } from './actions';

export default function AgentsPage() {
  const [agents, setAgents] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchAgents = async () => {
    setIsLoading(true);
    try {
      const data = await getAgents();
      setAgents(data);
    } catch (error) {
      console.error('Error fetching agents:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAgents();
  }, []);

  const filteredAgents = agents.filter(agent => 
    agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    agent.phoneNumber.includes(searchQuery)
  );

  return (
    <div className="space-y-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-brand">
            <Sparkles className="w-5 h-5" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Management Console</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter">AI Agents</h1>
          <p className="text-gray-500 text-lg max-w-xl">
            Despliega y gestiona tus agentes autónomos de comunicación con tecnología de última generación.
          </p>
        </div>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="btn-primary group h-14 px-8 rounded-2xl flex items-center gap-3 font-black text-lg transition-all hover:scale-[1.02] active:scale-95 shrink-0"
        >
          <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center group-hover:rotate-90 transition-transform">
            <Plus className="w-4 h-4" />
          </div>
          Nuevo Agente
        </button>
      </div>

      {/* Control Bar */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input 
            type="text"
            placeholder="Buscar por nombre o número..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-14 bg-[#0A0A14] border border-white/5 rounded-2xl pl-14 pr-6 focus:ring-2 focus:ring-brand/40 focus:border-brand/40 transition-all outline-none font-bold placeholder:text-gray-700"
          />
        </div>
        <button className="h-14 px-6 rounded-2xl bg-[#0A0A14] border border-white/5 flex items-center gap-3 font-bold text-gray-400 hover:text-white hover:bg-white/5 transition-all">
          <Filter className="w-5 h-5" />
          Filtros
        </button>
      </div>

      {/* Agents Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-80 bg-white/5 rounded-[32px] animate-pulse border border-white/5" />
          ))}
        </div>
      ) : filteredAgents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAgents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      ) : (
        <div className="dashboard-card-premium py-20 px-10 text-center border-dashed border-white/10">
          <div className="w-24 h-24 bg-brand/5 rounded-[32px] flex items-center justify-center mx-auto mb-8 border border-brand/20">
            <Bot className="w-12 h-12 text-brand" />
          </div>
          <h2 className="text-3xl font-black tracking-tighter mb-4">No se encontraron agentes</h2>
          <p className="text-gray-500 max-w-md mx-auto mb-10 text-lg">
            Aún no has creado ningún agente. Comienza desplegando tu primera instancia de IA ahora mismo.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-3 text-brand font-black text-xl hover:gap-5 transition-all group"
          >
            Crear mi primer agente
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* Modals */}
      <NewAgentModal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          fetchAgents();
        }} 
      />
    </div>
  );
}
