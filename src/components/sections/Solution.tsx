import React from 'react';
import { Smartphone, Zap, Layout } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';

export const Solution = () => {
  return (
    <Section id="solucao" className="text-center">
      <h2 className="font-display text-4xl md:text-6xl font-bold mb-16">
        A solução completa para sua <br />
        <span className="text-rose-gold italic">liberdade e escala</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { 
            icon: Smartphone, 
            title: "Fácil de Usar", 
            desc: "Gerencie tudo pelo celular. Cadastre produtos em segundos enquanto toma um café." 
          },
          { 
            icon: Zap, 
            title: "Rápida e Fluida", 
            desc: "Sua loja carrega instantaneamente, garantindo que a cliente não desista da compra." 
          },
          { 
            icon: Layout, 
            title: "100% Personalizada", 
            desc: "Nada de templates genéricos. Criamos um design que reflete a alma da sua marca." 
          }
        ].map((item, i) => (
          <Card key={i} className="group hover:border-rose-gold transition-all duration-500">
            <div className="w-16 h-16 rounded-2xl bg-rose-gold-light/20 flex items-center justify-center text-rose-gold mb-8 group-hover:scale-110 transition-transform">
              <item.icon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-soft-black/60 leading-relaxed">{item.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};
