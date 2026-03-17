import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'outline' | 'ghost';
}

export const Button: React.FC<ButtonProps> = ({ children, className = "", variant = "primary", ...props }) => {
  const variants = {
    primary: "bg-rose-gradient text-white shadow-lg shadow-rose-gold/20 hover:scale-105 active:scale-95",
    outline: "border-2 border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-white",
    ghost: "text-rose-gold hover:bg-rose-gold/10"
  };

  return (
    <button 
      className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
