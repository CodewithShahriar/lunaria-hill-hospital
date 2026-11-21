import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  className?: string;
  delay?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'left',
  className = '',
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const translateClass = direction === 'left' ? '-translate-x-12 sm:-translate-x-16' : 'translate-x-12 sm:translate-x-16';

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out transform will-change-transform will-change-opacity ${
        isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${translateClass}`
      } ${className}`}
    >
      {children}
    </div>
  );
};

interface ScrollTextRevealProps {
  text: string;
  direction?: 'left' | 'right';
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  staggerMs?: number;
  baseDelayMs?: number;
}

export const ScrollTextReveal: React.FC<ScrollTextRevealProps> = ({
  text,
  direction = 'left',
  className = '',
  as = 'h2',
  staggerMs = 45,
  baseDelayMs = 100,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const words = text.split(' ');
  const Comp = as as any;

  return (
    <Comp ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            transitionDelay: `${baseDelayMs + (i * staggerMs)}ms`,
          }}
          className={`inline-block mr-1.5 transition-all duration-600 ease-out transform ${
            isVisible
              ? 'opacity-100 translate-x-0'
              : `opacity-0 ${direction === 'left' ? '-translate-x-4' : 'translate-x-4'}`
          }`}
        >
          {word}
        </span>
      ))}
    </Comp>
  );
};
