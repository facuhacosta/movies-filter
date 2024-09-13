import {
  RefObject, useEffect, useRef, useState,
} from 'react';

export function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>(
  onIntersect: (elementToObserve?: RefObject<T>) => void,
  stopOnIntersect: boolean = false,
): { elementToObserve: RefObject<T>, isIntesecting: boolean} {
  const elementToObserve = useRef<T>(null);
  const [isIntesecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      onIntersect(elementToObserve);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (stopOnIntersect) observer.observe(elementToObserve.current as HTMLElement);
        }
      });
    });

    observer.observe(elementToObserve.current as HTMLElement);
  }, []);

  return {
    elementToObserve,
    isIntesecting,
  };
}
