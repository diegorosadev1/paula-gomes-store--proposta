import React from 'react';
import { Check } from 'lucide-react';
import { Section } from '../ui/Section';

export const Automation = () => {
  return (
    <Section className="py-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <div className="grid grid-cols-2 gap-6">
            {[
              { title: "Títulos que Vendem", desc: "Nossa tecnologia cria nomes atraentes automaticamente." },
              { title: "Descrições Prontas", desc: "Textos profissionais que convencem a cliente a comprar." },
              { title: "Organização Inteligente", desc: "Seus produtos são categorizados sem você mover um dedo." },
              { title: "Escala Sem Esforço", desc: "Cadastre 50 produtos no tempo que levaria para postar um Story." }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-3xl shadow-sm border border-rose-gold-light/20">
                <h4 className="font-bold mb-2 text-rose-gold">{item.title}</h4>
                <p className="text-sm text-soft-black/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Sua única tarefa será <br />
            <span className="text-rose-gold italic">enviar as fotos</span>
          </h2>
          <p className="text-lg text-soft-black/60 mb-8 leading-relaxed">
            Eliminamos toda a parte chata e técnica. Você foca na curadoria dos looks e no atendimento, 
            enquanto nossa tecnologia cuida da vitrine.
          </p>
          <ul className="space-y-4">
            {["Economia de 15h por semana", "Zero necessidade de entender tecnologia", "Publicação instantânea", "Foco total no crescimento da marca"].map((text, i) => (
              <li key={i} className="flex items-center gap-3 font-medium">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Check className="w-3 h-3" />
                </div>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};
