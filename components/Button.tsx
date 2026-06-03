import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900";
  
  const variants = {
    primary: "bg-gradient-to-r from-naxxos-red to-naxxos-orange hover:from-red-600 hover:to-orange-600 text-white focus:ring-red-500 shadow-lg shadow-red-900/20",
    secondary: "bg-white text-naxxos-black hover:bg-gray-100 focus:ring-white",
    outline: "border border-naxxos-red/50 text-red-500 hover:bg-naxxos-red/10 focus:ring-red-500",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
      {icon && <ArrowRight className="ml-2 h-4 w-4" />}
    </button>
  );
};

export default Button;