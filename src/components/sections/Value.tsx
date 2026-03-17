import React from 'react';
import { Check, TrendingUp, Zap } from 'lucide-react';
import { Section } from '../ui/Section';

export const Value = () => {
  return (
    <Section id="entrega" className="bg-soft-black text-white rounded-[4rem] my-10 py-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-rose-gold font-bold uppercase tracking-widest text-sm mb-4 block">O que você recebe</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
            Uma estrutura profissional <br />
            <span className="text-rose-gold-light italic">sem limitações</span>
          </h2>
          <p className="text-white/60 mb-10 text-lg">
            Diferente de plataformas prontas que cobram mensalidades caras e limitam seu crescimento, 
            nós entregamos uma loja 100% sua, com total controle e performance superior.
          </p>
          <div className="space-y-4">
            {[
              { item: "Loja Virtual Profissional", val: "R$ 3.500" },
              { item: "Design Personalizado Premium", val: "R$ 2.000" },
              { item: "Integração de Pagamentos & Frete", val: "R$ 800" },
              { item: "Cadastro Inicial Estratégico", val: "R$ 500" },
              { item: "Otimização para Vendas (SEO)", val: "R$ 1.200" }
            ].map((line, i) => (
              <div key={i} className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-rose-gold" />
                  {line.item}
                </span>
                <span className="text-white/40 font-mono text-sm">{line.val}</span>
              </div>
            ))}
            <div className="pt-6 flex justify-between items-center">
              <span className="text-xl font-bold">Valor Total Percebido</span>
              <span className="text-2xl font-display font-bold text-rose-gold line-through opacity-50">R$ 8.000</span>
            </div>
            <div className="p-6 bg-rose-gold/10 rounded-2xl border border-rose-gold/20 mt-6">
              <p className="text-rose-gold-light font-medium text-center">
                Você terá uma economia real de mais de R$ 5.000 no seu investimento inicial.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="h-64 bg-white/5 rounded-3xl overflow-hidden">
              <img src="https://picsum.photos/seed/fashion1/400/600" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" loading="lazy" alt="Fashion detail 1" />
            </div>
            <div className="h-40 bg-rose-gradient rounded-3xl p-6 flex flex-col justify-end">
              <TrendingUp className="w-8 h-8 mb-2" />
              <span className="font-bold">Escalabilidade Total</span>
            </div>
          </div>
          <div className="space-y-4 pt-12">
            <div className="h-40 bg-white/10 rounded-3xl p-6 flex flex-col justify-end">
              <Zap className="w-8 h-8 mb-2 text-rose-gold" />
              <span className="font-bold">Alta Performance</span>
            </div>
            <div className="h-64 bg-white/5 rounded-3xl overflow-hidden">
              <img src="https://picsum.photos/seed/fashion2/400/600" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" loading="lazy" alt="Fashion detail 2" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
