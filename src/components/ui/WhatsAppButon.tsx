import React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/5519989339966?text=Olá%2C%20quero%20saber%20mais%20sobre%20como%20ter%20minha%20loja%20pronta%20para%20vender%20mais."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/40 transition-shadow"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8 fill-current" />
      <span className="absolute -top-2 -right-2 flex h-5 w-5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-5 w-5 bg-rose-gold"></span>
      </span>
    </motion.a>
  );
};
