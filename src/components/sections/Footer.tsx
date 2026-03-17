import React from "react";
import { motion } from "motion/react";
import { MessageCircle, Instagram, ShoppingBag } from "lucide-react";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";

export const Footer = () => {
  return (
    <>
      <Section className="text-center py-32 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Sua marca está pronta para o <br />
            <span className="text-gradient italic">próximo nível?</span>
          </h2>
          <p className="text-xl text-soft-black/60 max-w-2xl mx-auto mb-12">
            Não deixe para amanhã as vendas que você poderia estar fazendo hoje.
            Clique no botão abaixo e vamos construir sua presença digital
            premium.
          </p>
          <Button asChild className="mx-auto py-6 px-12 text-lg">
               <MessageCircle className="w-6 h-6" />
            <a
              href="https://wa.me/5519989339966?text=Olá%2C%20quero%20saber%20mais%20sobre%20como%20ter%20minha%20loja%20pronta%20para%20vender%20mais."
              target="_blank"
              rel="noopener noreferrer"
            >
           
              Falar com Especialista no WhatsApp
            </a>
          </Button>
          <p className="mt-8 text-sm font-bold text-rose-gold uppercase tracking-widest">
            Últimas 3 vagas disponíveis para este mês
          </p>
        </motion.div>

        {/* Background Accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-rose-gold-light/5 -z-10" />
      </Section>

      <footer className="py-12 px-6 border-t border-rose-gold-light/20 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-8 h-8 rounded-full bg-rose-gradient flex items-center justify-center text-white font-bold text-xs">
            BP
          </div>
          <span className="font-display text-lg font-bold tracking-tight">
            By Paula Gomes <span className="text-rose-gold">Store</span>
          </span>
        </div>
        <p className="text-sm text-soft-black/40 mb-6">
          © 2026 By Paula Gomes Store. Todos os direitos reservados.
        </p>
        <div className="flex justify-center gap-6 text-soft-black/30">
          <Instagram className="w-5 h-5 hover:text-rose-gold cursor-pointer transition-colors" />
          <ShoppingBag className="w-5 h-5 hover:text-rose-gold cursor-pointer transition-colors" />
          <MessageCircle className="w-5 h-5 hover:text-rose-gold cursor-pointer transition-colors" />
        </div>
      </footer>
    </>
  );
};
