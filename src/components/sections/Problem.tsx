import React from 'react';
import { motion } from 'motion/react';
import { Plus, TrendingUp } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';

export const Problem = () => {
  return (
    <Section className="bg-white rounded-[4rem] my-10">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Por que depender apenas do <span className="text-rose-gold italic">Instagram</span> está limitando seu crescimento?
          </h2>
          <div className="space-y-6">
            {[
              { title: "Perda de Vendas", desc: "Clientes desistem por falta de um processo de compra rápido e automático." },
              { title: "Escravidão do Direct", desc: "Você gasta horas respondendo preços e tamanhos manualmente." },
              { title: "Falta de Profissionalismo", desc: "Marcas premium precisam de um endereço próprio e seguro para transmitir confiança." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-rose-gold-light/20 flex items-center justify-center text-rose-gold">
                  <Plus className="w-6 h-6 rotate-45" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-soft-black/60 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-nude rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1726066012801-14d892021339?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Fashion Store" 
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-gold/40 to-transparent" />
          </div>
          <Card className="absolute -bottom-10 -left-10 max-w-[280px] hidden md:block">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                <TrendingUp className="w-5 h-5 rotate-180" />
              </div>
              <span className="font-bold text-sm">Vendas Perdidas</span>
            </div>
            <p className="text-sm text-soft-black/60">Sem uma loja virtual, você deixa de vender para 70% das pessoas que visitam seu perfil.</p>
          </Card>
        </div>
      </div>
    </Section>
  );
};
