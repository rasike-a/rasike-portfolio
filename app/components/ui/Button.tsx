import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  children: React.ReactNode;
}

const buttonVariants = {
  primary: 'bg-slate-900 text-white hover:opacity-90',
  secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
  outline: 'border border-slate-300 bg-transparent hover:bg-slate-50'
};

const buttonSizes = {
  sm: 'px-3 py-2 text-xs',
  md: 'px-5 py-3 text-sm',
  lg: 'px-6 py-4 text-base'
};

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  disabled,
  asChild,
  ...props 
}: ButtonProps) {
  const baseClasses = cn(
    'rounded-xl font-medium transition-opacity inline-flex items-center justify-center',
    buttonVariants[variant],
    buttonSizes[size],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<Record<string, unknown>>;
    const newProps: Record<string, unknown> = {
      className: cn(baseClasses, child.props?.className as string | undefined),
      ...props
    };
    return React.cloneElement(child, newProps);
  }

  return (
    <button
      className={baseClasses}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
