import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = "", ...props }) => (
  <div 
    className={`bg-white p-8 rounded-3xl shadow-sm border border-rose-gold-light/30 transition-all duration-300 hover:shadow-xl hover:shadow-rose-gold/5 hover:-translate-y-1 ${className}`}
    {...props}
  >
    {children}
  </div>
);
