

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-rose-gold-light/30">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full py-6 flex items-center justify-between text-left group focus:outline-none focus:text-rose-gold"
      >
        <span className="text-lg font-medium group-hover:text-rose-gold transition-colors">{title}</span>
        <ChevronDown className={`w-5 h-5 text-rose-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-soft-black/70 leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
