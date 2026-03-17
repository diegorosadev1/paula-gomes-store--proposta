import React from 'react';
import { Check } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export const Plans = () => {
  return (
    <Section id="planos" className="bg-white rounded-[4rem] py-32">
      <div className="text-center mb-20">
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">Escolha o próximo passo da <br /><span className="text-rose-gold italic">sua marca</span></h2>
        <p className="text-soft-black/60 text-lg">Investimento único para uma transformação vitalícia.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Plan 1 */}
        <Card className="flex flex-col">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">Essencial</h3>
            <p className="text-sm text-soft-black/50 mb-6">Para quem está começando a profissionalizar.</p>
            <div className="flex items-baseline gap-1">
              <span className="text-sm font-bold">R$</span>
              <span className="text-5xl font-display font-bold">1.997</span>
            </div>
            <p className="text-xs text-soft-black/40 mt-2">Pagamento único</p>
          </div>
          <ul className="space-y-4 mb-12 flex-1">
            {["Loja Virtual Profissional", "Design Minimalista", "Checkout Integrado", "Até 30 produtos cadastrados", "Suporte via E-mail"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm">
                <Check className="w-4 h-4 text-rose-gold" />
                {item}
              </li>
            ))}
          </ul>
        </Card>

        {/* Plan 2 - Recommended */}
        <Card className="flex flex-col border-2 border-rose-gold relative scale-105 shadow-2xl z-10">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-rose-gold text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
            Recomendado
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">Profissional</h3>
            <p className="text-sm text-soft-black/50 mb-6">A solução completa para escala real.</p>
            <div className="flex items-baseline gap-1">
              <span className="text-sm font-bold">R$</span>
              <span className="text-5xl font-display font-bold">2.997</span>
            </div>
            <p className="text-xs text-soft-black/40 mt-2">Pagamento único</p>
          </div>
          <ul className="space-y-4 mb-12 flex-1">
            {["Tudo do Essencial", "Design 100% Personalizado", "Automação via WhatsApp (6 meses)", "Até 100 produtos cadastrados", "Suporte Prioritário WhatsApp", "Treinamento de Gestão"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-bold">
                <Check className="w-4 h-4 text-rose-gold" />
                {item}
              </li>
            ))}
          </ul>
        </Card>

        {/* Plan 3 */}
        <Card className="flex flex-col">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">Completo</h3>
            <p className="text-sm text-soft-black/50 mb-6">Para marcas que buscam o topo do mercado.</p>
            <div className="flex items-baseline gap-1">
              <span className="text-sm font-bold">R$</span>
              <span className="text-5xl font-display font-bold">4.997</span>
            </div>
            <p className="text-xs text-soft-black/40 mt-2">Pagamento único</p>
          </div>
          <ul className="space-y-4 mb-12 flex-1">
            {["Tudo do Profissional", "Identidade Visual Completa", "Automação Vitalícia", "Produtos Ilimitados", "Consultoria de Tráfego Pago", "Suporte VIP 24h"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm">
                <Check className="w-4 h-4 text-rose-gold" />
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Payment Condition */}
      <div className="mt-20 p-10 bg-rose-gold-light/10 rounded-[3rem] border border-rose-gold-light/30 text-center max-w-3xl mx-auto">
        <h4 className="text-2xl font-bold mb-4">Risco Zero para Você</h4>
        <p className="text-lg text-soft-black/70 leading-relaxed">
          Acreditamos tanto no nosso trabalho que <span className="font-bold text-soft-black">você paga apenas 30% para iniciar o projeto</span> e os outros 70% somente após a entrega da sua loja pronta e aprovada.
        </p>
      </div>
    </Section>
  );
};
