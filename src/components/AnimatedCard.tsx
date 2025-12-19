import { ReactNode, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  isVisible?: boolean;
  delay?: number;
  hoverEffect?: 'lift' | 'glow' | 'scale' | 'none';
}

export const AnimatedCard = forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ children, className, isVisible = true, delay = 0, hoverEffect = 'lift' }, ref) => {
    const hoverClasses = {
      lift: 'hover:-translate-y-2 hover:shadow-neon-purple active:scale-[0.98]',
      glow: 'hover:shadow-neon-purple hover:border-primary active:scale-[0.98]',
      scale: 'hover:scale-[1.02] active:scale-[0.98]',
      none: '',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'transition-all duration-500 ease-out',
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
          hoverClasses[hoverEffect],
          'touch-manipulation',
          className
        )}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    );
  }
);

AnimatedCard.displayName = 'AnimatedCard';
