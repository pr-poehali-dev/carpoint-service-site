import { ReactNode, useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fade-in' | 'slide-in-left' | 'slide-in-right' | 'scale-in';
  className?: string;
  delay?: number;
}

export default function AnimatedSection({ 
  children, 
  animation = 'fade-in', 
  className = '',
  delay = 0 
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  return (
    <div 
      ref={ref}
      className={`${animation} ${isVisible ? 'visible' : ''} ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}