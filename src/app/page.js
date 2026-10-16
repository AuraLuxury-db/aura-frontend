"use client";
import { useState, useEffect } from 'react';
import { Search, Building2, Plane, Calendar, MapPin, Star, Crown, ShieldCheck, Sparkles, Compass, UserCheck, ArrowRight } from 'lucide-react';
import axios from 'axios';

export default function Home() {
  const [tab, setTab] = useState('hotels');
  const [hotels, setHotels] = useState([]);
  const [vipServices, setVipServices] = useState({
    jet: false,
    chef: false,
    helicopter: false
  });

  useEffect(() => {
    axios.get('http://localhost:5000/api/hotels')
      .then(res => setHotels(res.data))
      .catch(err => console.log('Aguardando conexão com a API...'));
  }, []);

  const toggleVipService = (service) => {
    setVipServices(prev => ({ ...prev, [service]: !prev[service] }));
  };

  return (
    <main className="min-h-screen bg-black text-neutral-100 font-sans selection:bg-amber-400 selection:text-black">
      {/* Top Banner - Status do Membro */}
      <div className="bg-gradient-to-r from-amber-900/40 via-amber-500/10 to-amber-900/40 border-b border-amber-500/20 py-2 px-6 text-center text-xs tracking-widest text-amber-300 flex items-center justify-center gap-2">
        <Crown className="w-3.5 h-3.5 text-amber-400" />
        <span>MEMBRO VIP BLACK EDITION — BENEFÍCIOS EXCLUSIVOS ATIVOS</span>
      </div>

      {/* Header & Navegação */}
      <header className="border-b border-neutral-800/80 backdrop-blur-xl fixed top-8 w-full z-50 bg-black/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-600 to-amber-300 flex items-center justify-center text-black font-bold font-serif">
              A
            </div>
            <div>
              <span className="text-xl font-light tracking-[0.25em] uppercase text-amber-400 font-serif block leading-none">AURA</span>
              <span className="text-[9px] tracking-[0.3em] text-neutral-400 uppercase font-medium">Private Escapes</span>
            </div>
          </div>

          <nav className="hidden md:flex gap-10 text-xs tracking-[0.2em] uppercase text-neutral-300 font-medium">
            <a href="#destinos" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-amber-400" /> Destinos
            </a>
            <a href="#vips" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Serviços VIP
            </a>
            <a href="#experiencias" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> Concierge 24/7
            </a>
          </nav>

          <button className="bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-black font-semibold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2">
            <UserCheck className="w-4 h-4" /> Concierge Privado
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-44 pb-24 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs tracking-[0.25em] uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5" /> O Auge do Luxo & Privacidade
        </div>
        <h1 className="text-5xl md:text-7xl font-serif max-w-4xl leading-tight font-light mb-6 tracking-wide">
          Descubra o Inacessível. <br />
          <span className="italic font-normal bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
            Viva o Extraordinário.
          </span>
        </h1>
        <p className="text-neutral-400 max-w-2xl text-sm md:text-base mb-12 font-light leading-relaxed">
          Curadoria exclusiva dos refúgios mais prestigiados do planeta, jatos privados e experiências gastronómicas personalizadas.
        </p>

        {/* Search & VIP Customizer Widget */}
        <div className="w-full max-w-5xl bg-neutral-900/90 border border-amber-500/30 p-6 md:p-8 rounded-3xl shadow-2xl backdrop-blur-2xl text-left relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Tab Selector */}
          <div className="flex gap-6 border-b border-neutral-800 pb-5 mb-6">
            <button 
              onClick={() => setTab('hotels')}
              className={`flex items-center gap-2.5 text-xs tracking-wider uppercase font-medium pb-1 transition-all ${tab === 'hotels' ? 'text-amber-400 border-b-2 border-amber-400' : 'text-neutral-400 hover:text-neutral-200'}`}
            >
              <Building2 className="w-4 h-4" /> Hotéis & Resorts Exclusivos
            </button>
            <button 
              onClick={() => setTab('flights')}
              className={`flex items-center gap-2.5 text-xs tracking-wider uppercase font-medium pb-1 transition-all ${tab === 'flights' ? 'text-amber-400 border-b-2 border-amber-400' : 'text-neutral-400 hover:text-neutral-200'}`}
            >
              <Plane className="w-4 h-4" /> Aviação Privada
            </button>
          </div>

          {/* Search Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-black/80 border border-neutral-800 p-3.5 rounded-2xl flex items-center gap-3">
              <MapPin className="text-amber-400 w-5 h-5 flex-shrink-0" />
              <div>
                <label className="text-[10px] text-neutral-400 uppercase tracking-widest block">Destino</label>
                <input type="text" placeholder="Maldivas, St. Moritz, Paris..." className="bg-transparent text-sm w-full outline-none text-neutral-100 placeholder:text-neutral-600 font-light" />
              </div>
            </div>
            <div className="bg-black/80 border border-neutral-800 p-3.5 rounded-2xl flex items-center gap-3">
              <Calendar className="text-amber-400 w-5 h-5 flex-shrink-0" />
              <div>
                <label className="text-[10px] text-neutral-400 uppercase tracking-widest block">Datas de Estadia</label>
                <input type="date" className="bg-transparent text-sm w-full outline-none text-neutral-100 [color-scheme:dark] font-light" />
              </div>
            </div>
            <button className="bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-black font-semibold p-3.5 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-amber-500/10 text-xs uppercase tracking-widest">
              <Search className="w-4 h-4" /> Consultar Disponibilidade
            </button>
          </div>

          {/* VIP Services Selector */}
          <div id="vips" className="pt-4 border-t border-neutral-800/80">
            <span className="text-[11px] uppercase tracking-[0.2em] text-amber-400 font-medium block mb-3">Personalize com Serviços VIP de Bordo e Terra:</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <button 
                onClick={() => toggleVipService('jet')}
                className={`p-3 rounded-xl border text-left text-xs transition-all flex items-center justify-between ${vipServices.jet ? 'bg-amber-500/10 border-amber-500 text-amber-300' : 'bg-black/40 border-neutral-800 text-neutral-400 hover:border-neutral-700'}`}
              >
                <span>✈️ Jato Privado de Conexão</span>
                <span className={`text-[10px] px-2 py-0.5 rounded ${vipServices.jet ? 'bg-amber-400 text-black font-bold' : 'bg-neutral-800'}`}>
                  {vipServices.jet ? 'INCLUÍDO' : '+ ADICIONAR'}
                </span>
              </button>

              <button 
                onClick={() => toggleVipService('chef')}
                className={`p-3 rounded-xl border text-left text-xs transition-all flex items-center justify-between ${vipServices.chef ? 'bg-amber-500/10 border-amber-500 text-amber-300' : 'bg-black/40 border-neutral-800 text-neutral-400 hover:border-neutral-700'}`}
              >
                <span>👨‍🍳 Chef Michelin Particular</span>
                <span className={`text-[10px] px-2 py-0.5 rounded ${vipServices.chef ? 'bg-amber-400 text-black font-bold' : 'bg-neutral-800'}`}>
                  {vipServices.chef ? 'INCLUÍDO' : '+ ADICIONAR'}
                </span>
              </button>

              <button 
                onClick={() => toggleVipService('helicopter')}
                className={`p-3 rounded-xl border text-left text-xs transition-all flex items-center justify-between ${vipServices.helicopter ? 'bg-amber-500/10 border-amber-500 text-amber-300' : 'bg-black/40 border-neutral-800 text-neutral-400 hover:border-neutral-700'}`}
              >
                <span>🚁 Transfer de Helicóptero</span>
                <span className={`text-[10px] px-2 py-0.5 rounded ${vipServices.helicopter ? 'bg-amber-400 text-black font-bold' : 'bg-neutral-800'}`}>
                  {vipServices.helicopter ? 'INCLUÍDO' : '+ ADICIONAR'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase de Hotéis de Luxo */}
      <section id="destinos" className="py-20 px-6 max-w-7xl mx-auto border-t border-neutral-900">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-[0.25em] block mb-2">Coleção Exclusiva</span>
            <h2 className="text-3xl font-serif text-neutral-100 flex items-center gap-3">
              <Star className="w-6 h-6 text-amber-400 fill-amber-400" /> Acomodações de Prestígio
            </h2>
          </div>
          <p className="text-neutral-400 text-xs max-w-md">
            Cada propriedade é rigorosamente inspecionada para garantir padrões inigualáveis de privacidade e serviço.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.length > 0 ? hotels.map(hotel => (
            <div key={hotel.id} className="bg-neutral-900/60 border border-neutral-800 rounded-3xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 group shadow-2xl">
              <div className="h-64 overflow-hidden relative">
                <img src={hotel.imageUrl} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                <span className="absolute top-4 right-4 bg-black/80 backdrop-blur-md text-amber-400 text-[10px] uppercase font-semibold px-3 py-1 rounded-full border border-amber-500/30 tracking-widest">
                  Ultra Luxury
                </span>
                <span className="absolute bottom-4 left-4 text-xs text-amber-300 font-medium tracking-wider uppercase flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> {hotel.location}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-light text-neutral-100 mb-2">{hotel.name}</h3>
                <p className="text-neutral-400 text-xs font-light line-clamp-2 mb-6 leading-relaxed">{hotel.description}</p>
                <div className="flex items-center justify-between border-t border-neutral-800/80 pt-5">
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">Valores por Noite</span>
                    <p className="text-xl font-serif text-amber-400 font-light">R$ {hotel.pricePerNight} <span className="text-xs text-neutral-400">/ noite</span></p>
                  </div>
                  <button className="bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs px-5 py-2.5 rounded-full transition-all border border-neutral-700 flex items-center gap-2 group-hover:border-amber-500/40">
                    Reservar <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  </button>
                </div>
              </div>
            </div>
          )) : (
            <div className="col-span-full py-12 text-center text-neutral-500 text-sm">
              Carregando refúgios exclusivos...
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
