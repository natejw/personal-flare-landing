
import { useEffect, useRef } from 'react';

interface UseScrollAnimationProps {
  threshold?: number;
  rootMargin?: string;
}

export const useScrollAnimation = (
  { threshold = 0.1, rootMargin = "0px" }: UseScrollAnimationProps = {}
) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return ref;
};

export const staggeredAnimation = (index: number) => {
  return {
    style: {
      animationDelay: `${index * 0.1}s`,
    },
    className: "opacity-0"
  };
};
