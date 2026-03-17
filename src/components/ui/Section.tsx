import React from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: 'section' | 'header' | 'footer' | 'div';
  animate?: boolean;
}

export const Section = ({ 
  children, 
  className = "", 
  id = "", 
  as: Component = 'section',
  animate = true 
}: SectionProps) => {
  const content = (
    <div className={`py-20 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
      {children}
    </div>
  );

  if (!animate) {
    return <Component id={id}>{content}</Component>;
  }

  return (
    <Component id={id}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {content}
      </motion.div>
    </Component>
  );
};
