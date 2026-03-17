import React from "react";
import { motion } from "motion/react";
import { Clock, Layout, ShieldCheck, Zap, Headphones } from "lucide-react";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";

export const Hero = () => {
  return (
    <Section
      animate={false}
      className="pt-40 pb-20 text-center relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <span className="inline-block px-4 py-1 rounded-full bg-rose-gold-light/30 text-rose-gold text-xs font-bold uppercase tracking-widest mb-6">
          Exclusividade & Tecnologia
        </span>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
          Sua Loja Pronta para <br />
          <span className="text-gradient italic">Vender Mais</span>
        </h1>
        <p className="text-lg md:text-xl text-soft-black/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          Transformamos sua presença no Instagram em uma máquina de vendas
          profissional. Sua marca merece uma vitrine à altura da sua elegância.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
          <Button className="w-full md:w-auto">
            <a
              href="https://wa.me/5519989339966?text=Olá%2C%20quero%20saber%20mais%20sobre%20como%20ter%20minha%20loja%20pronta%20para%20vender%20mais."
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero minha loja agora
            </a>
          </Button>
          <div className="flex items-center gap-2 text-soft-black/50 font-medium">
            <Clock className="w-5 h-5 text-rose-gold" />
            Entrega em até 10–15 dias
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-12 border-t border-rose-gold-light/20">
          {[
            { label: "Design Exclusivo", icon: Layout },
            { label: "Checkout Seguro", icon: ShieldCheck },
            { label: "Fácil de Gerenciar", icon: Zap },
            { label: "Suporte Premium", icon: Headphones },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <item.icon className="w-6 h-6 text-rose-gold" />
              <span className="text-xs font-bold uppercase tracking-tighter text-soft-black/40">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-rose-gold/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 translate-x-1/4 w-[500px] h-[500px] bg-rose-gold-light/20 rounded-full blur-3xl -z-10" />
    </Section>
  );
};
