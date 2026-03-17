import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#solucao", label: "Solução" },
    { href: "#entrega", label: "O que recebe" },
    { href: "#playground", label: "Demonstração" },
    { href: "#planos", label: "Investimento" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-nude/80 backdrop-blur-md border-b border-rose-gold-light/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-rose-gradient flex items-center justify-center text-white font-bold">BP</div>
          <span className="font-display text-xl font-bold tracking-tight">By Paula Gomes <span className="text-rose-gold">Store</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-rose-gold transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex">
          <Button variant="outline" className="py-2 px-6 text-sm">Falar no WhatsApp</Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-rose-gold"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-nude border-b border-rose-gold-light/20 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 text-sm font-medium uppercase tracking-widest">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="hover:text-rose-gold transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button className="w-full mt-4">Falar no WhatsApp</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
