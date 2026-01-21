import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center font-medium transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none',
                    'cursor-pointer',
                    {
                        'bg-black text-white hover:bg-gray-900 border-2 border-black rounded-full hover:-translate-y-0.5 hover:shadow-brutal active:translate-y-0 active:shadow-none': variant === 'primary',
                        'bg-transparent text-black border-2 border-black rounded-full hover:bg-black/5 hover:-translate-y-0.5 hover:shadow-brutal-sm active:translate-y-0 active:shadow-none': variant === 'outline',
                        'bg-transparent text-black hover:bg-black/5': variant === 'ghost',
                        'h-10 px-4 text-sm': size === 'sm',
                        'h-12 px-6 text-base': size === 'md',
                        'h-14 px-8 text-lg': size === 'lg',
                    },
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';
